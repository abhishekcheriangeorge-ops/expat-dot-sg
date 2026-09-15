import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";
import { JsonLd } from "@/components/seo";
import { buildPageMetadata } from "@/lib/seo";
import { webPageJsonLd } from "@/lib/seo-shell";

const title = "Move";
const description =
  "Employment Pass, COMPASS, dependants, shipping, pets, driving conversion, and the 7/30/90-day runway into Singapore.";
const path = "/move";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function MovePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path })} />
      <PillarPage slug="move" />
    </>
  );
}
