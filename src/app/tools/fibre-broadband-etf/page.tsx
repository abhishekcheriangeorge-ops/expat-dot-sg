import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { FibreBroadbandEtfCalculator, ToolAbout } from "@/components/tools";
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
      <div className="border-b border-ink/15">
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
        <ToolAbout
          how={[
      "Prices serving the remaining months against ETF plus clawback against transfer fees.",
      "Recommends the true minimum across the three paths.",
      "Zero months remaining still needs a final bill and ONT return.",
    ]}
          actions={[
      "Ask for a full early-exit quote in writing. Clawbacks can exceed the ETF line.",
      "Transfers need a willing incoming party plus ISP approval.",
    ]}
          sourceLabel="your ISP"
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
            href="/journeys/childcare-infant-care-exit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Childcare / infant-care exit →
          </Link>
          <Link
            href="/journeys/utility-exit-handover"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Utilities exit handover →
          </Link>
          <Link
            href="/tools/sim-otp-keep"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            SIM / OTP keep →
          </Link>
        </p>
      </div>
    </>
  );
}
