import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";
import { JsonLd } from "@/components/seo";
import { buildPageMetadata } from "@/lib/seo";
import { webPageJsonLd } from "@/lib/seo-shell";

const title = "Money";
const description =
  "Banking, remittances, IRAS tax residency, insurance, cost of living, SRS, and decoding your Singapore package.";
const path = "/money";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function MoneyPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path })} />
      <PillarPage slug="money" />
    </>
  );
}
