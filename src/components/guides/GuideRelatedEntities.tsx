import Link from "next/link";
import type { ResolvedRelatedEntity } from "@/lib/content/entities";
import { absoluteUrl } from "@/lib/seo";

type GuideRelatedEntitiesProps = {
  entities: ResolvedRelatedEntity[];
};

/** Shell strip for guide frontmatter relatedEntities — no body rewrite. */
export function GuideRelatedEntities({ entities }: GuideRelatedEntitiesProps) {
  if (!entities.length) return null;

  return (
    <section
      aria-labelledby="guide-related-entities-heading"
      className="border-t border-fog-soft pt-10"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Related places and services" />
      <meta itemProp="numberOfItems" content={String(entities.length)} />
      <h2
        id="guide-related-entities-heading"
        className="font-display text-2xl text-ink"
      >
        Related places &amp; services
      </h2>
      <ul className="mt-6 flex flex-wrap gap-3">
        {entities.map((entity, index) => (
          <li
            key={`${entity.collection}-${entity.slug}`}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <meta itemProp="position" content={String(index + 1)} />
            <meta itemProp="url" content={absoluteUrl(entity.href)} />
            <Link
              href={entity.href}
              itemProp="item"
              className="inline-flex flex-col border border-fog-soft bg-paper px-4 py-3 no-underline transition-colors hover:border-canopy-mist"
            >
              <span className="text-[0.65rem] font-semibold tracking-[0.12em] text-ink-faint uppercase">
                {entity.kindLabel}
              </span>
              <span itemProp="name" className="mt-1 text-sm font-medium text-canopy">
                {entity.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
