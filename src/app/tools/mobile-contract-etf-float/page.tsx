import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { MobileContractEtfFloatCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Mobile contract ETF float sketch",
  description:
    "Sketch mobile postpaid ETF cash for ride-out, early terminate, and port-out — including device balances and final-bill fees — before you leave Singapore.",
  path: "/tools/mobile-contract-etf-float",
});

export default function MobileContractEtfFloatToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    {
      name: "Mobile contract ETF float",
      path: "/tools/mobile-contract-etf-float",
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
        eyebrow="Tools · Telco exit"
        title="Contract ETF cash, sketched."
        summary="Compare ride-out, early ETF, and port-out before packing week raids the telco float."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <MobileContractEtfFloatCalculator />
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/mobile-postpaid-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Mobile postpaid exit →
          </Link>
          <Link
            href="/tools/sim-otp-keep"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            SIM OTP keep →
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
