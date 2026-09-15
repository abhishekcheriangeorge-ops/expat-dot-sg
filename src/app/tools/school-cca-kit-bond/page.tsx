import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SchoolCcaKitBondCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/condo-ev-charger-clear"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Condo EV charger clear →
          </Link>
          <Link
            href="/tools/school-device-bond"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            School device bond →
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
