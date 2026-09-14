import type { Metadata } from "next";
import { ModeHub } from "@/components/modes/ModeHub";

export const metadata: Metadata = {
  title: "Arriving",
  description:
    "Deciding, packing, and the first 90 days in Singapore — visas, housing, banking, and the runway that keeps the move sane.",
};

export default function ArrivingPage() {
  return <ModeHub mode="arriving" />;
}
