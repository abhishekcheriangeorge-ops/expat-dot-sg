import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { AgentCommissionCalculator, ToolAbout } from "@/components/tools";
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
      <div className="border-b border-ink/15">
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
        <ToolAbout
          how={[
      "Multiplies monthly rent by fee months for the base commission.",
      "Adds 9% GST only when ticked.",
      "Tenant and landlord sides use the same maths with different norms attached.",
    ]}
          actions={[
      "Tenant-side fees above one month of rent are uncommon on ordinary leases. Re-read exclusive terms.",
      "Confirm whether GST applies to your agent before you budget.",
    ]}
          sourceLabel="market norms"
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
            href="/tools/setup-cash"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            First-month cash →
          </Link>
          <Link
            href="/tools/lease-duty"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Lease stamp duty →
          </Link>
          <Link
            href="/journeys/graduate-pass-bridge"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Graduate pass bridge →
          </Link>
        </p>
      </div>
    </>
  );
}
