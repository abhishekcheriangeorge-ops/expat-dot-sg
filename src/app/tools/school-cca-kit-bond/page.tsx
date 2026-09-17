import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SchoolCcaKitBondCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "School CCA kit bond sketch",
  description:
    "Sketch CCA kit / band instrument / sports gear bond return vs damage holds, overdue fees, and lost-kit forfeiture before you leave Singapore.",
  path: "/tools/school-cca-kit-bond",
});

export default function SchoolCcaKitBondToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "School CCA kit bond", path: "/tools/school-cca-kit-bond" },
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
        title="CCA kit bond cash, sketched."
        summary="Compare on-time instrument / kit return, damage holds, and lost-kit forfeiture before movers week swallows the CCA store slot."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <SchoolCcaKitBondCalculator />
        <ToolAbout
          how={[
      "Returns the full bond on an on-time return, minus admin and overdue fees.",
      "Deducts damage from the bond once on a damage hold. It is not charged again on top.",
      "Treats a lost kit as bond kept plus any replacement bill.",
    ]}
          actions={[
      "Return kits to the CCA store before the published deadline, not the flight date.",
      "Keep the receipt until the school closes the ticket.",
    ]}
          sourceLabel="your school handbook"
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
            href="/journeys/condo-ev-charger-clear"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Condo EV charger clear →
          </Link>
          <Link
            href="/tools/school-device-bond"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            School device bond →
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
