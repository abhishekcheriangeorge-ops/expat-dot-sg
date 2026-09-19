import Link from "next/link";
import type { HomeStats } from "@/lib/home/stats";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII"] as const;

const EDITORS = [
  {
    n: "01 — Arriving",
    title: "The EP question, answered in full",
    blurb: "COMPASS points, salary lines, and what actually gets approved.",
    meta: "Move · EP & COMPASS",
    href: "/guides/employment-pass-singapore",
  },
  {
    n: "02 — Home",
    title: "Choose a neighbourhood",
    blurb: "Two postcodes, two lives. Rents, MRT, and the 10pm test.",
    meta: "Home · Neighbourhoods",
    href: "/guides/choosing-neighbourhood-expat",
  },
  {
    n: "03 — Family",
    title: "Schools: fees without fear",
    blurb: "Waitlists, buses, and where money goes furthest.",
    meta: "Family · Schools",
    href: "/guides/international-schools-landscape",
  },
];

export function HomePillars({ stats }: { stats: HomeStats }) {
  return (
    <>
      <section className="bg-paper px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-[var(--max-page)]">
          <div className="flex items-baseline justify-between border-b border-ink pb-3">
            <h2 className="font-display text-3xl font-medium text-ink">
              Editors&apos; selection
            </h2>
            <Link
              href="/guides"
              className="text-xs font-bold uppercase tracking-[0.14em] text-ink no-underline hover:text-tungsten"
            >
              All guides →
            </Link>
          </div>

          <div className="grid border-b border-ink sm:grid-cols-3">
            {EDITORS.map((ed) => (
              <div
                key={ed.title}
                className="border-ink/15 px-0 py-6 first:pl-0 sm:border-l sm:px-6 sm:first:border-l-0 [&:nth-child(2)]:max-sm:border-t [&:nth-child(3)]:max-sm:border-t"
              >
                <Link href={ed.href} className="group block no-underline">
                  <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-tungsten">
                    {ed.n}
                  </p>
                  <p className="mt-2.5 font-display text-2xl font-medium leading-[1.15] text-ink transition-colors group-hover:text-canopy">
                    {ed.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {ed.blurb}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.06em] text-ink-faint">
                    {ed.meta}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pillars" className="bg-paper px-5 pb-4 sm:px-8">
        <div className="mx-auto max-w-[var(--max-page)]">
          <div className="flex items-baseline justify-between border-b border-ink pb-3">
            <h2 className="font-display text-3xl font-medium text-ink">
              Seven pillars, one map
            </h2>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-ink-faint">
              {stats.guides} guides
            </span>
          </div>

          {stats.pillarWeights.map((pillar, i) => (
            <Link
              key={pillar.slug}
              href={pillar.href}
              className="group grid grid-cols-[3.5rem_1fr_auto] items-baseline gap-4 border-b border-ink/15 py-5 no-underline"
            >
              <span className="font-display text-[15px] text-tungsten">
                {ROMAN[i]}.
              </span>
              <span>
                <span className="block text-[17px] font-semibold text-ink transition-colors group-hover:text-canopy">
                  {pillar.label} — {pillar.tagline}
                </span>
                <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-ink-muted">
                  {pillar.guides} guides
                </span>
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-ink transition-colors group-hover:text-tungsten">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </section>

    </>
  );
}
