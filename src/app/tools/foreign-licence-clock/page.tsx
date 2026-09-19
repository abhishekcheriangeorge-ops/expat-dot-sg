import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { ForeignLicenceClockCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";
import { FOREIGN_LICENCE_SOURCE } from "@/lib/tools/foreign-licence-clock";

export const metadata: Metadata = buildPageMetadata({
  title: "Foreign licence conversion clock",
  description:
    "Count the Traffic Police window that actually applies to you: 12 months resident, 6 months if you drive for work, or 3 months as a new citizen or PR.",
  path: "/tools/foreign-licence-clock",
});

export default function ForeignLicenceClockToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Foreign licence clock", path: "/tools/foreign-licence-clock" },
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
        eyebrow="Tools · Mobility"
        title="Foreign licence clock, sketched."
        summary="Traffic Police run three different clocks — 12 months resident, 6 months if you drive for work, 3 months as a new citizen or PR. Count yours before movers week eats the calendar."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <ForeignLicenceClockCalculator />
        <ToolAbout
          how={[
      "Adds your window in months to the start date with day-of-month clamping.",
      "Counts days left from today, not from arrival.",
      "Offers the three windows Traffic Police publish; pick the one matching your status, not your gut.",
      "Custom windows cap at 36 months.",
    ]}
          actions={[
      "Book the basic theory test early. Slots go before movers week fills the calendar.",
      "Check which clock is yours. Driving for work on a Work Permit or S Pass is 6 months from pass issue, not 12.",
    ]}
          sourceLabel="SPF Traffic Police — Singapore Driving Licence"
          sourceHref={FOREIGN_LICENCE_SOURCE}
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
            href="/journeys/mover-lift-booking"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Mover lift booking →
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
