import type { ServiceCategory } from "@/lib/content";

/** Category hub → pillar / guide / tool deep-links (shell SEO; no inventory). */
export const SERVICE_CATEGORY_RELATED: Record<
  ServiceCategory,
  { href: string; label: string }[]
> = {
  movers: [
    { href: "/move", label: "Move pillar" },
    { href: "/home", label: "Home pillar" },
    { href: "/guides/shipping-household-singapore", label: "Shipping in" },
    { href: "/guides/shipping-out-household", label: "Shipping out" },
  ],
  clinics: [
    { href: "/life", label: "Life pillar" },
    { href: "/family", label: "Family pillar" },
    { href: "/guides/healthcare-gp-hospital", label: "GP → hospital" },
    { href: "/guides/health-insurance-expat", label: "Health insurance" },
  ],
  agents: [
    { href: "/home", label: "Home pillar" },
    { href: "/tools/lease-duty", label: "Lease stamp duty" },
    {
      href: "/guides/renting-process-loi-ta-deposits",
      label: "Renting process",
    },
  ],
  fdw: [
    { href: "/family", label: "Family pillar" },
    { href: "/home", label: "Home pillar" },
    {
      href: "/guides/hiring-domestic-helper-mdw",
      label: "Hiring a helper",
    },
  ],
  tutors: [
    { href: "/family", label: "Family pillar" },
    { href: "/schools", label: "Schools directory" },
    {
      href: "/guides/aeis-saeis-international-students",
      label: "AEIS / S-AEIS",
    },
    {
      href: "/guides/mandarin-enrichment-expat-kids-singapore",
      label: "Mandarin enrichment",
    },
  ],
  insurance: [
    { href: "/money", label: "Money pillar" },
    { href: "/family", label: "Family pillar" },
    { href: "/guides/health-insurance-expat", label: "Health insurance" },
  ],
  tax: [
    { href: "/money", label: "Money pillar" },
    { href: "/tools/tax-residency", label: "Tax residency sketch" },
    {
      href: "/guides/iras-tax-residency-filing",
      label: "IRAS tax residency",
    },
  ],
  legal: [
    { href: "/move", label: "Move pillar" },
    { href: "/next", label: "Next pillar" },
    {
      href: "/guides/document-apostille-notary-singapore",
      label: "Apostille / notary",
    },
    { href: "/guides/employment-pass-singapore", label: "Employment Pass" },
  ],
  other: [
    { href: "/directory", label: "All categories" },
    { href: "/life", label: "Life pillar" },
    { href: "/guides", label: "All guides" },
  ],
};

/** Service detail footer → primary pillar for this category. */
export const SERVICE_CATEGORY_PILLAR: Record<
  ServiceCategory,
  { href: string; label: string }
> = {
  movers: { href: "/move", label: "Move pillar" },
  clinics: { href: "/life", label: "Life pillar" },
  agents: { href: "/home", label: "Home pillar" },
  fdw: { href: "/family", label: "Family pillar" },
  tutors: { href: "/family", label: "Family pillar" },
  insurance: { href: "/money", label: "Money pillar" },
  tax: { href: "/money", label: "Money pillar" },
  legal: { href: "/move", label: "Move pillar" },
  other: { href: "/life", label: "Life pillar" },
};
