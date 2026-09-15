import Link from "next/link";

const HUBS = [
  { href: "/guides", label: "Guides" },
  { href: "/journeys", label: "Journeys" },
  { href: "/tools", label: "Tools" },
  { href: "/neighbourhoods", label: "Neighbourhoods" },
  { href: "/schools", label: "Schools" },
  { href: "/clubs", label: "Clubs" },
  { href: "/directory", label: "Directory" },
  { href: "/arriving", label: "Arriving" },
  { href: "/living", label: "Living" },
] as const;

/** Below-fold hub strip — keeps the hero brand-first. */
export function HomeHubs() {
  return (
    <section className="border-t border-fog-soft bg-paper-elevated px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-[var(--max-page)]">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tungsten">
          Start here
        </p>
        <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {HUBS.map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              {hub.label}
            </Link>
          ))}
        </p>
      </div>
    </section>
  );
}
