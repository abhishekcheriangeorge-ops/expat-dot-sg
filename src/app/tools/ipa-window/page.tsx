import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { IpaWindowCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "IPA enter-and-issue window",
  description:
    "Sketch MOM Employment Pass IPA deadlines — common six-month enter-and-issue window, notification-letter buffer, and extension lead time before you book flights.",
  path: "/tools/ipa-window",
});

export default function IpaWindowToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "IPA window", path: "/tools/ipa-window" },
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
        title="IPA clock, sketched."
        summary="Six months to enter and issue is the usual EP IPA story — confirm the letter, then book the flight. Dependant IPAs need the same discipline."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <IpaWindowCalculator />
        <ToolAbout
          how={[
      "Adds the common six-month enter-and-issue window to the IPA date.",
      "Checks entry and issuance dates against that window.",
      "Counts days to deadline from today and flags the two-week extension lead time.",
    ]}
          actions={[
      "Sequence medicals, issuance payment, and card registration the week you land.",
      "Ask the employer about extension before expiry. Do not assume the letter still works.",
    ]}
          sourceLabel="MOM"
      sourceHref="https://www.mom.gov.sg/passes-and-permits/employment-pass/apply-for-a-pass"
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
            href="/journeys/family-joining"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Family joining later →
          </Link>
          <Link
            href="/journeys/arriving"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Arriving checklists →
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
