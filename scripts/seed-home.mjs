import { C, guide } from "./seed-lib.mjs";

export const homeGuides = [
  guide(
    {
      pillar: "home",
      slug: "renting-process-loi-ta-deposits",
      title: "Renting in Singapore: LOI, Tenancy Agreement, and deposits",
      description:
        "How expat rentals actually progress — viewing etiquette, Letter of Intent, diplomatic clauses, stamp duty, and getting your deposit back.",
      journey: "both",
      citations: [C.hdb, C.ura],
      relatedGuides: ["condo-vs-hdb-expat", "security-deposit-diplomatic-clause"],
      sponsorSlot: {
        enabled: true,
        category: "agents",
        disclosure: "Featured property partner",
      },
    },
    `
Singapore’s private rental market moves quickly. Good units can collect multiple Letters of Intent in a weekend. Understanding the paper trail protects you more than haggling over a symbolic S$50 in rent.

## From viewing to LOI

After viewings, interested tenants submit a **Letter of Intent (LOI)** with proposed rent, lease length, move-in date, diplomatic/break clauses, and a good-faith booking deposit (commonly half a month’s rent, later applied to the security deposit).

LOIs are often treated as binding in practice once accepted — read before you WhatsApp “confirm.”

## Tenancy Agreement (TA)

The TA is the full contract. Check:

- Inventory list completeness (especially furnished units)
- Diplomatic clause wording and notice period
- Repair responsibilities and aircon servicing schedules
- Guest and pet rules (must match condo by-laws)
- Early termination penalties

## Stamp duty

Residential leases generally require stamp duty payable to IRAS within stipulated timelines. Your agent usually coordinates; confirm who pays what.

## Deposit norms

Security deposits of one to two months are common for annual leases, depending on furnishings and landlord preference. Document every scratch on move-in day with dated photos.
`,
  ),

  guide(
    {
      pillar: "home",
      slug: "condo-vs-hdb-expat",
      title: "Condo vs HDB for expats: rules, lifestyle, and trade-offs",
      description:
        "A clear comparison of private condominiums and HDB rentals for foreigners — eligibility, facilities, noise, schools, and budget.",
      journey: "both",
      citations: [C.hdb],
      relatedGuides: [
        "renting-process-loi-ta-deposits",
        "utilities-telecom-setup",
      ],
    },
    `
Most newly arrived professionals default to condos. Many long-stay families later discover well-located HDB estates offer space and value — if the rules fit.

## Condominium rentals

- Facilities (pool, gym, security) baked into maintenance culture
- Often closer to international school corridors (Bukit Timah, East Coast, etc.)
- Higher rent per square foot; agency norms familiar to expats

## HDB rentals

HDB owners may rent out bedrooms or whole flats subject to HDB eligibility rules, minimum occupation periods, and nationality restrictions that change over time.

<OfficialSource>
Verify live eligibility on [HDB’s renting guidance](https://www.hdb.gov.sg/residential/renting-a-flat/renting-from-the-open-market) before you fall in love with a listing.
</OfficialSource>

## Lifestyle trade-offs

| Factor | Condo | HDB |
| --- | --- | --- |
| Space per dollar | Lower | Higher |
| Facilities | Strong | Usually limited |
| Neighbour density | Moderate | Higher |
| Expat peer density | Higher in core belts | Mixed |

Choose for commute and schools first; finishes second.
`,
  ),

  guide(
    {
      pillar: "home",
      slug: "utilities-telecom-setup",
      title: "Utilities and telecom setup for a new Singapore home",
      description:
        "Electricity, water, gas, fibre broadband, and mobile plans — how to switch accounts, avoid downtime, and pick sensible contracts.",
      journey: "arriving",
      citations: [C.mas],
      relatedGuides: [
        "renting-process-loi-ta-deposits",
        "relocation-checklist-7-30-90",
      ],
    },
    `
Assume nothing transfers automatically when you collect keys. SP Group (electricity/water account contexts), Open Electricity Market retailers, town gas where applicable, and fibre providers each have their own switch process.

## Power and water

- Confirm whether the landlord keeps accounts in their name (you reimburse) or transfers to you
- Take opening meter photos
- Ask about Open Electricity Market retailer contracts already locked in

## Fibre and Wi-Fi

Condo fibre termination points vary. Book activation early; installers need access windows. Check whether the unit already has a terminated line.

## Mobile

Tourist SIMs work for a week. For living mode, compare local postpaid/prepaid on network coverage in your estate — basement carparks and older buildings differ.

## Practical sequence

1. Keys + meter photos  
2. Utilities account clarity in writing  
3. Fibre appointment  
4. Mobile number you will give banks and schools  
`,
  ),

  guide(
    {
      pillar: "home",
      slug: "hiring-domestic-helper-mdw",
      title: "Hiring a migrant domestic worker (MDW) in Singapore",
      description:
        "MOM Work Permit basics for foreign domestic workers, levy, rest days, agency vs direct hire themes, and employer responsibilities.",
      journey: "living",
      segments: ["families"],
      citations: [C.momFdw],
      relatedGuides: ["condo-vs-hdb-expat", "cost-of-living-by-household"],
    },
    `
Many expat families employ a migrant domestic worker (MDW) under MOM’s Work Permit framework. This is a regulated employment relationship — not informal cash help.

## Employer obligations (themes)

- Valid Work Permit sponsorship and medical insurance as required
- Levy payments
- Adequate housing and rest day arrangements
- Safe working conditions and lawful salary practices

<OfficialSource>
Follow [MOM’s FDW / MDW guidance](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker) for levy, insurance, and transfer rules.
</OfficialSource>

## Agency vs transfer

First-time employers often use agencies. Transfers from another employer can shorten timelines but still require MOM compliance. Budget for agency fees, settling-in, and backup childcare during home leave.

## Condo and HDB constraints

Some buildings have helper room norms or limit occupant counts. Confirm before signing a lease that assumes a live-in helper.
`,
  ),

  guide(
    {
      pillar: "home",
      slug: "aircon-pest-renewals",
      title: "Aircon servicing, pests, and lease renewals",
      description:
        "The unglamorous operating manual for Singapore homes — chemical servicing schedules, pest realities, and how to negotiate renewal rents.",
      journey: "living",
      citations: [],
      relatedGuides: [
        "renting-process-loi-ta-deposits",
        "security-deposit-diplomatic-clause",
      ],
    },
    `
Humidity is not a vibe; it is a maintenance schedule. Neglect shows up as mould, blocked drains, and landlord disputes.

## Aircon

Chemical washes on a recurring cycle are normal. Many TAs specify tenant responsibility for regular servicing and landlord responsibility for major repairs — but wording varies. Keep invoices.

## Pests

Tropical pests are ordinary, not a moral failing. Know whether your condo has a contracted pest schedule and what the tenant must escalate via managing agent.

## Renewals

Start renewal talks 2–3 months out. Bring comparable rents, your payment reliability, and any repair goodwill. If you will leave, use the diplomatic clause calendar deliberately — not emotionally.
`,
  ),

  guide(
    {
      pillar: "home",
      slug: "security-deposit-diplomatic-clause",
      title: "Security deposits and the diplomatic clause",
      description:
        "How deposits are held, common deductions, and how diplomatic / break clauses work for pass holders who may be reassigned.",
      journey: "both",
      citations: [],
      relatedGuides: [
        "renting-process-loi-ta-deposits",
        "leaving-singapore-playbook",
      ],
    },
    `
## Security deposits

Deposits secure landlords against unpaid rent and damage beyond fair wear and tear. At exit, joint inspections and inventory photos decide most arguments. Unreturned deposits usually fail on missing documentation, not rhetoric.

## Diplomatic clause

A diplomatic (or break) clause typically allows termination after a minimum stay if the tenant’s pass is cancelled or they are posted out — subject to notice. Exact triggers matter: resignation vs employer-initiated cancellation can be treated differently.

Negotiate the clause **in the LOI**, not after the TA is drafted. If your role is project-based or your industry reshuffles often, this clause is worth more than a free gym toaster.
`,
  ),

  guide(
    {
      pillar: "home",
      slug: "furnishing-rental-flat",
      title: "Furnishing a Singapore rental without wasting money",
      description:
        "What to buy, what to rent, IKEA-to-marketplace tactics, and how to avoid leaving orphan furniture when you exit.",
      journey: "both",
      citations: [],
      relatedGuides: [
        "first-housing-serviced-apartment",
        "leaving-singapore-playbook",
      ],
    },
    `
Unfurnished in Singapore can mean “appliances only” or “literally empty.” Clarify before you budget.

## Buy vs rent furniture

Short assignments favour rental packs. Multi-year stays favour buying mid-range pieces you can resell on Marketplace or Carousell.

## High-ROI purchases

- Dehumidifiers and good mattresses
- Blackout curtains on west-facing rooms
- Kitchen kit you will use weekly

## Low-ROI traps

- Full dining sets for people who eat out
- Oversized sofas that will not fit the service lift
- Built-in hacks that landlords will charge to reverse
`,
  ),

  guide(
    {
      pillar: "home",
      slug: "short-term-vs-long-term-rental",
      title: "Short-term stays vs long-term leases in Singapore",
      description:
        "Legal and practical differences between hotels, serviced apartments, and 12–24 month tenancies — including URA short-term stay constraints.",
      journey: "arriving",
      citations: [C.ura],
      relatedGuides: [
        "first-housing-serviced-apartment",
        "renting-process-loi-ta-deposits",
      ],
    },
    `
Singapore tightly regulates short-term accommodation in private residential properties. That “condo Airbnb for three months” listing may be non-compliant.

## Practical options

- Hotels / serviced residences for lawful short stays
- Corporate housing programmes
- Standard 12–24 month tenancies for living mode

## Decision rule

If you will be here beyond a quarter and know your school/commute needs, a proper lease usually wins on cost and stability. If your IPA or role is still soft, pay the serviced premium for optionality.
`,
  ),

  guide(
    {
      pillar: "home",
      slug: "moving-within-singapore",
      title: "Moving home within Singapore",
      description:
        "How to plan an intra-island move — overlapping leases, condo move slots, school runs, and helper logistics.",
      journey: "living",
      citations: [],
      relatedGuides: [
        "renting-process-loi-ta-deposits",
        "shipping-household-singapore",
      ],
      sponsorSlot: {
        enabled: true,
        category: "movers",
        disclosure: "Featured local movers partner",
      },
    },
    `
Internal moves look simple until elevator bookings collide with school pickup.

## Timeline

1. Secure new TA with realistic start date  
2. Book both buildings’ loading bays  
3. Decide what gets sold vs moved  
4. Update address with banks, IRAS where relevant, schools, and insurers  
5. Overlap leases by a few days if budget allows — same-day heroics fail in tropical rain  

## People logistics

If you employ an MDW, plan rest days and packing help ethically and legally. Children need a calm base — often one bedroom staged first.
`,
  ),

  guide(
    {
      pillar: "home",
      slug: "choosing-neighbourhood-expat",
      title: "How to choose a Singapore neighbourhood as an expat",
      description:
        "A decision framework for Bukit Timah, East Coast, River Valley, CBD fringes, and heartlands — commute, schools, and weekend lifestyle.",
      journey: "both",
      citations: [],
      relatedGuides: ["condo-vs-hdb-expat", "mrt-bus-transport-literacy"],
      relatedEntities: ["holland-village"],
    },
    `
Neighbourhood choice is a lifestyle thesis wearing a rental budget.

## Start with constraints

- School run or childcare radius
- Office location and late-meeting frequency
- Need for walkable groceries vs car/Grab dependence
- Pet and helper constraints

## Archetypes (simplified)

- **Bukit Timah / Holland corridor:** schools, greenery, family density  
- **East Coast / Katong:** sea breeze lifestyle, different CBD commute trade-offs  
- **River Valley / Orchard fringe:** central, smaller units, strong for couples  
- **CBD / Marina / Downtown:** walk-to-work, higher noise and F&B intensity  
- **Heartlands:** space and value; more local texture, fewer expat default networks  

Walk the area on a weekday morning and a Sunday night before you LOI. Directory deep-dives for specific neighbourhoods ship as entity pages; this guide is the decision method.
`,
  ),
];
