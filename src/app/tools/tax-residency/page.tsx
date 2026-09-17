import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { TaxResidencyCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Tax residency day sketch",
  description:
    "Sketch Singapore individual tax-residency days against IRAS’s common 183-day calendar-year test — orientation for first-year EP holders and between-jobs gaps.",
  path: "/tools/tax-residency",
});

export default function TaxResidencyToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Tax residency", path: "/tools/tax-residency" },
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
        eyebrow="Tools · Money"
        title="183 days, sketched — not decided."
        summary="Foreign employees often ask whether this calendar year clears IRAS’s common presence test. Count the window, then read the official straddling and 3-year rules."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <TaxResidencyCalculator />
        <ToolAbout
          how={[
      "Counts inclusive presence days inside the calendar year, clamped to Jan to Dec.",
      "Adds credited away days only when you enter them.",
      "Tests the total against the common 183-day bar for the following year of assessment.",
    ]}
          actions={[
      "Arrival and departure days usually count. Keep boarding passes for the straddle years.",
      "Confirm continuous-employment and three-year concessions on the IRAS page.",
    ]}
          sourceLabel="IRAS"
      sourceHref="https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/working-out-my-tax-residency"
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
            href="/journeys/between-jobs"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Between-jobs playbook →
          </Link>
          <Link
            href="/calendar"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Tax season on calendar →
          </Link>
          <Link
            href="/money"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Money pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
