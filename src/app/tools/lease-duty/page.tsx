import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { LeaseDutyCalculator } from "@/components/tools";

export const metadata: Metadata = {
  title: "Lease stamp duty sketch",
  description:
    "Estimate IRAS tenancy lease duty for Singapore rentals — 0.4% of total rent (≤4 years) or 4× AAR, with the S$1,000 AAR exemption.",
};

export default function LeaseDutyToolPage() {
  return (
    <>
      <JourneyHero
        eyebrow="Tools · Home"
        title="Stamp duty on the TA, sketched."
        summary="IRAS lease duty is usually 0.4% of total rent for leases of four years or less. Use this before you LOI — then stamp on myTax Portal."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <LeaseDutyCalculator />
        <p className="mt-12 text-sm text-ink-faint">
          <Link
            href="/tools/setup-cash"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Full first-month cash sketch →
          </Link>
          {" · "}
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            All tools
          </Link>
        </p>
      </div>
    </>
  );
}
