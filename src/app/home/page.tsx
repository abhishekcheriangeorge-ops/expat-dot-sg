import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Renting in Singapore, condo vs HDB, neighbourhood deep-dives, utilities, domestic helpers, and tropical renewals.",
};

export default function HomePillarPage() {
  return <PillarPage slug="home" />;
}
