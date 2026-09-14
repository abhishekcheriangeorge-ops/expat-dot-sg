-- expat.sg monetization tables (Neon Postgres)
-- Applied automatically on first lead insert when DATABASE_URL is set.

CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  interest TEXT NOT NULL,
  message TEXT NOT NULL,
  budget_band TEXT,
  source TEXT NOT NULL DEFAULT 'advertise'
);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_interest_idx ON leads (interest);
