import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { LeaseNoticeCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/tools/lease-duty"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Lease stamp duty →
          </Link>
          <Link
            href="/guides/security-deposit-diplomatic-clause"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Diplomatic clause guide →
          </Link>
          <Link
            href="/guides/early-lease-termination-tenants"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Early lease termination →
          </Link>
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Leaving playbook →
          </Link>
          <Link
            href="/home"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Home pillar →
          </Link>
          <Link
            href="/next"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Next pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
