import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { HelperLevyFinalMonthCalculator, ToolAbout } from "@/components/tools";
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
      <div className="border-b border-ink/15">
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
        <ToolAbout
          how={[
      "Charges the full monthly levy when the helper stays through month-end.",
      "Charges an incomplete month at MOM's daily levy rate — (monthly levy x 12) / 365, rounded up to the cent — capped at the monthly rate.",
      "Adds admin fees and any waiver clawback on top.",
    ]}
          actions={[
      "Confirm concession status before treating the month as already paid.",
      "Cancelling in the last days rarely saves a full cycle. Re-price against staying.",
    ]}
          sourceLabel="MOM"
      sourceHref="https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/foreign-domestic-worker-levy/paying-levy"
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
            href="/journeys/condo-visitor-parking-clear"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Condo visitor parking clear →
          </Link>
          <Link
            href="/journeys/helper-handoff-exit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Helper handoff exit →
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
