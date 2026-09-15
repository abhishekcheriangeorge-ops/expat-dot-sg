import Link from "next/link";
import { PILLAR_LABELS, type GuideMeta } from "@/lib/content/guides";
import { absoluteUrl } from "@/lib/seo";

type GuideRelatedProps = {
  guides: GuideMeta[];
};

export function GuideRelated({ guides }: GuideRelatedProps) {
  if (!guides.length) return null;

  return (
    <section
      aria-labelledby="guide-related-heading"
      className="border-t border-fog-soft pt-10"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Related guides" />
      <meta itemProp="numberOfItems" content={String(guides.length)} />
      <h2 id="guide-related-heading" className="font-display text-2xl text-ink">
        Related guides
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {guides.map((guide, index) => {
          const href = `/guides/${guide.slug}`;
          return (
            <li
              key={guide.slug}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(index + 1)} />
              <meta itemProp="url" content={absoluteUrl(href)} />
              <Link
                href={href}
                itemProp="item"
                className="group block no-underline"
              >
                <p className="text-xs font-semibold tracking-wide text-ink-faint uppercase">
                  {PILLAR_LABELS[guide.pillar]}
                </p>
                <p
                  itemProp="name"
                  className="mt-1 font-display text-lg text-ink transition-colors group-hover:text-canopy"
                >
                  {guide.title}
                </p>
                <p className="mt-1 line-clamp-2 text-sm text-ink-faint">
                  {guide.description}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
