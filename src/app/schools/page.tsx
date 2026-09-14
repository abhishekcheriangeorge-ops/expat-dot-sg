import type { Metadata } from "next";
import { DirectoryHero, SchoolDirectory } from "@/components/directory";
import { getSchools } from "@/lib/content";

export const metadata: Metadata = {
  title: "Schools",
  description:
    "Singapore international schools directory plus key local options — filter by curriculum, sector, and campus.",
};

export default async function SchoolsPage() {
  const schools = await getSchools();
  const international = schools.filter((s) => s.sector === "international").length;
  const local = schools.filter((s) => s.sector === "local").length;

  return (
    <>
      <DirectoryHero
        eyebrow="Family"
        title="Schools"
        description="Curriculum, campus geography, and waitlist realism — not glossy brochure copy. Start with sector and pathway, then open the schools that match your child’s year and your housing map."
        meta={`${schools.length} schools · ${international} international · ${local} key local`}
      />
      <SchoolDirectory schools={schools} />
    </>
  );
}
