import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { PetQuarantineFloatCalculator, ToolAbout } from "@/components/tools";
import { breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Pet quarantine float sketch",
  description:
    "Sketch AVS/vet docs, crate and airline pet fees, and arrival quarantine kennel cash before you leave Singapore with a pet.",
  path: "/tools/pet-quarantine-float",
});

export default function PetQuarantineFloatToolPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Tools", path: "/tools" },
    { name: "Pet quarantine float", path: "/tools/pet-quarantine-float" },
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
        eyebrow="Tools · Pets"
        title="Pet export cash, floated."
        summary="Compare direct-export, arrival-quarantine, and delay/retest floats so titre week does not raid movers money."
      />
      <div className="mx-auto max-w-[var(--max-page)] px-5 py-12 sm:px-8">
        <PetQuarantineFloatCalculator />
        <ToolAbout
          how={[
      "Prices vet docs, travel, quarantine days, and a buffer per path.",
      "Doubles the buffer on delay holds for retests and missed slots.",
      "Recommends direct export only when it truly is the minimum.",
    ]}
          actions={[
      "Confirm the destination waives quarantine before floating direct-export numbers.",
      "Keep the doubled buffer until the export certificate is in hand.",
    ]}
          sourceLabel="AVS and your vet"
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
            href="/journeys/school-locker-clear"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            School locker clear →
          </Link>
          <Link
            href="/journeys/pets-reexport"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Pets re-export →
          </Link>
          <Link
            href="/family"
            className="rounded-sm py-1.5 font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Family pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
