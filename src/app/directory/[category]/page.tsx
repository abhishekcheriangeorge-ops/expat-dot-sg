import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DirectoryHero, ServiceDirectory } from "@/components/directory";
import { JsonLd } from "@/components/seo";
import {
  SERVICE_CATEGORY_LABELS,
  ServiceCategorySchema,
  getServices,
  type ServiceCategory,
} from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return (Object.keys(SERVICE_CATEGORY_LABELS) as ServiceCategory[]).map(
    (category) => ({ category }),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const parsed = ServiceCategorySchema.safeParse(category);
  if (!parsed.success) return { title: "Directory" };
  const label = SERVICE_CATEGORY_LABELS[parsed.data];
  return buildPageMetadata({
    title: label,
    description: `${label} for Singapore expats — verified starting points, not endorsements.`,
    path: `/directory/${parsed.data}`,
  });
}

export default async function DirectoryCategoryPage({ params }: Props) {
  const { category: raw } = await params;
  const parsed = ServiceCategorySchema.safeParse(raw);
  if (!parsed.success) notFound();
  const category = parsed.data;

  const services = (await getServices()).filter((s) => s.category === category);
  const label = SERVICE_CATEGORY_LABELS[category];
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Directory", path: "/directory" },
    { name: label, path: `/directory/${category}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: label,
            description: `${label} listings for Singapore expats.`,
            path: `/directory/${category}`,
            items: services.map((s) => ({
              name: s.name,
              path: `/directory/${s.category}/${s.slug}`,
            })),
          }),
        ]}
      />
      <DirectoryHero
        eyebrow="Directory"
        title={label}
        description="Filter and open listings in this category. Always verify licences, panels, and contracts directly — directory entries are starting points, not endorsements."
        meta={
          <>
            <Link
              href="/directory"
              className="text-canopy no-underline hover:text-canopy-mist"
            >
              All categories
            </Link>
            <span className="mx-2 text-fog">·</span>
            {services.length} listings
          </>
        }
        crumbs={crumbs}
      />
      <ServiceDirectory services={services} lockedCategory={category} />
    </>
  );
}
