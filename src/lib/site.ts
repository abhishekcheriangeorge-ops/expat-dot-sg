/** Shared navigation + IA for Humidity Editorial surfaces (Phase 1). */

export type PillarSlug =
  | "move"
  | "home"
  | "money"
  | "family"
  | "life"
  | "belong"
  | "next";

export type ModeSlug = "arriving" | "living";

export type NavLink = {
  href: string;
  label: string;
  description?: string;
};

export type PillarTopic = {
  label: string;
  href: string;
  blurb: string;
};

export type Pillar = {
  slug: PillarSlug;
  href: `/${PillarSlug}`;
  label: string;
  tagline: string;
  summary: string;
  modes: ModeSlug[];
  topics: PillarTopic[];
  related: NavLink[];
};

export const modes = [
  {
    slug: "arriving" as const,
    href: "/arriving" as const,
    label: "Arriving",
    tagline: "Deciding, packing, first 90 days",
    summary:
      "From the offer letter through visas, first housing, banking, and the chaos of week one — a clear path into Singapore.",
    image: "/images/arriving-singapore.jpg",
    imageAlt: "Marina Bay skyline at dusk, Singapore",
  },
  {
    slug: "living" as const,
    href: "/living" as const,
    label: "Living",
    tagline: "Thriving, renewing, belonging, leaving",
    summary:
      "Year two and beyond — neighbourhoods that fit, schools that work, communities that stick, and a clear exit when it is time.",
    image: "/images/living-singapore.jpg",
    imageAlt: "Gardens by the Bay at dusk, Singapore",
  },
] as const;

