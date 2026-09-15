import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Brand / Organization sameAs helpers — outside claimed seo*.ts through #299. */

export function brandOrganizationJsonLd(input?: {
  sameAs?: string[];
  logoPath?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: getSiteUrl(),
    logo: absoluteUrl(input?.logoPath ?? "/opengraph-image"),
    sameAs: input?.sameAs ?? [],
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
  };
}

export function brandWebPageJsonLd(input?: {
  name?: string;
  description?: string;
  path?: string;
}) {
  const path = input?.path ?? "/about";
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input?.name ?? `${SITE_NAME} brand`,
    description:
      input?.description ??
      "Publisher identity and brand marks for expat.sg.",
    url: absoluteUrl(path),
    inLanguage: "en-SG",
    about: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}
