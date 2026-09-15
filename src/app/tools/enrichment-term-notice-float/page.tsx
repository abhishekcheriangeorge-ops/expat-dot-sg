import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { EnrichmentTermNoticeFloatCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Enrichment term-notice float sketch",
  description:
    "Sketch enrichment term-notice cash for ride-out, notice shortfall, and early exit — including sibling fees — before you leave Singapore.",
  path: "/tools/enrichment-term-notice-float",
});

export default function EnrichmentTermNoticeFloatToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    {
      name: "Enrichment term-notice float",
      path: "/tools/enrichment-term-notice-float",
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
        eyebrow="Tools · Enrichment exit"
        title="Term-notice cash, sketched."
        summary="Compare ride-out, notice shortfall, and early exit before packing week raids the studio float."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <EnrichmentTermNoticeFloatCalculator />
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/enrichment-class-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Enrichment class exit →
          </Link>
          <Link
            href="/tools/tuition-centre-bond"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Tuition centre bond →
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
