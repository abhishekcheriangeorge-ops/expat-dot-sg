import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SetupCashCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "First-month cash sketch",
  description:
    "Estimate Singapore move-in cash — advance rent, deposit, agent fee, IRAS lease duty, and temporary housing.",
  path: "/tools/setup-cash",
});

export default function SetupCashToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Setup cash", path: "/tools/setup-cash" },
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
        eyebrow="Tools · Money"
        title="Cash to land, sketched."
        summary="Deposit + advance rent + stamp duty + temp housing. Orientation for LOI week — not a conveyancing quote."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <SetupCashCalculator />
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
            href="/guides/first-housing-serviced-apartment"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            First housing bridge →
          </Link>
          <Link
            href="/tools/lease-duty"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Lease duty →
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
