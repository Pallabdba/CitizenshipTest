import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen, Target, Clock, CheckCircle, Shield,
  ChevronRight, FileText, BarChart2, Award,
  Brain, Trophy, LogIn, UserPlus, AlertCircle,
  Globe, Users, Star, Zap, Lock
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function AboutPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
        <div className="container mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-blue-600 rounded-lg">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-base leading-none block">Australian Citizenship Pro</span>
              <span className="text-xs text-muted-foreground hidden sm:block">Official test preparation</span>
            </div>
          </div>
          <nav className="flex items-center gap-2">
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground hidden md:block px-3">
              Pricing
            </a>
            <a href="#what-is-the-test" className="text-sm text-muted-foreground hover:text-foreground hidden md:block px-3">
              About the Test
            </a>
            {user ? (
              <Link href="/">
                <Button size="sm" className="gap-1.5">
                  Dashboard <ChevronRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="gap-1.5">
                    <LogIn className="h-4 w-4" /> Sign In
                  </Button>
                </Link>
                <Link href="/login?mode=signup">
                  <Button size="sm" className="gap-1.5">
                    <UserPlus className="h-4 w-4" /> Get Started Free
                  </Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 text-center overflow-hidden bg-hero">
        <div className="relative container mx-auto max-w-3xl">
          <Badge className="mb-5 gap-1.5 border-[#002F6C]/20 bg-[#002F6C]/8 text-[#002F6C] dark:border-blue-700 dark:bg-blue-950/50 dark:text-blue-300" variant="outline">
            <Globe className="h-3.5 w-3.5" />
            Trusted by permanent residents across Australia
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            The Smarter Way to Prepare for Your{" "}
            <span style={{ color: "#002F6C" }} className="dark:text-blue-300">Australian Citizenship Test</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            You've lived here, built your life here — now it's time to make it official.
            Don't let the citizenship test hold you back. Prepare with confidence using the only
            app built entirely around the <strong>official "Our Common Bond" study guide</strong>.
          </p>
          <p className="text-base text-muted-foreground mb-10 max-w-xl mx-auto">
            260+ practice questions · 210+ flashcards · Full study guide · Per-user progress tracking
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={user ? "/" : "/login?mode=signup"}>
              <Button size="lg" className="gap-2 px-8">
                {user ? "Go to Dashboard" : "Start Free — No Card Needed"}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#what-is-the-test">
              <Button size="lg" variant="outline" className="px-8">
                What is the citizenship test?
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── Social proof strip ─────────────────────────────────────────────── */}
      <section className="py-8 px-4 border-y bg-muted/40">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "260+", label: "Practice Questions" },
              { value: "10", label: "Full Practice Tests" },
              { value: "210+", label: "Study Flashcards" },
              { value: "Free", label: "To Get Started" },
            ].map((s) => (
              <div key={s.label} className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold" style={{ color: "#002F6C" }}>{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What is the test? ──────────────────────────────────────────────── */}
      <section id="what-is-the-test" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">What Is the Australian Citizenship Test?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              If you're a permanent resident applying for Australian citizenship, you must pass this test
              before your application is approved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" /> About the Test
                </h3>
                <ul className="space-y-3 text-sm">
                  {[
                    "Computer-based test at a Department of Home Affairs office",
                    "20 multiple-choice questions drawn from the official study guide",
                    "Covers 4 categories: history, democracy, government, and Australian values",
                    "Available in English only",
                    "You must book a test appointment in advance",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6 space-y-4">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500" /> Pass Requirements
                </h3>
                <ul className="space-y-3 text-sm">
                  {[
                    { text: "Score at least 75% — 15 out of 20 questions correct", highlight: true },
                    { text: "Answer ALL 5 Australian values questions correctly (mandatory)", highlight: true },
                    { text: "Complete within the 45-minute time limit", highlight: false },
                    { text: "If you fail, you must wait and rebook — there is no instant retake", highlight: false },
                    { text: "Most people underestimate the test and fail on their first attempt", highlight: false },
                  ].map(item => (
                    <li key={item.text} className={`flex items-start gap-2 ${item.highlight ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                      <Shield className={`h-4 w-4 shrink-0 mt-0.5 ${item.highlight ? "text-red-500" : "text-muted-foreground/50"}`} />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Pass requirements cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Target, title: "75% Pass Mark", desc: "15 out of 20 correct", color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-950/30" },
              { icon: Shield, title: "Values Questions", desc: "All 5 must be correct — no exceptions", color: "text-red-600", bg: "bg-red-50 dark:bg-red-950/30" },
              { icon: Clock, title: "45 Minutes", desc: "Strict time limit at the test centre", color: "text-amber-600", bg: "bg-amber-50 dark:bg-amber-950/30" },
            ].map(r => (
              <div key={r.title} className={`${r.bg} rounded-xl p-5 text-center`}>
                <div className="flex justify-center mb-3">
                  <r.icon className={`h-7 w-7 ${r.color}`} />
                </div>
                <div className="font-bold mb-1">{r.title}</div>
                <div className="text-sm text-muted-foreground">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is this for? ───────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Who Is This App For?</h2>
            <p className="text-muted-foreground">Australian Citizenship Pro is built for one purpose</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Users,
                title: "Permanent Residents",
                desc: "You've met the residency requirements and are ready to apply. This app helps you clear the final hurdle — the citizenship test.",
              },
              {
                icon: Globe,
                title: "New to Studying",
                desc: "Haven't touched a book in years? Start with flashcards and the study guide, then move to practice tests at your own pace.",
              },
              {
                icon: Trophy,
                title: "First-Time Passers",
                desc: "Want to pass on the very first attempt? Practice until you're consistently scoring 90%+ before booking your real test.",
              },
            ].map(r => (
              <Card key={r.title} className="text-center border-0 shadow-sm">
                <CardContent className="pt-7 pb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <r.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Everything You Need in One App</h2>
            <p className="text-muted-foreground">Built entirely around the official Department of Home Affairs study guide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: FileText,
                title: "10 Full Practice Tests",
                desc: "Category-focused tests and mixed tests that mirror the real exam — 20 questions each. Free users get 2 tests; premium gets all 10.",
                free: true,
              },
              {
                icon: Brain,
                title: "210+ Study Flashcards",
                desc: "Key facts, dates, names, and concepts in a flip-card format. Free users get the first 2 sets; premium unlocks all 10 sets.",
                free: true,
              },
              {
                icon: BookOpen,
                title: "Official Study Guide PDF",
                desc: "Read the complete 'Our Common Bond' document inside the app. Always available — even on the free plan.",
                free: true,
              },
              {
                icon: BarChart2,
                title: "Per-User Progress Tracking",
                desc: "See your accuracy per study category, your score trends over time, and exactly where to focus. Premium feature.",
                free: false,
              },
              {
                icon: Trophy,
                title: "Full Results History",
                desc: "Review every past test: which questions you got wrong, the correct answers, and clear explanations. Premium feature.",
                free: false,
              },
              {
                icon: Zap,
                title: "Synced Across Devices",
                desc: "Your account and results are saved to the cloud. Start on your phone, continue on your laptop — your progress is always there.",
                free: false,
              },
            ].map(f => (
              <div key={f.title} className="flex gap-4 p-5 bg-background rounded-xl border hover:shadow-sm transition-shadow">
                <div className="p-2 bg-primary/10 rounded-lg h-fit shrink-0">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{f.title}</h3>
                    {f.free
                      ? <Badge variant="secondary" className="text-xs shrink-0">Free</Badge>
                      : <Badge variant="outline" className="text-xs shrink-0 gap-1"><Lock className="h-2.5 w-2.5" />Premium</Badge>
                    }
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Study topics ───────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">4 Official Study Categories</h2>
            <p className="text-muted-foreground">All test questions come from these four parts of the official guide</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                part: "Part 1", title: "Australia and its People",
                topics: ["Aboriginal and Torres Strait Islander peoples", "European settlement and Federation", "States, territories and capital cities", "National symbols and landmarks"],
              },
              {
                part: "Part 2", title: "Democratic Beliefs, Rights & Liberties",
                topics: ["How Australian democracy works", "Rights, freedoms and responsibilities", "Anti-discrimination laws", "Role of citizens and permanent residents"],
              },
              {
                part: "Part 3", title: "Government and the Law",
                topics: ["Three levels of government", "Parliament, elections and voting", "Australian courts and legal system", "The Australian Constitution"],
              },
              {
                part: "Part 4", title: "Australian Values",
                topics: ["Respect, equality and inclusion", "Rule of law and democracy", "Freedom of speech and religion", "Mateship and a fair go for all"],
              },
            ].map(t => (
              <Card key={t.part} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-5 pb-5">
                  <Badge variant="outline" className="mb-3">{t.part}</Badge>
                  <h3 className="font-bold mb-3">{t.title}</h3>
                  <ul className="space-y-2">
                    {t.topics.map(topic => (
                      <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Simple, Honest Pricing</h2>
            <p className="text-muted-foreground">Start free. Upgrade only if you want full access.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Free */}
            <Card className="border">
              <CardContent className="pt-7 pb-7">
                <div className="text-center mb-6">
                  <Star className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                  <h3 className="text-xl font-bold">Free</h3>
                  <p className="text-sm text-muted-foreground mt-1">Start exploring with no commitment</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-muted-foreground"> / forever</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6 text-sm">
                  {[
                    { text: "2 practice test sets (40 questions)", ok: true },
                    { text: "2 flashcard sets (40 cards)", ok: true },
                    { text: "Official study guide PDF", ok: true },
                    { text: "All 10 test sets", ok: false },
                    { text: "All 10 flashcard sets (210+ cards)", ok: false },
                    { text: "Progress tracking per category", ok: false },
                    { text: "Full results history", ok: false },
                  ].map(f => (
                    <li key={f.text} className={`flex items-center gap-2 ${f.ok ? "" : "text-muted-foreground/60"}`}>
                      {f.ok
                        ? <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        : <Lock className="h-4 w-4 shrink-0" />
                      }
                      {f.text}
                    </li>
                  ))}
                </ul>
                <Link href={user ? "/" : "/login?mode=signup"}>
                  <Button className="w-full" variant="outline">
                    {user ? "You're on Free" : "Get Started Free"}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Weekly */}
            <Card className="border">
              <CardContent className="pt-7 pb-7">
                <div className="text-center mb-6">
                  <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-bold">Weekly</h3>
                  <p className="text-sm text-muted-foreground mt-1">Perfect for short, focused preparation</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$3.99</span>
                    <span className="text-muted-foreground"> / week</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Cancel anytime</p>
                </div>
                <ul className="space-y-3 mb-6 text-sm">
                  {[
                    "Everything in Free",
                    "All 10 practice test sets",
                    "All 10 flashcard sets (210+ cards)",
                    "Progress tracking per category",
                    "Full results history with explanations",
                    "Synced across all devices",
                  ].map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={user ? "/pricing" : "/login?mode=signup"}>
                  <Button className="w-full" variant="outline">
                    {user ? "Upgrade to Weekly" : "Sign Up to Upgrade"}
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Monthly — highlighted */}
            <Card className="border-2 border-primary shadow-lg relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge className="px-4 py-1 bg-primary text-primary-foreground font-semibold">
                  BEST VALUE
                </Badge>
              </div>
              <CardContent className="pt-7 pb-7">
                <div className="text-center mb-6">
                  <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-bold">Monthly</h3>
                  <p className="text-sm text-muted-foreground mt-1">Full access, lowest daily rate</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">$9.99</span>
                    <span className="text-muted-foreground"> / month</span>
                  </div>
                  <Badge variant="destructive" className="mt-2 text-xs">Save 37% vs weekly</Badge>
                </div>
                <ul className="space-y-3 mb-6 text-sm">
                  {[
                    "Everything in Weekly",
                    "All 10 practice test sets",
                    "All 10 flashcard sets (210+ cards)",
                    "Progress tracking per category",
                    "Full results history with explanations",
                    "Synced across all devices",
                  ].map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={user ? "/pricing" : "/login?mode=signup"}>
                  <Button className="w-full">
                    {user ? "Upgrade to Monthly" : "Sign Up to Upgrade"}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            No credit card required to sign up. Payment integration coming soon — pricing shown is indicative.
          </p>
        </div>
      </section>

      {/* ── How to study ───────────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The 4-Step Preparation Method</h2>
            <p className="text-muted-foreground">Follow this order and you'll walk into the test room confident</p>
          </div>
          <div className="space-y-4">
            {[
              { step: "1", title: "Read the Official Study Guide", desc: "Start with the 'Our Common Bond' PDF built into this app. Read it once to understand the content before testing yourself. Available free." },
              { step: "2", title: "Memorise Key Facts with Flashcards", desc: "Go through the flashcard sets for all 4 categories. Focus on dates, names, numbers, and Australian values. Free users can access 2 sets." },
              { step: "3", title: "Practice Test by Category", desc: "Take the category-focused tests to find your weak spots. Don't skip this — knowing WHERE you're weak is as important as practising." },
              { step: "4", title: "Simulate the Real Test", desc: "Take mixed timed practice tests. When you're consistently scoring 90%+ with the timer running — you're ready. Book your test." },
            ].map(s => (
              <div key={s.step} className="flex gap-5 p-5 bg-background rounded-xl border">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 text-white text-center"
               style={{ background: "linear-gradient(160deg, #002F6C 0%, #003DA6 100%)" }}>
        <div className="container mx-auto max-w-2xl">
          <Award className="h-14 w-14 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Citizenship Journey Deserves the Best Preparation
          </h2>
          <p className="text-blue-200 mb-8 text-lg leading-relaxed">
            Start free today. Explore practice tests, flashcards, and the study guide —
            no credit card, no commitment. Upgrade when you want full access.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href={user ? "/" : "/login?mode=signup"}>
              <Button size="lg" className="gap-2 px-8 border-0 font-semibold"
                      style={{ background: "#F5A200", color: "#002F6C" }}>
                {user ? "Go to Dashboard" : "Start Free — No Card Needed"}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
            {!user && (
              <Link href="/login">
                <Button size="lg" variant="outline"
                  className="gap-2 px-8 border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="py-8 px-4 border-t text-center text-sm text-muted-foreground space-y-1">
        <p>© {new Date().getFullYear()} Australian Citizenship Pro — Independent study tool, not affiliated with the Australian Government or the Department of Home Affairs.</p>
        <p>
          Official test information:{" "}
          <a href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/prepare-for-test" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Department of Home Affairs
          </a>
        </p>
      </footer>
    </div>
  );
}
