import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SchoolBusLastWeekFloatCalculator, ToolAbout } from "@/components/tools";
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
      <div className="border-b border-ink/15">
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
        <ToolAbout
          how={[
      "Prices ride days at a straight weekly-fee-fifths rate, rounded once at the end.",
      "Adds notice-shortfall days, cancel fees, and sibling fees per path.",
      "Ride days cap at 7. This sketch covers the last week, not the term.",
    ]}
          actions={[
      "Get written operator confirmation even on a clean cancel.",
      "Ask whether sibling fees continue after the primary seat stops.",
    ]}
          sourceLabel="your bus operator"
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
            href="/journeys/cpf-nomination-exit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            CPF nomination exit →
          </Link>
          <Link
            href="/journeys/school-bus-cca-exit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            School bus / CCA exit →
          </Link>
          <Link
            href="/family"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Family pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
