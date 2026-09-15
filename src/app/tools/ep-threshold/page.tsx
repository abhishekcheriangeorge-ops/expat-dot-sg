import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { EpThresholdCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "EP qualifying salary",
  description:
    "Illustrative Employment Pass qualifying salary by age and sector — verify against MOM before relying on it.",
  path: "/tools/ep-threshold",
});

export default function EpThresholdToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "EP threshold", path: "/tools/ep-threshold" },
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
        eyebrow="Tools · Move"
        title="EP qualifying salary illustration."
        summary="A quick sense-check against age-progressive minima. COMPASS and MOM tables remain authoritative."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <EpThresholdCalculator />
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/guides/employment-pass-singapore"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            EP guide →
          </Link>
          <Link
            href="/guides/compass-framework-explained"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            COMPASS framework →
          </Link>
          <Link
            href="/move"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Move pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
