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
        <section className="border-b border-fog-soft bg-[radial-gradient(ellipse_at_0%_0%,color-mix(in_srgb,var(--canopy-mist)_12%,transparent),transparent_50%),radial-gradient(ellipse_at_100%_20%,color-mix(in_srgb,var(--tungsten)_10%,transparent),transparent_40%)]">
          <div className="mx-auto max-w-[var(--max-page)] px-5 py-16 sm:px-8 sm:py-20">
            <FadeIn>
              <Breadcrumbs items={crumbs} />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-tungsten">
                Pillar
              </p>
              <h1 className="mt-3 font-display text-4xl tracking-tight text-canopy-deep sm:text-6xl">
                {pillar.label}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
                {pillar.summary}
              </p>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted">
              How to use this pillar: open one topic below that matches the
              decision in front of you — then follow related guides. Prefer the{" "}
              {modeLinks.map((m) => m.label).join(" / ")} hub
              {modeLinks.length > 1 ? "s" : ""} if you need the full journey
              sequence first.
            </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {modeLinks.map((mode) => (
                  <Link
                    key={mode.slug}
                    href={mode.href}
                    className="text-sm font-semibold text-canopy no-underline underline-offset-4 hover:underline"
                  >
                    {mode.label}
                  </Link>
                ))}
                <Link
                  href="/guides"
                  className="text-sm font-semibold text-canopy no-underline underline-offset-4 hover:underline"
                >
                  All guides
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="mx-auto max-w-[var(--max-page)] px-5 py-[var(--space-section)] sm:px-8">
          <FadeIn>
            <h2 className="font-display text-2xl text-ink sm:text-3xl">
              In this pillar
            </h2>
            <p className="mt-2 max-w-lg text-ink-muted">
              Topic map with live navigation into guides and directories — one
              decision per row.
            </p>
          </FadeIn>

          <Stagger className="mt-10 divide-y divide-fog-soft border-y border-fog-soft">
            {pillar.topics.map((topic) => (
              <StaggerItem key={topic.label}>
                <Link
                  href={topic.href}
                  className="group flex flex-col gap-1 py-6 no-underline sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                >
                  <span className="font-display text-xl text-ink transition-colors group-hover:text-canopy-mist sm:text-2xl">
                    {topic.label}
                  </span>
                  <span className="max-w-md text-sm leading-relaxed text-ink-muted sm:text-right">
                    {topic.blurb}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {featured.length > 0 ? (
          <section className="border-t border-fog-soft bg-paper">
            <div className="mx-auto max-w-[var(--max-page)] px-5 py-[var(--space-section)] sm:px-8">
              <FadeIn>
                <h2 className="font-display text-2xl text-ink sm:text-3xl">
                  Featured {pillar.label} guides
                </h2>
                <p className="mt-2 max-w-lg text-ink-muted">
                  {guides.length} published guides in this pillar — start with
                  the most recently reviewed.
                </p>
              </FadeIn>
              <ul className="mt-10 divide-y divide-fog-soft border-y border-fog-soft">
                {featured.map((guide) => (
                  <li key={guide.slug}>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="group flex flex-col gap-1 py-5 no-underline sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                    >
                      <span className="font-display text-lg text-ink transition-colors group-hover:text-canopy sm:text-xl">
                        {guide.title}
                      </span>
                      <span className="shrink-0 text-xs text-ink-faint">
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
                    className="text-sm font-semibold text-canopy no-underline underline-offset-4 hover:underline"
                  >
                    Browse all {guides.length} {pillar.label} guides →
                  </Link>
                </p>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="border-t border-fog-soft bg-paper-elevated">
          <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tungsten">
                Related
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {pillar.related.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-display text-xl text-canopy-deep no-underline transition-colors hover:text-canopy-mist"
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
