import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChipList,
  DetailHero,
  ExternalLink,
  FeaturedBadge,
  ProseSection,
} from "@/components/directory";
import { getEntityBySlug, getSchools } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

const SECTOR_LABELS = {
  international: "International",
  local: "Local",
  special: "Special / inclusive",
} as const;

export async function generateStaticParams() {
  const schools = await getSchools();
  return schools.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entity = await getEntityBySlug("schools", slug);
  if (!entity || entity.type !== "school") return { title: "School" };
  return { title: entity.name, description: entity.summary };
}

export default async function SchoolDetailPage({ params }: Props) {
  const { slug } = await params;
  const entity = await getEntityBySlug("schools", slug);
  if (!entity || entity.type !== "school") notFound();
  const s = entity;

  const facts = [
    { label: "Sector", value: SECTOR_LABELS[s.sector] },
    { label: "Curriculum", value: s.curriculum.join(", ") },
    ...(s.ages ? [{ label: "Ages", value: s.ages }] : []),
    ...(s.feesBand ? [{ label: "Fees band", value: s.feesBand }] : []),
    ...(s.campus ? [{ label: "Campus", value: s.campus }] : []),
  ];

  return (
    <article>
      <DetailHero
        eyebrow="School"
        title={s.name}
        summary={s.summary}
        badges={
          <FeaturedBadge featured={s.featured} sponsored={s.sponsored} />
        }
        facts={facts}
      />

      {s.body ? (
        <ProseSection>
          {s.body.split("\n\n").map((para) => (
            <p key={para.slice(0, 48)}>{para}</p>
          ))}
        </ProseSection>
      ) : null}

      <section className="border-t border-fog-soft bg-paper-elevated/60">
        <div className="mx-auto grid max-w-[var(--max-page)] gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8">
          <ChipList label="Languages" items={s.languages} />
          <ChipList label="Curriculum" items={s.curriculum} />
          {s.waitlistNotes ? (
            <div className="sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
                Waitlist notes
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {s.waitlistNotes}
              </p>
            </div>
          ) : null}
          {s.website ? (
            <div>
              <ExternalLink href={s.website} label="Official website" />
            </div>
          ) : null}
          {s.neighbourhood ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
                Housing often paired nearby
              </p>
              <Link
                href={`/neighbourhoods/${s.neighbourhood}`}
                className="mt-3 inline-block text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
              >
                View {s.neighbourhood.replace(/-/g, " ")} →
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <nav className="border-t border-fog-soft px-5 py-8 sm:px-8">
        <Link
          href="/schools"
          className="text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
        >
          ← All schools
        </Link>
      </nav>
    </article>
  );
}
