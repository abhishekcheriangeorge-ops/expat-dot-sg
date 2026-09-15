import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";
import type { TocItem } from "@/lib/content/toc";

/** Feed / TOC schema helpers — outside claimed seo*.ts through #244. */
export function tocItemListJsonLd(input: {
  name: string;
  path: string;
  items: TocItem[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name,
    url: absoluteUrl(input.path),
    numberOfItems: input.items.length,
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: absoluteUrl(`${input.path}#${item.id}`),
    })),
  };
}

export function dataFeedJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DataFeed",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function hubItemListJsonLd(input: {
  name: string;
  description?: string;
  items: Array<{ name: string; path: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name,
    description: input.description,
    numberOfItems: input.items.length,
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}
