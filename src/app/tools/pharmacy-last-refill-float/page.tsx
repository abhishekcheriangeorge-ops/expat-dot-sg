import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { PharmacyLastRefillFloatCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Pharmacy last-refill float sketch",
  description:
    "Sketch pharmacy last-refill cash for polyclinic refill, private top-up, and travel fills — including family add-ons — before you leave Singapore.",
  path: "/tools/pharmacy-last-refill-float",
});

export default function PharmacyLastRefillFloatToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    {
      name: "Pharmacy last-refill float",
      path: "/tools/pharmacy-last-refill-float",
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
        eyebrow="Tools · Health exit"
        title="Last-refill cash, sketched."
        summary="Compare polyclinic refill, private top-up, and travel fills before packing week raids the pharmacy float."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <PharmacyLastRefillFloatCalculator />
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/pharmacy-chronic-script-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Pharmacy chronic-script exit →
          </Link>
          <Link
            href="/tools/clinic-deposit-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Clinic deposit exit →
          </Link>
          <Link
            href="/life"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Life pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
