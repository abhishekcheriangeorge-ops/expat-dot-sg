import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { LeaseDutyCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Lease stamp duty sketch",
  description:
    "Estimate IRAS tenancy lease duty for Singapore rentals — 0.4% of total rent (≤4 years) or 4× AAR, with the S$1,000 AAR exemption.",
  path: "/tools/lease-duty",
});

export default function LeaseDutyToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Lease duty", path: "/tools/lease-duty" },
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
        title="Stamp duty on the TA, sketched."
        summary="IRAS lease duty is usually 0.4% of total rent for leases of four years or less. Use this before you LOI — then stamp on myTax Portal."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <LeaseDutyCalculator />
        <ToolAbout
          how={[
      "Multiplies monthly rent plus any extra monthly consideration by lease months.",
      "Applies 0.4%: on total rent up to 4 years, on 4x average annual rent beyond.",
      "Leases at or under S$1,000 average annual rent are exempt.",
    ]}
          actions={[
      "Confirm who pays in the tenancy agreement. Duty usually sits with the tenant.",
      "Cross-check against IRAS's own calculator before stamp day.",
    ]}
          sourceLabel="IRAS"
      sourceHref="https://www.iras.gov.sg/taxes/stamp-duty/for-property/renting-a-property"
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
            href="/guides/renting-process-loi-ta-deposits"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Renting process →
          </Link>
          <Link
            href="/guides/lease-renewal-rent-increase"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Lease renewal →
          </Link>
          <Link
            href="/tools/setup-cash"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Setup cash sketch →
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
