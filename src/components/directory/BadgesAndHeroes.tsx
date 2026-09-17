import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/seo";
import type { BreadcrumbItem } from "@/lib/seo";

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
        <span className="inline-flex items-center bg-tungsten-soft px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-ink">
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
  crumbs?: BreadcrumbItem[];
};

export function DirectoryHero({
  eyebrow,
  title,
  description,
  meta,
  crumbs,
}: DirectoryHeroProps) {
  return (
    <header className="border-b border-ink bg-paper">
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8 sm:py-16">
        {crumbs?.length ? <Breadcrumbs items={crumbs} className="mb-6" /> : null}
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-tungsten">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
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
    <header className="bg-canopy-deep text-paper">
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-tungsten-soft">
          {eyebrow}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-[-0.02em] sm:text-5xl">
            {title}
          </h1>
          {badges}
        </div>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#e9e4d6]">
          {summary}
        </p>
        {facts && facts.length > 0 ? (
          <dl className="mt-10 grid gap-6 border-t border-tungsten-soft/20 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-tungsten-soft">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm leading-snug text-paper">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </header>
  );
}
