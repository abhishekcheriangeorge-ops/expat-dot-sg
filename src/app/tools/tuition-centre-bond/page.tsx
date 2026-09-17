import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { TuitionCentreBondCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Tuition centre bond sketch",
  description:
    "Sketch tuition and enrichment centre bond return vs unused package value, notice fees, and materials holds before you leave Singapore.",
  path: "/tools/tuition-centre-bond",
});

export default function TuitionCentreBondToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Tuition centre bond", path: "/tools/tuition-centre-bond" },
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
        eyebrow="Tools · Enrichment exit"
        title="Tuition bond cash, sketched."
        summary="Compare full-refund hope, notice-partial paths, and package forfeits before parking deposits raid the same float."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <TuitionCentreBondCalculator />
        <ToolAbout
          how={[
      "Refunds bond plus unused package on a clean exit.",
      "Nets notice dues against unused credits once on a partial path, never twice.",
      "Treats a forfeit as bond and package kept, with notice dues possibly still billed.",
    ]}
          actions={[
      "Ask for a written statement before assuming zero recovery on a forfeit.",
      "Confirm whether unused credits offset notice dues at your centre.",
    ]}
          sourceLabel="your tuition centre"
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
            href="/journeys/parking-iu-erp-exit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Parking IU / ERP exit →
          </Link>
          <Link
            href="/tools/school-deposit-clawback"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            School deposit clawback →
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
