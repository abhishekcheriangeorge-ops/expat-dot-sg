import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[var(--max-page)] px-5 py-24 sm:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-tungsten">
        404
      </p>
      <h1 className="mt-4 font-display text-4xl font-medium tracking-[-0.025em] text-ink sm:text-5xl">
        This page is not on the map.
      </h1>
      <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
        The link may be old, or the page moved. Start from Arriving, Living, or
        the guides index.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center border border-ink bg-ink px-6 py-3 text-[12.5px] font-bold uppercase tracking-[0.08em] text-paper no-underline hover:bg-canopy"
        >
          Home
        </Link>
        <Link
          href="/guides"
          className="inline-flex min-h-[44px] items-center border border-ink px-6 py-3 text-[12.5px] font-bold uppercase tracking-[0.08em] text-ink no-underline hover:bg-paper-elevated"
        >
          Guides
        </Link>
      </div>
    </div>
  );
}
