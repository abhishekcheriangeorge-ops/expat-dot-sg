import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { CarCoeExitCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Car / COE exit sketch",
  description:
    "Sketch sale, export/scrap, or transfer cash for a Singapore car — proceeds, PARF/COE rebate hope, loan, fees, and prepaid parking burn.",
  path: "/tools/car-coe-exit",
});

export default function CarCoeExitToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Car / COE exit", path: "/tools/car-coe-exit" },
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
        eyebrow="Tools · Mobility"
        title="Car exit cash, sketched."
        summary="Compare local sale, export/scrap, and transfer floats before you cancel season parking or book the tow."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <CarCoeExitCalculator />
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/condo-mcst-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Condo MCST exit →
          </Link>
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Leaving playbook →
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
