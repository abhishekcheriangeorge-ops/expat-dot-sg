import type { GuideFrontmatter } from "@/lib/content/schemas";

type GuideCitationsProps = {
  citations: GuideFrontmatter["citations"];
};

export function GuideCitations({ citations }: GuideCitationsProps) {
  if (!citations.length) return null;

  return (
    <section
      aria-labelledby="guide-citations-heading"
      className="border-t border-ink pt-10"
    >
      <h2
        id="guide-citations-heading"
        className="font-display text-2xl font-medium tracking-tight text-ink"
      >
        Sources & citations
      </h2>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-ink-muted">
        Admin and policy details change. Prefer the official page when making
        decisions; we cite primary sources for Singapore government and statutory
        guidance.
      </p>
      <ol className="mt-6 space-y-3">
        {citations.map((citation, index) => (
          <li key={citation.url} className="flex gap-3 text-sm">
            <span
              aria-hidden="true"
              className="mt-0.5 w-6 shrink-0 font-display font-medium text-tungsten"
            >
              {index + 1}.
            </span>
            <a
              href={citation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm py-0.5 text-canopy underline decoration-tungsten/60 underline-offset-4 hover:decoration-tungsten focus-visible:outline-2 focus-visible:outline-tungsten"
            >
              {citation.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
