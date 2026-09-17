import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SchoolLeaversFeeCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "School leavers fee sketch",
  description:
    "Sketch core leavers fees, yearbook charges, and optional photo/dinner packs for mid-year international-school exits.",
  path: "/tools/school-leavers-fee",
});

export default function SchoolLeaversFeeToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "School leavers fee", path: "/tools/school-leavers-fee" },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <div className="border-b border-ink/15">
        <div className="mx-auto max-w-[var(--max-page)] px-5 pt-10 sm:px-8">
          <Breadcrumbs items={crumbs} />
        </div>
      </div>
      <JourneyHero
        eyebrow="Tools · School exit"
        title="Leavers fees, sketched."
        summary="Compare core-only, yearbook, and full-optional packs so gym ETFs do not raid the chronicle budget."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <SchoolLeaversFeeCalculator />
        <ToolAbout
          how={[
      "Prices core fees plus yearbook and optional packs per departing child.",
      "Applies sibling discounts across children where schools offer them.",
      "Compares every path against the true cheapest, with yearbook as the editorial default.",
    ]}
          actions={[
      "Ask the parent portal about sibling pricing before assuming full price times children.",
      "Drop optional packs first if cash is tight.",
    ]}
          sourceLabel="your school"
          reviewed="2026-09-15"
        />

        <p className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/gym-membership-freeze-exit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Gym membership freeze / exit →
          </Link>
          <Link
            href="/tools/school-deposit-clawback"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            School deposit clawback →
          </Link>
          <Link
            href="/family"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Family pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
