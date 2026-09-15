import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { AgentCommissionCalculator } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Tenancy agent commission sketch",
  description:
    "Sketch Singapore residential rental agent commission as months of rent — tenant or landlord side — with optional 9% GST.",
  path: "/tools/agent-commission",
});

export default function AgentCommissionToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Agent commission", path: "/tools/agent-commission" },
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
        title="Agent fee in months of rent."
        summary="LOI week often hides a half-month or full-month commission plus GST. Sketch the payable before you transfer."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <AgentCommissionCalculator />
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/tools/setup-cash"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            First-month cash →
          </Link>
          <Link
            href="/tools/lease-duty"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Lease stamp duty →
          </Link>
          <Link
            href="/journeys/graduate-pass-bridge"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Graduate pass bridge →
          </Link>
        </p>
      </div>
    </>
  );
}
