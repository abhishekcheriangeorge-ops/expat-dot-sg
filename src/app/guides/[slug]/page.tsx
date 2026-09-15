import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guides";
import { JsonLd } from "@/components/seo";
import {
  getAllGuides,
  getGuideBySlug,
  getRelatedGuides,
} from "@/lib/content/guides";
import { getActivePlacementByCategory } from "@/lib/content/sponsored";
import { articleJsonLd, buildPageMetadata, faqJsonLd } from "@/lib/seo";

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

  return buildPageMetadata({
    title: guide.meta.title,
    description: guide.meta.description,
    path: `/guides/${slug}`,
    type: "article",
    images: guide.meta.ogImage ? [guide.meta.ogImage] : undefined,
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);
  if (!guide) notFound();

  const related = await getRelatedGuides(guide.meta);
  const placement = guide.meta.sponsorSlot?.category
    ? await getActivePlacementByCategory(guide.meta.sponsorSlot.category)
    : null;

  const faqData = faqJsonLd(guide.meta.faqs ?? []);

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          headline: guide.meta.title,
          description: guide.meta.description,
          path: `/guides/${slug}`,
          dateModified: guide.meta.lastReviewed,
          image: guide.meta.ogImage,
        })}
      />
      {faqData ? <JsonLd data={faqData} /> : null}
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
