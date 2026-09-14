import { C, guide } from "./seed-lib.mjs";

export const familyGuides = [
  guide(
    {
      pillar: "family",
      slug: "international-schools-landscape",
      title: "International schools in Singapore: how to navigate the landscape",
      description:
        "Curricula (IB, British, American, others), fee anatomy, waitlists, and a sane shortlisting method for expat families.",
      journey: "both",
      segments: ["families"],
      citations: [C.moe],
      relatedGuides: [
        "school-waitlist-realism",
        "local-schools-for-expats",
      ],
      sponsorSlot: {
        enabled: true,
        category: "schools",
        disclosure: "Featured school partner",
      },
    },
    `
Singapore’s international school market is deep — and emotionally overheated. Start with constraints, not campus tours.

## Choose a curriculum thesis

- IB continuity for mobile families
- British / IGCSE / A-Level pathways
- American diploma systems
- Other national systems (French, German, Japanese, etc.)

Match to likely next country, not Instagram aesthetics.

## Fee anatomy

Ask for tuition, enrolment, capital/building levies, bus, lunch, uniforms, CCAs, and laptop programmes. Compare five-year totals.

## Shortlist method

1. Curriculum + language needs  
2. Commute from plausible housing  
3. Year-group availability  
4. Pastoral support reputation  
5. Only then facilities  

Directory pages will list schools as entities; this guide is the decision frame.
`,
  ),

  guide(
    {
      pillar: "family",
      slug: "local-schools-for-expats",
      title: "Local schools for expat children in Singapore",
      description:
        "When MOE schools or local pathways may be open, what to verify, and how they differ culturally from international campuses.",
      journey: "both",
      segments: ["families"],
      citations: [C.moe],
      relatedGuides: [
        "international-schools-landscape",
        "preschool-childcare-singapore",
      ],
    },
    `
Some foreign children study in local schools under specific eligibility and application routes. Availability is not guaranteed and policies evolve.

## Why families consider it

- Cost relative to international fees
- Local language immersion
- Integration ambitions tied to longer stays / PR

## What to verify

- Current eligibility for your pass type
- Application windows and balloting realities
- Mother Tongue and support structures
- Whether your timeline matches the academic year

<OfficialSource>
Start from [MOE](https://www.moe.gov.sg/) official pages for international student admissions — not parent chat forwards.
</OfficialSource>
`,
  ),

  guide(
    {
      pillar: "family",
      slug: "preschool-childcare-singapore",
      title: "Preschool and childcare in Singapore for expat families",
      description:
        "Infant care, childcare centres, kindergartens, ECDA context, and how to line up care with returning to work.",
      journey: "both",
      segments: ["families"],
      citations: [C.ecda],
      relatedGuides: [
        "hiring-domestic-helper-mdw",
        "school-waitlist-realism",
      ],
    },
    `
Care options range from infant care centres to kindergartens and helper-led home care. Demand in popular districts is intense.

## ECDA orientation

The Early Childhood Development Agency oversees much of the regulated preschool sector. Licensing and quality markers matter more than soft-play photos.

<OfficialSource>
Browse [ECDA](https://www.ecda.gov.sg/) for regulated centre context and parent resources.
</OfficialSource>

## Practical advice

Join waitlists early, visit during pickup chaos (not only showcases), and model backup care for centre closures and child sick days — especially if both parents work.
`,
  ),

  guide(
    {
      pillar: "family",
      slug: "school-waitlist-realism",
      title: "School waitlist realism in Singapore",
      description:
        "How waitlists actually behave, what “priority” can mean, and how to keep housing flexible until a seat exists.",
      journey: "arriving",
      segments: ["families"],
      citations: [],
      relatedGuides: [
        "international-schools-landscape",
        "first-housing-serviced-apartment",
      ],
    },
    `
“We’re on the waitlist” is not a plan; it is a hope with a spreadsheet.

## Patterns families see

- Mid-year seats appear when families exit on diplomatic clauses
- Sibling priority can matter — ask each school to define it
- Popular year groups (often early primary and some secondary entry points) move slower

## Housing linkage

Do not lock a 24-month lease around a school that has not issued an offer. Serviced apartments exist partly for this uncertainty.
`,
  ),

  guide(
    {
      pillar: "family",
      slug: "healthcare-gp-hospital",
      title: "Healthcare in Singapore: GPs, polyclinics, and hospitals",
      description:
        "How to use primary care, when to go private vs public pathways, and how insurance panels shape behaviour.",
      journey: "both",
      citations: [C.moh],
      relatedGuides: [
        "health-insurance-expat",
        "mental-health-resources",
      ],
    },
    `
Singapore’s system mixes public institutions and a large private sector. Expats on employer plans often live mostly in private GP / specialist networks.

## Day-to-day

- Register a nearby GP for ordinary illness
- Understand A&E vs urgent care vs clinic hours
- Keep vaccination and prescription records digital

<OfficialSource>
MOH’s [healthcare system overview](https://www.moh.gov.sg/home/our-healthcare-system) explains public structures; your insurer explains your access.
</OfficialSource>

## Hospitals

Private hospitals offer speed and English-language familiarity for many expats; public hospitals are excellent and may be relevant depending on coverage and case type. Know where your nearest appropriate A&E is before you need it.
`,
  ),

  guide(
    {
      pillar: "family",
      slug: "maternity-care-singapore",
      title: "Maternity care for expats in Singapore",
      description:
        "OB-GYN pathways, delivery cost ballparks themes, insurance waiting periods, and paperwork for newborns.",
      journey: "living",
      segments: ["families", "couples"],
      citations: [C.moh],
      relatedGuides: [
        "health-insurance-expat",
        "dependant-pass-singapore",
      ],
    },
    `
Maternity is where insurance fine print becomes biography.

## Before you conceive (if planning)

Check waiting periods, delivery package inclusions, and neonatal coverage. Some employer plans exclude maternity entirely.

## Care pathway

Many expats choose private OBs with delivery packages at private hospitals. Confirm what happens if you need NICU care or transfer.

## After birth

Budget administrative time for birth registration, passport, and Dependant’s Pass application. Housing and helper plans often need a temporary upgrade in the fourth trimester.
`,
  ),

  guide(
    {
      pillar: "family",
      slug: "mental-health-resources",
      title: "Mental health resources for expats in Singapore",
      description:
        "Finding therapists, insurance coverage realities, crisis contacts, and why relocation stress deserves a plan.",
      journey: "both",
      citations: [C.moh, C.scdf],
      relatedGuides: [
        "healthcare-gp-hospital",
        "trailing-partner-career-singapore",
      ],
    },
    `
Relocation stress, trailing-partner isolation, academic pressure on teens, and high-performance work cultures are common — and discussable.

## Finding care

- Employer EAPs
- Private psychologists / psychiatrists (check insurance)
- Community and faith-based support as complements, not substitutes for clinical care

## Crisis

For immediate danger, use local emergency services. Keep embassy consular welfare contacts for your nationality.

## Normalise early support

Waiting until someone “can’t cope” is a bad KPI. Build a GP relationship and know two counsellor options in your first 90 days.
`,
  ),

  guide(
    {
      pillar: "family",
      slug: "kids-activities-holiday-camps",
      title: "Kids activities and holiday camps in Singapore",
      description:
        "CCA culture, weekend sports, holiday camp logistics, and how to avoid over-scheduling newly arrived children.",
      journey: "living",
      segments: ["families"],
      citations: [],
      relatedGuides: [
        "international-schools-landscape",
        "sports-fitness-singapore",
      ],
    },
    `
Singapore offers dense enrichment — which can become a second full-time job for parents.

## Arrival year advice

Prioritise one social activity and one physical activity. Let friendships form before stacking resume ornaments.

## Holiday camps

Book early for June/November-December peaks. Factor bus timings, sibling split campuses, and helper rest days into the logistics plan.
`,
  ),

  guide(
    {
      pillar: "family",
      slug: "special-needs-support",
      title: "Special needs support for expat families in Singapore",
      description:
        "How to approach assessments, school inclusion questions, therapy access, and community resources without sugarcoating wait times.",
      journey: "both",
      segments: ["families"],
      citations: [C.moe, C.moh],
      relatedGuides: [
        "international-schools-landscape",
        "healthcare-gp-hospital",
      ],
    },
    `
If your child needs learning or developmental support, treat school selection as a clinical compatibility problem, not a branding exercise.

## Questions for schools

- Learning support staffing
- Assessment partnerships
- Classroom aide policies
- Exam access arrangements
- Whether they have exited similar profiles successfully

## Parallel tracks

Therapy waitlists can be long. Start medical and educational assessments early, keep records portable, and budget for private therapy if employer insurance is thin.
`,
  ),

  guide(
    {
      pillar: "family",
      slug: "finding-pediatrician-singapore",
      title: "Finding a paediatrician in Singapore",
      description:
        "Panel vs preferred doctors, vaccination schedules, and building a care relationship before the first 2 a.m. fever.",
      journey: "arriving",
      segments: ["families"],
      citations: [C.moh],
      relatedGuides: ["healthcare-gp-hospital", "health-insurance-expat"],
    },
    `
Pick a paediatric clinic near home, not near the CBD office you leave at 19:30.

## What to check

- Insurance panel status
- Weekend / public holiday hours
- After-hours guidance practices
- Vaccination record handling for mobile kids

Bring previous immunisation records translated if needed. Establish the relationship during a well visit — not only in crisis.
`,
  ),
];
