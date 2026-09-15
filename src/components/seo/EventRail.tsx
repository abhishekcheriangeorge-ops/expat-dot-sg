import Link from "next/link";

export type EventRailItem = {
  href: string;
  label: string;
  date?: string;
};

type EventRailProps = {
  label?: string;
  items: readonly EventRailItem[];
  className?: string;
};

/**
 * Calendar-oriented event strip — distinct from TrailLinks / PathLinks /
 * JumpLinks / AnchorNav in open G drafts through #261.
 */
export function EventRail({
  label = "Upcoming on the calendar",
  items,
  className,
}: EventRailProps) {
  if (!items.length) return null;

  return (
    <nav
      aria-label={label}
      className={className ?? "mt-10"}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={label} />
      <meta itemProp="numberOfItems" content={String(items.length)} />
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
        {label}
      </p>
      <ol className="mt-3 space-y-2 text-sm">
        {items.map((item, index) => (
          <li
            key={item.href}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex flex-wrap items-baseline gap-x-3 gap-y-1"
          >
            <meta itemProp="position" content={String(index + 1)} />
            {item.date ? (
              <time
                dateTime={item.date}
                className="shrink-0 font-mono text-xs text-ink-faint"
              >
                {item.date}
              </time>
            ) : null}
            <Link
              href={item.href}
              itemProp="url"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              <span itemProp="name">{item.label}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
