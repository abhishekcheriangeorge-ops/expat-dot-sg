import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { InsurancePortabilityFloatCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Insurance portability float sketch",
  description:
    "Sketch extend-Singapore vs gap-bridge vs cancel-and-start costs for the weeks between Singapore policy cancel and destination cover.",
  path: "/tools/insurance-portability-float",
});

export default function InsurancePortabilityFloatToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    {
      name: "Insurance portability float",
      path: "/tools/insurance-portability-float",
    },
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
        eyebrow="Tools · Cover gap"
        title="Portability weeks, floated."
        summary="Compare extending Singapore cover, a short bridge, and cancel-then-start destination costs before cage clear raids the float."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <InsurancePortabilityFloatCalculator />
        <ToolAbout
          how={[
      "Prices extend-Singapore, gap-bridge, and cancel-and-start paths side by side.",
      "Recommends the true minimum. The bridge gets no handicap.",
      "Gap days cap at 180.",
    ]}
          actions={[
      "Confirm territorial limits before treating an extension as destination cover.",
      "Check waiting periods before cancelling Singapore cover for a short gap.",
    ]}
          sourceLabel="your insurer"
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
            href="/journeys/condo-bike-storage-clear"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Condo bike / storage clear →
          </Link>
          <Link
            href="/tools/driving-insurance-gap"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Driving insurance gap →
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
