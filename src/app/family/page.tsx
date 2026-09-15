import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";
import { JsonLd } from "@/components/seo";
import { buildPageMetadata } from "@/lib/seo";
import { webPageJsonLd } from "@/lib/seo-shell";

const title = "Family";
const description =
  "International and local schools, preschool, waitlists, family healthcare, kids activities, and special-needs pathways.";
const path = "/family";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function FamilyPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path })} />
      <PillarPage slug="family" />
    </>
  );
}
