import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { EpThresholdCalculator, ToolAbout } from "@/components/tools";
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
      <div className="border-b border-ink/15">
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
        <ToolAbout
          how={[
      "Looks up MOM's age-progressive floor for your age, sector, and regime.",
      "Ages clamp to 18 to 55. Floors run S$5,600 to S$10,700 general, higher in financial services.",
      "The 2027 regime uses the uplifted S$6,000-plus floors.",
    ]}
          actions={[
      "Clearing the floor is stage one only. COMPASS still needs 40 points unless you are exempt.",
      "Run the exact figure through MOM's self-assessment tool before relying on it.",
    ]}
          sourceLabel="MOM"
      sourceHref="https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility"
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
            href="/guides/employment-pass-singapore"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            EP guide →
          </Link>
          <Link
            href="/guides/compass-framework-explained"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            COMPASS framework →
          </Link>
          <Link
            href="/move"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Move pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
