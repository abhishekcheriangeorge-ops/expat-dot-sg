import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Tool-sketch schema helpers — outside claimed seo*.ts through #237. */
export function webApplicationJsonLd(input: {
  name: string;
  description: string;
  path: string;
  applicationCategory?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    applicationCategory: input.applicationCategory ?? "UtilitiesApplication",
    operatingSystem: "Any",
    inLanguage: "en-SG",
    isAccessibleForFree: true,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "SGD",
    },
  };
}

export function toolsItemListJsonLd(
  tools: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "expat.sg tools",
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.name,
      url: absoluteUrl(tool.path),
    })),
  };
}
