import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { StorageMonthsCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/bank-exit-closure"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Bank exit playbook →
          </Link>
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Leaving playbook →
          </Link>
          <Link
            href="/move"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Move pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
