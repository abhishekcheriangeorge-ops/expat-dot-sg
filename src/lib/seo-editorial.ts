import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Editorial / AboutPage helpers — outside claimed seo*.ts through #292. */

export function aboutPageJsonLd(input?: {
  name?: string;
  description?: string;
  path?: string;
}) {
  const path = input?.path ?? "/about";
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: input?.name ?? `About ${SITE_NAME}`,
    description:
      input?.description ??
      "Publisher and editorial stance for Singapore expat life guides.",
    url: absoluteUrl(path),
    inLanguage: "en-SG",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function editorialPolicyJsonLd(input?: {
  name?: string;
  description?: string;
  path?: string;
}) {
  const path = input?.path ?? "/editorial-policy";
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input?.name ?? `${SITE_NAME} editorial policy`,
    description:
      input?.description ??
      "How expat.sg sources, reviews, and updates editorial guides.",
    url: absoluteUrl(path),
    inLanguage: "en-SG",
    about: {
      "@type": "Thing",
      name: "Editorial standards",
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}
