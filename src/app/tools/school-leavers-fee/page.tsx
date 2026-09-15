import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SchoolLeaversFeeCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/gym-membership-freeze-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Gym membership freeze / exit →
          </Link>
          <Link
            href="/tools/school-deposit-clawback"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            School deposit clawback →
          </Link>
          <Link
            href="/family"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Family pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
