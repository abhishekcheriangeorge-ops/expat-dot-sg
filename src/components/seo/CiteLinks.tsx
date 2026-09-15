import Link from "next/link";

export type CiteLinkItem = {
  href: string;
  label: string;
};

type CiteLinksProps = {
  label?: string;
  links: readonly CiteLinkItem[];
  className?: string;
};

/**
 * Citation source strip — distinct from CiteRail / BrandLinks
 * in open G drafts through #299.
 */
export function CiteLinks({
  label = "Cite & sources",
  links,
  className,
}: CiteLinksProps) {
  if (!links.length) return null;

  return (
    <nav
      aria-label={label}
      className={className ?? "mt-10"}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={label} />
      <meta itemProp="numberOfItems" content={String(links.length)} />
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
        {label}
      </p>
      <ol className="mt-3 space-y-2 text-sm">
        {links.map((link, index) => (
          <li
            key={link.href}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex flex-wrap items-baseline gap-x-2"
          >
            <meta itemProp="position" content={String(index + 1)} />
            <span className="font-mono text-xs text-ink-faint">
              [{index + 1}]
            </span>
            <Link
              href={link.href}
              itemProp="url"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              target={link.href.startsWith("http") ? "_blank" : undefined}
            >
              <span itemProp="name">{link.label}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
