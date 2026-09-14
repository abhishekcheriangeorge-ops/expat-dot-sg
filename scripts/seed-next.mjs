import { C, guide } from "./seed-lib.mjs";

export const nextGuides = [
  guide(
    {
      pillar: "next",
      slug: "ep-renewal-strategy",
      title: "Employment Pass renewal strategy",
      description:
        "How to prepare renewals early — salary progression, COMPASS-aware role design, and contingency if MOM asks questions.",
      journey: "living",
      citations: [C.momEp, C.momCompass],
      relatedGuides: [
        "employment-pass-singapore",
        "compass-framework-explained",
      ],
    },
    `
Renewals fail quietly when everyone assumes last year’s approval guarantees this year’s.

## Start early

- Diary renewal windows the day your pass is issued
- Keep salary and job scope aligned with prevailing criteria
- Ensure HR has updated certificates and employment history

## COMPASS-aware living

Firm scores change as headcount mix changes. Your personal salary competitiveness also moves with market benchmarks. Renewal is a joint project with the employer.

<OfficialSource>
Re-check [MOM EP](https://www.mom.gov.sg/passes-and-permits/employment-pass) criteria before each renewal cycle.
</OfficialSource>
`,
  ),

  guide(
    {
      pillar: "next",
      slug: "pr-application-strategy",
      title: "Singapore PR application strategy for expats",
      description:
        "What ICA evaluates at a high level, how to think about timing, and how PR changes money and family planning.",
      journey: "living",
      citations: [C.icaPr, C.cpf],
      relatedGuides: [
        "cpf-and-foreigners",
        "citizenship-ns-implications",
      ],
    },
    `
Permanent Residence is discretionary. There is no public points calculator that guarantees approval.

## Orientation themes

ICA considers economic contribution, qualifications, family profile, and integration — among other factors — under prevailing policy. Stable employment and clean records help; they do not entitle.

## Timing

Many applicants wait until they have meaningful local tenure and family clarity. Applying every six months out of anxiety is not a strategy.

<OfficialSource>
Use [ICA PR pages](https://www.ica.gov.sg/reside/PR) for forms, documents, and current schemes.
</OfficialSource>

## After approval

Model CPF, housing eligibility changes, and long-term NS implications for sons before you celebrate with non-refundable school plans.
`,
  ),

  guide(
    {
      pillar: "next",
      slug: "citizenship-ns-implications",
      title: "Citizenship and National Service implications",
      description:
        "High-level realities families should understand before pursuing citizenship — especially regarding male children and NS.",
      journey: "living",
      segments: ["families"],
      citations: [C.icaCitizen],
      relatedGuides: [
        "pr-application-strategy",
        "leaving-singapore-playbook",
      ],
    },
    `
Singapore citizenship is a profound commitment. For families with sons, National Service obligations are a central planning fact — not a footnote.

## Do this properly

- Read official ICA citizenship guidance
- Speak with people who have lived the NS pathway
- Understand renunciation rules for your current nationality (home-country law)

<OfficialSource>
Start at [ICA citizenship](https://www.ica.gov.sg/reside/citizenship). For NS specifics, rely on official MINDEF/CMPB sources relevant to your status.
</OfficialSource>

This is not a DIY internet-forum decision. Get personalised advice.
`,
  ),

  guide(
    {
      pillar: "next",
      slug: "career-pivots-singapore",
      title: "Career pivots while on a Singapore work pass",
      description:
        "Changing employers, industry switches, and how pass sponsorship constrains — and enables — reinvention.",
      journey: "living",
      citations: [C.momWork, C.momEp],
      relatedGuides: [
        "ep-renewal-strategy",
        "trailing-partner-career-singapore",
      ],
    },
    `
Your pass is tied to an employer. A pivot usually means a new sponsorship story, not just a new LinkedIn headline.

## Practical path

1. Quiet market testing while compliant with current employment  
2. Offer letters that clear prevailing pass criteria  
3. Coordinated resignation / start dates around IPA realities  
4. Family pass knock-ons  

Non-competes and garden leave can collide with IPA timing — read both calendars together.
`,
  ),

  guide(
    {
      pillar: "next",
      slug: "leaving-singapore-playbook",
      title: "Leaving Singapore playbook",
      description:
        "A sequenced exit plan — housing, schools, tax clearance, shipping, helpers, and the emotional offboarding nobody schedules.",
      journey: "living",
      citations: [C.irasClear, C.momWork],
      relatedGuides: [
        "tax-clearance-when-leaving",
        "shipping-out-household",
      ],
    },
    `
Exits fail when people treat them as the reverse of arrivals. Dependencies differ.

## Sequence (typical)

1. Confirm last day and pass cancellation timing with HR  
2. Trigger diplomatic clause / lease end  
3. School withdrawal notices  
4. Tax clearance process for foreigners as required  
5. Helper Work Permit cancellation / transfer  
6. Shipping and declutter  
7. Bank / GIRO / telco shutdown order  
8. Medical records export  

## Emotional offboarding

Goodbyes need calendar space. Children especially need a narrative, not just a flight.

See [tax clearance](/guides/tax-clearance-when-leaving) and [shipping out](/guides/shipping-out-household).
`,
  ),

  guide(
    {
      pillar: "next",
      slug: "tax-clearance-when-leaving",
      title: "IRAS tax clearance when leaving Singapore",
      description:
        "What tax clearance is for foreign employees, employer roles, and why you should not leave it to the final week.",
      journey: "living",
      citations: [C.irasClear, C.iras],
      relatedGuides: [
        "leaving-singapore-playbook",
        "iras-tax-residency-filing",
      ],
    },
    `
When certain foreign employees cease employment, employers may need to seek tax clearance from IRAS before releasing final pay — under rules IRAS defines.

## What you should do

- Tell HR your departure date early
- Keep income and benefits records tidy
- Do not book non-changeable flights that assume same-week clearance

<OfficialSource>
Follow [IRAS tax clearance guidance for foreigners](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/individuals-(foreigners)-tax-clearance).
</OfficialSource>
`,
  ),

  guide(
    {
      pillar: "next",
      slug: "shipping-out-household",
      title: "Shipping out: moving household goods from Singapore",
      description:
        "Export packing, condo booking constraints, what not to ship, and how to sell down before the container arrives.",
      journey: "living",
      citations: [],
      relatedGuides: [
        "leaving-singapore-playbook",
        "shipping-household-singapore",
      ],
      sponsorSlot: {
        enabled: true,
        category: "movers",
        disclosure: "Featured outbound movers partner",
      },
    },
    `
Outbound moves are decluttering projects wearing a logistics hat.

## Sell / donate early

Carousell velocity drops when you are desperate in week final. Price to move.

## Condo rules

Book lifts early. Tropical rain plus paper cartons is a known tragedy — keep a dry staging plan.

## Documents

Inventory lists matter for customs at destination and for insurance. Photograph high-value items before sealing.
`,
  ),

  guide(
    {
      pillar: "next",
      slug: "long-term-stay-vs-exit",
      title: "Long-term stay vs exit: deciding your Singapore horizon",
      description:
        "A decision framework for year-three households — career, schooling, ageing parents, and identity — without fake certainty.",
      journey: "living",
      citations: [],
      relatedGuides: [
        "pr-application-strategy",
        "leaving-singapore-playbook",
      ],
    },
    `
By year three, inertia is strong. Make the stay/leave decision deliberately once a year.

## Score what matters

- Career optionality here vs home/third country  
- Schooling continuity costs  
- Ageing family abroad  
- Partner career reality  
- Desire for PR / citizenship path  

Write the answers down. Couples who only debate verbally often discover they had different silent deadlines.
`,
  ),

  guide(
    {
      pillar: "next",
      slug: "passports-and-documents-overseas",
      title: "Passports and civil documents while living in Singapore",
      description:
        "Renewing passports via embassies, keeping birth/marriage certificates usable, and digital backups that save exits.",
      journey: "living",
      citations: [C.ica],
      relatedGuides: [
        "leaving-singapore-playbook",
        "dependant-pass-singapore",
      ],
    },
    `
Your Singapore pass is not your passport. Keep civil documents as a deliberate system.

## Habits

- Renew passports before airlines and schools panic
- Store certified copies of marriage/birth certificates
- Maintain encrypted digital scans
- Know your embassy’s appointment lead times

When you exit or apply for PR elsewhere, document chaos is the tax you pay for optimism.
`,
  ),

  guide(
    {
      pillar: "next",
      slug: "renewing-life-admin-annually",
      title: "Annual life admin for Singapore expats",
      description:
        "A once-a-year checklist — passes, insurance, leases, wills, guardianship, and beneficiary forms people forget.",
      journey: "living",
      citations: [],
      relatedGuides: [
        "ep-renewal-strategy",
        "health-insurance-expat",
      ],
    },
    `
Put a recurring calendar event: **Singapore life admin week**.

## Review annually

- Pass expiry + family passes  
- Insurance beneficiaries and coverage caps  
- Lease renewal window  
- School re-enrolment fees  
- Will / guardianship documents recognising cross-border reality  
- Emergency contacts at school and condo security  

Boring systems are how families stay kind to each other under stress.
`,
  ),
];
