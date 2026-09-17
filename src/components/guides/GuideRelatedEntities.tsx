import Link from "next/link";
import type { ResolvedRelatedEntity } from "@/lib/content/entities";

type GuideRelatedEntitiesProps = {
  entities: ResolvedRelatedEntity[];
};

/** Shell strip for guide frontmatter relatedEntities — no body rewrite. */
export function GuideRelatedEntities({ entities }: GuideRelatedEntitiesProps) {
  if (!entities.length) return null;

  return (
    <section
      aria-labelledby="guide-related-entities-heading"
      className="border-t border-ink/15 pt-10"
    >
      <h2
        id="guide-related-entities-heading"
        className="font-display text-2xl text-ink"
      >
        Related places &amp; services
      </h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {entities.map((entity) => (
          <li key={`${entity.collection}-${entity.slug}`}>
            <Link
              href={entity.href}
              className="inline-flex flex-col border border-fog-soft bg-paper px-4 py-3 no-underline transition-colors hover:border-canopy-mist"
            >
              <span className="text-[0.65rem] font-semibold tracking-[0.12em] text-ink-faint uppercase">
                {entity.kindLabel}
              </span>
              <span className="mt-1 text-sm font-medium text-canopy">
                {entity.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
