import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ColCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cost of living sketch",
  description:
    "Light Singapore cost-of-living estimator by household type and housing band — interior utility for expat.sg.",
  path: "/tools/cost-of-living",
});

export default function CostOfLivingToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Cost of living", path: "/tools/cost-of-living" },
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
        title="Cost of living, sketched."
        summary="Pick a household and housing band. Figures are editorial midpoints in SGD per month."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <ColCalculator />
        <ToolAbout
          how={[
      "Picks rent from a grid of three housing bands by four household sizes.",
      "Adds food, transport, and utilities midpoints, plus school and helper only when ticked.",
      "Schooling uses S$2,800 a month for one child and S$5,200 for two.",
    ]}
          actions={[
      "Use the total to sanity-check salary offers, not to set a budget.",
      "Read the cost-of-living guide for household-by-household breakdowns.",
    ]}
          sourceLabel="editorial estimates"
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
            href="/guides/cost-of-living-by-household"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            COL guide →
          </Link>
          <Link
            href="/guides/salary-package-decoding"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Salary package →
          </Link>
          <Link
            href="/neighbourhoods"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Neighbourhoods →
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
