import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SchoolDeviceBondCalculator, ToolAbout } from "@/components/tools";
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
      <div className="border-b border-ink/15">
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
        <ToolAbout
          how={[
      "Returns the full bond on an on-time return, minus admin and overdue fees.",
      "Deducts damage from the bond once on a damage hold. It is not charged again on top.",
      "Treats a lost device as bond kept plus any replacement bill.",
    ]}
          actions={[
      "Book the IT return before movers week. Overdue fees bite even on full returns.",
      "Photograph the device and charger at handover.",
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
            href="/journeys/condo-visitor-qr-exit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Condo visitor QR revoke →
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
