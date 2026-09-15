import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";
import { JsonLd } from "@/components/seo";
import { buildPageMetadata } from "@/lib/seo";
import { webPageJsonLd } from "@/lib/seo-shell";

const title = "Next";
const description =
  "EP renewals, PR strategy, citizenship and NS implications, career pivots, and the leaving-Singapore playbook.";
const path = "/next";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function NextPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path })} />
      <PillarPage slug="next" />
    </>
  );
}
