import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Community hub helpers — outside claimed seo*.ts through #307. Not ads. */

export function communityItemListJsonLd(input: {
  name?: string;
  path?: string;
  items: Array<{ name: string; path: string }>;
}) {
  const path = input.path ?? "/belong";
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name ?? `${SITE_NAME} community hubs`,
    url: absoluteUrl(path),
    numberOfItems: input.items.length,
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function communityWebPageJsonLd(input?: {
  name?: string;
  description?: string;
  path?: string;
}) {
  const path = input?.path ?? "/belong";
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input?.name ?? `${SITE_NAME} community`,
    description:
      input?.description ??
      "Clubs, neighbourhood belonging, and community pathways for Singapore expats.",
    url: absoluteUrl(path),
    inLanguage: "en-SG",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}
