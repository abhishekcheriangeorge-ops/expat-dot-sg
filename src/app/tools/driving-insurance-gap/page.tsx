import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { DrivingInsuranceGapCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/school-bus-cca-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            School bus / CCA exit →
          </Link>
          <Link
            href="/tools/foreign-licence-clock"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Foreign licence clock →
          </Link>
          <Link
            href="/move"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Move pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
