import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen, Target, Clock, CheckCircle, Shield,
  ChevronRight, FileText, BarChart2, Award,
  Brain, Trophy, LogIn, UserPlus, Lock, Zap, Star
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function AboutPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b bg-white/90 dark:bg-slate-950/90 backdrop-blur">
        <div className="container mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-[#002F6C] rounded-lg">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-base">Australian Citizenship Pro</span>
          </div>
          <nav className="flex items-center gap-2">
            {user ? (
              <>
                <a href="#pricing">
                  <Button size="sm" variant="outline" className="gap-1.5 hidden md:flex font-bold" style={{ borderColor: "#F5A200", background: "#F5A200", color: "#000" }}>Pricing</Button>
                </a>
                <Link href="/">
                  <Button size="sm" className="gap-1.5" style={{ background: "#F5A200", color: "#002F6C" }}>
                    Dashboard <ChevronRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link href="/login"><Button variant="ghost" size="sm" className="gap-1.5"><LogIn className="h-4 w-4" /> Sign In</Button></Link>
                <Link href="/login?mode=signup"><Button size="sm" className="gap-1.5"><UserPlus className="h-4 w-4" /> Get Started Free</Button></Link>
              </>
            )}
          </nav>
        </div>
      </header>

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
              { value: "260+", label: "Practice Questions" },
              { value: "10", label: "Full Practice Tests" },
              { value: "210+", label: "Study Flashcards" },
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
          <p className="text-center text-xs text-muted-foreground mt-4">
            20 multiple-choice questions · 4 topic areas · Computer-based · English only
          </p>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────────────── */}
      <section className="py-10 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl font-bold text-center mb-1">Everything You Need</h2>
          <p className="text-center text-muted-foreground mb-5 text-sm">Free to start. Upgrade for full access.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { icon: FileText, title: "Practice Tests", desc: "10 full tests, 20 questions each — category-focused and mixed.", free: true },
              { icon: Brain, title: "Study Flashcards", desc: "210+ cards covering key facts, dates, names and values.", free: true },
              { icon: BookOpen, title: "Official Study Guide", desc: "The complete 'Our Common Bond' PDF built right into the app.", free: true },
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
                      : <Badge variant="outline" className="text-xs gap-1"><Lock className="h-2.5 w-2.5" />Premium</Badge>}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────────────────────── */}
      <section id="pricing" className="py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl font-bold text-center mb-1">Simple, Honest Pricing</h2>
          <p className="text-center text-muted-foreground mb-5 text-sm">Start free. Upgrade only when you want full access.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {/* Free */}
            <Card className="border">
              <CardContent className="pt-5 pb-5">
                <div className="text-center mb-4">
                  <Star className="h-7 w-7 text-muted-foreground mx-auto mb-2" />
                  <h3 className="text-xl font-bold">Free</h3>
                  <div className="mt-3"><span className="text-4xl font-bold">$0</span><span className="text-muted-foreground"> / forever</span></div>
                </div>
                <ul className="space-y-1.5 text-sm">
                  {[
                    { text: "2 practice test sets", ok: true },
                    { text: "2 flashcard sets", ok: true },
                    { text: "Official study guide", ok: true },
                    { text: "Progress tracking", ok: false },
                    { text: "Full results history", ok: false },
                  ].map(f => (
                    <li key={f.text} className={`flex items-center gap-2 ${f.ok ? "" : "text-muted-foreground/50"}`}>
                      {f.ok ? <CheckCircle className="h-4 w-4 text-green-500 shrink-0" /> : <Lock className="h-4 w-4 shrink-0" />}
                      {f.text}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Weekly */}
            <Card className="border">
              <CardContent className="pt-5 pb-5">
                <div className="text-center mb-4">
                  <Zap className="h-7 w-7 text-primary mx-auto mb-2" />
                  <h3 className="text-xl font-bold">Weekly</h3>
                  <p className="text-xs text-muted-foreground mt-1">Short, focused preparation</p>
                  <div className="mt-2"><span className="text-4xl font-bold">$3.99</span><span className="text-muted-foreground"> / week</span></div>
                </div>
                <ul className="space-y-1.5 text-sm">
                  {["Everything in Free", "All 10 practice tests", "All 210+ flashcards", "Progress tracking", "Full results history"].map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Monthly */}
            <Card className="border-2 border-primary shadow-lg relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge className="px-4 py-1 font-semibold" style={{ background: "#F5A200", color: "#002F6C" }}>BEST VALUE</Badge>
              </div>
              <CardContent className="pt-5 pb-5">
                <div className="text-center mb-4">
                  <Award className="h-7 w-7 text-primary mx-auto mb-2" />
                  <h3 className="text-xl font-bold">Monthly</h3>
                  <p className="text-xs text-muted-foreground mt-1">Full access, lowest daily rate</p>
                  <div className="mt-2"><span className="text-4xl font-bold">$9.99</span><span className="text-muted-foreground"> / month</span></div>
                  <Badge variant="destructive" className="mt-1.5 text-xs">Save 37% vs weekly</Badge>
                </div>
                <ul className="space-y-1.5 text-sm">
                  {["Everything in Weekly", "All 10 practice tests", "All 210+ flashcards", "Progress tracking", "Synced across devices"].map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
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
              <>
                <Link href="/login?mode=signup">
                  <Button size="lg" className="gap-2 px-8 border-0 font-semibold"
                          style={{ background: "#F5A200", color: "#002F6C" }}>
                    Start Free Now
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline"
                    className="gap-2 px-8 border-white/30 text-white hover:bg-white/10">
                    Sign In
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>


    </div>
  );
}
