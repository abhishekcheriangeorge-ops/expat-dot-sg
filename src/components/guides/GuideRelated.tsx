import Link from "next/link";
import { PILLAR_LABELS, type GuideMeta } from "@/lib/content/guides";

type GuideRelatedProps = {
  guides: GuideMeta[];
};

export function GuideRelated({ guides }: GuideRelatedProps) {
  if (!guides.length) return null;

  return (
    <section
      aria-labelledby="guide-related-heading"
      className="border-t border-ink pt-10"
    >
      <h2
        id="guide-related-heading"
        className="font-display text-2xl font-medium tracking-tight text-ink"
      >
        Related guides
      </h2>
      <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/guides/${guide.slug}`}
              className="group block rounded-sm py-1 no-underline focus-visible:outline-2 focus-visible:outline-tungsten"
            >
              <p className="text-xs font-bold tracking-[0.18em] text-tungsten uppercase">
                {PILLAR_LABELS[guide.pillar]}
              </p>
              <p className="mt-1 font-display text-xl font-medium text-ink transition-colors group-hover:text-canopy">
                {guide.title}
              </p>
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                {guide.description}
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.1em] text-ink-faint transition-colors group-hover:text-tungsten">
                Read <span aria-hidden="true">→</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
