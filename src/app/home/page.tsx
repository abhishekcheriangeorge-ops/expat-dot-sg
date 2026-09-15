import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";
import { JsonLd } from "@/components/seo";
import { buildPageMetadata } from "@/lib/seo";
import { webPageJsonLd } from "@/lib/seo-shell";

const title = "Home";
const description =
  "Renting process, condo vs HDB, neighbourhood deep-dives, utilities, domestic helpers, and tropical renewals.";
const path = "/home";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function HomePillarPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path })} />
      <PillarPage slug="home" />
    </>
  );
}
