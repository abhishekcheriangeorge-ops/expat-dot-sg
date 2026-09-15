import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { FibreBroadbandEtfCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Fibre broadband ETF sketch",
  description:
    "Sketch serve-remaining-months vs early-termination vs transfer/takeover costs for Singapore fibre and broadband before you leave.",
  path: "/tools/fibre-broadband-etf",
});

export default function FibreBroadbandEtfToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Fibre broadband ETF", path: "/tools/fibre-broadband-etf" },
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
        eyebrow="Tools · Home exit"
        title="Fibre exit cash, sketched."
        summary="Compare serving remaining months, paying ETF plus rebate clawback, and transfer/takeover fees before movers week."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <FibreBroadbandEtfCalculator />
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/childcare-infant-care-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Childcare / infant-care exit →
          </Link>
          <Link
            href="/journeys/utility-exit-handover"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Utilities exit handover →
          </Link>
          <Link
            href="/tools/sim-otp-keep"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            SIM / OTP keep →
          </Link>
        </p>
      </div>
    </>
  );
}
