import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Citation / CreativeWork helpers — outside claimed seo*.ts through #299. */

export function creativeWorkJsonLd(input: {
  name: string;
  description: string;
  path: string;
  dateModified?: string;
  citation?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    dateModified: input.dateModified,
    inLanguage: "en-SG",
    citation: input.citation,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function citeItemListJsonLd(input: {
  name?: string;
  path?: string;
  items: Array<{ name: string; path: string }>;
}) {
  const path = input.path ?? "/about";
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name ?? `${SITE_NAME} citation sources`,
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
