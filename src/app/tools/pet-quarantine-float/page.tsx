import type { Metadata } from "next";
import Link from "next/link";
import { JourneyHero } from "@/components/journeys";
import { Breadcrumbs, JsonLd } from "@/components/seo";
import { PetQuarantineFloatCalculator } from "@/components/tools";
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
      <div className="border-b border-fog-soft">
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
        <p className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
          <Link
            href="/tools"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← All tools
          </Link>
          <Link
            href="/journeys/school-locker-clear"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            School locker clear →
          </Link>
          <Link
            href="/journeys/pets-reexport"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Pets re-export →
          </Link>
          <Link
            href="/family"
            className="font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Family pillar →
          </Link>
        </p>
      </div>
    </>
  );
}
