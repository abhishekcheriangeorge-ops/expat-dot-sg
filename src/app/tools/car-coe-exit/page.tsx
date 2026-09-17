import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { CarCoeExitCalculator, ToolAbout } from "@/components/tools";
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
      <div className="border-b border-ink/15">
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
        <ToolAbout
          how={[
      "Totals sale proceeds plus PARF and COE rebate hope against loan, fees, and prepaid burn.",
      "Adds a logistics buffer on export paths only when you typed real fees.",
      "Never double-counts a rebate already folded into a negotiated price.",
    ]}
          actions={[
      "Get dealer quotes in writing. Export and scrap fees vary case by case.",
      "Keeping the car while abroad still needs road tax, insurance, and parking answers.",
    ]}
          sourceLabel="LTA and your dealer quotes"
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
            href="/journeys/condo-mcst-exit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Condo MCST exit →
          </Link>
          <Link
            href="/journeys/leaving"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Leaving playbook →
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
