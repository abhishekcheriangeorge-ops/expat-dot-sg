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
import { Breadcrumbs, JsonLd } from "@/components/seo";
import {
  CLUB_CATEGORY_LABELS,
  getClubs,
  getEntityBySlug,
  getGuidesLinkingToEntity,
} from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  localBusinessJsonLd,
} from "@/lib/seo";

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
  return buildPageMetadata({
    title: entity.name,
    description: entity.summary,
    path: `/clubs/${slug}`,
  });
}

export default async function ClubDetailPage({ params }: Props) {
  const { slug } = await params;
  const entity = await getEntityBySlug("clubs", slug);
  if (!entity || entity.type !== "club") notFound();
  const c = entity;

  const neighbourhood = c.neighbourhood
    ? await getEntityBySlug("neighbourhoods", c.neighbourhood)
    : null;
  const neighbourhoodName =
    neighbourhood && neighbourhood.type === "neighbourhood"
      ? neighbourhood.name
      : c.neighbourhood
        ? c.neighbourhood.replace(/-/g, " ")
        : null;
  const relatedGuides = await getGuidesLinkingToEntity(slug);

  const facts = [
    { label: "Category", value: CLUB_CATEGORY_LABELS[c.category] },
    ...(neighbourhoodName
      ? [{ label: "Area", value: neighbourhoodName }]
      : []),
    ...(c.membershipNotes
      ? [{ label: "Membership", value: c.membershipNotes }]
      : []),
  ];

  return (
    <article>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Clubs", path: "/clubs" },
            { name: c.name, path: `/clubs/${slug}` },
          ]),
          localBusinessJsonLd({
            name: c.name,
            description: c.summary,
            path: `/clubs/${slug}`,
            url: c.website,
          }),
        ]}
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Clubs", path: "/clubs" },
            { name: c.name, path: `/clubs/${slug}` },
          ]}
        />
      </div>
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
          {c.neighbourhood && neighbourhoodName ? (
            <Link
              href={`/neighbourhoods/${c.neighbourhood}`}
              className="text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
            >
              Nearby neighbourhood: {neighbourhoodName} →
            </Link>
          ) : null}
        </div>
      </section>

      <section className="border-t border-fog-soft">
        <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
          {relatedGuides.length > 0 ? (
            <>
              <h2 className="font-display text-2xl text-canopy-deep">
                Guides that reference this community
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
            </>
          ) : null}
          <p
            className={`flex flex-wrap gap-x-5 gap-y-2 text-sm ${relatedGuides.length ? "mt-6" : ""}`}
          >
            <Link
              href="/guides/find-my-people-singapore"
              className="font-medium text-canopy no-underline hover:text-canopy-mist"
            >
              Finding your people →
            </Link>
            <Link
              href="/belong"
              className="font-medium text-canopy no-underline hover:text-canopy-mist"
            >
              Belong pillar →
            </Link>
          </p>
        </div>
      </section>

      <nav className="border-t border-fog-soft px-5 py-8 sm:px-8">
        <p className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link
            href="/clubs"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All clubs & communities
          </Link>
          <Link
            href="/belong"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Belong pillar →
          </Link>
          <Link
            href="/life"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Life pillar →
          </Link>
        </p>
      </nav>
    </article>
  );
}
