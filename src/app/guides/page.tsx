import type { Metadata } from "next";
import Link from "next/link";
import {
  getAllGuides,
  JOURNEY_LABELS,
  PILLAR_LABELS,
  type GuideMeta,
} from "@/lib/content/guides";
import type { Pillar } from "@/lib/content/schemas";

export const metadata: Metadata = {
  title: "Guides",
  description:
    "Cornerstone guides for Singapore expat life — visas, housing, money, family, belonging, and what comes next.",
};

const PILLAR_ORDER: Pillar[] = [
  "move",
  "home",
  "money",
  "family",
  "life",
  "belong",
  "next",
];

function groupByPillar(guides: GuideMeta[]): Map<Pillar, GuideMeta[]> {
  const map = new Map<Pillar, GuideMeta[]>();
  for (const pillar of PILLAR_ORDER) map.set(pillar, []);
  for (const guide of guides) {
    map.get(guide.pillar)?.push(guide);
  }
  return map;
}

export default async function GuidesIndexPage() {
  const guides = await getAllGuides();
  const grouped = groupByPillar(guides);

  return (
    <main className="mx-auto w-full max-w-[var(--max-page)] px-5 py-12 sm:px-8 sm:py-16">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
          Cornerstone corpus
        </p>
        <h1 className="font-display mt-3 text-4xl text-ink sm:text-5xl">
          Guides
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          Plain-English, locally precise guides across the seven pillars of
          Singapore expat life. Admin topics cite MOM, ICA, IRAS, and other
          official sources — and show when we last reviewed them.
        </p>
        <p className="mt-3 text-sm text-ink-faint">
          {guides.length} published guides
        </p>
      </header>

      <div className="mt-14 space-y-16">
        {PILLAR_ORDER.map((pillar) => {
          const items = grouped.get(pillar) ?? [];
          if (items.length === 0) return null;

          return (
            <section key={pillar} aria-labelledby={`pillar-${pillar}`}>
              <div className="flex items-baseline justify-between gap-4 border-b border-fog-soft pb-3">
                <h2
                  id={`pillar-${pillar}`}
                  className="font-display text-3xl text-ink"
                >
                  {PILLAR_LABELS[pillar]}
                </h2>
                <span className="text-sm text-ink-faint">
                  {items.length} guides
                </span>
              </div>
              <ul className="mt-6 divide-y divide-fog-soft/80">
                {items.map((guide) => (
                  <li key={guide.slug} className="py-5">
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="group grid gap-2 no-underline sm:grid-cols-[1fr_auto] sm:items-start"
                    >
                      <div>
                        <p className="font-display text-xl text-ink transition-colors group-hover:text-canopy">
                          {guide.title}
                        </p>
                        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-muted">
                          {guide.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3 text-xs text-ink-faint sm:justify-end">
                        <span>{JOURNEY_LABELS[guide.journey]}</span>
                        <span>{guide.readingTimeMinutes} min</span>
                        <time dateTime={guide.lastReviewed}>
                          Reviewed {guide.lastReviewed}
                        </time>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </main>
  );
}