export const pillars: Pillar[] = [
  {
    slug: "move",
    href: "/move",
    label: "Move",
    tagline: "Passes, packing, and the first landing.",
    summary:
      "Employment Pass, S Pass, EntrePass, dependants, COMPASS, shipping, pets, driving conversion, and the 7/30/90-day runway.",
    modes: ["arriving"],
    topics: [
      {
        label: "Employment Pass & COMPASS",
        href: "/guides",
        blurb: "Eligibility, thresholds, and how COMPASS actually scores.",
      },
      {
        label: "Dependant & LTVP passes",
        href: "/guides",
        blurb: "Bringing a partner or family — documents and timelines.",
      },
      {
        label: "Relocation checklists",
        href: "/arriving",
        blurb: "7, 30, and 90-day sequences that keep the move sane.",
      },
      {
        label: "Shipping, pets & driving",
        href: "/guides",
        blurb: "Import rules, quarantine, and converting a foreign licence.",
      },
      {
        label: "First housing bridge",
        href: "/home",
        blurb: "Serviced apartments and short lets while you hunt properly.",
      },
      {
        label: "Trailing-partner career",
        href: "/guides",
        blurb: "Work rights, networking, and realistic first-job paths.",
      },
    ],
    related: [
      { href: "/arriving", label: "Arriving hub" },
      { href: "/money", label: "Money" },
      { href: "/home", label: "Home" },
    ],
  },
  {
    slug: "home",
    href: "/home",
    label: "Home",
    tagline: "Where you live shapes how Singapore feels.",
    summary:
      "Renting process, condo vs HDB, neighbourhood deep-dives, utilities, domestic helpers, and the annual renewals nobody warns you about.",
    modes: ["arriving", "living"],
    topics: [
      {
        label: "Renting process",
        href: "/guides",
        blurb: "LOI, tenancy agreement, deposits, and agent norms.",
      },
      {
        label: "Condo vs HDB",
        href: "/guides",
        blurb: "Eligibility, lifestyle trade-offs, and what foreigners miss.",
      },
      {
        label: "Neighbourhood guides",
        href: "/neighbourhoods",
        blurb: "Bukit Timah, Holland V, East Coast, River Valley, and more.",
      },
      {
        label: "Utilities & telecom",
        href: "/guides",
        blurb: "SP Group, fibre, mobile plans that actually work.",
      },
      {
        label: "Domestic helpers (MDW)",
        href: "/directory",
        blurb: "Agencies, contracts, and day-to-day realities.",
      },
      {
        label: "Aircon, pest & renewals",
        href: "/guides",
        blurb: "The maintenance rhythm of tropical living.",
      },
    ],
    related: [
      { href: "/neighbourhoods", label: "Neighbourhoods" },
      { href: "/arriving", label: "Arriving" },
      { href: "/living", label: "Living" },
    ],
  },
  {
    slug: "money",
    href: "/money",
    label: "Money",
    tagline: "Banking, tax, insurance, and what life actually costs.",
    summary:
      "Opening accounts, remittances, IRAS residency, insurance, cost of living by household, SRS, and decoding your package.",
    modes: ["arriving", "living"],
    topics: [
      {
        label: "Banking & remittances",
        href: "/guides",
        blurb: "Which banks, what documents, how to move money home.",
      },
      {
        label: "Tax residency & filing",
        href: "/guides",
        blurb: "IRAS rules, YA calendars, and clearance when you leave.",
      },
      {
        label: "Insurance landscape",
        href: "/guides",
        blurb: "Health, life, and what employers usually cover.",
      },
      {
        label: "Cost of living",
        href: "/guides",
        blurb: "Realistic budgets for singles, couples, and families.",
      },
      {
        label: "SRS & investing",
        href: "/guides",
        blurb: "What foreigners can and cannot do with local wrappers.",
      },
      {
        label: "Salary package decoding",
        href: "/guides",
        blurb: "Housing, flights, school fees — what the letter really means.",
      },
    ],
    related: [
      { href: "/move", label: "Move" },
      { href: "/next", label: "Next" },
      { href: "/arriving", label: "Arriving" },
    ],
  },
  {
    slug: "family",
    href: "/family",
    label: "Family",
    tagline: "Schools, healthcare, and raising kids here.",
    summary:
      "International and local school landscape, preschool, waitlists, GP-to-hospital care, kids activities, and special-needs pathways.",
    modes: ["arriving", "living"],
    topics: [
      {
        label: "School landscape",
        href: "/schools",
        blurb: "International, local, and hybrid options compared.",
      },
      {
        label: "Preschool & childcare",
        href: "/guides",
        blurb: "Infant care through kindergarten — fees and timing.",
      },
      {
        label: "Waitlist realism",
        href: "/guides",
        blurb: "When to apply, what “full” usually means.",
      },
      {
        label: "Healthcare for families",
        href: "/guides",
        blurb: "GP, hospitals, maternity, and mental health.",
      },
      {
        label: "Kids activities & calendar",
        href: "/calendar",
        blurb: "Holiday camps, enrichment, and the school-year rhythm.",
      },
      {
        label: "Special needs",
        href: "/guides",
        blurb: "Assessment, support, and school placement paths.",
      },
    ],
    related: [
      { href: "/schools", label: "Schools directory" },
      { href: "/calendar", label: "Calendar" },
      { href: "/living", label: "Living" },
    ],
  },
  {
    slug: "life",
    href: "/life",
    label: "Life",
    tagline: "Everyday Singapore, without the tourist gloss.",
    summary:
      "Transport, hawker literacy, shopping, nightlife, sports, arts, dating, essential apps, haze season, and what to do in an emergency.",
    modes: ["living"],
    topics: [
      {
        label: "Transport fluency",
        href: "/guides",
        blurb: "MRT, buses, Grab, and when a car still makes sense.",
      },
      {
        label: "Food & hawker literacy",
        href: "/guides",
        blurb: "Order like a local — centres, etiquette, favourites.",
      },
      {
        label: "Shopping & nightlife",
        href: "/guides",
        blurb: "Where expats actually go after the first month.",
      },
      {
        label: "Sports, arts & culture",
        href: "/guides",
        blurb: "Clubs, galleries, theatre, and weekend rituals.",
      },
      {
        label: "Apps that matter",
        href: "/guides",
        blurb: "Singpass, HealthHub, banking, delivery — the short list.",
      },
      {
        label: "Climate, haze & emergencies",
        href: "/guides",
        blurb: "995/999, embassies, and what haze season requires.",
      },
    ],
    related: [
      { href: "/belong", label: "Belong" },
      { href: "/living", label: "Living" },
      { href: "/calendar", label: "Calendar" },
    ],
  },
  {
    slug: "belong",
    href: "/belong",
    label: "Belong",
    tagline: "Find your people — clubs, hashes, faith, and nationality.",
    summary:
      "Membership clubs, associations, chambers, hashes, religious communities, nationality groups, and LGBTQ+ resources — discovery without the awkward cold start.",
    modes: ["living"],
    topics: [
      {
        label: "Membership clubs",
        href: "/clubs",
        blurb: "American, Tanglin, British, Hollandse, Swiss, and peers.",
      },
      {
        label: "Associations & chambers",
        href: "/clubs",
        blurb: "ANZA, AWA, business chambers, and professional groups.",
      },
      {
        label: "Hashes & sports tribes",
        href: "/clubs",
        blurb: "Running clubs, rugby, cricket, and the social after.",
      },
      {
        label: "Faith communities",
        href: "/guides",
        blurb: "Churches, temples, mosques, and interfaith spaces.",
      },
      {
        label: "Nationality groups",
        href: "/clubs",
        blurb: "Find your passport crowd without living inside it.",
      },
      {
        label: "LGBTQ+ resources",
        href: "/guides",
        blurb: "Community, nightlife, and practical support.",
      },
    ],
    related: [
      { href: "/clubs", label: "Clubs directory" },
      { href: "/life", label: "Life" },
      { href: "/living", label: "Living" },
    ],
  },
  {
    slug: "next",
    href: "/next",
    label: "Next",
    tagline: "Renewals, PR, pivots — and leaving well.",
    summary:
      "EP renewals, PR strategy, citizenship and NS implications, career pivots, and the leaving Singapore playbook: tax clearance, deposits, shipping out.",
    modes: ["living"],
    topics: [
      {
        label: "EP renewals",
        href: "/guides",
        blurb: "Timing, COMPASS again, and employer choreography.",
      },
      {
        label: "PR strategy",
        href: "/guides",
        blurb: "Eligibility signals, timelines, and realistic odds.",
      },
      {
        label: "Citizenship & NS",
        href: "/guides",
        blurb: "What permanent status implies for families.",
      },
      {
        label: "Career pivots",
        href: "/guides",
        blurb: "Switching employers, industries, or going independent.",
      },
      {
        label: "Leaving Singapore",
        href: "/guides",
        blurb: "Tax clearance, deposits, shipping, school exits.",
      },
      {
        label: "After Singapore",
        href: "/guides",
        blurb: "What transfers and what you leave behind.",
      },
    ],
    related: [
      { href: "/money", label: "Money" },
      { href: "/move", label: "Move" },
      { href: "/living", label: "Living" },
    ],
  },
];

export function getPillar(slug: PillarSlug): Pillar {
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) throw new Error(`Unknown pillar: ${slug}`);
  return pillar;
}

export function pillarsForMode(mode: ModeSlug): Pillar[] {
  return pillars.filter((p) => p.modes.includes(mode));
}

export const primaryNav = [
  { href: "/arriving", label: "Arriving" },
  { href: "/living", label: "Living" },
  { href: "/journeys", label: "Journeys" },
  { href: "/guides", label: "Guides" },
  { href: "/neighbourhoods", label: "Neighbourhoods" },
  { href: "/schools", label: "Schools" },
  { href: "/calendar", label: "Calendar" },
] as const;
