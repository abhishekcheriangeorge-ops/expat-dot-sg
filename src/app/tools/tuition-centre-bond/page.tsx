import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { TuitionCentreBondCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/parking-iu-erp-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Parking IU / ERP exit →
          </Link>
          <Link
            href="/tools/school-deposit-clawback"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            School deposit clawback →
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
