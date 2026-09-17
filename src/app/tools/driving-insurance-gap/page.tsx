import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { DrivingInsuranceGapCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Driving insurance gap sketch",
  description:
    "Sketch extend-cover vs daily float vs Grab-only costs for the weeks after school bus cancel or before you leave Singapore.",
  path: "/tools/driving-insurance-gap",
});

export default function DrivingInsuranceGapToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Driving insurance gap", path: "/tools/driving-insurance-gap" },
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
        eyebrow="Tools · Mobility"
        title="Insurance gap weeks, sketched."
        summary="When the bus ends early, compare extending cover, a daily self-drive float, and Grab-only budgets."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <DrivingInsuranceGapCalculator />
        <ToolAbout
          how={[
      "Prices three paths: extend local cover, daily risk float, or stop driving and Grab.",
      "Recommends the true minimum across the three, no nudges.",
      "Zero gap days is allowed and prices to zero plus any add-on.",
    ]}
          actions={[
      "A daily float is not insurance. Confirm named-driver status and deductibles first.",
      "Re-price if the gap stretches. Long Grab-only stretches beat short extensions.",
    ]}
          sourceLabel="your insurer"
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
            href="/journeys/school-bus-cca-exit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            School bus / CCA exit →
          </Link>
          <Link
            href="/tools/foreign-licence-clock"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Foreign licence clock →
          </Link>
          <Link
            href="/move"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Move pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
