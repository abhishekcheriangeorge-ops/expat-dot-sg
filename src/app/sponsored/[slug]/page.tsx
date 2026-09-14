import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SponsoredArticle } from "@/components/sponsored";
import {
  getAllSponsoredPosts,
  getSponsoredPostBySlug,
} from "@/lib/content/sponsored";

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

  return {
    title: `${post.meta.title} (Sponsored)`,
    description: post.meta.description,
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      images: post.meta.ogImage ? [post.meta.ogImage] : undefined,
    },
  };
}

export default async function SponsoredPostPage({ params }: SponsoredPageProps) {
  const { slug } = await params;
  const post = await getSponsoredPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.publishedAt,
    isAccessibleForFree: true,
    creativeWorkStatus: "Published",
    about: "Sponsored content",
    author: {
      "@type": "Organization",
      name: post.meta.partnerName,
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
      <SponsoredArticle meta={post.meta} toc={post.toc}>
        {post.content}
      </SponsoredArticle>
    </>
  );
}
