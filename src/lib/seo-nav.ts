import { absoluteUrl } from "@/lib/seo";

/** In-page anchor / skip-target helpers — outside claimed seo*.ts through #252. */

export type AnchorNavItem = {
  id: string;
  label: string;
};

export type SkipTarget = {
  href: string;
  label: string;
};

/** Safe default — `#main-content` exists on SiteShell today. */
export const DEFAULT_SKIP_TARGETS: readonly SkipTarget[] = [
  { href: "#main-content", label: "Skip to main content" },
] as const;

/**
 * Suggested extra targets once chrome exposes matching ids
 * (`#site-nav`, `#site-footer`). Pass explicitly via SkipTrail props.
 */
export const EXTENDED_SKIP_TARGETS: readonly SkipTarget[] = [
  { href: "#main-content", label: "Skip to main content" },
  { href: "#site-nav", label: "Skip to navigation" },
  { href: "#site-footer", label: "Skip to footer" },
] as const;

export function anchorItemListJsonLd(input: {
  name: string;
  path: string;
  items: AnchorNavItem[];
}) {
  if (!input.items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: input.name,
    url: absoluteUrl(input.path),
    numberOfItems: input.items.length,
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      url: absoluteUrl(`${input.path}#${item.id}`),
    })),
  };
}

export function toAnchorNavItems(
  items: Array<{ id: string; title: string }>,
): AnchorNavItem[] {
  return items.map((item) => ({ id: item.id, label: item.title }));
}
