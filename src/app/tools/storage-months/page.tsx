import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { StorageMonthsCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Storage months sketch",
  description:
    "Sketch Singapore temporary self-storage cost as monthly band × months, plus optional insurance and access fees — orientation for relocation gaps.",
  path: "/tools/storage-months",
});

export default function StorageMonthsToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Storage months", path: "/tools/storage-months" },
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
        eyebrow="Tools · Move"
        title="Storage months, priced roughly."
        summary="Locker to family-volume bands × months, plus optional insurance and access fees — float enough SGD before you close the bank account."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <StorageMonthsCalculator />
        <ToolAbout
          how={[
      "Multiplies the monthly band by months, from locker to family size.",
      "Adds monthly add-ons and one-time access fees on top.",
      "Falls back to the studio band on unknown input rather than erroring.",
    ]}
          actions={[
      "Price the gap honestly. Two months of storage often beats rushed shipping.",
      "Confirm the policy covers tropical humidity as well as fire and theft.",
    ]}
          sourceLabel="storage operators"
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
            href="/journeys/bank-exit-closure"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Bank exit playbook →
          </Link>
          <Link
            href="/journeys/leaving"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Leaving playbook →
          </Link>
          <Link
            href="/move"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Move pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
