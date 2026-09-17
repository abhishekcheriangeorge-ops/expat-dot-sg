import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SchoolExamIbDepositCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "School exam / IB deposit sketch",
  description:
    "Sketch exam sitting / IB / checkpoint deposit return vs partial holds, late-cancel penalties, and full forfeiture before you leave Singapore.",
  path: "/tools/school-exam-ib-deposit",
});

export default function SchoolExamIbDepositToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "School exam / IB deposit", path: "/tools/school-exam-ib-deposit" },
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
        eyebrow="Tools · School exit"
        title="Exam deposit cash, sketched."
        summary="Compare on-time refund, partial late holds, and full forfeit before movers week swallows the cashier appointment."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <SchoolExamIbDepositCalculator />
        <ToolAbout
          how={[
      "Refunds the deposit in full on an on-time cancel, minus sitting and admin fees.",
      "Holds penalties against the deposit on a late cancel, and invoices any excess above it.",
      "Treats a forfeit as deposit kept with sitting, admin, and penalties still billed.",
    ]}
          actions={[
      "Get cashier confirmation in writing before treating a deposit as recoverable.",
      "Check whether transcripts or remark fees bill separately.",
    ]}
          sourceLabel="your school handbook"
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
            href="/journeys/utility-meter-photo-handoff"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Utility meter photo handoff →
          </Link>
          <Link
            href="/tools/school-cca-kit-bond"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            School CCA kit bond →
          </Link>
          <Link
            href="/family"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Family pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
