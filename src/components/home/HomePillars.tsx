"use client";

import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { pillars } from "@/lib/site";

/** Below-fold pillar reveal — kept out of the first viewport by design. */
export function HomePillars() {
  return (
    <section className="border-t border-fog-soft bg-paper px-5 py-[var(--space-section)] sm:px-8">
      <div className="mx-auto max-w-[var(--max-page)]">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tungsten">
            Seven pillars
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight text-ink sm:text-4xl">
            Everything maps to one of these.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted">
            Enter through Arriving or Living — then navigate by life category,
            not by random blog tags.
          </p>
        </FadeIn>

        <Stagger className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.slug}>
              <Link
                href={pillar.href}
                className="group block no-underline"
              >
                <p className="font-display text-2xl text-canopy-deep transition-colors group-hover:text-canopy-mist">
                  {pillar.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {pillar.tagline}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
