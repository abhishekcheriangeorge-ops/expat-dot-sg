import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { getAllGuides, PILLAR_LABELS } from "@/lib/content/guides";
import {
  breadcrumbJsonLd,
  collectionPageJsonLd,
} from "@/lib/seo";
import { getPillar, modes, type PillarSlug } from "@/lib/site";

type PillarPageProps = {
  slug: PillarSlug;
};

export async function PillarPage({ slug }: PillarPageProps) {
  const pillar = getPillar(slug);
  const modeLinks = modes.filter((m) => pillar.modes.includes(m.slug));
  const guides = await getAllGuides({ pillar: slug });
  const featured = guides.slice(0, 8);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: pillar.label, path: pillar.href },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: `${pillar.label} — ${PILLAR_LABELS[slug]} guides`,
            description: pillar.summary,
            path: pillar.href,
            items: [
              ...pillar.topics.map((topic) => ({
                name: topic.label,
                path: topic.href,
              })),
              ...featured.map((guide) => ({
                name: guide.title,
                path: `/guides/${guide.slug}`,
              })),
            ],
          }),
        ]}
      />
      <div className="pt-16">
        <section className="border-b border-ink bg-paper">
          <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8 sm:py-16">
            <Breadcrumbs items={crumbs} />
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-tungsten">
              Pillar
            </p>
            <h1 className="mt-4 font-display text-5xl font-medium tracking-[-0.025em] text-ink sm:text-6xl">
              {pillar.label}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              {pillar.summary}
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
              How to use this pillar: open one topic below that matches the
              decision in front of you — then follow related guides. Prefer the{" "}
              {modeLinks.map((m) => m.label).join(" / ")} hub
              {modeLinks.length > 1 ? "s" : ""} if you need the full journey
              sequence first.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {modeLinks.map((mode) => (
                <Link
                  key={mode.slug}
                  href={mode.href}
                  className="rounded-sm py-1 text-sm font-bold uppercase tracking-[0.1em] text-ink no-underline underline-offset-4 hover:text-tungsten hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
                >
                  {mode.label} →
                </Link>
              ))}
              <Link
                href="/guides"
                className="rounded-sm py-1 text-sm font-bold uppercase tracking-[0.1em] text-ink no-underline underline-offset-4 hover:text-tungsten hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
              >
                All guides →
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
          <FadeIn>
            <div className="flex items-baseline justify-between border-b border-ink pb-3">
              <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                In this pillar
              </h2>
            </div>
            <p className="mt-4 max-w-lg leading-relaxed text-ink-muted">
              Topic map with live navigation into guides and directories — one
              decision per row.
            </p>
          </FadeIn>

          <Stagger className="mt-8 border-b border-ink">
            {pillar.topics.map((topic, i) => (
              <StaggerItem
                key={topic.label}
                className="border-t border-ink/15 py-5 first:border-t-0"
              >
                <Link
                  href={topic.href}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 no-underline"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-[15px] text-tungsten"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display text-xl font-medium text-ink transition-colors group-hover:text-canopy sm:text-2xl">
                      {topic.label}
                    </span>
                    <span className="mt-1 block max-w-xl text-sm leading-relaxed text-ink-muted">
                      {topic.blurb}
                    </span>
                  </span>
                  <span className="hidden text-xs font-bold uppercase tracking-[0.1em] text-ink-faint transition-colors group-hover:text-tungsten sm:inline">
                    Open <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {featured.length > 0 ? (
          <section className="border-t border-ink bg-paper">
            <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
              <FadeIn>
                <div className="flex items-baseline justify-between border-b border-ink pb-3">
                  <h2 className="font-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                    Featured {pillar.label} guides
                  </h2>
                </div>
                <p className="mt-4 max-w-lg leading-relaxed text-ink-muted">
                  {guides.length} published guides in this pillar — start with
                  the most recently reviewed.
                </p>
              </FadeIn>
              <ul className="mt-8 divide-y divide-ink/15 border-b border-ink">
                {featured.map((guide) => (
                  <li key={guide.slug}>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="group flex flex-col gap-1 py-5 no-underline sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                    >
                      <span className="font-display text-lg font-medium text-ink transition-colors group-hover:text-canopy sm:text-xl">
                        {guide.title}
                      </span>
                      <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
                        {guide.readingTimeMinutes} min · reviewed{" "}
                        {guide.lastReviewed}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              {guides.length > featured.length ? (
                <p className="mt-6">
                  <Link
                    href={`/guides#pillar-${slug}`}
                    className="rounded-sm py-1 text-sm font-bold uppercase tracking-[0.1em] text-ink no-underline underline-offset-4 hover:text-tungsten hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
                  >
                    Browse all {guides.length} {pillar.label} guides{" "}
                    <span aria-hidden="true">→</span>
                  </Link>
                </p>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="border-t border-ink bg-paper-elevated">
          <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-tungsten">
                Related
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {pillar.related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-sm py-1 font-display text-xl font-medium text-ink no-underline transition-colors hover:text-canopy focus-visible:outline-2 focus-visible:outline-tungsten"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
