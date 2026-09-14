import type { ReactNode } from "react";

type FeaturedBadgeProps = {
  /** When true, render the Phase 5 monetization badge */
  featured?: boolean;
  /** Optional sponsored label (also Phase 5-ready) */
  sponsored?: boolean;
  className?: string;
};

/**
 * Featured / sponsored badges — wired to entity `featured` + `sponsored` fields.
 * Phase 5 turns these on via content / Neon inventory without UI rewrites.
 */
export function FeaturedBadge({
  featured = false,
  sponsored = false,
  className = "",
}: FeaturedBadgeProps) {
  if (!featured && !sponsored) return null;

  return (
    <span className={`inline-flex flex-wrap items-center gap-2 ${className}`}>
      {featured ? (
        <span className="inline-flex items-center bg-tungsten px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink">
          Featured
        </span>
      ) : null}
      {sponsored ? (
        <span className="inline-flex items-center border border-sponsored/40 bg-sponsored/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-sponsored">
          Sponsored
        </span>
      ) : null}
    </span>
  );
}

type DirectoryHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  meta?: ReactNode;
};

export function DirectoryHero({
  eyebrow,
  title,
  description,
  meta,
}: DirectoryHeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-fog-soft">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_0%,color-mix(in_srgb,var(--canopy-mist)_22%,transparent),transparent_50%),radial-gradient(ellipse_at_100%_20%,color-mix(in_srgb,var(--tungsten)_10%,transparent),transparent_40%)]"
      />
      <div className="relative mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-canopy-mist">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight text-canopy-deep sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">
          {description}
        </p>
        {meta ? <div className="mt-6 text-sm text-ink-faint">{meta}</div> : null}
      </div>
    </header>
  );
}

type DetailHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  badges?: ReactNode;
  facts?: { label: string; value: string }[];
};

export function DetailHero({
  eyebrow,
  title,
  summary,
  badges,
  facts,
}: DetailHeroProps) {
  return (
    <header className="relative overflow-hidden bg-canopy-deep text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,color-mix(in_srgb,var(--tungsten)_18%,transparent),transparent_45%),linear-gradient(180deg,transparent,color-mix(in_srgb,var(--dusk)_55%,transparent))]"
      />
      <div className="relative mx-auto max-w-[var(--max-page)] px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tungsten-soft">
          {eyebrow}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <h1 className="font-display text-4xl leading-tight sm:text-5xl">{title}</h1>
          {badges}
        </div>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fog">{summary}</p>
        {facts && facts.length > 0 ? (
          <dl className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-tungsten-soft">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-paper">{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </header>
  );
}
