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
- **Neon Postgres** (planned Phase 5 — listings / leads only)

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
src/
  app/              # App Router pages (/journeys, /calendar, /tools, …)
  components/
    layout/         # SiteHeader, SiteFooter, SiteShell
    motion/         # FadeIn, Stagger, KenBurns
    journeys/       # Checklists + leaving playbook UI
    calendar/       # Events board
    tools/          # COL + EP threshold calculators
  lib/
    fonts.ts        # Fraunces (display) + Manrope (sans)
    content/        # Zod schemas + typed loaders
    tools/          # Calculator pure functions
```

## Content loaders

```ts
import { getAllGuides, getGuideBySlug } from "@/lib/content";
import { getNeighbourhoods, getEntityBySlug } from "@/lib/content";
```

- Guides: parse frontmatter with Zod, compile MDX with `next-mdx-remote/rsc`
- Entities: read `content/entities/<collection>/*.json`, validate with discriminated Zod schemas

A draft sample guide and one scaffold neighbourhood exist for pipeline smoke tests — full corpus is Phase 2–3.

## Deploy to Vercel

If the Vercel CLI is installed and authenticated:

```bash
npm i -g vercel
vercel login
vercel link          # create / link project
vercel --prod        # production deploy
```

Or connect the GitHub repo in the [Vercel dashboard](https://vercel.com/new):

1. Import **`abhishekcheriangeorge-ops/expat-dot-sg`**
2. Framework preset: Next.js (auto-detected)
3. Region: Singapore (`sin1`) preferred
4. Env vars: copy from `.env.example` (add `DATABASE_URL` when Neon is provisioned)
5. Point `expat.sg` DNS to Vercel after first production deploy (Phase 6)

## Scripts

| Command         | Purpose              |
| --------------- | -------------------- |
| `npm run dev`   | Local development    |
| `npm run build` | Production build     |
| `npm run start` | Serve production     |
| `npm run lint`  | ESLint                |

## Design system note

Humidity Editorial tokens live in CSS variables — canopy green, night ink, warm paper, tungsten amber, fog grey. Typography: **Fraunces** (display serif) + **Manrope** (refined grotesque). Do not introduce Inter / Roboto / system UI stacks.
