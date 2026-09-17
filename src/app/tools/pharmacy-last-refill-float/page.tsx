import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { PharmacyLastRefillFloatCalculator, ToolAbout } from "@/components/tools";
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
      <div className="border-b border-ink/15">
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
        <ToolAbout
          how={[
      "Finds the gap between days of cover needed and days on hand.",
      "Charges refill and premium fees only when a gap exists, plus any family add-on.",
      "Travel fills price one extended script fee plus premium.",
    ]}
          actions={[
      "Confirm quantity limits and carry paperwork before paying for an extended script.",
      "Ask the prescriber for a summary letter. Destination pharmacies want one.",
    ]}
          sourceLabel="your prescriber and HSA rules"
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
            href="/journeys/pharmacy-chronic-script-exit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Pharmacy chronic-script exit →
          </Link>
          <Link
            href="/tools/clinic-deposit-exit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Clinic deposit exit →
          </Link>
          <Link
            href="/life"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Life pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
