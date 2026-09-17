import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { BankStatementArchiveCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Bank statement archive sketch",
  description:
    "Sketch months of bank statements still to pull before account close — self-serve PDF vs branch reprint vs rush courier fees — before you leave Singapore.",
  path: "/tools/bank-statement-archive",
});

export default function BankStatementArchiveToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Bank statement archive", path: "/tools/bank-statement-archive" },
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
        eyebrow="Tools · Money exit"
        title="Statement archive cash, sketched."
        summary="Compare self-serve downloads, fee reprints, and rush courier before account close locks the portal."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <BankStatementArchiveCalculator />
        <ToolAbout
          how={[
      "Subtracts months on hand from months needed to find the gap.",
      "Prices branch reprints per missing month, plus a rush fee only when a gap exists.",
      "Self-serve PDF download always costs nothing in this sketch.",
    ]}
          actions={[
      "Pull PDFs while login and Singpass still work. Portals often lock after account close.",
      "Confirm what you hold before paying any courier.",
    ]}
          sourceLabel="your bank"
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
            href="/journeys/condo-access-card-deposit"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Condo access-card deposit →
          </Link>
          <Link
            href="/journeys/bank-exit-closure"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Bank exit closure →
          </Link>
          <Link
            href="/money"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Money pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
