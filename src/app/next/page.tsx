import type { Metadata } from "next";
import { PillarPage } from "@/components/pillars/PillarPage";

export const metadata: Metadata = {
  title: "Next",
  description:
    "EP renewals, PR strategy, citizenship and NS implications, career pivots, and the leaving Singapore playbook.",
};

export default function NextPage() {
  return <PillarPage slug="next" />;
}
