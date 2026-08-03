// ── LUCKY OFFER CONFIG ────────────────────────────────────────────────────────
// Flip `active` to false to kill the promo everywhere instantly.
// `code` must exactly match the Promotion Code you created in Stripe Dashboard.
export const LUCKY_OFFER = {
  active: true,
  code: "LUCKY30",
  discountPct: 30,
} as const;

export function discountedPrice(original: number): string {
  return "$" + (original * (1 - LUCKY_OFFER.discountPct / 100)).toFixed(2);
}

export function daysLeftInMonth(): number {
  const now = new Date();
  const last = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  return last.getDate() - now.getDate();
}
