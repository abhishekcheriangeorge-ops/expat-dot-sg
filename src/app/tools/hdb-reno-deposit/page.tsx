import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { HdbRenoDepositCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "HDB reno deposit return sketch",
  description:
    "Sketch HDB / renovation permit deposit refund timing and cash at risk after reinstatement inspection — orientation only.",
  path: "/tools/hdb-reno-deposit",
});

export default function HdbRenoDepositToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "HDB reno deposit", path: "/tools/hdb-reno-deposit" },
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
        title="Reno deposit return, sketched."
        summary="Model hold days and clean-pass vs defect outcomes before you cancel the mailbox that receives the refund."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <HdbRenoDepositCalculator />
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/mail-forward-exit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Mail forward exit →
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
        </p>
      </div>
    </>
  );
}
