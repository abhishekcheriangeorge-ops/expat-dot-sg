import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SchoolDeviceBondCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "School device bond sketch",
  description:
    "Sketch iPad / 1:1 device bond return vs damage holds, overdue fees, and lost-device forfeiture before you leave Singapore.",
  path: "/tools/school-device-bond",
});

export default function SchoolDeviceBondToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "School device bond", path: "/tools/school-device-bond" },
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
        title="Device bond cash, sketched."
        summary="Compare on-time return, damage holds, and lost-device forfeiture before movers week swallows the IT desk slot."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <SchoolDeviceBondCalculator />
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/condo-visitor-qr-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Condo visitor QR revoke →
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
