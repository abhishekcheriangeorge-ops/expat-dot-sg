import Link from "next/link";

export type CiteLink = {
  href: string;
  label: string;
  note?: string;
};

type CiteRailProps = {
  label?: string;
  links: readonly CiteLink[];
  className?: string;
};

/**
 * Citation / source rail — distinct from TrailLinks / PathLinks / TopicLinks
 * in open G drafts through #267.
 */
export function CiteRail({
  label = "Sources & citations",
  links,
  className,
}: CiteRailProps) {
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
            className="flex flex-wrap items-baseline gap-x-2 gap-y-1"
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
            {link.note ? (
              <span className="text-xs text-ink-faint">— {link.note}</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
