import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo";
import { SponsoredArticle } from "@/components/sponsored";
import {
  getAllSponsoredPosts,
  getSponsoredPostBySlug,
} from "@/lib/content/sponsored";
import { articleJsonLd, buildPageMetadata } from "@/lib/seo";

type SponsoredPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllSponsoredPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: SponsoredPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getSponsoredPostBySlug(slug);
  if (!post) return { title: "Sponsored post not found" };

  return buildPageMetadata({
    title: `${post.meta.title} (Sponsored)`,
    description: post.meta.description,
    path: `/sponsored/${slug}`,
    type: "article",
    images: post.meta.ogImage ? [post.meta.ogImage] : undefined,
  });
}

export default async function SponsoredPostPage({ params }: SponsoredPageProps) {
  const { slug } = await params;
  const post = await getSponsoredPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          ...articleJsonLd({
            headline: post.meta.title,
            description: post.meta.description,
            path: `/sponsored/${slug}`,
            datePublished: post.meta.publishedAt,
            authorName: post.meta.partnerName,
            image: post.meta.ogImage,
          }),
          about: "Sponsored content",
          isAccessibleForFree: true,
        }}
      />
      <SponsoredArticle meta={post.meta} toc={post.toc}>
        {post.content}
      </SponsoredArticle>
    </>
  );
}
