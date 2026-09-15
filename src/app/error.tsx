"use client";

import { useEffect } from "react";
import Link from "next/link";

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

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/** Runtime error recovery shell — hub equity without claiming not-found (#195). */
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto w-full max-w-[var(--max-page)] px-5 py-20 sm:px-8 sm:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tungsten">
        Error
      </p>
      <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
        Something broke on this page.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
        A temporary fault stopped this view from rendering. Retry, or jump to a
        hub while we keep the rest of the site reachable.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <button
          type="button"
          onClick={reset}
          className="bg-canopy px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-canopy-mist"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-5 py-2.5 text-sm font-medium text-ink-muted no-underline underline-offset-4 hover:text-ink hover:underline"
        >
          Home
        </Link>
      </div>
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
    </div>
  );
}
