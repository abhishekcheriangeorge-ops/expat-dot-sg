import Link from "next/link";

export type PathLink = {
  href: string;
  label: string;
};

type PathLinksProps = {
  label?: string;
  links: readonly PathLink[];
  className?: string;
};

/** Lightweight path strip — distinct from ContinueLinks (#228) / LinkRail (#220). */
export function PathLinks({
  label = "Related paths",
  links,
  className,
}: PathLinksProps) {
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
