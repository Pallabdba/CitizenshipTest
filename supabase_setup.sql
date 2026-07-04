-- ============================================================
-- Australian Citizenship Pro — Supabase Table Setup
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor)
-- ============================================================

-- 1. User profiles (subscription tier)
CREATE TABLE IF NOT EXISTS citizenship_user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  tier TEXT NOT NULL DEFAULT 'free',           -- 'free' | 'weekly' | 'monthly'
  tier_expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO citizenship_user_profiles (id, tier)
  VALUES (NEW.id, 'free')
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- 2. Test sessions
CREATE TABLE IF NOT EXISTS citizenship_test_sessions (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  test_type TEXT DEFAULT 'practice',
  status TEXT DEFAULT 'in_progress',           -- 'in_progress' | 'completed'
  total_questions INTEGER DEFAULT 20,
  correct_answers INTEGER DEFAULT 0,
  score INTEGER DEFAULT 0,                     -- percentage 0-100
  is_passed BOOLEAN DEFAULT FALSE,
  start_time TIMESTAMPTZ DEFAULT NOW(),
  end_time TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Test answers
CREATE TABLE IF NOT EXISTS citizenship_test_answers (
  id BIGSERIAL PRIMARY KEY,
  session_id BIGINT NOT NULL REFERENCES citizenship_test_sessions(id) ON DELETE CASCADE,
  question_id INTEGER NOT NULL,
  selected_answer TEXT NOT NULL,               -- 'A' | 'B' | 'C' | 'D'
  is_correct BOOLEAN NOT NULL,
  time_spent INTEGER DEFAULT 0,               -- seconds
  answered_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. User progress per category
CREATE TABLE IF NOT EXISTS citizenship_user_progress (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  category_id INTEGER NOT NULL,               -- 1-4 matching the 4 parts
  total_questions INTEGER DEFAULT 0,
  correct_answers INTEGER DEFAULT 0,
  last_studied TIMESTAMPTZ DEFAULT NOW(),
  streak_days INTEGER DEFAULT 0,
  UNIQUE(user_id, category_id)
);

-- ============================================================
-- Row Level Security — users can only see/edit their own data
-- ============================================================

ALTER TABLE citizenship_user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE citizenship_test_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE citizenship_test_answers  ENABLE ROW LEVEL SECURITY;
ALTER TABLE citizenship_user_progress ENABLE ROW LEVEL SECURITY;

-- Profiles
CREATE POLICY "Users can read own profile"
  ON citizenship_user_profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile"
  ON citizenship_user_profiles FOR UPDATE USING (auth.uid() = id);

-- Sessions
CREATE POLICY "Users can read own sessions"
  ON citizenship_test_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own sessions"
  ON citizenship_test_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own sessions"
  ON citizenship_test_sessions FOR UPDATE USING (auth.uid() = user_id);

-- Answers
CREATE POLICY "Users can read own answers"
  ON citizenship_test_answers FOR SELECT
  USING (session_id IN (SELECT id FROM citizenship_test_sessions WHERE user_id = auth.uid()));
CREATE POLICY "Users can insert answers"
  ON citizenship_test_answers FOR INSERT
  WITH CHECK (session_id IN (SELECT id FROM citizenship_test_sessions WHERE user_id = auth.uid()));

-- Progress
CREATE POLICY "Users can read own progress"
  ON citizenship_user_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress"
  ON citizenship_user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own progress"
  ON citizenship_user_progress FOR UPDATE USING (auth.uid() = user_id);

-- ============================================================
-- Indexes for performance
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_sessions_user_id   ON citizenship_test_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_answers_session_id  ON citizenship_test_answers(session_id);
CREATE INDEX IF NOT EXISTS idx_progress_user_id    ON citizenship_user_progress(user_id);
