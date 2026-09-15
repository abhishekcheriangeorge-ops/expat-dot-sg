import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Family",
  description:
    "International and local schools, preschool, waitlists, family healthcare, kids activities, and special-needs pathways.",
  path: "/family",
});

export default function FamilyPage() {
  return <PillarPage slug="family" />;
}
