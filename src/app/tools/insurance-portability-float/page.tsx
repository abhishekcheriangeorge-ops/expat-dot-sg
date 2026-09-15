import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { InsurancePortabilityFloatCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/condo-bike-storage-clear"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Condo bike / storage clear →
          </Link>
          <Link
            href="/tools/driving-insurance-gap"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Driving insurance gap →
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
