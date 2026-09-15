import Link from "next/link";
import type { Pillar } from "@/lib/content/schemas";

const HUBS_BY_PILLAR: Record<Pillar, { href: string; label: string }[]> = {
  move: [
    { href: "/journeys", label: "Journeys" },
    { href: "/journeys/arriving", label: "Arriving checklists" },
    { href: "/tools", label: "Tools" },
    { href: "/arriving", label: "Arriving hub" },
    { href: "/directory", label: "Directory" },
  ],
  home: [
    { href: "/neighbourhoods", label: "Neighbourhoods" },
    { href: "/tools", label: "Tools" },
    { href: "/living", label: "Living hub" },
    { href: "/directory", label: "Directory" },
  ],
  money: [
    { href: "/tools", label: "Tools" },
    { href: "/journeys/between-jobs", label: "Between jobs" },
    { href: "/living", label: "Living hub" },
  ],
  family: [
    { href: "/schools", label: "Schools" },
    { href: "/neighbourhoods", label: "Neighbourhoods" },
    { href: "/calendar", label: "Calendar" },
    { href: "/living", label: "Living hub" },
  ],
  life: [
    { href: "/directory", label: "Directory" },
    { href: "/neighbourhoods", label: "Neighbourhoods" },
    { href: "/living", label: "Living hub" },
    { href: "/clubs", label: "Clubs" },
  ],
  belong: [
    { href: "/clubs", label: "Clubs" },
    { href: "/living", label: "Living hub" },
    { href: "/life", label: "Life pillar" },
  ],
  next: [
    { href: "/journeys", label: "Journeys" },
    { href: "/journeys/leaving", label: "Leaving playbook" },
    { href: "/journeys/between-jobs", label: "Between jobs" },
    { href: "/tools", label: "Tools" },
  ],
};

type GuideHubLinksProps = {
  pillar: Pillar;
};

/** Static Explore hubs plane — sitewide guide long-tail equity without MDX edits. */
export function GuideHubLinks({ pillar }: GuideHubLinksProps) {
  const hubs = HUBS_BY_PILLAR[pillar];
  return (
    <nav aria-label="Explore related hubs">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
        Explore hubs
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
