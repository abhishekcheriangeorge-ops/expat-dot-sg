import type { Metadata } from "next";
import {
  DirectoryHero,
  NeighbourhoodDirectory,
} from "@/components/directory";
import { getNeighbourhoods } from "@/lib/content";

export const metadata: Metadata = {
  title: "Neighbourhoods",
  description:
    "Compare Singapore neighbourhoods for expat housing — rents, MRT, schools nearby, and who each area suits.",
};

export default async function NeighbourhoodsPage() {
  const neighbourhoods = await getNeighbourhoods();

  return (
    <>
      <DirectoryHero
        eyebrow="Home"
        title="Neighbourhoods"
        description="Where you live shapes school runs, weekends, and how quickly Singapore feels like yours. Shortlist by region, vibe, and rent — then dig into the detail pages."
        meta={`${neighbourhoods.length} areas · filter by region`}
      />
      <NeighbourhoodDirectory neighbourhoods={neighbourhoods} />
    </>
  );
}
