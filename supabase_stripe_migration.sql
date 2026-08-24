-- ============================================================
-- Stripe subscription integration — run in Supabase SQL Editor
-- (after supabase_setup.sql has already been run)
-- ============================================================

-- 1. Track which Stripe customer a profile belongs to, so the webhook
--    can find the right user on renewal/cancellation events (which only
--    carry the Stripe customer id, not your Supabase user id).
ALTER TABLE citizenship_user_profiles
  ADD COLUMN IF NOT EXISTS stripe_customer_id TEXT;

CREATE INDEX IF NOT EXISTS idx_profiles_stripe_customer
  ON citizenship_user_profiles(stripe_customer_id);

-- 2. Lock down tier/tier_expires_at/stripe_customer_id so a signed-in user
--    can't just open devtools and grant themselves "monthly" for free.
--    The existing "Users can update own profile" policy allows updating
--    ANY column on their own row — this trigger silently reverts those
--    three columns back to their previous value unless the request comes
--    from the service role (i.e. the Stripe webhook function).
CREATE OR REPLACE FUNCTION protect_subscription_columns()
RETURNS TRIGGER AS $$
BEGIN
  IF auth.role() <> 'service_role' THEN
    NEW.tier := OLD.tier;
    NEW.tier_expires_at := OLD.tier_expires_at;
    NEW.stripe_customer_id := OLD.stripe_customer_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS protect_subscription_columns_trigger ON citizenship_user_profiles;
CREATE TRIGGER protect_subscription_columns_trigger
  BEFORE UPDATE ON citizenship_user_profiles
  FOR EACH ROW EXECUTE FUNCTION protect_subscription_columns();
