import Link from "next/link";
import { PRIMARY_NAV, type NavItem } from "@/lib/seo-site-nav";

type HubLinksProps = {
  label?: string;
  items?: readonly NavItem[];
  className?: string;
};

/**
 * Primary hub strip — distinct from PillarLinks / TopicLinks / QuickLinks
 * in open G drafts through #285.
 */
export function HubLinks({
  label = "Main hubs",
  items = PRIMARY_NAV,
  className,
}: HubLinksProps) {
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
      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {items.map((item, index) => (
          <li
            key={item.path}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={String(index + 1)} />
            <Link
              href={item.path}
              itemProp="url"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              <span itemProp="name">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
