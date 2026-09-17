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
  SERVICE_CATEGORY_LABELS,
  ServiceCategorySchema,
  getEntityBySlug,
  getServices,
  resolveGuidesBySlug,
} from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  localBusinessJsonLd,
} from "@/lib/seo";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ category: s.category, slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const entity = await getEntityBySlug("services", slug);
  if (!entity || entity.type !== "service") return { title: "Service" };
  return buildPageMetadata({
    title: entity.name,
    description: entity.summary,
    path: `/directory/${category}/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { category: rawCategory, slug } = await params;
  const categoryParsed = ServiceCategorySchema.safeParse(rawCategory);
  if (!categoryParsed.success) notFound();

  const entity = await getEntityBySlug("services", slug);
  if (!entity || entity.type !== "service") notFound();
  if (entity.category !== categoryParsed.data) notFound();
  const s = entity;

  const relatedGuides = await resolveGuidesBySlug(s.relatedGuides);
  const categoryLabel = SERVICE_CATEGORY_LABELS[s.category];
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Directory", path: "/directory" },
    { name: categoryLabel, path: `/directory/${s.category}` },
    { name: s.name, path: `/directory/${s.category}/${slug}` },
  ];

  const facts = [
    { label: "Category", value: categoryLabel },
    ...(s.areasServed.length
      ? [{ label: "Areas", value: s.areasServed.join(", ") }]
      : []),
    ...(s.phone ? [{ label: "Phone", value: s.phone }] : []),
  ];

  return (
    <article>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          localBusinessJsonLd({
            name: s.name,
            description: s.summary,
            path: `/directory/${s.category}/${slug}`,
            url: s.website,
            telephone: s.phone,
            areaServed: s.areasServed.join(", ") || "Singapore",
          }),
        ]}
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
        <Breadcrumbs items={crumbs} />
      </div>
      <DetailHero
        eyebrow="Service directory"
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
        <div className="mx-auto flex max-w-[var(--max-page)] flex-col gap-8 px-5 py-14 sm:px-8">
          <ChipList label="Areas served" items={s.areasServed} />
          <ChipList label="Engage when" items={s.whenToEngage} />
          {relatedGuides.length > 0 ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
                Related guides
              </p>
              <ul className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
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
            </div>
          ) : null}
          {s.officialLinks.length > 0 ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
                Official / source links
              </p>
              <ul className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {s.officialLinks.map((link) => (
                  <li key={link.url}>
                    <ExternalLink href={link.url} label={link.label} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {s.website ? <ExternalLink href={s.website} /> : null}
        </div>
      </section>

      <nav className="border-t border-ink/15 px-5 py-8 sm:px-8">
        <p className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <Link
            href={`/directory/${s.category}`}
            className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
          >
            ← {categoryLabel}
          </Link>
          <Link
            href="/directory"
            className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
          >
            All services
          </Link>
          <Link
            href="/life"
            className="font-semibold text-canopy no-underline underline-offset-4 hover:underline"
          >
            Life pillar →
          </Link>
        </p>
      </nav>
    </article>
  );
}
