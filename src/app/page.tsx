import { FadeIn } from "@/components/motion";

/**
 * Phase 0 scaffold home — full Humidity Editorial composition ships in Phase 1.
 */
export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,color-mix(in_srgb,var(--canopy-mist)_18%,transparent),transparent_55%),radial-gradient(ellipse_at_90%_40%,color-mix(in_srgb,var(--tungsten)_12%,transparent),transparent_45%)]"
      />

      <section className="relative mx-auto flex min-h-[70vh] max-w-[var(--max-page)] flex-col justify-center px-5 py-24 sm:px-8">
        <FadeIn>
          <p className="font-display text-4xl tracking-tight text-canopy-deep sm:text-6xl">
            expat.sg
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="mt-6 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-5xl">
            Singapore expat life, from the offer letter to year three.
          </h1>
        </FadeIn>
        <FadeIn delay={0.18}>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
            Foundation scaffolding is live. Full home composition, journeys,
            and directories arrive in the next build phases.
          </p>
        </FadeIn>
        <FadeIn delay={0.26}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/arriving"
              className="inline-flex items-center bg-canopy px-6 py-3 text-sm font-semibold text-paper no-underline transition-colors hover:bg-canopy-mist"
            >
              Arriving
            </a>
            <a
              href="/living"
              className="inline-flex items-center border border-ink/20 bg-transparent px-6 py-3 text-sm font-semibold text-ink no-underline transition-colors hover:border-ink/40"
            >
              Living
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
