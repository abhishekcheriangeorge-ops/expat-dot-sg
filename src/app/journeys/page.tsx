import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import {
  getChecklists,
  getLeavingPlaybook,
  getPreArrivalPlaybook,
} from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Journeys",
  description:
    "Pre-arrival playbook, arriving 7/30/90 checklists, and the Leaving Singapore playbook — practical sequences for expat life transitions.",
  path: "/journeys",
});

export default async function JourneysIndexPage() {
  const [checklists, playbook, preArrival] = await Promise.all([
    getChecklists(),
    getLeavingPlaybook(),
    getPreArrivalPlaybook(),
  ]);

  const arriving = ["day-7", "day-30", "day-90"]
    .map((phase) => checklists.find((c) => c.phase === phase))
    .filter(Boolean);

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Journeys", path: "/journeys" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          collectionPageJsonLd({
            name: "Journeys",
            description:
              "Pre-arrival playbook, arriving checklists, and Leaving Singapore.",
            path: "/journeys",
            items: [
              {
                name: preArrival?.title ?? "Pre-arrival",
                path: "/journeys/pre-arrival",
              },
              ...arriving
                .filter(Boolean)
                .map((c) => ({
                  name: c!.title,
                  path: `/journeys/arriving/${c!.phase}`,
                })),
              {
                name: playbook?.title ?? "Leaving Singapore",
                path: "/journeys/leaving",
              },
            ],
          }),
        ]}
      />
      <div className="border-b border-fog-soft">
        <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>
      <JourneyHero
        eyebrow="Journeys"
        title="Before you land, after you land — and when you leave."
        summary="Interior utilities for the weeks that matter. Not a dashboard; a calm sequence you can tick through."
      />

      <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8">
        <FadeIn className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
            Before wheels-down
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {preArrival?.title ?? "Pre-arrival"}
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            {preArrival?.summary ??
              "IPA pack, Arrival Card window, cash bridge, and family joining later."}
          </p>
          <Link
            href="/journeys/pre-arrival"
            className="mt-6 inline-flex border border-ink/20 px-5 py-3 text-sm font-semibold text-ink no-underline hover:border-ink/40"
          >
            Open pre-arrival playbook
          </Link>
        </FadeIn>

        <FadeIn>
          <h2 className="font-display text-2xl text-ink sm:text-3xl">
            Arriving · first 90 days
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            Three horizons so the first week stays humane and the third month
            still has a list. Pair with the{" "}
            <Link
              href="/arriving"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              Arriving hub
            </Link>{" "}
            and{" "}
            <Link
              href="/move"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              Move pillar
            </Link>
            .
          </p>
        </FadeIn>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-3">
          {arriving.map((c) =>
            c ? (
              <StaggerItem key={c.slug}>
                <Link
                  href={`/journeys/arriving/${c.phase}`}
                  className="group block border-b border-fog-soft pb-6 no-underline"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
                    {c.phase.replace("day-", "")} days
                  </p>
                  <h3 className="mt-2 font-display text-xl text-ink group-hover:text-canopy">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {c.summary}
                  </p>
                </Link>
              </StaggerItem>
            ) : null,
          )}
        </Stagger>

        <FadeIn className="mt-16 border-t border-fog-soft pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
            Next
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {playbook?.title ?? "Leaving Singapore"}
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            {playbook?.summary ??
              "Tax clearance, deposits, shipping, and pass cancellation."}{" "}
            Deep narrative lives in the{" "}
            <Link
              href="/next"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              Next pillar
            </Link>
            . Sketch diplomatic-clause dates on{" "}
            <Link
              href="/tools/lease-notice"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              /tools/lease-notice
            </Link>{" "}
            before you serve notice.
          </p>
          <Link
            href="/journeys/leaving"
            className="mt-6 inline-flex bg-canopy px-5 py-3 text-sm font-semibold text-paper no-underline hover:bg-canopy-mist"
          >
            Open leaving playbook
          </Link>
        </FadeIn>

        <FadeIn className="mt-14">
          <p className="text-sm text-ink-faint">
            Prefer numbers?{" "}
            <Link
              href="/tools"
              className="font-medium text-canopy no-underline hover:text-canopy-mist"
            >
              Light COL, lease, and EP threshold tools
            </Link>{" "}
            live one level down — never on the homepage.
          </p>
        </FadeIn>
      </div>
    </>
  );
}
