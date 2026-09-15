import type { GuideFrontmatter } from "@/lib/content/schemas";

type GuideCitationsProps = {
  citations: GuideFrontmatter["citations"];
};

export function GuideCitations({ citations }: GuideCitationsProps) {
  if (!citations.length) return null;

  return (
    <section
      aria-labelledby="guide-citations-heading"
      className="border-t border-fog-soft pt-10"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Sources and citations" />
      <meta itemProp="numberOfItems" content={String(citations.length)} />
      <h2
        id="guide-citations-heading"
        className="font-display text-2xl text-ink"
      >
        Sources & citations
      </h2>
      <p className="mt-2 max-w-prose text-sm text-ink-faint">
        Admin and policy details change. Prefer the official page when making
        decisions; we cite primary sources for Singapore government and statutory
        guidance.
      </p>
      <ol className="mt-6 space-y-3">
        {citations.map((citation, index) => (
          <li
            key={citation.url}
            className="flex gap-3 text-sm"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={String(index + 1)} />
            <span className="mt-0.5 w-6 shrink-0 font-medium text-ink-faint">
              {index + 1}.
            </span>
            <a
              href={citation.url}
              target="_blank"
              rel="noopener noreferrer"
              itemProp="item"
              className="text-canopy underline decoration-canopy-mist/40 hover:decoration-canopy-mist"
            >
              <span itemProp="name">{citation.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
