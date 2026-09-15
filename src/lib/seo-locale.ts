import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Locale / language helpers — outside claimed seo*.ts through #285. */

export const SITE_LANGUAGE = "en-SG";
export const SITE_LOCALE = "en_SG";

export function webpageInLanguageJsonLd(input: {
  name: string;
  description: string;
  path: string;
  language?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: input.language ?? SITE_LANGUAGE,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
      inLanguage: SITE_LANGUAGE,
    },
  };
}

/** Single-locale site for now — documents en-SG as the canonical language. */
export function websiteLanguageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: getSiteUrl(),
    inLanguage: SITE_LANGUAGE,
  };
}
