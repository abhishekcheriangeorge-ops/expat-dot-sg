import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import {
  getBetweenJobsPlaybook,
  getChecklists,
  getCondoMcstExitPlaybook,
  getLeavingPlaybook,
  getLocDpWorkRightsPlaybook,
} from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Journeys",
  description:
    "Arriving 7/30/90 checklists, between-jobs, DP/LOC, condo MCST exit, and Leaving Singapore — practical sequences for expat life transitions.",
  path: "/journeys",
});

export default async function JourneysIndexPage() {
  const [checklists, playbook, betweenJobs, locDp, condoExit] =
    await Promise.all([
      getChecklists(),
      getLeavingPlaybook(),
      getBetweenJobsPlaybook(),
      getLocDpWorkRightsPlaybook(),
      getCondoMcstExitPlaybook(),
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
              "Arriving checklists, between-jobs and DP/LOC playbooks, and Leaving Singapore.",
            path: "/journeys",
            items: [
              ...arriving
                .filter(Boolean)
                .map((c) => ({
                  name: c!.title,
                  path: `/journeys/arriving/${c!.phase}`,
                })),
              {
                name: betweenJobs?.title ?? "Between jobs (EP gap)",
                path: "/journeys/between-jobs",
              },
              {
                name: locDp?.title ?? "DP work rights & Letter of Consent",
                path: "/journeys/loc-dp-work-rights",
              },
              {
                name: condoExit?.title ?? "Condo MCST / access exit",
                path: "/journeys/condo-mcst-exit",
              },
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
        title="Checklists for arriving — playbooks for the hard transitions."
        summary="Interior utilities for the weeks that matter. Not a dashboard; calm sequences you can tick through."
      />

      <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8">
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
            {betweenJobs?.title ?? "Between jobs (EP gap)"}
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            {betweenJobs?.summary ??
              "STVP buffer, Dependant Pass risk, and new IPA timing when you change jobs without leaving."}
          </p>
          <Link
            href="/journeys/between-jobs"
            className="mt-6 inline-flex bg-canopy px-5 py-3 text-sm font-semibold text-paper no-underline hover:bg-canopy-mist"
          >
            Open between-jobs playbook
          </Link>
        </FadeIn>

        <FadeIn className="mt-16 border-t border-fog-soft pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
            Family
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {locDp?.title ?? "DP work rights & Letter of Consent"}
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            {locDp?.summary ??
              "Dependant’s Pass is not a work pass — employee vs business-owner LOC, cascade risk, and when EP is cleaner."}
          </p>
          <Link
            href="/journeys/loc-dp-work-rights"
            className="mt-6 inline-flex bg-canopy px-5 py-3 text-sm font-semibold text-paper no-underline hover:bg-canopy-mist"
          >
            Open DP / LOC playbook
          </Link>
        </FadeIn>

        <FadeIn className="mt-16 border-t border-fog-soft pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-tungsten">
            Home exit
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {condoExit?.title ?? "Condo MCST / access exit"}
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            {condoExit?.summary ??
              "Access cards, car-park IU, renovation deposits, and MCST handover sequencing."}{" "}
            Pair with{" "}
            <Link
              href="/tools/car-coe-exit"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              /tools/car-coe-exit
            </Link>{" "}
            if a vehicle is leaving too.
          </p>
          <Link
            href="/journeys/condo-mcst-exit"
            className="mt-6 inline-flex border border-ink/20 px-5 py-3 text-sm font-semibold text-ink no-underline hover:border-ink/40"
          >
            Open condo MCST exit playbook
          </Link>
        </FadeIn>

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
            .
          </p>
          <Link
            href="/journeys/leaving"
            className="mt-6 inline-flex border border-ink/20 px-5 py-3 text-sm font-semibold text-ink no-underline hover:border-ink/40"
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
              Light COL, lease-duty, tax-residency, EP threshold, and school
              withdrawal tools
            </Link>{" "}
            live one level down — never on the homepage.
          </p>
        </FadeIn>
      </div>
    </>
  );
}
