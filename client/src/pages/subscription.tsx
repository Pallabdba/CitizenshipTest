import { useEffect, useState, useCallback } from "react";
import { Check, Star, Crown, Shield, Zap, Lock, Award, ChevronRight, Sparkles, Copy, CheckCheck, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { useSubscription } from "@/context/SubscriptionContext";
import { useAuth } from "@/context/AuthContext";
import { LUCKY_OFFER, discountedPrice, daysLeftInMonth } from "@/lib/promo";

// Stripe Payment Links — LIVE MODE.
// Recreated Aug 2026 with "Allow promotion codes" enabled so LUCKY_OFFER.code
// (prefilled_promo_code) actually applies at checkout — the originals were
// created via the API and Stripe's dashboard can't toggle that setting on them.
const PAYMENT_LINKS: Record<string, string> = {
  weekly: "https://buy.stripe.com/fZu28sffE46v1FG53r8k802",
  monthly: "https://buy.stripe.com/eVq00kaZoauT1FG3Zn8k803",
};

function LuckyOfferBanner() {
  const [copied, setCopied] = useState(false);
  const days = daysLeftInMonth();

  const copy = useCallback(() => {
    navigator.clipboard.writeText(LUCKY_OFFER.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl p-[2px] shadow-lg">
      {/* Animated gradient border */}
      <div
        className="absolute inset-0 rounded-2xl animate-pulse"
        style={{
          background: "linear-gradient(135deg, #F5A200 0%, #FFD700 35%, #FF8C00 65%, #F5A200 100%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div
        className="relative rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        style={{
          background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fffbeb 100%)",
        }}
      >
        {/* Left: icon + headline */}
        <div className="flex items-center gap-3 flex-1">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-md"
            style={{ background: "linear-gradient(135deg, #F5A200, #FFD700)" }}
          >
            <Sparkles className="h-6 w-6 text-white drop-shadow" />
          </div>
          <div>
            <p className="font-bold text-amber-900 text-lg leading-tight">
              {new Date().toLocaleString("default", { month: "long" })} Lucky Offer — {LUCKY_OFFER.discountPct}% OFF
            </p>
            <p className="text-amber-700 text-sm">
              {LUCKY_OFFER.discountPct}% off your first Weekly or Monthly subscription — applied automatically at checkout
            </p>
          </div>
        </div>

        {/* Centre: promo code pill */}
        <button
          onClick={copy}
          className="flex items-center gap-2 rounded-xl border-2 border-dashed border-amber-400 bg-white px-4 py-2 shadow-sm hover:shadow-md transition-all group shrink-0"
        >
          <span className="font-mono font-bold text-amber-800 text-lg tracking-widest select-all">
            {LUCKY_OFFER.code}
          </span>
          {copied
            ? <CheckCheck className="h-4 w-4 text-green-600" />
            : <Copy className="h-4 w-4 text-amber-500 group-hover:text-amber-700 transition-colors" />}
        </button>

        {/* Right: countdown */}
        <div className="flex items-center gap-1.5 rounded-lg bg-amber-100 border border-amber-300 px-3 py-1.5 shrink-0">
          <Timer className="h-4 w-4 text-amber-700" />
          <span className="text-amber-800 font-semibold text-sm whitespace-nowrap">
            {days === 0 ? "Last day!" : `${days} day${days === 1 ? "" : "s"} left`}
          </span>
        </div>
      </div>
    </div>
  );
}

const PLANS = [
  {
    id: "free",
    name: "Free",
    desc: "Try before you commit",
    price: "$0",
    period: "forever",
    icon: Star,
    features: [
      { text: "2 practice test sets (40 questions)", ok: true },
      { text: "2 flashcard sets (40 cards)", ok: true },
      { text: "Official study guide PDF", ok: true },
      { text: "All 10 test sets (219 questions)", ok: false },
      { text: "All 10 flashcard sets (243 cards)", ok: false },
      { text: "Progress tracking per category", ok: false },
      { text: "Full test results history", ok: false },
      { text: "Explanations for wrong answers", ok: false },
    ],
    badge: undefined,
    cta: "Current Plan",
    ctaDisabled: true,
    highlight: false,
  },
  {
    id: "weekly",
    name: "Weekly",
    desc: "Full access for focused prep",
    price: "$3.99",
    period: "per week",
    coffeeNote: "Less than your morning coffee",
    icon: Zap,
    badge: "FLEXIBLE",
    features: [
      { text: "Everything in Free", ok: true },
      { text: "All 10 practice test sets", ok: true },
      { text: "All 10 flashcard sets (243 cards)", ok: true },
      { text: "Progress tracking per category", ok: true },
      { text: "Full test results history", ok: true },
      { text: "Explanations for wrong answers", ok: true },
      { text: "Sync across all your devices", ok: true },
      { text: "Cancel anytime", ok: true },
    ],
    cta: "Upgrade to Weekly",
    ctaDisabled: false,
    highlight: false,
  },
  {
    id: "monthly",
    name: "Monthly",
    desc: "Best value — lowest daily rate",
    price: "$9.99",
    period: "per month",
    coffeeNote: "Less than a coffee a week",
    icon: Crown,
    badge: "BEST VALUE",
    savings: "Save 37% vs weekly",
    features: [
      { text: "Everything in Free", ok: true },
      { text: "All 10 practice test sets", ok: true },
      { text: "All 10 flashcard sets (243 cards)", ok: true },
      { text: "Progress tracking per category", ok: true },
      { text: "Full test results history", ok: true },
      { text: "Explanations for wrong answers", ok: true },
      { text: "Sync across all your devices", ok: true },
      { text: "Cancel anytime", ok: true },
    ],
    cta: "Upgrade to Monthly",
    ctaDisabled: false,
    highlight: true,
  },
] as const;

const FAQS = [
  {
    q: "What's included in the free plan?",
    a: "The free plan gives you access to 2 practice test sets (40 questions), 2 flashcard sets, and the full official study guide PDF — enough to get started and see how the app works.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes. You can cancel at any time and you'll keep access until the end of your billing period. No questions asked.",
  },
  {
    q: "Is payment secure?",
    a: "Yes — payments are processed entirely by Stripe. We never see or store your card details.",
  },
  {
    q: "How accurate are the practice questions?",
    a: "All 219 questions are based directly on the official \"Australian Citizenship: Our Common Bond\" guide published by the Department of Home Affairs.",
  },
  {
    q: "Is my progress saved if I cancel?",
    a: "Your account and all data remain. If you cancel a paid plan, you'll revert to the free tier but your history stays in your account.",
  },
];

export default function SubscriptionPage() {
  const { toast } = useToast();
  const { tier, isPremium, refresh } = useSubscription();
  const { user } = useAuth();

  // If we've just come back from a successful Stripe checkout, re-fetch the
  // subscription (the webhook updates it server-side, usually within a
  // second or two of payment) and let the user know, then clean up the URL.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("upgraded") === "1") {
      toast({
        title: "Payment received!",
        description: "Finalizing your upgrade — this can take a few seconds.",
      });
      const timer = setTimeout(() => refresh(), 2500);
      const url = new URL(window.location.href);
      url.searchParams.delete("upgraded");
      window.history.replaceState({}, "", url.toString());
      return () => clearTimeout(timer);
    }
  }, []);

  const handleUpgrade = (planId: string) => {
    const link = PAYMENT_LINKS[planId];
    if (!link) return;

    if (!user) {
      toast({
        title: "Please sign in first",
        description: "Sign in or create an account, then come back to upgrade.",
      });
      return;
    }

    const url = new URL(link);
    url.searchParams.set("client_reference_id", user.id);
    if (user.email) url.searchParams.set("prefilled_email", user.email);
    if (LUCKY_OFFER.active) url.searchParams.set("prefilled_promo_code", LUCKY_OFFER.code);
    window.location.href = url.toString();
  };

  return (
    <div className="space-y-12 pb-16 lg:pb-6 max-w-5xl mx-auto">

      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold">Choose Your Plan</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Start free and upgrade when you want full access to every test, flashcard, and your complete progress history.
        </p>
      </div>

      {/* Lucky Offer banner */}
      {LUCKY_OFFER.active && <LuckyOfferBanner />}

      {/* Current plan banner */}
      {isPremium && (
        <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20">
          <Award className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            You're on the <strong className="capitalize">{tier}</strong> plan — you have full access to everything.
          </AlertDescription>
        </Alert>
      )}

      {/* Pricing cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {PLANS.map(plan => {
          const Icon = plan.icon;
          const isCurrent = plan.id === tier;

          return (
            <Card
              key={plan.id}
              className={`relative flex flex-col ${plan.highlight ? "border-2 border-primary shadow-xl" : ""}`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className={`px-3 py-1 font-semibold ${plan.highlight ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardContent className="pt-8 pb-6 flex flex-col gap-5">
                {/* Plan header */}
                <div className="text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${plan.highlight ? "bg-primary text-primary-foreground" : plan.id === "weekly" ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{plan.desc}</p>
                  <div className="mt-4">
                    {LUCKY_OFFER.active && plan.id !== "free" ? (() => {
                      const raw = parseFloat(plan.price.replace("$", ""));
                      return (
                        <div className="flex flex-col items-center gap-0.5">
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-bold text-amber-600">
                              {discountedPrice(raw)}
                            </span>
                            <span className="text-muted-foreground text-sm"> / {plan.period}</span>
                          </div>
                          <span className="text-sm text-muted-foreground line-through">{plan.price}</span>
                        </div>
                      );
                    })() : (
                      <>
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground text-sm"> / {plan.period}</span>
                      </>
                    )}
                  </div>
                  {LUCKY_OFFER.active && plan.id !== "free" && (
                    <div className="mt-1">
                      <Badge className="bg-amber-500 hover:bg-amber-500 text-white text-xs font-bold tracking-wide">
                        ✦ {LUCKY_OFFER.discountPct}% OFF THIS MONTH
                      </Badge>
                    </div>
                  )}
                  {"coffeeNote" in plan && plan.coffeeNote && !LUCKY_OFFER.active && (
                    <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-amber-700 dark:text-amber-400 font-medium">
                      <span>☕</span>
                      <span>{plan.coffeeNote}</span>
                    </div>
                  )}
                  {"savings" in plan && plan.savings && (
                    <Badge variant="destructive" className="mt-2 text-xs">{plan.savings}</Badge>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2.5 flex-1">
                  {plan.features.map(f => (
                    <li key={f.text} className={`flex items-start gap-2 text-sm ${f.ok ? "" : "text-muted-foreground/50"}`}>
                      {f.ok
                        ? <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        : <Lock className="h-4 w-4 shrink-0 mt-0.5" />
                      }
                      {f.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className="w-full"
                  variant={plan.highlight ? "default" : plan.id === "weekly" ? "secondary" : "outline"}
                  disabled={isCurrent || plan.ctaDisabled}
                  onClick={() => !plan.ctaDisabled && !isCurrent && handleUpgrade(plan.id)}
                >
                  {isCurrent ? "Current Plan" : plan.cta}
                  {!isCurrent && !plan.ctaDisabled && <ChevronRight className="h-4 w-4 ml-1" />}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
          <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <span className="text-blue-600 dark:text-blue-400">Secure &amp; Private</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
          <Check className="h-4 w-4 text-gray-900 dark:text-gray-100" />
          <span className="font-semibold text-gray-900 dark:text-gray-100">Cancel Anytime</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <Star className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <span className="text-amber-600 dark:text-amber-400">Official Guide Content</span>
        </div>
      </div>

      {/* FAQ */}
      <div className="space-y-4 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        {FAQS.map(faq => (
          <div key={faq.q} className="bg-card rounded-xl p-5 border">
            <h3 className="font-semibold mb-2">{faq.q}</h3>
            <p className="text-sm text-muted-foreground">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
