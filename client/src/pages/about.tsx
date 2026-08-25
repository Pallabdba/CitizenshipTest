import { useState, useCallback, useMemo } from "react";
import { reviews } from "@/lib/reviews-data";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen, Target, Clock, CheckCircle, Shield,
  ChevronRight, FileText, BarChart2, Award,
  Brain, Trophy, LogIn, UserPlus, Lock, Zap, Star,
  Sparkles, Copy, CheckCheck, Timer
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { LUCKY_OFFER, discountedPrice, daysLeftInMonth } from "@/lib/promo";
import { useSeo } from "@/lib/seo";

// IDs chosen to show a diverse set of regions in the carousel
const CAROUSEL_ROW1_IDS = [12, 9, 8, 26, 14, 6];   // Chinese, Indian, Irish, Japanese, Hispanic, Arab
const CAROUSEL_ROW2_IDS = [18, 28, 15, 49, 46, 3];  // Korean, Indian, White, Chinese, Arab, Hispanic

export default function AboutPage() {
  const { user } = useAuth();
  const [copied, setCopied] = useState(false);
  const days = daysLeftInMonth();

  useSeo({
    title:
      "Australian Citizenship Test Practice — Free Questions, Flashcards & Study Guide",
    description:
      "Free Australian citizenship test practice with 219 official-style questions, 10 full practice tests, 243 flashcards and the complete 'Our Common Bond' study guide. Start instantly, no sign-up required.",
    path: "/",
  });

  const carouselRows = useMemo(() => {
    const byId = Object.fromEntries(reviews.map(r => [r.id, r]));
    return [
      CAROUSEL_ROW1_IDS.map(id => byId[id]).filter(Boolean),
      CAROUSEL_ROW2_IDS.map(id => byId[id]).filter(Boolean),
    ];
  }, []);

  const copyCode = useCallback(() => {
    navigator.clipboard.writeText(LUCKY_OFFER.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b bg-white/90 dark:bg-slate-950/90 backdrop-blur">
        <div className="container mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-[#002F6C] rounded-lg">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-base">Australian Citizenship Test</span>
          </div>
          <nav className="flex items-center gap-2">
            {user ? (
              <a href="#pricing">
                <Button size="sm" variant="outline" className="gap-1.5 hidden md:flex font-bold" style={{ borderColor: "#F5A200", background: "#F5A200", color: "#000" }}>Pricing</Button>
              </a>
            ) : (
              <Link href="/login"><Button size="sm" className="gap-1.5"><UserPlus className="h-4 w-4" /> Sign In</Button></Link>
            )}
          </nav>
        </div>
      </header>

      {/* ── Lucky Offer Ribbon ─────────────────────────────────────────────── */}
      {LUCKY_OFFER.active && (
        <div
          className="px-4 py-2.5 flex flex-wrap items-center justify-center gap-3 text-sm font-medium"
          style={{ background: "linear-gradient(90deg, #F5A200 0%, #FFD700 50%, #F5A200 100%)" }}
        >
          <span className="flex items-center gap-1.5 text-amber-900 font-bold">
            <Sparkles className="h-4 w-4" />
            {new Date().toLocaleString("default", { month: "long" })} Lucky Offer — {LUCKY_OFFER.discountPct}% OFF your first Weekly or Monthly subscription
          </span>
          <button
            onClick={copyCode}
            className="flex items-center gap-1.5 bg-white/80 hover:bg-white rounded-lg px-3 py-1 font-mono font-bold text-amber-800 tracking-widest border border-amber-300 transition-all"
          >
            {LUCKY_OFFER.code}
            {copied
              ? <CheckCheck className="h-3.5 w-3.5 text-green-600" />
              : <Copy className="h-3.5 w-3.5 text-amber-600" />}
          </button>
          <span className="flex items-center gap-1 text-amber-900">
            <Timer className="h-3.5 w-3.5" />
            {days === 0 ? "Last day!" : `${days} day${days === 1 ? "" : "s"} left`}
          </span>
          <a href="#pricing" className="underline underline-offset-2 text-amber-900 hover:text-amber-700">
            See pricing ↓
          </a>
        </div>
      )}

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-4 text-center bg-hero">
        <div className="container mx-auto max-w-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#002F6C] rounded-2xl mb-4 shadow-lg">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 leading-tight tracking-tight">
            Pass Your{" "}
            <span style={{ color: "#002F6C" }} className="dark:text-blue-300">Australian Citizenship Test</span>
            {" "}First Time
          </h1>
          <p className="text-base text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
            Practice tests, flashcards and the official study guide — all in one place. Built around <strong>"Our Common Bond"</strong>, the same guide used in the real test.
          </p>
          {!user && (
            <div className="flex justify-center">
              <Link href="/login?mode=signup">
                <Button size="lg" className="gap-2 px-8">
                  Start Free — No Card Needed
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── Stats strip ────────────────────────────────────────────────────── */}
      <section className="py-8 px-4 border-y bg-muted/40">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "219", label: "Practice Questions" },
              { value: "10", label: "Full Practice Tests" },
              { value: "243", label: "Study Flashcards" },
              { value: "Free", label: "To Get Started" },
            ].map(s => (
              <div key={s.label} className="space-y-1">
                <div className="text-3xl font-bold" style={{ color: "#002F6C" }}>{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Test at a glance ───────────────────────────────────────────────── */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-center mb-5">The Real Test — What to Expect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: Target, title: "75% to Pass", desc: "15 out of 20 correct", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-950/30" },
              { icon: Shield, title: "5 Values Q's", desc: "All must be answered correctly — mandatory", color: "text-red-600", bg: "bg-red-50 dark:bg-red-950/30" },
              { icon: Clock, title: "45 Minutes", desc: "At a Department of Home Affairs office", color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-950/30" },
            ].map(r => (
              <div key={r.title} className={`${r.bg} rounded-xl p-4 text-center`}>
                <r.icon className={`h-7 w-7 ${r.color} mx-auto mb-2`} />
                <div className="font-bold mb-0.5">{r.title}</div>
                <div className="text-xs text-muted-foreground">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────────────── */}
      <section className="py-10 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl font-bold text-center mb-5">Everything You Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { icon: BookOpen, title: "Official Study Guide", desc: "The complete 'Our Common Bond' PDF built right into the app.", free: true },
              { icon: FileText, title: "All Practice Tests", desc: "Unlock all 10 practice tests with 219 questions for complete exam prep.", free: false },
              { icon: Brain, title: "All Flashcards", desc: "Unlock all 10 flashcard sets with 243 cards across all topics.", free: false },
              { icon: BarChart2, title: "Progress Tracking", desc: "Score trends and accuracy by category so you know exactly where to improve.", free: false },
              { icon: Trophy, title: "Full Results History", desc: "Review every past test with correct answers and explanations.", free: false },
              { icon: Zap, title: "Synced Across Devices", desc: "Start on your phone, continue on your laptop — always in sync.", free: false },
            ].map(f => (
              <div key={f.title} className="flex gap-3 p-4 bg-background rounded-xl border hover:shadow-sm transition-shadow">
                <div className="p-2 bg-primary/10 rounded-lg h-fit shrink-0">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-sm">{f.title}</h3>
                    {f.free
                      ? <Badge variant="secondary" className="text-xs">Free</Badge>
                      : <Badge className="text-xs gap-1 bg-[#002F6C] text-white border-0 hover:bg-[#002F6C]"><Lock className="h-2.5 w-2.5" />Premium</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-10 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl font-bold text-center mb-8">Simple, Honest Pricing</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {/* Free */}
            <div className="rounded-2xl border bg-background p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <Star className="h-5 w-5 text-slate-500" />
                </div>
                <div>
                  <p className="font-bold text-base">Free</p>
                  <p className="text-xs text-muted-foreground">Get started today</p>
                </div>
              </div>
              <div className="border-t pt-4">
                <span className="text-3xl font-extrabold">$0</span>
                <span className="text-muted-foreground text-sm"> / forever</span>
              </div>
              <ul className="space-y-2 text-sm flex-1">
                {[
                  { text: "2 practice test sets", ok: true },
                  { text: "2 flashcard sets", ok: true },
                  { text: "Official study guide", ok: true },
                  { text: "Progress tracking", ok: false },
                  { text: "Full results history", ok: false },
                ].map(f => (
                  <li key={f.text} className={`flex items-center gap-2 ${f.ok ? "" : "text-muted-foreground/40 line-through"}`}>
                    {f.ok ? <CheckCircle className="h-4 w-4 text-green-500 shrink-0" /> : <Lock className="h-3.5 w-3.5 shrink-0" />}
                    {f.text}
                  </li>
                ))}
              </ul>
              <Link href={user ? "/" : "/login?mode=signup"}>
                <Button className="w-full mt-2" variant="outline">{user ? "Current Plan" : "Get Started Free"}</Button>
              </Link>
            </div>

            {/* Weekly */}
            <div className="rounded-2xl border-2 p-6 flex flex-col gap-4 shadow-md" style={{ borderColor: "#4A6FA5", background: "#4A6FA5" }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.15)" }}>
                  <Zap className="h-5 w-5 text-[#F5A200]" />
                </div>
                <div>
                  <p className="font-bold text-base text-white">Weekly</p>
                  <p className="text-xs text-blue-200">Focused preparation</p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4">
                {LUCKY_OFFER.active ? (
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-[#FFD700]">{discountedPrice(3.99)}</span>
                      <span className="text-blue-200 text-sm"> / first week</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-300 text-sm line-through">$3.99</span>
                      <Badge className="bg-[#F5A200] text-[#002F6C] text-xs font-bold hover:bg-[#F5A200]">
                        {LUCKY_OFFER.discountPct}% OFF
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="text-3xl font-extrabold text-white">$3.99</span>
                    <span className="text-blue-200 text-sm"> / week</span>
                  </>
                )}
              </div>
              <ul className="space-y-2 text-sm flex-1">
                {["Everything in Free", "All 10 practice tests", "All 243 flashcards", "Progress tracking", "Full results history"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-blue-100">
                    <CheckCircle className="h-4 w-4 text-[#F5A200] shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href={user ? "/pricing" : "/login?mode=signup"}>
                <Button className="w-full font-semibold border-0 mt-2" style={{ background: "#F5A200", color: "#002F6C" }}>
                  {user ? "Upgrade to Weekly" : "Get Started"}
                </Button>
              </Link>
            </div>

            {/* Monthly */}
            <div className="rounded-2xl border-2 border-[#002F6C] bg-[#002F6C] text-white p-6 flex flex-col gap-4 relative shadow-lg">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1 rounded-full text-xs font-bold" style={{ background: "#F5A200", color: "#002F6C" }}>BEST VALUE</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-[#F5A200]" />
                </div>
                <div>
                  <p className="font-bold text-base">Monthly</p>
                  <p className="text-xs text-blue-300">Lowest daily rate</p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4">
                {LUCKY_OFFER.active ? (
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-[#FFD700]">{discountedPrice(9.99)}</span>
                      <span className="text-blue-300 text-sm"> / first month</span>

                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-blue-400 text-sm line-through">$9.99</span>
                      <Badge className="bg-[#F5A200] text-[#002F6C] text-xs font-bold hover:bg-[#F5A200]">
                        {LUCKY_OFFER.discountPct}% OFF
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="text-3xl font-extrabold">$9.99</span>
                    <span className="text-blue-300 text-sm"> / month</span>
                    <span className="ml-2 text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-semibold">Save 37%</span>
                  </>
                )}
              </div>
              <ul className="space-y-2 text-sm flex-1">
                {["Everything in Weekly", "All 10 practice tests", "All 243 flashcards", "Progress tracking", "Synced across devices"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-blue-100">
                    <CheckCircle className="h-4 w-4 text-[#F5A200] shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link href={user ? "/pricing" : "/login?mode=signup"}>
                <Button className="w-full font-semibold border-0 mt-2" style={{ background: "#F5A200", color: "#002F6C" }}>
                  {user ? "Upgrade to Monthly" : "Get Started"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scrolling Testimonials ─────────────────────────────────────────── */}
      <section className="py-10 overflow-hidden bg-muted/10">
        <h2 className="text-xl font-bold text-center mb-6">Loved by Future Australians 🇦🇺</h2>

        {carouselRows.map((row, rowIdx) => (
          <div key={rowIdx} className={`flex overflow-hidden ${rowIdx === 0 ? "mb-4" : ""}`}>
            <div className={`flex gap-4 ${rowIdx === 0 ? "animate-marquee-left" : "animate-marquee-right"}`}>
              {[...row, ...row].map((t, i) => (
                <div
                  key={i}
                  className="shrink-0 w-72 bg-background border rounded-xl p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-sm">{t.name}</p>
                      <div className="flex gap-0.5 mt-0.5">
                        {Array.from({ length: t.rating ?? 5 }).map((_, s) => (
                          <Star key={s} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">"{t.testimonial}"</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="py-10 px-4 text-white text-center"
               style={{ background: "linear-gradient(160deg, #002F6C 0%, #003DA6 100%)" }}>
        <div className="container mx-auto max-w-xl">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-2xl mb-3">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Ready to Become a Citizen?</h2>
          <p className="text-blue-200 mb-5 text-sm leading-relaxed">
            Start free today — no credit card, no commitment. Upgrade when you want everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {!user && (
              <Link href="/login?mode=signup">
                <Button size="lg" className="gap-2 px-8 border-0 font-semibold"
                        style={{ background: "#F5A200", color: "#002F6C" }}>
                  Take a free practice test
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>


      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="py-8 px-4 border-t text-center text-sm text-muted-foreground">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span>© {new Date().getFullYear()} Australian Citizenship Test</span>
          <span className="hidden sm:inline">·</span>
          <Link href="/help" className="hover:text-[#002F6C] underline underline-offset-2">
            Help &amp; FAQ
          </Link>
        </div>
      </footer>

    </div>
  );
}
