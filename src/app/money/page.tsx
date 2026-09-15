import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Money",
  description:
    "Banking, remittances, IRAS tax residency, insurance, cost of living, SRS, and decoding your Singapore package.",
  path: "/money",
});

export default function MoneyPage() {
  return <PillarPage slug="money" />;
}
