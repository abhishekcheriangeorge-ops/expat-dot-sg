# expat.sg

The operating system for Singapore expat life — magazine-grade guides, directories, and dual journeys (Arriving + Living).

This is the **expat-dot-sg** codebase. It is deliberately distinct from the Grok search/JSON product (`expat-sg`).

## Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS** + Humidity Editorial design tokens (`src/app/globals.css`)
- **MDX** guides via `next-mdx-remote/rsc` (`content/guides/**`)
- **Zod**-validated entities (`content/entities/**`)
- **Framer Motion** primitives (`src/components/motion`)
- **Vercel** hosting (Singapore region `sin1`)
- **Neon Postgres** (Phase 5 — leads; file-backed fallback if unset)

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project layout

```
content/
  guides/           # MDX cornerstone articles
  entities/         # JSON: neighbourhoods, schools, clubs, services
  journeys/         # Arriving checklists + leaving playbook
  calendar/         # Events / kids calendar
  sponsored/        # Labeled advertorials + placements.json
src/
  app/              # App Router (/sponsored, /advertise, /api/leads, …)
  components/
    layout/         # SiteHeader, SiteFooter, SiteShell
    motion/         # FadeIn, Stagger, KenBurns
    journeys/       # Checklists + leaving playbook UI
    calendar/       # Events board
    tools/          # COL + EP threshold calculators
    sponsored/      # Sponsored post template
    advertise/      # Media kit inquiry form
  lib/
    fonts.ts        # Fraunces (display) + Manrope (sans)
    content/        # Zod schemas + loaders + featured helpers
    db/             # Neon client + lead store (file fallback)
    tools/          # Calculator pure functions
```

## Monetization (Phase 5)

- `/sponsored` — advertorial template + sample posts (always `#sponsored`)
- `/advertise` — media kit + inquiry form → `POST /api/leads`
- Featured helpers read entity `featured` / `sponsored` flags (no corpus rewrite)
- Lead storage: Neon when `DATABASE_URL` is set; else `.data/leads.jsonl`

See [docs/neon-setup.md](docs/neon-setup.md) if Marketplace auth was unavailable.

## Content loaders

```ts
import { getAllGuides, getGuideBySlug } from "@/lib/content";
import { getNeighbourhoods, getEntityBySlug } from "@/lib/content";
import { getAllFeaturedListings, getAllSponsoredPosts } from "@/lib/content";
```

- Guides: parse frontmatter with Zod, compile MDX with `next-mdx-remote/rsc`
- Entities: read `content/entities/<collection>/*.json`, validate with discriminated Zod schemas
- Sponsored: `content/sponsored/*.mdx` + `placements.json` for guide slot inventory

## Deploy to Vercel

**Live production:** [https://expat-sg.vercel.app](https://expat-sg.vercel.app)  
**Dashboard:** [abhishekcheriangeorge/expat-sg](https://vercel.com/abhishekcheriangeorge/expat-sg)  
**GitHub:** [abhishekcheriangeorge-ops/expat-dot-sg](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg)

### Redeploy (CLI)

```bash
npx vercel whoami                 # must print your username
npx vercel link --yes             # already linked → expat-sg
npx vercel --prod --yes
```

If `whoami` says logged out:

```bash
npx vercel login
```

Then re-run `link` + `--prod`.

Env vars: none required for launch (leads fall back to ephemeral storage without `DATABASE_URL`). After custom domain is live, set Production:

- `NEXT_PUBLIC_SITE_URL=https://expat.sg`
- `DATABASE_URL` when Neon is provisioned (see [docs/neon-setup.md](docs/neon-setup.md))

### Custom domain (expat.sg)

Production is live on `*.vercel.app`. Attach `expat.sg` / `www` and publish registrar DNS — follow **[docs/domain-dns.md](docs/domain-dns.md)**.

| Type | Name | Value |
| ---- | ---- | ----- |
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` (or Vercel’s project CNAME) |

Confirm exact values in **Project → Settings → Domains** after adding the domain.

## Scripts

| Command         | Purpose              |
| --------------- | -------------------- |
| `npm run dev`   | Local development    |
| `npm run build` | Production build     |
| `npm run start` | Serve production     |
| `npm run lint`  | ESLint                |

## Design system note

Straits Standard tokens live in CSS variables — jungle ink, ivory paper, brass accents, fog grey. Typography: **Newsreader** (display serif) + **Inter** (grotesque). Do not introduce Roboto / system UI stacks for display.

## Trust & SEO (Phase 6)

- `/about`, `/editorial-policy` — linked from the site footer
- `src/app/sitemap.ts`, `src/app/robots.ts`, default `opengraph-image`
- Skip-to-content link + landmark labels on header/footer nav

