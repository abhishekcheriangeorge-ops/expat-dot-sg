import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChipList,
  DetailHero,
  FeaturedBadge,
  ProseSection,
} from "@/components/directory";
import {
  NEIGHBOURHOOD_REGION_LABELS,
  getNeighbourhoods,
  getEntityBySlug,
  type Neighbourhood,
} from "@/lib/content";

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
  return {
    title: entity.name,
    description: entity.summary,
  };
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

      {n.schoolsNearby.length > 0 ? (
        <section className="border-t border-fog-soft">
          <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
            <h2 className="font-display text-2xl text-canopy-deep">
              Schools often shortlisted nearby
            </h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {n.schoolsNearby.map((schoolSlug) => (
                <li key={schoolSlug}>
                  <Link
                    href={`/schools/${schoolSlug}`}
                    className="border border-fog-soft bg-paper px-4 py-2 text-sm text-ink-muted no-underline transition-colors hover:border-canopy-mist hover:text-ink"
                  >
                    {schoolSlug
                      .split("-")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(" ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <nav className="border-t border-fog-soft px-5 py-8 sm:px-8">
        <Link
          href="/neighbourhoods"
          className="text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
        >
          ← All neighbourhoods
        </Link>
      </nav>
    </article>
  );
}
