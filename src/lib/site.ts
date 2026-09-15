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
      "Use Living when issuance drama is over. Pick one life category (home, school, belonging, renewals) — each pillar page is a topic map, not a feed. Keep ScamShield, pass-card replacement, and the leaving / STVP playbook bookmarked before you need them.",
    startHere: [
      {
        href: "/guides/healthcare-gp-hospital",
        label: "GP vs A&E triage",
        blurb: "Which door to open when someone is sick at 10pm.",
      },
      {
        href: "/guides/scams-singpass-phishing-expats",
        label: "ScamShield / Singpass",
        blurb: "1799, gov.sg SMS, and what banks will never ask.",
      },
      {
        href: "/guides/between-jobs-stvp-singapore",
        label: "EP cancel → STVP",
        blurb: "Up to 90 days stay, no work, family DP cascade.",
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
        label: "EP medical for issuance",
        href: "/guides/ep-medical-examination-issuance",
        blurb: "IPA-required exams, WP-form myths, STVP while labs process.",
      },
      {
        label: "HSA personal medication",
        href: "/guides/bringing-medication-singapore-hsa",
        blurb: "3-month rule, controlled-drug approval ≥2 weeks out.",
      },
      {
        label: "Household shipping & GST relief",
        href: "/guides/shipping-household-singapore",
        blurb: "DOF before freight lands; what never gets relief.",
      },
      {
        label: "Foreign licence conversion",
        href: "/guides/converting-foreign-driving-licence",
        blurb: "12-month clock, BTT, JB shortcut myth.",
      },
      {
        label: "Importing pets (AVS)",
        href: "/guides/importing-pets-singapore",
        blurb: "Country schedules, AQC booking, owner vs recognised agent.",
      },
      {
        label: "Notify MOM — address / passport",
        href: "/guides/ep-notify-mom-address-passport",
        blurb: "5-day address/mobile clock, FWTES landlord gate, passport sync.",
      },
      {
        label: "Employment Pass & COMPASS",
        href: "/guides/employment-pass-singapore",
        blurb: "Eligibility, thresholds, and how COMPASS actually scores.",
      },
      {
        label: "S Pass realities",
        href: "/guides/s-pass-singapore",
        blurb: "Quota + levy, DP at S$6k, job-change is a fresh filing.",
      },
      {
        label: "EP rejection, appeal & IPA reassessment",
        href: "/guides/ep-rejection-appeal-ipa-issuance",
        blurb: "Employer-only appeals; postpone-arrival reassessment playbook.",
      },
      {
        label: "PEP & Tech.Pass flexibility",
        href: "/guides/personalised-employment-pass-pep",
        blurb: "One-shot PEP, S$270k keep-rule, DP still gated, EP handoff.",
      },
      {
        label: "Relocation checklists",
        href: "/journeys/arriving",
        blurb: "7, 30, and 90-day sequences that keep the move sane.",
      },
      {
        label: "First housing bridge",
        href: "/guides/first-housing-serviced-apartment",
        blurb: "URA-legal serviced stays vs illegal condo short-lets.",
      },
    ],
    related: [
      { href: "/arriving", label: "Arriving hub" },
      { href: "/journeys/arriving", label: "Arrival checklists" },
      { href: "/money", label: "Money" },
      { href: "/home", label: "Home" },
      { href: "/guides", label: "All guides" },
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
        href: "/guides/renting-process-loi-ta-deposits",
        blurb: "LOI, tenancy agreement, deposits, and agent norms.",
      },
      {
        label: "Early lease exit",
        href: "/guides/early-lease-termination-tenants",
        blurb: "Break leases without a diplomatic clause — deposit vs remaining rent.",
      },
      {
        label: "Lease renewal & rent hikes",
        href: "/guides/lease-renewal-rent-increase",
        blurb: "No statutory cap — negotiate with URA/HDB comps.",
      },
      {
        label: "Landlord entry rights",
        href: "/guides/landlord-entry-quiet-enjoyment",
        blurb: "Quiet enjoyment, notice, and viewing pressure.",
      },
      {
        label: "Condo vs HDB",
        href: "/guides/condo-vs-hdb-expat",
        blurb: "Eligibility, lifestyle trade-offs, and what foreigners miss.",
      },
      {
        label: "Neighbourhood guides",
        href: "/neighbourhoods",
        blurb: "Bukit Timah, Holland V, East Coast, Toa Payoh, AMK, Bedok, and more.",
      },
      {
        label: "Utilities & telecom",
        href: "/guides/utilities-telecom-setup",
        blurb: "SP Group, fibre, mobile plans that actually work.",
      },
      {
        label: "Domestic helpers (MDW)",
        href: "/guides/hiring-domestic-helper-mdw",
        blurb: "Agencies, contracts, and day-to-day realities.",
      },
      {
        label: "Aircon, pest & renewals",
        href: "/guides/aircon-pest-renewals",
        blurb: "Tropical maintenance — including bed-bug escalation.",
      },
    ],
    related: [
      { href: "/neighbourhoods", label: "Neighbourhoods" },
      { href: "/tools/lease-duty", label: "Lease duty tool" },
      { href: "/arriving", label: "Arriving" },
      { href: "/living", label: "Living" },
      { href: "/guides", label: "All guides" },
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
        label: "Open a bank account",
        href: "/guides/opening-bank-account-expat",
        blurb: "Address letters, IPA vs issued pass, Singpass timing.",
      },
      {
        label: "Banking & PayNow",
        href: "/guides/paynow-setup-foreigners-singapore",
        blurb: "FIN vs mobile proxies after the salary account opens.",
      },
      {
        label: "Wrong PayNow recovery",
        href: "/guides/wrong-paynow-epayment-recovery",
        blurb: "Call your bank first; never peer-refund strangers.",
      },
      {
        label: "High-interest salary accounts",
        href: "/guides/high-interest-salary-accounts-foreigners",
        blurb: "Multiplier / OCBC 360 / UOB One salary-credit codes.",
      },
      {
        label: "Credit cards for foreigners",
        href: "/guides/credit-cards-foreigners-singapore",
        blurb: "S$45k floors, GX history, secured FD fallbacks.",
      },
      {
        label: "Cash declaration (CBNI)",
        href: "/guides/cbni-cash-declaration-singapore",
        blurb: "S$20k+ physical cash — NP727 before you fly.",
      },
      {
        label: "Tax residency & filing",
        href: "/guides/iras-tax-residency-filing",
        blurb: "IRAS rules, YA calendars, and clearance when you leave.",
      },
      {
        label: "Insurance landscape",
        href: "/guides/health-insurance-expat",
        blurb: "Health, life, and what employers usually cover.",
      },
      {
        label: "Cost of living",
        href: "/guides/cost-of-living-by-household",
        blurb: "Family budgets, helper all-in, school+rent stacking.",
      },
      {
        label: "SRS & investing",
        href: "/guides/srs-investing-as-foreigner",
        blurb: "Exit withholding, 5% early penalty, foreigner lump-sum rules.",
      },
      {
        label: "RSU / ESOP tax",
        href: "/guides/rsu-esop-tax-singapore",
        blurb: "Vest tax, ESPP bargain element, IR21 deemed exercise, US dual-file.",
      },
      {
        label: "Foreign income myths",
        href: "/guides/foreign-income-and-tax",
        blurb: "Remittance ≠ source; DP remote work still SG-sourced.",
      },
      {
        label: "Salary package decoding",
        href: "/guides/salary-package-decoding",
        blurb: "Housing, flights, school fees — what the letter really means.",
      },
    ],
    related: [
      { href: "/tools", label: "COL, lease & tax tools" },
      { href: "/move", label: "Move" },
      { href: "/next", label: "Next" },
      { href: "/guides", label: "All guides" },
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
        href: "/guides/international-schools-landscape",
        blurb: "International, local, and hybrid options compared.",
      },
      {
        label: "IB vs A-Level pathways",
        href: "/guides/secondary-ib-alevel-pathways-singapore",
        blurb: "Exam thesis for mobile teens — not brochure tours.",
      },
      {
        label: "Preschool & childcare",
        href: "/guides/preschool-childcare-singapore",
        blurb: "Infant care through kindergarten — fees and timing.",
      },
      {
        label: "Waitlist realism",
        href: "/guides/school-waitlist-realism",
        blurb: "When to apply, what “full” usually means.",
      },
      {
        label: "Kids allergy & EpiPen",
        href: "/guides/kids-allergy-epipen-singapore",
        blurb: "Local Rx, preschool plans, cash-pay foreigner reality.",
      },
      {
        label: "Kids ADHD medication",
        href: "/guides/kids-adhd-medication-singapore",
        blurb: "HSA bridge, local psychiatrist Rx, Adderall gaps.",
      },
      {
        label: "Mandarin enrichment",
        href: "/guides/mandarin-enrichment-expat-kids-singapore",
        blurb: "Berries vs online vs IS bilingual tracks — goal first.",
      },
      {
        label: "Kids activities & calendar",
        href: "/guides/kids-activities-holiday-camps",
        blurb: "Holiday camps, enrichment, and the school-year rhythm.",
      },
      {
        label: "Special needs",
        href: "/guides/special-needs-support",
        blurb: "EIPIC wall, private ST/OT cash, school placement paths.",
      },
    ],
    related: [
      { href: "/schools", label: "Schools directory" },
      { href: "/calendar", label: "Calendar" },
      { href: "/living", label: "Living" },
      { href: "/guides", label: "All guides" },
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
        href: "/guides/hawker-food-guide",
        blurb: "Order like a local — centres, etiquette, favourites.",
      },
      {
        label: "Shopping & nightlife",
        href: "/guides/shopping-essentials-singapore",
        blurb: "Where expats actually go after the first month.",
      },
      {
        label: "CASE & Lemon Law",
        href: "/guides/case-lemon-law-consumers-singapore",
        blurb: "Consumer goods remedies — CASE then SCT, not pass-based.",
      },
      {
        label: "Sports, arts & culture",
        href: "/guides/sports-fitness-singapore",
        blurb: "Clubs, galleries, theatre, and weekend rituals.",
      },
      {
        label: "Apps that matter",
        href: "/guides/apps-that-matter-singapore",
        blurb: "Singpass, HealthHub, banking, delivery — the short list.",
      },
      {
        label: "Vaping & tobacco laws",
        href: "/guides/vaping-tobacco-laws-foreigners",
        blurb: "Illegal for visitors and passes — fines to revocation.",
      },
      {
        label: "Scams & Singpass phishing",
        href: "/guides/scams-singpass-phishing-expats",
        blurb: "ScamShield 1799, gov.sg SMS, mule-job traps.",
      },
      {
        label: "Climate, haze & floods",
        href: "/guides/flash-floods-singapore-renters",
        blurb: "PUB flash-flood checks, haze season, and emergency rails.",
      },
      {
        label: "Dengue clusters & fogging",
        href: "/guides/dengue-cluster-living-renters",
        blurb: "NEA clusters, OneService breeding reports, HDB chute ops.",
      },
      {
        label: "Emergencies & embassies",
        href: "/guides/emergencies-995-999-embassies",
        blurb: "995/999, embassies, and what to do when it is serious.",
      },
    ],
    related: [
      { href: "/directory", label: "Service directory" },
      { href: "/belong", label: "Belong" },
      { href: "/living", label: "Living" },
      { href: "/calendar", label: "Calendar" },
      { href: "/guides", label: "All guides" },
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
        href: "/guides/membership-clubs-comparison",
        blurb: "American, Tanglin, British, Hollandse, Swiss, and peers.",
      },
      {
        label: "Indoor hobbies",
        href: "/guides/indoor-hobby-communities-singapore",
        blurb: "Board games, Toastmasters, language exchanges.",
      },
      {
        label: "Music & arts communities",
        href: "/guides/music-arts-communities-singapore",
        blurb: "Choirs, volunteer orchestras, jams, and concert rails.",
      },
      {
        label: "Book clubs & hiking",
        href: "/guides/book-hiking-communities-singapore",
        blurb: "NLB/Meetup reading groups and NParks trail rails.",
      },
      {
        label: "Associations & chambers",
        href: "/guides/anza-awa-associations",
        blurb: "ANZA, AWA, business chambers, and professional groups.",
      },
      {
        label: "Hashes & sports tribes",
        href: "/guides/hash-house-harriers",
        blurb: "Running clubs, rugby, cricket, and the social after.",
      },
      {
        label: "Faith communities",
        href: "/guides/religious-communities-singapore",
        blurb: "Churches, temples, mosques, and interfaith spaces.",
      },
      {
        label: "Nationality groups",
        href: "/guides/nationality-groups-singapore",
        blurb: "Find your passport crowd without living inside it.",
      },
      {
        label: "LGBTQ+ resources",
        href: "/guides/lgbtq-resources-singapore",
        blurb: "Community, nightlife, and practical support.",
      },
    ],
    related: [
      { href: "/clubs", label: "Clubs directory" },
      { href: "/life", label: "Life" },
      { href: "/directory", label: "Service directory" },
      { href: "/living", label: "Living" },
      { href: "/guides", label: "All guides" },
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
        href: "/guides/ep-renewal-strategy",
        blurb: "Timing, COMPASS, age bands — plus NOA document asks.",
      },
      {
        label: "PR strategy",
        href: "/guides/pr-application-strategy",
        blurb: "Eligibility signals, timelines, and realistic odds.",
      },
      {
        label: "Spouse & parent PR",
        href: "/guides/pr-for-spouse-singapore",
        blurb: "Family sponsorship rows — spouse PR and aged-parent LTVP forks.",
      },
      {
        label: "Spouse LTVP + PMLA",
        href: "/guides/spouse-ltvp-pmla-singapore",
        blurb: "SC-only PMLA, PR-sponsor clocks, and LTVP ≠ PR.",
      },
      {
        label: "PLOC / LOC work rights",
        href: "/guides/ploc-loc-ica-ltvp-singapore",
        blurb: "ICA spouse/child LTVP work — PLOC vs employer LOC.",
      },
      {
        label: "Student PR",
        href: "/guides/pr-for-student-singapore",
        blurb: "National exam / IP eligibility row — not private-exam folklore.",
      },
      {
        label: "NRIC at 30 / 55",
        href: "/guides/nric-reregistration-30-55-singapore",
        blurb: "Compulsory re-registration windows, fees, overseas return clock.",
      },
      {
        label: "eCOA address change",
        href: "/guides/ecoa-nric-address-change-singapore",
        blurb: "28-day report clock, PIN mailer, stickers, overseas + LCA.",
      },
      {
        label: "Citizenship Journey",
        href: "/guides/singapore-citizenship-journey-scj",
        blurb: "After IPA — portal day +3, SEV / CSS, e-Journey, registration.",
      },
      {
        label: "EP renewal docs",
        href: "/guides/ep-renewal-noa-documents",
        blurb: "When MOM asks for NOA — reconcile salary with IRAS.",
      },
      {
        label: "Citizenship & NS",
        href: "/guides/citizenship-ns-implications",
        blurb: "What permanent status implies for families.",
      },
      {
        label: "Career pivots",
        href: "/guides/career-pivots-singapore",
        blurb: "Switching employers, industries, or going independent.",
      },
      {
        label: "Between jobs / STVP",
        href: "/guides/between-jobs-stvp-singapore",
        blurb: "EP cancel → up to 90 days stay, DP cascade, no work.",
      },
      {
        label: "Lost work pass card",
        href: "/guides/lost-replace-work-pass-card",
        blurb: "1-week MOM replacement, fees, SGWorkPass travel.",
      },
      {
        label: "Leaving Singapore",
        href: "/guides/leaving-singapore-playbook",
        blurb: "Tax clearance, deposits, shipping, school exits.",
      },
      {
        label: "WICA light duty / clocks",
        href: "/guides/wica-light-duty-claim-clocks-ep",
        blurb: "Notify vs file, light-duty shortfall, 1-year medical / civil fork.",
      },
      {
        label: "Training bond after IPA",
        href: "/guides/training-bond-resign-after-ipa-ep",
        blurb: "Resign sequence, notice vs clawback, deduction vs invoice.",
      },
      {
        label: "SAL e-Apostille",
        href: "/guides/sal-e-apostille-notarised-docs-singapore",
        blurb: "Notarised e-Apostille vs ACRA direct (~S$10.70) chooser.",
      },
      {
        label: "Lost blue NRIC (PR / SC)",
        href: "/guides/lost-replace-nric-pr-singapore",
        blurb: "ICA 14-day report clock — not MOM work-pass replacement.",
      },
      {
        label: "After getting PR",
        href: "/guides/after-getting-pr-checklist",
        blurb: "What transfers and what you leave behind.",
      },
    ],
    related: [
      { href: "/journeys/leaving", label: "Leaving playbook" },
      { href: "/journeys/between-jobs", label: "Between-jobs playbook" },
      { href: "/money", label: "Money" },
      { href: "/move", label: "Move" },
      { href: "/guides", label: "All guides" },
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
