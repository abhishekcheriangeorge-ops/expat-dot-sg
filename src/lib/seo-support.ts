import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Help / support hub helpers — outside claimed seo*.ts through #307. */

export function supportWebPageJsonLd(input?: {
  name?: string;
  description?: string;
  path?: string;
}) {
  const path = input?.path ?? "/about";
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input?.name ?? `${SITE_NAME} help & support`,
    description:
      input?.description ??
      "Where to find guides, tools, and contact paths on expat.sg.",
    url: absoluteUrl(path),
    inLanguage: "en-SG",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function helpItemListJsonLd(input: {
  name?: string;
  path?: string;
  items: Array<{ name: string; path: string }>;
}) {
  const path = input.path ?? "/guides";
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name ?? `${SITE_NAME} help links`,
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
