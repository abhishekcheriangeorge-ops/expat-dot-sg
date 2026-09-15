import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChipList,
  DetailHero,
  FeaturedBadge,
  ProseSection,
} from "@/components/directory";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import {
  NEIGHBOURHOOD_REGION_LABELS,
  getNeighbourhoods,
  getEntityBySlug,
  getGuidesLinkingToEntity,
  getSchools,
  type Neighbourhood,
} from "@/lib/content";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const neighbourhoods = await getNeighbourhoods();
  return neighbourhoods.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entity = await getEntityBySlug("neighbourhoods", slug);
  if (!entity || entity.type !== "neighbourhood") {
    return { title: "Neighbourhood" };
  }
  return buildPageMetadata({
    title: entity.name,
    description: entity.summary,
    path: `/neighbourhoods/${slug}`,
  });
}

function formatRent(n: Neighbourhood): string | undefined {
  const r = n.rentBand;
  if (!r) return undefined;
  const parts: string[] = [];
  if (r.oneBedFrom && r.oneBedTo) {
    parts.push(
      `1-bed $${r.oneBedFrom.toLocaleString()}–$${r.oneBedTo.toLocaleString()}`,
    );
  }
  if (r.familyFrom && r.familyTo) {
    parts.push(
      `Family $${r.familyFrom.toLocaleString()}–$${r.familyTo.toLocaleString()}`,
    );
  }
  return parts.length ? parts.join(" · ") : undefined;
}

export default async function NeighbourhoodDetailPage({ params }: Props) {
  const { slug } = await params;
  const entity = await getEntityBySlug("neighbourhoods", slug);
  if (!entity || entity.type !== "neighbourhood") notFound();
  const n = entity;

  const schools = n.schoolsNearby.length
    ? (await getSchools()).filter((s) => n.schoolsNearby.includes(s.slug))
    : [];
  const relatedGuides = await getGuidesLinkingToEntity(slug);

  const rent = formatRent(n);
  const facts = [
    { label: "Region", value: NEIGHBOURHOOD_REGION_LABELS[n.region] },
    ...(n.mrt.length
      ? [{ label: "MRT", value: n.mrt.join(", ") }]
      : []),
    ...(rent ? [{ label: "Indicative rent", value: rent }] : []),
    ...(n.housingMix ? [{ label: "Housing mix", value: n.housingMix }] : []),
  ];

  return (
    <article>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Neighbourhoods", path: "/neighbourhoods" },
            { name: n.name, path: `/neighbourhoods/${slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Place",
            name: n.name,
            description: n.summary,
            address: {
              "@type": "PostalAddress",
              addressLocality: n.name,
              addressCountry: "SG",
            },
          },
        ]}
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Neighbourhoods", path: "/neighbourhoods" },
            { name: n.name, path: `/neighbourhoods/${slug}` },
          ]}
        />
      </div>
      <DetailHero
        eyebrow="Neighbourhood"
        title={n.name}
        summary={n.summary}
        badges={<FeaturedBadge featured={n.featured} />}
        facts={facts}
      />

      {n.body ? (
        <ProseSection>
          {n.body.split("\n\n").map((para) => (
            <p key={para.slice(0, 48)}>{para}</p>
          ))}
        </ProseSection>
      ) : null}

      <section className="border-t border-fog-soft bg-paper-elevated/60">
        <div className="mx-auto grid max-w-[var(--max-page)] gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8">
          <ChipList label="Vibe" items={n.vibe} />
          <ChipList label="Best for" items={n.bestFor} />
          <ChipList label="Watch-outs" items={n.watchOuts} />
          <ChipList label="MRT" items={n.mrt} />
        </div>
      </section>

      {n.commuteNotes ? (
        <ProseSection title="Getting around">
          <p>{n.commuteNotes}</p>
        </ProseSection>
      ) : null}

      {schools.length > 0 ? (
        <section className="border-t border-fog-soft">
          <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
            <h2 className="font-display text-2xl text-canopy-deep">
              Schools often shortlisted nearby
            </h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {schools.map((school) => (
                <li key={school.slug}>
                  <Link
                    href={`/schools/${school.slug}`}
                    className="border border-fog-soft bg-paper px-4 py-2 text-sm text-ink-muted no-underline transition-colors hover:border-canopy-mist hover:text-ink"
                  >
                    {school.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm">
              <Link
                href="/schools"
                className="font-medium text-canopy no-underline hover:text-canopy-mist"
              >
                All schools →
              </Link>
            </p>
          </div>
        </section>
      ) : null}

      {relatedGuides.length > 0 ? (
        <section className="border-t border-fog-soft">
          <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
            <h2 className="font-display text-2xl text-canopy-deep">
              Guides that reference this area
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {relatedGuides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
                  >
                    {guide.title} →
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link
                href="/guides/choosing-neighbourhood-expat"
                className="font-medium text-canopy no-underline hover:text-canopy-mist"
              >
                Choosing a neighbourhood →
              </Link>
              <Link
                href="/tools/setup-cash"
                className="font-medium text-canopy no-underline hover:text-canopy-mist"
              >
                First-month cash tool →
              </Link>
            </p>
          </div>
        </section>
      ) : (
        <section className="border-t border-fog-soft">
          <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
            <p className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <Link
                href="/guides/choosing-neighbourhood-expat"
                className="font-medium text-canopy no-underline hover:text-canopy-mist"
              >
                Choosing a neighbourhood →
              </Link>
              <Link
                href="/guides/heartland-living-for-expats"
                className="font-medium text-canopy no-underline hover:text-canopy-mist"
              >
                Heartland living →
              </Link>
              <Link
                href="/tools/lease-duty"
                className="font-medium text-canopy no-underline hover:text-canopy-mist"
              >
                Lease duty tool →
              </Link>
            </p>
          </div>
        </section>
      )}

      <nav className="border-t border-fog-soft px-5 py-8 sm:px-8">
        <p className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link
            href="/neighbourhoods"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All neighbourhoods
          </Link>
          <Link
            href="/home"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Home pillar →
          </Link>
          <Link
            href="/family"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Family pillar →
          </Link>
        </p>
      </nav>
    </article>
  );
}
