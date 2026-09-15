import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { CpfWithdrawalCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/pets-reexport"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Pets re-export →
          </Link>
          <Link
            href="/journeys/leaving"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Leaving playbook →
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
