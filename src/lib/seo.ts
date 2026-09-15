import type { Metadata } from "next";

export const SITE_NAME = "expat.sg";
export const SITE_TAGLINE =
  "Singapore expat life, from the offer letter to year three.";
export const SITE_DESCRIPTION =
  "The operating system for Singapore expat life. Guides, neighbourhoods, schools, clubs, and journeys for arriving and living.";

export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://expat.sg"
  );
}

export function absoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Default Open Graph / Twitter image path (App Router file route). */
export const DEFAULT_OG_PATH = "/opengraph-image";

export function buildPageMetadata({
  title,
  description,
  path,
  type = "website",
  images,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  images?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const ogImages = (images?.length ? images : [DEFAULT_OG_PATH]).map((src) =>
    src.startsWith("http") ? src : absoluteUrl(src),
  );

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: "en_SG",
      images: ogImages.map((url) => ({ url })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: getSiteUrl(),
    description: SITE_DESCRIPTION,
    logo: absoluteUrl("/opengraph-image"),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: getSiteUrl(),
    description: SITE_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };
}

export function articleJsonLd(input: {
  headline: string;
  description: string;
  path: string;
  dateModified?: string;
  datePublished?: string;
  authorName?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: absoluteUrl(input.path),
    dateModified: input.dateModified,
    datePublished: input.datePublished ?? input.dateModified,
    image: input.image
      ? absoluteUrl(input.image)
      : absoluteUrl(DEFAULT_OG_PATH),
    author: {
      "@type": "Organization",
      name: input.authorName ?? SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

/** FAQPage schema for answer engines / featured-snippet extraction */
export function faqJsonLd(
  faqs: Array<{ question: string; answer: string }>,
): Record<string, unknown> | null {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function localBusinessJsonLd(input: {
  name: string;
  description: string;
  path: string;
  url?: string;
  telephone?: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: input.name,
    description: input.description,
    url: input.url ?? absoluteUrl(input.path),
    telephone: input.telephone,
    areaServed: input.areaServed ?? "Singapore",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
      addressLocality: "Singapore",
    },
  };
}

export type BreadcrumbItem = {
  name: string;
  path: string;
};

/** BreadcrumbList JSON-LD — paths should be site-relative. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** CollectionPage + ItemList for hub / index surfaces. */
export function collectionPageJsonLd(input: {
  name: string;
  description: string;
  path: string;
  items: Array<{ name: string; path: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: input.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path),
      })),
    },
  };
}
