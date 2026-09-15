import Link from "next/link";

export type RelatedHub = {
  href: string;
  label: string;
};

type RelatedHubsProps = {
  hubs: readonly RelatedHub[];
  label?: string;
};

/** Static Related hubs plane for journey/tool shell fill. */
export function RelatedHubs({
  hubs,
  label = "Related hubs",
}: RelatedHubsProps) {
  return (
    <nav aria-label={label}>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
        {label}
      </p>
      <p className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {hubs.map((hub) => (
          <Link
            key={hub.href}
            href={hub.href}
            className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
          >
            {hub.label}
          </Link>
        ))}
      </p>
    </nav>
  );
}
