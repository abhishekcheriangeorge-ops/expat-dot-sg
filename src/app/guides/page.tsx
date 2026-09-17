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

type GuidesIndexProps = {
  searchParams: Promise<{ q?: string }>;
};

function matchesQuery(guide: GuideMeta, query: string) {
  if (!query) return true;
  const hay = `${guide.title} ${guide.description} ${guide.slug}`.toLowerCase();
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => hay.includes(term));
}

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

export default async function GuidesIndexPage({ searchParams }: GuidesIndexProps) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const all = await getAllGuides();
  const guides = all.filter((guide) => matchesQuery(guide, query));
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
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-tungsten">
            Cornerstone corpus
          </p>
          <h1 className="font-display mt-4 text-5xl font-medium tracking-[-0.025em] text-ink sm:text-6xl">
            Guides
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-muted">
            Plain-English, locally precise guides across the seven pillars of
            Singapore expat life. Admin topics cite MOM, ICA, IRAS, and other
            official sources — and show when we last reviewed them.
          </p>
          <p className="mt-3 text-sm text-ink-faint">
            {query
              ? `${guides.length} of ${all.length} guides matching “${query}”`
              : `${all.length} published guides`}
          </p>
          <form action="/guides" method="get" className="mt-6 max-w-md" role="search">
            <label className="block">
              <span className="sr-only">Search guides</span>
              <input
                type="search"
                name="q"
                defaultValue={query}
                placeholder="Search guides"
                className="w-full rounded-sm border border-ink/20 bg-paper-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-tungsten focus:outline-2 focus:outline-tungsten"
              />
            </label>
          </form>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold">
            {PILLAR_ORDER.map((pillar) => (
              <li key={pillar}>
                <Link
                  href={`/${pillar}`}
                  className="rounded-sm py-1.5 text-ink no-underline underline-offset-4 hover:text-tungsten hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
                >
                  {PILLAR_LABELS[pillar]}
                </Link>
              </li>
            ))}
          </ul>
        </header>

        <div className="mt-14 space-y-16">
          {query && guides.length === 0 ? (
            <p className="max-w-prose text-ink-muted">
              No guides match that query. Try a pass type, neighbourhood, or
              agency name — or{" "}
              <Link
                href="/guides"
                className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
              >
                clear the search
              </Link>
              .
            </p>
          ) : null}
          {PILLAR_ORDER.map((pillar) => {
            const items = grouped.get(pillar) ?? [];
            if (items.length === 0) return null;

            return (
              <section key={pillar} aria-labelledby={`pillar-${pillar}`}>
                <div className="flex items-baseline justify-between gap-4 border-b border-ink pb-3">
                  <h2
                    id={`pillar-${pillar}`}
                    className="font-display scroll-mt-28 text-3xl font-medium tracking-tight text-ink"
                  >
                    <Link
                      href={`/${pillar}`}
                      className="rounded-sm no-underline transition-colors hover:text-canopy focus-visible:outline-2 focus-visible:outline-tungsten"
                    >
                      {PILLAR_LABELS[pillar]}
                    </Link>
                  </h2>
                  <span className="text-sm text-ink-faint">
                    {items.length} guides ·{" "}
                    <Link
                      href={`/${pillar}`}
                      className="rounded-sm py-1 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
                    >
                      Pillar hub
                    </Link>
                  </span>
                </div>
                <ul className="divide-y divide-ink/15">
                  {items.map((guide) => (
                    <li key={guide.slug} className="py-5">
                      <Link
                        href={`/guides/${guide.slug}`}
                        className="group grid gap-2 rounded-sm no-underline focus-visible:outline-2 focus-visible:outline-tungsten sm:grid-cols-[1fr_auto] sm:items-start"
                      >
                        <div>
                          <p className="font-display text-xl font-medium text-ink transition-colors group-hover:text-canopy sm:text-2xl">
                            {guide.title}
                          </p>
                          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-muted">
                            {guide.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint sm:max-w-48 sm:justify-end sm:text-right">
                          <span>{JOURNEY_LABELS[guide.journey]}</span>
                          <span>{guide.readingTimeMinutes} min</span>
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
