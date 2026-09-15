import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Profile / account helpers — outside claimed seo*.ts through #333. */

export function profileWebPageJsonLd(input?: {
  name?: string;
  description?: string;
  path?: string;
}) {
  const path = input?.path ?? "/about";
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input?.name ?? `${SITE_NAME} profile`,
    description:
      input?.description ??
      "Account and profile discovery paths for expat.sg (no ads).",
    url: absoluteUrl(path),
    inLanguage: "en-SG",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function profileItemListJsonLd(input: {
  name?: string;
  path?: string;
  items: Array<{ name: string; path: string }>;
}) {
  const path = input.path ?? "/about";
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name ?? `${SITE_NAME} profile links`,
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
