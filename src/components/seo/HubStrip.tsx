import Link from "next/link";

export type HubStripLink = {
  href: string;
  label: string;
};

type HubStripProps = {
  links: readonly HubStripLink[];
  label?: string;
};

/** Related hubs plane — separate from RelatedHubs / ExploreLinks / CrossLinks. */
export function HubStrip({
  links,
  label = "Related hubs",
}: HubStripProps) {
  return (
    <nav aria-label={label}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
        {label}
      </p>
      <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </p>
    </nav>
  );
}
