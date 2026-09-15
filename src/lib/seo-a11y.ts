import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Accessibility page helpers — outside claimed seo*.ts through #311. */

export function accessibilityWebPageJsonLd(input?: {
  name?: string;
  description?: string;
  path?: string;
}) {
  const path = input?.path ?? "/about";
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input?.name ?? `${SITE_NAME} accessibility`,
    description:
      input?.description ??
      "Accessibility commitments and skip-link / landmark guidance for expat.sg.",
    url: absoluteUrl(path),
    inLanguage: "en-SG",
    accessibilityFeature: [
      "alternativeText",
      "readingOrder",
      "structuralNavigation",
    ],
    accessibilityHazard: "none",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function a11yItemListJsonLd(input: {
  name?: string;
  path?: string;
  items: Array<{ name: string; path: string }>;
}) {
  const path = input.path ?? "/about";
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name ?? `${SITE_NAME} accessibility links`,
    url: absoluteUrl(path),
    numberOfItems: input.items.length,
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}
