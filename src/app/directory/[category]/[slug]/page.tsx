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
import { JsonLd } from "@/components/seo";
import {
  SERVICE_CATEGORY_LABELS,
  ServiceCategorySchema,
  getEntityBySlug,
  getServices,
} from "@/lib/content";
import { buildPageMetadata, localBusinessJsonLd } from "@/lib/seo";

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

  const facts = [
    { label: "Category", value: SERVICE_CATEGORY_LABELS[s.category] },
    ...(s.areasServed.length
      ? [{ label: "Areas", value: s.areasServed.join(", ") }]
      : []),
    ...(s.phone ? [{ label: "Phone", value: s.phone }] : []),
  ];

  return (
    <article>
      <JsonLd
        data={localBusinessJsonLd({
          name: s.name,
          description: s.summary,
          path: `/directory/${s.category}/${slug}`,
          url: s.website,
          telephone: s.phone,
          areaServed: s.areasServed.join(", ") || "Singapore",
        })}
      />
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

      <section className="border-t border-fog-soft bg-paper-elevated/60">
        <div className="mx-auto flex max-w-[var(--max-page)] flex-col gap-8 px-5 py-14 sm:px-8">
          <ChipList label="Areas served" items={s.areasServed} />
          {s.website ? <ExternalLink href={s.website} /> : null}
        </div>
      </section>

      <nav className="flex flex-wrap gap-6 border-t border-fog-soft px-5 py-8 sm:px-8">
        <Link
          href={`/directory/${s.category}`}
          className="text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
        >
          ← {SERVICE_CATEGORY_LABELS[s.category]}
        </Link>
        <Link
          href="/directory"
          className="text-sm font-medium text-ink-muted no-underline hover:text-ink"
        >
          All services
        </Link>
      </nav>
    </article>
  );
}
