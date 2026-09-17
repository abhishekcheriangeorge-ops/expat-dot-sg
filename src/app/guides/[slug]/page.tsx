import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guides";
import { JsonLd } from "@/components/seo";
import { resolveRelatedEntities } from "@/lib/content/entities";
import {
  getAllGuides,
  getGuideBySlug,
  getGuideMetaBySlug,
  getRelatedGuides,
  PILLAR_LABELS,
} from "@/lib/content/guides";
import { getActivePlacementByCategory } from "@/lib/content/sponsored";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
} from "@/lib/seo";

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
  const meta = await getGuideMetaBySlug(slug);
  if (!meta) return { title: "Guide not found" };

  return buildPageMetadata({
    title: meta.title,
    description: meta.description,
    path: `/guides/${slug}`,
    type: "article",
    images: meta.ogImage ? [meta.ogImage] : undefined,
    publishedTime: meta.lastReviewed,
    modifiedTime: meta.lastReviewed,
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) notFound();

  const [related, relatedEntities] = await Promise.all([
    getRelatedGuides(guide.meta),
    resolveRelatedEntities(guide.meta.relatedEntities),
  ]);
  const placement = guide.meta.sponsorSlot?.category
    ? await getActivePlacementByCategory(guide.meta.sponsorSlot.category)
    : null;

  const faqData = faqJsonLd(guide.meta.faqs ?? []);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    {
      name: PILLAR_LABELS[guide.meta.pillar],
      path: `/${guide.meta.pillar}`,
    },
    { name: guide.meta.title, path: `/guides/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            headline: guide.meta.title,
            description: guide.meta.description,
            path: `/guides/${slug}`,
            dateModified: guide.meta.lastReviewed,
            image: guide.meta.ogImage,
            citations: guide.meta.citations,
          }),
          breadcrumbJsonLd(crumbs),
        ]}
      />
      {faqData ? <JsonLd data={faqData} /> : null}
      <GuideArticle
        meta={guide.meta}
        toc={guide.toc}
        related={related}
        relatedEntities={relatedEntities}
        placement={placement}
      >
        {guide.content}
      </GuideArticle>
    </>
  );
}
