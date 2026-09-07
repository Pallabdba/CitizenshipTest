import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, Loader2, KeyRound, Eye, EyeOff } from "lucide-react";

const NAVY = "#002F6C";

export default function ResetPasswordPage() {
  const { updatePassword } = useAuth();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password !== confirm) { setError("Passwords do not match"); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters"); return; }
    setLoading(true);
    const { error } = await updatePassword(password);
    if (error) setError(error);
    else setDone(true);
    setLoading(false);
  };

  if (done) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="w-full max-w-sm text-center space-y-5">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold">Password updated</h2>
          <p className="text-muted-foreground text-sm">
            Your password has been changed. You are now signed in.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-sm space-y-7">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Set new password</h1>
          <p className="text-muted-foreground text-sm">Choose a strong password for your account.</p>
        </div>

        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="password">New password</Label>
            <div className="relative">
              <Input id="password" type={showPassword ? "text" : "password"} placeholder="Minimum 6 characters"
                value={password} onChange={e => setPassword(e.target.value)}
                required minLength={6} autoComplete="new-password" className="h-11 pr-10" />
              <button type="button"
                onClick={() => setShowPassword(v => !v)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
                tabIndex={-1}>
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="confirm">Confirm new password</Label>
            <div className="relative">
              <Input id="confirm" type={showConfirm ? "text" : "password"} placeholder="Repeat password"
                value={confirm} onChange={e => setConfirm(e.target.value)}
                required minLength={6} autoComplete="new-password" className="h-11 pr-10" />
              <button type="button"
                onClick={() => setShowConfirm(v => !v)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showConfirm ? "Hide password" : "Show password"}
                tabIndex={-1}>
                {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {error && (
            <Alert variant="destructive" className="py-2.5">
              <AlertDescription className="text-sm">{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full h-11 font-semibold text-white"
                  style={{ background: NAVY }} disabled={loading}>
            {loading
              ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Updating…</>
              : <><KeyRound className="h-4 w-4 mr-2" />Update Password</>}
          </Button>
        </form>
      </div>
    </div>
  );
}
