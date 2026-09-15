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
        label: "Employment Pass & COMPASS",
        href: "/guides/employment-pass-singapore",
        blurb: "Eligibility, thresholds, and how COMPASS actually scores.",
      },
      {
        label: "EP rejection, appeal & IPA reassessment",
        href: "/guides/ep-rejection-appeal-ipa-issuance",
        blurb: "Employer-only appeals; postpone-arrival reassessment playbook.",
      },
      {
        label: "Travel before the pass card",
        href: "/guides/travel-before-work-pass-card",
        blurb: "IPA ≠ travel doc; finish issuance before JB hops.",
      },
      {
        label: "EP probation & resignation notice",
        href: "/guides/ep-probation-resignation-notice",
        blurb: "Contract notice ≠ MOM cancel date; DP falls with principal.",
      },
      {
        label: "PEP & Tech.Pass flexibility",
        href: "/guides/personalised-employment-pass-pep",
        blurb: "One-shot PEP vs Tech.Pass company-scale tests and 2027 sunset.",
      },
      {
        label: "Fair Consideration & MyCareersFuture",
        href: "/guides/fair-consideration-framework-ep",
        blurb: "14-day ads, S$22.5k exemption, why MCF ≠ locals-only forever.",
      },
      {
        label: "Changing jobs on EP",
        href: "/guides/changing-jobs-employment-pass",
        blurb: "New IPA before resign; IR21 withhold even if you stay; DP re-sponsor.",
      },
      {
        label: "Student’s Pass work limits",
        href: "/guides/student-pass-singapore",
        blurb: "Vacation work exemption ≠ open labour market; LOE ≠ EP.",
      },
      {
        label: "LTVP for partners & parents",
        href: "/guides/ltvp-singapore",
        blurb: "Not a DP; parent salary lane; work rights depend on product.",
      },
      {
        label: "ONE Pass",
        href: "/guides/one-pass-singapore",
        blurb: "Not a COMPASS cheat code; spouse LOC rules; S$30k floor myths.",
      },
      {
        label: "S Pass vs EP",
        href: "/guides/ep-vs-s-pass-comparison",
        blurb: "No EP quota myth, levy/DRC, Sep 2025 S Pass floors.",
      },
      {
        label: "Decode the job offer",
        href: "/guides/decoding-job-offer-singapore",
        blurb: "Fixed salary vs AWS/bonus; which number MOM sees.",
      },
      {
        label: "Work Holiday & Training EP",
        href: "/guides/work-holiday-training-employment-pass",
        blurb: "WHP vs TEP — never intern on a tourist visit pass.",
      },
      {
        label: "MOE Tuition Grant bond",
        href: "/guides/moe-tuition-grant-bond",
        blurb: "3-year bond, LOE ≠ EP, liquidated damages reality.",
      },
      {
        label: "Relocation checklist (7/30/90)",
        href: "/guides/relocation-checklist-7-30-90",
        blurb: "Pass, Singpass, housing, schools — week one through day 90.",
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
        label: "Relocation allowance tax",
        href: "/guides/relocation-allowance-tax-singapore",
        blurb: "Lump sums often taxable; equalisation ≠ IRAS waiver.",
      },
      {
        label: "Remittances & FX",
        href: "/guides/remittances-singapore",
        blurb: "PayNow ≠ cross-border; all-in FX; inward SoF freezes.",
      },
      {
        label: "Health insurance & LOG",
        href: "/guides/health-insurance-expat",
        blurb: "No MediShield on EP; hospital LOG; maternity and job-hop gaps.",
      },
      {
        label: "CPF withdrawal when leaving",
        href: "/guides/cpf-withdrawal-leaving-singapore",
        blurb: "EP had no CPF; PR cash-out only after status ends.",
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
        blurb: "Vest vs exercise, no-local-entity filing, deemed exercise.",
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
      {
        label: "Year-one financial plan",
        href: "/guides/financial-planning-year-one",
        blurb: "3–6 month buffer; defer ABSD condo and COE FOMO.",
      },
    ],
    related: [
      { href: "/tools", label: "COL & EP tools" },
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
        label: "CCA vs external academy",
        href: "/guides/primary-cca-vs-external-academy-dual-career-singapore",
        blurb: "One primary rail, calendar math, belonging trade-offs.",
      },
      {
        label: "Dengue child-fever coverage",
        href: "/guides/dual-career-dengue-child-fever-coverage-singapore",
        blurb: "Named adults, GP timing, cluster-week ops.",
      },
      {
        label: "Learning support vs tutoring",
        href: "/guides/international-school-learning-support-vs-tutoring-singapore",
        blurb: "School supports vs cash tutors — goal-dated.",
      },
      {
        label: "Home-leave jet-lag ops",
        href: "/guides/home-leave-jetlag-dual-career-family-singapore",
        blurb: "Return-week coverage for dual EP households.",
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
        label: "Car ownership vs sharing",
        href: "/guides/car-ownership-vs-sharing-singapore",
        blurb: "COE math vs Grab/GetGo — when owning still loses.",
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
        label: "Sports, arts & culture",
        href: "/guides/sports-fitness-singapore",
        blurb: "Clubs, galleries, theatre, and weekend rituals.",
      },
      {
        label: "Apps that matter",
        href: "/guides/apps-that-matter-singapore",
        blurb: "Singpass first, ScamShield, PayNow→FIN, transit — week one.",
      },
      {
        label: "Vaping & tobacco laws",
        href: "/guides/vaping-tobacco-laws-foreigners",
        blurb: "Illegal for visitors and passes — fines to revocation.",
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
        label: "NLB parent belonging",
        href: "/guides/nlb-library-parent-belonging-singapore",
        blurb: "Libraries and storytime as soft adult rails.",
      },

      {
        label: "Youth sports sideline belonging",
        href: "/guides/youth-sports-sideline-parent-belonging-singapore",
        blurb: "Repeat fixture hellos without committee drama.",
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
        label: "COMPASS firm scores on renewal",
        href: "/guides/ep-renewal-compass-firm-scores-singapore",
        blurb: "SAT firm criteria can drift even when your pay still clears.",
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
        label: "EP renewal docs",
        href: "/guides/ep-renewal-noa-documents",
        blurb: "NOA vs IR8A — reconcile EP salary with IRAS before HR replies.",
      },
      {
        label: "Citizenship & NS",
        href: "/guides/citizenship-ns-implications",
        blurb: "Model NS liability before PR/citizenship — CMPB over chat lore.",
      },
      {
        label: "Career pivots",
        href: "/guides/career-pivots-singapore",
        blurb: "New employer files fresh pass — resign only after IPA.",
      },
      {
        label: "DP re-sponsor on EP job change",
        href: "/guides/dp-resubmission-when-principal-changes-ep-singapore",
        blurb: "New principal IPA → family re-file before old cancel.",
      },
      {
        label: "LTVP + PLOC → EP",
        href: "/guides/ltvp-ploc-to-ep-conversion-singapore",
        blurb: "PLOC is work consent — EP is a new principal file.",
      },
      {
        label: "S Pass → EP upgrade",
        href: "/guides/s-pass-to-ep-upgrade-in-singapore",
        blurb: "Raise ≠ conversion; FCF + COMPASS on a fresh EP file.",
      },
      {
        label: "SCJ SEV / CSS after IPA",
        href: "/guides/scj-sev-css-booking-after-ipa-singapore",
        blurb: "Portal day+3; book SEV/CSS early; e-Journey 7+7 clocks.",
      },
      {
        label: "SRS exit withholding",
        href: "/guides/srs-exit-withholding-nonresident-singapore",
        blurb: "Early 5% + taxable portion; withholding ≠ final bill.",
      },
      {
        label: "Student’s Pass work hours",
        href: "/guides/student-pass-work-hours-vacation-exemption-singapore",
        blurb: "Term caps, vacation window, exchange-student bars.",
      },
      {
        label: "STVP travel / medical gaps",
        href: "/guides/stvp-travel-medical-cover-gap-singapore",
        blurb: "Stay-only pass; group cover ends with job; re-entry risk.",
      },
      {
        label: "JB hop mid-EP issuance",
        href: "/guides/jb-hop-mid-ep-issuance-reentry-trap-singapore",
        blurb: "IPA is not a day-trip stamp — finish issuance first.",
      },
      {
        label: "EP secondary directorship LOC",
        href: "/guides/ep-secondary-directorship-loc-singapore",
        blurb: "Related ACRA entity + written consent + MOM LOC.",
      },
      {
        label: "Health insurance job-exit bridge",
        href: "/guides/health-insurance-exit-between-jobs-bridge-singapore",
        blurb: "Group cover dies with employment — bridge before cancel.",
      },
      {
        label: "Mid-year school transfer knock-ons",
        href: "/guides/mid-year-school-transfer-pass-knockons-singapore",
        blurb: "Fees, bus bonds, pass validity — school ≠ immigration.",
      },
      {
        label: "Common-law spouse LTVP evidence",
        href: "/guides/ltvp-common-law-spouse-evidence-pack-singapore",
        blurb: "Certificate, home-country affidavit, or embassy letter.",
      },
      {
        label: "PEP / ONE / Tech.Pass chooser",
        href: "/guides/pep-one-tech-pass-chooser-singapore",
        blurb: "Salary, renewability, spouse LOC, Tech.Pass 2027 sunset.",
      },
      {
        label: "EP rejection appeal playbook",
        href: "/guides/ep-rejection-appeal-candidate-playbook-singapore",
        blurb: "Employer-only 3-month window — advisory facts beat resign vibes.",
      },
      {
        label: "FCF exemption edges",
        href: "/guides/fcf-advertising-exemption-edges-ep-singapore",
        blurb: "S$22.5k / small-firm skips ads — fair hiring still applies.",
      },
      {
        label: "EPSC slot / letter extension",
        href: "/guides/epsc-missed-slot-notification-letter-extension-singapore",
        blurb: "Missed biometrics vs Notification Letter clocks — extend before expiry.",
      },
      {
        label: "Stay vs exit horizon",
        href: "/guides/long-term-stay-vs-exit",
        blurb: "Annual stay/leave review before school deposits and renewal.",
      },
      {
        label: "Between jobs — STVP",
        href: "/guides/between-jobs-stvp-singapore",
        blurb: "Ask for up to 90 days stay — not work rights — after EP cancel.",
      },
      {
        label: "Leaving Singapore",
        href: "/guides/leaving-singapore-playbook",
        blurb: "IR21 withholding, STVP length, lease, schools, shipping.",
      },
      {
        label: "Cancel MDW Work Permit on exit",
        href: "/guides/fdw-cancellation-when-leaving-singapore",
        blurb: "Transfer vs repatriate; levy stops only after MOM cancel.",
      },
      {
        label: "PR rejected — appeal / reapply",
        href: "/guides/pr-rejection-reapply",
        blurb: "Official appeal e-Service only; reapply when profile changed.",
      },
      {
        label: "IR21 tax clearance",
        href: "/guides/tax-clearance-when-leaving",
        blurb: "Employer IR21 + withheld final pay — budget runway.",
      },
      {
        label: "Transfer REP to new passport",
        href: "/guides/transfer-rep-new-passport",
        blurb: "New passport ≠ auto REP — ICA transfer before you fly.",
      },
      {
        label: "After getting PR",
        href: "/guides/after-getting-pr-checklist",
        blurb: "What transfers and what you leave behind.",
      },
    ],
    related: [
      { href: "/journeys/leaving", label: "Leaving playbook" },
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
