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
import {
  CLUB_CATEGORY_LABELS,
  getClubs,
  getEntityBySlug,
} from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const clubs = await getClubs();
  return clubs.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entity = await getEntityBySlug("clubs", slug);
  if (!entity || entity.type !== "club") return { title: "Club" };
  return { title: entity.name, description: entity.summary };
}

export default async function ClubDetailPage({ params }: Props) {
  const { slug } = await params;
  const entity = await getEntityBySlug("clubs", slug);
  if (!entity || entity.type !== "club") notFound();
  const c = entity;

  const facts = [
    { label: "Category", value: CLUB_CATEGORY_LABELS[c.category] },
    ...(c.neighbourhood
      ? [{ label: "Area", value: c.neighbourhood.replace(/-/g, " ") }]
      : []),
    ...(c.membershipNotes
      ? [{ label: "Membership", value: c.membershipNotes }]
      : []),
  ];

  return (
    <article>
      <DetailHero
        eyebrow="Clubs & communities"
        title={c.name}
        summary={c.summary}
        badges={
          <FeaturedBadge featured={c.featured} sponsored={c.sponsored} />
        }
        facts={facts}
      />

      {c.body ? (
        <ProseSection>
          {c.body.split("\n\n").map((para) => (
            <p key={para.slice(0, 48)}>{para}</p>
          ))}
        </ProseSection>
      ) : null}

      <section className="border-t border-fog-soft bg-paper-elevated/60">
        <div className="mx-auto flex max-w-[var(--max-page)] flex-col gap-8 px-5 py-14 sm:px-8">
          <ChipList label="Focus" items={c.focus} />
          {c.website ? <ExternalLink href={c.website} /> : null}
          {c.neighbourhood ? (
            <Link
              href={`/neighbourhoods/${c.neighbourhood}`}
              className="text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
            >
              Nearby neighbourhood: {c.neighbourhood.replace(/-/g, " ")} →
            </Link>
          ) : null}
        </div>
      </section>

      <nav className="border-t border-fog-soft px-5 py-8 sm:px-8">
        <Link
          href="/clubs"
          className="text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
        >
          ← All clubs & communities
        </Link>
      </nav>
    </article>
  );
}
