import Link from "next/link";

export type SectionLink = {
  href: string;
  label: string;
};

type SectionLinksProps = {
  label?: string;
  links: readonly SectionLink[];
  className?: string;
};

/**
 * In-page / hub section strip — distinct from JumpLinks / PillarLinks /
 * PhaseLinks in open G drafts through #279.
 */
export function SectionLinks({
  label = "In this section",
  links,
  className,
}: SectionLinksProps) {
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
      <ol className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
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
      </ol>
    </nav>
  );
}
