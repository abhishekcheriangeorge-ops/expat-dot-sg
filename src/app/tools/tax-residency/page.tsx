import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { TaxResidencyCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/between-jobs"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Between-jobs playbook →
          </Link>
          <Link
            href="/calendar"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Tax season on calendar →
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
