import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SetupCashCalculator, ToolAbout } from "@/components/tools";
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
      <div className="border-b border-ink/15">
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
        <ToolAbout
          how={[
      "Adds one month advance rent plus your deposit and agent months on the same rent.",
      "Folds in IRAS lease duty at 0.4% of total rent, temp-housing weeks, and a misc buffer.",
      "Lease length locks to 1 or 2 years, the standard tenancy lengths.",
    ]}
          actions={[
      "Hold this total liquid before LOI week. Landlords move fast once you commit.",
      "If temp housing is the biggest line, read the serviced-apartment bridge guide.",
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
            href="/guides/first-housing-serviced-apartment"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            First housing bridge →
          </Link>
          <Link
            href="/tools/lease-duty"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Lease duty →
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
