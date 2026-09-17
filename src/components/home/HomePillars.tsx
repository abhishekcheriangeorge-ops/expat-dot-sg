import Link from "next/link";
import { pillars } from "@/lib/site";

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

export function HomePillars() {
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
              Seven
            </span>
          </div>

          {pillars.map((pillar, i) => (
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
                  {pillar.summary}
                </span>
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.1em] text-ink transition-colors group-hover:text-tungsten">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-paper px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-[var(--max-page)]">
          <div className="grid items-center gap-8 rounded bg-canopy-deep p-10 text-paper sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
                Year three should feel{" "}
                <em className="italic text-tungsten-soft">inevitable,</em> not
                accidental.
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#b9b09a]">
                Arriving, living, and leaving — every calculator and checklist
                in one place.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/arriving"
                className="inline-flex min-h-[44px] items-center bg-tungsten-soft px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] text-ink no-underline transition-colors hover:bg-paper"
              >
                Begin arriving →
              </Link>
              <Link
                href="/living"
                className="inline-flex min-h-[44px] items-center border border-paper/30 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-paper no-underline transition-colors hover:border-paper/60"
              >
                Explore living
              </Link>
              <Link
                href="/journeys/leaving"
                className="inline-flex min-h-[44px] items-center border border-paper/30 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-paper no-underline transition-colors hover:border-paper/60"
              >
                Leaving playbook
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
