import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SimOtpKeepCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "SIM / OTP keep sketch",
  description:
    "Sketch keep-vs-port costs for a Singapore mobile number when you still need Singpass, bank, and IRAS OTP SMS after leaving or during newborn paperwork.",
  path: "/tools/sim-otp-keep",
});

export default function SimOtpKeepToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "SIM / OTP keep", path: "/tools/sim-otp-keep" },
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
        eyebrow="Tools · Digital"
        title="Keep the +65 OTP path, or replace it?"
        summary="Singpass and bank SMS still need a reachable number. Compare prepaid keep, postpaid keep, port, and drop-and-replace sketches."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <SimOtpKeepCalculator />
        <ToolAbout
          how={[
      "Prices keeping prepaid, keeping postpaid, porting out, or dropping the number.",
      "Multiplies monthly keeps by months needed and adds one-time costs where they apply.",
      "Recommends the true minimum with no handicap for any path.",
    ]}
          actions={[
      "Dropping the number often breaks Singpass SMS and bank OTP until you re-bind contacts.",
      "Check postpaid early-termination fees before comparing against prepaid.",
    ]}
          sourceLabel="your telco"
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
            href="/journeys/newborn-special-pass"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Newborn Special Pass →
          </Link>
          <Link
            href="/journeys/leaving"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Leaving playbook →
          </Link>
          <Link
            href="/life"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Life pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
