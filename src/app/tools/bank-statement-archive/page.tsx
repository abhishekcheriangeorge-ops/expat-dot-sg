import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { BankStatementArchiveCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/condo-access-card-deposit"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Condo access-card deposit →
          </Link>
          <Link
            href="/journeys/bank-exit-closure"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Bank exit closure →
          </Link>
          <Link
            href="/money"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Money pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
