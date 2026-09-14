import { C, guide } from "./seed-lib.mjs";

export const moveGuides = [
  guide(
    {
      pillar: "move",
      slug: "employment-pass-singapore",
      title: "Employment Pass in Singapore: eligibility, COMPASS, and timelines",
      description:
        "How the Employment Pass works for professionals relocating to Singapore — salary floors, COMPASS scoring, documents, and what to expect after approval.",
      journey: "arriving",
      segments: ["western", "asean", "couples", "families"],
      citations: [C.momEp, C.momCompass, C.momWork],
      relatedGuides: [
        "compass-framework-explained",
        "decoding-job-offer-singapore",
        "s-pass-singapore",
      ],
    },
    `
Singapore’s Employment Pass (EP) is the primary work pass for foreign professionals, managers, and executives. It is issued by the Ministry of Manpower (MOM), tied to a specific employer, and sits at the centre of most corporate relocations.

## Who the EP is for

The EP is aimed at mid-to-senior talent. MOM assesses both the individual (qualifications, experience, salary) and the employer’s hiring context through the Complementary Assessment Framework — commonly called COMPASS.

You typically need:

- A job offer from a Singapore-registered company that can sponsor the pass
- Fixed monthly salary at or above the prevailing EP minimum for your age band (thresholds rise over time — always check MOM)
- Relevant qualifications and/or professional experience

<OfficialSource>
Confirm current salary thresholds and COMPASS criteria on the [MOM Employment Pass page](https://www.mom.gov.sg/passes-and-permits/employment-pass) before you negotiate an offer letter. Thresholds change.
</OfficialSource>

## COMPASS in one paragraph

COMPASS scores candidates on individual factors (salary relative to local peers, qualifications) and firm-related factors (diversity, local employment support). Points below the passing score generally mean rejection unless a clear exemption applies. Treat COMPASS as part of offer design — not an afterthought once you have already resigned overseas.

## Application flow

1. Employer (or appointed employment agent) submits via EP Online
2. MOM may request clarification or additional documents
3. In-principle approval (IPA) letter is issued if successful
4. You complete formalities in Singapore (card issuance) after arrival or when eligible

Processing times vary. Build contingency into resignation and shipping dates; do not assume a fixed calendar week.

## After you land

Once your pass is issued:

- Carry your pass card (or digital equivalent when accepted) as required
- Update banking, telco, and landlord records with your FIN
- Register for Singpass once eligible — it unlocks most government and bank digital services
- Note the pass expiry early; renewals are a living-mode problem, not a last-week scramble

## Common friction points

- **Package structure:** Allowances that are not “fixed monthly salary” may not count toward the EP floor
- **Job title vs reality:** MOM looks at substance; inflated titles without matching duties invite scrutiny
- **Dependent timing:** Family passes usually follow the main pass — sequence housing and school deposits accordingly

## Related decisions

If your salary or role profile sits below EP norms, compare the [S Pass](/guides/s-pass-singapore). Founders should read [EntrePass](/guides/entrepass-singapore). For how offers should be structured before COMPASS, see [decoding your Singapore job offer](/guides/decoding-job-offer-singapore).
`,
  ),

  guide(
    {
      pillar: "move",
      slug: "s-pass-singapore",
      title: "S Pass Singapore: mid-skilled work pass realities",
      description:
        "What the S Pass covers, how it differs from the Employment Pass, quota and levy context, and practical steps for candidates and trailing partners.",
      journey: "arriving",
      citations: [C.momSpass, C.momWork],
      relatedGuides: [
        "employment-pass-singapore",
        "trailing-partner-career-singapore",
      ],
    },
    `
The S Pass is Singapore’s work pass for mid-level skilled staff. It sits between Work Permit and Employment Pass in the MOM hierarchy — useful for technical and specialist roles that do not clear EP criteria.

## How it differs from EP

- Lower qualifying salary band than EP (still regulated and revised periodically)
- Subject to **Dependency Ratio Ceiling** and **Foreign Worker Levy** for the employer
- Different renewal and conversion pathways

For the employee, day-to-day life can look similar to EP holders. For the employer, quota and levy economics matter — which can affect hiring appetite and contract length.

## Documents and process

Employers apply online. Expect educational certificates, employment history, and medical checks as required. An IPA precedes card issuance.

<OfficialSource>
Use [MOM’s S Pass guidance](https://www.mom.gov.sg/passes-and-permits/s-pass) for current levy rates, quota rules, and salary floors.
</OfficialSource>

## Family and lifestyle notes

Dependant options and Long-Term Visit Pass eligibility depend on the main pass type and salary. Do not assume EP-style family packaging transfers automatically to S Pass — verify before relocating a household.

## Practical advice

- Ask your employer frankly whether the role is budgeted as S Pass or EP — it affects levy, renewals, and future PR narratives
- Keep certified copies of diplomas; MOM document standards are strict
- If you later clear EP salary and role criteria, conversion is a separate application, not automatic
`,
  ),

  guide(
    {
      pillar: "move",
      slug: "entrepass-singapore",
      title: "EntrePass: starting a company as a foreign founder in Singapore",
      description:
        "When EntrePass fits, eligibility themes, business plan expectations, and how founder passes interact with hiring and fundraising.",
      journey: "arriving",
      segments: ["entrepreneurs"],
      citations: [C.momEntre, C.momWork],
      relatedGuides: [
        "employment-pass-singapore",
        "opening-bank-account-expat",
      ],
    },
    `
EntrePass is MOM’s pathway for foreign entrepreneurs building innovative businesses in Singapore. It is not a generic “register a company and get a pass” route — evaluation focuses on venture quality, innovation, and growth potential.

## Who should consider it

- Founders with a credible tech, science, or innovative business model
- Teams that can show traction, IP, incubator backing, or strong investor interest
- People who will be operationally present — not silent offshore directors

Traditional small trading or F&B concepts without a clear innovation angle are usually a poor fit.

## What evaluators look for

Expect scrutiny of:

- Business plan clarity and local economic contribution
- Founding team strength
- Funding, customers, or institutional support where relevant

<OfficialSource>
Read MOM’s current [EntrePass criteria](https://www.mom.gov.sg/passes-and-permits/entrepass) before paying for incorporation packages marketed as “guaranteed passes.”
</OfficialSource>

## After approval

You still need banking, accounting, CPF obligations for local hires, and a realistic burn plan. Many founders later transition to EP once the company can sponsor under standard employment criteria.
`,
  ),

  guide(
    {
      pillar: "move",
      slug: "dependant-pass-singapore",
      title: "Dependant’s Pass: bringing spouse and children on a work pass",
      description:
        "Eligibility for Dependant’s Pass holders, Letter of Consent work options, schooling implications, and sequencing with the main pass.",
      journey: "arriving",
      segments: ["couples", "families"],
      citations: [C.momDp, C.momEp],
      relatedGuides: [
        "ltvp-singapore",
        "employment-pass-singapore",
        "international-schools-landscape",
      ],
    },
    `
A Dependant’s Pass (DP) lets eligible spouses and unmarried children under 21 live in Singapore on the back of a qualifying main pass — commonly an Employment Pass.

## Typical eligibility pattern

The main pass holder usually needs to meet MOM’s salary and pass-type criteria for dependants. Exact thresholds change; verify against MOM before you sign school contracts overseas.

## Work for DP holders

A DP is not automatically a work pass. Many spouses need a **Letter of Consent (LOC)** or their own work pass to take up employment. Plan careers explicitly — trailing-partner underemployment is one of the most common relocation regrets.

## Schools and housing

International school waitlists and condo viewings often run in parallel with IPA timing. Use provisional holds carefully; understand cancellation penalties if the main pass is delayed.

## Documents to prepare early

- Marriage and birth certificates (official translations if required)
- Passports with adequate validity
- Main pass IPA / issued pass details

Sequence: main pass clarity → DP applications → housing deposit → school enrolment fees.
`,
  ),

  guide(
    {
      pillar: "move",
      slug: "ltvp-singapore",
      title: "Long-Term Visit Pass (LTVP) for partners and parents",
      description:
        "When LTVP is used instead of a Dependant’s Pass, common sponsor scenarios, and what holders can and cannot assume about work rights.",
      journey: "arriving",
      segments: ["couples", "families"],
      citations: [C.momLtvp, C.ica],
      relatedGuides: [
        "dependant-pass-singapore",
        "trailing-partner-career-singapore",
      ],
    },
    `
The Long-Term Visit Pass (LTVP) covers certain family relationships that do not fit neatly on a Dependant’s Pass — including some common-law partners, parents, and other sponsored relatives depending on ICA pathways in force.

## Why LTVP comes up for expats

- Unmarried partners who cannot obtain DP
- Parents joining a working adult child
- Transitional family situations during pass changes

Rules are relationship- and sponsor-specific. Treat online forum anecdotes as unverified.

<OfficialSource>
Start from [ICA’s LTVP pages](https://www.ica.gov.sg/reside/LTVP) and any MOM linkage notes for your sponsor’s pass type.
</OfficialSource>

## Work and benefits

LTVP holders should not assume employment rights. Separate work authorisation may be required. Healthcare subsidies and school access also differ from citizen/PR norms — budget accordingly.
`,
  ),

  guide(
    {
      pillar: "move",
      slug: "student-pass-singapore",
      title: "Student’s Pass: studying in Singapore as an international student",
      description:
        "How Student’s Pass applications run through ICA and institutions, what families should verify, and how study pathways relate to later work passes.",
      journey: "arriving",
      segments: ["families"],
      citations: [C.momStudent, C.ica, C.moe],
      relatedGuides: [
        "international-schools-landscape",
        "local-schools-for-expats",
      ],
    },
    `
International students at approved institutions typically require a Student’s Pass issued via ICA, usually initiated by the school through the relevant online system.

## Core idea

The institution drives the application. Parents and students provide documents; the school’s compliance team manages the submission. Tourist entries are not a substitute for proper study authorisation when a pass is required.

## What families should confirm

- The school is approved to host international students for your programme level
- Fee refund policies if the pass is refused
- Whether the student can accompany working parents on DP instead (sometimes relevant for younger dependants)

## From study to work

Graduating does not automatically grant an EP. Employers still sponsor work passes under MOM rules. Build a realistic post-graduation plan rather than assuming seamless conversion.
`,
  ),

  guide(
    {
      pillar: "move",
      slug: "compass-framework-explained",
      title: "COMPASS framework explained for EP candidates",
      description:
        "A plain-English walkthrough of MOM’s Complementary Assessment Framework — what is scored, why offers fail, and how to prepare with your employer.",
      journey: "arriving",
      citations: [C.momCompass, C.momEp],
      relatedGuides: [
        "employment-pass-singapore",
        "decoding-job-offer-singapore",
      ],
    },
    `
COMPASS is MOM’s points-based lens for many Employment Pass applications. It tries to answer: does this hire complement the Singapore workforce rather than simply displace it?

## The two sides of the scorecard

**Individual factors** typically emphasise salary competitiveness versus local peers and qualifications credibility.

**Firm-related factors** typically emphasise nationality diversity among professional staff and support for local employment as defined by MOM.

Exact point tables and passing marks are published by MOM and should be treated as living policy.

## How candidates can help

You cannot “hack” firm-level scores alone — but you can ensure your CV and certificates are complete, align job scope and salary with market norms, and give HR accurate degree attestation early.

## How employers should prepare

Run a COMPASS self-assessment before verbal offers go out. Candidates resigning on a handshake IPA assumption is how relocation horror stories start.

<Callout title="Editorial note">
expat.sg summarises the framework for orientation. MOM’s published tables are the source of truth for any live application.
</Callout>
`,
  ),

  guide(
    {
      pillar: "move",
      slug: "decoding-job-offer-singapore",
      title: "Decoding a Singapore expat job offer",
      description:
        "Fixed salary vs allowances, housing, school support, tax equalisation, and the clauses that matter before you sign.",
      journey: "arriving",
      segments: ["western", "asean", "families", "couples"],
      citations: [C.momEp, C.iras],
      relatedGuides: [
        "employment-pass-singapore",
        "cost-of-living-by-household",
        "salary-package-decoding",
      ],
      sponsorSlot: {
        enabled: true,
        category: "relocation",
        disclosure: "Featured relocation partner",
      },
    },
    `
A Singapore offer can look generous until you separate **fixed monthly salary** (pass-relevant) from allowances, benefits, and one-off relocation candy.

## Read the compensation stack

| Component | Why it matters |
| --- | --- |
| Fixed monthly salary | EP/S Pass thresholds, COMPASS salary factor |
| Housing allowance | Cash vs company lease — tax and lifestyle differ |
| School fees support | Caps, currencies, and which children are covered |
| Flights / shipment | Often one-way or capped; check dependent coverage |
| Tax equalisation / protection | Common in some multinationals; rare in local packages |
| Bonus / RSUs | Timing, leaver provisions, and FX exposure |

## Non-salary clauses worth negotiating

- Notice period and garden leave
- Probation length while your household is mid-relocation
- Repayment of relocation costs if you leave early
- Pass sponsorship responsibility if the role changes

## Cost reality check

Run the offer against a household budget — not a single’s lunch spreadsheet. See [cost of living by household type](/guides/cost-of-living-by-household).
`,
  ),

  guide(
    {
      pillar: "move",
      slug: "relocation-checklist-7-30-90",
      title: "Singapore relocation checklist: first 7, 30, and 90 days",
      description:
        "A practical arriving checklist from landing week through the first quarter — passes, banking, housing, schools, and administrative scaffolding.",
      journey: "arriving",
      citations: [C.singpass, C.momWork, C.ica],
      relatedGuides: [
        "opening-bank-account-expat",
        "utilities-telecom-setup",
        "first-housing-serviced-apartment",
      ],
    },
    `
Relocation is a project with dependencies. Use this as a sequencing guide — not a substitute for your employer’s onboarding list.

## First 7 days

- Complete pass formalities and collect / activate your pass card
- Get a local SIM and stable connectivity
- Open or activate banking where possible
- Confirm temporary housing check-in and inventory
- Register critical HR contacts and emergency clinic locations
- If eligible, begin Singpass setup

## First 30 days

- Long-term housing search in earnest (if still in serviced apartment)
- School applications / waitlist follow-ups
- GP registration and insurance cards understood
- Commute dry-runs at rush hour
- Update address with bank, employer, and relevant agencies as required

## First 90 days

- Settle utilities, fibre, and recurring payments
- Build a basic community foothold (club, hash, interest group, or neighbour network)
- Review budget vs actual spend
- Note pass expiry and PR long-game only after you understand living reality

<Callout title="Families">
School term dates can dominate the critical path. Reverse-plan from term start, not from your preferred flight deal.
</Callout>
`,
  ),

  guide(
    {
      pillar: "move",
      slug: "shipping-household-singapore",
      title: "Shipping household goods to Singapore",
      description:
        "Sea vs air freight, prohibited items, condo move-in rules, and how to time containers with IPA and keys handover.",
      journey: "arriving",
      citations: [C.momWork],
      relatedGuides: [
        "relocation-checklist-7-30-90",
        "first-housing-serviced-apartment",
      ],
      sponsorSlot: {
        enabled: true,
        category: "movers",
        disclosure: "Featured movers partner",
      },
    },
    `
Most families combine air freight for the first two weeks with sea freight for the rest. Singles often ship little and buy locally.

## Timing

Do not book a container against a hoped-for IPA date. Prefer flexible storage at origin or destination. Condo management may require move-in bookings, elevator padding, and weekday slots only.

## What not to pack blindly

Controlled items (some foods, weapons analogues, certain electronics, alcohol volumes) create customs pain. Ask your mover for Singapore-specific prohibited/restricted lists and declare honestly.

## Cost levers

- Volume (shared container vs exclusive)
- Packing labour at origin
- Destination handling and disposal of packing waste
- Insurance valuation

Get like-for-like quotes with the same inventory list.
`,
  ),

  guide(
    {
      pillar: "move",
      slug: "importing-pets-singapore",
      title: "Importing pets into Singapore",
      description:
        "AVS import permits, rabies-related rules by country, quarantine themes, and housing constraints for pet owners.",
      journey: "arriving",
      segments: ["pets"],
      citations: [C.avaPets],
      relatedGuides: ["shipping-household-singapore", "condo-vs-hdb-expat"],
    },
    `
Singapore’s pet import rules are administered through NParks Animal & Veterinary Service (AVS). Requirements depend heavily on the animal’s species and the rabies risk category of the exporting country.

## Start months early

Typical path:

1. Confirm your pet is an allowed species/breed profile for import
2. Secure an import licence before travel
3. Complete vaccinations, microchip, and health certificates within stipulated windows
4. Arrange approved transport and any quarantine

<OfficialSource>
Follow [AVS bringing-pets guidance](https://www.nparks.gov.sg/avs/pets/bringing-animals-into-singapore/bringing-pets-into-singapore) — country lists and timelines change.
</OfficialSource>

## Housing

Many condos restrict dog size, breed, or number. HDB has its own pet rules. Never sign a lease until pet clauses are written, not verbal.
`,
  ),

  guide(
    {
      pillar: "move",
      slug: "converting-foreign-driving-licence",
      title: "Converting a foreign driving licence in Singapore",
      description:
        "Who can convert without a full test, when theory and practical apply, and whether you need a car in the first place.",
      journey: "arriving",
      citations: [C.tpDriving, C.lta],
      relatedGuides: [
        "mrt-bus-transport-literacy",
        "cost-of-living-by-household",
      ],
    },
    `
Singapore recognises some foreign licences for conversion under Traffic Police rules. Others require theory and/or practical tests. Eligibility depends on the issuing country and licence class.

## Do you need to drive?

For many central and East Coast lifestyles, MRT + Grab covers most needs. Cars are expensive (COE, parking, ERP). Convert a licence if you will drive; do not treat it as a default day-one task.

<OfficialSource>
Use [Traffic Police conversion guidance](https://www.police.gov.sg/Advisories/Traffic/Convert-Foreign-Driving-Licence) for the live country list.
</OfficialSource>
`,
  ),

  guide(
    {
      pillar: "move",
      slug: "trailing-partner-career-singapore",
      title: "Trailing partner careers in Singapore",
      description:
        "Work rights on DP/LTVP, job search realities, entrepreneurship options, and how to negotiate partner support into a package.",
      journey: "arriving",
      segments: ["couples"],
      citations: [C.momDp, C.momWork],
      relatedGuides: [
        "dependant-pass-singapore",
        "ltvp-singapore",
        "entrepass-singapore",
      ],
    },
    `
Trailing partners often relocate without a job — then discover Singapore’s work-pass system does not treat “spouse of EP holder” as an open labour market ticket.

## Clarify legal status first

- DP holders may need Letter of Consent or their own pass
- LTVP holders often face tighter work constraints
- Volunteer roles and informal gig work can still raise compliance issues

## Job market realism

Hiring managers may prioritise candidates who already have independent pass eligibility. Networks, sector scarcity, and flexible employers matter more than polished LinkedIn alone.

## Negotiate upstream

Ask for career coaching or recruitment introductions, clarity on DP vs LTVP strategy, and realistic dual-career timelines in the household plan. Underemployment is a wellbeing issue — treat it as a first-class relocation risk.
`,
  ),

  guide(
    {
      pillar: "move",
      slug: "first-housing-serviced-apartment",
      title: "Serviced apartments and first housing on arrival",
      description:
        "When a serviced apartment makes sense, typical lease lengths, and how to transition into a longer condo or HDB rental.",
      journey: "arriving",
      citations: [C.ura],
      relatedGuides: [
        "renting-process-loi-ta-deposits",
        "relocation-checklist-7-30-90",
      ],
    },
    `
Serviced apartments buy you time: furnished, utilities included, flexible tenancy — at a premium per night versus an annual condo lease.

## When they are worth it

- IPA timing uncertain
- School decision still open
- You want to walk neighbourhoods before committing
- Employer covers a 2–4 week landing package

## Transition plan

Use the serviced stay to run a proper housing search: agent shortlist, night-time noise checks, school-run timing, and condo rule review. Do not sign a 24-month lease jet-lagged on day three.

Next read: [renting process — LOI, TA, deposits](/guides/renting-process-loi-ta-deposits).
`,
  ),
];
