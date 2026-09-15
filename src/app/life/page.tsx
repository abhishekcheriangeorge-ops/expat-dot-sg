import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";
import { JsonLd } from "@/components/seo";
import { buildPageMetadata } from "@/lib/seo";
import { webPageJsonLd } from "@/lib/seo-shell";

const title = "Life";
const description =
  "Transport, hawkers, shopping, nightlife, sports, apps, haze season, and emergencies — everyday Singapore without tourist gloss.";
const path = "/life";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function LifePage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path })} />
      <PillarPage slug="life" />
    </>
  );
}
