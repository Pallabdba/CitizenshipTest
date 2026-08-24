// Supabase Edge Function: stripe-webhook
//
// Receives Stripe webhook events and is the ONLY thing allowed to set a
// user's subscription tier (see supabase_stripe_migration.sql). Deploy with:
//   supabase functions deploy stripe-webhook --no-verify-jwt
//
// Required secrets (supabase secrets set ...):
//   STRIPE_SECRET_KEY       - Stripe secret key (sk_test_... or sk_live_...)
//   STRIPE_WEBHOOK_SECRET   - signing secret from the Stripe webhook endpoint (whsec_...)
// SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are injected automatically by Supabase.
//
// Email confirmations: NOT handled here on purpose. Turn on Stripe's own
// free, built-in receipt emails instead — Dashboard > Settings > Business >
// Customer emails > "Successful payments". Stripe then emails an itemized
// receipt for every successful charge directly from its own infrastructure,
// at no extra cost and no code required.

import Stripe from "npm:stripe@17.4.0";
import { createClient } from "npm:@supabase/supabase-js@2";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2024-06-20",
  httpClient: Stripe.createFetchHttpClient(),
});

const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;

const supabaseAdmin = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

// Map Stripe Price IDs -> app tier. These are LIVE MODE price IDs
// (account acct_1TXcDaK8aTm2guCN, product "AussieCitizenshipTest Premium").
const PRICE_TIER_MAP: Record<string, "weekly" | "monthly"> = {
  "price_1TsbRjK8aTm2guCNXY7OuIH7": "weekly",  // $3.99 AUD / week
  "price_1TsbRiK8aTm2guCN8qqAJjGv": "monthly", // $9.99 AUD / month
};

Deno.serve(async (req) => {
  const signature = req.headers.get("stripe-signature");
  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature!, webhookSecret);
  } catch (err) {
    console.error("Signature verification failed:", err);
    return new Response(`Webhook signature verification failed`, { status: 400 });
  }

  try {
    switch (event.type) {
      // Fires once, right after a customer completes checkout for a new subscription.
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        if (session.mode !== "subscription") break;

        const userId = session.client_reference_id;
        if (!userId) {
          console.error("checkout.session.completed with no client_reference_id", session.id);
          break;
        }

        const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
        const priceId = subscription.items.data[0]?.price?.id;
        const tier = PRICE_TIER_MAP[priceId ?? ""] ?? "monthly";
        const expiresAt = new Date(subscription.current_period_end * 1000).toISOString();

        const { error } = await supabaseAdmin
          .from("citizenship_user_profiles")
          .update({
            tier,
            tier_expires_at: expiresAt,
            stripe_customer_id: session.customer as string,
          })
          .eq("id", userId);

        if (error) console.error("Failed to update profile on checkout complete:", error);
        break;
      }

      // Fires on every successful renewal charge (and the very first charge too).
      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;
        const line = invoice.lines.data[0];
        const priceId = line?.price?.id;
        const periodEnd = line?.period?.end;
        if (!priceId || !periodEnd) break;

        const tier = PRICE_TIER_MAP[priceId] ?? "monthly";

        const { error } = await supabaseAdmin
          .from("citizenship_user_profiles")
          .update({
            tier,
            tier_expires_at: new Date(periodEnd * 1000).toISOString(),
          })
          .eq("stripe_customer_id", customerId);

        if (error) console.error("Failed to update profile on invoice paid:", error);
        break;
      }

      // Fires when a subscription is fully canceled (not just "cancels at period end").
      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        const { error } = await supabaseAdmin
          .from("citizenship_user_profiles")
          .update({ tier: "free", tier_expires_at: null })
          .eq("stripe_customer_id", customerId);

        if (error) console.error("Failed to downgrade profile on subscription deleted:", error);
        break;
      }

      default:
        // Ignore everything else.
        break;
    }
  } catch (err) {
    console.error("Webhook handler error:", err);
    return new Response("Webhook handler error", { status: 500 });
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { "Content-Type": "application/json" },
  });
});
