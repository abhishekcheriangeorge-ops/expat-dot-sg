import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import {
  getAllGuides,
  JOURNEY_LABELS,
  PILLAR_LABELS,
  type GuideMeta,
} from "@/lib/content/guides";
import type { Pillar } from "@/lib/content/schemas";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Guides",
  description:
    "Cornerstone guides for Singapore expat life — visas, housing, money, family, belonging, and what comes next.",
  path: "/guides",
});

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
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: "Guides",
            description:
              "Cornerstone guides for Singapore expat life across seven pillars.",
            path: "/guides",
            items: PILLAR_ORDER.map((pillar) => ({
              name: PILLAR_LABELS[pillar],
              path: `/${pillar}`,
            })),
          }),
        ]}
      />
      <main className="mx-auto w-full max-w-[var(--max-page)] px-5 py-12 sm:px-8 sm:py-16">
        <header className="max-w-2xl">
          <Breadcrumbs items={crumbs} />
          <p className="mt-6 text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">
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
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            {PILLAR_ORDER.map((pillar) => (
              <li key={pillar}>
                <Link
                  href={`/${pillar}`}
                  className="text-canopy no-underline underline-offset-4 hover:underline"
                >
                  {PILLAR_LABELS[pillar]}
                </Link>
              </li>
            ))}
          </ul>
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
                    <Link
                      href={`/${pillar}`}
                      className="text-ink no-underline transition-colors hover:text-canopy"
                    >
                      {PILLAR_LABELS[pillar]}
                    </Link>
                  </h2>
                  <span className="text-sm text-ink-faint">
                    {items.length} guides ·{" "}
                    <Link
                      href={`/${pillar}`}
                      className="text-canopy no-underline underline-offset-4 hover:underline"
                    >
                      Pillar hub
                    </Link>
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
    </>
  );
}
