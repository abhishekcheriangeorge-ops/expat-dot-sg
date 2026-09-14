import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata: Metadata = {
  title: "Move",
  description:
    "Employment Pass, COMPASS, dependants, shipping, pets, driving conversion, and the 7/30/90-day runway into Singapore.",
};

export default function MovePage() {
  return <PillarPage slug="move" />;
}
