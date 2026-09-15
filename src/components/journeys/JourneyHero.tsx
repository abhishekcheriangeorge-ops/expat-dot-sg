import Link from "next/link";
import { FadeIn } from "@/components/motion";

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
    <header className="relative overflow-hidden border-b border-fog-soft">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,color-mix(in_srgb,var(--canopy-mist)_22%,transparent),transparent_50%),radial-gradient(ellipse_at_95%_30%,color-mix(in_srgb,var(--tungsten)_10%,transparent),transparent_40%)]"
      />
      <div className="relative mx-auto max-w-[var(--max-page)] px-5 py-16 sm:px-8 sm:py-20">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-canopy-mist">
            {eyebrow}
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-5xl">
            {title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.14}>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            {summary}
          </p>
        </FadeIn>
        {lastReviewed ? (
          <FadeIn delay={0.2}>
            <p className="mt-6 text-sm text-ink-faint">
              Last reviewed {lastReviewed}
            </p>
          </FadeIn>
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
      className="flex flex-wrap gap-2 border-b border-fog-soft bg-paper-elevated/60 px-5 py-4 sm:px-8"
    >
      <div className="mx-auto flex w-full max-w-[var(--max-page)] flex-wrap items-center gap-2">
        <Link
          href="/journeys/arriving"
          className="mr-2 text-sm font-medium text-ink-muted no-underline hover:text-ink"
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
                  ? "bg-canopy px-4 py-2 text-sm font-semibold text-paper no-underline"
                  : "border border-ink/15 bg-transparent px-4 py-2 text-sm font-medium text-ink no-underline transition-colors hover:border-ink/35"
              }
            >
              {p.label}
            </Link>
          );
        })}
        <Link
          href="/journeys/pre-arrival"
          className="ml-auto text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
        >
          Pre-arrival →
        </Link>
        <Link
          href="/journeys/leaving"
          className="text-sm font-medium text-ink-muted no-underline hover:text-ink"
        >
          Leaving →
        </Link>
      </div>
    </nav>
  );
}
