import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import {
  getBetweenJobsPlaybook,
  getChecklists,
  getFamilyJoiningPlaybook,
  getLeavingPlaybook,
} from "@/lib/content";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  collectionPageJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Journeys",
  description:
    "Arriving 7/30/90 checklists, family-joining and between-jobs playbooks, and Leaving Singapore — practical sequences for expat life transitions.",
  path: "/journeys",
});

export default async function JourneysIndexPage() {
  const [checklists, playbook, betweenJobs, familyJoining] = await Promise.all([
    getChecklists(),
    getLeavingPlaybook(),
    getBetweenJobsPlaybook(),
    getFamilyJoiningPlaybook(),
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
              "Arriving checklists, family-joining and between-jobs playbooks, and Leaving Singapore.",
            path: "/journeys",
            items: [
              ...arriving
                .filter(Boolean)
                .map((c) => ({
                  name: c!.title,
                  path: `/journeys/arriving/${c!.phase}`,
                })),
              {
                name: familyJoining?.title ?? "Family joining later",
                path: "/journeys/family-joining",
              },
              {
                name: betweenJobs?.title ?? "Between jobs (EP gap)",
                path: "/journeys/between-jobs",
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
            Family
          </p>
          <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl">
            {familyJoining?.title ?? "Family joining later"}
          </h2>
          <p className="mt-3 max-w-xl text-ink-muted">
            {familyJoining?.summary ??
              "Dependant Pass IPA timing, Arrival Card, Singpass/bank week, and school seats when spouse or kids follow later."}{" "}
            Pair with the{" "}
            <Link
              href="/tools/ipa-window"
              className="font-medium text-canopy no-underline underline-offset-4 hover:underline"
            >
              IPA window sketch
            </Link>
            .
          </p>
          <Link
            href="/journeys/family-joining"
            className="mt-6 inline-flex border border-ink/20 px-5 py-3 text-sm font-semibold text-ink no-underline hover:border-ink/40"
          >
            Open family-joining playbook
          </Link>
        </FadeIn>

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
              Light COL, IPA-window, lease-duty, tax-residency, and EP threshold
              tools
            </Link>{" "}
            live one level down — never on the homepage.
          </p>
        </FadeIn>
      </div>
    </>
  );
}
