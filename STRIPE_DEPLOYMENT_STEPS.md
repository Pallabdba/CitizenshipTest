# Stripe Subscription — Deployment Steps

Everything on the Stripe and code side is already built. Three things are left, and they all happen on your machine (I don't have terminal/DB access to your Supabase project).

## 1. Run the SQL migration

Open your Supabase project → SQL Editor → paste and run:

`supabase_stripe_migration.sql`

This adds a `stripe_customer_id` column and a trigger that stops anyone from granting themselves "monthly" access by editing requests in devtools — only the webhook (below) can change `tier`.

## 2. Deploy the webhook function

From the project root (needs the [Supabase CLI](https://supabase.com/docs/guides/cli) installed):

```bash
supabase login
supabase link --project-ref gddcdfwhmxnenzdrkkac

supabase secrets set STRIPE_SECRET_KEY=sk_test_...        # from Stripe Dashboard > Developers > API keys > "Reveal test key" (I did not copy this — grab it yourself)
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_GdPY3Jt0rZtDoFeODZAtIxvy0QFmRgTj   # already generated, see step 3

supabase functions deploy stripe-webhook --no-verify-jwt
```

## 3. Webhook endpoint — already created

I set this up in your Stripe test-mode dashboard:

- **Endpoint:** `https://gddcdfwhmxnenzdrkkac.supabase.co/functions/v1/stripe-webhook`
- **Listening to:** `checkout.session.completed`, `invoice.paid`, `customer.subscription.deleted`
- **Signing secret:** `whsec_GdPY3Jt0rZtDoFeODZAtIxvy0QFmRgTj` (paste into step 2 above)

Nothing to do here unless you want to double check it in Dashboard → Developers → Webhooks.

## What's already done for you

- Stripe product "AussieCitizenshipTest Premium" with two prices: $3.99 AUD/week, $9.99 AUD/month
- Two Payment Links, each redirecting back to `/subscription?upgraded=1` after payment
- `client/src/pages/subscription.tsx` — Upgrade buttons now redirect to the real Payment Links with the signed-in user's ID attached, and the page auto-refreshes their plan when they return
- `supabase/functions/stripe-webhook/index.ts` — verifies Stripe's signature and is the only thing allowed to set `tier` in your database
- Stripe's own free "Successful payments" receipt emails — turned on in test mode (Settings → Business → Customer emails)

## Before going live

1. Finish Stripe's "Verify your business" step (Setup guide in the dashboard) — needs your ABN/business details and bank account. Has to be you, not me.
2. Switch the dashboard to live mode and recreate the product + 2 prices + 2 payment links there (test and live are totally separate).
3. Turn on "Successful payments" emails again under live mode settings (it's a separate toggle from test mode).
4. Update the price IDs in `PRICE_TIER_MAP` inside `supabase/functions/stripe-webhook/index.ts`, and the two URLs in `PAYMENT_LINKS` inside `client/src/pages/subscription.tsx`, with the new live values.
5. Re-run `supabase secrets set STRIPE_SECRET_KEY=sk_live_...` and redeploy the function.
6. Add a live-mode webhook endpoint the same way (test and live webhooks are separate too) and update `STRIPE_WEBHOOK_SECRET`.
