import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DirectoryHero, ServiceDirectory } from "@/components/directory";
import {
  SERVICE_CATEGORY_LABELS,
  ServiceCategorySchema,
  getServices,
  type ServiceCategory,
} from "@/lib/content";

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
  return {
    title: SERVICE_CATEGORY_LABELS[parsed.data],
    description: `${SERVICE_CATEGORY_LABELS[parsed.data]} for Singapore expats.`,
  };
}

export default async function DirectoryCategoryPage({ params }: Props) {
  const { category: raw } = await params;
  const parsed = ServiceCategorySchema.safeParse(raw);
  if (!parsed.success) notFound();
  const category = parsed.data;

  const services = (await getServices()).filter((s) => s.category === category);

  return (
    <>
      <DirectoryHero
        eyebrow="Directory"
        title={SERVICE_CATEGORY_LABELS[category]}
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
      />
      <ServiceDirectory services={services} lockedCategory={category} />
    </>
  );
}
