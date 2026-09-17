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
  publishedTime,
  modifiedTime,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  images?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const ogImages = (images?.length ? images : [DEFAULT_OG_PATH]).map((src) =>
    src.startsWith("http") ? src : absoluteUrl(src),
  );
  const modified = modifiedTime ?? publishedTime;

  return {
    title,
    description,
    keywords,
    authors: [{ name: SITE_NAME, url: getSiteUrl() }],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: "en_SG",
      images: ogImages.map((imageUrl) => ({ url: imageUrl })),
      ...(type === "article"
        ? {
            publishedTime: publishedTime ?? modified,
            modifiedTime: modified,
            authors: [SITE_NAME],
          }
        : {}),
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
  const logoUrl = absoluteUrl(DEFAULT_OG_PATH);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: getSiteUrl(),
    description: SITE_DESCRIPTION,
    inLanguage: "en-SG",
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    image: logoUrl,
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
      addressLocality: "Singapore",
    },
    areaServed: {
      "@type": "Country",
      name: "Singapore",
    },
    knowsAbout: [
      "Singapore Employment Pass",
      "expat living in Singapore",
      "international schools Singapore",
      "IRAS tax clearance",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: getSiteUrl(),
    description: SITE_DESCRIPTION,
    inLanguage: "en-SG",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${getSiteUrl()}/guides?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
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
  citations?: Array<{ label: string; url: string }>;
}) {
  const url = absoluteUrl(input.path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    inLanguage: "en-SG",
    isAccessibleForFree: true,
    dateModified: input.dateModified,
    datePublished: input.datePublished ?? input.dateModified,
    image: input.image
      ? absoluteUrl(input.image)
      : absoluteUrl(DEFAULT_OG_PATH),
    about: {
      "@type": "Place",
      name: "Singapore",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]"],
    },
    citation: input.citations?.map((citation) => ({
      "@type": "CreativeWork",
      name: citation.label,
      url: citation.url,
    })),
    author: {
      "@type": "Organization",
      name: input.authorName ?? SITE_NAME,
      url: getSiteUrl(),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl(),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(DEFAULT_OG_PATH),
      },
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
    inLanguage: "en-SG",
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

export function howToJsonLd(input: {
  name: string;
  description?: string;
  path?: string;
  steps: Array<string | { name: string; text: string }>;
}): Record<string, unknown> | null {
  if (!input.steps.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    url: input.path ? absoluteUrl(input.path) : undefined,
    inLanguage: "en-SG",
    isAccessibleForFree: true,
    step: input.steps.map((step, index) => {
      const name = typeof step === "string" ? step : step.name;
      const text = typeof step === "string" ? step : step.text;
      return {
        "@type": "HowToStep",
        position: index + 1,
        name,
        text,
      };
    }),
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
    inLanguage: "en-SG",
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
