import { useState } from "react";
import { Link } from "wouter";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  BookOpen, Loader2, CheckCircle, ArrowLeft,
  LogIn, UserPlus, Shield, BarChart3, BookMarked,
} from "lucide-react";

interface AuthPageProps { defaultMode?: "signin" | "signup" }

const NAVY = "#002F6C";
const GOLD  = "#F5A200";

const perks = [
  { icon: BookMarked, text: "260+ official practice questions from the study guide" },
  { icon: Shield,     text: "Track your score and progress per category" },
  { icon: BarChart3,  text: "Full results history with correct answers & explanations" },
];

export default function AuthPage({ defaultMode = "signin" }: AuthPageProps) {
  const { signIn, signUp } = useAuth();
  const [mode, setMode] = useState<"signin" | "signup">(defaultMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    if (mode === "signin") {
      const { error } = await signIn(email, password);
      if (error) setError(error);
    } else {
      const { error, needsConfirmation } = await signUp(email, password);
      if (error) setError(error);
      else if (needsConfirmation) setConfirmed(true);
    }
    setLoading(false);
  };

  if (confirmed) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-sm text-center space-y-5">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold">Check your email</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We sent a confirmation link to <strong>{email}</strong>.
            Click it to activate your account, then come back and sign in.
          </p>
          <Button variant="outline" className="w-full"
            onClick={() => { setConfirmed(false); setMode("signin"); }}>
            Back to Sign In
          </Button>
          <Link href="/about">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to About
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background">

      {/* ── Left — Australian navy panel ──────────────────────────────────── */}
      <div className="hidden lg:flex lg:w-[42%] flex-col justify-between p-12"
           style={{ background: `linear-gradient(160deg, ${NAVY} 0%, #003DA6 100%)` }}>
        <div>
          {/* Logo */}
          <Link href="/about">
            <div className="flex items-center gap-3 mb-14 cursor-pointer group">
              {/* Flag stripe */}
              <div className="flex flex-col gap-1">
                <div className="w-6 h-1.5 rounded-sm" style={{ background: GOLD }} />
                <div className="w-6 h-1.5 rounded-sm bg-white/70" />
                <div className="w-6 h-1.5 rounded-sm" style={{ background: GOLD }} />
              </div>
              <BookOpen className="h-6 w-6" style={{ color: GOLD }} />
              <span className="text-white font-bold text-lg group-hover:text-blue-100 transition-colors">
                Australian Citizenship Pro
              </span>
            </div>
          </Link>

          <h2 className="text-3xl font-extrabold text-white leading-tight mb-5">
            Prepare with confidence.<br />
            <span style={{ color: GOLD }}>Pass on your first attempt.</span>
          </h2>
          <p className="text-blue-200 leading-relaxed mb-10 text-sm">
            Join thousands of permanent residents using the most comprehensive
            Australian citizenship test prep app — built around the official study guide.
          </p>

          <div className="space-y-5">
            {perks.map(p => (
              <div key={p.text} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                     style={{ background: `${GOLD}22` }}>
                  <p.icon className="h-5 w-5" style={{ color: GOLD }} />
                </div>
                <span className="text-blue-100 text-sm">{p.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Southern Cross asterism — decorative */}
        <div className="flex items-center gap-3">
          <div className="flex gap-2 opacity-40">
            {[14, 10, 12, 10, 8].map((s, i) => (
              <span key={i} className="text-white font-bold" style={{ fontSize: s }}>✦</span>
            ))}
          </div>
          <p className="text-blue-400 text-xs">
            Not affiliated with the Australian Government
          </p>
        </div>
      </div>

      {/* ── Right — form ─────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col">
        {/* Top nav */}
        <div className="flex items-center justify-between p-5 lg:p-8">
          <Link href="/about">
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          </Link>
          {/* Mobile brand */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="flex flex-col gap-0.5">
              <div className="w-4 h-1 rounded-sm" style={{ background: GOLD }} />
              <div className="w-4 h-1 rounded-sm" style={{ background: NAVY }} />
              <div className="w-4 h-1 rounded-sm" style={{ background: GOLD }} />
            </div>
            <span className="font-bold text-sm">Citizenship Pro</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {mode === "signin" ? (
              <>No account?{" "}
                <button className="font-semibold hover:underline transition-colors"
                        style={{ color: NAVY }}
                        onClick={() => { setMode("signup"); setError(null); }}>
                  Sign up free
                </button>
              </>
            ) : (
              <>Have an account?{" "}
                <button className="font-semibold hover:underline transition-colors"
                        style={{ color: NAVY }}
                        onClick={() => { setMode("signin"); setError(null); }}>
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 flex items-center justify-center px-5 py-8 lg:px-14">
          <div className="w-full max-w-sm space-y-7">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight">
                {mode === "signin" ? "Welcome back" : "Create your account"}
              </h1>
              <p className="text-muted-foreground text-sm">
                {mode === "signin"
                  ? "Sign in to continue your citizenship test preparation"
                  : "Start free — no credit card required"}
              </p>
            </div>

            <form onSubmit={submit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-medium">Email address</Label>
                <Input id="email" type="email" placeholder="you@example.com"
                  value={email} onChange={e => setEmail(e.target.value)}
                  required autoComplete="email" className="h-11" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <Input id="password" type="password"
                  placeholder={mode === "signup" ? "Minimum 6 characters" : "••••••••"}
                  value={password} onChange={e => setPassword(e.target.value)}
                  required minLength={6}
                  autoComplete={mode === "signin" ? "current-password" : "new-password"}
                  className="h-11" />
              </div>

              {error && (
                <Alert variant="destructive" className="py-2.5">
                  <AlertDescription className="text-sm">{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full h-11 font-semibold text-white"
                      style={{ background: NAVY }} disabled={loading}>
                {loading ? (
                  <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Please wait…</>
                ) : mode === "signin" ? (
                  <><LogIn className="h-4 w-4 mr-2" />Sign In</>
                ) : (
                  <><UserPlus className="h-4 w-4 mr-2" />Create Free Account</>
                )}
              </Button>
            </form>

            {/* Divider + note */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px" style={{ background: GOLD, opacity: 0.3 }} />
                <div className="flex gap-1">
                  <div className="w-3 h-0.5 rounded" style={{ background: GOLD, opacity: 0.5 }} />
                  <div className="w-3 h-0.5 rounded" style={{ background: NAVY, opacity: 0.3 }} />
                  <div className="w-3 h-0.5 rounded" style={{ background: GOLD, opacity: 0.5 }} />
                </div>
                <div className="flex-1 h-px" style={{ background: GOLD, opacity: 0.3 }} />
              </div>
              <p className="text-center text-xs text-muted-foreground">
                Independent study tool — not affiliated with the Australian Government.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
