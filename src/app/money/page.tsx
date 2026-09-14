import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata: Metadata = {
  title: "Money",
  description:
    "Banking, remittances, IRAS tax residency, insurance, cost of living, SRS, and decoding your Singapore package.",
};

export default function MoneyPage() {
  return <PillarPage slug="money" />;
}
