import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { SimOtpKeepCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/newborn-special-pass"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Newborn Special Pass →
          </Link>
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Leaving playbook →
          </Link>
          <Link
            href="/life"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Life pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
