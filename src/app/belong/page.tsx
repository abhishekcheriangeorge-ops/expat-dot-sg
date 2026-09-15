import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";
import { JsonLd } from "@/components/seo";
import { buildPageMetadata } from "@/lib/seo";
import { webPageJsonLd } from "@/lib/seo-shell";

const title = "Belong";
const description =
  "Membership clubs, associations, chambers, hashes, faith communities, nationality groups, and LGBTQ+ resources in Singapore.";
const path = "/belong";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path,
});

export default function BelongPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd({ title, description, path })} />
      <PillarPage slug="belong" />
    </>
  );
}
