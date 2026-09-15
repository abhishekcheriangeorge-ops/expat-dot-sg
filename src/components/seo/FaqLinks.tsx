import Link from "next/link";

export type FaqLink = {
  href: string;
  question: string;
};

type FaqLinksProps = {
  label?: string;
  links: readonly FaqLink[];
  className?: string;
};

/**
 * FAQ jump strip — distinct from TopicLinks / CiteRail / JumpLinks /
 * EventRail in open G drafts through #272.
 */
export function FaqLinks({
  label = "Common questions",
  links,
  className,
}: FaqLinksProps) {
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
          >
            <meta itemProp="position" content={String(index + 1)} />
            <Link
              href={link.href}
              itemProp="url"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              <span itemProp="name">{link.question}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
