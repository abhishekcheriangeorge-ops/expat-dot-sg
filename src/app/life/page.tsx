import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata: Metadata = {
  title: "Life",
  description:
    "Transport, hawker literacy, shopping, nightlife, sports, arts, essential apps, haze, and emergencies in Singapore.",
};

export default function LifePage() {
  return <PillarPage slug="life" />;
}
