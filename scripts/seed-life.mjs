import { C, guide } from "./seed-lib.mjs";

export const lifeGuides = [
  guide(
    {
      pillar: "life",
      slug: "mrt-bus-transport-literacy",
      title: "MRT and bus literacy for new Singapore residents",
      description:
        "How to ride with confidence — fare systems, peak realities, accessibility, and when Grab still wins.",
      journey: "arriving",
      citations: [C.lta],
      relatedGuides: [
        "converting-foreign-driving-licence",
        "apps-that-matter-singapore",
      ],
    },
    `
Singapore’s public transport is the default operating system for many expats who never owned a car at home — and for many who did.

## Basics

- MRT for radial speed; buses for last-mile and gaps
- Contactless bank cards / stored-value options are widely used — confirm current acceptance for your card
- Peak hours are genuinely peak; build buffers for school runs

<OfficialSource>
[LTA public transport pages](https://www.lta.gov.sg/content/ltagov/en/getting_around/public_transport.html) cover network and fare policy updates.
</OfficialSource>

## Etiquette that marks you as local-adjacent

Stand on the correct side of escalators, let passengers alight first, keep voices down in quiet cars where applicable, and do not block doors with luggage during rush hour.
`,
  ),

  guide(
    {
      pillar: "life",
      slug: "hawker-food-guide",
      title: "Hawker food literacy for expats",
      description:
        "How to order, what to try first, hygiene realities, and building a rotation beyond chicken rice tourism.",
      journey: "both",
      citations: [],
      relatedGuides: [
        "cost-of-living-by-household",
        "shopping-essentials-singapore",
      ],
    },
    `
Hawker centres are civic infrastructure. They are also how you stop spending S$28 on mediocre salads out of fear.

## First plate strategy

Pick one nearby centre and learn five stalls well. Consistency beats endless novelty for weeknight sanity.

## Ordering tips

- Queue etiquette matters
- “Less spice” is an allowed request
- Tray return is part of the social contract

## Beyond the starter pack

Explore Indian-Muslim, Teochew, vegetarian, and regional Indonesian/Malay stalls once chicken rice and laksa are on autopilot.
`,
  ),

  guide(
    {
      pillar: "life",
      slug: "shopping-essentials-singapore",
      title: "Shopping essentials: grocers, household, and what to import",
      description:
        "Cold storage vs wet markets vs online marts — and which home-brand comforts are worth suitcase space.",
      journey: "arriving",
      citations: [],
      relatedGuides: ["hawker-food-guide", "furnishing-rental-flat"],
    },
    `
You can buy almost anything here. The skill is knowing where the sensible version lives.

## Grocery stack

- Neighbourhood supermarket for defaults
- Wet market for produce and seafood if you cook
- Online marts for heavy water / bulk
- Specialty stores for home-country ingredients (priced as nostalgia)

## Do not over-import

Voltage, mould, and space will defeat giant appliance ambitions. Ship sentiment carefully; buy function locally.
`,
  ),

  guide(
    {
      pillar: "life",
      slug: "nightlife-social-scene",
      title: "Nightlife and social scenes in Singapore",
      description:
        "Neighbourhood textures from Keong Saik to the East Coast — and how to socialise without only revolving around work.",
      journey: "living",
      segments: ["singles", "couples"],
      citations: [],
      relatedGuides: ["dating-social-singapore", "find-my-people-singapore"],
    },
    `
Singapore’s nightlife is broader than club flyers: wine bars, live jazz, late supper culture, and neighbourhood pubs with regulars.

## Find your texture

- CBD after-work density
- Heritage-district evenings
- Hotel lobby bars for conversation volume you can hear
- Heartland kopitiams that stay honest

Pace yourself — humid nights plus early school runs punish excess more than winter cities do.
`,
  ),

  guide(
    {
      pillar: "life",
      slug: "sports-fitness-singapore",
      title: "Sports and fitness in Singapore’s climate",
      description:
        "Outdoor training heat strategies, condo gyms, clubs, and community sports that double as social life.",
      journey: "living",
      citations: [],
      relatedGuides: [
        "haze-climate-preparedness",
        "membership-clubs-comparison",
      ],
    },
    `
Heat is the conditioning. Hydration and timing are the programme.

## Practical patterns

- Dawn or late evening outdoor sessions
- Indoor strength when PSI or heat stress is ugly
- Pickleball, rugby, running clubs, and hashes as social sport

If you join a membership club for facilities, calculate cost per actual use — not aspirational calendars.
`,
  ),

  guide(
    {
      pillar: "life",
      slug: "arts-culture-singapore",
      title: "Arts and culture: a resident’s starter map",
      description:
        "Theatres, museums, festivals, and how to keep a cultural life beyond mall air-conditioning.",
      journey: "living",
      citations: [],
      relatedGuides: ["nightlife-social-scene", "weekend-getaways-from-singapore"],
    },
    `
Singapore’s cultural calendar is denser than transit-tourism suggests: Esplanade programming, museum nights, literary festivals, and neighbourhood arts centres.

## Build a habit

Pick one recurring series (theatre season, jazz night, gallery walk) so culture is scheduled like sport. Free and low-cost museum windows exist — use them in your first month to orient.
`,
  ),

  guide(
    {
      pillar: "life",
      slug: "dating-social-singapore",
      title: "Dating and social life as an expat in Singapore",
      description:
        "Apps, community events, workplace boundaries, and the particular dynamics of a transient city.",
      journey: "living",
      segments: ["singles", "lgbtq"],
      citations: [],
      relatedGuides: [
        "lgbtq-resources-singapore",
        "nightlife-social-scene",
      ],
    },
    `
Transient cities create fast intimacy and abrupt exits. Be honest about tour length; ask the same of others.

## Channels

- Apps (expect internationally mixed pools)
- Interest communities and hashes
- Friends-of-friends via colleagues — with workplace caution

## Boundaries

Keep HR-relevant relationships clean. Singapore is smaller than it looks once industries overlap.
`,
  ),

  guide(
    {
      pillar: "life",
      slug: "apps-that-matter-singapore",
      title: "Apps that matter for living in Singapore",
      description:
        "A curated stack for transit, payments, food, government services, and air quality — without installing the entire App Store.",
      journey: "arriving",
      citations: [C.singpass, C.neaHaze],
      relatedGuides: [
        "mrt-bus-transport-literacy",
        "haze-climate-preparedness",
      ],
    },
    `
## Core stack themes

- **Singpass** ecosystem for government and many banks
- Transit / maps tools you will actually open daily
- Grab or equivalent for gaps and late luggage runs
- Food delivery as occasional relief, not default budget
- Hawker / restaurant discovery apps as curiosity, not authority
- Haze / weather monitoring during Southeast Asia burning seasons

Delete ruthlessly after week two. Notification debt is a real cost of living.
`,
  ),

  guide(
    {
      pillar: "life",
      slug: "haze-climate-preparedness",
      title: "Haze, heat, and climate preparedness",
      description:
        "What PSI means for outdoor plans, masks and air purifiers, and building heat-smart household habits.",
      journey: "living",
      citations: [C.neaHaze],
      relatedGuides: [
        "sports-fitness-singapore",
        "emergencies-995-999-embassies",
      ],
    },
    `
Transboundary haze is intermittent but memorable. Heat stress is annual.

<OfficialSource>
Monitor guidance via [NEA haze resources](https://www.nea.gov.sg/our-services/pollution-control/air-pollution/haze).
</OfficialSource>

## Household kit

- N95-style masks sized for each family member
- At least one decent air purifier for sleeping rooms if haze-sensitive
- Hydration norms for kids’ outdoor CCAs

When PSI spikes, reschedule outdoor sport without drama — it is ordinary regional weather politics meeting biology.
`,
  ),

  guide(
    {
      pillar: "life",
      slug: "emergencies-995-999-embassies",
      title: "Emergencies: 995, 999, and embassy contacts",
      description:
        "What to dial for medical vs police emergencies, condo incident basics, and consular help limits.",
      journey: "both",
      citations: [C.scdf, C.spf],
      relatedGuides: [
        "healthcare-gp-hospital",
        "mental-health-resources",
      ],
    },
    `
## Numbers to know cold

- **995** — fire / ambulance / civil defence medical emergencies (SCDF)
- **999** — police emergencies

Confirm the current guidance for your situation; teach children and helpers the address of your block in clear English.

## Embassies

Consular services help with lost passports and welfare — they do not override Singapore law or pay your medical bills. Save your mission’s contact alongside insurers.

<OfficialSource>
See [SCDF](https://www.scdf.gov.sg/) and [Singapore Police Force](https://www.police.gov.sg/) for official emergency information.
</OfficialSource>
`,
  ),

  guide(
    {
      pillar: "life",
      slug: "weekend-getaways-from-singapore",
      title: "Weekend getaways from Singapore",
      description:
        "Ferry, flight, and causeway patterns — Batam, Desaru, KL, Bangkok — with realistic departure timing.",
      journey: "living",
      citations: [],
      relatedGuides: [
        "apps-that-matter-singapore",
        "cost-of-living-by-household",
      ],
    },
    `
The city’s greatest lifestyle feature may be how quickly you can leave it.

## Patterns

- Batam / Bintan for short ferry resets
- JB / Desaru with causeway timing discipline
- KL and Bangkok for cheap flight density
- Longer hauls home at term breaks only if school calendars allow

Build buffers for checkpoint queues. A “quick” JB run can become a half-day if you ignore peak timing.
`,
  ),

  guide(
    {
      pillar: "life",
      slug: "what-to-wear-singapore-climate",
      title: "What to wear in Singapore’s climate",
      description:
        "Fabric realities, office AC survival, and how to stop freezing indoors while melting outdoors.",
      journey: "arriving",
      citations: [],
      relatedGuides: [
        "haze-climate-preparedness",
        "shopping-essentials-singapore",
      ],
    },
    `
Outdoor heat meets indoor Arctic aircon. Layering is not a winter metaphor here — it is a cardigan in your bag.

## Practical wardrobe

- Breathable natural or technical fabrics
- A light layer for offices and malls
- Respectful coverage for certain religious sites and government buildings
- Shoe choices that survive sudden rain

Skip shipping an entire temperate wardrobe. Humidity will vote it off the island.
`,
  ),
];
