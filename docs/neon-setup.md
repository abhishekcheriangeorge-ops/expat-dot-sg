# Neon Postgres for expat.sg (Phase 5)

## Why Neon

Mutable monetization data only:

- Advertise / sponsorship **leads** (`leads` table)
- Future: dynamic inventory overrides (launch uses file-backed placements)

Guides, entities, and journeys stay on the filesystem.

## Provisioning status (this workspace)

Neon MCP and Vercel MCP both required interactive auth that was blocked in the
Phase 5 agent run (`needsAuth` / auth already handled). Vercel CLI was not
installed on PATH. **Launch is not blocked** — the app falls back to
`.data/leads.jsonl` when `DATABASE_URL` is unset.

## Recommended setup (Vercel Marketplace)

```bash
npm i -g vercel   # or: npx vercel …
vercel login
cd /path/to/expat-sg
vercel link
vercel integration add neon --yes --no-claim
vercel env pull --yes
```

That injects `DATABASE_URL` (and related Neon vars) into the Vercel project and
local `.env.local`.

## Manual Neon project

1. Create a project in the [Neon console](https://console.neon.tech) (prefer a
   region near Singapore / Vercel `sin1` if available).
2. Copy the **pooled** connection string.
3. Set locally:

```bash
cp .env.example .env.local
# paste DATABASE_URL=…
```

4. In Vercel → Project → Settings → Environment Variables, add the same
   `DATABASE_URL` for Preview + Production.

## Schema

SQL lives at `src/lib/db/schema.sql`. The lead writer also runs
`CREATE TABLE IF NOT EXISTS` on first Neon insert, so an empty database works
without a separate migrate step.

## File-backed fallback

When `DATABASE_URL` / `POSTGRES_URL` / `NEON_DATABASE_URL` are all unset:

| Surface | Behavior |
|---|---|
| `POST /api/leads` | Appends JSON lines to `.data/leads.jsonl` |
| `/advertise` | Shows storage backend as file |
| Build / launch | Succeeds without Neon credentials |

`.data/` is gitignored. Do not commit lead files.

## Verify

```bash
curl -s http://localhost:3000/api/leads
# → { "ok": true, "storage": "file" | "neon", … }

curl -s -X POST http://localhost:3000/api/leads \
  -H 'content-type: application/json' \
  -d '{"name":"Test","email":"test@example.com","interest":"featured_listing","message":"Hello from media kit test."}'
```
