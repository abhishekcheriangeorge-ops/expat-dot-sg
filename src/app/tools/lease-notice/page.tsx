import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { LeaseNoticeCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Diplomatic clause notice sketch",
  description:
    "Sketch Singapore tenancy diplomatic-clause lock-in and notice dates — common 12+2 on a 24-month TA — before you serve notice or resign.",
  path: "/tools/lease-notice",
});

export default function LeaseNoticeToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Lease notice", path: "/tools/lease-notice" },
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
        eyebrow="Tools · Home"
        title="Diplomatic clause dates, sketched."
        summary="Most 24-month TAs let you serve after a 12-month lock-in with two months’ written notice — if your clause says so. Check the math before you book flights."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <LeaseNoticeCalculator />
        <ToolAbout
          how={[
      "Builds lease end, earliest serve date, and earliest exit from start date plus lock-in and notice months.",
      "Tests whether serving notice still lands your target hand-back date.",
      "Counts whole calendar months with day-of-month clamping.",
    ]}
          actions={[
      "Read your tenancy agreement for trigger proof, usually a pass cancellation or relocation letter.",
      "If lock-in does not clear, price remaining-rent risk in the early-exit guide.",
    ]}
          sourceLabel="your tenancy agreement"
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
            href="/tools/lease-duty"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Lease stamp duty →
          </Link>
          <Link
            href="/journeys/leaving"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Leaving playbook →
          </Link>
          <Link
            href="/home"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Home pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
