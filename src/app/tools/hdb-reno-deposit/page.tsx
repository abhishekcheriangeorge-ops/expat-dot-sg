import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { HdbRenoDepositCalculator, ToolAbout } from "@/components/tools";
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
      <div className="border-b border-ink/15">
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
        <ToolAbout
          how={[
      "Returns the full deposit on a clean pass after the hold window.",
      "Holds defect costs against the deposit on minor defects. An explicit zero means zero.",
      "Treats the full deposit as at risk on a major forfeit, with make-good bills possible on top.",
    ]}
          actions={[
      "Keep a mail-forward path until the cheque clears. Hold windows stretch.",
      "Confirm defect lists in writing with the permit office.",
    ]}
          sourceLabel="HDB and your permit office"
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
            href="/journeys/mail-forward-exit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Mail forward exit →
          </Link>
          <Link
            href="/journeys/leaving"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Leaving playbook →
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
