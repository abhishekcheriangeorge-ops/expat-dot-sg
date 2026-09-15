import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "That URL is not on expat.sg — try Arriving, Living, Guides, Journeys, or Tools.",
  robots: { index: false, follow: true },
};

const HUBS = [
  { href: "/arriving", label: "Arriving" },
  { href: "/living", label: "Living" },
  { href: "/guides", label: "Guides" },
  { href: "/journeys", label: "Journeys" },
  { href: "/tools", label: "Tools" },
  { href: "/directory", label: "Directory" },
  { href: "/schools", label: "Schools" },
  { href: "/neighbourhoods", label: "Neighbourhoods" },
] as const;

/** Soft-404 recovery shell — hub equity without touching claimed route pages. */
export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-[var(--max-page)] px-5 py-20 sm:px-8 sm:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tungsten">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
        This page is not on the map.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
        The link may be outdated, mistyped, or never published. Start from a hub
        instead of bouncing to the homepage alone.
      </p>
      <nav aria-label="Recovery hubs" className="mt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
          Continue here
        </p>
        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
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
      </nav>
      <p className="mt-14">
        <Link
          href="/"
          className="text-sm font-medium text-ink-muted no-underline underline-offset-4 hover:text-ink hover:underline"
        >
          ← Home
        </Link>
      </p>
    </div>
  );
}
