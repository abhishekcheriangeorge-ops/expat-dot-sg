type ToolAboutProps = {
  /** Numbered methodology — what the sketch actually computes */
  how: string[];
  /** What to do with the result */
  actions: string[];
  /** Agency or source behind the figures, e.g. "MOM" or "your school handbook" */
  sourceLabel: string;
  /** Verified primary-source URL; omit when the source lives on-site */
  sourceHref?: string;
  /** ISO review date shown beside the source */
  reviewed: string;
};

/**
 * Standard resource block under every calculator: methodology, next actions,
 * and provenance. Gives each tool page landing-page weight.
 */
export function ToolAbout({
  how,
  actions,
  sourceLabel,
  sourceHref,
  reviewed,
}: ToolAboutProps) {
  return (
    <section
      aria-labelledby="tool-about-heading"
      className="mt-14 border-t border-ink pt-10"
    >
      <h2
        id="tool-about-heading"
        className="font-display text-2xl font-medium tracking-tight text-ink"
      >
        How this sketch works
      </h2>
      <ol className="mt-6 space-y-4">
        {how.map((step, i) => (
          <li key={step.slice(0, 32)} className="grid grid-cols-[2.5rem_1fr] gap-4">
            <span
              aria-hidden="true"
              className="font-display text-[15px] text-tungsten"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="max-w-2xl text-[15px] leading-relaxed text-ink-muted">
              {step}
            </p>
          </li>
        ))}
      </ol>

      <h3 className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-tungsten">
        What to do with the number
      </h3>
      <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-muted">
        {actions.map((action) => (
          <li key={action.slice(0, 32)}>{action}</li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-ink-faint">
        Reviewed {reviewed} · Figures checked against {sourceHref ? (
          <a
            href={sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm font-medium text-canopy underline decoration-tungsten/60 underline-offset-4 hover:decoration-tungsten focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            {sourceLabel}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <span className="font-medium text-ink-muted">{sourceLabel}</span>
        )}
        . Sketches are orientation, not advice for your file.
      </p>
    </section>
  );
}
