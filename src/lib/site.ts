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

export type ModeStartLink = {
  href: string;
  label: string;
  blurb: string;
};

export const modes = [
  {
    slug: "arriving" as const,
    href: "/arriving" as const,
    label: "Arriving",
    tagline: "Deciding, packing, first 90 days",
    summary:
      "From the offer letter through visas, first housing, banking, and the chaos of week one — a clear path into Singapore.",
    howToUse:
      "Start with the dependency map (SIM → Singpass → bank), file the SG Arrival Card, clear Changi → city, then push HR through issuance → Notification Letter → EPSC. Tick the 7/30/90 boards; open a pillar only when a specific blocker appears.",
    startHere: [
      {
        href: "/guides/first-week-sim-singpass-bank",
        label: "Week-one dependency map",
        blurb: "The real order for SIM, Singpass, bank, and PayNow.",
      },
      {
        href: "/guides/sg-arrival-card-expats",
        label: "SG Arrival Card",
        blurb: "ICA’s 3-day window, IPA path, and why it is not a visa.",
      },
      {
        href: "/guides/changi-airport-grab-taxi",
        label: "Changi → city",
        blurb: "Grab vs taxi surcharges vs MRT after you land.",
      },
      {
        href: "/guides/work-pass-issuance-epsc-notification",
        label: "Issuance → EPSC → card",
        blurb: "IPA vs Notification Letter, when you may work, biometrics clocks.",
      },
      {
        href: "/journeys/arriving",
        label: "7 / 30 / 90 checklists",
        blurb: "Tickable boards for landing week through first quarter.",
      },
    ] as const satisfies readonly ModeStartLink[],
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
    howToUse:
      "Use Living when issuance drama is over. Pick one life category (home, school, belonging, renewals) — each pillar page is a topic map, not a feed. Keep the leaving playbook bookmarked before you need it.",
    startHere: [
      {
        href: "/guides/healthcare-gp-hospital",
        label: "GP vs A&E triage",
        blurb: "Which door to open when someone is sick at 10pm.",
      },
      {
        href: "/guides/emergencies-995-999-embassies",
        label: "995 vs 999",
        blurb: "Emergency numbers, dengue inspections, embassy limits.",
      },
      {
        href: "/neighbourhoods",
        label: "Neighbourhoods",
        blurb: "Where the commute and weekends actually fit.",
      },
      {
        href: "/journeys/leaving",
        label: "Leaving playbook",
        blurb: "IR21, deposits, and the exit sequence when plans change.",
      },
    ] as const satisfies readonly ModeStartLink[],
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
        label: "Week-one dependency map",
        href: "/guides/first-week-sim-singpass-bank",
        blurb: "SIM → Singpass → bank order that stops circular blockers.",
      },
      {
        label: "SG Arrival Card",
        href: "/guides/sg-arrival-card-expats",
        blurb: "ICA’s 3-day window and IPA vs issued-pass paths.",
      },
      {
        label: "Changi → city transfer",
        href: "/guides/changi-airport-grab-taxi",
        blurb: "Grab vs taxi location surcharges vs MRT with luggage.",
      },
      {
        label: "Issuance, EPSC & Notification Letter",
        href: "/guides/work-pass-issuance-epsc-notification",
        blurb: "When you may work, biometrics, SGWorkPass, card delivery.",
      },
      {
        label: "Employment Pass & COMPASS",
        href: "/guides/employment-pass-singapore",
        blurb: "Eligibility, thresholds, and how COMPASS actually scores.",
      },
      {
        label: "Relocation checklists",
        href: "/journeys/arriving",
        blurb: "7, 30, and 90-day sequences that keep the move sane.",
      },
      {
        label: "First housing bridge",
        href: "/guides/first-housing-serviced-apartment",
        blurb: "Serviced apartments and short lets while you hunt properly.",
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
        label: "Banking & PayNow",
        href: "/guides/paynow-setup-foreigners-singapore",
        blurb: "FIN vs mobile proxies after the salary account opens.",
      },
      {
        label: "Cash declaration (CBNI)",
        href: "/guides/cbni-cash-declaration-singapore",
        blurb: "S$20k+ physical cash — NP727 before you fly.",
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
        href: "/guides/healthcare-gp-hospital",
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
        label: "Changi → city transfer",
        href: "/guides/changi-airport-grab-taxi",
        blurb: "First-ride Grab vs taxi surcharges vs MRT.",
      },
      {
        label: "Transport fluency",
        href: "/guides/mrt-bus-transport-literacy",
        blurb: "SimplyGo, foreign-card fee, EZ-Link, and when Grab wins.",
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
        href: "/guides/emergencies-995-999-embassies",
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
  { href: "/guides", label: "Guides" },
  { href: "/neighbourhoods", label: "Neighbourhoods" },
  { href: "/schools", label: "Schools" },
  { href: "/clubs", label: "Clubs" },
  { href: "/directory", label: "Directory" },
  { href: "/journeys", label: "Journeys" },
  { href: "/calendar", label: "Calendar" },
  { href: "/tools", label: "Tools" },
] as const;

/** Compact desktop strip — full set lives in mobile + footer */
export const primaryNavDesktop = [
  { href: "/arriving", label: "Arriving" },
  { href: "/living", label: "Living" },
  { href: "/guides", label: "Guides" },
  { href: "/neighbourhoods", label: "Areas" },
  { href: "/schools", label: "Schools" },
  { href: "/clubs", label: "Clubs" },
  { href: "/directory", label: "Directory" },
  { href: "/journeys", label: "Journeys" },
] as const;
