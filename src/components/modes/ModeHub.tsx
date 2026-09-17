import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/seo";
import { modes, pillarsForMode, type ModeSlug } from "@/lib/site";

type ModeHubProps = {
  mode: ModeSlug;
};

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII"] as const;

const MODE_CROSS_LINKS = {
  arriving: [
    { href: "/journeys/arriving", label: "7 / 30 / 90 checklists" },
    { href: "/tools/setup-cash", label: "Cash to land" },
    { href: "/tools/cost-of-living", label: "Cost of living" },
  ],
  living: [
    { href: "/journeys/leaving", label: "Leaving playbook" },
    { href: "/tools/lease-notice", label: "Lease notice dates" },
    { href: "/tools/school-deposit-clawback", label: "School deposit" },
  ],
} as const;

export function ModeHub({ mode }: ModeHubProps) {
  const data = modes.find((m) => m.slug === mode);
  if (!data) throw new Error(`Unknown mode: ${mode}`);

  const relatedPillars = pillarsForMode(mode);
  const other = modes.find((m) => m.slug !== mode)!;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: data.label, path: data.href },
  ];

  return (
    <div>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: data.label,
            description: data.summary,
            path: data.href,
            items: [
              ...data.startHere.map((link) => ({
                name: link.label,
                path: link.href,
              })),
              ...relatedPillars.map((pillar) => ({
                name: pillar.label,
                path: pillar.href,
              })),
            ],
          }),
        ]}
      />
      {/* Flat masthead hero — server-rendered, no image, no motion */}
      <section className="border-b border-ink bg-paper">
        <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8 sm:py-16">
          <Breadcrumbs items={crumbs} className="text-sm" />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-tungsten">
            Mode · {data.tagline}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-5xl font-medium leading-[1.02] tracking-[-0.025em] text-ink sm:text-6xl">
            {data.label}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {data.summary}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <FadeIn>
          <div className="flex items-baseline justify-between border-b border-ink pb-3">
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
              Start here
            </h2>
          </div>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">
            {data.howToUse}
          </p>
        </FadeIn>

        <Stagger className="mt-8 border-b border-ink">
          {data.startHere.map((link, i) => (
            <StaggerItem
              key={link.href}
              className="border-t border-ink/15 py-5 first:border-t-0"
            >
              <Link
                href={link.href}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 no-underline"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-[15px] text-tungsten"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-display text-xl font-medium text-ink transition-colors group-hover:text-canopy">
                    {link.label}
                  </span>
                  <span className="mt-1 block max-w-xl text-sm leading-relaxed text-ink-muted">
                    {link.blurb}
                  </span>
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-ink-faint transition-colors group-hover:text-tungsten">
                  Open <span aria-hidden="true">→</span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-t border-ink bg-paper-elevated">
        <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
          <FadeIn>
            <div className="flex items-baseline justify-between border-b border-ink pb-3">
              <h2 className="font-display text-3xl font-medium tracking-tight text-ink">
                Pillars for {data.label.toLowerCase()}
              </h2>
            </div>
            <p className="mt-4 max-w-lg leading-relaxed text-ink-muted">
              {data.tagline}. Each page is a topic map into guides and
              directories — open the one that matches your current blocker.
            </p>
          </FadeIn>

          <Stagger className="mt-8 border-b border-ink">
            {relatedPillars.map((pillar, i) => (
              <StaggerItem
                key={pillar.slug}
                className="border-t border-ink/15 py-5 first:border-t-0"
              >
                <Link
                  href={pillar.href}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 no-underline"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-[15px] text-tungsten"
                  >
                    {ROMAN[i] ?? String(i + 1)}.
                  </span>
                  <span>
                    <span className="block font-display text-xl font-medium text-ink transition-colors group-hover:text-canopy">
                      {pillar.label}
                    </span>
                    <span className="mt-1 block max-w-xl text-sm leading-relaxed text-ink-muted">
                      {pillar.summary}
                    </span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-ink-faint transition-colors group-hover:text-tungsten">
                    Explore <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <FadeIn className="grid items-center gap-6 rounded bg-canopy-deep p-10 text-paper sm:p-12 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-tungsten-soft">
              Also on expat.sg
            </p>
            <p className="mt-3 max-w-md font-display text-2xl font-medium sm:text-3xl">
              {mode === "arriving"
                ? "Already past the first ninety days? Living. Posting ending? Leaving."
                : "Still in issuance chaos? Arriving. Posting ending? Leaving."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={other.href}
              className="inline-flex min-h-[44px] items-center justify-center bg-tungsten-soft px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] text-ink no-underline transition-colors hover:bg-paper"
            >
              Go to {other.label}
            </Link>
            <Link
              href="/journeys/leaving"
              className="inline-flex min-h-[44px] items-center justify-center border border-paper/30 px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] text-paper no-underline hover:border-paper/60"
            >
              Leaving
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {MODE_CROSS_LINKS[mode].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm py-1 text-sm font-semibold text-tungsten-soft no-underline underline-offset-4 hover:text-paper hover:underline"
              >
                {link.label} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
