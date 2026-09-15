import Link from "next/link";

export type PhaseLink = {
  href: string;
  label: string;
  phase?: string;
};

type PhaseLinksProps = {
  label?: string;
  links: readonly PhaseLink[];
  className?: string;
};

/**
 * Journey-phase link strip — distinct from ContinueLinks / MoreLinks /
 * EventRail in open G drafts through #261.
 */
export function PhaseLinks({
  label = "Journey phases",
  links,
  className,
}: PhaseLinksProps) {
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
      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
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
              {link.phase ? (
                <span className="ml-1.5 text-xs font-normal text-ink-faint">
                  ({link.phase})
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
