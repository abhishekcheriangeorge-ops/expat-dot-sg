import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { ColCalculator } from "@/components/tools";

export const metadata: Metadata = {
  title: "Cost of living sketch",
  description:
    "Light Singapore cost-of-living estimator by household type and housing band — interior utility for expat.sg.",
};

export default function CostOfLivingToolPage() {
  return (
    <>
      <JourneyHero
        eyebrow="Tools · Money"
        title="Cost of living, sketched."
        summary="Pick a household and housing band. Figures are editorial midpoints in SGD per month."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <ColCalculator />
        <p className="mt-12 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
        </p>
      </div>
    </>
  );
}
