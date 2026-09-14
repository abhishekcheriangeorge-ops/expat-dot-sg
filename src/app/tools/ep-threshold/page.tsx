import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { EpThresholdCalculator } from "@/components/tools";

export const metadata: Metadata = {
  title: "EP qualifying salary",
  description:
    "Illustrative Employment Pass qualifying salary by age and sector — verify against MOM before relying on it.",
};

export default function EpThresholdToolPage() {
  return (
    <>
      <JourneyHero
        eyebrow="Tools · Move"
        title="EP qualifying salary illustration."
        summary="A quick sense-check against age-progressive minima. COMPASS and MOM tables remain authoritative."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <EpThresholdCalculator />
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
