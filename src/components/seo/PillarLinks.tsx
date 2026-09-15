import Link from "next/link";
import { PILLARS } from "@/lib/seo-pillars";

type PillarLinksProps = {
  label?: string;
  className?: string;
  /** Limit to a subset of pillar slugs when needed */
  slugs?: readonly string[];
};

/**
 * Seven-pillar hub strip — distinct from TopicLinks / FaqLinks /
 * SectionLinks in open G drafts through #279.
 */
export function PillarLinks({
  label = "Explore by pillar",
  className,
  slugs,
}: PillarLinksProps) {
  const pillars = slugs?.length
    ? PILLARS.filter((p) => slugs.includes(p.slug))
    : [...PILLARS];
  if (!pillars.length) return null;

  return (
    <nav
      aria-label={label}
      className={className ?? "mt-10"}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={label} />
      <meta itemProp="numberOfItems" content={String(pillars.length)} />
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
        {label}
      </p>
      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {pillars.map((pillar, index) => (
          <li
            key={pillar.slug}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={String(index + 1)} />
            <Link
              href={pillar.path}
              itemProp="url"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              <span itemProp="name">{pillar.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
