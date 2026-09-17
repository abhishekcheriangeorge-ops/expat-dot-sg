import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { CpfWithdrawalCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "CPF withdrawal timing sketch",
  description:
    "Sketch when to start a CPF withdrawal / closure conversation before leaving Singapore — processing windows vs departure, not CPF Board advice.",
  path: "/tools/cpf-withdrawal",
});

export default function CpfWithdrawalToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "CPF withdrawal", path: "/tools/cpf-withdrawal" },
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
        eyebrow="Tools · Money"
        title="CPF timing vs your flight, sketched."
        summary="Count backwards from departure across common processing windows. Status, pledges, and MediSave rules still decide what you can take."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <CpfWithdrawalCalculator />
        <ToolAbout
          how={[
      "Subtracts the processing window from your departure date to find the apply-by date.",
      "Counts days left from today against that apply-by date.",
      "Windows run 14 to 60 days across docs-ready to complex cases.",
    ]}
          actions={[
      "Start the conversation before the apply-by date passes. Funds do not clear overnight.",
      "Keep a separate SGD float for flights and freight. Do not spend the CPF mentally.",
    ]}
          sourceLabel="CPF Board"
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
            href="/journeys/pets-reexport"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Pets re-export →
          </Link>
          <Link
            href="/journeys/leaving"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Leaving playbook →
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
