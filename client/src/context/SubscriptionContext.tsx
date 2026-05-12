import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "./AuthContext";

export type Tier = "free" | "weekly" | "monthly";

interface SubscriptionContextType {
  tier: Tier;
  tierExpiresAt: Date | null;
  loading: boolean;
  isPremium: boolean;
  canAccess: (feature: "all_tests" | "all_flashcards" | "progress_history" | "results_history") => boolean;
  refresh: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType | null>(null);

// Free tier: first 2 test sets + first 2 flashcard sets only
const FREE_LIMITS = {
  all_tests: false,
  all_flashcards: false,
  progress_history: false,
  results_history: false,
} as const;

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [tier, setTier] = useState<Tier>("free");
  const [tierExpiresAt, setTierExpiresAt] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    if (!user) { setLoading(false); return; }

    const { data, error } = await supabase
      .from("citizenship_user_profiles")
      .select("tier, tier_expires_at")
      .eq("id", user.id)
      .maybeSingle();

    if (!error && data) {
      const expires = data.tier_expires_at ? new Date(data.tier_expires_at) : null;
      const isExpired = expires ? expires < new Date() : false;
      setTier(isExpired ? "free" : (data.tier as Tier));
      setTierExpiresAt(expires);
    } else if (!data) {
      // Profile not yet created (trigger may be slow) — default free
      setTier("free");
    }
    setLoading(false);
  }, [user]);

  useEffect(() => { refresh(); }, [refresh]);

  const isPremium = tier === "weekly" || tier === "monthly";

  const canAccess = (feature: keyof typeof FREE_LIMITS) =>
    isPremium || FREE_LIMITS[feature];

  return (
    <SubscriptionContext.Provider
      value={{ tier, tierExpiresAt, loading, isPremium, canAccess, refresh }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const ctx = useContext(SubscriptionContext);
  if (!ctx) throw new Error("useSubscription must be inside SubscriptionProvider");
  return ctx;
}
