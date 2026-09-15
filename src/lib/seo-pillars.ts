import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** Pillar hub ItemList helpers — outside claimed seo*.ts through #279. */

export const PILLARS = [
  { slug: "move", label: "Move", path: "/move" },
  { slug: "home", label: "Home", path: "/home" },
  { slug: "money", label: "Money", path: "/money" },
  { slug: "family", label: "Family", path: "/family" },
  { slug: "life", label: "Life", path: "/life" },
  { slug: "belong", label: "Belong", path: "/belong" },
  { slug: "next", label: "Next", path: "/next" },
] as const;

export type PillarSlug = (typeof PILLARS)[number]["slug"];

export function pillarsItemListJsonLd(input?: {
  name?: string;
  path?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input?.name ?? `${SITE_NAME} pillars`,
    url: absoluteUrl(input?.path ?? "/"),
    numberOfItems: PILLARS.length,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    itemListElement: PILLARS.map((pillar, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: pillar.label,
      url: absoluteUrl(pillar.path),
    })),
  };
}

export function pillarCollectionPageJsonLd(input: {
  slug: PillarSlug;
  description: string;
}) {
  const pillar = PILLARS.find((p) => p.slug === input.slug);
  if (!pillar) return null;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${pillar.label} — ${SITE_NAME}`,
    description: input.description,
    url: absoluteUrl(pillar.path),
    inLanguage: "en-SG",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
  };
}
