import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata: Metadata = {
  title: "Family",
  description:
    "International and local schools, preschool, healthcare, kids activities, and special-needs pathways in Singapore.",
};

export default function FamilyPage() {
  return <PillarPage slug="family" />;
}
