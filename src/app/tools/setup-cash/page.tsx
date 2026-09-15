import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { SetupCashCalculator } from "@/components/tools";

export const metadata: Metadata = {
  title: "First-month cash sketch",
  description:
    "Estimate Singapore move-in cash — advance rent, deposit, agent fee, IRAS lease duty, and temporary housing.",
};

export default function SetupCashToolPage() {
  return (
    <>
      <JourneyHero
        eyebrow="Tools · Money"
        title="Cash to land, sketched."
        summary="Deposit + advance rent + stamp duty + temp housing. Orientation for LOI week — not a conveyancing quote."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <SetupCashCalculator />
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
