import Image from "next/image";
import Link from "next/link";
import { FadeIn, KenBurns, Stagger, StaggerItem } from "@/components/motion";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import {
  breadcrumbJsonLd,
  collectionPageJsonLd,
} from "@/lib/seo";
import { modes, pillarsForMode, type ModeSlug } from "@/lib/site";

type ModeHubProps = {
  mode: ModeSlug;
};

export function ModeHub({ mode }: ModeHubProps) {
  const data = modes.find((m) => m.slug === mode);
  if (!data) throw new Error(`Unknown mode: ${mode}`);

  const relatedPillars = pillarsForMode(mode);
  const other = modes.find((m) => m.slug !== mode)!;

  const relatedDirectories =
    mode === "living"
      ? [
          { href: "/neighbourhoods", label: "Neighbourhoods directory" },
          { href: "/schools", label: "Schools directory" },
          { href: "/clubs", label: "Clubs & communities" },
          { href: "/calendar", label: "School & tax calendar" },
          { href: "/tools", label: "Tools" },
          { href: "/journeys/between-jobs", label: "Between-jobs playbook" },
        ]
      : [
          { href: "/journeys/arriving", label: "Arriving checklists" },
          { href: "/journeys/pre-arrival", label: "Pre-arrival playbook" },
          { href: "/tools/setup-cash", label: "First-month cash sketch" },
          { href: "/guides", label: "Guides" },
          { href: "/move", label: "Move pillar" },
        ];
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
              ...relatedDirectories.map((link) => ({
                name: link.label,
                path: link.href,
              })),
            ],
          }),
        ]}
      />
      <section className="relative isolate overflow-hidden bg-dusk text-paper">
        <div className="absolute inset-0">
          <KenBurns className="h-full w-full min-h-[52vh]">
            <Image
              src={data.image}
              alt={data.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </KenBurns>
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(12,18,16,0.88)_0%,rgba(12,18,16,0.55)_55%,rgba(12,18,16,0.35)_100%)]"
          />
        </div>

        <div className="relative mx-auto flex min-h-[52vh] max-w-[var(--max-page)] flex-col justify-end px-5 py-16 sm:px-8 sm:py-20">
          <FadeIn>
            <Breadcrumbs
              items={crumbs}
              className="text-sm text-fog/80 [&_a]:text-fog/80 [&_a:hover]:text-paper [&_[aria-current=page]]:text-paper/90"
            />
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-tungsten-soft">
              Mode
            </p>
            <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-6xl">
              {data.label}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-fog">
              {data.summary}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-[var(--max-page)] px-5 py-[var(--space-section)] sm:px-8">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tungsten">
            How to use {data.label.toLowerCase()}
          </p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            One job at a time
          </h2>
          <p className="mt-3 max-w-2xl text-ink-muted">{data.howToUse}</p>
        </FadeIn>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2">
          {data.startHere.map((link) => (
            <StaggerItem key={link.href}>
              <Link href={link.href} className="group block no-underline">
                <p className="font-display text-xl text-canopy-deep transition-colors group-hover:text-canopy-mist">
                  {link.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {link.blurb}
                </p>
                <p className="mt-3 text-sm font-semibold text-tungsten transition-colors group-hover:text-canopy">
                  Open →
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-t border-fog-soft bg-paper-elevated">
        <div className="mx-auto max-w-[var(--max-page)] px-5 py-[var(--space-section)] sm:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tungsten">
              Then pick a pillar
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              Pillars for {data.label.toLowerCase()}
            </h2>
            <p className="mt-3 max-w-lg text-ink-muted">
              {data.tagline}. Each page is a topic map into guides and
              directories — open one blocker, not the whole shelf.
            </p>
          </FadeIn>

          <Stagger className="mt-12 grid gap-8 sm:grid-cols-2">
            {relatedPillars.map((pillar) => (
              <StaggerItem key={pillar.slug}>
                <Link href={pillar.href} className="group block no-underline">
                  <p className="font-display text-2xl text-canopy-deep transition-colors group-hover:text-canopy-mist">
                    {pillar.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {pillar.summary}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-tungsten transition-colors group-hover:text-canopy">
                    Explore {pillar.label} →
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-fog-soft bg-paper">
        <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tungsten">
              Related
            </p>
            <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {relatedDirectories.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-fog-soft">
        <div className="mx-auto flex max-w-[var(--max-page)] flex-col gap-4 px-5 py-14 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-tungsten">
              Also on expat.sg
            </p>
            <p className="mt-2 max-w-md font-display text-2xl text-ink">
              {mode === "arriving"
                ? `Already past the first ninety days? Switch to ${other.label}.`
                : `Still in issuance chaos? Switch to ${other.label}.`}
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href={other.href}
              className="inline-flex items-center border border-ink/20 px-6 py-3 text-sm font-semibold text-ink no-underline transition-colors hover:border-ink/40"
            >
              Go to {other.label}
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
