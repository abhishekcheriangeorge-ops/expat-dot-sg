import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SchoolBusLastWeekFloatCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "School bus last-week float sketch",
  description:
    "Sketch school bus last-week cash for ride-through, early cancel with notice shortfall, and no-show forfeit — including sibling fees — before you leave Singapore.",
  path: "/tools/school-bus-last-week-float",
});

export default function SchoolBusLastWeekFloatToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    {
      name: "School bus last-week float",
      path: "/tools/school-bus-last-week-float",
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
        eyebrow="Tools · School exit"
        title="Last-week bus cash, sketched."
        summary="Compare ride-through, early cancel, and no-show forfeit before packing week raids the operator float."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <SchoolBusLastWeekFloatCalculator />
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/cpf-nomination-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            CPF nomination exit →
          </Link>
          <Link
            href="/journeys/school-bus-cca-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            School bus / CCA exit →
          </Link>
          <Link
            href="/family"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Family pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
