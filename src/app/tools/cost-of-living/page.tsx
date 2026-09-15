import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ColCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/guides/cost-of-living-by-household"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            COL guide →
          </Link>
          <Link
            href="/money"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Money pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
