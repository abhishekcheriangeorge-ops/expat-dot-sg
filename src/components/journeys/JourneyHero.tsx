import Link from "next/link";

type JourneyHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  lastReviewed?: string;
};

export function JourneyHero({
  eyebrow,
  title,
  summary,
  lastReviewed,
}: JourneyHeroProps) {
  return (
    <header className="border-b border-ink bg-paper">
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-tungsten">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
          {summary}
        </p>
        {lastReviewed ? (
          <p className="mt-6 text-sm text-ink-faint">
            Last reviewed {lastReviewed}
          </p>
        ) : null}
      </div>
    </header>
  );
}

const arrivingPhases = [
  { href: "/journeys/arriving/day-7", label: "7 days", phase: "day-7" },
  { href: "/journeys/arriving/day-30", label: "30 days", phase: "day-30" },
  { href: "/journeys/arriving/day-90", label: "90 days", phase: "day-90" },
] as const;

type PhaseNavProps = {
  active?: (typeof arrivingPhases)[number]["phase"];
};

export function ArrivingPhaseNav({ active }: PhaseNavProps) {
  return (
    <nav
      aria-label="Arriving checklist phases"
      className="border-b border-ink/15 bg-paper-elevated/60 px-5 py-3 sm:px-8"
    >
      <div className="mx-auto flex w-full max-w-[var(--max-page)] flex-wrap items-center gap-2">
        <Link
          href="/journeys/arriving"
          aria-current={active ? undefined : "page"}
          className="mr-2 rounded-sm px-3 py-2.5 text-sm font-medium text-ink-muted no-underline hover:text-ink focus-visible:outline-2 focus-visible:outline-tungsten"
        >
          Arriving overview
        </Link>
        {arrivingPhases.map((p) => {
          const isActive = active === p.phase;
          return (
            <Link
              key={p.phase}
              href={p.href}
              aria-current={isActive ? "page" : undefined}
              className={
                isActive
                  ? "rounded-sm bg-ink px-4 py-2.5 text-sm font-semibold text-paper no-underline"
                  : "rounded-sm border border-ink/15 bg-transparent px-4 py-2.5 text-sm font-medium text-ink no-underline transition-colors hover:border-ink/40 focus-visible:outline-2 focus-visible:outline-tungsten"
              }
            >
              {p.label}
            </Link>
          );
        })}
        <Link
          href="/journeys/pre-arrival"
          className="ml-auto rounded-sm px-2 py-2.5 text-sm font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
        >
          Pre-arrival <span aria-hidden="true">→</span>
        </Link>
        <Link
          href="/journeys/leaving"
          className="rounded-sm px-2 py-2.5 text-sm font-medium text-ink-muted no-underline hover:text-ink focus-visible:outline-2 focus-visible:outline-tungsten"
        >
          Leaving <span aria-hidden="true">→</span>
        </Link>
      </div>
    </nav>
  );
}
