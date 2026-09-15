import Link from "next/link";

export type GlossaryLink = {
  href: string;
  term: string;
  gloss?: string;
};

type GlossaryLinksProps = {
  label?: string;
  links: readonly GlossaryLink[];
  className?: string;
};

/**
 * Glossary / definition strip — distinct from FaqLinks / TopicLinks /
 * CiteRail in open G drafts through #272.
 */
export function GlossaryLinks({
  label = "Glossary",
  links,
  className,
}: GlossaryLinksProps) {
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
      <ul className="mt-3 space-y-2 text-sm">
        {links.map((link, index) => (
          <li
            key={link.href}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex flex-wrap items-baseline gap-x-2 gap-y-1"
          >
            <meta itemProp="position" content={String(index + 1)} />
            <Link
              href={link.href}
              itemProp="url"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              <span itemProp="name">{link.term}</span>
            </Link>
            {link.gloss ? (
              <span className="text-xs text-ink-faint">— {link.gloss}</span>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
