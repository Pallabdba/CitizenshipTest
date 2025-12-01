import { Check, Star, Crown, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  regularPrice: number;
  period: string;
  icon: React.ReactNode;
  features: PlanFeature[];
  popular?: boolean;
  badge?: string;
  savings?: string;
}

const plans: SubscriptionPlan[] = [
  {
    id: "free",
    name: "Free Trial",
    description: "Try before you buy",
    price: 0,
    regularPrice: 0,
    period: "3 days",
    icon: <Star className="h-6 w-6" />,
    badge: "3 Days Free",
    features: [
      { text: "Access to 20 practice questions", included: true },
      { text: "1 practice test per day", included: true },
      { text: "Basic flashcards (20 cards)", included: true },
      { text: "Progress tracking", included: false },
      { text: "All study materials", included: false },
      { text: "Unlimited practice tests", included: false },
      { text: "Detailed explanations", included: false },
      { text: "Offline access", included: false },
    ],
  },
  {
    id: "weekly",
    name: "Weekly",
    description: "Perfect for quick preparation",
    price: 2.99,
    regularPrice: 5.99,
    period: "week",
    icon: <Zap className="h-6 w-6" />,
    badge: "50% OFF",
    savings: "Save 50%",
    features: [
      { text: "Access to 200+ practice questions", included: true },
      { text: "Unlimited practice tests", included: true },
      { text: "All 200+ flashcards", included: true },
      { text: "Progress tracking", included: true },
      { text: "All study materials", included: true },
      { text: "Detailed explanations", included: true },
      { text: "Offline access", included: true },
      { text: "Priority support", included: true },
    ],
  },
  {
    id: "monthly",
    name: "Monthly",
    description: "Best Value – Save 58%",
    price: 9.99,
    regularPrice: 23.99,
    period: "month",
    icon: <Crown className="h-6 w-6" />,
    popular: true,
    badge: "RECOMMENDED",
    savings: "Save 58%",
    features: [
      { text: "Access to 200+ practice questions", included: true },
      { text: "Unlimited practice tests", included: true },
      { text: "All 200+ flashcards", included: true },
      { text: "Progress tracking", included: true },
      { text: "All study materials", included: true },
      { text: "Detailed explanations", included: true },
      { text: "Offline access", included: true },
      { text: "Priority support", included: true },
    ],
  },
];

export default function Subscription() {
  const { toast } = useToast();

  const handleSubscribe = (plan: SubscriptionPlan) => {
    toast({
      title: "Coming Soon!",
      description: `Payment integration for ${plan.name} plan will be available soon. Thank you for your interest!`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            data-testid="text-page-title"
          >
            Choose Your Plan
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Prepare for your Australian Citizenship Test with confidence. Choose
            the plan that works best for you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative flex flex-col ${
                plan.popular
                  ? "border-primary border-2 shadow-xl scale-105 z-10"
                  : "border-border"
              }`}
              data-testid={`card-plan-${plan.id}`}
            >
              {plan.badge && (
                <Badge
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-bold ${
                    plan.popular
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                  data-testid={`badge-plan-${plan.id}`}
                >
                  {plan.badge}
                </Badge>
              )}

              <CardHeader className="text-center pb-4 pt-8">
                <div
                  className={`mx-auto mb-4 p-3 rounded-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {plan.icon}
                </div>
                <CardTitle
                  className="text-xl"
                  data-testid={`text-plan-name-${plan.id}`}
                >
                  {plan.name}
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-1">
                {/* Price */}
                <div className="text-center mb-6">
                  <div data-testid={`text-price-${plan.id}`}>
                    {plan.id === "free" ? (
                      <>
                        <span className="text-4xl font-bold text-foreground">
                          Free
                        </span>
                        <p className="text-sm text-muted-foreground mt-2">
                          for {plan.period}
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-lg text-muted-foreground line-through">
                            ${plan.regularPrice}
                          </span>
                          {plan.savings && (
                            <Badge
                              variant="destructive"
                              className="bg-red-500 text-white font-bold"
                            >
                              {plan.savings}
                            </Badge>
                          )}
                        </div>
                        <span className="text-4xl font-bold text-foreground">
                          ${plan.price}
                        </span>
                        <span className="text-muted-foreground">
                          /{plan.period}
                        </span>
                        <p className="text-sm text-muted-foreground mt-2">
                          Cancel anytime
                        </p>
                      </>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-2 text-sm ${
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground line-through"
                      }`}
                    >
                      <Check
                        className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                          feature.included
                            ? "text-primary"
                            : "text-muted-foreground/50"
                        }`}
                      />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "text-lg py-6" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  onClick={() => handleSubscribe(plan)}
                  data-testid={`button-subscribe-${plan.id}`}
                >
                  {plan.id === "free"
                    ? "Start Free Trial"
                    : plan.popular
                      ? "Get Best Value"
                      : "Subscribe Now"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto text-left space-y-6">
            <div className="bg-card rounded-lg p-4 border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-muted-foreground text-sm">
                Yes! You can cancel your subscription at any time. You'll
                continue to have access until the end of your billing period.
              </p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-muted-foreground text-sm">
                We accept all major credit cards, PayPal, and bank transfers.
                Payment integration coming soon!
              </p>
            </div>
            <div className="bg-card rounded-lg p-4 border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                How accurate are the practice questions?
              </h3>
              <p className="text-muted-foreground text-sm">
                All our questions are based on the official "Australian
                Citizenship: Our Common Bond" guide used by the Department of
                Home Affairs.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Trusted by thousands preparing for their citizenship test
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <span className="text-sm">Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5" />
              <span className="text-sm">Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
