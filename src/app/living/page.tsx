import type { Metadata } from "next";
import { ModeHub } from "@/components/modes/ModeHub";

export const metadata: Metadata = {
  title: "Living",
  description:
    "Thriving in Singapore beyond the first ninety days — neighbourhoods, schools, belonging, renewals, and leaving well.",
};

export default function LivingPage() {
  return <ModeHub mode="living" />;
}
