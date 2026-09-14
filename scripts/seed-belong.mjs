import { C, guide } from "./seed-lib.mjs";

export const belongGuides = [
  guide(
    {
      pillar: "belong",
      slug: "membership-clubs-comparison",
      title: "Membership clubs in Singapore: how to compare",
      description:
        "American, Tanglin, British, Hollandse, Swiss and peers — what you are really buying, waitlists, and cost-per-use thinking.",
      journey: "living",
      citations: [],
      relatedGuides: [
        "american-club-vs-tanglin",
        "sports-fitness-singapore",
      ],
      sponsorSlot: {
        enabled: true,
        category: "clubs",
        disclosure: "Featured club partner",
      },
    },
    `
Clubs sell belonging with a facilities brochure. Compare them like a product.

## Comparison axes

| Axis | Questions |
| --- | --- |
| Geography | Will you actually go midweek? |
| Demographics | Families vs corporate vs nationality skew |
| Facilities | Pool, tennis, F&B, kids clubs you will use |
| Transferability | What happens when you leave Singapore? |
| Fees | Entrance + monthly + spending minimums |

## Waitlists

Popular clubs can take years. Some employers hold corporate memberships — ask before you pay personally.
`,
  ),

  guide(
    {
      pillar: "belong",
      slug: "american-club-vs-tanglin",
      title: "American Club vs Tanglin Club: a practical comparison",
      description:
        "Two frequently shortlisted clubs — culture, location, and who each tends to fit — without brochure gloss.",
      journey: "living",
      citations: [],
      relatedGuides: [
        "membership-clubs-comparison",
        "find-my-people-singapore",
      ],
    },
    `
These two appear on many American and broader Western family shortlists — for different reasons.

## American Club (Claymore / Orchard fringe)

- Strong F&B and events density
- Convenient for Orchard / River Valley lives
- US-leaning community with international members

## Tanglin Club

- Heritage atmosphere and sporting life
- Different membership culture and facilities mix
- Geography suits Bukit Timah / Tanglin sides differently than Claymore

Tour both at the times you would actually use them (Saturday kids swim vs Tuesday lunch). Marketing tours at 11:00 on a quiet weekday lie.
`,
  ),

  guide(
    {
      pillar: "belong",
      slug: "anza-awa-associations",
      title: "ANZA, AWA, and nationality associations",
      description:
        "How Australian/NZ and American women’s (and other) associations function as soft-landing networks.",
      journey: "both",
      citations: [],
      relatedGuides: [
        "find-my-people-singapore",
        "trailing-partner-career-singapore",
      ],
    },
    `
Nationality and regional associations remain one of the fastest ways to borrow a social graph on arrival.

## What they are good for

- Playdates and partner networks
- Practical vendor recommendations (verify independently)
- Cultural holiday anchors

## What they are not

They are not HR, immigration counsel, or a substitute for Singaporean friendships long-term. Use them as on-ramps.
`,
  ),

  guide(
    {
      pillar: "belong",
      slug: "chambers-of-commerce-singapore",
      title: "Chambers of commerce for expat professionals",
      description:
        "AmCham, BritCham, European and Asian chambers — when membership is career infrastructure vs calendar clutter.",
      journey: "living",
      segments: ["entrepreneurs", "western", "asean"],
      citations: [],
      relatedGuides: [
        "trailing-partner-career-singapore",
        "entrepass-singapore",
      ],
    },
    `
Chambers are useful when you have a thesis: BD targets, sector committees, or a trailing-partner re-entry plan. They are expensive newsletters when you only attend the Christmas party.

## Choose by outcome

- Job-seeking: committees + volunteer visibility
- Founders: customer discovery events
- Corporate execs: policy briefings and peer rooms

Measure after six months: introductions made vs fees paid.
`,
  ),

  guide(
    {
      pillar: "belong",
      slug: "hash-house-harriers",
      title: "Hash House Harriers in Singapore",
      description:
        "What hashing is, how to join a kennel, and why it remains a durable social sport for newcomers.",
      journey: "living",
      citations: [],
      relatedGuides: [
        "sports-fitness-singapore",
        "find-my-people-singapore",
      ],
    },
    `
The Hash is a social trail run (or walk) with a stubborn sense of humour. Singapore has multiple kennels with different paces and cultures.

## Why newcomers like it

- Built-in weekly ritual
- Mixed nationalities
- Low performance pressure relative to racing clubs

Show up once as a guest, learn the norms, and decide if the humour fits. It is not for everyone — and that is fine.
`,
  ),

  guide(
    {
      pillar: "belong",
      slug: "religious-communities-singapore",
      title: "Religious communities for expats in Singapore",
      description:
        "Finding churches, mosques, temples, and interfaith spaces — and how congregations double as support networks.",
      journey: "both",
      citations: [],
      relatedGuides: [
        "find-my-people-singapore",
        "mental-health-resources",
      ],
    },
    `
Faith communities are often the most stable week-one belonging structure — especially for families.

## Practical notes

- Many congregations run weekday kids programmes and welcome teams
- Dress and photography norms vary by site — ask
- Interfaith respect is part of living here well

Use communities for belonging; keep medical and immigration advice with qualified professionals.
`,
  ),

  guide(
    {
      pillar: "belong",
      slug: "nationality-groups-singapore",
      title: "Nationality groups and cultural societies",
      description:
        "Beyond the big associations — how smaller nationality groups help with language, food, and festival life.",
      journey: "living",
      citations: [],
      relatedGuides: [
        "anza-awa-associations",
        "find-my-people-singapore",
      ],
    },
    `
If your passport is not American/Australian/British, your people are still here — sometimes in quieter Facebook groups, embassy cultural arms, language schools, and restaurant tables.

## How to find them

- Embassy cultural event lists
- Language exchange meetups
- Sport teams organised by nationality
- Festival volunteer calls

Show up twice. Belonging rarely happens on the first coffee.
`,
  ),

  guide(
    {
      pillar: "belong",
      slug: "lgbtq-resources-singapore",
      title: "LGBTQ+ resources and realities for expats in Singapore",
      description:
        "Community spaces, legal context at a high level, workplace caution, and how to find affirming networks.",
      journey: "both",
      segments: ["lgbtq"],
      citations: [],
      relatedGuides: [
        "dating-social-singapore",
        "find-my-people-singapore",
      ],
    },
    `
Singapore’s LGBTQ+ social life exists — in communities, venues, and peer networks — within a specific legal and cultural context that differs from many Western cities.

## Practical orientation

- Seek current community-led resources rather than outdated travel blogs
- Workplace disclosure is a personal risk assessment; company policy ≠ national culture
- Dating app dynamics can be abrupt in a transient city

## Care

Affirming mental health support matters. See also [mental health resources](/guides/mental-health-resources).

This guide is pastoral and practical, not legal advice. For immigration or employment questions tied to family recognition, speak to qualified counsel.
`,
  ),

  guide(
    {
      pillar: "belong",
      slug: "find-my-people-singapore",
      title: "Find my people: a belonging playbook for Singapore",
      description:
        "A 30-day plan to build weak ties into a life — clubs, hashes, volunteering, and neighbourhood routines.",
      journey: "both",
      citations: [],
      relatedGuides: [
        "membership-clubs-comparison",
        "volunteering-networks-singapore",
      ],
    },
    `
Loneliness in a functioning city is common and solvable with reps.

## 30-day playbook

1. **Week 1:** One recurring activity (sport, worship, language class)  
2. **Week 2:** One neighbourhood third place (cafe / hawker) used repeatedly  
3. **Week 3:** One association or chamber event with a specific conversation goal  
4. **Week 4:** Host something tiny — drinks on the balcony beats waiting to be invited  

Weak ties compound. Treat belonging like fitness: schedule it.
`,
  ),

  guide(
    {
      pillar: "belong",
      slug: "volunteering-networks-singapore",
      title: "Volunteering networks for expats",
      description:
        "How volunteering builds local friendships faster than networking nights — and how to choose commitments you can keep.",
      journey: "living",
      citations: [],
      relatedGuides: [
        "find-my-people-singapore",
        "trailing-partner-career-singapore",
      ],
    },
    `
Volunteering converts free time into shared purpose — and introductions that feel less transactional than business cards.

## Choose well

- Skills-based volunteering if you want professional adjacency
- Hands-on community work if you want grounding
- School PTA energy if your life already orbits campus

Start with a time-boxed commitment. Over-promising then ghosting helps no one.
`,
  ),
];
