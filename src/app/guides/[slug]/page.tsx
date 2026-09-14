import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guides";
import {
  getAllGuides,
  getGuideBySlug,
  getRelatedGuides,
} from "@/lib/content/guides";
import { getActivePlacementByCategory } from "@/lib/content/sponsored";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const guides = await getAllGuides();
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) return { title: "Guide not found" };

  return {
    title: guide.meta.title,
    description: guide.meta.description,
    openGraph: {
      title: guide.meta.title,
      description: guide.meta.description,
      type: "article",
      images: guide.meta.ogImage ? [guide.meta.ogImage] : undefined,
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) notFound();

  const related = await getRelatedGuides(guide.meta);
  const placement = guide.meta.sponsorSlot?.category
    ? await getActivePlacementByCategory(guide.meta.sponsorSlot.category)
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.meta.title,
    description: guide.meta.description,
    dateModified: guide.meta.lastReviewed,
    author: {
      "@type": "Organization",
      name: "expat.sg",
    },
    publisher: {
      "@type": "Organization",
      name: "expat.sg",
      url: "https://expat.sg",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideArticle
        meta={guide.meta}
        toc={guide.toc}
        related={related}
        placement={placement}
      >
        {guide.content}
      </GuideArticle>
    </>
  );
}
