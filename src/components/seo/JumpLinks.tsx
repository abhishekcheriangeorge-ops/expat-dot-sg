import type { TocItem } from "@/lib/content/toc";

type JumpLinksProps = {
  items: TocItem[];
  label?: string;
  className?: string;
};

/** In-page jump list — distinct from TrailLinks (#244) / PathLinks (#237). */
export function JumpLinks({
  items,
  label = "On this page",
  className,
}: JumpLinksProps) {
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
      <ol className="space-y-2 border-l border-fog-soft">
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
              className={
                item.depth === 3
                  ? "block border-l-2 border-transparent py-0.5 pl-5 text-ink-faint no-underline hover:text-ink-muted"
                  : "block border-l-2 border-transparent py-0.5 pl-3 text-ink-faint no-underline hover:text-ink-muted"
              }
            >
              <span itemProp="name">{item.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
