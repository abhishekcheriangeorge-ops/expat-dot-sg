import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/seo";

/** SiteNavigationElement helpers — outside claimed seo*.ts through #285. */

export type NavItem = {
  name: string;
  path: string;
};

export const PRIMARY_NAV: readonly NavItem[] = [
  { name: "Guides", path: "/guides" },
  { name: "Journeys", path: "/journeys" },
  { name: "Tools", path: "/tools" },
  { name: "Calendar", path: "/calendar" },
  { name: "Schools", path: "/schools" },
  { name: "Neighbourhoods", path: "/neighbourhoods" },
  { name: "Clubs", path: "/clubs" },
  { name: "Directory", path: "/directory" },
] as const;

export function siteNavigationJsonLd(items: readonly NavItem[] = PRIMARY_NAV) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} primary navigation`,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "SiteNavigationElement",
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
