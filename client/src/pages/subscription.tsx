import { Check, Star, Crown, Shield, Zap, Lock, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { useSubscription } from "@/context/SubscriptionContext";

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
      { text: "All 10 test sets (260+ questions)", ok: false },
      { text: "All 10 flashcard sets (210+ cards)", ok: false },
      { text: "Progress tracking per category", ok: false },
      { text: "Full test results history", ok: false },
      { text: "Explanations for wrong answers", ok: false },
    ],
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
    icon: Zap,
    badge: "FLEXIBLE",
    features: [
      { text: "Everything in Free", ok: true },
      { text: "All 10 practice test sets", ok: true },
      { text: "All 10 flashcard sets (210+ cards)", ok: true },
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
    icon: Crown,
    badge: "BEST VALUE",
    savings: "Save 37% vs weekly",
    features: [
      { text: "Everything in Free", ok: true },
      { text: "All 10 practice test sets", ok: true },
      { text: "All 10 flashcard sets (210+ cards)", ok: true },
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
    q: "When will payment be available?",
    a: "Payment processing is coming soon. You'll be notified when it's ready — pricing shown is final and will not change.",
  },
  {
    q: "How accurate are the practice questions?",
    a: "All 260+ questions are based directly on the official \"Australian Citizenship: Our Common Bond\" guide published by the Department of Home Affairs.",
  },
  {
    q: "Is my progress saved if I cancel?",
    a: "Your account and all data remain. If you cancel a paid plan, you'll revert to the free tier but your history stays in your account.",
  },
];

export default function SubscriptionPage() {
  const { toast } = useToast();
  const { tier, isPremium } = useSubscription();

  const handleUpgrade = (planId: string) => {
    toast({
      title: "Coming Soon",
      description: `Payment for the ${planId} plan will be available shortly. We'll email you when it's ready.`,
    });
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
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${plan.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{plan.desc}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground text-sm"> / {plan.period}</span>
                  </div>
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
                  variant={plan.highlight ? "default" : "outline"}
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
      <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        {[
          { icon: Shield, text: "Secure & Private" },
          { icon: Check, text: "Cancel Anytime" },
          { icon: Star, text: "Official Guide Content" },
        ].map(b => (
          <div key={b.text} className="flex items-center gap-2">
            <b.icon className="h-4 w-4" />
            {b.text}
          </div>
        ))}
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
