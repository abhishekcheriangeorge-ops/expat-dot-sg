import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Leaving / exit journey helpers — outside claimed seo*.ts through #285. */

export function leavingHowToJsonLd(input: {
  name: string;
  description: string;
  path: string;
  steps: Array<{ name: string; text: string }>;
}) {
  if (!input.steps.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    inLanguage: "en-SG",
    step: input.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}

export function leavingItemListJsonLd(input: {
  name?: string;
  path?: string;
  items: Array<{ name: string; path: string }>;
}) {
  const path = input.path ?? "/journeys/leaving";
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name ?? `${SITE_NAME} leaving Singapore`,
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
