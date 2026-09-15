import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { LeaseDutyCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/guides/renting-process-loi-ta-deposits"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Renting process →
          </Link>
          <Link
            href="/guides/lease-renewal-rent-increase"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Lease renewal →
          </Link>
          <Link
            href="/tools/setup-cash"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Setup cash sketch →
          </Link>
          <Link
            href="/home"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Home pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
