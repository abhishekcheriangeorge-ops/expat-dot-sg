import { C, guide } from "./seed-lib.mjs";

export const moneyGuides = [
  guide(
    {
      pillar: "money",
      slug: "opening-bank-account-expat",
      title: "Opening a bank account as an expat in Singapore",
      description:
        "What banks typically require, Singpass timing, FIN documents, and how founders differ from salaried EP holders.",
      journey: "arriving",
      citations: [C.mas, C.singpass],
      relatedGuides: [
        "relocation-checklist-7-30-90",
        "remittances-singapore",
      ],
    },
    `
Local banking unlocks salary credit, GIRO, and digital payments. Requirements vary by bank and whether you are salaried, a dependant, or incorporating.

## Typical documents

- Passport and work / dependant pass
- Proof of address (TA, employer letter, or other accepted forms)
- Employment confirmation where requested

Some banks allow account opening with IPA under specific programmes; others wait for the issued pass. Ask HR which partner bank they use for payroll.

## Singpass

Once you have Singpass, many banking and government workflows become dramatically easier. Prioritise eligibility.

## Founders

Corporate account KYC is stricter than personal salary accounts. Bring constitutions, shareholding charts, and realistic business activity explanations.
`,
  ),

  guide(
    {
      pillar: "money",
      slug: "remittances-singapore",
      title: "Sending and receiving money from Singapore",
      description:
        "Bank wires vs specialist FX providers, fees that hide in exchange rates, and practical habits for multi-currency households.",
      journey: "living",
      citations: [C.mas],
      relatedGuides: [
        "opening-bank-account-expat",
        "salary-package-decoding",
      ],
      sponsorSlot: {
        enabled: true,
        category: "remittance",
        disclosure: "Featured remittance partner",
      },
    },
    `
Multi-currency lives leak money through lazy FX.

## Compare the all-in rate

A “free transfer” with a poor exchange rate is not free. Compare:

- Mid-market rate vs offered rate
- Upfront fees
- Speed and cut-off times
- Recipient bank charges

## Habits that help

- Batch transfers monthly instead of panic-sending
- Keep a small home-currency buffer for commitments
- Document large transfers if you may later need source-of-funds clarity for mortgages or PR paperwork elsewhere
`,
  ),

  guide(
    {
      pillar: "money",
      slug: "iras-tax-residency-filing",
      title: "IRAS tax residency and filing for expats",
      description:
        "How Singapore determines tax residency, what employment income is taxable, and the filing rhythm foreigners should expect.",
      journey: "both",
      citations: [C.iras, C.irasRes],
      relatedGuides: [
        "tax-clearance-when-leaving",
        "salary-package-decoding",
      ],
    },
    `
Singapore taxes individuals primarily on Singapore-sourced income, with residency status affecting rates and administrative treatment. Many expats become tax residents under quantitative tests (for example, presence thresholds) — but you must apply IRAS rules to your facts.

## Why residency matters

Residency affects which tax rates and reliefs may apply. Do not confuse immigration status (EP/PR) with tax residency — related, not identical.

<OfficialSource>
Read [IRAS tax residency guidance](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/individuals-(tax-residency)) and file through official channels.
</OfficialSource>

## Employer withholding vs your return

Companies often handle payroll reporting, but you remain responsible for understanding benefits-in-kind, dual employment, and foreign income nuances that apply to your case. When in doubt, use a qualified tax professional — especially for equalisation packages.
`,
  ),

  guide(
    {
      pillar: "money",
      slug: "health-insurance-expat",
      title: "Health insurance for expats in Singapore",
      description:
        "Employer group plans vs private Integrated Shield add-ons, clinic panels, maternity gaps, and what to verify on day one.",
      journey: "both",
      citations: [C.moh],
      relatedGuides: [
        "healthcare-gp-hospital",
        "maternity-care-singapore",
      ],
      sponsorSlot: {
        enabled: true,
        category: "insurance",
        disclosure: "Featured insurer partner",
      },
    },
    `
Singapore’s clinical quality is high; uninsured private care is also expensive. Your offer’s medical plan is part of compensation.

## Questions for HR

- Inpatient vs outpatient coverage caps
- Panel GP / specialist rules
- Dependants included?
- Maternity waiting periods
- Pre-existing condition treatment
- Coverage while travelling outside Singapore

## Living-mode upgrades

Some families add private riders or international policies for evacuation and home-country care. Match the policy to your actual travel pattern — not a brochure fantasy.
`,
  ),

  guide(
    {
      pillar: "money",
      slug: "cost-of-living-by-household",
      title: "Singapore cost of living by household type",
      description:
        "Order-of-magnitude budgets for singles, couples, and families — rent, food, schooling, helpers, and the silent subscriptions.",
      journey: "both",
      segments: ["singles", "couples", "families"],
      citations: [],
      relatedGuides: [
        "decoding-job-offer-singapore",
        "international-schools-landscape",
      ],
    },
    `
Singapore can be thrifty or eye-watering depending on housing belt and schooling. Use ranges as planning scaffolds, then replace with quotes.

## Singles

Largest levers: rent location, eating-out frequency, travel home. Hawker + MRT lifestyles are viable; river-view one-beds are a choice.

## Couples

Two transport patterns and dining habits matter more than “Singapore is expensive” slogans. Dual income changes neighbourhood possibilities quickly.

## Families

International school fees and helper costs often dwarf grocery line items. Model school fees in the same spreadsheet as rent — never separately.

## Silent costs

Condo miscellaneous fees passed through, Grab creep, CCA fees, flights at peak term breaks, and replacement of items that moulded in storage.
`,
  ),

  guide(
    {
      pillar: "money",
      slug: "srs-investing-as-foreigner",
      title: "SRS and investing as a foreigner in Singapore",
      description:
        "What the Supplementary Retirement Scheme is, who it may suit, and broader investing constraints foreigners should understand.",
      journey: "living",
      citations: [C.irasSrs, C.mas],
      relatedGuides: [
        "iras-tax-residency-filing",
        "financial-planning-year-one",
      ],
    },
    `
The Supplementary Retirement Scheme (SRS) is a voluntary scheme administered with tax considerations defined by IRAS. Contribution eligibility and benefit depend on your tax profile.

<OfficialSource>
Use [IRAS SRS pages](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-reliefs-rebates-and-deductions/tax-reliefs/supplementary-retirement-scheme-(srs)) before contributing — especially if you may leave Singapore within a few years.
</OfficialSource>

## Broader investing notes

Foreigners can invest through local brokerages and banks subject to KYC. Product suitability, US person constraints, and home-country tax reporting still apply. This is orientation, not personal advice.
`,
  ),

  guide(
    {
      pillar: "money",
      slug: "salary-package-decoding",
      title: "Salary package decoding for Singapore expats",
      description:
        "How to translate an offer into monthly cash flow — CPF myths for foreigners, bonuses, and benefits-in-kind.",
      journey: "arriving",
      citations: [C.cpf, C.iras, C.momEp],
      relatedGuides: [
        "decoding-job-offer-singapore",
        "iras-tax-residency-filing",
      ],
    },
    `
## Foreigners and CPF

Most EP holders do not receive CPF contributions the way citizens and PRs do. Do not mentally import a CPF employer contribution into your package unless HR explicitly structures something different and lawful.

## Model monthly cash

1. Fixed salary  
2. Subtract estimated tax cadence  
3. Subtract rent + utilities  
4. Subtract insurance gaps  
5. Subtract school / childcare  
6. Remaining = lifestyle + savings + remittances  

Bonuses are real but lumpy — do not underwrite rent on them.
`,
  ),

  guide(
    {
      pillar: "money",
      slug: "cpf-and-foreigners",
      title: "CPF and foreigners: what applies, what does not",
      description:
        "Clear the myths — when CPF applies, how PR changes contributions, and what EP holders should plan instead.",
      journey: "both",
      citations: [C.cpf],
      relatedGuides: ["pr-application-strategy", "salary-package-decoding"],
    },
    `
CPF is Singapore’s mandatory social security system for citizens and PRs in covered employment. Foreign work pass holders are generally outside ordinary CPF contribution rules.

## Why the myth persists

Job ads and watercooler talk blur local and expat packages. Always ask HR to state CPF treatment explicitly.

## After PR

PRs gradually move into CPF contribution regimes under prevailing rules. That changes take-home pay and long-term savings architecture — model it before you celebrate approval.
`,
  ),

  guide(
    {
      pillar: "money",
      slug: "foreign-income-and-tax",
      title: "Foreign income considerations while based in Singapore",
      description:
        "High-level orientation on foreign-sourced income themes for mobile professionals — and when to get personalised advice.",
      journey: "living",
      citations: [C.iras, C.irasRes],
      relatedGuides: ["iras-tax-residency-filing", "remittances-singapore"],
    },
    `
Mobile careers create overlapping tax questions: equity vesting from a foreign parent, rental income abroad, or consulting on the side.

Singapore’s treatment of foreign-sourced income depends on specifics (remittance, residency, exemptions, and anti-avoidance contexts). Forum answers are not filings.

## Practical stance

- Keep clean records of foreign income and remittances
- Align employer equity reporting early
- Engage a cross-border tax adviser if you have material foreign assets or dual filing duties

<Callout title="Not personalised advice">
This guide is educational orientation. Your filing position requires advice on your facts.
</Callout>
`,
  ),

  guide(
    {
      pillar: "money",
      slug: "financial-planning-year-one",
      title: "Financial planning for your first year in Singapore",
      description:
        "Emergency buffers, FX strategy, insurance gaps, and the first-year mistakes that are expensive to unwind.",
      journey: "arriving",
      citations: [],
      relatedGuides: [
        "cost-of-living-by-household",
        "health-insurance-expat",
      ],
    },
    `
Year one is for scaffolding, not optimisation cosplay.

## Build first

- 3–6 months essential expenses in accessible cash (higher if your pass is volatile)
- Clear view of insurance deductibles
- Automatic rent + utilities payments
- Remittance plan that does not strand you before payday

## Defer

Complex offshore structures, aggressive property FOMO, and interlocking products sold at networking events. Stability first; sophistication later.
`,
  ),
];
