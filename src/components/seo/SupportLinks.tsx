import Link from "next/link";

export type SupportLink = {
  href: string;
  label: string;
};

type SupportLinksProps = {
  label?: string;
  links: readonly SupportLink[];
  className?: string;
};

/**
 * Support path strip — distinct from HelpLinks / ContactLinks / UtilityLinks
 * in open G drafts through #307.
 */
export function SupportLinks({
  label = "Support paths",
  links,
  className,
}: SupportLinksProps) {
  if (!links.length) return null;

  return (
    <nav
      aria-label={label}
      className={className ?? "mt-8"}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={label} />
      <meta itemProp="numberOfItems" content={String(links.length)} />
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
        {label}
      </p>
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((link, index) => (
          <li
            key={link.href}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={String(index + 1)} />
            <Link
              href={link.href}
              itemProp="url"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              <span itemProp="name">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
