import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SchoolExamIbDepositCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/utility-meter-photo-handoff"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Utility meter photo handoff →
          </Link>
          <Link
            href="/tools/school-cca-kit-bond"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            School CCA kit bond →
          </Link>
          <Link
            href="/family"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Family pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
