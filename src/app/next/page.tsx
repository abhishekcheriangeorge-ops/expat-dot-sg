import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Next",
  description:
    "EP renewals, PR strategy, citizenship and NS implications, career pivots, and the leaving-Singapore playbook.",
  path: "/next",
});

export default function NextPage() {
  return <PillarPage slug="next" />;
}
