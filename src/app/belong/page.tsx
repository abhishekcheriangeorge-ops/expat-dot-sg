import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Belong",
  description:
    "Membership clubs, associations, chambers, hashes, faith communities, nationality groups, and LGBTQ+ resources in Singapore.",
  path: "/belong",
});

export default function BelongPage() {
  return <PillarPage slug="belong" />;
}
