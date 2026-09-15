import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { HelperLevyFinalMonthCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Helper levy final-month sketch",
  description:
    "Sketch FDW / helper final-month levy for keep-through-month, mid-month cancel, and transfer-out paths — including admin fees and waiver clawback — before you leave Singapore.",
  path: "/tools/helper-levy-final-month",
});

export default function HelperLevyFinalMonthToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Helper levy final month", path: "/tools/helper-levy-final-month" },
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
        eyebrow="Tools · Helper exit"
        title="Final-month levy cash, sketched."
        summary="Compare keep-through-month, mid-month cancel, and transfer-out levy paths before packing week raids the helper float."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <HelperLevyFinalMonthCalculator />
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/condo-visitor-parking-clear"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Condo visitor parking clear →
          </Link>
          <Link
            href="/journeys/helper-handoff-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Helper handoff exit →
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
