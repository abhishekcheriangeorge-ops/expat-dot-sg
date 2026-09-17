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
import { getEntityBySlug, getGuidesLinkingToEntity, getSchools } from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  localBusinessJsonLd,
} from "@/lib/seo";

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
  return buildPageMetadata({
    title: entity.name,
    description: entity.summary,
    path: `/schools/${slug}`,
  });
}

export default async function SchoolDetailPage({ params }: Props) {
  const { slug } = await params;
  const entity = await getEntityBySlug("schools", slug);
  if (!entity || entity.type !== "school") notFound();
  const s = entity;

  const neighbourhood = s.neighbourhood
    ? await getEntityBySlug("neighbourhoods", s.neighbourhood)
    : null;
  const neighbourhoodName =
    neighbourhood && neighbourhood.type === "neighbourhood"
      ? neighbourhood.name
      : s.neighbourhood
        ? s.neighbourhood.replace(/-/g, " ")
        : null;
  const relatedGuides = await getGuidesLinkingToEntity(slug);

  const facts = [
    { label: "Sector", value: SECTOR_LABELS[s.sector] },
    { label: "Curriculum", value: s.curriculum.join(", ") },
    ...(s.ages ? [{ label: "Ages", value: s.ages }] : []),
    ...(s.feesBand ? [{ label: "Fees band", value: s.feesBand }] : []),
    ...(s.campus ? [{ label: "Campus", value: s.campus }] : []),
  ];

  return (
    <article>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Schools", path: "/schools" },
            { name: s.name, path: `/schools/${slug}` },
          ]),
          {
            ...localBusinessJsonLd({
              name: s.name,
              description: s.summary,
              path: `/schools/${slug}`,
              url: s.website,
            }),
            "@type": "EducationalOrganization",
          },
        ]}
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Schools", path: "/schools" },
            { name: s.name, path: `/schools/${slug}` },
          ]}
        />
      </div>
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

      <section className="border-t border-ink/15 bg-paper-elevated/60">
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
          {s.neighbourhood && neighbourhoodName ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
                Housing often paired nearby
              </p>
              <Link
                href={`/neighbourhoods/${s.neighbourhood}`}
                className="mt-3 inline-block text-sm font-semibold text-canopy no-underline underline-offset-4 hover:underline"
              >
                View {neighbourhoodName} →
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-t border-ink/15">
        <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
          {relatedGuides.length > 0 ? (
            <>
              <h2 className="font-display text-2xl font-medium tracking-tight text-ink">
                Guides that reference this school
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {relatedGuides.map((guide) => (
                  <li key={guide.slug}>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="text-sm font-semibold text-canopy no-underline underline-offset-4 hover:underline"
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
              href="/guides/international-schools-landscape"
              className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
            >
              Schools landscape →
            </Link>
            <Link
              href="/guides/aeis-saeis-international-students"
              className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
            >
              AEIS / S-AEIS →
            </Link>
            <Link
              href="/calendar"
              className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
            >
              Kids calendar →
            </Link>
          </p>
        </div>
      </section>

      <nav className="border-t border-ink/15 px-5 py-8 sm:px-8">
        <p className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link
            href="/schools"
            className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
          >
            ← All schools
          </Link>
          <Link
            href="/family"
            className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
          >
            Family pillar →
          </Link>
          <Link
            href="/neighbourhoods"
            className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
          >
            Neighbourhoods →
          </Link>
        </p>
      </nav>
    </article>
  );
}
