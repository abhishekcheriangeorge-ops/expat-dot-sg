import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Collection / hub ItemList helpers — outside claimed seo*.ts through #267. */

export type CollectionListItem = {
  name: string;
  path: string;
};

const HUB_DEFAULTS = {
  schools: {
    name: `${SITE_NAME} schools`,
    path: "/schools",
  },
  neighbourhoods: {
    name: `${SITE_NAME} neighbourhoods`,
    path: "/neighbourhoods",
  },
  clubs: {
    name: `${SITE_NAME} clubs`,
    path: "/clubs",
  },
  directory: {
    name: `${SITE_NAME} directory`,
    path: "/directory",
  },
  tools: {
    name: `${SITE_NAME} tools`,
    path: "/tools",
  },
} as const;

export type CollectionHub = keyof typeof HUB_DEFAULTS;

export function collectionItemListJsonLd(input: {
  hub: CollectionHub;
  name?: string;
  path?: string;
  items: CollectionListItem[];
}) {
  const defaults = HUB_DEFAULTS[input.hub];
  const path = input.path ?? defaults.path;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name ?? defaults.name,
    url: absoluteUrl(path),
    numberOfItems: input.items.length,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

/** Hub CollectionPage — distinct from base `collectionPageJsonLd` in seo.ts. */
export function hubCollectionPageJsonLd(input: {
  hub: CollectionHub;
  description: string;
  name?: string;
  path?: string;
}) {
  const defaults = HUB_DEFAULTS[input.hub];
  const path = input.path ?? defaults.path;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: input.name ?? defaults.name,
    description: input.description,
    url: absoluteUrl(path),
    inLanguage: "en-SG",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}
