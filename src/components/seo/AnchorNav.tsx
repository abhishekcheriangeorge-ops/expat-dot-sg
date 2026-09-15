import type { AnchorNavItem } from "@/lib/seo-nav";

type AnchorNavProps = {
  items: readonly AnchorNavItem[];
  label?: string;
  className?: string;
};

/**
 * Section-anchor nav with ItemList microdata — takes {id,label}[], not TocItem
 * (distinct from JumpLinks in #252).
 */
export function AnchorNav({
  items,
  label = "Sections",
  className,
}: AnchorNavProps) {
  if (!items.length) return null;

  return (
    <nav
      aria-label={label}
      className={className ?? "text-sm"}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={label} />
      <meta itemProp="numberOfItems" content={String(items.length)} />
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
        {label}
      </p>
      <ol className="flex flex-wrap gap-x-4 gap-y-2">
        {items.map((item, index) => (
          <li
            key={item.id}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={String(index + 1)} />
            <a
              href={`#${item.id}`}
              itemProp="url"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              <span itemProp="name">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
