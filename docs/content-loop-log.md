# Content loop log

Short running log of research → gap analysis → shipped editorial. No monetization expansion in these ticks.

**Standing order:** after each loop tick, audit then merge PR to main.

---

## Loop C — Home + Life (parallel) — Tick 29 — 2026-09-15

Branch: `cursor/home-life-tick29-2739` → PR to `main`. Owns **Home** + **Life** guides and neighbourhood entities only. Fresh worktree off `origin/main` while #71 (C25), #88 (C26), #96 (C27), and #104 (C28) stay open for the merge controller — **did not** touch those PR paths (HDB neighbour reno / lightning / Hougang–Bukit Batok–Marine Parade; void-deck / power outages / Jurong West–CCK–Sembawang; condo unit reno / secondhand smoke / Bukit Panjang–Boon Lay–Geylang; PUB pipe works / ActiveSG pools / Kallang–Bendemeer–Potong Pasir). Topics: SP Group utilities bill disputes, ActiveSG stadiums / indoor courts, MacPherson / Tai Seng / Paya Lebar.

### Sources mined

**Reddit / forums**

- r/askSingapore — SP bill spikes after estimated reads, landlord WhatsApp “utilities $280” recharges, OEM promo cliffs.
- r/askSingapore — ActiveSG Standard Rate for foreigners booking stadium tracks and badminton halls; MyActiveSG+ Singpass friction; condo court ghost bookings.
- r/askSingapore — central-east shortlists for MacPherson / Tai Seng / Paya Lebar vs Dakota premiums and Geylang-edge variance.

**Official**

- [SP Group residential utilities](https://www.spgroup.com.sg/our-services/utilities/quick-guide-to-your-utilities-residential) + [open account](https://openaccount.spgroup.com.sg/#/open-account/).
- [OEM making the switch](https://www.openelectricitymarket.sg/residential/making-the-switch) + [price comparison](https://compare.openelectricitymarket.sg/#/home) + [EMA OEM FAQ](https://www.ema.gov.sg/resources/faqs/electricity/open-electricity-market/what-is-the-open-electricity-market).
- [PUB leak tips PDF](https://www.pub.gov.sg/-/media/Images/Feature/Content-Pages/Resources/Publications/Pdfs/Tips_on_Finding_Leaks.pdf).
- [ActiveSG individual rates](https://www.activesgcircle.gov.sg/facilities/individual-rates) + [MyActiveSG+](https://www.activesgcircle.gov.sg/myactivesg-plus) + [facilities](https://www.activesgcircle.gov.sg/facilities).

### Gaps vs open #71 / #88 / #96 / #104

Open PRs own reno/lightning/void-deck/power/condo-unit-reno/secondhand-smoke/PUB-water/ActiveSG-pools and their town sets. Remaining high-intent Home+Life gaps without collision: **SP bill disputes / estimated reads / OEM shock** (≠ power outages, ≠ PUB pipe works), **ActiveSG stadiums and indoor courts** (≠ pools, ≠ gym multipass FAQ), plus neighbourhood depth for **MacPherson**, **Tai Seng**, and **Paya Lebar**.

### Shipped this tick

**New guides**

- `content/guides/home/sp-utilities-bill-disputes-renters.mdx`
- `content/guides/life/activesg-stadium-indoor-courts-singapore.mdx`

**Upgraded guides** (paths not in open C stack)

- `content/guides/home/mould-humidity-rental-tenants.mdx`
- `content/guides/home/aircon-pest-renewals.mdx`
- `content/guides/life/cycling-active-mobility-singapore.mdx`
- `src/lib/site.ts` (SP bill disputes + ActiveSG stadium/courts topics; neighbourhood blurb)

**Neighbourhood entity depth**

- `content/entities/neighbourhoods/macpherson.json`
- `content/entities/neighbourhoods/tai-seng.json`
- `content/entities/neighbourhoods/paya-lebar.json`

### Explicitly not done

- No ads/monetization expansion.
- No Grok / third-party clone content.
- Did not edit Move/Money/Family/Belong/Next guides.
- Did not touch #71 / #88 / #96 / #104 file paths.
- Did not re-litigate Tick 19–28 topics beyond cross-links on safe files.

### Questions mined (sample)

1. Why did my SP bill double after a quiet quarter?
2. Who should hold the SP account — landlord or tenant?
3. Can I withhold rent over a disputed utilities line?
4. What is an estimated meter reading?
5. Does OEM protect foreigners from bill shock?
6. Can foreigners book ActiveSG stadium tracks at Standard Rate?
7. Is track entry the same product as ActiveSG gym?
8. Why are evening badminton halls always full?
9. MacPherson vs Tai Seng — HDB fringe or industrial-edge CCL?
10. Is Paya Lebar worth the interchange premium vs MacPherson?

---

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 35)

Branch: `cursor/loop-d-next-polish-tick35-d996` → draft PR to `main`, off tip [#289](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/289) (merged into main). Owns **Next** companions plus light About / Editorial polish. Cross-linked Move / Next parents for ONE Pass outstanding-achievements evidence, EP job-change IR21 withhold, and PEP exit timing.

**Merge order note (controller):** `#289 → this tip` (prior open D tips merged).

### Sources mined

**Reddit / forums**

- r/askSingapore — “ONE Pass outstanding track is just awards on LinkedIn.”
- r/askSingapore — “Changing jobs in Singapore means no IR21.”
- r/askSingapore — “PEP renews quietly if income stays high.”

**Official**

- [MOM — ONE Pass eligibility](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/eligibility)
- [IRAS — Tax clearance](https://www.iras.gov.sg/taxes/individual-income-tax/employees/tax-clearance-for-foreign-employees) · [MOM — Change jobs](https://www.mom.gov.sg/passes-and-permits/employment-pass/change-jobs)
- [MOM — PEP](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass) · [Cancel PEP](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass/cancel-a-pass)

### Gaps vs prior tip

#289 covered age-band salary, S Pass levy/quota, DP LOC chooser. Remaining Next gaps: **ONE Pass achievements evidence**, **EP job-change IR21 withhold**, **PEP exit timing**.

### Shipped

**New:** `one-pass-outstanding-achievements-evidence-singapore.mdx`, `ep-job-change-ir21-withhold-edges-singapore.mdx`, `pep-exit-to-ep-or-pr-timing-singapore.mdx`

**Upgraded:** ONE Pass, changing jobs on EP, PEP, chooser, between-jobs STVP, IR21 sequencing (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No force-push to main.
- Tip #289 already on main; did not wait on other loops.
- content-loop-log: prepend only.

### Questions mined

1. Do LinkedIn awards clear the ONE Pass outstanding track?
2. Is outstanding-achievements a substitute for S$30k fixed monthly?
3. Can Tech.Pass company letters double as ONE Pass achievements proof?
4. Does a same-city EP hop skip IR21?
5. Can the new employer unlock old final pay faster?
6. When should the old EP be cancelled relative to new IPA?
7. Does PEP renew like an Employment Pass?
8. How early should PEP holders stage an employer EP?
9. Do keep-rule dips force an earlier PEP exit?
10. Is a last-month ONE Pass flip a safe PEP exit?

---

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 29)

Branch: `cursor/e-journeys-tools-tick29-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. **Opened off tip #290** (`cursor/e-journeys-tools-tick28-fa4f`) — did not wait for #290 or earlier E drafts to merge. Avoided open E stack exclusives through **#290** (E28): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**), gym-membership-freeze / school-leavers-fee (**#225**), childcare-infant-care / fibre-broadband-etf (**#233**), parking-iu-erp / tuition-centre-bond (**#243**), workplace-access / clinic-deposit (**#253**), condo-bike-storage / insurance-portability (**#263**), condo-ev-charger / school-cca-kit (**#273**), utility-meter-photo / school-exam-ib (**#281**), condo-visitor-parking / helper-levy-final (**#290**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → #225 → #233 → #243 → #253 → #263 → #273 → #281 → #290 → this tip**. Soft hubs / content-loop-log: **prepend**.

### Sources mined

**Reddit / forums**

- Condo leaver threads — missing lift fobs billed after flight; helper spare cards left in drawers; carpark tags treated as lost without a return receipt.
- Money exit threads — e-statement portals locked after account close; branch reprint fees for 24-month packs; Singpass 2FA lost mid-download.

**Official / orientation**

- Estate MCST / managing-agent access-card deposit schedules (estate-specific)
- Bank e-statement retention / reprint desks (bank-specific)

### Gaps vs open E stack through #290

Open tips through **#290** cover mail/HDB through visitor parking / helper levy. Remaining high-intent gaps **off those path sets**: **condo access-card / fob deposit clear**, **bank statement archive sketch**. No calendar JSON. Distinct from workplace-access-exit and condo-visitor-qr — this tick owns resident physical tokens and deposits. Distinct from bank-exit-closure — this tick owns statement archive cash/time before close, not the full account-closure playbook. Distinct from cpf-withdrawal — archive tooling only.

### Shipped this tick

**Journeys**

- `content/journeys/condo-access-card-deposit.json` + `/journeys/condo-access-card-deposit`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/bank-statement-archive.ts`
- `src/components/tools/BankStatementArchiveCalculator.tsx`
- `/tools/bank-statement-archive` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch exclusives through #290.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Does key return count as fob return without a stamped list?
2. Are helper spare cards on a separate deposit line?
3. How many months do banks keep self-serve PDFs after close?
4. Do reprint fees apply per statement or per request pack?
5. Will Singpass SIM change lock the portal mid-archive?

---

## Loop E — Journeys / tools — 2026-09-15 (tick 28)

Branch: `cursor/e-journeys-tools-tick28-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. **Opened off tip #281** (`cursor/e-journeys-tools-tick27-fa4f`) — did not wait for #281 or earlier E drafts to merge. Avoided open E stack exclusives through **#281** (E27): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**), gym-membership-freeze / school-leavers-fee (**#225**), childcare-infant-care / fibre-broadband-etf (**#233**), parking-iu-erp / tuition-centre-bond (**#243**), workplace-access / clinic-deposit (**#253**), condo-bike-storage / insurance-portability (**#263**), condo-ev-charger / school-cca-kit (**#273**), utility-meter-photo / school-exam-ib (**#281**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → #225 → #233 → #243 → #253 → #263 → #273 → #281 → this tip**. Soft hubs / content-loop-log: **prepend**.

### Sources mined

**Reddit / forums**

- Condo leaver threads — visitor overnight bay still billed after keys returned; loading-bay QR left live for movers who already finished.
- Helper / FDW threads — final-month levy vs mid-month cancel folklore; transfer-day who-pays-levy confusion.

**Official / orientation**

- Estate MCST / managing-agent visitor parking and loading-bay rules (estate-specific)
- MOM FDW levy concession / cancellation timing (employer-specific)

### Gaps vs open E stack through #281

Open tips through **#281** cover mail/HDB through utility meter photos / exam deposits. Remaining high-intent gaps **off those path sets**: **condo visitor parking / loading-bay clear**, **helper levy final-month sketch**. No calendar JSON. Distinct from parking-iu-erp — this tick owns visitor / guest bay and loading slots, not personal IU/ERP. Distinct from helper-handoff-exit — this tick owns final-month levy cash sketch, not the full handoff playbook.

### Shipped this tick

**Journeys**

- `content/journeys/condo-visitor-parking-clear.json` + `/journeys/condo-visitor-parking-clear`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/helper-levy-final-month.ts`
- `src/components/tools/HelperLevyFinalMonthCalculator.tsx`
- `/tools/helper-levy-final-month` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch exclusives through #281.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Does returning unit keys cancel a reserved visitor overnight bay?
2. Is a loading-bay QR separate from lobby guest QR?
3. Who pays levy on an FDW transfer day?
4. Does mid-month cancel actually pro-rate the levy?
5. Are lost visitor tags billed against the renovation deposit?

---

## Loop E — Journeys / tools — 2026-09-15 (tick 27)

Branch: `cursor/e-journeys-tools-tick27-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. **Opened off tip #273** (`cursor/e-journeys-tools-tick26-fa4f`) — did not wait for #273 or earlier E drafts to merge. Avoided open E stack exclusives through **#273** (E26): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**), gym-membership-freeze / school-leavers-fee (**#225**), childcare-infant-care / fibre-broadband-etf (**#233**), parking-iu-erp / tuition-centre-bond (**#243**), workplace-access / clinic-deposit (**#253**), condo-bike-storage / insurance-portability (**#263**), condo-ev-charger / school-cca-kit (**#273**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → #225 → #233 → #243 → #253 → #263 → #273 → this tip**. Soft hubs / content-loop-log: **prepend**.

### Sources mined

**Reddit / forums**

- Leaver threads — landlord disputes over estimated SP reads after keys returned; meter cupboard photos as the only defence.
- School leaver threads — IB / IGCSE deposits and sitting fees still open after flight tickets; late-cancel windows misunderstood.

**Official / orientation**

- SP Group / PUB final meter appointment practice (account-specific)
- School exam / IB cashier refund schedules (handbook-specific)

### Gaps vs open E stack through #273

Open tips through **#273** cover mail/HDB through EV charger / CCA kit. Remaining high-intent gaps **off those path sets**: **utility meter photo handoff** (deeper than account-closure utility-exit), **school exam / IB deposit sketch**. No calendar JSON. Distinct from `/journeys/utility-exit-handover` — this tick owns dated meter-photo evidence and dispute float. Distinct from `/tools/school-deposit-clawback` and `/tools/school-cca-kit-bond` — this tick owns exam / IB sitting deposits, not tuition clawback or CCA kit bonds.

### Shipped this tick

**Journeys**

- `content/journeys/utility-meter-photo-handoff.json` + `/journeys/utility-meter-photo-handoff`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/school-exam-ib-deposit.ts`
- `src/components/tools/SchoolExamIbDepositCalculator.tsx`
- `/tools/school-exam-ib-deposit` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch exclusives through #273.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Do dated phone photos hold in a landlord meter dispute?
2. What if SP’s final appointment lands after key handover?
3. Are IB deposits refundable after the published cancel window?
4. Do sitting fees stack on top of a forfeited deposit?
5. Which adult login still owns the SP app after SIM change?

---

## Loop E — Journeys / tools — 2026-09-15 (tick 26)

Branch: `cursor/e-journeys-tools-tick26-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (Loop D29 tip). **Did not wait for merges or CI on prior tips including #263.** Avoided open E stack exclusives through **#263** (E25): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**), gym-membership-freeze / school-leavers-fee (**#225**), childcare-infant-care / fibre-broadband-etf (**#233**), parking-iu-erp / tuition-centre-bond (**#243**), workplace-access / clinic-deposit (**#253**), condo-bike-storage / insurance-portability (**#263**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → #225 → #233 → #243 → #253 → #263 → this tip**.

### Sources mined

**Reddit / forums**

- Condo leaver threads — reserved EV bays still billed after keys returned; RFID tags treated as lost; visitor-charging PINs left live.
- School leaver threads — CCA instruments / sports kits held past flight week; damage holds netted against kit bonds.

**Official / orientation**

- Estate MCST / managing-agent EV bay and RFID return rules (estate-specific)
- School CCA / band store kit bond schedules (handbook-specific)

### Gaps vs open E stack through #263

Open tips through **#263** cover mail/HDB, helper/club, bus/insurance, visitor QR/device, locker/pet, gym/leavers, childcare/fibre, parking IU/tuition, workplace/clinic, bike storage/insurance portability. Remaining high-intent gaps **off those path sets**: **condo EV charger / lot clear**, **school CCA kit bond sketch**. No calendar JSON. Distinct from `/journeys/condo-visitor-qr-exit` and parking-iu-erp — this tick owns EV bay / wallbox / RFID clear. Distinct from `/tools/school-device-bond` — this tick owns CCA / instrument kit bonds, not 1:1 devices.

### Shipped this tick

**Journeys**

- `content/journeys/condo-ev-charger-clear.json` + `/journeys/condo-ev-charger-clear`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/school-cca-kit-bond.ts`
- `src/components/tools/SchoolCcaKitBondCalculator.tsx`
- `/tools/school-cca-kit-bond` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch exclusives through #263.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Does returning unit keys auto-release a reserved EV bay?
2. Is the wallbox estate property or landlord fit-out?
3. Are visitor-charging PINs separate from lobby guest QR?
4. Do CCA kit bonds settle on a different desk than device bonds?
5. What overdue fee applies after the published instrument return date?

---

---

---

---

## Loop B — Family + Belong (tick 36) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick36-8971` → tip PR off [#277](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/277) (tick 35). Owns **Family** + **Belong** plus light schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #277. Shared log + `site.ts` only (prepend on conflict). Did not wait for #277 merge/CI. No force-push to `main`.

### Sources mined

**Reddit / forums**

- r/askSingapore — night cough vs asthma; PE whistle days; empty spacers.
- r/askSingapore — open-house portals close mid-board-meeting; deposit vibes.
- r/askSingapore — dojo benches as the real weekday parent meetup.

**Official**

- [HealthHub asthma in children](https://www.healthhub.sg/a-z/diseases-and-conditions/asthma-in-children) + [MOH](https://www.moh.gov.sg/) + [NEA](https://www.nea.gov.sg/)
- [MOE international schools](https://www.moe.gov.sg/international-schools) + [Parent Hub](https://www.moe.gov.sg/parent-hub)
- [ActiveSG](https://www.activesg.gov.sg/) + [Sport Singapore](https://www.sportsingapore.gov.sg/)

### Gaps vs prior Loop B ticks

Ticks 1–35 (open tip #277) covered impetigo, book week, gymnastics waiting, gastro, residential camps, dance waiting. Remaining heat without contested paths: **asthma-flare coverage**, **IS open-house / tour ops**, **martial-arts dojo waiting belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-kids-asthma-flare-coverage-singapore.mdx`
- `content/guides/family/international-school-open-house-tour-ops-dual-career-singapore.mdx`
- `content/guides/belong/martial-arts-dojo-waiting-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open #270–#277 paths)

- kids myopia control, school-holiday coverage, public-holiday school-closed coverage, helper rest-day coverage, mall indoor-playground belonging, supermarket evening belonging, wet-market morning belonging
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- GESS, Dover Court, Nexus International, SMG, AIA Singapore, Comfort Employment

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #270–#277 guide/entity paths.
- No force-push to `main`.

### Questions mined (sample)

1. Who owns overnight inhaler checks?
2. Where is the school spacer right now?
3. When does the open-house portal close?
4. Who owns the tour question script?
5. Same dojo bench next week?
6. Is PE/swim paused in writing?
7. Hard deposit / fee-stack cap?
8. Helper rest day vs open-house Sunday?

---

# Content loop log

Short running log of research → gap analysis → shipped editorial. No monetization expansion in these ticks.

**Standing order:** after each loop tick, audit then merge PR to main.

---

---

---

# Content loop log

Short running log of research → gap analysis → shipped editorial. No monetization expansion in these ticks.

**Standing order:** after each loop tick, audit then merge PR to main.

---

## Loop B — Family + Belong (tick 35) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick35-8971` → tip PR off [#270](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/270) (tick 34). Owns **Family** + **Belong** plus light schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #270. Shared log + `site.ts` only (prepend on conflict). Did not wait for #270 merge/CI. No force-push to `main`.

### Sources mined

**Reddit / forums**

- r/askSingapore — crusty sores vs mosquito bites; swim bans; towel folklore.
- r/askSingapore — book-week costume blackouts; author-visit call times; PayNow book bundles.
- r/askSingapore — gymnastics viewing glass as the real weekday parent meetup.

**Official**

- [HealthHub impetigo](https://www.healthhub.sg/a-z/diseases-and-conditions/impetigo) + [MOH](https://www.moh.gov.sg/) + [ECDA](https://www.ecda.gov.sg/)
- [MOE Parent Hub](https://www.moe.gov.sg/parent-hub) + [international schools](https://www.moe.gov.sg/international-schools) + [NLB](https://www.nlb.gov.sg/)
- [ActiveSG](https://www.activesg.gov.sg/) + [Sport Singapore](https://www.sportsingapore.gov.sg/) + [NEA](https://www.nea.gov.sg/)

### Gaps vs prior Loop B ticks

Ticks 1–34 (open tip #270) covered gastro, residential camps, dance waiting, pink-eye, concert, music waiting. Remaining heat without contested paths: **impetigo exclusion**, **IS book week / author-visit ops**, **gymnastics-studio waiting belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-kids-impetigo-school-exclusion-singapore.mdx`
- `content/guides/family/international-school-book-week-author-visit-ops-dual-career-singapore.mdx`
- `content/guides/belong/gymnastics-studio-waiting-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open #270 paths)

- exam-week coverage, preschool/childcare, orientation week, parent-teacher conference, hawker breakfast belonging, community-centre belonging, void-deck kopi belonging
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- Singapore American School, Chatsworth International, ISS International, Raffles Medical, FDW agencies, Nation Employment

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #270 guide/entity paths.
- No force-push to `main`.

### Questions mined (sample)

1. Who owns daytime dressing changes?
2. Is the return rule written?
3. What is the book-week call time and gate?
4. Which adult owns the author-visit seat?
5. Same gymnastics glass next week?
6. Is swim/mat sport paused in writing?
7. Hard wallet cap for book bundles?
8. Helper rest day vs book-week volunteer?

---

# Content loop log

Short running log of research → gap analysis → shipped editorial. No monetization expansion in these ticks.

**Standing order:** after each loop tick, audit then merge PR to main.

---

---

---

---

## Loop C — Home + Life (parallel) — Tick 28 — 2026-09-15

Branch: `cursor/home-life-tick28-2739` → PR to `main`. Owns **Home** + **Life** guides and neighbourhood entities only. Fresh worktree off `origin/main` while #71 (C25), #88 (C26), and #96 (C27) stay open for the merge controller — **did not** touch those PR paths (HDB neighbour reno / lightning / Hougang–Bukit Batok–Marine Parade; void-deck / power outages / Jurong West–CCK–Sembawang; condo unit reno / secondhand smoke / Bukit Panjang–Boon Lay–Geylang). Topics: PUB water disruption / pipe works for renters, ActiveSG swimming pools, Kallang / Bendemeer / Potong Pasir.

### Sources mined

**Reddit / forums**

- r/askSingapore — PUB pipe replacement notices, sudden no-water mornings, yellow water after mains works, landlord vs PUB blame.
- r/askSingapore — ActiveSG pool Standard Rate for foreigners, MyActiveSG+ lane booking, which centres have serious lap ropes.
- r/askSingapore — central-east shortlists for Kallang / Bendemeer / Potong Pasir vs River Valley premiums and Geylang variance.

**Official**

- [PUB](https://www.pub.gov.sg/) disruption / water-quality pages + [leak tips PDF](https://www.pub.gov.sg/-/media/Images/Feature/Content-Pages/Resources/Publications/Pdfs/Tips_on_Finding_Leaks.pdf).
- [SP Group residential utilities](https://www.spgroup.com.sg/our-services/utilities/quick-guide-to-your-utilities-residential).
- [ActiveSG individual rates](https://www.activesgcircle.gov.sg/facilities/individual-rates) + [MyActiveSG+](https://www.activesgcircle.gov.sg/myactivesg-plus) + membership pages.
- [OneService](https://www.oneservice.gov.sg/).

### Gaps vs open #71 / #88 / #96 and Tick 24 on main

Tick 24 on main covers HIP / deposit-return / ActiveSG **gym** FAQ depth / Serangoon–Pasir Ris–Yishun. Open PRs own reno/lightning/void-deck/power/condo-unit-reno/secondhand-smoke and their town sets. Remaining high-intent Home+Life gaps without collision: **PUB pipe works / water disruption for renters** (≠ power outages, ≠ floods), **ActiveSG swimming pools** (≠ gym multipass FAQ already on sports guide), plus neighbourhood depth for **Kallang**, **Bendemeer**, and **Potong Pasir**.

### Shipped this tick

**New guides**

- `content/guides/home/pub-water-disruption-pipe-works-renters.mdx`
- `content/guides/life/activesg-swimming-pools-singapore.mdx`

**Upgraded guides**

- `content/guides/home/utilities-telecom-setup.mdx`
- `content/guides/home/heartland-living-for-expats.mdx`
- `content/guides/home/choosing-neighbourhood-expat.mdx`
- `content/guides/home/hdb-ceiling-leak-tenants.mdx`
- `content/guides/life/sports-fitness-singapore.mdx`
- `content/guides/life/flash-floods-singapore-renters.mdx`
- `content/guides/life/apps-that-matter-singapore.mdx`
- `src/lib/site.ts` (PUB water + ActiveSG pools topics; neighbourhood blurb)

**Neighbourhood entity depth**

- `content/entities/neighbourhoods/kallang.json`
- `content/entities/neighbourhoods/bendemeer.json`
- `content/entities/neighbourhoods/potong-pasir.json`

### Explicitly not done

- No ads/monetization expansion.
- No Grok / third-party clone content.
- Did not edit Move/Money/Family/Belong/Next guides.
- Did not touch #71 / #88 / #96 file paths.
- Did not re-litigate Tick 19–24 topics beyond cross-links.

### Questions mined (sample)

1. Who do I call when only my flat has no water?
2. Is yellow water after pipe works unsafe?
3. Will PUB or my landlord pay for a hotel during shut-off?
4. Can foreigners lap-swim at ActiveSG on Standard Rate?
5. Do I need MyActiveSG+ to get a lane at 7pm?
6. Which is cheaper long-term — condo pool rent or ActiveSG laps?
7. Kallang vs Bendemeer — stadium energy or quieter stacks?
8. Is Potong Pasir too small for a family HDB search?
9. How do pipe works interact with ceiling leak claims?
10. Are flash floods the same as PUB shut-offs?

---

---

## Loop C — Home + Life (parallel) — Tick 27 — 2026-09-15

Branch: `cursor/home-life-tick27-2739` → PR to `main`. Owns **Home** + **Life** guides and neighbourhood entities only. Fresh worktree off `origin/main` while Tick 25 (#71) and Tick 26 (#88) stay open for the merge controller — **did not** touch #71 reno/lightning/Hougang–Bukit Batok–Marine Parade or #88 void-deck/power-outage/Jurong West–Choa Chu Kang–Sembawang paths. Topics: condo unit renovation notices for adjacent tenants, secondhand smoke neighbour rails, Bukit Panjang / Boon Lay / Geylang.

### Sources mined

**Reddit / forums**

- r/askSingapore — condo stack renovation notices, weekday hacking, MA “cannot help” replies, dust / water shut-off adjacency.
- r/askSingapore — balcony / service-yard secondhand smoke drift, OneService vs “smoking at home is legal,” CMC / CDRT folklore.
- r/askSingapore — northwest / west / central-east shortlists for Bukit Panjang, Boon Lay, Geylang (vs Jurong East / Woodlands / Katong premiums).

**Official**

- [NEA — Renovation noise in residential areas](https://www.nea.gov.sg/our-services/pollution-control/noise-pollution/construction-noise-control/information-on-noise-from-renovation-work-in-residential-areas) (condo unit reno → MCST).
- [BCA — BMSM prescribed by-laws](https://www.bca.gov.sg/publications/BMSM/BM_strata_mgt_reg.html) + [common private-estate issues](https://www1.bca.gov.sg/guidelines-and-requirements/common-issues-or-disputes-encountered-by-residents-in-private-estates/).
- [NEA — Smoking prohibition](https://www.nea.gov.sg/our-services/public-cleanliness/smoking-prohibition) + [HDB common areas](https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/keeping-common-areas-safe-and-pleasant).
- [CMC](https://www.mlaw.gov.sg/conflict-minimisation/cmc/) + [CDRT eligibility](https://www.judiciary.gov.sg/civil/cases-eligible-neighbour-dispute-claim) + [MCCY disputes framework](https://www.mccy.gov.sg/sectors/community/community-disputes-management-framework/).
- [OneService](https://www.oneservice.gov.sg/).

### Gaps vs open #71 / #88 and Tick 24 on main

Tick 24 on main covers HIP / deposit-return / ActiveSG FAQ / Serangoon–Pasir Ris–Yishun. #71 (open) owns HDB neighbour reno + lightning + Hougang/Bukit Batok/Marine Parade. #88 (open) owns void-deck / common-property + SP Group outages + Jurong West/CCK/Sembawang. Remaining high-intent Home+Life gaps without collision: **condo unit renovation notices for adjacent tenants** (≠ HDB unit reno, ≠ void deck), **secondhand smoke neighbour rails** (≠ vaping illegality guide), plus neighbourhood depth for **Bukit Panjang**, **Boon Lay**, and **Geylang**.

### Shipped this tick

**New guides**

- `content/guides/home/condo-unit-renovation-adjacent-tenants.mdx`
- `content/guides/life/secondhand-smoke-neighbours-singapore.mdx`

**Upgraded guides**

- `content/guides/home/condo-noise-mcst-neighbours.mdx`
- `content/guides/home/heartland-living-for-expats.mdx`
- `content/guides/home/choosing-neighbourhood-expat.mdx`
- `content/guides/home/construction-site-noise-renters.mdx`
- `content/guides/life/vaping-tobacco-laws-foreigners.mdx`
- `content/guides/life/apps-that-matter-singapore.mdx`
- `src/lib/site.ts` (condo unit reno + secondhand smoke topics; neighbourhood blurb)

**Neighbourhood entity depth**

- `content/entities/neighbourhoods/bukit-panjang.json`
- `content/entities/neighbourhoods/boon-lay.json`
- `content/entities/neighbourhoods/geylang.json`

### Explicitly not done

- No ads/monetization expansion.
- No Grok / third-party clone content.
- Did not edit Move/Money/Family/Belong/Next guides.
- Did not touch #71 or #88 file paths.
- Did not re-litigate Tick 19–24 topics beyond cross-links.

### Questions mined (sample)

1. Does an MCST reno notice mean unlimited weekday drilling?
2. Who enforces after-hours condo hacking — NEA or the MA?
3. Can I break my lease because the upstairs unit is renovating?
4. Is balcony cigarette smoke illegal if it enters my flat?
5. When is OneService the right rail vs CMC for smoke drift?
6. Does vaping next door change the complaint path?
7. Bukit Panjang vs Choa Chu Kang — when does DTL win over NSL?
8. Is Boon Lay worth it for west-office value without Jurong East premiums?
9. How do I vet a Geylang block before LOI?
10. Condo reno dust — inventory claim or just tolerate?

---

---

## Loop C — Home + Life (parallel) — Tick 26 — 2026-09-15

Branch: `cursor/home-life-tick26-2739` → PR to `main`. Owns **Home** + **Life** guides and neighbourhood entities only. Fresh worktree off `origin/main` while Tick 25 (#71) stays open — **did not** touch #71 reno / lightning / Hougang–Bukit Batok–Marine Parade paths. Topics: HDB void-deck / common-property disputes, SP Group power-outage living, Jurong West / Choa Chu Kang / Sembawang (+ Woodlands refresh). Also restores Home HIP / deposit-return `site.ts` topics clobbered by intervening loops.

### Sources mined

**Reddit / forums**

- r/askSingapore + r/singapore — recurring HDB void-deck wedding / funeral / karaoke noise, corridor clutter & bicycle obstruction, BBQ-pit smoke drift (tenant escalation folklore → OneService / Town Council).
- r/askSingapore — block-level power trips, high-floor lift outages, spoiled freezer food after feeder faults (SP Group vs in-unit RCD confusion).
- r/askSingapore — west / north heartland shortlists comparing Jurong West vs Jurong East, Choa Chu Kang NSL family value, Sembawang vs Woodlands Causeway trade-offs.

**Official**

- [OneService](https://www.oneservice.gov.sg/) + [HDB — keeping common areas safe and pleasant](https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/keeping-common-areas-safe-and-pleasant).
- [MCCY — Community Disputes Management Framework](https://www.mccy.gov.sg/sectors/community/community-disputes-management-framework/) + [CMC](https://www.mlaw.gov.sg/conflict-minimisation/cmc/).
- [SP Group](https://www.spgroup.com.sg/) + [EMA — Electricity](https://www.ema.gov.sg/) + [SCDF home fire safety](https://www.scdf.gov.sg/).

### Gaps vs Tick 24 on main / Tick 25 open (Home + Life slice)

Tick 24 (#58) shipped HIP / deposit-return / ActiveSG FAQ / Serangoon–Pasir Ris–Yishun. Tick 25 (#71, open) owns neighbour-reno permits, lightning living, Hougang / Bukit Batok / Marine Parade — left untouched. Remaining high-intent Home+Life gaps matched forum heat without colliding #71: **HDB void-deck / common-property disputes**, **SP Group power-outage living**, plus neighbourhood entity depth for **Jurong West**, **Choa Chu Kang**, and **Sembawang** (Woodlands refresh only). Condo MCST unit-reno notice depth left as cross-link on existing condo-noise guide.

### Shipped this tick

**New guides**

- `content/guides/home/hdb-void-deck-common-property-disputes-tenants.mdx`
- `content/guides/life/power-outages-sp-group-singapore.mdx`

**Upgraded guides (cross-links + related rails)**

- `content/guides/home/heartland-living-for-expats.mdx`
- `content/guides/home/choosing-neighbourhood-expat.mdx`
- `content/guides/home/condo-noise-mcst-neighbours.mdx`
- `content/guides/home/utilities-telecom-setup.mdx`
- `content/guides/life/emergencies-995-999-embassies.mdx`
- `content/guides/life/apps-that-matter-singapore.mdx`
- `src/lib/site.ts` (restore Home HIP / deposit-return; add void-deck + Life power-outage; neighbourhood blurb)

**Neighbourhood entity depth**

- `content/entities/neighbourhoods/jurong-west.json`
- `content/entities/neighbourhoods/choa-chu-kang.json`
- `content/entities/neighbourhoods/sembawang.json`
- `content/entities/neighbourhoods/woodlands.json` (refresh vs Sembawang / west comps)

### Explicitly not done

- No ads/monetization expansion (existing sponsorSlots left as-is).
- No copying of third-party “expat-sg” / Grok clones.
- Did not edit Move/Money/Family/Belong/Next guides owned by other loops.
- Did not touch Tick 25 (#71) reno / lightning / Hougang–Bukit Batok–Marine Parade files.
- Did not re-litigate Tick 19–24 fibre/mould/CDRT/HDB-sale/construction/early-exit/flood/renewal/entry/dengue/HIP/deposit-return topics beyond cross-links + `site.ts` restore.

### Questions mined (sample)

1. Can a void-deck wedding run past midnight under my bedroom?
2. Who do I call for corridor bikes blocking the fire escape — police or Town Council?
3. Is BBQ-pit smoke a OneService case or a neighbour mediation case?
4. Can I break my lease because of repeated funeral tents downstairs?
5. Who restores power — SP Group or my electricity retailer?
6. Should I call 995 when the block goes dark?
7. Will my landlord pay for spoiled freezer food after an outage?
8. Jurong West vs Jurong East — when is Pioneer value worth skipping the interchange?
9. Is Choa Chu Kang worth NSL family space if the CBD ride is long?
10. Sembawang vs Woodlands — quieter north without Causeway crush?

---

---

## Loop C — Home + Life (parallel) — Tick 25 — 2026-09-15

Branch: `cursor/home-life-tick25-2739` → PR to `main`. Owns **Home** + **Life** guides and neighbourhood entities only. Rebased onto post-#58 `main` after later A/D/H/F merges; HIP / deposit-return / Serangoon–Pasir Ris–Yishun stay Tick 24’s. Topics: neighbour renovation rails, lightning living, Hougang / Bukit Batok / Marine Parade. Also restores Home HIP / deposit-return / neighbourhood `site.ts` topics clobbered by intervening loops.

### Sources mined

**Reddit**

- r/askSingapore — HDB neighbour renovation / permit folklore ([drilling after permit](https://www.reddit.com/r/askSingapore/comments/1jzg2kw/drilling_beyond_renovation_permit_period/); [months of upstairs drilling](https://www.reddit.com/r/askSingapore/comments/1rouz0y/urgent_advice_needed_for_help_in_dealing_with/); [which hotline](https://www.reddit.com/r/askSingapore/comments/12180gm/upstairs_neighbour_is_currently_renovating_with/); [past deadline](https://www.reddit.com/r/askSingapore/comments/198mxjs/renovation_past_the_deadline/); [exceeding period](https://www.reddit.com/r/askSingapore/comments/1hwdcem/neighbours_renovation_exceeding_period/)).
- r/askSingapore — lightning / thunderstorm high-rise living ([laptop by window](https://www.reddit.com/r/askSingapore/comments/wpofgc/can_lightning_strike_a_computer_that_is_placed/); [shower myths](https://www.reddit.com/r/askSingapore/comments/1md5oxf/is_it_generally_safe_to_shower_during_a_heavy/); [devices plugged in](https://www.reddit.com/r/askSingapore/comments/1sfml9y/is_it_safe_to_have_electronicelectric_devices/); [top-floor blackouts](https://www.reddit.com/r/askSingapore/comments/1crnzbk/qn_on_blackouts/)).
- r/askSingapore — neighbourhood shortlists for Hougang / Bukit Batok / Marine Parade ([best areas](https://www.reddit.com/r/askSingapore/comments/1jo5une/which_area_in_sg_is_best_to_live_in/); [Marine Terrace](https://www.reddit.com/r/askSingapore/comments/wrk7bg/hows_life_in_marine_terrace/); [where you live](https://www.reddit.com/r/askSingapore/comments/116akld/where_do_you_live_and_what_do_you_likedislike/); [east vs west rent](https://www.reddit.com/r/askSingapore/comments/xxx5wb/renting_in_east_vs_west/)).

**Official**

- [NEA — Renovation noise in residential areas](https://www.nea.gov.sg/our-services/pollution-control/noise-pollution/construction-noise-control/information-on-noise-from-renovation-work-in-residential-areas) (routes HDB-unit reno noise to HDB).
- [HDB — Renovation hub](https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/renovation) + [myNiceHome — renovation permits 101](https://www.mynicehome.gov.sg/hdb-how-to/renovate-your-flat/hdb-renovation-permits-101/).
- [MSS — Lightning](https://www.weather.gov.sg/lightning/) + [2-hour forecast](https://www.weather.gov.sg/forecast-2hr/) + myENV thunderstorm alerts.
- [OneService](https://www.oneservice.gov.sg/).

### Gaps vs Tick 24 on main (Home + Life slice)

Tick 24 (#58, merged) shipped HIP mid-tenancy survival, post-handover deposit / SCT fights, ActiveSG Standard Rate FAQ depth, Serangoon / Pasir Ris / Yishun entities. Remaining high-intent Home+Life gaps matched forum heat without re-owning those paths: **HDB neighbour renovation permits vs ordinary drilling**, **high-rise lightning / thunderstorm living**, plus neighbourhood entity depth for **Hougang**, **Bukit Batok**, and **Marine Parade**. External BTO/site NEA rail and condo MCST reno left as cross-links only.

### Shipped this tick

**New guides**

- `content/guides/home/hdb-neighbour-renovation-noise-tenants.mdx`
- `content/guides/life/lightning-thunderstorms-singapore.mdx`

**Upgraded guides (cross-links + related rails)**

- `content/guides/home/construction-site-noise-renters.mdx` (HDB-unit vs site split)
- `content/guides/home/condo-noise-mcst-neighbours.mdx`
- `content/guides/home/heartland-living-for-expats.mdx` (Hougang / Bukit Batok / Marine Parade + reno/lightning)
- `content/guides/home/choosing-neighbourhood-expat.mdx`
- `content/guides/life/haze-climate-preparedness.mdx` (lightning cross-link; keep Loop H FAQPage)
- `content/guides/life/emergencies-995-999-embassies.mdx`
- `content/guides/life/apps-that-matter-singapore.mdx` (myENV storm row)
- `src/lib/site.ts` (restore Home HIP / deposit-return; add reno + Life lightning; neighbourhood blurb)

**Neighbourhood entity depth**

- `content/entities/neighbourhoods/hougang.json`
- `content/entities/neighbourhoods/bukit-batok.json`
- `content/entities/neighbourhoods/marine-parade.json`

### Explicitly not done

- No ads/monetization expansion (existing sponsorSlots left as-is).
- No copying of third-party “expat-sg” / Grok clones.
- Did not edit Move/Money/Family/Belong/Next guides owned by other loops.
- Did not re-litigate Tick 19–24 fibre/mould/CDRT/HDB-sale/construction/early-exit/flood/renewal/entry/dengue/HIP/deposit-return topics beyond cross-links + `site.ts` restore.

### Questions mined (sample)

1. Is upstairs drilling after the renovation permit period still legal?
2. Who do I call — NEA, HDB, or OneService — for HDB unit renovation noise?
3. Can neighbours renovate on Sundays or late evenings in HDB?
4. Is ordinary picture-frame drilling covered by the same reno permit rules?
5. Should I unplug devices or close windows during Singapore thunderstorms?
6. Is it safe to shower during heavy lightning in a high-rise?
7. Why does my breaker trip more often on stormy afternoons?
8. Hougang vs Serangoon — when is quieter NEL value worth skipping the interchange?
9. Is Bukit Batok worth it for west NSL value without Jurong East mall crush?
10. Does Marine Parade feel more lifestyle-east than Tampines value-east?

---

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 28)

Branch: `cursor/e-journeys-tools-tick28-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. **Opened off tip #281** (`cursor/e-journeys-tools-tick27-fa4f`) — did not wait for #281 or earlier E drafts to merge. Avoided open E stack exclusives through **#281** (E27): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**), gym-membership-freeze / school-leavers-fee (**#225**), childcare-infant-care / fibre-broadband-etf (**#233**), parking-iu-erp / tuition-centre-bond (**#243**), workplace-access / clinic-deposit (**#253**), condo-bike-storage / insurance-portability (**#263**), condo-ev-charger / school-cca-kit (**#273**), utility-meter-photo / school-exam-ib (**#281**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → #225 → #233 → #243 → #253 → #263 → #273 → #281 → this tip**. Soft hubs / content-loop-log: **prepend**.

### Sources mined

**Reddit / forums**

- Condo leaver threads — visitor overnight bay still billed after keys returned; loading-bay QR left live for movers who already finished.
- Helper / FDW threads — final-month levy vs mid-month cancel folklore; transfer-day who-pays-levy confusion.

**Official / orientation**

- Estate MCST / managing-agent visitor parking and loading-bay rules (estate-specific)
- MOM FDW levy concession / cancellation timing (employer-specific)

### Gaps vs open E stack through #281

Open tips through **#281** cover mail/HDB through utility meter photos / exam deposits. Remaining high-intent gaps **off those path sets**: **condo visitor parking / loading-bay clear**, **helper levy final-month sketch**. No calendar JSON. Distinct from parking-iu-erp — this tick owns visitor / guest bay and loading slots, not personal IU/ERP. Distinct from helper-handoff-exit — this tick owns final-month levy cash sketch, not the full handoff playbook.

### Shipped this tick

**Journeys**

- `content/journeys/condo-visitor-parking-clear.json` + `/journeys/condo-visitor-parking-clear`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/helper-levy-final-month.ts`
- `src/components/tools/HelperLevyFinalMonthCalculator.tsx`
- `/tools/helper-levy-final-month` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch exclusives through #281.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Does returning unit keys cancel a reserved visitor overnight bay?
2. Is a loading-bay QR separate from lobby guest QR?
3. Who pays levy on an FDW transfer day?
4. Does mid-month cancel actually pro-rate the levy?
5. Are lost visitor tags billed against the renovation deposit?

---

## Loop E — Journeys / tools — 2026-09-15 (tick 27)

Branch: `cursor/e-journeys-tools-tick27-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. **Opened off tip #273** (`cursor/e-journeys-tools-tick26-fa4f`) — did not wait for #273 or earlier E drafts to merge. Avoided open E stack exclusives through **#273** (E26): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**), gym-membership-freeze / school-leavers-fee (**#225**), childcare-infant-care / fibre-broadband-etf (**#233**), parking-iu-erp / tuition-centre-bond (**#243**), workplace-access / clinic-deposit (**#253**), condo-bike-storage / insurance-portability (**#263**), condo-ev-charger / school-cca-kit (**#273**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → #225 → #233 → #243 → #253 → #263 → #273 → this tip**. Soft hubs / content-loop-log: **prepend**.

### Sources mined

**Reddit / forums**

- Leaver threads — landlord disputes over estimated SP reads after keys returned; meter cupboard photos as the only defence.
- School leaver threads — IB / IGCSE deposits and sitting fees still open after flight tickets; late-cancel windows misunderstood.

**Official / orientation**

- SP Group / PUB final meter appointment practice (account-specific)
- School exam / IB cashier refund schedules (handbook-specific)

### Gaps vs open E stack through #273

Open tips through **#273** cover mail/HDB through EV charger / CCA kit. Remaining high-intent gaps **off those path sets**: **utility meter photo handoff** (deeper than account-closure utility-exit), **school exam / IB deposit sketch**. No calendar JSON. Distinct from `/journeys/utility-exit-handover` — this tick owns dated meter-photo evidence and dispute float. Distinct from `/tools/school-deposit-clawback` and `/tools/school-cca-kit-bond` — this tick owns exam / IB sitting deposits, not tuition clawback or CCA kit bonds.

### Shipped this tick

**Journeys**

- `content/journeys/utility-meter-photo-handoff.json` + `/journeys/utility-meter-photo-handoff`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/school-exam-ib-deposit.ts`
- `src/components/tools/SchoolExamIbDepositCalculator.tsx`
- `/tools/school-exam-ib-deposit` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch exclusives through #273.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Do dated phone photos hold in a landlord meter dispute?
2. What if SP’s final appointment lands after key handover?
3. Are IB deposits refundable after the published cancel window?
4. Do sitting fees stack on top of a forfeited deposit?
5. Which adult login still owns the SP app after SIM change?

---

## Loop E — Journeys / tools — 2026-09-15 (tick 26)

Branch: `cursor/e-journeys-tools-tick26-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (Loop D29 tip). **Did not wait for merges or CI on prior tips including #263.** Avoided open E stack exclusives through **#263** (E25): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**), gym-membership-freeze / school-leavers-fee (**#225**), childcare-infant-care / fibre-broadband-etf (**#233**), parking-iu-erp / tuition-centre-bond (**#243**), workplace-access / clinic-deposit (**#253**), condo-bike-storage / insurance-portability (**#263**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → #225 → #233 → #243 → #253 → #263 → this tip**.

### Sources mined

**Reddit / forums**

- Condo leaver threads — reserved EV bays still billed after keys returned; RFID tags treated as lost; visitor-charging PINs left live.
- School leaver threads — CCA instruments / sports kits held past flight week; damage holds netted against kit bonds.

**Official / orientation**

- Estate MCST / managing-agent EV bay and RFID return rules (estate-specific)
- School CCA / band store kit bond schedules (handbook-specific)

### Gaps vs open E stack through #263

Open tips through **#263** cover mail/HDB, helper/club, bus/insurance, visitor QR/device, locker/pet, gym/leavers, childcare/fibre, parking IU/tuition, workplace/clinic, bike storage/insurance portability. Remaining high-intent gaps **off those path sets**: **condo EV charger / lot clear**, **school CCA kit bond sketch**. No calendar JSON. Distinct from `/journeys/condo-visitor-qr-exit` and parking-iu-erp — this tick owns EV bay / wallbox / RFID clear. Distinct from `/tools/school-device-bond` — this tick owns CCA / instrument kit bonds, not 1:1 devices.

### Shipped this tick

**Journeys**

- `content/journeys/condo-ev-charger-clear.json` + `/journeys/condo-ev-charger-clear`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/school-cca-kit-bond.ts`
- `src/components/tools/SchoolCcaKitBondCalculator.tsx`
- `/tools/school-cca-kit-bond` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch exclusives through #263.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Does returning unit keys auto-release a reserved EV bay?
2. Is the wallbox estate property or landlord fit-out?
3. Are visitor-charging PINs separate from lobby guest QR?
4. Do CCA kit bonds settle on a different desk than device bonds?
5. What overdue fee applies after the published instrument return date?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 34)

Branch: `cursor/loop-d-next-polish-tick34-d996` → draft PR to `main`, stacked on tip [#280](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/280). Owns **Next** companions plus light About / Editorial polish. Cross-linked Move / Money / Next parents for EP renewal age-band salary, S Pass levy/quota renewal, and DP LOC vs own-pass chooser. Avoided open Loop D file set from [#280](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/280).

**Merge order note (controller):** `#280 → this tip`.

### Sources mined

**Reddit / forums**

- r/askSingapore — “We renewed at this salary last year — why is SAT failing now?”
- r/askSingapore — “HR says no EP quota so S Pass is the only option.”
- r/askSingapore — “DP Letter of Consent means my spouse can take any job.”

**Official**

- [MOM — EP eligibility](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility) · [Renew an EP](https://www.mom.gov.sg/passes-and-permits/employment-pass/renew-a-pass) · [Fixed monthly salary FAQ](https://www.mom.gov.sg/faq/employment-pass/what-is-a-fixed-monthly-salary)
- [MOM — S Pass](https://www.mom.gov.sg/passes-and-permits/s-pass) · [Levy and quota](https://www.mom.gov.sg/passes-and-permits/s-pass/quota-and-levy/levy-and-quota-requirements)
- [MOM — DP work arrangements factsheet](https://www.mom.gov.sg/-/media/mom/documents/budget2021/factsheet-work-arrangements-dp-holders.pdf) · [LOC for DP business owners](https://www.mom.gov.sg/passes-and-permits/loc-for-dependants-pass-business-owners/eligibility)

### Gaps vs open stack

Open #280 covers EP NOA packaging, ONE Pass spouse LOC, EntrePass renewal ladder (+ those parents). Remaining off-stack gaps: **EP renewal age-band salary packaging**, **S Pass levy/quota renewal edges**, **DP LOC vs own-pass chooser**.

### Shipped

**New:** `ep-renewal-age-band-salary-packaging-singapore.mdx`, `s-pass-levy-quota-renewal-edges-singapore.mdx`, `dep-pass-loc-vs-own-pass-chooser-singapore.mdx`

**Upgraded:** Employment Pass, S Pass, Dependant’s Pass, COMPASS firm-scores renewal, salary package decoding, decoding job offer (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No open #280 guide bodies (tick33 companions + their parent set including ONE Pass / EntrePass / trailing partner / EP renewal strategy / NOA docs / PLOC).
- Did not wait for CI or merge on #280.
- content-loop-log: prepend only.

### Questions mined

1. Does last year’s renewal salary still clear this year’s age band?
2. Can AWS / bonus close a Stage-1 gap at renewal?
3. Should HR file renewal before a raise lands?
4. Does Employment Pass have a foreign-worker quota?
5. Which levy tier applies at my S Pass renewal?
6. Do new-app and renewal S Pass salary steps share the same date?
7. Does clearing S Pass salary unlock Dependant’s Pass automatically?
8. Can DP + LOC cover ordinary employer jobs after 2021?
9. What breaks LOC renewal for a solo consultancy?
10. If the principal EP lapses, does LOC keep the spouse working?

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 33)

Branch: `cursor/loop-d-next-polish-tick33-d996` → draft PR to `main`, stacked on tip [#268](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/268). Owns **Next** companions plus light About / Editorial polish. Cross-linked Move / Next parents for EP renewal NOA packaging, ONE Pass spouse LOC, and EntrePass renewal ladder. Avoided open Loop D file set from [#268](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/268).

**Merge order note (controller):** `#268 → this tip`.

### Sources mined

**Reddit / forums**

- r/askSingapore — “MOM asked for NOA — just upload any IR8A?”
- r/askSingapore — “ONE Pass means my spouse can work immediately.”
- r/askSingapore — “EntrePass renewed once, later cycles are automatic.”

**Official**

- [MOM — Renew an EP](https://www.mom.gov.sg/passes-and-permits/employment-pass/renew-a-pass) · [Notify MOM of changes](https://www.mom.gov.sg/passes-and-permits/employment-pass/notify-mom-of-changes) · [IRAS NOA](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/notices-and-forms/notice-of-assessment)
- [MOM — ONE Pass families](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/passes-for-families) · [Spouse LOC](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/passes-for-families/dependants-pass-for-overseas-networks-expertise-pass/working-in-singapore)
- [MOM — Renew EntrePass](https://www.mom.gov.sg/passes-and-permits/entrepass/renew-a-pass) · [EntrePass eligibility](https://www.mom.gov.sg/passes-and-permits/entrepass/eligibility)

### Gaps vs open stack

Open #268 covers COMPASS C1 packaging, PEP keep-rule evidence, Tech.Pass 2027 handoff (+ those parents). Remaining off-stack gaps: **EP renewal NOA packaging depth**, **ONE Pass spouse LOC depth**, **EntrePass renewal evaluation ladder**.

### Shipped

**New:** `ep-renewal-noa-packaging-depth-singapore.mdx`, `one-pass-spouse-loc-depth-singapore.mdx`, `entrepass-renewal-evaluation-ladder-singapore.mdx`

**Upgraded:** EP renewal NOA docs, PLOC/LOC, EntrePass, trailing partner, EP salary/occupation changes (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No open #268 guide bodies (COMPASS / PEP / Tech.Pass / ONE Pass / chooser / EP renewal strategy + tick32 companions).
- Did not wait for CI or merge on #268.
- content-loop-log: prepend only.

### Questions mined

1. Is any tax PDF enough when MOM asks for an NOA?
2. Do bonus-heavy years help Stage-1 / COMPASS on renewal?
3. Who uploads the NOA reply — me or HR?
4. Can a ONE Pass spouse work the day the principal pass issues?
5. Can a spouse hold employment LOC and business LOC together?
6. Is common-law partner LOC identical to married-spouse DP LOC?
7. Can ordinary EP DP households copy ONE Pass spouse LOC advice?
8. Are EntrePass renewals automatic after year one?
9. Do contractors count toward EntrePass local-hire bars?
10. When should founders stage an EP exit off EntrePass?

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 32)

Branch: `cursor/loop-d-next-polish-tick32-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Cross-linked Move / Next parents for COMPASS C1 packaging, PEP keep-rule evidence, and Tech.Pass 2027 sunset handoff. Avoided open Loop D file sets through [#262](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/262).

**Merge order note (controller):** `#246 → #256 → #262 → this tip`.

### Sources mined

**Reddit / forums**

- r/askSingapore — “SAT said 20 C1 points on a S$12k package.”
- r/askSingapore — “PEP never gets income-checked after approval.”
- r/askSingapore — “Tech.Pass will get extended past 2027, no rush.”

**Official**

- [MOM — EP eligibility / COMPASS](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility) · [COMPASS rubric PDF](https://www.mom.gov.sg/-/media/mom/documents/press-releases/2023/annex-a---compass-scoring-rubric.pdf)
- [MOM — PEP](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass) · [PEP eligibility](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass/eligibility)
- [EDB — Tech.Pass](https://www.edb.gov.sg/en/how-we-help/incentives-and-programmes/techpass.html) · [ONE Pass](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass)

### Gaps vs open stack

Open #246→#262 cover DP/S Pass/trailing-partner, EP issuance/medical/STVP bridges, and EP appeal / FCF / EPSC companions. Remaining off-stack gaps: **COMPASS C1 fixed-salary packaging**, **PEP keep-rule income evidence**, **Tech.Pass 2027 sunset handoff**.

### Shipped

**New:** `compass-c1-fixed-salary-packaging-singapore.mdx`, `pep-keep-rule-income-evidence-singapore.mdx`, `tech-pass-2027-sunset-handoff-singapore.mdx`

**Upgraded:** COMPASS, PEP, Tech.Pass, ONE Pass, PEP–ONE–Tech chooser, EP renewal (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No open #246 / #256 / #262 guide bodies (DP/S Pass/trailing-partner; employment-pass / issuance / medical / STVP extension / travel-before-card / incorporate; EP rejection-IPA / Fair Consideration / career-pivots).
- Did not wait for CI or merges on prior tips.

### Questions mined

1. Is COMPASS C1 the same as the Stage-1 qualifying salary?
2. Does “total package S$12k” clear C1 if fixed monthly is lower?
3. Do housing allowances count as fixed monthly for C1?
4. Can SAT screenshots substitute for the filed fixed monthly figure?
5. Does PEP get income-checked after approval?
6. Do side consulting top-ups satisfy the PEP keep-rule?
7. Can I renew PEP like an EP if income dips?
8. Will Tech.Pass be extended past January 2027?
9. Is there an automatic Tech.Pass → ONE Pass conversion?
10. How early should Tech.Pass holders start a sponsored EP Plan B?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 27)

Branch: `cursor/e-journeys-tools-tick27-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. **Opened off tip #273** (`cursor/e-journeys-tools-tick26-fa4f`) — did not wait for #273 or earlier E drafts to merge. Avoided open E stack exclusives through **#273** (E26): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**), gym-membership-freeze / school-leavers-fee (**#225**), childcare-infant-care / fibre-broadband-etf (**#233**), parking-iu-erp / tuition-centre-bond (**#243**), workplace-access / clinic-deposit (**#253**), condo-bike-storage / insurance-portability (**#263**), condo-ev-charger / school-cca-kit (**#273**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → #225 → #233 → #243 → #253 → #263 → #273 → this tip**. Soft hubs / content-loop-log: **prepend**.

### Sources mined

**Reddit / forums**

- Leaver threads — landlord disputes over estimated SP reads after keys returned; meter cupboard photos as the only defence.
- School leaver threads — IB / IGCSE deposits and sitting fees still open after flight tickets; late-cancel windows misunderstood.

**Official / orientation**

- SP Group / PUB final meter appointment practice (account-specific)
- School exam / IB cashier refund schedules (handbook-specific)

### Gaps vs open E stack through #273

Open tips through **#273** cover mail/HDB through EV charger / CCA kit. Remaining high-intent gaps **off those path sets**: **utility meter photo handoff** (deeper than account-closure utility-exit), **school exam / IB deposit sketch**. No calendar JSON. Distinct from `/journeys/utility-exit-handover` — this tick owns dated meter-photo evidence and dispute float. Distinct from `/tools/school-deposit-clawback` and `/tools/school-cca-kit-bond` — this tick owns exam / IB sitting deposits, not tuition clawback or CCA kit bonds.

### Shipped this tick

**Journeys**

- `content/journeys/utility-meter-photo-handoff.json` + `/journeys/utility-meter-photo-handoff`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/school-exam-ib-deposit.ts`
- `src/components/tools/SchoolExamIbDepositCalculator.tsx`
- `/tools/school-exam-ib-deposit` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch exclusives through #273.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Do dated phone photos hold in a landlord meter dispute?
2. What if SP’s final appointment lands after key handover?
3. Are IB deposits refundable after the published cancel window?
4. Do sitting fees stack on top of a forfeited deposit?
5. Which adult login still owns the SP app after SIM change?

---

## Loop E — Journeys / tools — 2026-09-15 (tick 26)

Branch: `cursor/e-journeys-tools-tick26-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (Loop D29 tip). **Did not wait for merges or CI on prior tips including #263.** Avoided open E stack exclusives through **#263** (E25): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**), gym-membership-freeze / school-leavers-fee (**#225**), childcare-infant-care / fibre-broadband-etf (**#233**), parking-iu-erp / tuition-centre-bond (**#243**), workplace-access / clinic-deposit (**#253**), condo-bike-storage / insurance-portability (**#263**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → #225 → #233 → #243 → #253 → #263 → this tip**.

### Sources mined

**Reddit / forums**

- Condo leaver threads — reserved EV bays still billed after keys returned; RFID tags treated as lost; visitor-charging PINs left live.
- School leaver threads — CCA instruments / sports kits held past flight week; damage holds netted against kit bonds.

**Official / orientation**

- Estate MCST / managing-agent EV bay and RFID return rules (estate-specific)
- School CCA / band store kit bond schedules (handbook-specific)

### Gaps vs open E stack through #263

Open tips through **#263** cover mail/HDB, helper/club, bus/insurance, visitor QR/device, locker/pet, gym/leavers, childcare/fibre, parking IU/tuition, workplace/clinic, bike storage/insurance portability. Remaining high-intent gaps **off those path sets**: **condo EV charger / lot clear**, **school CCA kit bond sketch**. No calendar JSON. Distinct from `/journeys/condo-visitor-qr-exit` and parking-iu-erp — this tick owns EV bay / wallbox / RFID clear. Distinct from `/tools/school-device-bond` — this tick owns CCA / instrument kit bonds, not 1:1 devices.

### Shipped this tick

**Journeys**

- `content/journeys/condo-ev-charger-clear.json` + `/journeys/condo-ev-charger-clear`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/school-cca-kit-bond.ts`
- `src/components/tools/SchoolCcaKitBondCalculator.tsx`
- `/tools/school-cca-kit-bond` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch exclusives through #263.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Does returning unit keys auto-release a reserved EV bay?
2. Is the wallbox estate property or landlord fit-out?
3. Are visitor-charging PINs separate from lobby guest QR?
4. Do CCA kit bonds settle on a different desk than device bonds?
5. What overdue fee applies after the published instrument return date?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 33)

Branch: `cursor/loop-d-next-polish-tick33-d996` → draft PR to `main`, stacked on tip [#268](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/268). Owns **Next** companions plus light About / Editorial polish. Cross-linked Move / Next parents for EP renewal NOA packaging, ONE Pass spouse LOC, and EntrePass renewal ladder. Avoided open Loop D file set from [#268](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/268).

**Merge order note (controller):** `#268 → this tip`.

### Sources mined

**Reddit / forums**

- r/askSingapore — “MOM asked for NOA — just upload any IR8A?”
- r/askSingapore — “ONE Pass means my spouse can work immediately.”
- r/askSingapore — “EntrePass renewed once, later cycles are automatic.”

**Official**

- [MOM — Renew an EP](https://www.mom.gov.sg/passes-and-permits/employment-pass/renew-a-pass) · [Notify MOM of changes](https://www.mom.gov.sg/passes-and-permits/employment-pass/notify-mom-of-changes) · [IRAS NOA](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/notices-and-forms/notice-of-assessment)
- [MOM — ONE Pass families](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/passes-for-families) · [Spouse LOC](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/passes-for-families/dependants-pass-for-overseas-networks-expertise-pass/working-in-singapore)
- [MOM — Renew EntrePass](https://www.mom.gov.sg/passes-and-permits/entrepass/renew-a-pass) · [EntrePass eligibility](https://www.mom.gov.sg/passes-and-permits/entrepass/eligibility)

### Gaps vs open stack

Open #268 covers COMPASS C1 packaging, PEP keep-rule evidence, Tech.Pass 2027 handoff (+ those parents). Remaining off-stack gaps: **EP renewal NOA packaging depth**, **ONE Pass spouse LOC depth**, **EntrePass renewal evaluation ladder**.

### Shipped

**New:** `ep-renewal-noa-packaging-depth-singapore.mdx`, `one-pass-spouse-loc-depth-singapore.mdx`, `entrepass-renewal-evaluation-ladder-singapore.mdx`

**Upgraded:** EP renewal NOA docs, PLOC/LOC, EntrePass, trailing partner, EP salary/occupation changes (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No open #268 guide bodies (COMPASS / PEP / Tech.Pass / ONE Pass / chooser / EP renewal strategy + tick32 companions).
- Did not wait for CI or merge on #268.
- content-loop-log: prepend only.

### Questions mined

1. Is any tax PDF enough when MOM asks for an NOA?
2. Do bonus-heavy years help Stage-1 / COMPASS on renewal?
3. Who uploads the NOA reply — me or HR?
4. Can a ONE Pass spouse work the day the principal pass issues?
5. Can a spouse hold employment LOC and business LOC together?
6. Is common-law partner LOC identical to married-spouse DP LOC?
7. Can ordinary EP DP households copy ONE Pass spouse LOC advice?
8. Are EntrePass renewals automatic after year one?
9. Do contractors count toward EntrePass local-hire bars?
10. When should founders stage an EP exit off EntrePass?

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 32)

Branch: `cursor/loop-d-next-polish-tick32-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Cross-linked Move / Next parents for COMPASS C1 packaging, PEP keep-rule evidence, and Tech.Pass 2027 sunset handoff. Avoided open Loop D file sets through [#262](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/262).

**Merge order note (controller):** `#246 → #256 → #262 → this tip`.

### Sources mined

**Reddit / forums**

- r/askSingapore — “SAT said 20 C1 points on a S$12k package.”
- r/askSingapore — “PEP never gets income-checked after approval.”
- r/askSingapore — “Tech.Pass will get extended past 2027, no rush.”

**Official**

- [MOM — EP eligibility / COMPASS](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility) · [COMPASS rubric PDF](https://www.mom.gov.sg/-/media/mom/documents/press-releases/2023/annex-a---compass-scoring-rubric.pdf)
- [MOM — PEP](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass) · [PEP eligibility](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass/eligibility)
- [EDB — Tech.Pass](https://www.edb.gov.sg/en/how-we-help/incentives-and-programmes/techpass.html) · [ONE Pass](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass)

### Gaps vs open stack

Open #246→#262 cover DP/S Pass/trailing-partner, EP issuance/medical/STVP bridges, and EP appeal / FCF / EPSC companions. Remaining off-stack gaps: **COMPASS C1 fixed-salary packaging**, **PEP keep-rule income evidence**, **Tech.Pass 2027 sunset handoff**.

### Shipped

**New:** `compass-c1-fixed-salary-packaging-singapore.mdx`, `pep-keep-rule-income-evidence-singapore.mdx`, `tech-pass-2027-sunset-handoff-singapore.mdx`

**Upgraded:** COMPASS, PEP, Tech.Pass, ONE Pass, PEP–ONE–Tech chooser, EP renewal (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No open #246 / #256 / #262 guide bodies (DP/S Pass/trailing-partner; employment-pass / issuance / medical / STVP extension / travel-before-card / incorporate; EP rejection-IPA / Fair Consideration / career-pivots).
- Did not wait for CI or merges on prior tips.

### Questions mined

1. Is COMPASS C1 the same as the Stage-1 qualifying salary?
2. Does “total package S$12k” clear C1 if fixed monthly is lower?
3. Do housing allowances count as fixed monthly for C1?
4. Can SAT screenshots substitute for the filed fixed monthly figure?
5. Does PEP get income-checked after approval?
6. Do side consulting top-ups satisfy the PEP keep-rule?
7. Can I renew PEP like an EP if income dips?
8. Will Tech.Pass be extended past January 2027?
9. Is there an automatic Tech.Pass → ONE Pass conversion?
10. How early should Tech.Pass holders start a sponsored EP Plan B?

---

---

## Loop B — Family + Belong (tick 34) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick34-8971` → PR to `main`. Owns **Family** + **Belong** plus light schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #264. Shared log + `site.ts` only. Did not wait for #264 merge/CI. No force-push to `main`. Open stack treated as #254 → #264.

### Sources mined

**Reddit / forums**

- r/askSingapore — vomit in class; 48-hour folklore; swim bans.
- r/askSingapore — residential camp consent closes mid-board-meeting; unlabelled meds.
- r/askSingapore — ballet-studio benches as the real weekday parent meetup.

**Official**

- [HealthHub gastroenteritis](https://www.healthhub.sg/a-z/diseases-and-conditions/gastroenteritis) + [MOH](https://www.moh.gov.sg/) + [ECDA](https://www.ecda.gov.sg/)
- [MOE Parent Hub](https://www.moe.gov.sg/parent-hub) + [international schools](https://www.moe.gov.sg/international-schools) + [Sport Singapore](https://www.sportsingapore.gov.sg/)
- [NAC](https://www.nac.gov.sg/) + [Esplanade](https://www.esplanade.com/) + [ActiveSG](https://www.activesg.gov.sg/)

### Gaps vs prior Loop B ticks

Ticks 1–33 (open through #264) covered pink-eye, concert/recital, music-studio waiting, ear infection, winter fair, swim waiting. Remaining heat without contested paths: **gastro / vomiting–diarrhoea exclusion**, **IS residential camp / overnight trip ops**, **dance-studio waiting belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-kids-gastroenteritis-vomiting-diarrhoea-school-exclusion-singapore.mdx`
- `content/guides/family/international-school-residential-camp-overnight-trip-ops-dual-career-singapore.mdx`
- `content/guides/belong/dance-studio-waiting-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open B stack)

- chickenpox exclusion, head-lice outbreak, kids activities/holiday camps, sports-day/carnival ops, foodcourt dinner belonging, youth sports academies
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- UWCSEA East, UWCSEA Dover, Dulwich College Singapore, Parkway Shenton, physiotherapy-rehab, mental-health-counselling

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #254–#264 guide/entity paths.
- No force-push to `main`.

### Questions mined (sample)

1. Who owns overnight hydration checks?
2. Is the return clock written?
3. When does camp consent close?
4. Who is the named emergency contact?
5. Same dance bench next week?
6. Is swim paused in writing?
7. Is the med/allergy packet labelled?
8. Helper rest day vs camp pickup?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 26)

Branch: `cursor/e-journeys-tools-tick26-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (Loop D29 tip). **Did not wait for merges or CI on prior tips including #263.** Avoided open E stack exclusives through **#263** (E25): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**), gym-membership-freeze / school-leavers-fee (**#225**), childcare-infant-care / fibre-broadband-etf (**#233**), parking-iu-erp / tuition-centre-bond (**#243**), workplace-access / clinic-deposit (**#253**), condo-bike-storage / insurance-portability (**#263**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → #225 → #233 → #243 → #253 → #263 → this tip**.

### Sources mined

**Reddit / forums**

- Condo leaver threads — reserved EV bays still billed after keys returned; RFID tags treated as lost; visitor-charging PINs left live.
- School leaver threads — CCA instruments / sports kits held past flight week; damage holds netted against kit bonds.

**Official / orientation**

- Estate MCST / managing-agent EV bay and RFID return rules (estate-specific)
- School CCA / band store kit bond schedules (handbook-specific)

### Gaps vs open E stack through #263

Open tips through **#263** cover mail/HDB, helper/club, bus/insurance, visitor QR/device, locker/pet, gym/leavers, childcare/fibre, parking IU/tuition, workplace/clinic, bike storage/insurance portability. Remaining high-intent gaps **off those path sets**: **condo EV charger / lot clear**, **school CCA kit bond sketch**. No calendar JSON. Distinct from `/journeys/condo-visitor-qr-exit` and parking-iu-erp — this tick owns EV bay / wallbox / RFID clear. Distinct from `/tools/school-device-bond` — this tick owns CCA / instrument kit bonds, not 1:1 devices.

### Shipped this tick

**Journeys**

- `content/journeys/condo-ev-charger-clear.json` + `/journeys/condo-ev-charger-clear`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/school-cca-kit-bond.ts`
- `src/components/tools/SchoolCcaKitBondCalculator.tsx`
- `/tools/school-cca-kit-bond` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch exclusives through #263.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Does returning unit keys auto-release a reserved EV bay?
2. Is the wallbox estate property or landlord fit-out?
3. Are visitor-charging PINs separate from lobby guest QR?
4. Do CCA kit bonds settle on a different desk than device bonds?
5. What overdue fee applies after the published instrument return date?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 25)

Branch: `cursor/e-journeys-tools-tick25-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (post-#234 / Loop B30 tip). **Did not wait for merges or CI on prior tips including #253.** Avoided open E stack exclusives through **#253** (E24): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**), gym-membership-freeze / school-leavers-fee (**#225**), childcare-infant-care / fibre-broadband-etf (**#233**), parking-iu-erp / tuition-centre-bond (**#243**), workplace-access / clinic-deposit (**#253**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → #225 → #233 → #243 → #253 → this tip**.

### Sources mined

**Reddit / forums**

- Condo leaver threads — unmarked bikes tagged abandoned after notice; cage padlocks still on after keys returned.
- Insurance threads — Singapore health cancel vs destination waiting periods; short travel-medical bridges for gap weeks.

**Official / orientation**

- Estate MCST / managing-agent abandoned-item and bike-bay sticker rules (estate-specific)
- Insurer portability / waiting-period wordings (policy-specific)

### Gaps vs open E stack through #253

Open tips through **#253** cover mail/HDB, helper/club, bus/insurance, visitor QR/device, locker/pet, gym/leavers, childcare/fibre, parking IU/tuition, workplace/clinic. Remaining high-intent gaps **off those path sets**: **condo bike bay / storage cage clear**, **insurance portability float**. No calendar JSON. Distinct from `/journeys/condo-mcst-exit` and visitor QR — this tick owns physical bay/cage clear. Distinct from `/tools/driving-insurance-gap` — this tick owns health/life/travel portability weeks, not motor.

### Shipped this tick

**Journeys**

- `content/journeys/condo-bike-storage-clear.json` + `/journeys/condo-bike-storage-clear`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/insurance-portability-float.ts`
- `src/components/tools/InsurancePortabilityFloatCalculator.tsx`
- `/tools/insurance-portability-float` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch exclusives through #253.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Does returning unit keys auto-clear bike-bay stickers?
2. How long before unmarked bikes are treated as abandoned?
3. Is a cage deposit separate from the renovation deposit?
4. Do Singapore health extensions cover overseas gap weeks?
5. When does destination cover waiting period start relative to cancel?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 24)

Branch: `cursor/e-journeys-tools-tick24-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (post-#199 / Loop B26 tip). **Did not wait for merges or CI on prior tips including #243.** Avoided open E stack exclusives through **#243** (E23): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**), gym-membership-freeze / school-leavers-fee (**#225**), childcare-infant-care / fibre-broadband-etf (**#233**), parking-iu-erp / tuition-centre-bond (**#243**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → #225 → #233 → #243 → this tip**.

### Sources mined

**Reddit / forums**

- Leaver threads — office tower cards still active after EP cancel; VPN tokens unreturned; visitor-app host rights left live.
- Health threads — GP / dental deposits and unused packages held past flight week; records-transfer fees netted against deposits.

**Official / orientation**

- Building facilities / landlord access return desks (estate-specific)
- Clinic / dental finance desk deposit schedules (practice-specific)

### Gaps vs open E stack through #243

Open tips through **#243** cover mail/HDB, helper/club, bus/insurance, visitor QR/device, locker/pet, gym/leavers, childcare/fibre, parking IU/tuition. Remaining high-intent gaps **off those path sets**: **workplace access / pass exit**, **clinic deposit exit sketch**. No calendar JSON. Distinct from `/journeys/hospital-cash-deposit` (admission float) — this tick owns outpatient clinic deposit release. Distinct from parking-iu-erp — this tick owns employer building access, not personal IU.

### Shipped this tick

**Journeys**

- `content/journeys/workplace-access-exit.json` + `/journeys/workplace-access-exit`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/clinic-deposit-exit.ts`
- `src/components/tools/ClinicDepositExitCalculator.tsx`
- `/tools/clinic-deposit-exit` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch exclusives through #243.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Does EP cancel auto-deactivate the office tower card?
2. When must VPN tokens be returned relative to last working day?
3. Do visitor-app host rights survive email deactivation?
4. Are office car-park labels separate from personal IU?
5. Who holds the access-card deposit — facilities or HR?
6. Will unused dental packages offset no-show fees?
7. Do clinics hold deposits until records transfer completes?
8. Should workplace deposits and clinic deposits share one float?
9. Can open consult balances block the whole deposit refund?
10. When should clinic settlement land relative to card return week?

---

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 32)

Branch: `cursor/loop-d-next-polish-tick32-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Cross-linked Move / Next parents for COMPASS C1 packaging, PEP keep-rule evidence, and Tech.Pass 2027 sunset handoff. Avoided open Loop D file sets through [#262](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/262).

**Merge order note (controller):** `#246 → #256 → #262 → this tip`.

### Sources mined

**Reddit / forums**

- r/askSingapore — “SAT said 20 C1 points on a S$12k package.”
- r/askSingapore — “PEP never gets income-checked after approval.”
- r/askSingapore — “Tech.Pass will get extended past 2027, no rush.”

**Official**

- [MOM — EP eligibility / COMPASS](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility) · [COMPASS rubric PDF](https://www.mom.gov.sg/-/media/mom/documents/press-releases/2023/annex-a---compass-scoring-rubric.pdf)
- [MOM — PEP](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass) · [PEP eligibility](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass/eligibility)
- [EDB — Tech.Pass](https://www.edb.gov.sg/en/how-we-help/incentives-and-programmes/techpass.html) · [ONE Pass](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass)

### Gaps vs open stack

Open #246→#262 cover DP/S Pass/trailing-partner, EP issuance/medical/STVP bridges, and EP appeal / FCF / EPSC companions. Remaining off-stack gaps: **COMPASS C1 fixed-salary packaging**, **PEP keep-rule income evidence**, **Tech.Pass 2027 sunset handoff**.

### Shipped

**New:** `compass-c1-fixed-salary-packaging-singapore.mdx`, `pep-keep-rule-income-evidence-singapore.mdx`, `tech-pass-2027-sunset-handoff-singapore.mdx`

**Upgraded:** COMPASS, PEP, Tech.Pass, ONE Pass, PEP–ONE–Tech chooser, EP renewal (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No open #246 / #256 / #262 guide bodies (DP/S Pass/trailing-partner; employment-pass / issuance / medical / STVP extension / travel-before-card / incorporate; EP rejection-IPA / Fair Consideration / career-pivots).
- Did not wait for CI or merges on prior tips.

### Questions mined

1. Is COMPASS C1 the same as the Stage-1 qualifying salary?
2. Does “total package S$12k” clear C1 if fixed monthly is lower?
3. Do housing allowances count as fixed monthly for C1?
4. Can SAT screenshots substitute for the filed fixed monthly figure?
5. Does PEP get income-checked after approval?
6. Do side consulting top-ups satisfy the PEP keep-rule?
7. Can I renew PEP like an EP if income dips?
8. Will Tech.Pass be extended past January 2027?
9. Is there an automatic Tech.Pass → ONE Pass conversion?
10. How early should Tech.Pass holders start a sponsored EP Plan B?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 23)

Branch: `cursor/e-journeys-tools-tick23-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (post-#155 / Loop B20 tip). **Did not wait for merges or CI on prior tips including #233.** Avoided open E stack exclusives through **#233** (E22): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**), gym-membership-freeze / school-leavers-fee (**#225**), childcare-infant-care / fibre-broadband-etf (**#233**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → #225 → #233 → this tip**.

### Sources mined

**Reddit / forums**

- Leaver threads — IU still auto-topping after car sale; condo season labels billed past move-out; unpaid ERP following FIN overseas.
- Parent threads — tuition / enrichment bonds and unused package credits colliding with movers week.

**Official / orientation**

- LTA IU / ERP account paths (vehicle-linked)
- Condo / HDB season parking cancel desks (estate-specific)
- Tuition centre parent contracts (centre-specific)

### Gaps vs open E stack through #233

Open tips through **#233** cover mail/HDB, helper/club, bus/insurance, visitor QR/device, locker/pet, gym/leavers, childcare/fibre ETF. Remaining high-intent gaps **off those path sets**: **parking IU / ERP exit**, **tuition centre bond sketch**. No calendar JSON. Distinct from `/tools/car-coe-exit` (COE/PARF cash) — this tick owns parking artefacts. Distinct from school-deposit-clawback / school-leavers-fee — this tick owns enrichment-centre bonds.

### Shipped this tick

**Journeys**

- `content/journeys/parking-iu-erp-exit.json` + `/journeys/parking-iu-erp-exit`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/tuition-centre-bond.ts`
- `src/components/tools/TuitionCentreBondCalculator.tsx`
- `/tools/tuition-centre-bond` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch exclusives through #233.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Does selling the car auto-close the IU?
2. When should season parking labels be returned?
3. Can unpaid ERP follow a FIN after exit?
4. Should IU deregister wait until after COE cash clears?
5. Do condo parking deposits refund mid-month?
6. Will unused tuition packages offset notice months?
7. Are enrichment bonds separate from school deposits?
8. What materials holds survive a full bond refund?
9. Should parking deposits and tuition bonds share one float?
10. When must ERP auto-top-up stop relative to bank closure?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 22)

Branch: `cursor/e-journeys-tools-tick22-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (post-#129 / Loop B16 tip). **Did not wait for merges or CI on prior tips.** Avoided open E stack exclusives through **#225** (E21): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**), gym-membership-freeze / school-leavers-fee (**#225**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → #225 → this tip**.

### Sources mined

**Reddit / forums**

- Parent threads — infant care / childcare notice still billing after school withdrawal; meal credits and kit returns on movers week.
- Home-exit threads — fibre ETF vs serving remaining months; rebate clawbacks exceeding the published ETF line.

**Official / orientation**

- Centre parent-handbook notice / deposit schedules (centre-specific)
- ISP fibre early-termination / promo clawback schedules (vendor-specific)

### Gaps vs open E stack through #225

Open tips through **#225** cover mail/HDB, helper/club, bus/insurance, visitor QR/device, locker/pet float, gym/leavers. Remaining high-intent gaps **off those path sets**: **childcare / infant-care exit**, **fibre broadband ETF sketch**. No calendar JSON. Distinct from `/journeys/utility-exit-handover` (process) and `/tools/sim-otp-keep` (OTP keep) — this tick owns centre exit + fibre ETF cash only.

### Shipped this tick

**Journeys**

- `content/journeys/childcare-infant-care-exit.json` + `/journeys/childcare-infant-care-exit`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/fibre-broadband-etf.ts`
- `src/components/tools/FibreBroadbandEtfCalculator.tsx`
- `/tools/fibre-broadband-etf` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #173 / #186 / #196 / #203 / #217 / #225 exclusive paths.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Does school withdrawal stop childcare billing?
2. How many written-notice weeks does the centre need?
3. Do meal credits refund on early exit?
4. When should kits be returned relative to movers day?
5. Do sibling discounts survive one child leaving?
6. Is paying fibre ETF cheaper than serving six remaining months?
7. Can rebate clawbacks exceed the published ETF?
8. Is a $0 transfer fee a real takeover path?
9. Should centre deposits and fibre ETF share one cash float?
10. When must the ONT be returned after cancel?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 21)

Branch: `cursor/e-journeys-tools-tick21-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (post-#91 / Loop B12 tip). **Did not wait for merges or CI on prior tips.** Avoided open E stack exclusives through **#217** (E20): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**), school-locker-clear / pet-quarantine-float (**#217**). Prefer merge order note: **#173 → #186 → #196 → #203 → #217 → this tip**.

### Sources mined

**Reddit / forums**

- Fitness / expat threads — gym freeze vs cancel when leaving Singapore; boutique class packs still billing after EP cancel.
- International-school parent threads — leavers / yearbook / optional photo packs billed mid-year beside movers deposits.

**Official / orientation**

- Gym / studio contract freeze & ETF schedules (vendor-specific)
- School leavers / yearbook fee schedules (school-specific)

### Gaps vs open E stack through #217

Open tips through **#217** cover mail/HDB reno, helper/club, bus/insurance, visitor QR/device bond, locker/pet float. Remaining high-intent gaps **off those path sets**: **gym membership freeze/exit**, **school leavers / yearbook fee sketch**. No calendar JSON. Distinct from club-deposit-exit (social clubs) — this tick owns fitness memberships. Distinct from school-deposit-clawback (enrolment deposits) — this tick owns leavers/yearbook cash.

### Shipped this tick

**Journeys**

- `content/journeys/gym-membership-freeze-exit.json` + `/journeys/gym-membership-freeze-exit`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/school-leavers-fee.ts`
- `src/components/tools/SchoolLeaversFeeCalculator.tsx`
- `/tools/school-leavers-fee` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #173 / #186 / #196 / #203 / #217 exclusive paths.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Does leaving Singapore unlock a free gym cancel?
2. Is freeze cheaper than early-termination for two remaining months?
3. Do boutique class packs survive a freeze?
4. When should access fobs be returned relative to billing stop?
5. Does corporate wellness keep deducting after the last working day?
6. Are yearbook fees automatic on mid-year exit?
7. How do sibling discounts apply to leavers packs?
8. Should optional photo/dinner packs wait until after gym ETF is known?
9. Can leavers fees and gym ETFs share one cash float safely?
10. When must membership OTP still work for cancel confirmation?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 20)

Branch: `cursor/e-journeys-tools-tick20-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (post-#201 / Loop D24 tip). **Did not wait for merges or CI on prior tips.** Avoided open E stack exclusives through **#203** (E19): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**), condo-visitor-qr / school-device-bond (**#203**). Prefer merge order note: **#173 → #186 → #196 → #203 → this tip**.

### Sources mined

**Reddit / forums**

- International-school parent threads — lockers / cubbies / lost-property still holding kit after last attendance; padlock cut fees delaying clearance.
- Pet-export threads — AVS titres + airline crate fees + destination quarantine kennel cash colliding with movers week.

**Official / orientation**

- School locker / facilities handbooks (school-specific)
- [NParks / AVS — exporting animals](https://www.nparks.gov.sg/avs) · destination competent-authority quarantine schedules

### Gaps vs open E stack through #203

Open **#173** mail forward + HDB reno. Open **#186** helper handoff + club deposit. Open **#196** school bus/CCA + driving insurance. Open **#203** condo visitor QR + school device bond. Remaining high-intent gaps **off those path sets**: **school locker / cubby clear**, **pet quarantine cash float**. No calendar JSON. Distinct from existing `/journeys/pets-reexport` (process) — this tick owns cash float only. Distinct from school-bus-cca (routes/kits) — this tick owns locker/cubby clear-out.

### Shipped this tick

**Journeys**

- `content/journeys/school-locker-clear.json` + `/journeys/school-locker-clear`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/pet-quarantine-float.ts`
- `src/components/tools/PetQuarantineFloatCalculator.tsx`
- `/tools/pet-quarantine-float` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #173 / #186 / #196 / #203 exclusive paths.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. When should lockers be cleared relative to the last attendance day?
2. What does a padlock cut cost if the combination is lost?
3. Do library and canteen holds block clearance with empty lockers?
4. How do sibling shared cubbies get split on exit?
5. Should locker clear wait until after bus cancel?
6. How much AVS / titre cash should we float before resignation?
7. Does arrival quarantine usually exceed crate + ticket cash?
8. What buffer covers a missed titre or airline slot?
9. Should pet float stay separate from school locker fees?
10. When do destination kennel day-rates become the dominant line?

---

---

---

## Loop B — Family + Belong (tick 33) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick33-8971` → PR to `main`. Owns **Family** + **Belong** plus light schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #254. Shared log + `site.ts` only. Did not wait for #254 merge/CI. No force-push to `main`. Rebased after #242 and later main landings; open stack treated as #254.

### Sources mined

**Reddit / forums**

- r/askSingapore — sticky-eye mornings; swim bans; school return folklore.
- r/askSingapore — concert call times vs client decks; costume blackouts; programme PayNow guilt.
- r/askSingapore — music-studio sofas as the real weekday parent meetup.

**Official**

- [HealthHub conjunctivitis](https://www.healthhub.sg/a-z/diseases-and-conditions/conjunctivitis) + [MOH](https://www.moh.gov.sg/) + [SNEC](https://www.snec.com.sg/)
- [MOE Parent Hub](https://www.moe.gov.sg/parent-hub) + [international schools](https://www.moe.gov.sg/international-schools) + [NAC](https://www.nac.gov.sg/)
- [Esplanade](https://www.esplanade.com/) + [NEA](https://www.nea.gov.sg/)

### Gaps vs prior Loop B ticks

Ticks 1–32 (open through #254) covered LS waitlists, tuition lobbies, transfers, ear infection, winter fair, swim waiting. Remaining heat without contested paths: **conjunctivitis / pink-eye exclusion**, **IS concert / recital ops**, **music-lesson studio waiting belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-kids-conjunctivitis-pink-eye-school-exclusion-singapore.mdx`
- `content/guides/family/international-school-concert-recital-ops-dual-career-singapore.mdx`
- `content/guides/belong/music-lesson-studio-waiting-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open B stack)

- HFMD outbreak coverage, kids swimming/water safety, dental care for foreigners, music & arts communities, youth performing arts communities
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- Tanglin Trust, Australian International School, Canadian International School, optical-eye-care, dental-care, Raffles Medical

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #254 guide/entity paths (avoided open-stack paths through #254).
- No force-push to `main`.

### Questions mined (sample)

1. Who owns overnight pink-eye wipe-downs?
2. Is the return rule written?
3. What is the concert call time and gate?
4. Which adult owns the hall seat?
5. Same studio sofa next week?
6. Is swim paused in writing?
7. Hard wallet cap for programmes/flowers?
8. Helper rest day vs recital Sunday?

---

---

## Loop B — Family + Belong (tick 32) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick32-8971` → PR to `main`. Owns **Family** + **Belong** plus light schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #242. Shared log + `site.ts` only. Did not wait for #242 merge/CI. No force-push to `main`. Rebased after #210/#216 landed on main.

### Sources mined

**Reddit / forums**

- r/askSingapore — night ear pain; swim bans; ENT vs GP folklore.
- r/askSingapore — winter-fair stall shifts vs client calls; raffle PayNow guilt.
- r/askSingapore — private swim-school waiting glass as the real parent meetup.

**Official**

- [HealthHub middle ear infection](https://www.healthhub.sg/a-z/diseases-and-conditions/middle-ear-infection) + [MOH](https://www.moh.gov.sg/) + [KKH](https://www.kkh.com.sg/)
- [MOE Parent Hub](https://www.moe.gov.sg/parent-hub) + [international schools](https://www.moe.gov.sg/international-schools)
- [ActiveSG](https://www.activesg.gov.sg/) + [NEA](https://www.nea.gov.sg/)

### Gaps vs prior Loop B ticks

Ticks 1–31 (open through #242) covered LS waitlists/tuition lobbies/transfers. Remaining heat without contested paths: **ear infection / ENT coverage**, **IS winter fair / bazaar ops**, **swim-school waiting-area belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-kids-ear-infection-ent-coverage-singapore.mdx`
- `content/guides/family/international-school-winter-fair-bazaar-ops-dual-career-singapore.mdx`
- `content/guides/belong/swim-school-waiting-area-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open B stack)

- finding paediatrician, sick-child coverage, ActiveSG swim belonging, kids allergy/EpiPen, park playground belonging
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- Dover Court, GESS, Nexus International, SMG, AIA Singapore, aircon-servicing

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #227–#242 guide/entity paths (and avoided prior open-stack paths through #242).
- No force-push to `main`.

### Questions mined (sample)

1. Who owns overnight ear-pain coverage?
2. Is swim school paused in writing?
3. Which adult owns the fair stall shift?
4. What is the hard wallet cap?
5. Same swim waiting bench next week?
6. GP tonight or ENT this week?
7. Helper rest day vs fair Sunday?
8. Allergy plan checked before class stall tasting?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 31)

Branch: `cursor/loop-d-next-polish-tick31-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Cross-linked Move / Next parents for EP rejection, Fair Consideration, and career pivots. Avoided open Loop D file sets through [#256](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/256).

**Merge order note (controller):** `#215 → #222 → #230 → #246 → #256 → this tip`.

### Sources mined

**Reddit / forums**

- r/askSingapore — “HR will appeal, I already resigned.”
- r/askSingapore — “salary is S$23k so FCF does not matter.”
- r/askSingapore — missed EPSC, Notification Letter expires Friday.

**Official**

- [MOM — EP appeal](https://www.mom.gov.sg/passes-and-permits/employment-pass/appeal-against-a-rejected-application) · [Fair Consideration](https://www.mom.gov.sg/employment-practices/fair-consideration-framework) · [S$22,500 ad exemption](https://www.mom.gov.sg/faq/fair-consideration-framework/why-are-jobs-with-fixed-monthly-salary-of-22500-and-above-exempted-from-advertising)
- [MOM — Get a pass issued](https://www.mom.gov.sg/passes-and-permits/employment-pass/get-a-pass-issued) · [After the pass is issued](https://www.mom.gov.sg/passes-and-permits/employment-pass/after-the-pass-is-issued)

### Gaps vs open stack

Open #215→#256 cover DP re-sponsor through EP secondary LOC / JB hop / medical-STVP bridge. Remaining off-stack gaps: **EP rejection candidate playbook**, **FCF exemption edges**, **EPSC missed-slot / letter extension**.

### Shipped

**New:** `ep-rejection-appeal-candidate-playbook-singapore.mdx`, `fcf-advertising-exemption-edges-ep-singapore.mdx`, `epsc-missed-slot-notification-letter-extension-singapore.mdx`

**Upgraded:** EP rejection / IPA, Fair Consideration, career pivots (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No open #215 / #222 / #230 / #246 / #256 guide bodies (including employment-pass, work-pass issuance, EP medical, travel-before-card, STVP extension, incorporate).
- Did not wait for CI or merges on prior tips.

### Questions mined

1. Can I email MOM to appeal my own EP rejection?
2. Is SAT score enough to win an appeal?
3. Should I resign while the appeal is pending?
4. When is a refile better than an appeal?
5. Does S$22.5k fixed pay skip all FCF duties?
6. Does “under 10 staff” always skip MyCareersFuture?
7. Can HR offer during the 14-day ad window if “exempt vibes”?
8. What if my EPSC slot is after the Notification Letter ends?
9. Who requests the letter extension — me or HR?
10. Can I JB while waiting for a new EPSC slot?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 30)

Branch: `cursor/loop-d-next-polish-tick30-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Cross-linked Move parents for Employment Pass, incorporation, travel-before-card, work-pass issuance, EP medical, and STVP extension. Avoided open Loop D file sets through [#246](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/246).

**Merge order note (controller):** `#215 → #222 → #230 → #246 → this tip`.

### Sources mined

**Reddit / forums**

- r/askSingapore — “just add myself as director of the side Pte Ltd” on EP.
- r/askSingapore — JB lunch on IPA before Notification Letter / EPSC.
- r/askSingapore — labs still out, STVP ends tomorrow, HR silent.

**Official**

- [MOM — Secondary directorship](https://www.mom.gov.sg/passes-and-permits/employment-pass/taking-up-secondary-directorship) · [Get a pass issued](https://www.mom.gov.sg/passes-and-permits/employment-pass/get-a-pass-issued) · [After the pass is issued](https://www.mom.gov.sg/passes-and-permits/employment-pass/after-the-pass-is-issued)
- [MOM — Apply for EP](https://www.mom.gov.sg/passes-and-permits/employment-pass/apply-for-a-pass) · [ICA — Extend short-term stay](https://www.ica.gov.sg/enter-transit-depart/extend-short-term-stay)
- [ACRA — Appointing directors](https://www.acra.gov.sg/register/business/registering-different-business-structures/local-company/appointing-company-directors-other-key-officers/)

### Gaps vs open stack

Open #215→#222→#230→#246 cover DP re-sponsor / STP hours / SRS exit; LTVP→EP / mid-year school / insurance bridge; common-law LTVP / AEIS vs hold / STVP medical; DP age-out / S Pass→EP / LOC CPF pack. Remaining off-stack gaps: **EP secondary directorship LOC**, **JB hop mid-issuance**, **EP medical labs vs STVP extension**.

### Shipped

**New:** `ep-secondary-directorship-loc-singapore.mdx`, `jb-hop-mid-ep-issuance-reentry-trap-singapore.mdx`, `ep-medical-lab-stvp-extension-bridge-singapore.mdx`

**Upgraded:** Employment Pass, incorporate, travel-before-card, work-pass issuance, EP medical, STVP extension (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No open #215 / #222 / #230 / #246 guide bodies; no re-edit of those parents.
- Did not wait for CI or merges on prior tips.

### Questions mined

1. Does shareholding alone let me sit on a side-company board on EP?
2. Is Slack “HR OK” enough for secondary directorship?
3. Can I JB on IPA before the Notification Letter?
4. Is the Notification Letter a free re-entry document?
5. What if EPSC is next week and I want lunch in JB this weekend?
6. Which medical PDF is the EP form?
7. How early can HR file STVP extension for lab delays?
8. What must the doctor’s memo say?
9. Does a lab delay excuse overstay?
10. Should I travel while the STVP extension is pending?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 29)

Branch: `cursor/loop-d-next-polish-tick29-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Cross-linked Move parents for Dependant’s Pass, trailing-partner careers, S Pass, and EP vs S Pass. Avoided open Loop D file sets through [#230](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/230).

**Merge order note (controller):** `#215 → #222 → #230 → this tip`.

### Sources mined

**Reddit / forums**

- r/askSingapore — DP kid “just renew past 21” / Student Pass folklore.
- r/askSingapore — raise then “HR will convert S Pass to EP.”
- r/askSingapore — LOC year-2 refusal after solo consultancy with no local hire.

**Official**

- [MOM — Dependant’s Pass eligibility](https://www.mom.gov.sg/passes-and-permits/dependants-pass/eligibility) · [LOC for DP business owners](https://www.mom.gov.sg/passes-and-permits/loc-for-dependants-pass-business-owners/eligibility) · [Renew / cancel / replace LOC](https://www.mom.gov.sg/passes-and-permits/loc-for-dependants-pass-business-owners/renew-cancel-or-replace)
- [MOM — EP eligibility](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility) · [S Pass eligibility](https://www.mom.gov.sg/passes-and-permits/s-pass/eligibility) · [Fair Consideration Framework](https://www.mom.gov.sg/employment-practices/fair-consideration-framework)
- [ICA — Student’s Pass](https://www.ica.gov.sg/reside/student)

### Gaps vs open stack

Open #215→#222→#230 cover DP re-sponsor / STP work hours / SRS exit; LTVP→EP / mid-year school knock-ons / insurance exit bridge; common-law LTVP pack / AEIS vs hold / STVP medical gap. Remaining high-intent gaps off that path set: **DP child aging out at 21**, **S Pass → EP in-country upgrade**, **DP LOC renewal CPF pack**.

### Shipped

**New:** `dp-child-aging-out-21-pass-options-singapore.mdx`, `s-pass-to-ep-upgrade-in-singapore.mdx`, `dp-loc-renewal-local-hire-cpf-pack-singapore.mdx`

**Upgraded:** Dependant’s Pass, trailing-partner careers, S Pass, EP vs S Pass (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No open #215 / #222 / #230 guide bodies; no re-edit of those parents (changing-jobs EP, Student’s Pass, SRS; PLOC/LTVP, international schools, health-insurance-expat; AEIS, local schools, between-jobs STVP, document apostille).
- Did not wait for CI or merges on prior tips.

### Questions mined

1. Can we renew DP for a 21st birthday semester?
2. Is Student’s Pass automatic when DP ends?
3. Does a raise auto-convert S Pass to EP?
4. What if EP is refused while I am still on S Pass?
5. Does “no EP quota” block conversion forever?
6. Can I renew LOC without hiring a local?
7. How many CPF months do I need before LOC renewal?
8. Should I keep invoicing while LOC is pending?
9. Does ACRA shareholding alone clear renewal?
10. When should we start the aging-out runway?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 28)

Branch: `cursor/loop-d-next-polish-tick28-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Cross-linked Family / Next parents for AEIS, STVP, and apostille. Avoided open Loop D file sets from [#215](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/215) / [#222](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/222).

**Merge order note (controller):** `#215 → #222 → this tip`.

### Sources mined

**Reddit / forums**

- r/askSingapore — common-law LTVP on shared lease folklore.
- r/askSingapore — AEIS pass then cancel international hold; S-AEIS as backup myth.
- r/askSingapore — STVP JB hop + uninsured week after group medical ends.

**Official**

- [MOM — LTVP documents](https://www.mom.gov.sg/passes-and-permits/long-term-visit-pass/documents-required) · [LTVP eligibility](https://www.mom.gov.sg/passes-and-permits/long-term-visit-pass/eligibility)
- [MOE — AEIS](https://www.moe.gov.sg/international-students/aeis) · [S-AEIS](https://www.moe.gov.sg/international-students/s-aeis)
- [MOM — Cancel EP](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass) · [MOH healthcare](https://www.moh.gov.sg/home/our-healthcare-system)

### Gaps vs open stack

Open #215→#222 cover DP re-sponsor / STP work hours / SRS exit; LTVP→EP / mid-year school knock-ons / insurance exit bridge. Remaining gaps: **common-law LTVP evidence pack**, **AEIS vs international hold**, **STVP travel/medical gaps**.

### Shipped

**New:** `ltvp-common-law-spouse-evidence-pack-singapore.mdx`, `aeis-placement-vs-international-hold-singapore.mdx`, `stvp-travel-medical-cover-gap-singapore.mdx`

**Upgraded:** AEIS, local schools, between-jobs STVP, document apostille (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No #215 / #222 guide bodies; no re-edit of their parents (changing-jobs, Student’s Pass, SRS, PLOC/LTVP, international schools, health-insurance-expat).
- Did not wait for merges.

### Questions mined

1. Is a shared flat enough for common-law LTVP?
2. Which of MOM’s three proofs should we use?
3. Must the affidavit be notarised overseas?
4. Does AEIS pass guarantee a nearby primary?
5. When should I cancel the international-school hold?
6. Is S-AEIS a safe backup?
7. Does STVP include medical cover?
8. Can I fly to JB and return on STVP?
9. When does group medical end vs STVP end?
10. Should I buy travel insurance for the STVP window?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 27)

Branch: `cursor/loop-d-next-polish-tick27-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Cross-linked Move / Family / Money parents for LTVP/PLOC, schools, and health insurance. Avoided open Loop D file set from [#215](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/215).

**Merge order note (controller):** `#215 → this tip`.

### Sources mined

**Reddit / forums**

- r/askSingapore — “upgrade LTVP to EP”; PLOC treated as permanent conversion.
- r/askSingapore — mid-year international school hop; fee forfeiture vs pass expiry.
- r/askSingapore — uninsured STVP week after group medical ends; LOG deposits on exit.

**Official**

- [MOM — PLOC](https://www.mom.gov.sg/passes-and-permits/pre-approved-letter-of-consent/eligibility) · [Work passes for ICA LTVP](https://www.mom.gov.sg/passes-and-permits/work-passes-for-holders-of-long-term-visit-passes-issued-by-ica) · [EP eligibility](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility)
- [MOE](https://www.moe.gov.sg/) · [Notify MOM of EP changes](https://www.mom.gov.sg/passes-and-permits/employment-pass/notify-mom-of-changes)
- [MOH healthcare system](https://www.moh.gov.sg/home/our-healthcare-system) · [Cancel EP](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass)

### Gaps vs open stack

Open #215 covers DP re-sponsor on EP job change, Student’s Pass work hours, SRS exit withholding. Remaining high-intent gaps: **LTVP+PLOC → EP**, **mid-year school-transfer knock-ons**, **health-insurance exit bridge**.

### Shipped

**New:** `ltvp-ploc-to-ep-conversion-singapore.mdx`, `mid-year-school-transfer-pass-knockons-singapore.mdx`, `health-insurance-exit-between-jobs-bridge-singapore.mdx`

**Upgraded:** PLOC/LOC, LTVP, international schools, health-insurance-expat (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No #215 guide bodies (DP re-sponsor, STP work hours, SRS exit withholding) and no re-edit of #215 parents (changing-jobs EP, Student’s Pass, SRS-as-foreigner).
- Did not wait for #215 CI or merge.

### Questions mined

1. Does PLOC auto-convert into an EP?
2. When should an LTVP spouse file their own EP?
3. Does FCF still apply if I already work on PLOC?
4. Does a mid-year school transfer extend my DP?
5. What fees do I forfeit if I leave mid-term?
6. Should I move house the same month as the school transfer?
7. When does employer group medical end on resignation?
8. Does STVP include medical cover?
9. Can I keep dependants on the old group plan during notice?
10. Should I buy a bridge before or after EP cancel?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 26)

Branch: `cursor/loop-d-next-polish-tick26-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Cross-linked Move / Money parents for job-change, Student’s Pass, and SRS. Avoided open Loop D file set from [#209](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/209).

**Merge order note (controller):** `#209 → this tip` (#201 already on `main`).

### Sources mined

**Reddit / forums**

- r/askSingapore — DP/school panic when principal job-hops; “FIN stays so DP is fine.”
- r/askSingapore — Student’s Pass 16-hour folklore; exchange students working; graduation ≠ EP.
- r/askSingapore — Emptying SRS on exit; 24% vs 15% withholding; early 5% + IR21 freeze collision.

**Official**

- [MOM — change jobs on EP](https://www.mom.gov.sg/faq/employment-pass/what-if-i-want-to-change-jobs-while-i-am-on-an-ep) · [Dependant’s Pass](https://www.mom.gov.sg/passes-and-permits/dependants-pass) · [Cancel / extend stay](https://www.mom.gov.sg/faq/work-pass-general/how-can-i-extend-my-pass-holders-stay-in-singapore)
- [MOM — Work pass exemption for foreign students](https://www.mom.gov.sg/passes-and-permits/work-pass-exemption-for-foreign-students) · [ICA Student’s Pass](https://www.ica.gov.sg/reside/STP/)
- [IRAS — SRS](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-reliefs-rebates-and-deductions/tax-reliefs/supplementary-retirement-scheme-(srs)) · [Tax on SRS withdrawals](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/special-tax-schemes/tax-on-srs-withdrawals)

### Gaps vs open stack

Open #209 covers EP side-hustle/creator traps, FCF 14-day MCF clock, CPF closure after renouncing. Remaining high-intent gaps: **DP re-sponsor on principal EP change**, **Student’s Pass work-hour / vacation exemption**, **SRS exit withholding for non-residents**.

### Shipped

**New:** `dp-resubmission-when-principal-changes-ep-singapore.mdx`, `student-pass-work-hours-vacation-exemption-singapore.mdx`, `srs-exit-withholding-nonresident-singapore.mdx`

**Upgraded:** changing-jobs EP, Student’s Pass, SRS-as-foreigner (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No #209 guide bodies (side-hustle traps, FCF 14-day clock, CPF closure) and no re-edit of #209 parents (side-income, FCF, COMPASS, CPF withdrawal, leaving-costs).
- Did not wait for #209 CI or merge.

### Questions mined

1. Does my family’s DP auto-move when I change EP employers?
2. When should the new employer re-file DP relative to old cancel?
3. What STVP length should I ask for dependants on cancel?
4. Can Student’s Pass holders work 16 hours for any employer?
5. Do exchange students get the work exemption?
6. Does graduation convert STP into an EP?
7. Is SRS withholding the final tax when I leave?
8. When does the 5% early-withdrawal penalty apply?
9. Can I use the 15% concessionary withholding path?
10. Should I empty SRS the same week IR21 freezes salary?

---

---

## Loop B — Family + Belong (tick 31) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick31-8971` → PR to `main`. Owns **Family** + **Belong** plus light schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #234. Shared log + `site.ts` only. With #149/#155/#159 merged, shipped **learning-support waitlist depth**. Did not wait for #234 CI/merge.

### Sources mined

**Reddit / forums**

- r/askSingapore — LS referral filed, seat not; tutor stack while waiting.
- r/askSingapore — tuition lobby sofas as the real parent meetup.
- r/askSingapore — mid-year transfer deposit fights; uniform/bus reset week.

**Official**

- [MOE SEN](https://www.moe.gov.sg/special-educational-needs) + [international schools](https://www.moe.gov.sg/international-schools) + [Parent Hub](https://www.moe.gov.sg/parent-hub)

### Gaps vs prior Loop B ticks

Ticks 1–30 (open through #234) covered CCA/academy/sideline/dengue. Newly fair after #149: **LS waitlist ops**. Remaining heat without contested paths: **tuition lobby belonging**, **mid-year IS transfer ops**.

### Shipped this loop

**New guides**

- `content/guides/family/international-school-learning-support-waitlist-ops-dual-career-singapore.mdx`
- `content/guides/belong/tuition-centre-lobby-parent-belonging-singapore.mdx`
- `content/guides/family/international-school-midyear-transfer-dual-career-singapore.mdx`

**Upgraded guides** (outside open B stack)

- LS vs tutoring, special needs support, school waitlist realism, NLB parent belonging, Mandarin enrichment
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- the-tutors, kumon-centres, parkway-shenton, Singapore American School, Stamford American, Overseas Family School

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #166–#234 guide/entity paths.
- No force-push to `main`.

### Questions mined (sample)

1. When was the LS referral dated?
2. Who owns the chase email this week?
3. What is the interim tutor end date?
4. Same tuition lobby window thrice?
5. What is the withdrawal notice clock?
6. Is the LS packet packed for the new school?
7. Who owns bus/uniform reset?
8. Are both calendars blocked for the review meeting?

---

---

---

## Loop B — Family + Belong (tick 30) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick30-8971` → PR to `main`. Owns **Family** + **Belong** plus light schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #227. Shared log + `site.ts` only. With #115/#91/#129/#134 merged, shipped CCA vs academy + sideline belonging; still avoided learning-support waitlist depth while #149 is open.

### Sources mined

**Reddit / forums**

- r/askSingapore — CCA + academy double stack; Grab between venues; helper rest-day collisions.
- r/askSingapore — sideline chairs as the real parent meetup; coaching politics fatigue.
- r/askSingapore — dengue cluster fever anxiety; dual WFH “monitoring” folklore.

**Official**

- [MOE CCA](https://www.moe.gov.sg/education-in-sg/our-programmes/cca) + [Parent Hub](https://www.moe.gov.sg/parent-hub)
- [ActiveSG](https://www.activesg.gov.sg/) / [Sport Singapore](https://www.sportsingapore.gov.sg/)
- [NEA dengue clusters](https://www.nea.gov.sg/dengue-zika/dengue/dengue-clusters) + [HealthHub dengue](https://www.healthhub.sg/a-z/diseases-and-conditions/dengue)

### Gaps vs prior Loop B ticks

Ticks 1–29 (open through #227) covered ops through head-lice/speech-day/foodcourt. Unblocked after earlier merges: **CCA vs external academy**, **youth sports sideline belonging**. Remaining heat without contested paths: **dengue child-fever coverage**.

### Shipped this loop

**New guides**

- `content/guides/family/primary-cca-vs-external-academy-dual-career-singapore.mdx`
- `content/guides/belong/youth-sports-sideline-parent-belonging-singapore.mdx`
- `content/guides/family/dual-career-dengue-child-fever-coverage-singapore.mdx`

**Upgraded guides** (outside open B stack)

- IS CCA belonging, youth sports academies, kids activities/camps, kids swimming safety, part-time babysitter/nanny
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- ACS International, Dulwich College Singapore, Tanglin Trust School, Raffles Medical, mental-health counselling

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #142–#227 guide/entity paths.
- No learning-support waitlist depth while #149 is open.

### Questions mined (sample)

1. Is CCA or academy the primary rail this term?
2. Who owns Tuesday pickup?
3. Same sideline chair next fixture?
4. Did we freeze outdoor fixtures during the fever?
5. Who is today’s dengue-season coverage owner?
6. Are academy make-ups worth the Grab stack?
7. Heat / haze plan for the sideline?
8. Is the GP slot booked before midnight forum scrolling?

---

---

---

---

## Loop B — Family + Belong (tick 29) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick29-8971` → PR to `main`. Owns **Family** + **Belong** plus light services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #216. Shared log + `site.ts` only. Skipped CCA/academy/sports-sideline (#115/#91) and learning-support waitlist depth (#149).

### Sources mined

**Reddit / forums**

- r/askSingapore — class lice letters; pharmacy queues; sibling combing fights.
- r/askSingapore — speech-day RSVPs vs client calls; prize callouts missed.
- r/askSingapore — same foodcourt dinner table after enrichment as the real hello.

**Official**

- [HealthHub head lice](https://www.healthhub.sg/a-z/diseases-and-conditions/head-lice) + [MOH](https://www.moh.gov.sg/)
- [MOE Parent Hub](https://www.moe.gov.sg/parent-hub) + [international schools](https://www.moe.gov.sg/international-schools)
- [NEA](https://www.nea.gov.sg/) + [HDB](https://www.hdb.gov.sg/) + [ECDA](https://www.ecda.gov.sg/)

### Gaps vs prior Loop B ticks

Ticks 1–28 (open through #216; #80/#91 merged) covered schools through helper rest-day/report-card/supermarket. Remaining heat without contested paths: **head-lice outbreak ops**, **IS speech day / prize-giving ops**, **foodcourt dinner parent belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-head-lice-school-outbreak-singapore.mdx`
- `content/guides/family/international-school-speech-day-prize-giving-ops-dual-career-singapore.mdx`
- `content/guides/belong/foodcourt-dinner-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open B stack)

- HDB HIP tenants, traffic accident motor claims, vaping/tobacco laws
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- alliance-movers, intact-immigration, will-writing-probate, prudential-singapore, car-sharing-rental

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #100–#216 guide/entity paths.

### Questions mined (sample)

1. Who owns same-day lice treatment?
2. Were siblings checked tonight?
3. Which adult has the speech-day blackout?
4. Is sibling care covered during the assembly?
5. Same foodcourt window thrice this week?
6. Did we return trays before the kopi add-on?
7. What does the school letter actually require for return?
8. Are phones silenced before prize callouts?

---

---

---

---

## Loop B — Family + Belong (tick 28) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick28-8971` → PR to `main`. Owns **Family** + **Belong** plus light schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #210. Shared log + `site.ts` only. Skipped CCA/academy/sports-sideline (#115/#91) and learning-support waitlist depth (#149).

### Sources mined

**Reddit / forums**

- r/askSingapore — helper Sunday rest day vs dual WFH folklore; enrichment stack fails.
- r/askSingapore — report-card portal drops at 22:40; progress-meeting booking scrambles.
- r/askSingapore — same supermarket aisle after dinner as the real neighbour hello.

**Official**

- [MOM FDW rest days](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/employers-guide/rest-days)
- [MOE Parent Hub](https://www.moe.gov.sg/parent-hub) + [international schools](https://www.moe.gov.sg/international-schools)
- [SFA](https://www.sfa.gov.sg/) + [HDB](https://www.hdb.gov.sg/)

### Gaps vs prior Loop B ticks

Ticks 1–27 (open through #210) covered schools through PH/orientation/hawker breakfast. Remaining heat without contested paths: **helper rest-day / Sunday coverage**, **IS report-card / progress-meeting ops**, **supermarket evening parent belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-helper-rest-day-sunday-coverage-singapore.mdx`
- `content/guides/family/international-school-report-card-progress-meeting-dual-career-singapore.mdx`
- `content/guides/belong/supermarket-evening-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open B stack)

- buying property/ABSD, HDB for PR/mixed status, tenant agent commission, CASE/Lemon Law, Singpass phishing scams, nightlife
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- end-of-lease-cleaning, tax-agents, notary-apostille, nation-employment, Hwa Chong Institution

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #80–#210 guide/entity paths.

### Questions mined (sample)

1. Who owns Sunday coverage this week?
2. Is enrichment capped to one slot?
3. When does the report card publish?
4. Who books the progress meeting?
5. Same supermarket window thrice this week?
6. Did we debrief grades together once?
7. Is agency relief actually bookable?
8. Are portal SMS links opening from the bookmark?

---

---

---

## Loop B — Family + Belong (tick 27) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick27-8971` → PR to `main`. Owns **Family** + **Belong** plus light schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #199. Shared log + `site.ts` only. Skipped CCA/academy/sports-sideline (#115/#91) and learning-support waitlist depth (#149).

### Sources mined

**Reddit / forums**

- r/askSingapore — PH school closed while both EPs still on Slack; helper rest-day stack.
- r/askSingapore — orientation week uniform fittings vs board meetings; bus trial skips.
- r/askSingapore — same hawker breakfast table after drop-off as the real parent hello.

**Official**

- [MOM public holidays](https://www.mom.gov.sg/employment-practices/public-holidays)
- [MOE Parent Hub](https://www.moe.gov.sg/parent-hub) + [international schools](https://www.moe.gov.sg/international-schools)
- [NEA](https://www.nea.gov.sg/) + [HDB](https://www.hdb.gov.sg/) + [PA](https://www.pa.gov.sg/)

### Gaps vs prior Loop B ticks

Ticks 1–26 (open through #199) covered schools through chickenpox/lost-property/mall soft-play. Remaining heat without contested paths: **PH school-closed coverage**, **IS orientation week ops**, **hawker breakfast parent belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-public-holiday-school-closed-coverage-singapore.mdx`
- `content/guides/family/international-school-orientation-week-dual-career-singapore.mdx`
- `content/guides/belong/hawker-breakfast-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open B stack)

- HDB bedroom rental rules, HDB landlord selling, renting process LOI/TA, Changi Grab/taxi, car ownership vs sharing, sports/fitness
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- bank-account-opening, telecom-setup-help, pet-relocation, ACS Independent, Raffles Institution

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #80–#199 guide/entity paths.

### Questions mined (sample)

1. Who owns daytime coverage on the next PH?
2. Does helper rest day stack on that PH?
3. Are orientation blocks on both work calendars?
4. Was the bus route dry-run done?
5. Same hawker breakfast window thrice this week?
6. Portal login tested before day one?
7. Uniforms labelled before fittings?
8. Did we cap enrichment FOMO for the long weekend?

---

---

---

---

## Loop B — Family + Belong (tick 26) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick26-8971` → PR to `main`. Owns **Family** + **Belong** plus light schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #190. Shared log + `site.ts` only. Skipped CCA/academy/sports-sideline (#115/#91) and learning-support waitlist depth (#149).

### Sources mined

**Reddit / forums**

- r/askSingapore — chickenpox crusting vs “spots look fine”; sibling cascade.
- r/askSingapore — lost water bottles; muted parent portals; permission-slip panic.
- r/askSingapore — mall soft-play as the rainy-day parent meetup.

**Official**

- [HealthHub chickenpox](https://www.healthhub.sg/a-z/diseases-and-conditions/chickenpox) + [MOH](https://www.moh.gov.sg/)
- [MOE Parent Hub](https://www.moe.gov.sg/parent-hub) + [international schools](https://www.moe.gov.sg/international-schools)
- [ECDA](https://www.ecda.gov.sg/) + [NEA](https://www.nea.gov.sg/)

### Gaps vs prior Loop B ticks

Ticks 1–25 (open through #190) covered schools through haze/book-fair/ActiveSG. Remaining heat without contested paths: **chickenpox / varicella exclusion**, **IS lost-property / admin-portal ops**, **mall indoor-playground parent belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-chickenpox-varicella-school-exclusion-singapore.mdx`
- `content/guides/family/international-school-lost-property-admin-portal-dual-career-singapore.mdx`
- `content/guides/belong/mall-indoor-playground-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open B stack)

- HDB ceiling leak, security deposit/diplomatic clause, short vs long rental, shopping essentials, weekend getaways, cycling/active mobility
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- furniture-rental, self-storage, veterinary-clinics, NUS High, Methodist Girls' School

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #80–#190 guide/entity paths.

### Questions mined (sample)

1. What is the written crusting / clearance rule?
2. Does the well sibling still have class tomorrow?
3. Who owns portal notifications this term?
4. Are bottles labelled with name + phone?
5. When is the weekly lost-property sweep?
6. Same mall soft-play hour next week?
7. Is the bedroom dry enough to convalesce?
8. Did we freeze visitor playdates?

---

---

---

## Loop B — Family + Belong (tick 25) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick25-8971` → PR to `main`. Owns **Family** + **Belong** plus light schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #179. Shared log + `site.ts` only. Skipped CCA/academy/sports-sideline (#115/#91) and learning-support waitlist depth (#149).

### Sources mined

**Reddit / forums**

- r/askSingapore — PSI spike mid-meeting; preschool early dismissal SMS.
- r/askSingapore — book-fair PayNow guilt; volunteer shift ghosts.
- r/askSingapore — ActiveSG learn-to-swim deck as the real parent meetup.

**Official**

- [NEA](https://www.nea.gov.sg/) haze / PSI
- [MOE Parent Hub](https://www.moe.gov.sg/parent-hub) + [international schools](https://www.moe.gov.sg/international-schools)
- [ActiveSG](https://www.activesg.gov.sg/) / [Sport Singapore](https://www.sportsingapore.gov.sg/)
- [NLB](https://www.nlb.gov.sg/)

### Gaps vs prior Loop B ticks

Ticks 1–24 (open through #179) covered schools through HFMD/sports-day/wet-market. Remaining heat without contested paths: **haze PSI school-closure coverage**, **IS book-fair / fundraising ops**, **ActiveSG swim-parent belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-haze-psi-school-closure-coverage-singapore.mdx`
- `content/guides/family/international-school-book-fair-fundraising-ops-dual-career-singapore.mdx`
- `content/guides/belong/activesg-swim-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open B stack)

- deposit return/handover, furnishing, rental inventory, apps that matter, MRT/bus literacy, what to wear
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- aircon-servicing, driving-schools-licence, confinement-nanny, SOTA, Hwa Chong International

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #80–#179 guide/entity paths.
- No force-push to `main`.

### Questions mined (sample)

1. Who owns the phone when the early-dismissal SMS lands?
2. Is the home aircon actually working today?
3. What is the hard wallet cap per child?
4. Which adult owns the book-fair volunteer shift?
5. Same ActiveSG bench next Saturday?
6. Did we put NEA + school apps on both phones?
7. Is outdoor PE cancelled or is the whole campus closed?
8. Are masks labelled in the school bag?

---

---

## Loop B — Family + Belong (tick 24) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick24-8971` → PR to `main`. Owns **Family** + **Belong** plus light schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #172. Shared log + `site.ts` only. Skipped CCA/academy/sports-sideline (#115/#91) and learning-support waitlist depth (#149).

### Sources mined

**Reddit / forums**

- r/askSingapore — HFMD exclusion letters vs dual WFH folklore; sibling class closures.
- r/askSingapore — sports-day house-colour kit misses; volunteer shift vs client calls.
- r/askSingapore — wet-market Saturday loops as the real parent hello rail.

**Official**

- [MOH HFMD](https://www.moh.gov.sg/diseases-updates/hand-foot-and-mouth-disease) + [HealthHub HFMD](https://www.healthhub.sg/a-z/diseases-and-conditions/hand-foot-and-mouth-disease)
- [MOE Parent Hub](https://www.moe.gov.sg/parent-hub) + [international schools](https://www.moe.gov.sg/international-schools)
- [NEA](https://www.nea.gov.sg/) + [HDB](https://www.hdb.gov.sg/) + [PA](https://www.pa.gov.sg/) + [ECDA](https://www.ecda.gov.sg/)

### Gaps vs prior Loop B ticks

Ticks 1–23 (open through #172) covered schools through recovery/photo/void-deck. Remaining heat without contested paths: **HFMD / school-outbreak coverage**, **IS sports-day / carnival ops**, **wet-market morning parent belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-hfmd-school-outbreak-coverage-singapore.mdx`
- `content/guides/family/international-school-sports-day-carnival-ops-dual-career-singapore.mdx`
- `content/guides/belong/wet-market-morning-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open B stack)

- aircon/pest renewals, fibre/TP for renters, lease renewal rent increase, flash floods, pets daily life
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- dental-care, physiotherapy-rehab, fdw-agencies, NPS International, Hillside World Academy

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #80–#172 guide/entity paths.

### Questions mined (sample)

1. What is the written exclusion end-date?
2. Does a well sibling still have a closed class?
3. Who owns daytime coverage tomorrow?
4. Are house colours packed at T−2?
5. Which adult owns the volunteer shift?
6. What is the rain / heat plan?
7. Which wet-market stalls are the repeat rail?
8. Did we shift helper rest day off outbreak mornings?

---

---

## Loop B — Family + Belong (tick 23) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick23-8971` → PR to `main`. Owns **Family** + **Belong** plus light schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #166. Shared log + `site.ts` only. Skipped CCA/academy/sports-sideline (#115/#91) and learning-support waitlist depth (#149).

### Sources mined

**Reddit / forums**

- r/askSingapore — discharge-day optimism vs sleep debt; noisy renovation during recovery.
- r/askSingapore — photo-day wardrobe fails; yearbook order deadlines.
- r/askSingapore — kopi after drop-off as the real parent meetup.

**Official**

- [MOH](https://www.moh.gov.sg/home/our-healthcare-system)
- [MOE Parent Hub](https://www.moe.gov.sg/parent-hub) + [international schools](https://www.moe.gov.sg/international-schools)
- [HDB](https://www.hdb.gov.sg/) + [PA](https://www.pa.gov.sg/)

### Gaps vs prior Loop B ticks

Ticks 1–22 (open through #166) covered schools through CC belonging. Remaining heat without contested paths: **post-hospitalisation recovery week**, **IS photo-day ops**, **void-deck/kopi parent belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-post-hospitalisation-recovery-week-singapore.mdx`
- `content/guides/family/international-school-photo-day-ops-dual-career-singapore.mdx`
- `content/guides/belong/void-deck-kopi-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open B stack)

- landlord entry/quiet enjoyment, utilities/telecom, dating/social, dengue clusters, early lease termination
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- optical-eye-care, pest-control, UWCSEA East, SJI International, Invictus International

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #80–#166 guide/entity paths.

### Questions mined (sample)

1. Who owns daytime coverage on discharge+1?
2. Is the bedroom quiet enough to convalesce?
3. When is the photo order deadline?
4. Are uniforms laid out at T−1?
5. What is the retake rule after fever?
6. Which kopi shop is the repeat rail?
7. Are void-deck gathering rules clear?
8. Did we shift helper rest day off recovery mornings?

---

---

## Loop B — Family + Belong (tick 22) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick22-8971` → PR to `main`. Owns **Family** + **Belong** plus light clubs/schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #159. Shared log + `site.ts` only. Skipped CCA/academy/sports-sideline (#115/#91) and learning-support waitlist depth (#149).

### Sources mined

**Reddit / forums**

- r/askSingapore — sibling meltdown while one child is admitted; helper overload.
- r/askSingapore — birthday guest-list inflation; condo function-room deposits.
- r/askSingapore — OnePA / CC courses as soft landing for foreigners.

**Official**

- [MOH](https://www.moh.gov.sg/home/our-healthcare-system) + [ECDA](https://www.ecda.gov.sg/)
- [NParks](https://www.nparks.gov.sg/)
- [PA](https://www.pa.gov.sg/) + [OnePA](https://www.onepa.sg/)

### Gaps vs prior Loop B ticks

Ticks 1–21 (open through #159) covered schools through park belonging. Remaining heat without contested paths: **sibling care during hospitalisation**, **kids birthday party ops**, **CC/PA parent belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-sibling-care-during-hospitalisation-singapore.mdx`
- `content/guides/family/kids-birthday-party-ops-dual-career-singapore.mdx`
- `content/guides/belong/community-centre-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open B stack)

- hawker food, arts/culture, moving within Singapore, mould/humidity
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- Tanglin Club, Tower Club, GIIS, XCL, family-law-expat

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #80–#159 guide/entity paths.

### Questions mined (sample)

1. Who covers sibling bedtime if the ward parent stays overnight?
2. Are two sibling backups confirmed?
3. What is the guest-list cap before class pressure expands it?
4. Does MCST need a deposit for the function room?
5. Is helper rest day on party day?
6. Which two CCs are within 15 minutes?
7. Is the OnePA foreigner fee tier clear?
8. Can hospital visiting include siblings this week?

---

---

## Loop B — Family + Belong (tick 21) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick21-8971` → PR to `main`. Owns **Family** + **Belong** plus light schools/services entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #155. Shared log + `site.ts` only. Skipped CCA/academy/sports-sideline (#115/#91) and learning-support waitlist depth (#149).

### Sources mined

**Reddit / forums**

- r/askSingapore — overnight ward parent vs sibling coverage; insurance panel panic.
- r/askSingapore — PTC slot wars; which parent should attend; no written follow-up.
- r/askSingapore — playground regulars as soft belonging; heat/haze cancellations.

**Official**

- [MOH healthcare system](https://www.moh.gov.sg/home/our-healthcare-system)
- [MOE Parent Hub](https://www.moe.gov.sg/parent-hub) + [international schools](https://www.moe.gov.sg/international-schools)
- [NParks](https://www.nparks.gov.sg/)

### Gaps vs prior Loop B ticks

Ticks 1–20 (open through #155) covered schools through faith–preschool belonging. Remaining heat without contested paths: **child hospitalisation coverage**, **PTC dual-career ops**, **park/playground parent belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-child-hospitalisation-coverage-singapore.mdx`
- `content/guides/family/parent-teacher-conference-dual-career-singapore.mdx`
- `content/guides/belong/park-playground-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open B stack)

- emergencies 995, haze preparedness, condo vs HDB, construction-site noise
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- `content/entities/services/smg.json`
- `content/entities/services/private-health-insurance.json`
- `content/entities/services/aia-singapore.json`
- `content/entities/schools/singapore-american-school.json`
- `content/entities/schools/stamford-american.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #80–#155 guide/entity paths.

### Questions mined (sample)

1. Who sleeps in the ward tonight?
2. Who runs sibling drop-off tomorrow?
3. Is the guarantee letter ready?
4. Which parent leads the PTC?
5. What are the three concerns max?
6. What is the written follow-up?
7. Which playground is our repeat rail?
8. What is the haze backup plan?

---

---

## Loop B — Family + Belong (tick 20) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick20-8971` → PR to `main`. Owns **Family** + **Belong** plus light schools/clubs entity depth. No ads / no Grok. Did **not** edit open B stack guide/entity paths through #149 (#80/#91/#100/#108/#115/#129/#134/#142/#149). Shared log + `site.ts` only. Skipped primary-CCA-vs-academy (#115/#91 adjacency) and learning-support waitlist depth (#149 adjacency).

### Sources mined

**Reddit / forums**

- r/askSingapore — fever exclusions vs dual EP meetings; helper rest-day cliffs.
- r/askSingapore — kids’ passport validity surprises; embassy queues before long breaks.
- r/askSingapore — church/temple preschool gates as belonging; unpaid nursery rota fatigue.

**Official**

- [MOH](https://www.moh.gov.sg/) + [ECDA](https://www.ecda.gov.sg/)
- [ICA](https://www.ica.gov.sg/) + [MOM Dependant’s Pass](https://www.mom.gov.sg/passes-and-permits/dependants-pass)
- [MCCY](https://www.mccy.gov.sg/) community orientation

### Gaps vs prior Loop B ticks

Ticks 1–19 (open through #149) covered schools/SEN through NLB belonging. Remaining heat without contested paths: **dual-career sick-child coverage**, **kids passport/term-travel ops**, **faith–preschool parent belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-sick-child-coverage-singapore.mdx`
- `content/guides/family/kids-passport-renewal-school-term-travel-singapore.mdx`
- `content/guides/belong/faith-preschool-parent-belonging-singapore.mdx`

**Upgraded guides** (outside open B stack)

- family violence PPO, heartland living, condo noise/MCST
- `src/lib/site.ts` Family + Belong rails

**Entity depth**

- `content/entities/clubs/st-georges-church.json`
- `content/entities/schools/japanese-school.json`
- `content/entities/schools/lycee-francais.json`
- `content/entities/schools/swiss-school.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / clone copy.
- No edits to open #80–#149 guide/entity paths.

### Questions mined (sample)

1. Who owns Wednesday if the fever starts at drop-off?
2. Is the helper rest day on the matrix?
3. How many months left on each child’s passport?
4. Does term-time absence need principal approval?
5. Is nursery during service our coverage plan? (No.)
6. How many volunteer hours fit two full-time jobs?
7. Which embassy queue is slower?
8. Who is on-island if one parent flies with the kids?

---

---

## Loop B — Family + Belong (tick 19) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick19-8971` → PR to `main`. Owns **Family** + **Belong** guides plus light schools/services entity depth. No ads / no Grok. Did **not** edit any path in open B stack #80/#91/#100/#108/#115/#129/#134/#142. Light Home cross-link only on neighbourhood choice. Explicitly skipped primary-CCA-vs-academy and sports-sideline belonging (#115/#91 adjacency).

### Sources mined

**Reddit / forums**

- r/askSingapore — tutor stacking after a bad report; learning-support waitlists; “is Kumon SEN?”
- r/askSingapore — home-leave return Mondays; helper rest-day cliffs; jet-lag school meltdowns.
- r/askSingapore — NLB storytime as soft landing; library membership for foreigners.

**Official**

- [MOE — Special educational needs](https://www.moe.gov.sg/special-educational-needs) + [international schools](https://www.moe.gov.sg/international-schools)
- [ICA](https://www.ica.gov.sg/) arrival orientation
- [NLB](https://www.nlb.gov.sg/) + live membership pages

### Gaps vs prior Loop B ticks

Ticks 1–18 (incl. open #80–#142) covered schools/SEN intros through condo belonging. Remaining heat without touching contested paths: **learning-support vs tutoring cash**, **home-leave jet-lag dual-career ops**, **NLB parent belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/international-school-learning-support-vs-tutoring-singapore.mdx`
- `content/guides/family/home-leave-jetlag-dual-career-family-singapore.mdx`
- `content/guides/belong/nlb-library-parent-belonging-singapore.mdx`

**Upgraded guides** (only paths outside open B stack)

- IVF fertility, divorce/custody, choosing neighbourhood (Home)
- `src/lib/site.ts` (Family + Belong topic rails)

**Entity depth**

- `content/entities/schools/overseas-family-school.json`
- `content/entities/schools/iss-international.json`
- `content/entities/schools/owis.json`
- `content/entities/services/kumon-centres.json`
- `content/entities/services/the-tutors.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Zero edits to open #80–#142 file paths.

### Questions mined (sample)

1. How many learning-support hours are inside fees?
2. Will the school act on an external ed-psych report?
3. What is the tutor stop date?
4. Who owns the first Monday after home leave?
5. Does helper rest day land on return morning?
6. When do we start sliding bedtimes before the flight home?
7. Is NLB membership open on our pass type?
8. Can storytime replace a playgroup rail?

---

---

## Loop B — Family + Belong (tick 18) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick18-8971` → PR to `main`. Owns **Family** + **Belong** guides plus light schools/clubs entity depth. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next body trees. Explicitly skipped open-stack topics in #80 (myopia/swim/cooking), #91 (parental burnout/UCAS/youth sports academies), #100 (primary transition/IS boarding/youth performing arts), #108 (grandparents/bilingual homework/youth volunteering), #115 (school-holiday coverage/IS CCA/teen internships), #129 (exam-week/IS PTA/teen driving), and #134 (sibling fees/newborn–preschool handoff/workplace belonging). Also skipped primary-CCA-vs-academy to stay clear of #115/#91 adjacency.

### Sources mined

**Reddit / forums**

- r/askSingapore — bus late / CCA dismissal cliffs; Grab-as-daily-pickup regret.
- r/askSingapore — teen class WhatsApp at midnight; phone bans that collapse on travel weeks.
- r/askSingapore — condo parent chat politics; free babysitting assumptions; parcel-swap belonging.

**Official**

- [MOE — Student Care Centres](https://www.moe.gov.sg/education-in-sg/our-programme/student-care-centres)
- [CSA](https://www.csa.gov.sg/) family digital-safety orientation
- [HDB](https://www.hdb.gov.sg/) neighbourhood framing + estate MCST by-laws (private)

### Gaps vs prior Loop B ticks

Ticks 1–17 (incl. open #80–#134) covered schools/SEN through workplace belonging. Remaining heat: **IS bus/pickup dual-career ops**, **teen phone/social household contracts**, **condo/block parent belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/international-school-bus-pickup-dual-career-singapore.mdx`
- `content/guides/family/teen-phone-social-media-household-singapore.mdx`
- `content/guides/belong/condo-block-parent-networks-belonging-singapore.mdx`

**Upgraded guides** (low-conflict vs open B stack)

- teen counselling, kids ADHD meds, braces, AEIS/SAEIS, getting married, book clubs
- `src/lib/site.ts` (Family + Belong topic rails)

**Entity depth**

- `content/entities/schools/nexus-international.json`
- `content/entities/schools/dover-court.json`
- `content/entities/schools/chatsworth-international.json`
- `content/entities/clubs/british-association.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not rewrite open #80 / #91 / #100 / #108 / #115 / #129 / #134 bodies; avoided contested files in that stack where possible.

### Questions mined (sample)

1. Who owns Wednesday pickup when CCA runs late?
2. Is Grab a backup fund or a daily habit?
3. What is the household phone sleep window?
4. Do class chats mute overnight?
5. Can condo chats become unpaid childcare?
6. How many neighbours have explicitly said yes to an emergency scenario?
7. Where do phones charge during mock weeks?
8. What is the bus SMS contact for delays?

---

---

## Loop B — Family + Belong (tick 17) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick17-8971` → PR to `main`. Owns **Family** + **Belong** guides plus light schools/services entity depth. No ads / no Grok. Did **not** touch Move / Money / Life / Next body trees beyond a light Home cross-link on MDW hiring. Explicitly skipped open-stack topics in #80 (myopia/swim/cooking), #91 (parental burnout/UCAS/youth sports academies), #100 (primary transition/IS boarding/youth performing arts), #108 (grandparents/bilingual homework/youth volunteering), #115 (school-holiday coverage/IS CCA/teen internships), and #129 (exam-week coverage/IS PTA/teen driving).

### Sources mined

**Reddit / forums**

- r/askSingapore — second/third IS fee shock; sibling discount myths; corporate education caps.
- r/askSingapore — confinement ends / infant-care waitlist still cold; dual-EP fever-day fights.
- r/askSingapore — employer parent ERGs; helper Sunday community; privacy in condo employer chats.

**Official**

- [MOE — International schools](https://www.moe.gov.sg/international-schools)
- [ECDA](https://www.ecda.gov.sg/) + [MOH National Childhood Immunisation Schedule](https://www.moh.gov.sg/ownhealth/stay-well/national-childhood-immunisation-schedule)
- [MOM — Newborn Dependant’s Pass](https://www.mom.gov.sg/passes-and-permits/dependants-pass/getting-a-pass-for-a-newborn) + [FDW Work Permit](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker)

### Gaps vs prior Loop B ticks

Ticks 1–16 (incl. open #80/#91/#100/#108/#115/#129) covered schools/SEN through teen driving. Remaining heat: **IS sibling fees/bursary realism**, **newborn→preschool dual-career handoff**, **workplace parent + helper-community belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/international-school-sibling-fees-bursary-singapore.mdx`
- `content/guides/family/newborn-preschool-handoff-dual-career-singapore.mdx`
- `content/guides/belong/workplace-parent-helper-community-belonging-singapore.mdx`

**Upgraded guides** (low-conflict vs open B stack)

- confinement nanny, maternity care, childhood vaccination, baby bonus/CDA, book clubs, hiring domestic helper (Home cross-link)
- `src/lib/site.ts` (Family + Belong topic rails)

**Entity depth**

- `content/entities/schools/australian-international-school.json`
- `content/entities/schools/canadian-international-school.json`
- `content/entities/schools/gess.json`
- `content/entities/services/comfort-employment.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not rewrite open #80 / #91 / #100 / #108 / #115 / #129 bodies; avoided contested files in that stack where possible.

### Questions mined (sample)

1. Is sibling discount tuition-only or all-in?
2. Does employer education cap cover child two?
3. When do infant-care applications need to start relative to birth?
4. Who owns fever-day pickup after both EPs return?
5. Is an office parents ERG enough belonging?
6. How do helper Sunday communities relate to employer privacy?
7. Can bursary language be underwritten before enrolment?
8. What backup exists for the first preschool sick weeks?

---

---

## Loop B — Family + Belong (tick 16) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick16-8971` → PR to `main`. Owns **Family** + **Belong** guides plus light clubs/services entity depth. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next body trees beyond a cross-link on driving-licence conversion. Explicitly skipped open-stack topics in #80 (myopia/swim/cooking), #91 (parental burnout/UCAS/youth sports academies), #100 (primary transition/IS boarding/youth performing arts), #108 (grandparents/bilingual homework/youth volunteering), and #115 (school-holiday coverage/IS CCA/teen internships).

### Sources mined

**Reddit / forums**

- r/askSingapore — dual-career mock/final week chaos; quiet-house rules; sibling coverage.
- r/askSingapore — IS PTA / class-rep WhatsApp politics; volunteer belonging vs unpaid labour.
- r/askSingapore — teen provisional licence / conversion myths / Grab-vs-drive household fights.

**Official**

- [MOE national exams](https://www.moe.gov.sg/secondary/national-examinations) + [SEAB](https://www.seab.gov.sg/) + [IB assessment](https://www.ibo.org/programmes/diploma-programme/assessment-and-exams/).
- [MOE Parent Hub](https://www.moe.gov.sg/parent-hub).
- [LTA learning to drive](https://www.lta.gov.sg/content/ltagov/en/getting_around/driving_in_singapore/learning_to_drive_and_getting_a_licence.html) + [foreign licence conversion](https://www.lta.gov.sg/content/ltagov/en/getting_around/driving_in_singapore/foreign_driving_licence_conversion.html) + [probationary licence](https://www.lta.gov.sg/content/ltagov/en/getting_around/driving_in_singapore/probationary_driving_licence.html).

### Gaps vs prior Loop B ticks

Ticks 1–15 (incl. open #80/#91/#100/#108/#115) covered schools/SEN through teen internships. Remaining heat: **exam-week dual-career coverage**, **IS parent-association/class-rep belonging**, **teen driving independence ops**.

### Shipped this loop

**New guides**

- `content/guides/family/exam-week-coverage-dual-career-singapore.mdx`
- `content/guides/belong/international-school-parent-association-belonging-singapore.mdx`
- `content/guides/family/teen-driving-independence-singapore.mdx`

**Upgraded guides** (low-conflict vs open B stack)

- parenting communities, religious communities, book/hiking, healthcare GP, paternity leave, dental, LGBTQ resources, converting foreign driving licence
- `src/lib/site.ts` (Family + Belong topic rails)

**Entity depth**

- `content/entities/clubs/swiss-club.json`
- `content/entities/clubs/japanese-association.json`
- `content/entities/clubs/german-association.json`
- `content/entities/services/parkway-shenton.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not rewrite open #80 / #91 / #100 / #108 / #115 bodies; avoided contested files in that stack where possible.

### Questions mined (sample)

1. Who is on-call during HL maths week if both EPs travel?
2. Should we pause CCA in mock season?
3. Is class-rep the fastest parent belonging rail?
4. How much PTA volunteer time is sustainable for two full-time jobs?
5. Does a US teen licence convert, or start fresh?
6. When should night-driving privileges start on a P-plate?
7. Can exam weeks and driving lessons coexist?
8. What household rules prevent first-month disasters?

---

---

## Loop B — Family + Belong (tick 15) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick15-8971` → PR to `main`. Owns **Family** + **Belong** guides plus light clubs/schools entity depth. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next. Explicitly skipped open-stack topics in #80 (myopia/swim/cooking), #91 (parental burnout/UCAS/youth sports academies), #100 (primary transition/IS boarding/youth performing arts), and #108 (grandparents/bilingual homework/youth volunteering).

### Sources mined

**Reddit / forums**

- r/askSingapore — dual-career June/December holiday coverage panic; camp waitlists; helper home leave collisions.
- r/askSingapore — IS CCA trials, sideline parent friendships, competitive vs recreational tracks.
- r/askSingapore — teen holiday internships / job shadowing / “is unpaid legal?” threads.

**Official**

- [MOE school calendar](https://www.moe.gov.sg/calendar) + [MOM leave](https://www.mom.gov.sg/employment-practices/leave).
- [MOE CCA context](https://www.moe.gov.sg/education-in-sg/our-programmes/ccas).
- [MOM employment of children and young persons](https://www.mom.gov.sg/employment-practices/employment-of-children-and-young-persons).

### Gaps vs prior Loop B ticks

Ticks 1–14 (incl. open #80/#91/#100/#108) covered schools/SEN through youth volunteering. Remaining heat: **dual-career school-holiday coverage ops**, **IS CCA belonging**, **teen internship/work-experience belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/school-holiday-coverage-dual-career-singapore.mdx`
- `content/guides/belong/international-school-cca-belonging-singapore.mdx`
- `content/guides/belong/teen-internships-work-experience-singapore.mdx`

**Upgraded guides** (low-conflict vs open B stack)

- secondary IB/A-Level, membership clubs, indoor hobbies, hash, chambers, special needs, American vs Tanglin
- `src/lib/site.ts` (Family + Belong topic rails)

**Entity depth**

- `content/entities/clubs/british-club.json`
- `content/entities/clubs/singapore-cricket-club.json`
- `content/entities/schools/dulwich-college-singapore.json`
- `content/entities/schools/acs-international.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not rewrite open #80 / #91 / #100 / #108 bodies; avoided contested files in that stack where possible.

### Questions mined (sample)

1. When should dual EP households book June camps?
2. How do we cover half-day camps without a helper?
3. Is one recreational CCA enough for belonging in year one?
4. Do competitive CCA pathways destroy weekend family time?
5. Are unpaid teen internships legal for DP holders?
6. Can chambers help with holiday shadow weeks?
7. Should internships replace a holiday camp week?
8. How do parents make friends on CCA sidelines without being pushy?

---

---

---

## Loop B — Family + Belong (tick 14) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick14-8971` → PR to `main`. Owns **Family** + **Belong** guides plus light clubs/services entity depth. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next. Explicitly skipped open-stack topics in #80 (myopia/swim/cooking), #91 (parental burnout/UCAS/youth sports academies), and #100 (primary transition/IS boarding/youth performing arts).

### Sources mined

**Reddit / forums**

- r/askSingapore — grandparents visiting to help with baby / long stay / pass limits.
- r/askSingapore — Mother Tongue homework meltdowns / tutor sprawl in MOE vs IS primary.
- r/askSingapore — teens volunteering / family charity shifts / CC foreigner limits.

**Official**

- [ICA Social Visit](https://www.ica.gov.sg/enter-depart/social_visit) + [ICA LTVP](https://www.ica.gov.sg/reside/LTVP) + [MOM Dependant’s Pass](https://www.mom.gov.sg/passes-and-permits/dependants-pass).
- [MOE Mother Tongue](https://www.moe.gov.sg/primary/curriculum/mother-tongue-languages) + [primary curriculum](https://www.moe.gov.sg/primary/curriculum) + [fees](https://www.moe.gov.sg/financial-matters/fees).
- [giving.sg](https://www.giving.sg/) + [volunteer.gov.sg](https://www.volunteer.gov.sg/) + [NVPC](https://www.nvpc.org.sg/).

### Gaps vs prior Loop B ticks

Ticks 1–13 (incl. open #80/#91/#100) covered schools/SEN/camps through braces/teen MH/playgroups, myopia/swim/cooking, parental burnout/UCAS/youth sports academies, primary transition/IS boarding/youth performing arts. Remaining heat: **grandparent long-stay caregiving**, **bilingual primary homework ops**, **youth volunteering belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/grandparents-long-stay-caregiving-singapore.mdx`
- `content/guides/family/bilingual-primary-homework-expat-kids-singapore.mdx`
- `content/guides/belong/youth-volunteering-communities-singapore.mdx`

**Upgraded guides** (low-conflict vs open B stack)

- part-time babysitter, Mandarin enrichment, local schools, volunteering networks, nationality groups, newborn pass, dual-career spouse, preschool
- `src/lib/site.ts` (Family + Belong topic rails)

**Entity depth**

- `content/entities/services/raffles-medical.json`
- `content/entities/clubs/hollandse-club.json`
- `content/entities/clubs/awa.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not rewrite open #80 / #91 / #100 bodies; minimized edits to contested files in that stack.

### Questions mined (sample)

1. Can grandparents stay six months on a Social Visit Pass to provide childcare?
2. Is LTVP automatic for EP parents who “need help with the baby”?
3. How do we replace grandparent cover when they fly home?
4. Should non-Chinese parents drill characters after overtime?
5. One enrichment brand or a private tutor for MTL homework?
6. Are People’s Association CC youth roles open to DP teens?
7. Which giving.sg shifts accept under-16s with a parent?
8. Can youth volunteering replace another paid academy for belonging?

---

---

## Loop B — Family + Belong (tick 13) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick13-8971` → PR to `main`. Owns **Family** + **Belong** guides plus light schools/clubs entity depth. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next. Explicitly skipped braces / teen MH / playgroups (#76, now on main), myopia / swim / cooking (#80 open), and parental burnout / UCAS / youth sports academies (#91 open).

### Sources mined

**Reddit / forums**

- r/askSingapore — P1 vs international Year 1, Mother Tongue shock, after-school care cliff.
- r/askSingapore — IS teens alone / boarding / guardianship when parents travel regionally.
- r/askSingapore — youth drama / dance / speech & drama as belonging vs one-off shows.

**Official**

- [MOE P1 international students](https://www.moe.gov.sg/primary/p1-registration/international-students) + [MOE international admissions](https://www.moe.gov.sg/international-students/admission) + [MTL](https://www.moe.gov.sg/primary/curriculum/mother-tongue-languages) + [fees](https://www.moe.gov.sg/financial-matters/fees).
- [MOE international students](https://www.moe.gov.sg/international-students) + [ICA Student’s Pass](https://www.ica.gov.sg/reside/STP) + [MOM Dependant’s Pass](https://www.mom.gov.sg/passes-and-permits/dependants-pass).
- [Esplanade](https://www.esplanade.com/) + [NAC](https://www.nac.gov.sg/) + [SRT](https://www.srt.com.sg/) + [SOTA](https://www.sota.edu.sg/).

### Gaps vs prior Loop B ticks

Ticks 1–12 covered schools/SEN/camps/clubs through ADHD/hiking, braces/teen MH/playgroups (now on main via #76), with #80/#91 still open for myopia/swim/cooking and parental burnout/UCAS/youth sports academies. Remaining heat this tick: **primary transition year ops**, **IS teen boarding/guardianship**, **youth performing-arts belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/primary-school-transition-expat-kids-singapore.mdx`
- `content/guides/family/boarding-hostel-international-school-teens-singapore.mdx`
- `content/guides/belong/youth-performing-arts-communities-singapore.mdx`

**Upgraded guides**

- preschool, school-waitlist, local-schools, international-schools, university-counselling, kids-activities, music-arts, find-my-people, anza-awa
- `src/lib/site.ts` (Family + Belong topic rails)

**Entity depth**

- `content/entities/schools/tanglin-trust-school.json`
- `content/entities/schools/uwcsea-dover.json`
- `content/entities/clubs/anza.json`
- `content/entities/clubs/american-club.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not rewrite #76 bodies now on main, or open #80 / #91 bodies.

### Questions mined (sample)

1. Is MOE P1 interest enough if we also paid IS application fees?
2. When does Mother Tongue tutoring need to start for a non-Chinese home?
3. Who covers the 1pm cliff in a dual-career week?
4. Does our IS actually offer weekly boarding this year?
5. Can a 16-year-old stay in a serviced apartment alone on a DP?
6. What pastoral cover exists at 11pm if both parents are in Jakarta?
7. Is youth theatre a better belonging rail than another sports academy?
8. How many shared show weeks before parents make friends?

---

---

## Loop B — Family + Belong (tick 12) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick12-8971` → PR to `main`. Owns **Family** + **Belong** guides plus light clubs/services entity depth. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next. Explicitly skipped braces / teen MH / playgroups (#76 tick 10) and myopia / swim / cooking (#80 tick 11).

### Sources mined

**Reddit / forums**

- r/askSingapore — dual-career parent exhaustion / helper gaps / spouse isolation adjacency to EAP stigma.
- r/askSingapore — international-school exit counselling / UCAS–Common App realism for mobile families ([HCIS](https://www.reddit.com/r/askSingapore/comments/1p7y994/hwa_chong_international_school_thoughts/), [SJII/HCI/ACI](https://www.reddit.com/r/askSingapore/comments/1r8hxmi/have_you_attended_sjii_hci_or_aci/), [IS worth it](https://www.reddit.com/r/askSingapore/comments/1e9e01p/are_international_schools_in_singapore_worth_it/)).
- r/askSingapore — kids team sports outside school / academy logistics (camps and CCA adjacency).

**Official**

- [MOH mental health services](https://www.moh.gov.sg/seeking-healthcare/find-a-facility-or-service/mental-health-services/for-the-public/) + [mindline.sg](https://mindline.sg/) + mindline 1771.
- [UCAS applying](https://www.ucas.com/applying) + [Common App](https://www.commonapp.org/) + [IB university admissions](https://www.ibo.org/university-admission/) + [MOE post-secondary](https://www.moe.gov.sg/post-secondary/admissions).
- [ActiveSG](https://www.activesgcircle.gov.sg/) + Sport Singapore / FAS pathway context.

### Gaps vs prior Loop B ticks

Ticks 1–11 (incl. open #76/#80) covered schools/SEN/camps/clubs, newborn/leave/vaccines, IVF/maternity/divorce, Reclub/parkrun, Mandarin, confinement, indoor hobbies, allergy/EpiPen, IB/A-Level, music, babysitter, uni counselling, book clubs, ADHD, hiking, braces/teen MH/playgroups, myopia/swim/cooking. Remaining heat: **parental burnout + EAP realism**, **UCAS/Common App ops for mobile teens**, **youth sports academies as belonging**.

### Shipped this loop

**New guides**

- `content/guides/family/parental-burnout-eap-singapore.mdx`
- `content/guides/family/ucas-common-app-expat-teens-singapore.mdx`
- `content/guides/belong/youth-sports-academies-singapore.mdx`

**Upgraded guides**

- `content/guides/family/dual-career-spouse-singapore.mdx`
- `content/guides/family/mental-health-resources.mdx`
- `content/guides/family/university-counselling-international-schools-singapore.mdx`
- `content/guides/family/kids-activities-holiday-camps.mdx`
- `content/guides/belong/hobby-sports-communities-singapore.mdx`
- `content/guides/belong/find-my-people-singapore.mdx`
- `content/guides/belong/anza-awa-associations.mdx`
- `src/lib/site.ts` (Family + Belong topic rails)

**Entity depth**

- `content/entities/services/mental-health-counselling.json`
- `content/entities/clubs/anza.json`
- `content/entities/clubs/american-club.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not rewrite braces / teen MH / playgroups (#76) or myopia / swim / cooking (#80) bodies.
- Did not expand Life ActiveSG facility trees beyond youth academy belonging notes.

### Questions mined (sample)

1. Does employer EAP cover DP spouse and kids, or employee only?
2. Are EAP sessions really confidential from HR?
3. Is mindline 1771 usable for foreigners?
4. Who owns the UCAS reference if we change schools mid-DP?
5. Do predicted grades reset after a mid-posting move?
6. Does IB alone cover US testing expectations?
7. Are ActiveSG-adjacent academy fees citizen-priced for DP kids?
8. How many weeks before an academy parent WhatsApp feels real?
9. Is a membership-club junior section worth it vs a neighbourhood academy?

---

---

## Loop B — Family + Belong (tick 11) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick11-8971` → PR to `main`. Owns **Family** + **Belong** guides plus light schools/clubs/services entity depth. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next. Explicitly skipped ADHD / Mandarin / hiking (#51 tick 9) and braces / teen MH / playgroups (tick 10 restore PR from `cursor/loop-b-family-belong-tick9-8971`, formerly #62).

### Sources mined

**Reddit / forums**

- r/askSingapore — kids myopia / Ortho-K / atropine ([high myopia specialist](https://www.reddit.com/r/askSingapore/comments/1slvwr2/high_myopia_specialist_for_kids/), [kids optical shops](https://www.reddit.com/r/askSingapore/comments/13kkqrm/optical_shops_for_kids/), [Ortho-K experiences](https://www.reddit.com/r/askSingapore/comments/1k5s10z/anyone_who_experienced_orthok_vision_correction/), [Ortho-K cost](https://www.reddit.com/r/askSingapore/comments/1eljyb8/how_much_is_your_orthok_treatment_and_where/)).
- r/askSingapore — kids camps / sports adjacency for swim competence ([outdoor camps](https://www.reddit.com/r/askSingapore/comments/1m1wlfb/are_there_any_good_outdoor_holiday_camps_for_kids/), [team sports outside school](https://www.reddit.com/r/askSingapore/comments/1re4fxt/team_sports_for_kids_pri_sch_outside_of_school/)).
- r/askSingapore — cooking classes as belonging ([start cooking](https://www.reddit.com/r/askSingapore/comments/1sc0ihv/how_do_you_start_to_learn_cooking/), [baking/cooking class experiences](https://www.reddit.com/r/askSingapore/comments/1iy0e5d/experiences_with_baking_cooking_classes_in_sg/), [dad needs friends / CC](https://www.reddit.com/r/askSingapore/comments/1k2tysx/having_a_dad_that_has_no_friends/)).

**Official**

- [SingHealth — Childhood myopia](https://www.singhealth.com.sg/symptoms-treatments/childhood-myopia) + [MOH NMPP note](https://www.moh.gov.sg/newsroom/effectiveness-of-national-myopia-prevention-programme-s-strategies-for-primary-school-students/) + [SNEC](https://www.snec.com.sg/).
- [ActiveSG Learn — Swimming](https://www.activesgcircle.gov.sg/learn/swimming) + SportSG SwimSafer media + [ActiveSG complexes](https://www.activesgcircle.gov.sg/facilities/swimming-complexes).
- [PA](https://www.pa.gov.sg/) / [OnePA](https://www.onepa.gov.sg/) community courses.

### Gaps vs prior Loop B ticks

Ticks 1–10 covered schools/SEN/camps/clubs, newborn/leave/vaccines, IVF/maternity/divorce, Reclub/parkrun, Mandarin, confinement, indoor hobbies, allergy/EpiPen, IB/A-Level, music, babysitter, uni counselling, book clubs, ADHD, hiking, and (in #62) braces/teen MH/playgroups. Remaining heat: **kids myopia-control product map**, **SwimSafer / ActiveSG foreigner lesson realism**, **cooking-class belonging** for non-sport personalities.

### Shipped this loop

**New guides**

- `content/guides/family/kids-myopia-control-singapore.mdx`
- `content/guides/family/kids-swimming-water-safety-singapore.mdx`
- `content/guides/belong/cooking-class-communities-singapore.mdx`

**Upgraded guides**

- `content/guides/family/finding-pediatrician-singapore.mdx`
- `content/guides/family/kids-activities-holiday-camps.mdx`
- `content/guides/family/kids-allergy-epipen-singapore.mdx`
- `content/guides/belong/find-my-people-singapore.mdx`
- `content/guides/belong/indoor-hobby-communities-singapore.mdx`
- `content/guides/belong/hobby-sports-communities-singapore.mdx`
- `content/guides/belong/anza-awa-associations.mdx`
- `src/lib/site.ts` (Family + Belong topic rails)

**Entity depth**

- `content/entities/services/raffles-medical.json`
- `content/entities/clubs/anza.json`
- `content/entities/clubs/american-club.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not rewrite ADHD / Mandarin / hiking / braces / teen MH / playgroups bodies.
- Did not expand Life ActiveSG facility trees beyond kids swim competence.

### Questions mined (sample)

1. Is Ortho-K worth the yearly lens cost for a sporty EP kid?
2. Can a polyclinic start atropine, or do we need private ophthalmology?
3. Do myopia-control glasses work without drops?
4. Are ActiveSG swim lessons full fee for DP children?
5. Is a condo coach enough, or do we need SwimSafer staging?
6. How do dual-career parents schedule 2× weekly lessons without a helper?
7. Are PA cooking courses open to foreigners at citizen SkillsFuture prices?
8. Do commercial studio packages actually create friends, or only recipes?
9. Can trailing partners use CC cooking as a soft landing beside ANZA?

---

---

---

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 25)

Branch: `cursor/loop-d-next-polish-tick25-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Cross-linked Move / Money parents for side-income, FCF, COMPASS, CPF withdrawal, leaving costs. Avoided open Loop D file set from [#201](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/201).

**Merge order note (controller):** `#201 → this tip`.

### Sources mined

**Reddit / forums**

- r/askSingapore — EP influencer / wedding / Grab “not a real job” folklore.
- r/askSingapore — verbal offer during MCF 14-day window; resign-before-ad-ends.
- r/askSingapore — CPF to Aussie super; REP expiry as cash-out; closure timing after renounce.

**Official**

- [MOM — multiple jobs FAQ](https://www.mom.gov.sg/faq/work-pass-general/can-a-work-pass-holder-work-in-multiple-jobs) · [DP overseas employer FAQ](https://www.mom.gov.sg/faq/dependants-pass/do-i-need-a-work-pass-if-i-am-self-employed-or-working-for-an-overseas-based-employer)
- [MOM — Fair Consideration](https://www.mom.gov.sg/employment-practices/fair-consideration-framework) · [MCF match FAQ](https://www.mom.gov.sg/faq/fair-consideration-framework/must-the-job-in-the-ep-or-s-pass-application-match-the-job-advertised-on-the-mycareersfuture)
- [CPF — closing account](https://www.cpf.gov.sg/member/account-services/cpf-asset-management/on-leaving-singapore) · [Online closure non-SC/non-PR](https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/apply-online-to-close-cpf-accounts-for-non-singapore-citizens-and-non-permanent-residents)

### Gaps vs open stack

Open #201 covers PEP/ONE/Tech chooser, EntrePass vs resident director, IR21 vs cancel vs STVP. Remaining high-intent gaps: **EP side-hustle / creator traps**, **FCF 14-day MCF clock**, **CPF closure after renouncing PR/SC**.

### Shipped

**New:** `ep-side-hustle-content-creator-traps-singapore.mdx`, `fcf-mycareersfuture-14-day-clock-ep-singapore.mdx`, `cpf-account-closure-after-renouncing-pr-singapore.mdx`

**Upgraded:** side-income, FCF, COMPASS explained, COMPASS firm-scores, CPF withdrawal, leaving-costs (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No #201 guide bodies (PEP/ONE/Tech chooser, EntrePass vs director, IR21 sequencing) and no re-edit of #201 parents (PEP, ONE, Tech, EntrePass, incorporate, tax-clearance, IR21-final-pay).
- Did not wait for #201 merge.

### Questions mined

1. Is a paid IG brand deal “work” on EP?
2. Does one wedding photography job break the pass?
3. Can DP overseas-remote lore copy onto EP?
4. Can HR offer during the 14-day MCF window?
5. Must IPA salary match the MCF ad band?
6. What screenshots prove FCF compliance before I resign?
7. Does REP expiry cash out CPF?
8. How long after renouncing PR does CPF closure take?
9. Is there a CPF→Aussie super pipe?
10. Should I renounce just for a small CPF balance?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 19)

Branch: `cursor/e-journeys-tools-tick19-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (post-#183 / Loop D22 tip). **Did not wait for merges or CI on prior tips.** Avoided open E stack exclusives through **#196** (E18): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**), school-bus-cca / driving-insurance-gap (**#196**). Prefer merge order note: **#173 → #186 → #196 → this tip**.

### Sources mined

**Reddit / forums**

- Condo parent / resident threads — guest QR and helper codes still opening lobby after keys returned; delivery PINs left live through movers week.
- International-school parent threads — 1:1 iPad / device bond return vs damage holds and overdue fees colliding with packing week.

**Official / orientation**

- Estate condo-app / MCST visitor schedules (estate-specific)
- School 1:1 device handbooks (school-specific return windows)

### Gaps vs open E stack through #196

Open **#173** covers mail forward + HDB reno. Open **#186** covers helper handoff + club deposit. Open **#196** covers school bus/CCA + driving insurance gap. Remaining high-intent gaps **off those path sets**: **condo visitor QR revoke**, **school device / iPad bond sketch**. No calendar JSON. Did not re-edit #164 exclusives (already on main) or #173 / #186 / #196 exclusives. Distinct from existing `/journeys/condo-mcst-exit` (physical cards / IU) — this tick owns digital guest access only.

### Shipped this tick

**Journeys**

- `content/journeys/condo-visitor-qr-exit.json` + `/journeys/condo-visitor-qr-exit`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/school-device-bond.ts`
- `src/components/tools/SchoolDeviceBondCalculator.tsx`
- `/tools/school-device-bond` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #173, #186, or #196 exclusive paths.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Do guest QR codes die when the agent collects keys?
2. Should helper / tutor standing access revoke before MCST card return?
3. Can a delivery PIN stay live for movers day only?
4. Who closes the resident condo-app profile on checkout?
5. Are vendor QR codes unit-scoped or estate-wide?
6. When should parcel-locker holds tied to my mobile die?
7. What cash float covers missing-card fees vs school device bonds?
8. Does an on-time iPad return still bill overdue if IT desk is closed?
9. Will damage above bond invoice the family separately?
10. Should device return wait until after visitor QR revoke week?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 24)

Branch: `cursor/loop-d-next-polish-tick24-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Did **not** touch Family / Belong / Home body trees beyond Move parent cross-links for PEP / ONE / Tech / EntrePass / incorporate. Avoided open Loop D file sets from [#183](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/183) / [#193](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/193).

**Merge order note (controller):** `#183 → #193 → this tip` (ticks 20–21 already on `main`).

### Sources mined

**Reddit / forums**

- r/askSingapore — “just get PEP” vs ONE Pass spouse LOC vs Tech.Pass sunset confusion.
- r/askSingapore — ACRA incorporation sold as EntrePass; nominee director folklore.
- r/askSingapore — IR21 freeze vs STVP stay; same-week flight + clearance assumptions.

**Official**

- [MOM — PEP](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass) · [ONE Pass](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass) · [EDB Tech.Pass](https://www.edb.gov.sg/en/incentives-and-programmes/incentives-and-facilitation-programmes/tech-pass.html)
- [MOM — EntrePass eligibility](https://www.mom.gov.sg/passes-and-permits/entrepass/eligibility) · [ACRA foreigners](https://www.acra.gov.sg/register/business/requirements-eligibility/) · [EP secondary directorship](https://www.mom.gov.sg/passes-and-permits/employment-pass/taking-up-secondary-directorship)
- [IRAS — IR21](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees) · [MOM — Cancel EP](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass)

### Gaps vs open stack

Open #183→#193 cover NS-before-PR / TADM salary clocks / harassment pass-fear; AL encashment / IPA-before-resign / retrenchment TADM-TAFEP. Remaining high-intent gaps: **PEP vs ONE vs Tech.Pass chooser**, **EntrePass vs resident director**, **IR21 vs cancel vs STVP sequencing**.

### Shipped

**New:** `pep-one-tech-pass-chooser-singapore.mdx`, `entrepass-resident-director-vs-pass-singapore.mdx`, `ir21-pass-cancel-stvp-sequencing-singapore.mdx`

**Upgraded:** PEP / ONE / Tech.Pass / EntrePass / incorporate / tax-clearance / IR21-final-pay (cross-links only); `src/lib/site.ts`; about + editorial.

### Explicitly not done

- No ads / Grok. No #183 / #193 guide bodies (and no re-edit of #193 parents: leave/notice, career pivots, retrenchment).
- Did not wait for CI or merges on prior tips.

### Questions mined

1. Is ONE Pass just a fancier PEP?
2. Should I burn PEP if EP renewals look fine?
3. What replaces Tech.Pass after Jan 2027?
4. Does ACRA registration give me EntrePass?
5. Can my EP be the resident director without an LOC?
6. Are nominee directors rubber stamps?
7. Does STVP unfreeze IR21 withholding?
8. When does garden leave start the IR21 clock?
9. Can I fly the week HR files IR21?
10. Who asks MOM for the long STVP — me or HR?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 18)

Branch: `cursor/e-journeys-tools-tick18-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (post-#151 / Loop D18 tip). **Did not wait for merges or CI on prior tips.** Avoided open E stack exclusives through **#186** (E17): mail-forward / hdb-reno (**#173**), helper-handoff / club-deposit (**#186**). Prefer merge order note: **#173 → #186 → this tip**.

### Sources mined

**Reddit / forums**

- r/askSingapore / school parent threads — bus operator still billing after school withdrawal; CCA kit / instrument deposits orphaned on movers week.
- r/askSingapore — self-driving CCA runs after bus cancel; insurance / Grab float folklore for the gap weeks.

**Official / orientation**

- School / bus operator contracts (vendor-specific notice weeks)
- Insurer short-term / named-driver add-on schedules (policy-specific)

### Gaps vs open E stack through #186

Open **#173** covers mail forward + HDB reno. Open **#186** covers helper handoff + club deposit. Remaining high-intent gaps **off those path sets**: **school bus / CCA exit notice**, **driving insurance gap sketch** for self-drive weeks. No calendar JSON. Did not re-edit #164 exclusives (already on main) or #173 / #186 exclusives.

### Shipped this tick

**Journeys**

- `content/journeys/school-bus-cca-exit.json` + `/journeys/school-bus-cca-exit`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/driving-insurance-gap.ts`
- `src/components/tools/DrivingInsuranceGapCalculator.tsx`
- `/tools/driving-insurance-gap` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #173 or #186 exclusive paths.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Does school withdrawal stop the bus invoice?
2. How many written-notice weeks does the bus operator need?
3. When should CCA kits and instruments be returned?
4. Do sibling seat discounts survive one child leaving?
5. Should bus last-ride align with the last CCA return day?
6. What cash float covers bus + CCA + school deposits together?
7. After bus cancel, is extending motor cover cheaper than Grab?
8. Is a daily self-drive float the same as insurance?
9. How do named-driver add-ons change the gap sketch?
10. Should insurance gap planning wait until after mover lift booking?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 17)

Branch: `cursor/e-journeys-tools-tick17-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (post-#164 on tip). **Did not wait for merges.** Avoided open E stack exclusive **#173** (mail-forward / hdb-reno). Prefer merge order note: **#173 → this tick**.

### Sources mined

**Reddit / forums**

- r/askSingapore — FDW transfer vs cancel when the family leaves; helper still in the flat after EP cancel folklore.
- r/askSingapore / club threads — resignation notice months; entrance deposit refund myths; dues through notice.

**Official / orientation**

- [MOM — Work Permit for FDW](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker)
- Club constitution / resignation schedules (club-specific)

### Gaps vs open E stack through #173

Open **#173** covers mail forward exit + HDB reno deposit. Remaining high-intent gaps **off that path set**: **helper handoff on exit**, **club deposit resignation cash sketch**. No calendar JSON. Did not re-edit #164 exclusives (already on main).

### Shipped this tick

**Journeys**

- `content/journeys/helper-handoff-exit.json` + `/journeys/helper-handoff-exit`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/club-deposit-exit.ts`
- `src/components/tools/ClubDepositExitCalculator.tsx`
- `/tools/club-deposit-exit` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #173 exclusive paths.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Can the helper stay after we fly if the lease still runs?
2. Transfer vs cancel — which MOM path fits exit week?
3. Who is employer of record on movers morning?
4. How do we sequence helper exit with pet / newborn care?
5. When should condo app access for the helper be revoked?
6. How many notice months does the club actually require?
7. Will the entrance deposit come back?
8. Do dues keep billing through the notice window?
9. What admin fees hit on resignation?
10. Should club resignation wait until after helper handoff?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 16)

Branch: `cursor/e-journeys-tools-tick16-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (post-#147/#156 on tip). **Did not wait for merges.** Avoided open E stack exclusive **#164** (mover-lift / foreign-licence). Prefer merge order note: **#164 → this tick**.

### Sources mined

**Reddit / forums**

- r/askSingapore — IRAS / bank letters after lease end; SingPost redirection folklore; friend-as-mailbox burnout.
- r/askSingapore / HDB threads — renovation deposit refund lag; defect re-inspection holding cash after movers leave.

**Official / orientation**

- [SingPost](https://www.singpost.com/) redirection / mail products framing
- HDB / town-council renovation deposit norms (permit-specific)

### Gaps vs open E stack through #164

Open **#164** covers mover lift booking + foreign licence clock. Remaining high-intent gaps **off that path set**: **mail forward / PO box exit**, **HDB reno deposit return sketch**. No calendar JSON.

### Shipped this tick

**Journeys**

- `content/journeys/mail-forward-exit.json` + `/journeys/mail-forward-exit`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/hdb-reno-deposit.ts`
- `src/components/tools/HdbRenoDepositCalculator.tsx`
- `/tools/hdb-reno-deposit` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #164 exclusive paths.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. When should SingPost redirection start relative to key return?
2. Do registered letters follow ordinary redirection?
3. Is a friend’s address safer than a virtual mailbox?
4. Which senders still post paper after e-statements?
5. How long should redirection run after landing abroad?
6. How many days does an HDB reno deposit usually take to return?
7. What if inspection finds minor defects?
8. Should the refund cheque go to the redirected address?
9. Can major non-compliance forfeit the whole deposit?
10. How do I float cash while the cheque is in transit?

---

---

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 23)

Branch: `cursor/loop-d-next-polish-tick23-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home body trees. Avoided open Loop D file sets from [#169](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/169) / [#177](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/177) / [#183](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/183).

**Merge order note (controller):** `#169 → #177 → #183 → this tip` after earlier D tips already on `main`.

### Sources mined

**Reddit / forums**

- r/askSingapore — HR “annual leave eats notice” / encashment vs offset confusion on EP resign.
- r/askSingapore — resigned on verbal offer before IPA; garden leave vs new start collision.
- r/askSingapore — retrenchment package unpaid / “sign the release today” / TADM vs TAFEP folklore.

**Official**

- [MOM — Annual leave](https://www.mom.gov.sg/employment-practices/leave/annual-leave/eligibility-and-entitlement) · [Termination with notice](https://www.mom.gov.sg/employment-practices/termination-of-employment/termination-with-notice)
- [MOM — Change jobs on EP](https://www.mom.gov.sg/faq/employment-pass/what-if-i-want-to-change-jobs-while-i-am-on-an-ep) · [Fair Consideration Framework](https://www.mom.gov.sg/employment-practices/fair-consideration-framework)
- [MOM — Responsible retrenchment](https://www.mom.gov.sg/employment-practices/retrenchment/responsible-retrenchment) · [Unpaid benefit FAQ](https://www.mom.gov.sg/faq/retrenchment/what-should-i-do-if-i-did-not-receive-retrenchment-benefit-from-my-company) · [TADM](https://www.mom.gov.sg/employment-practices/managing-employment-disputes) · [TAFEP](https://www.tal.sg/tafep)

### Gaps vs open stack

Open #169→#183 cover ROE passport transfer / spouse LTVP+PMLA LLE / SCJ booking; PLOC renewal / EP-cancel spouse checklist / stay-exit calendar; NS-before-PR / TADM salary clocks / harassment pass-fear. Remaining high-intent **Next** gaps: **AL encashment vs notice offset**, **IPA-before-resign calendar depth**, **retrenchment benefit TADM vs TAFEP fork**.

### Shipped

**New:** `annual-leave-encashment-notice-offset-ep-singapore.mdx`, `ipa-before-resign-calendar-ep-singapore.mdx`, `retrenchment-benefit-tadm-tafep-ep-singapore.mdx`

**Upgraded:** `employment-act-leave-notice-ep.mdx`, `career-pivots-singapore.mdx`, `retrenchment-ep-benefits.mdx` (cross-links only); `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No #169 / #177 / #183 guide bodies.
- Did not wait for prior drafts to merge or for CI on prior tips.

### Questions mined

1. Does unused annual leave automatically shorten my notice?
2. Can HR force me to offset notice with leave?
3. Does MC during notice extend my last day?
4. When exactly should I resign after a new EP IPA?
5. What if notice is longer than IPA validity?
6. Do family DPs survive if the new IPA fails mid-notice?
7. Unpaid contractual retrenchment benefit — TADM or TAFEP?
8. No contract clause — is the TAMEM norm enforceable at TADM?
9. Should I sign a release before the package hits my account?
10. Does filing TADM extend my EP or STVP?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 22)

Branch: `cursor/loop-d-next-polish-tick22-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home body trees. Avoided open Loop D file sets from [#123](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/123) / [#130](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/130) / [#138](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/138) / [#146](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/146) / [#151](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/151) / [#162](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/162) / [#169](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/169) / [#177](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/177). (#83 / #89 / #99 / #114 already on main.)

### Sources mined

**Reddit / forums**

- r/askSingapore — first-gen PR exemption folklore before CMPB letters.
- r/askSingapore — file TADM after flying home; left-employment clock surprise.
- r/askSingapore — “if I report harassment they cancel my EP.”

**Official**

- [CMPB — Overseas pre-enlistees](https://www.cmpb.gov.sg/before-ns/overseas-pre-enlistees/) · [Exit Permit and bond](https://www.cmpb.gov.sg/before-ns/pre-enlistment-process/exit-permit-and-bond/) · [ICA — Renunciation of PR](https://www.ica.gov.sg/enter-transit-depart/more-information/for-permanent-residents/renunciation-of-permanent-residence)
- [MOM — TADM](https://www.mom.gov.sg/employment-practices/managing-employment-disputes) · [TADM file claim](https://www.tal.sg/tadm/eservices/employees-file-employment-claim) · [ECT](https://www.judiciary.gov.sg/civil/file-employment-claim)
- [TAFEP — Seek help](https://www.tal.sg/tafep/employment-practices/workplace-harassment/seek-help-on-workplace-harassment) · [Tripartite Advisory PDF](https://www.mom.gov.sg/-/media/mom/documents/employment-practices/guidelines/tripartite-advisory-on-managing-workplace-harassment.pdf)

### Gaps vs open stack

Open #123→#177 cover IR21/lost-pass through PLOC renewal / stay-exit calendar. Remaining high-intent **Next** gaps: **NS liability before PR/citizenship checklist**, **TADM salary claim filing clocks**, **harassment pass-fear plan**.

### Shipped

**New:** `ns-liability-before-pr-citizenship-checklist-singapore.mdx`, `tadm-salary-claim-ep-filing-clocks-singapore.mdx`, `workplace-harassment-pass-fear-plan-ep-singapore.mdx`

**Upgraded:** `citizenship-ns-implications.mdx`, `salary-dispute-tadm-mom.mdx`, `workplace-harassment-tafep-ep.mdx` (cross-links only); `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No open #123 / #130 / #138 / #146 / #151 / #162 / #169 / #177 guide bodies.

### Questions mined

1. What should I ask CMPB before accepting PR with sons?
2. When does Exit Permit / bond kick in for overseas sons?
3. Does dual citizenship remove NS?
4. Can ICA withhold PR renunciation for unresolved NS?
5. When must I file TADM if still employed vs after I leave?
6. What are TADM claim caps?
7. Does TADM extend my EP?
8. Mediation failed — what is a claim referral certificate?
9. Does reporting harassment auto-cancel my EP?
10. How do I sequence IPA if I need to leave a toxic job?
11. Wrongful dismissal after a harassment report — which rail?
12. Is “pay short notice” a finding that harassment is fine?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 21)

Branch: `cursor/loop-d-next-polish-tick21-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home body trees. Avoided open Loop D file sets from [#83](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/83) / [#89](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/89) / [#114](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/114) / [#123](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/123) / [#130](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/130) / [#138](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/138) / [#146](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/146) / [#151](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/151) / [#162](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/162) / [#169](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/169). (#99 merged to main before this tick.)

### Sources mined

**Reddit / forums**

- r/askSingapore — renew PLOC while LTVP almost expired; employer tries to file PLOC.
- r/askSingapore — layoff week burns days before HR STVP / ICA spouse LTVP emails.
- r/askSingapore — “decide after CNY” after school deposits already paid.

**Official**

- [MOM — PLOC eligibility](https://www.mom.gov.sg/passes-and-permits/pre-approved-letter-of-consent/eligibility) · [FormSG PLOC](https://form.gov.sg/65b84e2aa1b08110518e9706) · [LOC renew](https://www.mom.gov.sg/passes-and-permits/loc-for-ica-issued-ltvp-holders/renew-cancel-or-replace)
- [MOM — Cancel EP](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass) · [Spouse LTVP SC/PR](https://www.ica.gov.sg/reside/LTVP)
- [ICA — PR](https://www.ica.gov.sg/reside/PR) · [IRAS IR21](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees)

### Gaps vs open stack

Open #83→#169 (minus merged #99) cover NS Exit through ROE/SCJ/spouse LTVP renewal. Remaining high-intent **Next** gaps: **PLOC/LOC renewal sequencing**, **EP cancel + SC/PR spouse same-week checklist**, **annual stay/exit review calendar**.

### Shipped

**New:** `ploc-renewal-ltvp-sequencing-singapore.mdx`, `ep-cancel-spouse-ltvp-same-week-checklist-singapore.mdx`, `annual-stay-exit-review-calendar-singapore.mdx`

**Upgraded:** `ploc-loc-ica-ltvp-singapore.mdx`, `ep-job-loss-spouse-ltvp-bridge-singapore.mdx`, `long-term-stay-vs-exit.mdx` (cross-links only); `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No open #83 / #89 / #114 / #123 / #130 / #138 / #146 / #151 / #162 / #169 guide bodies (including #169 spouse-LTVP / SCJ / ROE parents).

### Questions mined

1. Must I renew LTVP before PLOC?
2. Can my employer apply for PLOC for me?
3. How do I request PLOC after I skipped it on renewal?
4. When can an employer renew LOC?
5. What do I email HR the day EP cancel is announced if my spouse is SC?
6. Do Dependant Passes survive EP cancel?
7. Should I wait for STVP before filing spouse LTVP?
8. Is PMLA a post-layoff speed tool?
9. When should we run the annual stay/exit review?
10. Which lock-ins fake a soft maybe?
11. Does PR approval end the stay/exit conversation?
12. How does the review sit beside EP renewal and school deposits?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 20)

Branch: `cursor/loop-d-next-polish-tick20-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home body trees. Avoided open Loop D file sets from [#83](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/83) / [#89](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/89) / [#99](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/99) / [#114](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/114) / [#123](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/123) / [#130](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/130) / [#138](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/138) / [#146](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/146) / [#151](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/151) / [#162](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/162).

### Sources mined

**Reddit / forums**

- r/askSingapore — new foreign passport, stale ROE; multi-passport kids.
- r/askSingapore — “do PMLA again to renew spouse LTVP?”; expired LLE after ROM delay.
- r/askSingapore — IPA email day-one portal fail; SEV calendar folklore.

**Official**

- [ICA — ROE](https://www.ica.gov.sg/reside/citizenship/roe) · [FormSG ROE](https://form.gov.sg/67ce4d14b7c5bd4de3a4459b)
- [ICA — PMLA](https://www.ica.gov.sg/reside/pre-marriage-long-term-visit-pass-assessment) · [LTVP renewal](https://www.ica.gov.sg/reside/LTVP)
- [ICA — Citizenship apply / SCJ](https://www.ica.gov.sg/reside/citizenship/apply) · [Roadmap PDF](https://www.ica.gov.sg/docs/default-source/ica/files/esc-roadmap.pdf) · [sgjourney help](http://sgjourney.gov.sg/help)

### Gaps vs open stack

Open #83→#162 cover NS Exit / PRSEP through NRIC re-reg overseas / confirmation letter / FWA TAFEP. Remaining high-intent **Next** gaps: **ROE transfer / FormSG**, **spouse LTVP renewal / PMLA LLE window**, **SCJ SEV/CSS booking after IPA**.

### Shipped

**New:** `roe-transfer-new-foreign-passport-singapore.mdx`, `spouse-ltvp-renewal-pmla-lle-window-singapore.mdx`, `scj-sev-css-booking-after-ipa-singapore.mdx`

**Upgraded:** `right-of-entry-roe-under-21-singapore.mdx`, `spouse-ltvp-pmla-singapore.mdx`, `singapore-citizenship-journey-scj.mdx` (cross-links only); `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No #83 / #89 / #99 / #114 / #123 / #130 / #138 / #146 / #151 / #162 guide bodies.
- Did not edit #162 confirmation companions or #151 ORAL / aged-parent parents.

### Questions mined

1. Does ROE auto-move when my child renews the foreign passport?
2. One ROE for two foreign passports?
3. Where is the FormSG for ROE?
4. Can I run PMLA again to renew spouse LTVP?
5. How long is the Letter of Eligibility valid?
6. When must I renew spouse LTVP?
7. Does leftover LTVP validity carry forward?
8. Why can’t I log into SC Journey the day IPA arrives?
9. How soon should I book SEV and CSS?
10. What are the e-Journey 7+7 clocks?
11. Does SCJ waive foreign renunciation?
12. Is CSS booking the same as ORAL at 21?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 19)

Branch: `cursor/loop-d-next-polish-tick19-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home body trees. Avoided open Loop D file sets from [#83](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/83) / [#89](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/89) / [#99](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/99) / [#114](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/114) / [#123](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/123) / [#130](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/130) / [#138](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/138) / [#146](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/146) / [#151](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/151).

### Sources mined

**Reddit / forums**

- r/askSingapore — turn-30 IC while overseas; consulate collection folklore.
- r/askSingapore — foreign uni rejects “unsigned” citizenship PDF; wants stamps.
- r/askSingapore — HR ghosts FWA email; EP holders unsure about TAFEP.

**Official**

- [ICA — Re-Register IC 30/55](https://www.ica.gov.sg/documents/ic/re-registration) · [National Registration Regulations](https://sso.agc.gov.sg/SL/NRA1965-RG2) · [Collect IC](https://www.ica.gov.sg/documents/ic/collect)
- [ICA — Confirmation of SC status](https://www.ica.gov.sg/reside/citizenship/confirmation) · [FormSG](https://go.gov.sg/confirmationofsc)
- [MOM — TG-FWAR](https://www.mom.gov.sg/employment-practices/good-work-practices/flexible-work-arrangements) · [TAFEP — requesting FWAs](https://www.tal.sg/tafep/employment-practices/work-life-harmony/guide-to-requesting-and-using-flexible-work-arrangements-for-employees)

### Gaps vs open stack

Open #83→#151 cover NS Exit / PRSEP; EP-death DP / SC cooling-off / LPA; WICA / training-bond / e-Apostille; CPF / REP ETD / COMPASS; IR21 RSU / lost-pass overseas / salary-cut DP; ship-out / PR appeal / EP FWTES; probate / EP passport / FDW; PR passport-first / lost NRIC overseas / graduate LTVP; ORAL renunciation proof / aged-parent LTVP renewal / STVP myths. Remaining high-intent **Next** gaps: **NRIC re-reg overseas return**, **confirmation letter foreign-authority edges**, **FWA → TAFEP escalation**.

### Shipped

**New:** `nric-reregistration-overseas-return-singapore.mdx`, `confirmation-citizenship-letter-foreign-authority-singapore.mdx`, `fwa-request-tafep-escalation-ep-singapore.mdx`

**Upgraded:** `nric-reregistration-30-55-singapore.mdx`, `confirmation-singapore-citizenship-status.mdx`, `flexible-work-arrangement-request.mdx` (cross-links only); `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No #83 / #89 / #99 / #114 / #123 / #130 / #138 / #146 / #151 guide bodies.
- Did not edit ecoa / lost-NRIC companions / ORAL parents from prior open ticks.

### Questions mined

1. Can I collect my age-30 IC at a Singapore mission?
2. How long after returning must I re-register?
3. Can I apply early if I will be abroad for the whole window?
4. Will ICA stamp the citizenship confirmation letter for my foreign uni?
5. Is FormSG the only confirmation channel now?
6. What if the foreign desk rejects the unsigned PDF?
7. Can under-16s apply for confirmation themselves?
8. HR ignored my FWA email — is that a formal TG-FWAR request?
9. When do I escalate FWA process failures to TAFEP?
10. Does TAFEP force Bali WFH on EP?
11. Is FWA escalation the same as workplace harassment reporting?
12. What written artefacts should I keep before contacting TAFEP?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 18)

Branch: `cursor/loop-d-next-polish-tick18-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home body trees. Avoided open Loop D file sets from [#83](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/83) / [#89](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/89) / [#99](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/99) / [#114](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/114) / [#123](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/123) / [#130](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/130) / [#138](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/138) / [#146](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/146).

### Sources mined

**Reddit / forums**

- r/askSingapore — ORAL clock vs months waiting for a foreign renunciation certificate / mission packs.
- r/askSingapore — Mum’s parent LTVP expiry; sponsor child emigrating; leftover-validity myths.
- r/askSingapore — layoff “Special Pass” folklore on EP cancel (actually STVP).

**Official**

- [ICA — Oath-taking for Minors](https://www.ica.gov.sg/reside/citizenship/minor-oath-taking) · [MFA Washington ORAL](https://washington.mfa.gov.sg/consular-services/citizens-services/oath-taking-for-minors/) · [MFA New Delhi ORAL](https://new-delhi.mfa.gov.sg/consular-services/citizens-services/oath-taking-for-minors/)
- [ICA — LTVP](https://www.ica.gov.sg/reside/LTVP) · [Parent of SC/PR](https://www.ica.gov.sg/reside/LTVP/apply/parent-of-a-singapore-citizen-(sc)-or-singapore-permanent-resident-(pr)) · [LTVP Terms PDF](https://www.ica.gov.sg/docs/default-source/ica/files/docs/terms_and_conditions_ltp.pdf)
- [MOM — Cancel EP](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass) · [Cancel Work Permit](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-worker/cancel-a-work-permit) · [Extend stay FAQ](https://www.mom.gov.sg/faq/work-pass-general/how-can-i-extend-my-pass-holders-stay-in-singapore)

### Gaps vs open stack

Open #83→#146 cover NS Exit / PRSEP; EP-death DP / SC cooling-off / LPA; WICA / training-bond / e-Apostille; CPF witnesses / REP ETD / COMPASS; IR21 RSU / lost-pass overseas / salary-cut DP; ship-out / PR appeal / EP FWTES; probate / EP passport / FDW cancel; PR passport-first name / lost NRIC overseas / graduate LTVP IHL. Remaining high-intent **Next** gaps: **ORAL foreign renunciation proof**, **aged-parent LTVP renewal / sponsor change**, **STVP vs Special Pass myths**.

### Shipped

**New:** `oral-foreign-renunciation-proof-before-22-singapore.mdx`, `aged-parent-ltvp-renewal-sponsor-change-singapore.mdx`, `stvp-after-ep-cancel-special-pass-myths-singapore.mdx`

**Upgraded:** `oral-dual-citizenship-age-21.mdx`, `aged-parents-pr-ltvp-singapore.mdx`, `between-jobs-stvp-singapore.mdx` (cross-links only); `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No #83 / #89 / #99 / #114 / #123 / #130 / #138 / #146 guide bodies.
- Did not edit #89 renouncing-SC body or #146 name-change / lost-NRIC / graduate parents.

### Questions mined

1. What documents do Singapore missions ask for beyond ICA’s two-item list?
2. How early should I start home-country renunciation before my 22nd birthday?
3. Can I take ORAL before a notary overseas?
4. When must I renew Mum’s parent LTVP?
5. Does leftover LTVP validity carry forward on renewal?
6. What if the sponsoring child emigrates or withdraws?
7. Can another SC/PR take over sponsorship?
8. After EP cancel, do I get a Special Pass or an STVP?
9. Is Work Permit Special Pass the same as between-jobs STVP?
10. Can ICA extend my MOM STVP at the counter?
11. How long can HR request on EP cancel STVP?
12. Do family DPs float independently after EP cancel?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 17)

Branch: `cursor/loop-d-next-polish-tick17-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home body trees. Avoided open Loop D file sets from [#83](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/83) / [#89](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/89) / [#99](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/99) / [#114](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/114) / [#123](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/123) / [#130](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/130) / [#138](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/138).

### Sources mined

**Reddit / forums**

- r/askSingapore — PR deed poll uploaded with old passport bio-page; ICA rejects particulars.
- r/askSingapore — lost blue IC overseas; embassy cannot issue temporary NRIC.
- r/askSingapore — private-uni “graduate LTVP” folklore vs ICA IHL list; renewal leftover-validity myths.

**Official**

- [ICA — Replace IC (Change of Particulars/Damaged)](https://www.ica.gov.sg/documents/ic/update_particulars) · [Transfer of REP](https://www.ica.gov.sg/reside/PR/transfer-REP)
- [ICA — Loss of Identity Card](https://www.ica.gov.sg/documents/ic/loss) · [Ask ICA — replace lost IC](https://ask.gov.sg/ica/questions/clvvpo7u6002lkx4gnn685tl9) · [MFA Beijing — lost NRIC](https://beijing.mfa.gov.sg/consular-services/replacement-of-a-lost-nric/)
- [ICA — Graduate IHL seeking employment](https://www.ica.gov.sg/reside/LTVP/apply/graduate-from-an-institute-of-higher-learning-seeking-employment-in-singapore) · [IHL list](https://www.ica.gov.sg/reside/LTVP/apply/graduate-from-an-institute-of-higher-learning-seeking-employment-in-singapore/list_ihl) · [Becoming an LTVP holder](https://www.ica.gov.sg/reside/LTVP)

### Gaps vs open stack

Open #83→#138 cover NS Exit / PRSEP / renounce-PR NS; EP-death DP / SC cooling-off / LPA; WICA / training-bond / e-Apostille; CPF witnesses / REP ETD / COMPASS firm; IR21 RSU / lost-pass overseas / salary-cut DP; ship-out deposits / PR appeal evidence / EP FWTES; foreign probate / EP passport update / FDW cancel. Remaining high-intent **Next** gaps: **PR name-change passport-first**, **lost NRIC overseas return**, **graduate LTVP IHL / renewal edges**.

### Shipped

**New:** `pr-name-change-passport-first-singapore.mdx`, `lost-nric-overseas-return-singapore.mdx`, `graduate-ltvp-ihl-renewal-edges-singapore.mdx`

**Upgraded:** `change-name-nric-singapore.mdx`, `lost-replace-nric-pr-singapore.mdx`, `graduate-ltvp-job-hunt.mdx` (cross-links only); `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No #83 / #89 / #99 / #114 / #123 / #130 / #138 guide bodies (including transfer-REP / ecoa / passports / leaving parents).
- Did not edit wills / shipping / probate companions from prior open ticks.

### Questions mined

1. I am a PR — must my foreign passport show the new name before ICA updates my blue IC?
2. After the new passport issues, do I still need Transfer of REP?
3. Can I travel mid name-change with mismatched IC and passport?
4. I lost my NRIC overseas — will the Singapore mission replace it?
5. Can I finish ICA Loss of IC entirely from abroad?
6. Does Singpass Digital IC waive physical replacement when I am overseas?
7. Is my private university on ICA’s graduate LTVP IHL list?
8. How long does graduate LTVP processing take vs my STVP runway?
9. Does unused LTVP validity carry forward on renewal?
10. Is graduate LTVP the same as spouse LTVP + LOC?
11. Do Tuition Grant bond years count while I am on graduate LTVP?
12. Can I work part-time on graduate-seeking-employment LTVP?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 16)

Branch: `cursor/loop-d-next-polish-tick16-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home body trees (companion links out to hiring-MDW). Avoided open Loop D file sets from [#83](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/83) / [#89](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/89) / [#99](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/99) / [#114](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/114) / [#123](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/123) / [#130](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/130).

### Sources mined

**Reddit / forums**

- r/askSingapore — Singapore banks freeze until a local grant / resealed foreign grant appears.
- r/askSingapore — new passport, stale EP file fails automated gates / airline desks.
- r/askSingapore — family flies out; MDW levy invoices keep arriving; bond / cancel forgotten.

**Official**

- [Judiciary — Apply for probate](https://www.judiciary.gov.sg/family/apply-for-probate) · [Family Justice Courts probate practice directions](https://epd2024-familyjusticecourts.judiciary.gov.sg/part-24-non-contentious-probate-proceedings)
- [MOM — Notify MOM of EP updates](https://www.mom.gov.sg/passes-and-permits/employment-pass/notify-mom-of-changes) · [EP eService](https://www.mom.gov.sg/eservices/services/employment-pass-eservice)
- [MOM — Work Permit for MDW](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker) · [Cancel a Work Permit](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/cancel-a-work-permit)

### Gaps vs open stack

Open #83→#130 cover NS Exit / PRSEP / renounce-PR NS; EP-death DP / SC cooling-off / LPA; WICA / training-bond / e-Apostille; CPF witnesses / REP ETD / COMPASS firm; IR21 RSU / lost-pass overseas / salary-cut DP; ship-out deposits / PR appeal evidence / EP FWTES. Remaining high-intent **Next** gaps: **foreign probate resealing**, **EP passport update before travel**, **FDW cancellation on exit**.

### Shipped

**New:** `foreign-probate-resealing-singapore-banks.mdx`, `ep-passport-update-before-travel-singapore.mdx`, `fdw-cancellation-when-leaving-singapore.mdx`

**Upgraded:** `leaving-singapore-playbook.mdx`, `passports-and-documents-overseas.mdx` (cross-links only); `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No #83 / #89 / #99 / #114 / #123 / #130 guide bodies (including wills / shipping / ecoa parents).
- Did not edit Home hiring-MDW body (companion links out).

### Questions mined

1. Will a UK / Malaysian probate grant unlock my Singapore bank accounts?
2. What is resealing vs a fresh Singapore grant of probate?
3. What should next of kin gather before seeing a Singapore solicitor?
4. I renewed my foreign passport — do I need to tell MOM before flying?
5. Is EP passport update the same as ICA Transfer of REP?
6. Does SGWorkPass update automatically when my passport changes?
7. When must I cancel my helper’s Work Permit if we are leaving Singapore?
8. Does levy stop the day she flies, or only after MOM cancel?
9. Transfer to a new employer vs repatriation — which cancel path?
10. How does helper cancel sit beside my IR21 cash freeze?
11. Does CPF follow a foreign will?
12. Can I keep travelling on the old passport number linked to my EP?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 15)

Branch: `cursor/loop-d-next-polish-tick15-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home / Life body trees. Avoided open Loop D file sets from [#83](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/83) / [#89](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/89) / [#99](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/99) / [#114](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/114) / [#123](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/123).

### Sources mined

**Reddit / forums**

- r/askSingapore — movers at the door, service lift not booked, MCST deposit forgotten during IR21 freeze.
- r/askSingapore — PR refused; “email ICA” folklore vs appeal e-Service; identical refile six weeks later.
- r/askSingapore — condo landlord will not clear FWTES; hotel/Airbnb as EP address; 5-day MOM clock panic.

**Official**

- [Singapore Customs — Personal shipment](https://www.customs.gov.sg/personal-shipment/) · [IRAS — Tax clearance (IR21)](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees)
- [ICA — Appeal for SC / PR / LTVP](https://www.ica.gov.sg/reside/reside-appeals) · [ask.gov.sg — appeal after PR rejection](https://ask.gov.sg/ica/questions/clxwhkiyp00hudsotw6rtl2oh)
- [MOM — Notify MOM of EP updates](https://www.mom.gov.sg/passes-and-permits/employment-pass/notify-mom-of-changes) · [FWTES](https://www.mom.gov.sg/eservices/services/tes) · [OFWAS](https://www.mom.gov.sg/eservices/services/ofwas)

### Gaps vs open stack

Open #83→#89→#99→#114→#123 own NS Exit / PRSEP / renounce-PR NS; EP-death DP / SC cooling-off / LPA fees; WICA / training-bond / SAL e-Apostille; CPF witnesses / REP ETD / COMPASS firm scores; IR21 RSU freeze / lost-pass overseas / EP salary-cut DP cascade. Remaining high-intent **Next** gaps: **ship-out condo lift & deposits**, **PR appeal evidence vs reapply**, **EP address / FWTES 5-day clock**.

### Shipped

**New:** `shipping-out-condo-lift-deposit-singapore.mdx`, `pr-rejection-appeal-evidence-reapply-singapore.mdx`, `ep-address-fwtes-five-day-clock-singapore.mdx`

**Upgraded:** `shipping-out-household.mdx`, `pr-rejection-reapply.mdx`, `ecoa-nric-address-change-singapore.mdx` (cross-links only); `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No #83 / #89 / #99 / #114 / #123 guide bodies.
- Did not edit Move notify parent body (companion links out to it).

### Questions mined

1. How many days ahead must I book the condo service lift for movers?
2. Do MCSTs take a refundable deposit for outbound moves?
3. How do I sequence pack-out day against IR21 salary freeze?
4. Can I appeal a PR rejection by emailing ICA?
5. Who files the PR appeal — sponsor or applicant?
6. What evidence belongs on appeal vs a fresh reapply?
7. Should I open a second PR file while appealing?
8. How many days do I have to update my EP residential address with MOM?
9. What is FWTES and why does my condo block the address update?
10. Can I register a hotel or Airbnb as my EP address?
11. Is MOM address update the same as ICA eCOA for NRIC?
12. Does the 5-day clock pause while the landlord fixes FWTES?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 14)

Branch: `cursor/loop-d-next-polish-tick14-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home / Life body trees (beyond linking to existing Move salary-notify parent). Avoided open Loop D file sets from [#83](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/83) / [#89](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/89) / [#99](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/99) / [#114](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/114).

### Sources mined

**Reddit / forums**

- r/askSingapore — HR froze final months of pay / RSU deemed exercise at IR21 clearance.
- r/askSingapore — lost EP card in Bangkok / airline desk + MOM re-entry letter.
- r/askSingapore — salary cut and “does my spouse’s DP die?”

**Official**

- [IRAS — Tax clearance for employees (IR21)](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees) · [Share-plan clearance](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees-with-employee-share-plans)
- [MOM — Replace an EP card](https://www.mom.gov.sg/passes-and-permits/employment-pass/replace-a-pass-card) · [SGWorkPass](https://www.mom.gov.sg/eservices/sgworkpass)
- [MOM — Notify MOM of EP updates](https://www.mom.gov.sg/passes-and-permits/employment-pass/notify-mom-of-changes) · [SAT](https://www.mom.gov.sg/eservices/services/employment-s-pass-self-assessment-tool)

### Gaps vs open stack

Open #83→#89→#99→#114 own NS Exit / PRSEP / renounce-PR NS traps; EP-death DP / SC cooling-off / LPA fees; WICA / training-bond / SAL e-Apostille; CPF Singpass witnesses / REP ETD / COMPASS firm scores. Remaining high-intent **Next** gaps: **IR21 final-pay + RSU freeze**, **lost work-pass overseas re-entry letter**, **EP salary-cut → DP/LTVP cascade**.

### Shipped

**New:** `ir21-final-pay-rsu-withholding-leaving.mdx`, `lost-work-pass-overseas-reentry-letter.mdx`, `ep-salary-cut-dp-ltvp-cascade-singapore.mdx`

**Upgraded:** `tax-clearance-when-leaving.mdx`, `lost-replace-work-pass-card.mdx` (cross-links only); `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No #83 / #89 / #99 / #114 guide bodies.
- Did not edit Move salary-notify parent body (companion links out to it).

### Questions mined

1. Why did HR freeze my last three months of pay when I resigned?
2. When does IR21 withholding start — resignation notice or final month?
3. Do unvested RSUs get deemed-exercised at tax clearance?
4. What should I ask HR in writing about share-plan tracking?
5. I lost my EP card overseas — can I still board home?
6. Does SGWorkPass replace the need for a MOM re-entry letter?
7. How fast must HR file card replacement after overseas loss?
8. Can a mid-pass salary cut revoke my spouse’s DP?
9. How far in advance must MOM be notified of an EP salary cut?
10. Does SAT still need to clear after the cut?
11. Is a related-company transfer the same as a salary notify?
12. Does a raise need the same MOM notify as a cut?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 13)

Branch: `cursor/loop-d-next-polish-tick13-d996` → draft PR to `main`. Owns **Next** companions plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home / Life body trees. Avoided open Loop D file sets from [#83](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/83) / [#89](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/89) / [#99](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/99). #79 already merged.

### Sources mined

**Reddit / forums**

- r/askSingapore — CPF nomination failed because a witness missed the confirm window / nominee also listed as witness.
- r/askSingapore — passport stolen overseas / emergency travel document and “am I still PR at Changi?”
- r/askSingapore — EP renewal SAT screenshots where firm diversity / local-PMET scores cratered after hiring.

**Official**

- [CPF Board — Making a CPF nomination](https://www.cpf.gov.sg/member/account-services/providing-for-your-loved-ones/making-a-cpf-nomination) · [make a nomination](https://www.cpf.gov.sg/makecpfnom)
- [ICA — Transfer of Re-Entry Permit / Update Travel Document](https://www.ica.gov.sg/reside/PR/transfer-REP) · [Apply / renew REP](https://www.ica.gov.sg/reside/PR/apply-REP)
- [MOM — EP eligibility / COMPASS](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility) · [Renew an EP](https://www.mom.gov.sg/passes-and-permits/employment-pass/renew-a-pass) · [SAT](https://www.mom.gov.sg/eservices/services/employment-s-pass-self-assessment-tool)

### Gaps vs prior ticks

Open stack (#83 → #89 → #99) owns PRSEP/NS Exit/renounce-PR NS traps, EP-death DP / SC cooling-off / LPA fees, and WICA clocks / training-bond IPA / SAL e-Apostille. Remaining high-intent **Next** gaps without companion depth: **CPF nomination Singpass witness clocks**, **REP transfer after lost passport / ETD**, **COMPASS firm scores on EP renewal**. About + editorial research language updated.

### Shipped

**New:** `cpf-nomination-singpass-witnesses-singapore.mdx`, `rep-transfer-lost-passport-etd-singapore.mdx`, `ep-renewal-compass-firm-scores-singapore.mdx`

**Upgraded:** `wills-probate-cpf-nomination-singapore.mdx`, `transfer-rep-new-passport.mdx`, `ep-renewal-strategy.mdx` (cross-links only); `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No Move/Money/Family/Belong/Home/Life body edits.
- Did not edit #83 / #89 / #99 guide bodies.

### Questions mined

1. Why did my CPF nomination fail after I submitted online?
2. Can my spouse be both a CPF nominee and a Singpass witness?
3. How long do witnesses have to confirm a CPF nomination?
4. Does a will change rewrite my CPF nomination after divorce?
5. Passport stolen overseas — am I still PR when I fly home on an ETD?
6. Do I transfer REP onto an emergency travel document?
7. Transfer vs renew vs lost-NRIC when the passport is gone?
8. Why did last year’s EP renewal clear COMPASS but this year’s SAT fails?
9. What firm COMPASS questions should I email HR before filing?
10. Is a soft firm score the same problem as an NOA document ask?
11. Does C1 salary percentile equal the Stage 1 qualifying floor?
12. When should I ask about COMPASS exemptions vs S Pass contingency?

---

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 15)

Branch: `cursor/e-journeys-tools-tick15-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (through #139 on tip). **Did not wait for merges.** Avoided open E stack exclusives **#147** (newborn/sim-otp) and **#156** (condo/car-coe) plus earlier stack path sets. Prefer merge order note: **#147 → #156 → this tick**.

### Sources mined

**Reddit / forums**

- r/askSingapore — condo/HDB service-lift booking fights; movers arriving without a bay slot; weekend blackout rules.
- r/askSingapore — foreign licence 12-month conversion clock; BTT timing vs movers/leave week.

**Official / orientation**

- Estate managing-agent move-out / lift booking norms (estate-specific)
- [SPF / Traffic Police — Singapore driving licence](https://www.police.gov.sg/Knowledge-Hub/Traffic/Traffic-Matters/Singapore-Driving-Licence) framing for conversion

### Gaps vs open E stack through #156

Open **#147/#156** cover newborn Special Pass, SIM/OTP keep, condo MCST exit, car/COE exit. Remaining high-intent gaps **off those path sets**: **mover lift / loading-bay booking**, **foreign licence conversion clock**. No calendar JSON.

### Shipped this tick

**Journeys**

- `content/journeys/mover-lift-booking.json` + `/journeys/mover-lift-booking`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/foreign-licence-clock.ts`
- `src/components/tools/ForeignLicenceClockCalculator.tsx`
- `/tools/foreign-licence-clock` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #147 / #156 exclusive paths (or earlier open-stack exclusives).
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Should I book the service lift before paying the movers deposit?
2. Who pays the lift deposit — tenant or mover?
3. Do HDB and condo share the same weekend blackout rules?
4. Can I return access cards before the truck leaves?
5. What if rain cancels the open-air loading bay?
6. When does the foreign-licence conversion clock start?
7. Is 12 months from arrival or from first drive?
8. Will my need-to-drive date survive the sketched deadline?
9. Should I convert before movers week?
10. What if the deadline already passed?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 12)

Branch: `cursor/loop-d-next-polish-tick12-d996` → PR to `main`. Owns **Next** companions plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home / Life body trees. Avoided open Loop D file sets from [#79](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/79) / [#83](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/83) / [#89](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/89).

### Sources mined

**Reddit / forums**

- r/askSingapore — WICA light-duty pay / “did I file?” folklore after workplace injury on EP.
- r/askSingapore — resign-after-IPA with a private training bond / “remaining salary” clawback screenshots.
- r/askSingapore — Adelphi Apostille queue vs e-Apostille / ACRA digital extract confusion.

**Official**

- [MOM — For employees: how to claim](https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/employees-how-to-claim) · [Types of compensation](https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/types-of-compensation) · [WICA versus common law](https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/wica-versus-common-law) · [Do employees still need to file with MOM?](https://www.mom.gov.sg/faq/work-injury-compensation/do-employees-or-representatives-still-need-to-file-claim-for-wica-with-mom)
- [MOM — Change jobs while on an EP](https://www.mom.gov.sg/faq/employment-pass/what-if-i-want-to-change-jobs-while-i-am-on-an-ep) · [Resignation FAQ](https://www.mom.gov.sg/faq/termination/can-an-employer-reject-an-employees-resignation) · [Salary deductions](https://www.mom.gov.sg/employment-practices/salary/salary-deductions)
- [SAL — Legalisation FAQ](https://legalisation.sal.sg/Faq) · [Legalisation info](https://legalisation.sal.sg/LegalisationInfo) · [Public documents authenticated online from 2025](https://sal.org.sg/articles/public-documents-can-be-authenticated-online-from-2025-2/)

### Gaps vs prior ticks

Ticks 9–11 (open) own spouse-LTVP / ROE / citizenship confirmation, PRSEP / NS Exit / renouncing-PR NS traps, and EP-death DP / SC cooling-off / LPA Form fees. Remaining high-intent **Next** employment / document gaps without companion depth: **WICA light-duty + claim clocks** (notify ≠ file; shortfall maths; 1-year fork), **resign-after-IPA on training bond** (notice vs clawback; deduction vs invoice), **SAL e-Apostille chooser** (notarised pilot vs ACRA direct ~S$10.70). About + editorial research language updated.

### Shipped

**New:** `wica-light-duty-claim-clocks-ep.mdx`, `training-bond-resign-after-ipa-ep.mdx`, `sal-e-apostille-notarised-docs-singapore.mdx`

**Upgraded:** `wica-work-injury-compensation-ep.mdx`, `training-bonds-clawbacks-ep.mdx`, `document-apostille-notary-singapore.mdx` (cross-links only); `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No Move/Money/Family/Belong/Home/Life body edits.
- Did not edit #79 / #83 / #89 guide bodies.

### Questions mined

1. Do I still need to “file a WICA claim with MOM” after I tell HR?
2. Does light duty pay full salary, or only a shortfall to AME / 2/3 AME?
3. What are the 14-day vs 1-year medical-leave wage bands?
4. How long do I have to choose WICA vs common law?
5. Can I resign on a training bond once I have a new IPA?
6. Can HR deduct the bond from my final salary without my agreement?
7. Is “pay remaining contract salary” usually a penalty vs liquidated damages?
8. What is the MOM-safe job-change sequence with a live bond?
9. Is SAL e-Apostille for notarised documents a DIY portal for me?
10. When is the ~S$10.70 ACRA direct e-Apostille enough?
11. When does the overseas recipient still demand a paper Apostille?
12. Can SAL apostille a foreign-issued marriage cert for ICA/MOM?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 11)

Branch: `cursor/loop-d-next-polish-tick11-d996` → PR to `main`. Owns **Next** guides plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home / Life body trees. No ads / Grok. Avoided open [#79](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/79) (tick 9) and [#83](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/83) (tick 10) file sets.

### Sources mined

**Reddit / forums**

- r/askSingapore — EP holder death → Dependant’s Pass / kids’ school stay folklore; STVP vs Special Pass confusion.
- r/askSingapore / r/NationalServiceSG — SC renunciation cooling-off / “can I get my S$35 back” / originals-not-received threads (eligibility gates already covered on parent guide).
- r/askSingapore — LPA Form 1 vs Form 2; “can foreigners / PRs make an LPA” fee folklore after May 2026 cuts.

**Official**

- [MOM — Cancel a Dependant’s Pass](https://www.mom.gov.sg/passes-and-permits/dependants-pass/cancel-a-pass) (DP cancels with main pass; STVP up to 90 days)
- [ICA — Special Pass / e-Special Pass](https://www.ica.gov.sg/public-education/special-pass) (purpose-limited; not a widow entitlement)
- [ICA — Renunciation of Singapore Citizenship](https://www.ica.gov.sg/enter-depart/for-singapore-citizens/renunciation) + [user guide PDF](https://www.ica.gov.sg/docs/default-source/ica/forms/user-guide-sc-renunciation.pdf) (cooling-off ≤3 months; originals; S$35; no refund)
- [OPG — What is an LPA](https://www.msf.gov.sg/what-we-do/opg/lasting-power-of-attorney/what-is-a-lasting-power-of-attorney) + [fees PDF](https://www.msf.gov.sg/docs/default-source/opg/lpa_fees_table.pdf) + [2026 fee regulations](https://sso.agc.gov.sg/SL-Supp/S272-2026/Published/20260430?DocDate=20260430)

### Gaps vs prior ticks

Tick 9 (#79) covers EP→spouse LTVP bridge / ROE / citizenship letter. Tick 10 (#83) covers PRSEP / NSman Exit edges / renouncing-PR NS traps. Remaining high-intent **Next** life-admin gaps matched this mine: **EP death → DP cascade + STVP**, **SC renunciation cooling-off / originals companion**, **LPA Form 1 vs Form 2 + May 2026 PR/foreigner fees**.

### Shipped

**New:** `ep-death-dependant-pass-cascade-singapore.mdx`, `sc-renunciation-cooling-off-documents-singapore.mdx`, `lpa-form1-form2-fees-pr-foreigners-singapore.mdx`

**Upgraded:** `death-repatriation-foreigners-singapore.mdx`, `renouncing-singapore-citizenship.mdx`, `lasting-power-attorney-amd-foreigners.mdx`; `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No Move/Money/Family/Belong/Home/Life body edits. Did not edit #79 or #83 primary paths.

### Questions mined

1. When an EP holder dies, do the family’s Dependant’s Passes keep running to the card date?
2. Can survivors get an STVP, and for how long?
3. Is an ICA Special Pass automatic for widows / widowers?
4. What is ICA’s optional cooling-off on SC renunciation, and can it be extended?
5. Which originals must reach ICA before renunciation processing starts?
6. Is the S$35 renunciation fee refundable if I withdraw?
7. Can a foreigner or PR make a Singapore LPA?
8. Form 1 or Form 2 — which do most EP/PR households need?
9. What OPG application fees apply to PRs and foreigners from 1 May 2026?
10. Does an LPA replace a will or CPF nomination?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 10)

Branch: `cursor/loop-d-next-polish-tick10-d996` → PR to `main`. Owns **Next** guides plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home / Life body trees. No ads / Grok. Avoided open restore [#79](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/79) (tick 9 / former #67) file set and tick 8 (#60, merged) primary MDX bodies beyond site-rail restore.

### Sources mined

**Reddit / forums**

- r/askSingapore — REP / PRSEP after 1 Dec 2025 (180-day clock folklore; “reinstatement” myths; single-entry pass confused with multi-year REP).
- r/askSingapore / r/NationalServiceSG — NSman Exit Permit edge cases (12-month threshold vs 6–12 notify; auto-cancel after long Singapore stays; unemployed / freelance renewals; ICT vs Exit Permit).
- r/askSingapore / r/NationalServiceSG — renouncing PR as NS dodge (pre-enlistment vs NSF vs after ORD; sponsor-family collateral; REP lapse vs formal renunciation).

**Official**

- [ICA — REP process revisions from 1 Dec 2025 (FAQ PDF)](https://www.ica.gov.sg/docs/default-source/ica/files/faqs_revisions-to-permanent-resident-re-entry-permit-application-process-from-1-december-2025.pdf)
- [MHA — REP process revisions from 1 Dec 2025](https://www.mha.gov.sg/media-room/newsroom/revisions-to-permanent-resident-re-entry-permit-application-process-from-1-december-2025/)
- [ask.gov.sg — NSman Exit Permit requirements](https://ask.gov.sg/mindef/questions/cmhvc94jb0049koswqmmlpgoh) / [overseas work/study](https://ask.gov.sg/mindef/questions/cmhvblo84008ihpjiojoczv1g)
- [MINDEF — Exit Permit threshold reply (31 Mar 2023)](https://www.mindef.gov.sg/news-and-events/latest-releases/31mar23_fr/)
- [ICA — Renunciation of Permanent Residence](https://www.ica.gov.sg/enter-transit-depart/more-information/for-permanent-residents/renunciation-of-permanent-residence) + [ICA PR NS warnings](https://www.ica.gov.sg/reside/PR)
- [MINDEF parliamentary reply on NS-liable PRs who renounce (2014)](https://www.mindef.gov.sg/news-and-events/latest-releases/2014aug05-Parliamentary-000073)

### Gaps vs prior ticks

Tick 8 shipped NRIC re-reg / eCOA / SCJ. Tick 9 (open restore #79) covers EP→spouse LTVP bridge, ROE, citizenship confirmation letter. Remaining high-intent **Next** depth matched this mine: **PRSEP / 180-day REP FAQ companion**, **NSman Exit Permit edge cases**, **renouncing-PR NS liability traps**. Also restored tick-8 Next topic rails wiped from `site.ts` by a later unrelated merge.

### Shipped

**New:** `prsep-180-day-rep-faq-singapore.mdx`, `ns-exit-permit-nsman-edge-cases-singapore.mdx`, `renouncing-pr-ns-liability-traps-singapore.mdx`

**Upgraded:** `re-entry-permit-pr-overseas.mdx`, `ns-exit-permit-pr-families.mdx`, `renouncing-pr-singapore.mdx`; `src/lib/site.ts` Next topics (tick 8 restore + tick 10); about + editorial.

### Explicitly not done

- No ads / Grok. No Move/Money/Family/Belong/Home/Life body edits. Did not land tick 9 paths (open on #79). Did not rewrite tick 8 NRIC/eCOA/SCJ MDX bodies.

### Questions mined

1. When does the 180-day REP clock start if I left without a valid REP vs if it expired overseas?
2. If I return to Singapore within 180 days, does the clock stop?
3. What is PRSEP, and does it replace a normal multi-year REP?
4. Can I appeal reinstatement after missing the 180-day window or a refused REP?
5. Do NSmen need an Exit Permit for trips under 12 months?
6. Does a long Singapore stay auto-cancel an Exit Permit?
7. Can I renew an Exit Permit while unemployed / freelancing overseas?
8. Is Exit Permit the same as ICT deferment or ICA Re-Entry Permit?
9. Will ICA withhold PR renunciation if NS obligations are outstanding?
10. What happens to dependants when the main applicant renounces?
11. Does letting REP lapse overseas avoid NS consequences the way formal renunciation does?
12. What does ICA’s “serious adverse impact” warning mean for later EP / family passes?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 14)

Branch: `cursor/e-journeys-tools-tick14-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` (E6/#90 content present on main). Avoided open E stack exclusive paths **#90 → #101 → #110 → #116 → #122 → #131 → #139 → #147**. Prefer merge order: **#101 → #110 → #116 → #122 → #131 → #139 → #147 → this tick** (skip already-landed #90 files).

### Sources mined

**Reddit / forums**

- r/askSingapore — condo access card / IU return fights; MCST renovation deposit vs landlord deposit confusion.
- r/askSingapore / r/singapore — selling vs exporting car before exit; PARF/COE rebate double-count folklore.

**Official / orientation**

- Estate managing-agent / MCST handover norms (estate-specific)
- [OneMotoring / LTA](https://onemotoring.lta.gov.sg/) vehicle deregistration / rebate framing

### Gaps vs open E stack

Open **#101/#110/#116/#122/#131/#139/#147** (and #90 exclusives if still open elsewhere) cover graduate bridge, hospital cash, FDW levy, bank-exit, storage, utility exit, IR21, pets, CPF, Singpass exit, school deposit clawback, newborn Special Pass, SIM/OTP keep. Remaining high-intent gaps **off those path sets**: **condo MCST / access-card exit**, **car/COE exit cash sketch**. No calendar JSON.

### Shipped this tick

**Journeys**

- `content/journeys/condo-mcst-exit.json` + `/journeys/condo-mcst-exit`
- Journeys index + sitemap (hub soft-conflict expected)

**Tools**

- `src/lib/tools/car-coe-exit.ts`
- `src/components/tools/CarCoeExitCalculator.tsx`
- `/tools/car-coe-exit` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #90 / #101 / #110 / #116 / #122 / #131 / #139 / #147 exclusive paths.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Who holds the condo renovation deposit — MCST or landlord?
2. Can the agent return access cards without me present?
3. Does cancelling season parking auto-return the IU?
4. When should visitor QR / plate whitelist be wiped?
5. How do I sequence movers vs management-office hours?
6. Will a private sale price already include PARF/COE rebate?
7. What cash float do I need if export fees spike?
8. Does prepaid parking count as sunk cost in the exit sketch?
9. Should I clear the car loan before or after the condo handover?
10. Can I keep the car registered after I leave Singapore?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 13)

Branch: `cursor/e-journeys-tools-tick13-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Fresh off `origin/main` after **#72 MERGED** (family-joining + IPA window on main). Avoided open E stack **#90 → #101 → #110 → #116 → #122 → #131 → #139** exclusive paths. Merge controller order: **#90 → #101 → #110 → #116 → #122 → #131 → #139 → this tick**.

### Sources mined

**Reddit / forums**

- r/askSingapore — newborn PR / Special Pass clocks; Dependant Pass after Singapore birth vs inbound family joining.
- r/askSingapore — keeping a prepaid +65 for Singpass OTP after leaving; dead SIM breaking bank SMS mid-IR21 / newborn DP filing.

**Official**

- [ICA](https://www.ica.gov.sg/) Special Pass / birth-related stay framing
- [MOM — Dependant Pass](https://www.mom.gov.sg/passes-and-permits/dependants-pass)
- [Singpass](https://www.singpass.gov.sg/) OTP / contact hygiene

### Gaps vs Loop E ticks 1–12 (open stack + merged #72)

**#72 on main** covers family-joining + IPA window. Open **#90/#101/#110/#116/#122/#131/#139** cover DP/LOC, graduate bridge, hospital cash, FDW levy, bank-exit, storage, utility exit, IR21 withhold, pets, CPF timing, Singpass exit playbook, school deposit clawback. Remaining high-intent gaps **off those path sets**: **newborn Special Pass playbook** (onshore birth — distinct from family-joining inbound), **SIM/OTP keep-vs-port cash sketch**. No calendar JSON.

### Shipped this tick

**Journeys**

- `content/journeys/newborn-special-pass.json` + `/journeys/newborn-special-pass`
- Journeys index + sitemap (hub soft-conflict expected after open stack)

**Tools**

- `src/lib/tools/sim-otp-keep.ts`
- `src/components/tools/SimOtpKeepCalculator.tsx`
- `/tools/sim-otp-keep` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #90 / #101 / #110 / #116 / #122 / #131 / #139 exclusive paths.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. How long is the ICA Special Pass after a Singapore birth?
2. Is newborn Special Pass the same as family joining later?
3. When should HR start the Dependant Pass file?
4. Can we fly out before DP issuance?
5. Does IPA window maths still apply once the baby is onshore?
6. Should we keep prepaid or postpaid for Singpass OTP?
7. How many months of +65 SMS do leavers usually need?
8. What breaks if we drop the Singapore number too early?
9. Is number port cheaper than three months of prepaid?
10. How do newborn DP OTPs collide with a parent’s exit SIM plan?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 12)

Branch: `cursor/e-journeys-tools-tick12-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Avoided open E stack **#72 → #90 → #101 → #110 → #116 → #122 → #131** exclusive paths. Merge controller order: **#72 → #90 → #101 → #110 → #116 → #122 → #131 → this tick**.

### Sources mined

**Reddit / forums**

- r/askSingapore — Singpass still logs in after EP cancel; Myinfo dies for bank KYC; OTP SMS stranded on a dead Singapore number.
- r/askSingapore — mid-year international school deposit forfeiture vs notice; remaining tuition billed after resignation.

**Official**

- [Singpass](https://www.singpass.gov.sg/)
- [ScamShield](https://www.scamshield.gov.sg/)
- Parent-handbook / enrolment norms (orientation only — school contracts control clawbacks)

### Gaps vs Loop E ticks 1–11 (open stack)

Open **#72/#90/#101/#110/#116/#122/#131** cover family-joining, DP/LOC, graduate bridge, hospital cash, FDW levy, bank-exit, storage, utility exit, IR21 withhold, pets re-export, CPF timing, plus school-withdrawal **notice** timing in #90. Remaining high-intent gaps **off those path sets**: **Singpass/Myinfo exit playbook**, **mid-year school deposit clawback cash sketch** (money at risk — distinct from #90 notice weeks). No calendar JSON.

### Shipped this tick

**Journeys**

- `content/journeys/singpass-myinfo-exit.json` + `/journeys/singpass-myinfo-exit`
- Journeys index + sitemap (hub soft-conflict expected after open stack)

**Tools**

- `src/lib/tools/school-deposit-clawback.ts`
- `src/components/tools/SchoolDepositClawbackCalculator.tsx`
- `/tools/school-deposit-clawback` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #72 / #90 / #101 / #110 / #116 / #122 / #131 exclusive paths.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Does Singpass login after EP cancel mean I can still stay?
2. When does Myinfo stop answering for bank KYC?
3. Should I keep a Singapore SIM for OTPs after I fly?
4. How do I hand off Corppass / school portal admin roles?
5. What phishing themes hit leavers during cancel week?
6. How much of the school deposit is at risk mid-term?
7. Does meeting notice protect the deposit automatically?
8. Will the school still bill remaining tuition after I resign?
9. How do I sketch cash at risk before serving lease notice?
10. Can I pay the bursar after Myinfo dies?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 11)

Branch: `cursor/e-journeys-tools-tick11-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Avoided open E stack **#72 → #90 → #101 → #110 → #116 → #122** exclusive paths. Merge controller order: **#72 → #90 → #101 → #110 → #116 → #122 → this tick**.

### Sources mined

**Reddit / forums**

- r/askSingapore — pet re-export titre / airline crate horror; “we imported fine so export is easy” myths.
- r/askSingapore / r/singaporefi — CPF withdrawal timing vs flight date; PR leavers waiting on Board processing while freight quotes expire.

**Official**

- [NParks / AVS — exporting animals](https://www.nparks.gov.sg/avs/pets/bringing-animals-into-singapore-and-exporting/exporting-animals)
- [IATA Live Animals](https://www.iata.org/en/programs/cargo/live-animals/)
- [CPF Board](https://www.cpf.gov.sg/) withdrawal / closure framing for foreigners and PRs leaving

### Gaps vs Loop E ticks 1–10 (open stack)

Open **#72/#90/#101/#110/#116/#122** cover family-joining, DP/LOC, graduate bridge, hospital cash, FDW levy, bank-exit, storage, utility exit, IR21 withhold. Remaining high-intent journeys/tools gaps **off those path sets**: **pets re-export / AVS exit**, **CPF withdrawal timing sketch**. No calendar JSON.

### Shipped this tick

**Journeys**

- `content/journeys/pets-reexport.json` + `/journeys/pets-reexport`
- Journeys index + sitemap (hub soft-conflict expected after open stack)

**Tools**

- `src/lib/tools/cpf-withdrawal.ts`
- `src/components/tools/CpfWithdrawalCalculator.tsx`
- `/tools/cpf-withdrawal` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #72 / #90 / #101 / #110 / #116 / #122 exclusive paths.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. How early should I start rabies titres before my own flights?
2. Does NParks/AVS export require destination paperwork first?
3. Cabin vs cargo — which airlines still take pets on my route?
4. Do Singapore import quarantine rules apply on the way out?
5. How do I sequence FDW cancel with the pet’s flight day?
6. When should a PR start CPF withdrawal relative to departure?
7. What processing window should I assume if CPF has not quoted yet?
8. Can EP-only households skip CPF withdrawal entirely?
9. What if the apply-by date is already past?
10. How do pet freight quotes collide with CPF cash timing?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 10)

Branch: `cursor/e-journeys-tools-tick10-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Avoided open E stack **#72 → #90 → #101 → #110 → #116** exclusive paths. Merge controller order: **#72 → #90 → #101 → #110 → #116 → this tick**.

### Sources mined

**Reddit / forums**

- r/askSingapore — fibre ETF surprises at move-out; SP final meter no-shows; GIRO still pulling after “cancelled” broadband.
- r/askSingapore / r/singaporefi — IR21 salary hold folklore (2 weeks vs 2 months); final rent competing with withheld pay.

**Official**

- [SP Group](https://www.spgroup.com.sg/) / [PUB](https://www.pub.gov.sg/) account closure norms
- [IMDA](https://www.imda.gov.sg/) consumer telecom framing
- [IRAS — tax clearance for foreigners leaving Singapore](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreigners-leaving-singapore)

### Gaps vs Loop E ticks 1–9 (open stack)

Open **#72/#90/#101/#110/#116** cover family-joining, DP/LOC, graduate bridge, hospital cash, FDW levy, bank-exit, storage. Remaining high-intent journeys/tools gaps **off those path sets**: **utility/telecom exit handover**, **IR21 withhold timeline sketch**. No calendar JSON.

### Shipped this tick

**Journeys**

- `content/journeys/utility-exit-handover.json` + `/journeys/utility-exit-handover`
- Journeys index + sitemap (hub soft-conflict expected after open stack)

**Tools**

- `src/lib/tools/ir21-withhold.ts`
- `src/components/tools/Ir21WithholdCalculator.tsx`
- `/tools/ir21-withhold` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #72 / #90 / #101 / #110 / #116 exclusive paths.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. How many days’ notice does fibre need before key handover?
2. Who books the SP final meter read — tenant or agent?
3. Does cancelling broadband automatically kill the bank GIRO?
4. How long do utility deposits take to refund after move-out?
5. Should I keep mobile data active through departure day?
6. How long will my employer withhold salary for IR21?
7. Can I fly before the IRAS Directive is issued?
8. How much net pay should I treat as cash-at-risk during clearance?
9. What if HR files IR21 late relative to my last day?
10. How do I float rent and utilities while final pay is frozen?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 9)

Branch: `cursor/e-journeys-tools-tick9-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Avoided open E stack **#72 → #90 → #101 → #110** exclusive paths. Merge controller order: **#72 → #90 → #101 → #110 → this tick**.

### Sources mined

**Reddit / forums**

- r/askSingapore — “bank froze my account after EP cancel”; PayNow still linked to old FIN; GIRO ghost pulls after exit.
- r/askSingapore / relocation threads — furniture in storage while flat hunting or shipping; 3-month warehouse vs extend lease math.

**Official / primary**

- [MAS — banking regulation overview](https://www.mas.gov.sg/regulation/banking)
- [ABS — PayNow](https://www.abs.org.sg/consumer-banking/paynow)
- Market self-storage rate cards (orientation bands only — not a vendor endorsement)

### Gaps vs Loop E ticks 1–8 (open #72 / #90 / #101 / #110)

Ticks 1–4 on main. Open **#72**: family-joining, ipa-window, PH. Open **#90**: loc-dp-work-rights, school-withdrawal. Open **#101**: graduate-pass-bridge, agent-commission. Open **#110**: hospital-cash-deposit, fdw-levy. Remaining high-intent journeys/tools gaps **off those path sets**: **bank-exit closure playbook**, **storage-months cost sketch**. No calendar JSON.

### Shipped this tick

**Journeys**

- `content/journeys/bank-exit-closure.json` + `/journeys/bank-exit-closure`
- Journeys index + sitemap (hub soft-conflict expected after open stack)

**Tools**

- `src/lib/tools/storage-months.ts`
- `src/components/tools/StorageMonthsCalculator.tsx`
- `/tools/storage-months` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #72 / #90 / #101 / #110 exclusive paths.
- Left older E PRs open for merge controller.

### Questions mined (sample)

1. Should I close my SGD account the week my EP cancels?
2. Will the bank freeze online banking when my FIN status changes?
3. How do I remove PayNow linked to a mobile number I am giving up?
4. Can forgotten GIRO mandates block account closure?
5. Do I keep one account open for an IRAS refund?
6. How much self-storage does a 2-bed condo usually need?
7. Is three months of storage cheaper than extending the lease?
8. What insurance add-on should I budget on top of the unit rate?
9. When should I pay storage relative to bank remittance?
10. Can I settle the final storage invoice after I leave Singapore?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 8)

Branch: `cursor/e-journeys-tools-tick8-fa4f` → draft PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Avoided open E stack **#72 → #90 → #101** exclusive paths. **#78** already on main. Merge controller order: **#72 → #90 → #101 → this tick**.

### Sources mined

**Reddit / forums**

- r/askSingapore / r/singapore — private hospital asking S$8–15k deposit despite IP; LOG vs cash float; foreign-card declines at admissions.
- r/askSingapore — FDW levy concession myths when first helper vs subsequent; levy continuity when EP employer changes.

**Official**

- [MOH — healthcare financing overview](https://www.moh.gov.sg/healthcare-systems/financing)
- [CPF — MediShield Life](https://www.cpf.gov.sg/member/healthcare-financing/medishield-life) (IP adjacency; foreigners ≠ automatic MediSave)
- [MOM — FDW levy](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/foreign-domestic-worker-levy)

### Gaps vs Loop E ticks 1–7 (open #72 / #90 / #101)

Ticks 1–4 on main (incl. #78): arriving, between-jobs, tax-residency, pre-arrival, lease-notice, GF/Labour/Vesak. Open **#72**: family-joining, ipa-window, Haji/Christmas/NY2027. Open **#90**: loc-dp-work-rights, school-withdrawal. Open **#101**: graduate-pass-bridge, agent-commission. Remaining high-intent journeys/tools gaps **off those path sets**: **hospital cash-deposit playbook**, **FDW levy sketch**. No calendar JSON this tick.

### Shipped this tick

**Journeys**

- `content/journeys/hospital-cash-deposit.json` + `/journeys/hospital-cash-deposit`
- Journeys index + sitemap (hub soft-conflict expected after #72/#90/#101)

**Tools**

- `src/lib/tools/fdw-levy.ts`
- `src/components/tools/FdwLevyCalculator.tsx`
- `/tools/fdw-levy` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #72 / #90 / #101 exclusive paths.
- Left #72, #90, #101 open for merge controller.

### Questions mined (sample)

1. Why is the hospital still asking for a cash deposit when I have an Integrated Shield plan?
2. Does a company Letter of Guarantee replace the admissions deposit?
3. How long after discharge until the deposit is refunded?
4. Can MediSave pay a foreigner’s private-hospital bill?
5. What cash buffer should I hold beyond the quoted deposit?
6. What is the current MOM monthly levy for a first FDW?
7. When do I qualify for the concessionary FDW levy?
8. Is the subsequent-helper levy charged if I hire a second helper?
9. Does FDW levy change when the EP employer’s pass is cancelled or transferred?
10. Can I budget FDW levy as a simple months × band sketch before MOM confirms?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 7)

Branch: `cursor/e-journeys-tools-tick7-fa4f` → PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Avoided open **#72** (E5) and **#90** (E6) exclusive path sets; **#78** already on main. Merge controller order remains **#72 → #90 → this tick**.

### Sources mined

**Reddit / forums**

- r/askSingapore / r/singapore — Student’s Pass ending with no IPA yet; “can I stay and job-hunt?” folklore; Training EP vs EP confusion.
- r/askSingapore / PropertyGuru-adjacent threads — who pays agent fee on condo rentals; half-month vs one-month + GST ambush at LOI.

**Official**

- [ICA — Student’s Pass](https://www.ica.gov.sg/reside/studentpass)
- [MOM — Training Employment Pass](https://www.mom.gov.sg/passes-and-permits/training-employment-pass)
- [MOM — Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass)
- CEA / market practice notes: residential rental commission is contractual (not a fixed statute fee)

### Gaps vs Loop E ticks 1–6 (and open #72 / #90)

Ticks 1–4 on main (incl. #78): arriving, between-jobs, tax-residency, pre-arrival, lease-notice, GF/Labour/Vesak. Open **#72**: family-joining, ipa-window, Haji/Christmas/NY2027. Open **#90**: loc-dp-work-rights, school-withdrawal. Remaining high-intent journeys/tools gaps **off those path sets**: **graduate / Student’s Pass bridge**, **tenancy agent-commission sketch**. No calendar JSON this tick.

### Shipped this tick

**Journeys**

- `content/journeys/graduate-pass-bridge.json` + `/journeys/graduate-pass-bridge`
- Journeys index + sitemap entries (hub soft-conflict expected after #72/#90)

**Tools**

- `src/lib/tools/agent-commission.ts`
- `src/components/tools/AgentCommissionCalculator.tsx`
- `/tools/agent-commission` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #72 paths (family-joining, ipa-window, Haji/Christmas/NY2027, day-90).
- Did **not** touch #90 paths (loc-dp-work-rights, school-withdrawal).
- Did **not** re-edit #78 exclusive files beyond soft hubs.
- Left #72 and #90 open for merge controller (#72 → #90 → #tick7).

### Questions mined (sample)

1. Can I stay in Singapore after my Student’s Pass ends while I job-hunt?
2. Is a signed EP offer enough to keep me legal past Student’s Pass expiry?
3. When should my employer lodge the IPA relative to graduation?
4. Is Training Employment Pass the right product for a short graduate attachment?
5. What if my Student’s Pass dies before IPA issuance?
6. Who usually pays the condo rental agent — tenant or landlord?
7. Is half a month of rent a normal tenant-side fee on a 2-year TA?
8. Does GST apply on top of the agent’s fee months?
9. Can the agent claim more than one month from a tenant?
10. Should I budget agent commission inside the first-month cash sketch?

---

---

## Loop E — Journeys / tools — 2026-09-15 (tick 6)

Branch: `cursor/e-journeys-tools-tick6-fa4f` → PR to `main`. Owns **journeys + tools only**. No ads / Grok / pillar guide MDX. Avoided open **#78** (E4 restore) and **#72** (E5) path sets — merge controller lands **#78 before #72**.

### Sources mined

**Reddit / forums**

- r/askSingapore — “DP = can work?” / LOC renewal local-hire traps / DP dies when EP cancelled.
- r/askSingapore / international-school parent threads — mid-year withdrawal notice weeks, term-fee forfeiture folklore, handbook vs enrolment letter mismatch.

**Official**

- [MOM — Letter of Consent](https://www.mom.gov.sg/passes-and-permits/letter-of-consent)
- [MOM — LOC for DP business owners / eligibility](https://www.mom.gov.sg/passes-and-permits/loc-for-dependants-pass-business-owners/eligibility)
- [MOM — EP eligible family members](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligible-family-members)
- [ICA — Long-Term Visit Pass](https://www.ica.gov.sg/reside/LTVP) (adjacency only — not mixed with DP LOC)

### Gaps vs Loop E ticks 1–5 (and open #78 / #72)

Ticks 1–3 on main: arriving depth, between-jobs, tax-residency, EP uplift calendar. Open **#78**: pre-arrival, lease-notice, GF/Labour/Vesak. Open **#72**: family-joining, ipa-window, Haji/Christmas/NY2027. Remaining high-intent journeys/tools gaps **off those path sets**: **DP/LOC work-rights playbook shell**, **school-withdrawal notice sketch**. No calendar JSON this tick (avoids `calendar/page.tsx` soft-conflict with #78/#72).

### Shipped this tick

**Journeys**

- `content/journeys/loc-dp-work-rights.json` + `/journeys/loc-dp-work-rights`
- Journeys index + sitemap entries (hub soft-conflict expected after #78/#72)

**Tools**

- `src/lib/tools/school-withdrawal.ts`
- `src/components/tools/SchoolWithdrawalCalculator.tsx`
- `/tools/school-withdrawal` + tools index + sitemap

### Explicitly not done

- No ads / monetization / Grok clone copy.
- No pillar guide MDX.
- Did **not** touch #78 paths (pre-arrival, lease-notice, GF/Labour/Vesak, day-7/30, leaving-singapore body, JourneyHero).
- Did **not** touch #72 paths (family-joining, ipa-window, Haji/Christmas/NY2027, day-90).
- Left #78 and #72 open for merge controller (#78 → #72).

### Questions mined (sample)

1. Does a Dependant’s Pass let my spouse work in Singapore?
2. Who applies for an employee Letter of Consent — me or the employer?
3. Is business-owner LOC the same product as employee LOC?
4. What happens to LOC when the main EP is cancelled?
5. Can I copy a friend’s DP LOC playbook onto an LTVP?
6. When is EP/S Pass cleaner than stacking LOC on DP?
7. How many weeks’ written notice does my international school need before withdrawal?
8. If I miss the notice deadline, do I still owe the rest of the term’s fees?
9. Does last attendance before term end automatically mean a mid-term fee clawback?
10. Should school withdrawal and LOC/EP timelines be planned on the same calendar?

---

---

## Loop A — Move + Money — 2026-09-15 (tick 16)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `cursor/loop-a-move-money-tick16-49cb` → PR to `main` (fresh worktree off `origin/main` @ `83b4cc4` post-A11/#92; A12–A15 (#97/#105/#111/#121) had also landed on `main` by rebase time; this tip rebases onto `origin/main` @ `83b4cc4` post-#121. Did not re-edit those now-merged guide paths beyond the freed job-change/remittance/health FAQ depth.)

### Sources mined

**Reddit**

- r/askSingapore — resign-after-IPA still loses RSU/AWS; old HR stalling EP cancel; “medical already done” myths on job change.
- r/askSingapore — PayNow-to-overseas-landlord folklore; Wise-as-salary-account; payroll vs large inward SoF freezes.
- r/askSingapore — DP family not on group plan; outpatient caps surprise; uninsured STVP gap between jobs.

**Official**

- [MOM — Change jobs while on an EP](https://www.mom.gov.sg/faq/employment-pass/what-if-i-want-to-change-jobs-while-i-am-on-an-ep) + [Cancel a work pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass)
- [MAS — Payments / remittance oversight](https://www.mas.gov.sg/) + licensed remittance / MPI framing
- [MOH — Healthcare system](https://www.moh.gov.sg/home/our-healthcare-system) + employer LOG practice

### Gaps vs prior Loop A ticks (Move + Money scope)

Open A12–A15 still claim issuance/housing/comparison/net-new card-travel paths. After A8–A11 merged, **job-change / remittance / health-insurance** (and missing hub topics for student pass, LTVP, CPF withdrawal) were free for FAQ depth without colliding the open stack. Left #97/#105/#111/#121 guide bodies untouched.

### Shipped this loop

**Deepened guides (FAQPage appends)**

- `content/guides/move/changing-jobs-employment-pass.mdx` (+3)
- `content/guides/money/remittances-singapore.mdx` (+3)
- `content/guides/money/health-insurance-expat.mdx` (+3)
- `src/lib/site.ts` (restored changing-jobs / student-pass / LTVP / remittances / CPF-withdrawal hub topics; health LOG blurb)

### Explicitly not done

- No ads/monetization expansion (did not edit remittance/insurance sponsor slots).
- No Grok / third-party clone copy.
- Did not edit open A12–A15 guide paths or `intact-immigration`.
- Did not re-own Loop H STVP/leaving AEO or Loop D tax-clearance / lost-pass-card trees.
- Left older open A PRs for the merge controller.

### Questions mined (sample)

1. What happens to leave, bonuses, and stock after a new IPA?
2. Can old HR refuse to cancel the EP after the new one issues?
3. Do I need a new medical/biometrics when changing EP employers?
4. Can I PayNow an overseas landlord or family directly?
5. Does local payroll count as an inward remittance for SoF?
6. Is Wise / an MPI wallet a salary-account substitute?
7. Are DP family members automatic on my group plan?
8. What outpatient/dental gaps are typical on EP group plans?
9. What medical cover exists on STVP between jobs?

---

---

## Loop E — Journeys, checklists, calendar, tools — 2026-09-15 (tick 5)

Branch: `loop/e-journeys-tools-tick5` → PR to `main` (fresh worktree off `origin/main` after tick 3 [#53](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/53) merged; while [#66](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/66) tick 4 remained open). Owns **journeys / checklists / calendar / calculators** only. Did **not** edit pillar guide MDX trees. No ads / Grok. **Avoided #66 paths** (`pre-arrival`, `lease-notice`, Good Friday / Labour Day / Vesak, day-7 / day-30, leaving-singapore).

### Sources mined

**Reddit / forums**

- r/askSingapore — Dependant Pass + government-school fee myths ([DP + gov education](https://www.reddit.com/r/askSingapore/comments/1jfc9e5/dependent_pass_and_government_education/)).
- Arrival / Singpass / bank sequencing heat when dependants land after the main EP (forum folklore that the sponsor’s card “covers” family KYC — it does not).

**Official / primary**

- [MOM — Apply for a Dependant’s Pass](https://www.mom.gov.sg/passes-and-permits/dependants-pass/apply-for-a-pass) (apply with main pass or later; do not bring family before approval; visit-pass extension limits).
- [MOM — Apply for an Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/apply-for-a-pass) (IPA: ~6 months to enter and get pass issued; notification letter ~1 month).
- [MOM — Extend IPA validity](https://www.mom.gov.sg/faq/work-pass-general/how-do-i-extend-the-validity-of-an-in-principle-approval-ipa) (≥2 weeks before expiry).
- [ICA — Student’s Pass exemptions for valid DP holders](https://www.ica.gov.sg/reside/STP/apply).
- [MOE — non-citizen school fees 2024–2026](https://www.moe.gov.sg/news/press-releases/20231018-revised-school-fees-for-non-citizens-in-government-and-government-aided-schools-for-2024-to-2026).
- [MOM public holidays 2026](https://www.mom.gov.sg/employment-practices/public-holidays) — Hari Raya Haji 27 May 2026; Christmas 25 Dec 2026; New Year 1 Jan 2027.

### Gaps vs Loop E ticks 1–4

Ticks 1–3 on main: arriving boards, leaving IR21/STVP, AEIS/tax calendar, setup-cash / lease-duty / EP tables, between-jobs, tax-residency, EP uplift + Youth/Teachers’/Children’s Day. Tick 4 (#66 open): pre-arrival, lease-notice, Good Friday / Labour Day / Vesak. Remaining high-intent gaps: **family joining later**, **IPA enter-and-issue window sketch**, **Hari Raya Haji / Christmas / NY2027 markers**. Skipped pillar MDX and all #66-unique files.

### Shipped this tick

**Journeys**

- `content/journeys/family-joining.json` + `/journeys/family-joining`
- Journeys index wiring
- `day-90.json` — family-joining awareness item (did **not** touch day-7 / day-30)

**Tools**

- `src/lib/tools/ipa-window.ts`
- `src/components/tools/IpaWindowCalculator.tsx`
- `/tools/ipa-window` + tools index + sitemap

**Calendar**

- `hari-raya-haji-2026.json`, `christmas-2026.json`, `new-year-2027.json`
- Calendar hub copy (additive)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did **not** edit pillar guide MDX trees.
- Did **not** touch #66 files (`pre-arrival`, `lease-notice`, GF/Labour/Vesak, day-7/30, leaving-singapore).

### Questions mined (sample)

1. Can I apply for my spouse’s Dependant Pass after I already hold an EP?
2. Should my family fly before the DP IPA is approved?
3. How long does a typical EP IPA give me to enter and get issued?
4. What happens if we miss the IPA window — can HR extend it?
5. Does my EP card let my spouse open a bank account on day one?
6. Do DP kids need a Student’s Pass for full-time school?
7. Are government-school fees subsidised because I pay Singapore tax?
8. When is Hari Raya Haji in 2026 relative to June school holidays?
9. How should we stack Christmas leave with year-end IS breaks?
10. Why does New Year’s Day 2027 matter for EP offers?

---

---

## Loop A — Move + Money — 2026-09-15 (tick 15)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `cursor/loop-a-move-money-tick15-49cb` → PR to `main` (fresh worktree off `origin/main` @ `1f3e1ca` post-H17/#102; while [#68](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/68)–[#111](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/111) A8–A14 stay open — **did not** edit those paths).

### Sources mined

**Reddit**

- r/askSingapore — IPA weekend trips to JB; flying home before the EP card; Notification Letter as boarding pass folklore.
- r/askSingapore — “relocation is tax-free”; tax equalisation myths; burning settling-in cash before IR8A.
- r/askSingapore — resigning on probation; gardening leave vs MOM cancel; DP collapse when principal quits early.

**Official**

- [MOM — Get / after pass issued](https://www.mom.gov.sg/passes-and-permits/employment-pass/get-a-pass-issued)
- [IRAS — Employment income / benefits-in-kind](https://www.iras.gov.sg/taxes/individual-income-tax)
- [MOM — Cancel a work pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass) + termination notice practices

### Gaps vs prior Loop A ticks (Move + Money scope)

Open A8–A14 already claim **every existing Move and Money guide file**. Tick 15 therefore ships **net-new** Move+Money FAQPages for high-intent gaps that were not yet files: **travel before work-pass card**, **relocation allowance tax**, **EP probation / resignation / cancel clocks**. Left Next-owned STVP/leaving/tax-clearance and Home ABSD/helper bodies alone.

### Shipped this loop

**New guides (FAQPage)**

- `content/guides/move/travel-before-work-pass-card.mdx` (new, 5 FAQs)
- `content/guides/money/relocation-allowance-tax-singapore.mdx` (new, 5 FAQs)
- `content/guides/move/ep-probation-resignation-notice.mdx` (new, 5 FAQs)
- `src/lib/site.ts` (travel-before-card, probation/notice, relocation-tax topics)

### Explicitly not done

- No ads/monetization expansion.
- No Grok / third-party clone copy.
- Did not edit open A8–A14 guide paths or `intact-immigration`.
- Did not re-own Loop H STVP/leaving AEO or Loop D tax-clearance / lost-pass-card trees.

### Questions mined (sample)

1. Can I leave on IPA before the EP card exists?
2. Is the Notification Letter enough to re-enter?
3. Can I start work travel while the card is printing?
4. Is relocation cash tax-free?
5. Are temp housing and house-hunting flights taxable?
6. Does tax equalisation erase IRAS filing?
7. If I resign on probation, when does the EP cancel?
8. Can I serve notice during a new IPA?
9. What happens to DP when I quit early?

---

---

## Loop A — Move + Money — 2026-09-15 (tick 14)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `cursor/loop-a-move-money-tick14-49cb` → PR to `main` (fresh worktree off `origin/main` @ `183789b` post-H15/#93; while [#68](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/68)–[#105](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/105) A8–A13 stay open — **did not** edit those paths).

### Sources mined

**Reddit**

- r/askSingapore — “no EP quota so take S Pass”; levy/DRC vs COMPASS trade-offs; S Pass now, EP later folklore.
- r/askSingapore — MCF 14-day box-ticking; offer during ad window; ICT exemption hand-waving; ad salary ≠ contract salary.
- r/askSingapore — Tuition Grant LOE mistaken for EP; S Pass/PEP as bond service; liquidated damages as “immigration done”; spouse PR shortening bond.

**Official**

- [MOM — Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass) + [S Pass](https://www.mom.gov.sg/passes-and-permits/s-pass)
- [MOM — Fair Consideration Framework](https://www.mom.gov.sg/employment-practices/fair-consideration-framework)
- [MOE — Tuition Grant bond matters](https://www.moe.gov.sg/financial-matters/tuition-grant-scheme/bond-matters)

### Gaps vs prior Loop A ticks (Move + Money scope)

Open A8–A13 plus ticks 1–7 on main already own the broad Move/Money FAQ surface (job-change through year-one finance, housing, PayNow recovery, pets, WHP, S Pass hub, etc.). **Only three Move guides remained outside that open stack** with thin FAQ depth left: **EP vs S Pass comparison**, **Fair Consideration / MCF**, **MOE Tuition Grant bond**. No untouched Money guides remained outside A8–A13 — this tick stays Move-comparison dense rather than forcing Money file collisions.

### Shipped this loop

**Deepened guides (FAQPage appends)**

- `content/guides/move/ep-vs-s-pass-comparison.mdx` (+3)
- `content/guides/move/fair-consideration-framework-ep.mdx` (+3)
- `content/guides/move/moe-tuition-grant-bond.mdx` (+3)
- `src/lib/site.ts` (EP vs S Pass, FCF/MCF, Tuition Grant topics)

### Explicitly not done

- No ads/monetization expansion.
- No Grok / third-party clone copy.
- Did not edit open A8–A13 guide paths or `intact-immigration`.
- Did not invent new Money guide files solely to fill the pillar when every Money path is already in the open A stack.

### Questions mined (sample)

1. Does taking S Pass permanently block EP later?
2. Is S Pass always cheaper for HR once levy/DRC are counted?
3. Can I hold S Pass while keeping a spouse’s DP from another EP?
4. Does FCF apply to overseas affiliate transfers?
5. Which salary wins if MCF ad and offer disagree?
6. Can a recruiter close me during the 14-day ad window?
7. Does S Pass or PEP service count for Tuition Grant?
8. Does paying liquidated damages clear MOM?
9. Can a spouse’s PR shorten my TG bond?

---

---

## Loop A — Move + Money — 2026-09-15 (tick 13)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `cursor/loop-a-move-money-tick13-49cb` → PR to `main` (fresh worktree off `origin/main` @ `6506c2a` post-H10/#69; while [#68](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/68)–[#97](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/97) A8–A12 stay open — **did not** edit those paths).

### Sources mined

**Reddit**

- r/askSingapore — SA2 / “corporate Airbnb” myths; two-month deposits for two-week stays; condo by-law bans.
- r/askSingapore — trailing spouse DP study vs Student’s Pass; working after principal EP cancel; ONE Pass as spouse-LOC hack.
- r/askSingapore — pet cargo on a later flight / AQC capacity; wrong PayNow “I’ll send it back” scams; FIN proxy still mistyped.
- r/askSingapore — EP holders “maxing CPF”; unvested RSUs as EP salary; WHP employer hops; S Pass floor ≠ DP family gate.

**Official**

- [URA — Serviced apartments](https://www.ura.gov.sg/) + HDB/condo short-stay norms
- [MOM — Dependant’s Pass / LOC](https://www.mom.gov.sg/passes-and-permits)
- [AVS — Bringing pets into Singapore](https://www.nparks.gov.sg/avs)
- [ABS / bank PayNow help](https://absolute.sg/) + police advisory patterns for mistaken transfers
- [CPF / SRS eligibility for foreigners](https://www.cpf.gov.sg/) + [MOM S Pass / WHP / TEP](https://www.mom.gov.sg/passes-and-permits)

### Gaps vs prior Loop A ticks (Move + Money scope)

Open A8–A12 plus ticks 1–7 on main already cover job-change/Student’s Pass/LTVP/notify/remittance/LOG/CPF-exit, EP hub/tax/relocation/COMPASS/COR/appeal/ACRA, salary-occupation/DP/shipping/Tech.Pass/EntrePass/side-income/foreign-dividends, week-one/STVP/ONE Pass/COL/cards/salary-interest/SRS/RSU/CBNI, and SGAC/medical/HSA/licence/PEP/issuance/bank/PayNow/CPF/sign-on. Remaining high-intent depth **outside** those files: **SA2 legality & bridge deposits**, **trailing-partner study/LOC cascade**, **unaccompanied pet cargo**, **PayNow reverse-scam recovery**, **year-one CPF myth**, **unvested RSU ≠ EP floor**, **WHP employer switch**, **S Pass floor ≠ DP**.

### Shipped this loop

**Deepened guides (FAQPage appends)**

- `content/guides/move/first-housing-serviced-apartment.mdx` (+2)
- `content/guides/move/trailing-partner-career-singapore.mdx` (+2)
- `content/guides/move/importing-pets-singapore.mdx` (+1)
- `content/guides/money/wrong-paynow-epayment-recovery.mdx` (+2)
- `content/guides/money/financial-planning-year-one.mdx` (+1)
- `content/guides/move/decoding-job-offer-singapore.mdx` (+1)
- `content/guides/move/work-holiday-training-employment-pass.mdx` (+1)
- `content/guides/move/s-pass-singapore.mdx` (+1)
- `src/lib/site.ts` (trailing-partner + year-one topics; pets / first-housing / wrong-PayNow blurbs)

### Explicitly not done

- No ads/monetization expansion.
- No Grok / third-party clone copy.
- Did not edit open A8–A12 guide paths or `intact-immigration`.
- Did not re-own Loop H Student Pass/LTVP/REP AEO bodies beyond leaving those files alone.

### Questions mined (sample)

1. Does SA2 make condo Airbnb legal under three months?
2. Should I pay two months’ deposit for a two-week bridge stay?
3. Can a DP spouse enrol full-time without a Student’s Pass?
4. When principal EP cancels, how fast must LOC work stop?
5. Can my pet fly later while I clear AQC booking?
6. Is “I’ll PayNow you back” a safe recovery?
7. Does FIN PayNow stop wrong transfers?
8. Can EP holders max CPF in year one?
9. Do unvested RSUs count toward the EP floor?
10. Can I switch employers on WHP?
11. Does the S Pass salary floor unlock Dependant’s Pass?

---

---

## Loop A — Move + Money — 2026-09-15 (tick 12)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `cursor/loop-a-move-money-tick12-49cb` → PR to `main` (fresh worktree off `origin/main` @ `b1eea53` post-D9/#79; while [#68](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/68) A8, [#81](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/81) A9, [#85](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/85) A10, and [#92](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/92) A11 stay open — **did not** edit those paths).

### Sources mined

**Reddit**

- r/askSingapore — SG Arrival Card tourist-vs-IPA mix-ups; “I have an EP card so I skip SGAC.”
- r/askSingapore — company PEPS vs MOM issuance medical; starting work while labs pending; colleague carrying ADHD meds.
- r/askSingapore — foreign-licence 12-month clock folklore; PEP unemployment runway; SGWorkPass-as-start-date; IPA-only joint bank accounts; PayNow mobile recycle; cash “CPF equivalent”; sign-on bonus as EP floor.

**Official**

- [ICA — SG Arrival Card](https://www.ica.gov.sg/enter-transit-depart/entering-singapore/sg-arrival-card)
- [MOM — Apply / issue an Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/apply-for-a-pass/)
- [HSA — Bringing personal medication](https://www.hsa.gov.sg/health-products/bringing-personal-medication-into-singapore)
- [SPF / Traffic Police — Convert a foreign driving licence](https://www.police.gov.sg/Advisories/Traffic/Traffic-Matters)
- [MOM — Personalised Employment Pass](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass)
- [CPF Board — For foreigners](https://www.cpf.gov.sg/member) + [IRAS — Employment income / benefits](https://www.iras.gov.sg/taxes/individual-income-tax)

### Gaps vs prior Loop A ticks (Move + Money scope)

Open A8–A11 plus ticks 1–7 on main already own job-change/Student’s Pass/LTVP/notify/remittance/LOG/CPF-exit, EP hub/tax/relocation/COMPASS/COR/appeal/ACRA, salary-occupation/DP/shipping/Tech.Pass/EntrePass/side-income/foreign-dividends, and week-one/STVP/ONE Pass/COL/cards/salary-interest/SRS/RSU/CBNI. Remaining high-intent Move/Money depth **outside** those files: **SGAC issued-pass + wrong-path**, **MOM medical ≠ company physical**, **HSA third-party carriage**, **licence clock does not reset**, **PEP unemployed runway**, **SGWorkPass ≠ start date**, **joint account after EP card**, **PayNow FIN-first**, **cash CPF-equivalent**, **sign-on ≠ EP floor**.

### Shipped this loop

**Deepened guides (FAQPage appends)**

- `content/guides/move/sg-arrival-card-expats.mdx` (+2)
- `content/guides/move/ep-medical-examination-issuance.mdx` (+2)
- `content/guides/move/bringing-medication-singapore-hsa.mdx` (+1)
- `content/guides/move/converting-foreign-driving-licence.mdx` (+1)
- `content/guides/move/personalised-employment-pass-pep.mdx` (+1)
- `content/guides/move/work-pass-issuance-epsc-notification.mdx` (+1)
- `content/guides/money/opening-bank-account-expat.mdx` (+1)
- `content/guides/money/paynow-setup-foreigners-singapore.mdx` (+1)
- `content/guides/money/cpf-and-foreigners.mdx` (+1)
- `content/guides/money/salary-package-decoding.mdx` (+1)
- `src/lib/site.ts` (arriving + Move/Money blurbs for those hubs; no A8–A11 topic labels)

### Explicitly not done

- No ads/monetization expansion.
- No Grok / third-party clone copy.
- Did not edit open A8/A9/A10/A11 guide paths or `intact-immigration`.
- Did not re-own Loop H STVP/housing AEO or Loop D PLOC/ICA trees.

### Questions mined (sample)

1. Do issued EP holders still file SG Arrival Card?
2. What if I submitted SGAC on the tourist path with an IPA?
3. Does a company physical replace the MOM EP medical?
4. Can I start work while the issuance medical is pending?
5. Can a colleague carry my controlled medication?
6. Does converting later reset the 12-month foreign-licence clock?
7. How long can I stay unemployed on PEP?
8. Is SGWorkPass enough to start before the card arrives?
9. Can I open a joint account with my DP spouse before the EP card?
10. Should PayNow go to FIN as soon as the salary account opens?
11. Is cash “CPF equivalent” the same as CPF?
12. Do sign-on bonuses count toward the EP qualifying salary?

---

---

## Loop A — Move + Money — 2026-09-15 (tick 11)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `cursor/loop-a-move-money-tick11-49cb` → PR to `main` (fresh worktree off `origin/main` @ `9253076`; while [#68](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/68) A8, [#81](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/81) A9, and [#85](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/85) A10 stay open — **did not** edit those paths).

### Sources mined

**Reddit**

- r/askSingapore — week-one Singpass/bank circular blockers; hotel-address KYC fails; digital-bank-as-salary myths.
- r/askSingapore — STVP extension loops while waiting for EP; JB “refresh” folklore vs ICA e-service; confusing post-cancel STVP with pre-IPA extensions.
- r/askSingapore — Multiplier/360 bonus interest without payroll codes; credit-card shotgun apps; SRS without CPF; RSU “tax again on sale”; COL posts that omit school fees; CBNI prepaid-card confusion; ONE Pass as COMPASS escape hatch.

**Official**

- [Singpass — Register](https://www.singpass.gov.sg/) + bank KYC norms
- [ICA — Extend short-term visit pass](https://www.ica.gov.sg/enter-transit-depart/entering-singapore/short-term-visit-pass)
- [MOM — Overseas Networks & Expertise Pass](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass)
- [IRAS — SRS](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-reliefs-rebates-and-deductions/tax-reliefs/supplementary-retirement-scheme-(srs)) + equity/employment income pages
- [ICA — CBNI / NP 727](https://www.ica.gov.sg/enter-transit-depart/entering-singapore/cbni)

### Gaps vs prior Loop A ticks (Move + Money scope)

Ticks 1–7 on main + open A8–A10 cover FCF/S Pass/offer/WHP/TG/year-one, job-change/Student’s Pass/LTVP/notify/remittance/LOG/CPF, EP hub/tax/relocation/COMPASS/COR/appeal/ACRA, and salary-occupation/DP-LOC/shipping/Tech.Pass/EntrePass/side-income/foreign-dividends. Remaining high-intent Move/Money depth **outside** those file sets: **week-one Singpass/bank sequencing**, **STVP extension ≠ post-cancel STVP**, **ONE Pass COMPASS myths**, **payroll-code salary-interest**, **secured cards vs shotgun apps**, **SRS without CPF**, **RSU vest vs sale**, **COL school+rent stacking**, **CBNI instrument scope**.

### Shipped this loop

**Deepened guides (FAQPage appends)**

- `content/guides/move/first-week-sim-singpass-bank.mdx` (+2)
- `content/guides/move/short-term-visit-pass-extension.mdx` (+2)
- `content/guides/move/one-pass-singapore.mdx` (+1)
- `content/guides/money/high-interest-salary-accounts-foreigners.mdx` (+1)
- `content/guides/money/credit-cards-foreigners-singapore.mdx` (+1)
- `content/guides/money/srs-investing-as-foreigner.mdx` (+1)
- `content/guides/money/rsu-esop-tax-singapore.mdx` (+1)
- `content/guides/money/cost-of-living-by-household.mdx` (+1)
- `content/guides/money/cbni-cash-declaration-singapore.mdx` (+1)
- `src/lib/site.ts` (ONE Pass + STVP extension topics; week-one / salary-account / cards / COL / SRS / RSU / CBNI blurbs)

### Explicitly not done

- No ads/monetization expansion.
- No Grok / third-party clone copy.
- Did not edit open A8/A9/A10 guide paths or `intact-immigration`.
- Did not re-own Loop H STVP/housing AEO bodies or Loop D PLOC/ICA trees beyond Move STVP extension FAQ depth.

### Questions mined (sample)

1. Can I finish Singpass on day one with IPA and a hotel address?
2. Should I open a digital bank if DBS rejects me in week one?
3. How many STVP extensions can I get while waiting for EP?
4. Is an STVP extension the same as post-EP-cancel visit cover?
5. Does ONE Pass skip COMPASS?
6. Does PayNow count as salary credit for Multiplier/360?
7. Will a secured FD card rebuild credit faster than waiting?
8. Can I open SRS without CPF contributions?
9. Do I pay Singapore tax again when I sell shares years after vest?
10. Should school fees sit in the same COL model as rent?
11. Do prepaid cards count toward the S$20k CBNI threshold?

---

---

## Loop A — Move + Money — 2026-09-15 (tick 10)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `cursor/loop-a-move-money-tick10-49cb` → PR to `main` (fresh worktree off `origin/main` @ `9253076` post-H9/#77; while [#68](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/68) A8 and [#81](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/81) A9 stay open — **did not** edit A8/A9 paths).

### Sources mined

**Reddit**

- r/askSingapore — EP salary cuts / occupation renames vs address-notify confusion; DP LOC renewal local-hire traps; Tech.Pass 2027 sunset “auto-convert” folklore.
- r/askSingapore — household GST relief filed after the container lands; EntrePass family rights assumed equal to EP; EP moonlighting / unpaid “hobby” invoices.
- r/askSingapore — foreign dividends remitted vs Singapore-source salary myths (paired with IRAS foreign-income pages).

**Official**

- [MOM — Notify MOM of EP updates](https://www.mom.gov.sg/passes-and-permits/employment-pass/notify-mom-of-changes) (salary / occupation)
- [MOM — LOC for DP business owners (renew)](https://www.mom.gov.sg/passes-and-permits/loc-for-dependants-pass-business-owners/renew-cancel-or-replace)
- [Singapore Customs — Moving to Singapore / GST relief](https://www.customs.gov.sg/personal-shipment/moving-to-singapore/)
- [EDB — Tech.Pass](https://www.edb.gov.sg/en/how-we-help/incentives-and-schemes/tech-pass.html) (programme sunset messaging)
- [MOM — EntrePass](https://www.mom.gov.sg/passes-and-permits/entrepass) + [IRAS — Foreign income](https://www.iras.gov.sg/taxes/individual-income-tax)

### Gaps vs prior Loop A ticks (Move + Money scope)

Ticks 1–7 on main + open A8 (#68) + open A9 (#81) cover FCF/S Pass/offer/WHP/TG/year-one, job-change/Student’s Pass/LTVP/notify/remittance/LOG/CPF, and EP hub/tax residency/relocation/COMPASS/COR/appeal/ACRA FAQPages. Remaining high-intent Move/Money depth **outside** those file sets: **EP salary/occupation employer notifies** (≠ address/passport), **DP LOC renewal clocks**, **shipping GST DOF timing**, **Tech.Pass→EP/PEP before 2027**, **EntrePass ≠ EP family rights**, **EP unpaid-side-hustle line**, **foreign dividends vs SG-source salary**. Left A8/A9 paths and Next PLOC/LOC ICA deep-owns alone.

### Shipped this loop

**Deepened guides (FAQPage appends)**

- `content/guides/move/ep-salary-occupation-changes.mdx` (+2)
- `content/guides/move/dependant-pass-singapore.mdx` (+2)
- `content/guides/move/shipping-household-singapore.mdx` (+2)
- `content/guides/move/tech-pass-singapore.mdx` (+1)
- `content/guides/move/entrepass-singapore.mdx` (+1)
- `content/guides/move/side-income-freelance-work-pass.mdx` (+1)
- `content/guides/money/foreign-income-and-tax.mdx` (+1)
- `src/lib/site.ts` (salary/occupation, DP/LOC, EntrePass, Tech.Pass sunset, side-income topics; shipping + foreign-income blurbs)

### Explicitly not done

- No ads/monetization expansion (shipping sponsorSlot untouched).
- No Grok / third-party clone copy.
- Did not edit open A8 paths (changing-jobs / student-pass / ltvp / ep-notify / remittances / health-insurance / cpf-withdrawal).
- Did not edit open A9 paths (EP hub / tax residency / relocation / COMPASS / COR / appeal / incorporate).
- Did not edit `intact-immigration` (both A8/A9 touch it).
- Did not re-own Loop H STVP/housing AEO or Loop D PLOC/ICA trees.

### Questions mined (sample)

1. Does a salary cut still need SAT if I stay above the EP floor?
2. Who files EP salary/occupation notifies — me or HR?
3. How often must a DP LOC be renewed?
4. Can LOC work continue while the principal EP is renewing?
5. Can the mover file DOF after the container arrives?
6. Do I get GST relief if goods land before I arrive?
7. Can I convert Tech.Pass to EP/PEP before the 2027 sunset?
8. Does EntrePass give DP rights like an EP?
9. Do unpaid open-source projects need MOM permission on EP?
10. Are foreign dividends taxable for Singapore tax residents?

---

---

## Loop A — Move + Money — 2026-09-15 (tick 9)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `cursor/loop-a-move-money-tick9-49cb` → PR to `main` (fresh worktree off `origin/main` @ A7/#61 merged; while [#68](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/68) A8 is still open — **did not** edit A8 job-change / Student’s Pass / LTVP / notify / remittance / health LOG / CPF withdrawal paths).

### Sources mined

**Reddit**

- r/askSingapore — EP salary floors vs COMPASS / “no EP quota” HR scripts ([EP tightening](https://www.reddit.com/r/askSingapore/comments/1porrdk/is_singapores_ep_quota_tightening_backfiring/); [S Pass on DP](https://www.reddit.com/r/askSingapore/comments/1sxxf18/is_it_very_hard_to_get_an_s_pass_job_while_on_a/); [DP career trap](https://www.reddit.com/r/askSingapore/comments/1ranfcm/spouse_got_a_dream_job_offer_in_singapore_but_the/)).
- r/askSingapore — tax residency timing / July-start folklore and first NOA / GIRO cashflow (peer threads paired with [IRAS residency tests](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/working-out-my-tax-residency)).
- r/askSingapore — COR vs EP card for brokers; ACRA “buy company get EP” packages; appeal vs refile after COMPASS miss.

**Official**

- [MOM — Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass) + [eligibility / COMPASS](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility)
- [MOM — Appeal against a rejected EP](https://www.mom.gov.sg/passes-and-permits/employment-pass/appeal-against-a-rejected-application)
- [IRAS — Working out my tax residency](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/working-out-my-tax-residency)
- [IRAS — Apply for Certificate of Residence](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/apply-for-certificate-of-residence)
- [ACRA — Requirements & eligibility (foreigners)](https://www.acra.gov.sg/register/business/requirements-eligibility/)

### Gaps vs prior Loop A ticks (Move + Money scope)

Ticks 1–7 on main + open A8 (#68) cover FCF/S Pass/offer/WHP/TG/year-one FAQPages plus (in #68) job-change IR21 / Student’s Pass / LTVP / notify / remittance / LOG / CPF exit. Remaining high-intent hubs still thin on FAQPage: **EP hub salary/COMPASS/IPA FAQPage**, **IRAS tax residency myths FAQPage**, **7/30/90 relocation sequencing FAQPage**, plus deepen **COMPASS** (2025 floor vs C1; no-quota), **COR** (≠ SG tax cut; first-months), **appeal vs refile**, **ACRA ≠ EP**. Left A8 paths and Next EP-renewal NOA / between-jobs STVP alone.

### Shipped this loop

**Upgraded guides (FAQPage + depth)**

- `content/guides/move/employment-pass-singapore.mdx` (new FAQPage)
- `content/guides/money/iras-tax-residency-filing.mdx` (new FAQPage)
- `content/guides/move/relocation-checklist-7-30-90.mdx` (new FAQPage)
- `content/guides/move/compass-framework-explained.mdx` (+2 FAQs)
- `content/guides/money/certificate-of-residence-dta.mdx` (+2 FAQs)
- `content/guides/move/ep-rejection-appeal-ipa-issuance.mdx` (+1 FAQ)
- `content/guides/move/incorporate-company-foreigner-singapore.mdx` (+1 FAQ)
- `src/lib/site.ts` (COMPASS / incorporate / relocation guide + COR topics; EP & tax blurbs)
- `content/entities/services/intact-immigration.json` (COMPASS floor-vs-C1 + ACRA≠EP engage paths)

### Explicitly not done

- No ads/monetization expansion.
- No Grok / third-party clone copy.
- Did not edit open A8 paths (changing-jobs / student-pass / ltvp / ep-notify / remittances / health-insurance / cpf-withdrawal).
- Did not re-own Loop H STVP/housing/banking AEO or Loop D EP-renewal NOA.
- Did not edit Family / Belong / Home / Life heavily.

### Questions mined (sample)

1. What is the EP qualifying salary in 2025–2026?
2. Is clearing the salary floor enough for IPA?
3. Does EP have a foreign-worker quota?
4. Can I start work on IPA before card issuance?
5. Is tax residency the same as holding an EP?
6. Should I delay start until after 1 July to avoid tax?
7. Does a ≥1-year pass make me a tax resident automatically?
8. What must happen in week one vs days 30–90?
9. Is C1 the same as the EP qualifying floor?
10. Does COR reduce my Singapore tax bill?
11. Should I appeal or refile after a COMPASS rejection?
12. Does incorporating a Pte Ltd give me an EP?

---

---

---

## Loop A — Move + Money — 2026-09-15 (tick 8)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `cursor/loop-a-move-money-tick8-49cb` → PR to `main` (fresh worktree off `origin/main` after A6/#56 merged; while [#61](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/61) A7 is still open — **did not** edit A7 FCF/S Pass/job-offer/WHP/TG/year-one paths).

### Sources mined

**Reddit**

- r/askSingapore — EP job change / IPA-before-resign / dual applications ([EP process on company change](https://www.reddit.com/r/askSingapore/comments/120shl1/ep_process_on_company_change/); [resignation notice vs EP expiry](https://www.reddit.com/r/askSingapore/comments/1q9stq3/what_happens_if_an_ep_holder_gives_leaving_notice/); [resignation STVP](https://www.reddit.com/r/askSingapore/comments/1ttedbd/ep_question_on_resignation_stvp/)).
- r/askSingapore — IR21 withhold while staying / job-hop cashflow ([HR explain IR21](https://www.reddit.com/r/askSingapore/comments/119uwo8/hr_tax_qn_how_do_you_explain_to_your_employee/); [job loss 24h](https://www.reddit.com/r/askSingapore/comments/187h2wf/in_light_of_losing_my_job_24_hours_ago_i_have_a/)).

**Official**

- [MOM — Change jobs on EP](https://www.mom.gov.sg/faq/employment-pass/what-if-i-want-to-change-jobs-while-i-am-on-an-ep)
- [IRAS — Tax clearance for employees (IR21)](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees)
- [MOM — Notify MOM of EP updates](https://www.mom.gov.sg/passes-and-permits/employment-pass/notify-mom-of-changes) (5-day address/mobile)
- [MOM — Work pass exemption for foreign students](https://www.mom.gov.sg/passes-and-permits/work-pass-exemption-for-foreign-students)
- [ICA — Student’s Pass](https://www.ica.gov.sg/reside/STP/) + [LTVP](https://www.ica.gov.sg/reside/LTVP)
- [CPF Board — Closing account when leaving](https://www.cpf.gov.sg/member/account-services/cpf-asset-management/on-leaving-singapore)

### Gaps vs prior Loop A ticks

Ticks 1–6 on main + open A7 cover EP/COMPASS, remittance body, medical, cancel STVP/DP/PayNow/CPF myths, HISA/CC/COR/LOG body, PEP/Tech.Pass, IPA reassessment, SRS/RSU, COL helper, ACRA, pets, ONE/EntrePass/DP/side-income/CPF/bank/salary FAQPages, and (in #61) FCF/S Pass/offer/WHP/TG/year-one. Remaining high-intent Move/Money gaps matched this mine without colliding #61: **job-change IPA-before-resign + IR21-while-staying FAQPage**, **Student’s Pass work limits / not-an-EP**, **LTVP ≠ DP FAQPage**, **5-day address/passport notify + FWTES**, **remittance PayNow≠FX + SoF freezes FAQPage**, **health LOG / no MediShield FAQPage**, **CPF withdrawal only after status ends**. Left Next between-jobs STVP deep-dives and Loop H AEO bodies alone.

### Shipped this loop

**Upgraded guides (FAQPage)**

- `content/guides/move/changing-jobs-employment-pass.mdx`
- `content/guides/move/student-pass-singapore.mdx`
- `content/guides/move/ltvp-singapore.mdx`
- `content/guides/move/ep-notify-mom-address-passport.mdx`
- `content/guides/money/remittances-singapore.mdx`
- `content/guides/money/health-insurance-expat.mdx`
- `content/guides/money/cpf-withdrawal-leaving-singapore.mdx`
- `src/lib/site.ts` (job-change / Student’s Pass / LTVP / notify + remittance / health LOG / CPF withdrawal topics)
- `content/entities/services/intact-immigration.json` (job-change / Student’s Pass / notify engage paths)

### Explicitly not done

- No ads/monetization expansion (existing remittance/insurance sponsorSlots left untouched).
- No Grok / third-party clone copy.
- Did not edit open A7 paths (FCF / S Pass / job-offer / WHP / TG / year-one).
- Did not re-own Loop H STVP/housing/banking AEO or Loop D NRIC/citizenship trees.
- Did not edit Family / Belong / Home / Life heavily.

### Questions mined (sample)

1. Should I resign before the new EP IPA arrives?
2. Does IR21 still withhold pay if I am only changing Singapore employers?
3. Can two companies file EP for me at once?
4. Can I work full-time on a Student’s Pass?
5. Does graduation auto-grant an EP?
6. Is LTVP the same as Dependant’s Pass?
7. Can EP holders bring parents on LTVP?
8. How fast must I update MOM after moving house?
9. Why does FWTES block my condo address?
10. Is PayNow a cross-border remittance product?
11. Why did my large inward wire freeze for source-of-funds?
12. Do EP holders get MediShield / Medisave?
13. What is a hospital Letter of Guarantee?
14. Can I cash out CPF when my EP ends?

---

---

---

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 19)

Branch: `loop/story-aeo-tick19` → PR to `main`. Owns **story/AEO FAQPages** only. Fresh off `origin/main` (post-#98). Avoided open merge-controller H file sets (#102 H17, #107 H18). Prefer merge order **#102 → #107** before this lands. No ads / monetization; no Grok copy.

### Sources mined

**Reddit / forums**

- r/askSingapore — “MOM asked for my NOA” renewal panic; EP salary vs IRAS mismatch threads.
- r/askSingapore — year-three stay/leave anxiety; school deposit lock-in; PR-as-maybe without NS honesty.
- r/askSingapore — resign-before-IPA pivot horror; industry switch on EP; DP cascade when changing employers.

**Official**

- [MOM — Renew an Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/renew-a-pass) + [IRAS — Notice of Assessment](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/notices-and-forms/notice-of-assessment).
- [ICA — Becoming a PR](https://www.ica.gov.sg/reside/PR) + [IRAS IR21](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees) + [CMPB](https://www.cmpb.gov.sg/).
- [MOM — Change jobs on EP](https://www.mom.gov.sg/faq/employment-pass/what-if-i-want-to-change-jobs-while-i-am-on-an-ep).

### Gaps vs open H + ticks 1–18

Open: #102 (STVP / leaving / PR rejection), #107 (NS / relocation / IR21). Remaining high-intent Next FAQ-free gaps: **EP renewal NOA docs**, **stay vs exit horizon**, **career pivots on a work pass**.

### Shipped this loop

**Upgraded (AEO / light journey polish)**

- `content/guides/next/ep-renewal-noa-documents.mdx` (direct lead + FAQPage)
- `content/guides/next/long-term-stay-vs-exit.mdx` (direct lead + FAQPage)
- `content/guides/next/career-pivots-singapore.mdx` (direct lead + FAQPage)
- `src/lib/site.ts` (Next EP-docs / career blurbs + stay-vs-exit topic)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / competitor clone copy.
- Did not edit #102/#107 guide bodies.

### Questions mined (sample)

1. Why did MOM ask for my NOA during EP renewal?
2. What is the difference between NOA and IR8A?
3. What if my EP salary and IRAS income do not match?
4. Does an NOA request mean my EP renewal will be rejected?
5. Who should reply to MOM’s NOA request — me or HR?
6. When should expats decide whether to stay long-term or leave?
7. What signals suggest staying another cycle?
8. What signals suggest planning an exit?
9. Should PR approval automatically mean we stay forever?
10. What should we write down in a stay/leave review?
11. Can I transfer my Employment Pass to a new employer?
12. When should I resign if I am pivoting to a new employer?
13. Is an industry switch harder on a work pass?
14. What happens to Dependant Passes when I change employers?
15. Does my old EP cancel automatically when the new one is approved?

---

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 18)

Branch: `loop/story-aeo-tick18` → PR to `main`. Owns **story/AEO FAQPages** only. Fresh off `origin/main` (post-#69/#73/#82/#84). Avoided open merge-controller H file sets (#87 H14, #93 H15, #98 H16, #102 H17). Prefer merge order **#87 → #93 → #98 → #102** before this lands. No ads / monetization; no Grok copy.

### Sources mined

**Reddit / forums**

- r/askSingapore — “first-gen PR NS exemption” folklore; citizenship vs dual-passport chats; ex-PR EP horror stories.
- r/askSingapore / r/singaporefi — week-one Singpass failures on IPA alone; 30-day housing drift; day-90 still “temporary.”
- r/askSingapore — IR21 final-pay freeze; one-month IRAS notice; resigning into a thin balance.

**Official**

- [ICA — Singapore Citizenship](https://www.ica.gov.sg/reside/citizenship) + [CMPB](https://www.cmpb.gov.sg/) + [ICA — Becoming a PR](https://www.ica.gov.sg/reside/PR).
- [Singpass](https://www.singpass.gov.sg/) + [MOM work passes](https://www.mom.gov.sg/passes-and-permits) + [ICA](https://www.ica.gov.sg/).
- [IRAS — Tax clearance (IR21)](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees).

### Gaps vs open H + ticks 1–17

Open: #87 (shopping / arts / cycling), #93 (pets / EP / job changes), #98 (after-PR / EP renewal / PR strategy), #102 (STVP / leaving / PR rejection). Remaining high-intent FAQ-free gaps: **citizenship + NS modelling**, **7/30/90 relocation sequencing**, **IR21 tax clearance**.

### Shipped this loop

**Upgraded (AEO / light journey polish)**

- `content/guides/next/citizenship-ns-implications.mdx` (direct lead + FAQPage)
- `content/guides/move/relocation-checklist-7-30-90.mdx` (direct lead + FAQPage)
- `content/guides/next/tax-clearance-when-leaving.mdx` (direct lead + FAQPage)
- `src/lib/site.ts` (Move relocation topic href/blurb; Next citizenship blurb + IR21 topic)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / competitor clone copy.
- Did not edit #87/#93/#98/#102 guide bodies.

### Questions mined (sample)

1. Does Singapore PR automatically mean my son must serve National Service?
2. Should we accept PR if we are unsure about NS for our sons?
3. Is Singapore citizenship dual-friendly?
4. Can an ex-PR who renounced to avoid NS get an Employment Pass later?
5. Where do I verify NS rules for my family?
6. What should I finish in the first 7 days after landing?
7. What belongs in the first 30 days of a Singapore move?
8. What should be stable by day 90?
9. Do I need Singpass in week one?
10. Is this checklist a substitute for employer onboarding?
11. What is IR21 tax clearance when leaving Singapore?
12. How much notice must my employer give IRAS before I leave?
13. Why is my final salary frozen when I resign?
14. Do Singapore citizens need IR21 tax clearance?
15. What should I do before my last day for tax clearance?

---

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 17)

Branch: `loop/story-aeo-tick17` → PR to `main`. Owns **story/AEO FAQPages** only. Fresh off `origin/main` (post-#69/#73). Avoided open merge-controller H file sets (#82 H12, #84 H13, #87 H14, #93 H15, #98 H16). Prefer merge order **#82 → #84 → #87 → #93 → #98** before this lands. No ads / monetization; no Grok copy.

### Sources mined

**Reddit / forums**

- r/askSingapore — “only 30 days after layoff?” STVP folklore; DP cascade panic; JB reset myths.
- r/askSingapore — IR21 final-pay freeze; leave-on-notice; 30 vs 90-day STVP asks when exiting.
- r/askSingapore — PR pending forever; rejection with no reasons; when to appeal vs reapply.

**Official**

- [MOM — Cancel an Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass) + [change jobs on EP FAQ](https://www.mom.gov.sg/faq/employment-pass/what-if-i-want-to-change-jobs-while-i-am-on-an-ep).
- [IRAS — Tax clearance (IR21)](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees).
- [ICA — Appeal SC/PR/LTVP](https://www.ica.gov.sg/reside/reside-appeals) + [Becoming a PR](https://www.ica.gov.sg/reside/PR).

### Gaps vs open H + ticks 1–16

Open: #82 (hawker / annual admin / weekend getaways), #84 (dating / climate wear / nightlife), #87 (shopping / arts / cycling), #93 (pets / EP / job changes), #98 (after-PR / EP renewal / PR strategy). Remaining high-intent Next FAQ-free gaps: **between-jobs STVP**, **leaving playbook**, **PR rejection / reapply**.

### Shipped this loop

**Upgraded (AEO / light journey polish)**

- `content/guides/next/between-jobs-stvp-singapore.mdx` (direct lead + FAQPage)
- `content/guides/next/leaving-singapore-playbook.mdx` (direct lead + FAQPage)
- `content/guides/next/pr-rejection-reapply.mdx` (direct lead + FAQPage)
- `src/lib/site.ts` (Next between-jobs + PR-rejection topics; leaving blurb)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / competitor clone copy.
- Did not edit #82/#84/#87/#93/#98 guide bodies.

### Questions mined (sample)

1. How long can I stay after my Employment Pass is cancelled?
2. Can I keep working on an STVP after EP cancellation?
3. What happens to Dependant Passes when my EP is cancelled?
4. Is it safe to leave Singapore and return on STVP?
5. Is between-jobs STVP the same as a tourist visit-pass extension?
6. What should I sequence first when leaving Singapore on an EP?
7. Why does IR21 freeze my final salary?
8. How long an STVP should I ask for when exiting?
9. Should I burn annual leave during notice?
10. Do PRs follow the same exit playbook as EP holders?
11. Why was my Singapore PR application rejected?
12. Can I appeal a PR rejection?
13. When should I reapply after a PR rejection?
14. Is a long pending PR wait a good sign?
15. How do I report a job change while PR is pending?

---

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 16)

Branch: `loop/story-aeo-tick16` → PR to `main`. Owns **story/AEO FAQPages** only. Fresh off `origin/main`. Avoided open merge-controller H file sets (#69 H10, #73 H11, #82 H12, #84 H13, #87 H14, #93 H15). Prefer merge order **#69 → #73 → #82 → #84 → #87 → #93** before this lands. No ads / monetization; no Grok copy.

### Sources mined

**Reddit / forums**

- r/askSingapore — “I just got PR — what now?” FIN→NRIC Singpass bounce; CPF take-home shock; first REP stamps.
- r/askSingapore — EP renewal age-band salary panic; SAT vs last year’s approval; S Pass downgrade forks.
- r/singapore / LinkedIn folklore — fake PR points calculators; “wait 2 years then apply”; agency guarantees.

**Official**

- [ICA — Becoming a Permanent Resident](https://www.ica.gov.sg/reside/PR) + [CPF contributions](https://www.cpf.gov.sg/employer/employer-obligations/how-much-cpf-contributions-to-pay) + [MOH MediShield Life](https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/medishield-life/medishield-life/).
- [MOM — Renew an Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/renew-a-pass) + [eligibility / COMPASS](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility) + [SAT](https://www.mom.gov.sg/eservices/services/employment-s-pass-self-assessment-tool).
- [CMPB — National Service](https://www.cmpb.gov.sg/).

### Gaps vs open H + ticks 1–15

Open: #69 (Student Pass / LTVP / REP), #73 (apps / COE vs Grab / REP transfer), #82 (hawker / annual admin / weekend getaways), #84 (dating / climate wear / nightlife), #87 (shopping / arts / cycling), #93 (pets / EP / job changes). Remaining high-intent Next FAQ-free gaps: **after-PR day-one admin**, **EP renewal strategy**, **PR application discretion**.

### Shipped this loop

**Upgraded (AEO / light journey polish)**

- `content/guides/next/after-getting-pr-checklist.mdx` (direct lead + FAQPage)
- `content/guides/next/ep-renewal-strategy.mdx` (direct lead + FAQPage)
- `content/guides/next/pr-application-strategy.mdx` (direct lead + FAQPage)
- `src/lib/site.ts` (Next EP-renewal / PR-strategy / after-PR blurbs)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / competitor clone copy.
- Did not edit #69/#73/#82/#84/#87/#93 guide bodies.

### Questions mined (sample)

1. Am I a PR as soon as ICA emails in-principle approval?
2. What should I do in the first week after the blue NRIC?
3. Does take-home pay drop after PR?
4. Do I still need private health insurance after PR?
5. Can I leave Singapore immediately after getting PR?
6. When should HR start my Employment Pass renewal?
7. Does last year’s EP approval guarantee this year’s renewal?
8. Do bonuses count toward the EP renewal salary floor?
9. Do renewals still need COMPASS points?
10. What if my renewal looks weak?
11. Is there a points calculator that guarantees Singapore PR?
12. How long does a PR application take?
13. Do I need a minimum salary to apply for PR on an EP?
14. Should I apply every six months until I get PR?
15. What should families model before celebrating PR approval?

---

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 15)

Branch: `loop/story-aeo-tick15` → PR to `main`. Owns **story/AEO FAQPages** only. Fresh off `origin/main` (post-#78 tip). Avoided open merge-controller H file sets (#69 H10, #73 H11, #82 H12, #84 H13, #87 H14). Prefer merge order **#69 → #73 → #82 → #84 → #87** before this lands. No ads / monetization; no Grok copy.

### Sources mined

**Reddit / forums**

- r/askSingapore — HDB cat framework vs landlord veto; condo MCST bans despite PALS; GrabPet scarcity.
- r/askSingapore / r/singapore — EP salary floor vs COMPASS myths; age-band thresholds; IPA vs issued pass.
- r/askSingapore — resign-before-IPA horror stories; IR21 while staying; FIN continuity across EP issuances.

**Official**

- [HDB — Keeping pets](https://www.hdb.gov.sg/community/caring-for-your-neighbours/being-a-good-neighbour/tips-on-neighbourliness/keeping-pets) + [AVS ownership limits / PALS](https://avs.nparks.gov.sg/pets/licensing-a-pet/information-on-dog-and-cat-licences/limits-of-ownership/).
- [MOM — Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass) + [eligibility / COMPASS](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility).
- [MOM — Change jobs while on an EP](https://www.mom.gov.sg/faq/employment-pass/what-if-i-want-to-change-jobs-while-i-am-on-an-ep) + [IRAS tax clearance](https://www.iras.gov.sg/taxes/individual-income-tax/employees/scenario-based-faqs-for-working-in-singapore-and-abroad/tax-clearance-for-non-singapore-citizen-employees).

### Gaps vs open H + ticks 1–14

Open: #69 (Student Pass / LTVP / REP), #73 (apps / COE vs Grab / REP transfer), #82 (hawker / annual admin / weekend getaways), #84 (dating / climate wear / nightlife), #87 (shopping / arts / cycling). Remaining high-intent FAQ-free gaps: **pets daily life (last Life FAQ-free)**, **EP eligibility/COMPASS AEO**, **changing jobs on EP**.

### Shipped this loop

**Upgraded (AEO / light journey polish)**

- `content/guides/life/pets-daily-life-singapore.mdx` (direct lead + FAQPage)
- `content/guides/move/employment-pass-singapore.mdx` (direct lead + FAQPage)
- `content/guides/move/changing-jobs-employment-pass.mdx` (direct lead + FAQPage)
- `src/lib/site.ts` (Life pets topic; Move EP blurb + changing-jobs topic)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / competitor clone copy.
- Did not edit #69/#73/#82/#84/#87 guide bodies.

### Questions mined (sample)

1. Can I keep a cat in an HDB flat as an expat tenant?
2. Does a PALS pet licence mean my condo must allow the animal?
3. How many pets can a household keep?
4. Can I take my dog on the MRT or bus?
5. What licence steps matter after import?
6. What salary do I need for an Employment Pass?
7. Does COMPASS replace the salary floor?
8. Who applies for the EP — me or my employer?
9. What happens after IPA approval?
10. Can I keep working if I leave my EP employer?
11. Can I transfer my Employment Pass to a new company?
12. When should I resign from my current EP job?
13. Do I need tax clearance (IR21) if I stay in Singapore?
14. Does my FIN change when I change EP employers?
15. What if the new IPA fails after I already resigned?

---

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 14)

Branch: `loop/story-aeo-tick14` → PR to `main`. Owns **story/AEO FAQPages** only. Fresh off `origin/main` (post-#77). Avoided open merge-controller file sets (#69 H10, #73 H11, #82 H12, #84 H13). Prefer merge order **#69 → #73 → #82 → #84** before this lands. No ads / monetization; no Grok copy.

### Sources mined

**Reddit / forums**

- r/askSingapore — cheapest supermarket / RedMart vs FairPrice / online platform fees; HDB vs condo bulky disposal; void-deck dump complaints.
- r/askSingapore — foreigner NLB membership worth it?; walk-in library work spots; museum ticket sticker shock for EP holders.
- r/askSingapore — e-bike legality / grey imports; helmet on roads; PMD footpath bans.

**Official**

- [NEA — e-waste recycling](https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/e-waste-management/where-to-recycle-e-waste) + [ALBA](https://alba-ewaste.sg/) + [OneService](https://www.oneservice.gov.sg/).
- [NLB — Membership types](https://www.nlb.gov.sg/main/services/library-membership/types-of-membership) + [NHB free admission](https://www.nhb.gov.sg/free-admission) + [Esplanade](https://www.esplanade.com/).
- [LTA — Active Mobility rules](https://www.lta.gov.sg/content/ltagov/en/getting_around/active_mobility/rules_and_public_education/rules_and_code_of_conduct.html) + [OneMotoring PAB](https://onemotoring.lta.gov.sg/content/onemotoring/home/buying/vehicle-types-and-registrations/active-mobility-devices/PAB.html).

### Gaps vs open H + ticks 1–13

Open: #69 (Student Pass / LTVP / REP), #73 (apps / COE vs Grab / REP transfer), #82 (hawker / annual admin / weekend getaways), #84 (dating / climate wear / nightlife). Remaining FAQ-free Life gaps: **grocery + e-waste literacy**, **NLB/museum foreigner access**, **cycling / PAB Active Mobility**.

### Shipped this loop

**Upgraded (AEO / light journey polish)**

- `content/guides/life/shopping-essentials-singapore.mdx` (direct lead + FAQPage)
- `content/guides/life/arts-culture-singapore.mdx` (direct lead + FAQPage)
- `content/guides/life/cycling-active-mobility-singapore.mdx` (direct lead + FAQPage)
- `src/lib/site.ts` (Life shopping blurb + arts + cycling topics)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / competitor clone copy.
- Did not edit #69/#73/#82/#84 guide bodies.

### Questions mined (sample)

1. Which supermarket is cheapest in Singapore for expats?
2. Is RedMart safe for groceries, or is it random Lazada sellers?
3. Should I ship appliances from home?
4. How do I dispose of e-waste and bulky items legally?
5. What should I buy in week one?
6. Can foreigners use Singapore’s public libraries without membership?
7. Is NLB membership worth it for expats?
8. Are museums free for Employment Pass holders?
9. How do I build a culture habit beyond malls?
10. Which libraries are good walk-in work spots?
11. Do I need a licence to cycle in Singapore?
12. Are e-bikes / PABs legal for newcomers?
13. Can I ride a PAB on footpaths?
14. Can I ride a tourist e-scooter on public paths?
15. Is cycling a realistic expat commute?

---

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 13)

Branch: `loop/story-aeo-tick13` → PR to `main`. Owns **story/AEO FAQPages** only. Fresh off `origin/main` (post-#77 H9 merge). Avoided open merge-controller file sets (#69 H10, #73 H11, #82 H12). Prefer merge order **#69 → #73 → #82** before this lands. No ads / monetization; no Grok copy.

### Sources mined

**Reddit / forums**

- r/askSingapore — Bumble BFF vs dating-app “friends”; transient-city honesty; workplace dating caution.
- r/askSingapore — office AC freeze after MRT sweat; fabric fails in humidity; club dress / ID threads.
- r/askSingapore — “where do expats hang out?”; club age/dress doors; vape illegality adjacency.

**Official**

- [Meetup](https://www.meetup.com/) + [giving.sg](https://www.giving.sg/).
- [NEA — Weather](https://www.nea.gov.sg/weather) + [Sultan Mosque — Visitors](https://www.sultanmosque.sg/visitors-info/).
- [VisitSingapore — Nightlife](https://www.visitsingapore.com/en/editorials/nightlife-in-singapore/) + [SPF](https://www.police.gov.sg/).

### Gaps vs open H + ticks 1–12

Open: #69 (Student Pass / LTVP / REP), #73 (apps / COE vs Grab / REP transfer), #82 (hawker / annual admin / weekend getaways). Remaining FAQ-free Life social gaps: **dating vs friends channels**, **climate wardrobe / AC swing**, **nightlife dress + ID**.

### Shipped this loop

**Upgraded (AEO / light journey polish)**

- `content/guides/life/dating-social-singapore.mdx` (direct lead + FAQPage)
- `content/guides/life/what-to-wear-singapore-climate.mdx` (direct lead + FAQPage)
- `content/guides/life/nightlife-social-scene.mdx` (direct lead + FAQPage)
- `src/lib/site.ts` (Life shopping label split + climate / nightlife / dating topics)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / competitor clone copy.
- Did not edit #69/#73/#82 guide bodies (student-pass, ltvp, re-entry-permit, apps, car-ownership, transfer-rep, hawker, weekend-getaways, renewing-life-admin).

### Questions mined (sample)

1. Should I use Bumble BFF or Tinder to make friends in Singapore?
2. What actually works for meeting people beyond the office?
3. Is Singapore dating culture serious or casual?
4. Any safety tips for first dates as a newcomer?
5. Should I date colleagues in Singapore?
6. Why am I freezing in the office after melting on the MRT?
7. What fabrics work in Singapore humidity?
8. How do locals handle office sweat on the commute?
9. What should I wear to mosques and temples as a visitor?
10. Can I wear slippers or gym shorts to clubs?
11. What should I wear to clubs in Singapore?
12. What ID do clubs accept if I do not want to carry my passport?
13. Where do expats hang out at night?
14. Are men under 21 allowed into big clubs?
15. Can I bring a vape into Singapore nightlife?

---

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 12)

Branch: `loop/story-aeo-tick12` → PR to `main`. Owns **story/AEO FAQPages** only. Fresh off `origin/main`. Avoided open merge-controller file sets (#77 H9 restore, #69 H10, #73 H11). Prefer merge order **#77 → #69 → #73** before this lands. No ads / monetization; no Grok copy.

### Sources mined

**Reddit / forums**

- r/askSingapore — hawker cash vs PayNow for foreigners; tray-return shame; tourist-stall rotation fatigue.
- r/askSingapore — “what renews every year?” passport / EP / REP / school fee panic threads.
- r/askSingapore — Causeway Friday/Sunday hell; car-share cross-border bans; STVP “Batam reset” folklore.

**Official**

- [NEA — Hawker centres](https://www.nea.gov.sg/our-services/hawker-management/about-hawker-centres) + [ABS — PayNow](https://www.abs.org.sg/e-payments/pay-now).
- [MOM — Work passes](https://www.mom.gov.sg/passes-and-permits) + [ICA — NRIC re-registration](https://www.ica.gov.sg/documents/ic/re-registration) + [ICA — eCOA address](https://www.ica.gov.sg/documents/ic/update_residential_address) + [ICA — REP](https://www.ica.gov.sg/reside/PR/apply-REP) + [MFA — Overseas missions](https://www.mfa.gov.sg/Overseas-Missions).
- [ICA — Travellers](https://www.ica.gov.sg/enter-depart) + [LTA](https://www.lta.gov.sg/).

### Gaps vs open H + ticks 1–11

Open: #77 (EP notify / Lemon Law / lost NRIC), #69 (Student Pass / LTVP / REP), #73 (apps / COE vs Grab / REP transfer). Remaining FAQ-free Life/Next living gaps: **hawker payment literacy**, **annual life-admin checklist AEO**, **weekend getaway checkpoint physics**.

### Shipped this loop

**Upgraded (AEO / light journey polish)**

- `content/guides/life/hawker-food-guide.mdx` (direct lead + FAQPage)
- `content/guides/next/renewing-life-admin-annually.mdx` (direct lead + FAQPage)
- `content/guides/life/weekend-getaways-from-singapore.mdx` (direct lead + FAQPage)
- `src/lib/site.ts` (Life hawker blurb + weekend-getaways topic; Next annual-life-admin topic)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / competitor clone copy.
- Did not edit #77/#69/#73 guide bodies (case-lemon-law, ep-notify, lost-nric, student-pass, ltvp, re-entry-permit, apps, car-ownership, transfer-rep).

### Questions mined (sample)

1. Can foreigners pay hawkers with card or Apple Pay?
2. What notes should I bring to a hawker centre?
3. Do I have to return my tray?
4. Is WeChat Pay useful at Singapore hawkers?
5. How do I stop eating the same tourist stalls every week?
6. What should I put on an annual Singapore life-admin calendar?
7. Is my Singapore pass or NRIC enough to travel on?
8. When do PRs re-register their NRIC?
9. I got a new foreign passport — what else breaks?
10. How soon must I update my residential address on NRIC?
11. What documents do I need for a JB weekend?
12. When should I leave Singapore for Johor to avoid Causeway hell?
13. Can I use Singapore car-share for a JB trip?
14. Is living in JB and commuting to Singapore a smart rent hack?
15. Can I do a quick Batam reset on an STVP after EP cancellation?

---

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 11)

Branch: `loop/story-aeo-tick11` → PR to `main`. Owns **answer-engine shape** after tick 8 on main while ticks 9–10 stay open. Did **not** expand ads/monetization; avoided open tick-9 files (EP notify / Lemon Law / lost NRIC) and tick-10 files (Student Pass / LTVP / REP).

### Sources mined

**Reddit / forums**

- r/askSingapore — “which apps day one,” PayNow to recycled prepaid numbers, ScamShield vs bank freezes.
- r/askSingapore — Grab bill vs COE sticker shock; GetGo for JB weekends; foreign-licence conversion clock.
- r/askSingapore — new passport then Changi PR clearance fail; REP transfer vs renewal mix-ups.

**Official**

- [Singpass](https://www.singpass.gov.sg/) + [ScamShield](https://www.scamshield.gov.sg/) + [ABS PayNow](https://www.abs.org.sg/e-payments/pay-now) + [NEA haze](https://www.nea.gov.sg/our-services/pollution-control/air-pollution/haze).
- [LTA OneMotoring — COE](https://onemotoring.lta.gov.sg/content/onemotoring/home/buying/upfront-vehicle-costs/certificate-of-entitlement--coe-.html) + [vehicle tax structure](https://onemotoring.lta.gov.sg/content/onemotoring/home/buying/upfront-vehicle-costs/tax-structure.html) + [SPF driving licence](https://www.police.gov.sg/Knowledge-Hub/Traffic/Traffic-Matters/Singapore-Driving-Licence).
- [ICA — Transfer of Re-Entry Permit / Update Travel Document](https://www.ica.gov.sg/reside/PR/transfer-REP).

### Gaps vs ticks 1–10

Ticks 1–8 on main cover landing/fail AEO through haze / motor claims / DP. Open tick 9 covers EP notify / Lemon Law / lost NRIC; open tick 10 covers Student Pass / LTVP / REP. Remaining high-intent **week-one ops / mobility / PR travel-doc** gaps without FAQPage: **apps stack**, **COE vs Grab/GetGo**, **REP transfer on new passport**.

### Shipped this loop

**Upgraded (AEO only)**

- `content/guides/life/apps-that-matter-singapore.mdx` (direct lead + FAQPage)
- `content/guides/life/car-ownership-vs-sharing-singapore.mdx` (direct lead + FAQPage)
- `content/guides/next/transfer-rep-new-passport.mdx` (direct lead + FAQPage)
- `src/lib/site.ts` (Life apps blurb + car topic; Next REP-transfer topic)

### Explicitly not done

- No ads / monetization (skipped health-insurance `sponsorSlot`).
- No Grok / competitor clone copy.
- Did not edit open tick-9/10 file sets.
- Did not rewrite Loop A side-income or Loop D citizenship trees.

### Questions mined (sample)

1. What is the first app I should set up after landing?
2. Should PayNow link to FIN or my new mobile number?
3. Do I need Grab and every bank app in week one?
4. Which haze app should I trust?
5. Is ScamShield optional for EP holders?
6. Is a car cheaper than S$1,000/month of Grab?
7. What is a COE and how long does it last?
8. Can I keep driving on a foreign licence?
9. When does GetGo beat owning?
10. Does REP transfer automatically when I renew my passport?
11. Is transferring REP the same as renewing REP?
12. What if I fly back on a new passport without transferring REP?

---

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 10)

Branch: `loop/story-aeo-tick10` → PR to `main`. Owns **answer-engine shape** after tick 7 on main while ticks 8–9 stay open. Did **not** expand ads/monetization; avoided open tick-8 files (haze / motor claims / DP / day-90) and tick-9 files (EP notify / Lemon Law / lost NRIC).

### Sources mined

**Reddit / forums**

- r/askSingapore — Student’s Pass vs DP study exemption; part-time work hour myths; “offer letter = can start class.”
- r/askSingapore — parent LTVP S$12k salary folklore; LTVP confused with Dependant’s Pass; PLOC work myths.
- r/askSingapore — forgot REP / almost lost PR at Changi; Dec 2025 REP process panic; passport change without REP transfer.

**Official**

- [ICA — Student’s Pass](https://www.ica.gov.sg/reside/STP/) + [MOM — work-pass exemption for foreign students](https://www.mom.gov.sg/passes-and-permits/work-pass-exemption-for-foreign-students).
- [MOM — LTVP eligibility](https://www.mom.gov.sg/passes-and-permits/long-term-visit-pass/eligibility) + [ICA — LTVP](https://www.ica.gov.sg/reside/LTVP) + [PLOC](https://www.mom.gov.sg/passes-and-permits/pre-approved-letter-of-consent/eligibility).
- [ICA — Re-Entry Permit](https://www.ica.gov.sg/reside/PR/apply-REP) + [Dec 2025 REP FAQ PDF](https://www.ica.gov.sg/docs/default-source/ica/files/faqs_revisions-to-permanent-resident-re-entry-permit-application-process-from-1-december-2025.pdf).

### Gaps vs ticks 1–9

Ticks 1–7 on main cover landing/fail AEO through MOM cancel STVP + housing/bank hubs. Open tick 8 covers haze / motor / DP; open tick 9 covers EP notify / Lemon Law / lost NRIC. Remaining high-intent **study / family-visit / PR-travel** gaps without FAQPage: **Student’s Pass**, **LTVP (≠ DP)**, **Re-Entry Permit / Dec 2025 rules**.

### Shipped this loop

**Upgraded (AEO only)**

- `content/guides/move/student-pass-singapore.mdx` (direct lead + FAQPage)
- `content/guides/move/ltvp-singapore.mdx` (direct lead + FAQPage)
- `content/guides/next/re-entry-permit-pr-overseas.mdx` (direct lead + FAQPage)
- `src/lib/site.ts` (Move Student’s Pass + LTVP topics; Next REP topic)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / competitor clone copy.
- Did not edit open tick-8/9 file sets.
- Did not rewrite Loop D spouse-LTVP/PMLA bodies or Loop A EP eligibility trees beyond FAQPage shape.

### Questions mined (sample)

1. Do I need a Student’s Pass if I already hold a Dependant’s Pass?
2. Can an offer letter alone let me start classes?
3. Can Student’s Pass holders freelance freely?
4. Does graduation convert into an Employment Pass?
5. Is LTVP the same as a Dependant’s Pass?
6. What salary do I need to bring parents on MOM LTVP?
7. Can every LTVP holder work via PLOC?
8. Does LTVP include subsidised public healthcare?
9. Do PRs need a Re-Entry Permit every time they leave Singapore?
10. What changed for REP renewals from 1 December 2025?
11. If my REP expires overseas, can ICA reinstate PR?
12. Does renewing my passport transfer the REP automatically?

---

---

## Loop B — Family + Belong (tick 10) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick9-8971` → PR to `main` (branch name kept; tick number is **10** after #51 landed on main as tick 9). Owns **Family** + **Belong** guides plus schools/clubs/services entity depth only. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next. Skipped ADHD / Mandarin / hiking bodies already shipped via #51 (tick 9 on main) and babysitter / uni counselling / book clubs via #52 (tick 8).

### Sources mined

**Reddit / forums**

- r/askSingapore — kids braces / Invisalign cash ([ortho recommendations](https://www.reddit.com/r/askSingapore/comments/1p96zty/can_anyone_recommend_me_a_good_ortho/), [Invisalign advice](https://www.reddit.com/r/askSingapore/comments/1texrw9/invisalign_recommendationsadvice/)).
- r/askSingapore — teen / school counselling paths ([school counselling](https://www.reddit.com/r/askSingapore/comments/10wqtp2/school_counseling/), [help as a minor](https://www.reddit.com/r/askSingapore/comments/xyji0v/seeking_help_for_mental_health_as_a_minor/), [eating disorder help](https://www.reddit.com/r/askSingapore/comments/11xlgsg/how_to_get_eating_disorder_help_in_sg/)).
- r/askSingapore — parenting communities / playgroups ([where parents hang out](https://www.reddit.com/r/askSingapore/comments/16bleg3/parents_where_do_you_hang_out_online_and_offline/), [parenting groups](https://www.reddit.com/r/askSingapore/comments/12bj0q4/parenting_subsgroups_for_young_and_new/), [playgroup tiers](https://www.reddit.com/r/askSingapore/comments/14q1w8z/thoughts_on_playgroups_for_kids_do_you_feel/)).

**Official**

- [NDCS Orthodontics](https://www.ndcs.com.sg/patient-care/specialties-and-services/orthodontics) + [MOH dental fees](https://www.moh.gov.sg/managing-expenses/bills-and-fee-benchmarks/guide-to-dental-fees).
- [CHAT Get Help](https://www.imh.com.sg/CHAT/Get-Help/Pages/default.aspx) (ages 16–30) + [mindline 1771](https://www.mindline.sg/) + [IMH Child Guidance Clinic](https://www.imh.com.sg/Clinical-Services/Outpatient-Clinics/Pages/Child-Guidance-Clinic.aspx).
- [ECDA](https://www.ecda.gov.sg/) + [ANZA](https://www.anza.org.sg/) / [AWA](https://www.awasingapore.org/).

### Gaps vs prior Loop B ticks

Ticks 1–9 covered schools/SEN/camps/clubs, newborn/leave/vaccines, IVF/maternity/divorce, Reclub/parkrun, Mandarin-thin→dedicated, confinement, indoor hobbies, allergy/EpiPen, IB/A-Level, music, babysitter, uni counselling, book clubs, ADHD meds, hiking. Remaining heat: **kids braces/ortho cash + transfer**, **teen mental health / IS counsellor limits / CHAT**, **parenting-community rails beyond ANZA/AWA**.

### Shipped this loop

**New guides**

- `content/guides/family/kids-braces-orthodontics-singapore.mdx`
- `content/guides/family/teen-mental-health-school-counselling-singapore.mdx`
- `content/guides/belong/parenting-communities-playgroups-singapore.mdx`

**Upgraded guides**

- `content/guides/family/dental-care-foreigners-singapore.mdx`
- `content/guides/family/mental-health-resources.mdx`
- `content/guides/family/preschool-childcare-singapore.mdx`
- `content/guides/family/university-counselling-international-schools-singapore.mdx`
- `content/guides/belong/anza-awa-associations.mdx`
- `content/guides/belong/find-my-people-singapore.mdx`
- `src/lib/site.ts` (Family + Belong topic rails)

**Entity depth**

- `content/entities/services/dental-care.json`
- `content/entities/services/mental-health-counselling.json`
- `content/entities/clubs/awa.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not rewrite ADHD / Mandarin / hiking guides already on main from #51.
- Did not edit Move / Money / Home / Life / Next trees.

### Questions mined (sample)

1. Will my employer plan cover Invisalign Teen for an EP child?
2. Is NDCS orthodontics cheaper for foreigners, or still full fee?
3. Can we transfer braces mid-course when we leave Singapore?
4. Is the IS counsellor the same as a clinical psychologist?
5. Will the school tell parents if a teen sees the counsellor?
6. What is CHAT actually for if it is not a crisis line?
7. Where do new expat parents meet people besides Facebook megagroups?
8. Are paid playgroups worth it vs parent-led rotations?
9. How do dual-career households keep one belonging rail without mummy-brunch overload?

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 9)

Branch: `loop/next-polish-tick9` → PR to `main`. Owns **Next** guides plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home / Life body trees. No ads / Grok. Tick 8 (#60) still open elsewhere — this branch is off current `main` only.

### Sources mined

**Reddit / forums**

- r/askSingapore — EP cancel / STVP vs spouse LTVP after job loss ([LTVP after losing job](https://www.reddit.com/r/askSingapore/comments/1q66ra7/getting_an_ltvp_after_losing_job/); [EP resignation STVP](https://www.reddit.com/r/askSingapore/comments/1ttedbd/ep_question_on_resignation_stvp/)).
- Dual-passport / under-21 clearance + status-letter folklore adjacent to ORAL threads (mission/school “prove citizenship” asks; foreign-passport checkpoint confusion).

**Official**

- [MOM — Cancel an Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass) (STVP up to 90 days)
- [ICA — Spouse of a Singapore Citizen (LTVP)](https://www.ica.gov.sg/reside/LTVP/apply/spouse-of-a-singapore-citizen-(sc)) / [Spouse of a Singapore PR](https://www.ica.gov.sg/reside/LTVP/apply/spouse-of-a-singapore-permanent-resident-(pr))
- [ICA — Right of Entry (ROE)](https://www.ica.gov.sg/reside/citizenship/roe) (under-21 SC with foreign passport; free; ~3 working days; transfer on new passport)
- [ICA — Confirmation of Singapore Citizenship Status](https://www.ica.gov.sg/reside/citizenship/confirmation) (S$20 digital letter; no signature/stamp/QR; ~3 working days)
- [ICA — Oath-taking for Minors (ORAL)](https://www.ica.gov.sg/reside/citizenship/minor-oath-taking) (adjacency only)

### Gaps vs prior ticks

Tick 7 shipped spouse LTVP/PMLA, PLOC/LOC, student PR. Tick 8 (open) covers NRIC re-reg / eCOA / SCJ. Remaining high-intent **Next** gaps matched this mine: **EP job-loss → SC/PR spouse LTVP bridge** (distinct from generic STVP between-jobs and from spouse LTVP mechanics), **Right of Entry for under-21 dual-passport SCs** (ORAL adjacency; not dual-citizenship forever), **ICA citizenship confirmation letter** (S$20 digital status PDF for schools/missions). About + editorial research language updated.

### Shipped

**New:** `ep-job-loss-spouse-ltvp-bridge-singapore.mdx`, `right-of-entry-roe-under-21-singapore.mdx`, `confirmation-singapore-citizenship-status.mdx`

**Upgraded:** `between-jobs-stvp-singapore.mdx`, `spouse-ltvp-pmla-singapore.mdx`, `ploc-loc-ica-ltvp-singapore.mdx`, `oral-dual-citizenship-age-21.mdx`, `singapore-citizenship-application.mdx`, `renewing-life-admin-annually.mdx`; `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No Move/Money/Family/Belong/Home/Life body edits. Did not land tick 8 paths (still open on #60).

### Questions mined

1. After EP cancel, if my spouse is Singaporean, do I still only get a 30-day STVP?
2. Should HR request 90-day STVP while we file spouse LTVP?
3. Can we file spouse LTVP while I am still serving EP notice?
4. Does PMLA help if we are already married and I just lost my EP?
5. Is PLOC automatic when spouse LTVP is approved after a layoff?
6. What is Right of Entry for an under-21 SC who also holds a foreign passport?
7. Is ROE free, and must it be transferred when the foreign passport renews?
8. Does ROE mean my child can keep dual citizenship past 21?
9. What is ICA’s Confirmation of Singapore Citizenship Status letter?
10. Does that letter come with a signature, stamp, or QR code?
11. Who can apply as proxy for a child under 16?
12. When should a family use confirmation letter vs ROE vs ORAL?

---

---

## Loop E — Journeys, checklists, calendar, tools — 2026-09-15 (tick 4)

Branch: `loop/e-journeys-tools-tick4` → PR to `main` (fresh worktree off `origin/main` while [#53](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/53) tick 3 was still open). Owns **journeys / checklists / calendar / calculators** only. Did **not** edit pillar guide MDX trees. No ads / Grok. Avoided tick-3 paths (`between-jobs`, `tax-residency`) so the merge controller can land #53 first.

### Sources mined

**Reddit / forums**

- r/askSingapore — bank/Singpass sequencing on arrival ([bank without address proof](https://www.reddit.com/r/askSingapore/comments/17jok89/open_a_bank_account_without_proof_of_residence/); [Singpass after landing](https://www.reddit.com/r/askSingapore/comments/wfwo76/expat_arrived_from_australia_last_evening_can_i/)).
- r/askSingapore — LTVP/DP join-later FIN timing ([LTVP Singpass stage](https://www.reddit.com/r/askSingapore/comments/1u1443r/for_those_who_gotten_your_ltvp_which_stage_did/)).
- Forum heat on diplomatic-clause “12+2” folklore when resigning mid-lease.

**Official / primary**

- [ICA — SG Arrival Card](https://www.ica.gov.sg/enter-depart/entry_requirements/sg-arrival-card)
- [IRAS — Renting a property](https://www.iras.gov.sg/taxes/stamp-duty/for-property/renting-a-property) (duty ≠ early-exit contract terms)
- [MOE calendar 2026](https://www.moe.gov.sg/calendar) — Good Friday 3 Apr; Labour Day 1 May; Vesak PH Mon 1 Jun
- Diplomatic clauses are contractual market norms (often 12-month lock-in + 2-month notice on 24-month TAs), not a statute

### Gaps vs Loop E ticks 1–2 (and open tick 3)

Ticks 1–2: arriving 7/30/90, leaving IR21/STVP, AEIS/tax calendar, setup-cash / lease-duty / EP tables. Tick 3 (#53 open): between-jobs + tax-residency + EP uplift/Youth/Teachers’/Children’s Day. Remaining main gaps: **pre-arrival playbook**, **diplomatic-clause notice sketch**, **Good Friday / Labour Day / Vesak care markers**. Skipped pillar MDX.

### Shipped this tick

**Journeys**

- `content/journeys/pre-arrival.json` + `/journeys/pre-arrival`
- Journeys index + arriving phase nav cross-links
- `day-7.json` — pre-arrival handoff
- `day-30.json` — diplomatic-clause sketch cue
- `leaving-singapore.json` — lease-notice cross-link on housing section

**Tools**

- `src/lib/tools/lease-notice.ts`
- `src/components/tools/LeaseNoticeCalculator.tsx`
- `/tools/lease-notice` + tools index + sitemap

**Calendar**

- `good-friday-2026.json`, `labour-day-2026.json`, `vesak-day-2026.json`
- Calendar hub copy

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did **not** edit pillar guide MDX trees.
- Did **not** ship between-jobs / tax-residency (tick 3 / #53).

### Questions mined (sample)

1. When can I submit the SG Arrival Card relative to my flight date?
2. What belongs in the pre-arrival pack vs what waits for day 7?
3. How do I bridge cash before Singpass and a local bank exist?
4. If my spouse joins three months later, which checklists do they reuse?
5. Does a 24-month condo TA always include a diplomatic clause?
6. When is the earliest I can serve notice on a typical 12+2 clause?
7. If I resign in month 10, can I exit at month 12?
8. Does early termination refund IRAS lease stamp duty?
9. Which 2026 public holidays sit inside school term and need backup care?
10. How does Vesak’s Sunday/Monday pair stack with June school holidays?

---

---

---

---

---

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 9)

Branch: `loop/story-aeo-tick9` → PR to `main`. Owns **answer-engine shape** after tick 6 on main while ticks 7–8 stay open. Did **not** expand ads/monetization; avoided open tick-7 files (bank / housing / between-jobs / day-7/30 / arriving/leaving) and tick-8 files (haze / motor claims / DP / day-90).

### Sources mined

**Reddit / forums**

- r/askSingapore — “landlord won’t FWTES,” five-day address panic, passport renewed but gate rejects FIN.
- r/askSingapore — Lemon Law vs COE car dealer scripts; CASE vs Small Claims for undelivered furniture.
- r/askSingapore — lost blue IC vs lost EP card agency mix-ups; overseas replacement folklore.

**Official**

- [MOM — Notify MOM of EP changes](https://www.mom.gov.sg/passes-and-permits/employment-pass/notify-mom-of-changes) + [FWTES](https://www.mom.gov.sg/eservices/services/tes).
- [CASE — CPFTA & Lemon Law](https://www.case.org.sg/cpfta-lemon-law/) + [Small Claims eligibility](https://www.judiciary.gov.sg/civil/cases-eligible-small-claim).
- [ICA — Loss of Identity Card](https://www.ica.gov.sg/documents/ic/loss).

### Gaps vs ticks 1–8

Ticks 1–6 shipped landing/fail AEO through scams / lost work-pass card / ICA STVP. Open tick 7 covers MOM cancel STVP + housing/bank hubs; open tick 8 covers haze / motor claims / DP. Remaining high-intent **admin / consumer / PR-card** gaps without FAQPage: **EP address/passport notify + FWTES**, **CASE/Lemon Law for foreigners**, **lost blue NRIC (ICA ≠ MOM)**.

### Shipped this loop

**Upgraded (AEO only)**

- `content/guides/move/ep-notify-mom-address-passport.mdx` (direct lead + FAQPage)
- `content/guides/life/case-lemon-law-consumers-singapore.mdx` (direct lead + FAQPage)
- `content/guides/next/lost-replace-nric-pr-singapore.mdx` (direct lead + FAQPage)
- `src/lib/site.ts` (Move notify topic; Life Lemon Law topic; Next lost-NRIC topic)

### Explicitly not done

- No ads / monetization (skipped remittances `sponsorSlot`).
- No Grok / competitor clone copy.
- Did not edit open tick-7/8 file sets (journeys day-7/30/90, arriving/leaving pages, haze/DP/bank/housing/between-jobs bodies).
- Did not rewrite Loop A EP eligibility trees beyond notify FAQPage shape.

### Questions mined (sample)

1. How many days do I have to update my EP address with MOM?
2. Can I register a hotel or Airbnb as my EP residential address?
3. What if my landlord will not complete FWTES?
4. Do I need to update MOM after renewing my passport?
5. Is MOM address update the same as ICA NRIC address update?
6. Does Lemon Law cover foreigners on EP?
7. Should I go to CASE or Small Claims first?
8. Do I get an instant refund under Lemon Law?
9. Are COE cars excluded from Lemon Law?
10. Is losing a blue NRIC the same as losing an EP card?
11. How soon must I report a lost NRIC to ICA?
12. Can I replace a lost NRIC while overseas?

---

---

---

---

---

---

---

## Loop G — SEO, internal linking, hub polish — 2026-09-15 (tick 3b)

Branch: `cursor/loop-g-seo-tick3-a144` → PR to `main`. Follow-up to tick 3 (#57). Shell/metadata/hubs/crosslink depth only — **no** A–F/H body rewrites, **no** ads inventory / Grok.

### Gaps closed (vs tick 3)

- `relatedEntities` frontmatter (~124 guides) was still unused — resolve + render on guide pages.
- Neighbourhood / school / club details lacked reverse links from guides that cite them.
- Tool footers / tools index / calendar CollectionPage still thin vs hub↔tool↔guide graph.

### Shipped

- `resolveRelatedEntities` + `GuideRelatedEntities` on guide articles
- `getGuidesLinkingToEntity` reverse rails on neighbourhood/school/club details
- Tool footer + tools index + calendar CollectionPage crosslink depth
- Trust/advertise/sponsored metadata parity retained from tick 3 where still needed on tip

### Explicitly not done

- No mass `relatedGuides` MDX reciprocity edits
- No new sponsorSlots / featured inventory
- No guide body / Grok clone copy

---

---

---

## Loop F — Services directory depth — Tick 4 — 2026-09-15

Branch: `cursor/services-directory-tick4-710d` → PR to `main`. Owns **services directory** entities only. Did **not** touch neighbourhoods (Loop C), schools/clubs (Loop B), or pillar guides (A–D). No ads / featured / monetization expansion. No Grok copy. Skipped ticks 1–3 topics (tax / dental / notary-as-primary / storage / pets-relocation-as-primary / mental health / licence / aircon / private-health-as-primary / FDW DIY / pest / furniture / end-of-lease cleaning / confinement nanny / car sharing).

### Sources mined

**Reddit / forums**

- r/askSingapore — private physio rates / package hard-sell / insurer caps ([physio recommendations](https://www.reddit.com/r/askSingapore/comments/1l6owj5/physiotherapist_recommendations/); [sciatica no package](https://www.reddit.com/r/askSingapore/comments/1sjx7er/physiotherapist_for_sciatica_no_hardshell_package/); [knee rehab](https://www.reddit.com/r/askSingapore/comments/1t6cbso/recommendations_for_good_physiotherapists_for/); [how people pay](https://www.reddit.com/r/askSingapore/comments/1nljhdz/how_are_people_paying_for_physiotherapy/)).
- r/askSingapore — optometrist vs ophthalmologist triage ([eye health vs specs](https://www.reddit.com/r/askSingapore/comments/1sadsbc/do_optometrists_check_your_eye_health_or_just_fix/)).
- r/askSingapore — EP bank KYC without lease / hotel address ([DBS proof of residence](https://www.reddit.com/r/askSingapore/comments/19amqw7/opening_bank_account_with_dbs_as_expat/); [no proof of residence](https://www.reddit.com/r/askSingapore/comments/yyhalq/opening_a_bank_account_without_proof_of_residence/); [hotel stay EP](https://www.reddit.com/r/askSingapore/comments/1soom3o/anyone_on_ep_have_luck_opening_a_bank_account/)).
- r/askSingapore — wills vs CPF nomination adjacency ([write will donate](https://www.reddit.com/r/askSingapore/comments/1e0lqb5/how_to_write_will_to_donate_organs_and_money/)).
- Pet daily-care heat after import (AVS licence / clinic continuity) adjacent to existing relocation threads.

**Official**

- [AHPC — Allied health registers](https://www.ahpc.gov.sg/for-professionals/registers-of-allied-health-professionals/) + [AHPC home](https://www.ahpc.gov.sg/).
- [Optometrists & Opticians Board](https://www.oob.gov.sg/) + [SNEC](https://www.snec.com.sg/).
- [NParks / AVS](https://www.nparks.gov.sg/avs) + pet licensing / import pages.
- [DBS — Account opening documents](https://www.dbs.com.sg/personal/support/bank-account-opening-documents-required) + [MAS banking regulation](https://www.mas.gov.sg/regulation/banking) + [Singpass](https://www.singpass.gov.sg/main/).
- [Judiciary — Probate](https://www.judiciary.gov.sg/family/apply-for-probate) + [CPF nomination](https://www.cpf.gov.sg/member/account-services/providing-for-your-loved-ones/making-a-cpf-nomination) + [MinLaw find a lawyer](https://www.mlaw.gov.sg/legal-industry/find-a-lawyer/) + [SAL legalisation](https://legalisation.sal.sg/).
- [MOM — WICA](https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation).

### Gaps vs ticks 1–3

Ticks 1–3 covered tax/dental/notary/storage/pet-relocation, mental health/licence/aircon/private health/FDW DIY, and pest/furniture/cleaning/confinement-nanny/car-share. Remaining high-intent **directory** gaps matched this mine: **AHPC physio vs package hard-sell**, **optometrist vs ophthalmologist**, **post-import vet continuity**, **EP hotel KYC / employer address letters**, and **will-writing vs CPF nomination** (separate from family-law counsel upgrades in flight on tick 3).

### Shipped this tick

**New service entities**

- `content/entities/services/physiotherapy-rehab.json`
- `content/entities/services/optical-eye-care.json`
- `content/entities/services/veterinary-clinics.json`
- `content/entities/services/bank-account-opening.json`
- `content/entities/services/will-writing-probate.json`

**Upgraded existing** (avoided tick-3 touch set)

- Clinics: `parkway-shenton.json`, `raffles-medical.json`, `smg.json`
- Insurance brands + category: `aia-singapore.json`, `prudential-singapore.json`, `private-health-insurance.json`
- Pets / docs / telecom: `pet-relocation.json`, `notary-apostille.json`, `telecom-setup-help.json`

### Explicitly not done

- No ads / featured / monetization expansion (`featured`/`sponsored` remain false on new entities).
- No Grok / third-party clone copy.
- Did not re-litigate ticks 1–3 primary topics beyond cross-links.
- Did not edit neighbourhoods, schools, clubs, or pillar guide MDX trees.
- Did not modify tick-3 in-flight files (pest/furniture/cleaning/nanny/car-share + FDW/agent/family-law touch set) to keep merge conflict surface small.

### Questions mined (sample)

1. How much does private physiotherapy cost, and will my group plan pay?
2. Are multi-session physio packages a hard-sell I should refuse?
3. Do I need AHPC registration to trust a clinic WhatsApp physio?
4. Can a mall optometrist diagnose eye disease, or do I need ophthalmology?
5. What does a corporate optical benefit actually cover?
6. After pet import, which vet do I use for boosters and emergencies?
7. Can I open a DBS/OCBC account while still in a hotel on EP?
8. Will an employer letter fix proof-of-address KYC rejects?
9. Does a Singapore will move my CPF, or do I need a CPF nomination?
10. Will a UK probate unfreeze my Singapore bank accounts?

---

---

---

## Loop A — Move + Money — 2026-09-15 (tick 7)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `cursor/loop-a-move-money-tick7-49cb` → PR to `main` (fresh worktree off `origin/main` while [#56](https://github.com/abhishekcheriangeorge-ops/expat-dot-sg/pull/56) A6 is still open — **did not** edit A6 ONE/EntrePass/DP/side-income/CPF/bank/salary paths).

### Sources mined

**Reddit**

- r/askSingapore — MyCareersFuture / Fair Consideration “box-ticking” vs real hire ([where companies hire](https://www.reddit.com/r/askSingapore/comments/1nxz5tf/for_those_working_in_hr_talent_acquisition_or/); [reposted jobs](https://www.reddit.com/r/askSingapore/comments/1jetjum/why_do_so_many_jobs_in_singapore_get_reposted_so/)).
- r/askSingapore — S Pass while on DP / “no EP quota” myths ([S Pass on DP](https://www.reddit.com/r/askSingapore/comments/1sxxf18/is_it_very_hard_to_get_an_s_pass_job_while_on_a/); [DP career trap](https://www.reddit.com/r/askSingapore/comments/1ranfcm/spouse_got_a_dream_job_offer_in_singapore_but_the/); [EP tightening](https://www.reddit.com/r/askSingapore/comments/1porrdk/is_singapores_ep_quota_tightening_backfiring/)).
- r/askSingapore — WHP / TEP internship rails ([WHP timing](https://www.reddit.com/r/askSingapore/comments/159toan/do_i_apply_for_whp_working_holiday_pass_while/); [internship pay/pass](https://www.reddit.com/r/askSingapore/comments/1gj9m83/internship_in_singapore/); [TEP institution list](https://www.reddit.com/r/askSingapore/comments/1jdqcl9/training_employment_pass_how_to_know_if_an/); [LOE ≠ EP](https://www.reddit.com/r/askSingapore/comments/1isg140/company_sponsorship_requirement_for_foreign/)).

**Official**

- [MOM — Fair Consideration Framework](https://www.mom.gov.sg/employment-practices/fair-consideration-framework) + [consider candidates fairly (EP)](https://www.mom.gov.sg/passes-and-permits/employment-pass/consider-all-candidates-fairly) + [S Pass FCF](https://www.mom.gov.sg/passes-and-permits/s-pass/consider-all-candidates-fairly) (14 days; S$22,500 / &lt;10 employees exemptions)
- [MOM — S Pass eligibility](https://www.mom.gov.sg/passes-and-permits/s-pass/eligibility) + [COS 2025 factsheet](https://www.mom.gov.sg/-/media/mom/documents/budget2025/cos-2025-factsheet-on-foreign-workforce-policies) (Sep 2025 floors / levy)
- [MOM — Work Holiday Programme](https://www.mom.gov.sg/passes-and-permits/work-holiday-programme/eligibility) + [Training Employment Pass](https://www.mom.gov.sg/passes-and-permits/training-employment-pass/eligibility)
- [MOE — Tuition Grant bond matters](https://www.moe.gov.sg/financial-matters/tuition-grant-scheme/bond-matters) + liquidated damages pages

### Gaps vs prior Loop A ticks (Move + Money scope)

Ticks 1–5 (on main) + open A6 (#56) cover EP floors/COMPASS, EP vs S Pass body, remittance, medical/IR21, cancel STVP/DP LOC/PayNow/CPF withdrawal, FWTES, job-change IPA, HISA, tax residency, EP medical, salary notify, CC GX, COR, LOG, PEP/Tech.Pass, IPA reassessment, SRS/RSU, foreign income, COL helper, ACRA, pets transit, and (in #56) ONE/EntrePass/DP/side-income/CPF/bank/salary FAQPages. Remaining high-intent Move/Money gaps matched this mine without colliding #56 paths: **FCF/MCF 14-day + S$22.5k exemption FAQPage**, **S Pass Sep 2025 floors/levy + “no EP quota” myth FAQPage**, **EP vs S Pass FAQPage**, **job-offer fixed-salary vs AWS FAQPage**, **WHP/TEP vs tourist-intern myth**, **MOE TG LOE ≠ EP**, **year-one finance FOMO**. Left Next EP-renewal NOA and Loop H STVP/housing/banking AEO alone.

### Shipped this loop

**Upgraded guides (FAQPage + depth)**

- `content/guides/move/fair-consideration-framework-ep.mdx`
- `content/guides/move/s-pass-singapore.mdx`
- `content/guides/move/ep-vs-s-pass-comparison.mdx`
- `content/guides/move/decoding-job-offer-singapore.mdx`
- `content/guides/move/work-holiday-training-employment-pass.mdx`
- `content/guides/move/moe-tuition-grant-bond.mdx`
- `content/guides/money/financial-planning-year-one.mdx`
- `src/lib/site.ts` (FCF / S Pass / offer / WHP / TG + year-one finance topics)
- `content/entities/services/intact-immigration.json` (FCF / S Pass / WHP / TG engage paths)

### Explicitly not done

- No ads/monetization expansion (existing decoding-offer sponsorSlot left untouched).
- No Grok / third-party clone copy.
- Did not edit open A6 paths (ONE/EntrePass/DP/side-income/CPF/bank/salary).
- Did not re-own Loop H STVP/housing/banking AEO or Loop D EP-renewal NOA.
- Did not edit Family / Belong / Home / Life heavily.

### Questions mined (sample)

1. Is every MyCareersFuture ad just FCF box-ticking?
2. Can HR offer me the job during the 14-day ad window?
3. When is MCF advertising exempt (S$22,500 / small firm)?
4. Must the EP filing match the MCF ad ID and salary?
5. Does “no EP quota” mean I must take S Pass?
6. What are Sep 2025 S Pass salary and levy floors?
7. Can S Pass holders hit the S$6,000 DP family gate?
8. Does AWS / 13th month count as fixed monthly salary for MOM?
9. Can I intern on a tourist / STVP?
10. Is MOM’s TEP sample university list exhaustive?
11. Does a Tuition Grant LOE mean I already have an EP?
12. Should year-one expats buy a condo or COE car before the first renewal?

---

---

---

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 8)

Branch: `loop/next-polish-tick8` → PR to `main`. Owns **Next** guides plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home / Life body trees.

### Sources mined

**Reddit / forums**

- r/askSingapore — NRIC re-registration at 30 / overseas collection ([re-register at 30 overseas](https://www.reddit.com/r/askSingapore/comments/ozzprx/reregistering_ic_at_30_yo_and_collecting_it_i/); [IC photo at 30](https://www.reddit.com/r/askSingapore/comments/194qbyc/ic_photo_for_those_who_turned_30/); [cracked NRIC wait-till-30 folklore](https://www.reddit.com/r/askSingapore/comments/nmt7u4/nric_nearly_broken_into_half/)).
- r/askSingapore — eCOA / address update legality ([keep old address after BTO](https://www.reddit.com/r/askSingapore/comments/1mrv8ck/can_you_not_update_your_address_on_nric_when/)).
- r/askSingapore — Singapore Citizenship Journey after IPA ([SCJ CSS / SEV slot crunch](https://www.reddit.com/r/askSingapore/comments/1luj9er/sg_citizenship_journey_question/)).

**Official**

- [ICA — Re-Register Identity Card for 30/55-year-olds](https://www.ica.gov.sg/documents/ic/re-registration) (notice → 1-year subsidised window; S$10 SC / S$50 PR; overseas return within 1 year; collection in Singapore)
- [ICA — Photo Guidelines](https://www.ica.gov.sg/photo-guidelines)
- [ICA — Change of Residential Address on Identity Card](https://www.ica.gov.sg/documents/ic/update_residential_address) (28-day clock; group filing; PIN mailer; free; overseas + ELD LCA)
- [ICA — Becoming a Singapore Citizen](https://www.ica.gov.sg/reside/citizenship/apply) (mandatory SCJ ages 16–60)
- [ICA — Your Singapore Citizenship Roadmap (PDF)](https://www.ica.gov.sg/docs/default-source/ica/files/esc-roadmap.pdf) (portal day +3; SEV/CSS; e-Journey; ~2-month stage orientation; ceremony 3–6 months after registration)

### Gaps vs prior ticks

Tick 7 shipped spouse LTVP/PMLA, PLOC/LOC, student PR. Remaining high-intent **Next** life-admin / citizenship-process gaps matched this mine: **NRIC re-registration at 30/55** (10-year carve-out; overseas return clock; Singapore-only collection), **eCOA address change** (28-day legal clock; PIN mailer; sticker vs mid-IC reprint; ELD LCA for overseas SC), **Singapore Citizenship Journey after IPA** (portal day +3; SEV/CSS crunch; e-Journey 7+7 hygiene; renunciation; ICA Building registration; ceremony). About + editorial research language updated.

### Shipped

**New:** `nric-reregistration-30-55-singapore.mdx`, `ecoa-nric-address-change-singapore.mdx`, `singapore-citizenship-journey-scj.mdx`

**Upgraded:** `lost-replace-nric-pr-singapore.mdx`, `change-name-nric-singapore.mdx`, `renewing-life-admin-annually.mdx`, `after-getting-pr-checklist.mdx`, `singapore-citizenship-application.mdx`; `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No Move/Money/Family/Belong/Home/Life body edits.

### Questions mined

1. Do I still re-register at 30 if I replaced my IC within the last 10 years?
2. What fees does ICA publish for 30/55 re-registration (SC vs PR)?
3. Can I collect a re-registered NRIC at an overseas mission?
4. If I live overseas during the window, how long do I have after returning?
5. Must I update NRIC address within 28 days when I move — including overseas?
6. Is skipping an address update illegal / fineable?
7. How does the eCOA PIN mailer and address sticker process work?
8. What is an ELD Local Contact Address if my IC shows an overseas home?
9. After citizenship IPA, when can I log into the SC Journey Portal?
10. What are SEV and CSS, and what if slots are full?
11. What e-Journey clocks does ICA’s roadmap publish (7+7 days)?
12. When am I actually a citizen — registration or the welcome ceremony?

---

---

---

---

---

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 8)

Branch: `loop/story-aeo-tick8` → PR to `main`. Owns **journey completeness** and **answer-engine shape** after tick 6 on main (scams / lost card / ICA STVP) while tick 7 (MOM STVP / housing / bank hubs) remains open. Did **not** expand ads/monetization; avoided tick-7 file collisions (day-7/30, arriving/leaving pages, between-jobs / bank / housing bodies) and Loop C dengue/lease rewrites.

### Sources mined

**Reddit / forums**

- r/askSingapore — foreign AQI apps vs PSI panic; “do kids still do CCA in haze?”; heat-exhaustion adjacency.
- r/askSingapore — “police report for a scratch?” / GetGo assessor scripts / Malaysian-plate rear-end recovery folklore.
- r/askSingapore — “DP = can work?” LOC renewal local-hire traps; DP dies when EP cancelled; newborn DP timing.

**Official**

- [haze.gov.sg](https://www.haze.gov.sg/) + [MOH haze health advisory](https://www.moh.gov.sg/others/haze/) + [NEA haze](https://www.nea.gov.sg/our-services/pollution-control/air-pollution/haze).
- [SPF — Reporting traffic accidents](https://www.police.gov.sg/Knowledge-Hub/Traffic/Traffic-Matters/Reporting-Traffic-Accidents-and-Offences) + [GIA Motor Claims Framework](https://gia.org.sg/motor-insurance.html).
- [MOM — Employment Pass / family](https://www.mom.gov.sg/passes-and-permits/employment-pass) + [DP business LOC](https://www.mom.gov.sg/passes-and-permits/loc-for-dependants-pass-business-owners/eligibility) + [Budget 2021 DP work factsheet](https://www.mom.gov.sg/-/media/mom/documents/budget2021/factsheet-work-arrangements-dp-holders.pdf).

### Gaps vs ticks 1–7

Ticks 1–6 shipped landing/fail AEO (SIM→bank, SGAC, HSA, licence, shipping, pets, PayNow fail, vaping, scams, lost card, ICA STVP). Tick 7 (open) covers MOM cancel STVP + housing/bank FAQ debt. Remaining high-intent **living / family-pass** gaps without FAQPage: **haze/PSI literacy**, **traffic accident vs insurer clocks**, **Dependant’s Pass work/LOC/cascade myths**.

### Shipped this loop

**Upgraded (AEO / light journey polish)**

- `content/guides/life/haze-climate-preparedness.mdx` (direct lead + FAQPage)
- `content/guides/life/traffic-accident-motor-claims-singapore.mdx` (direct lead + FAQPage)
- `content/guides/move/dependant-pass-singapore.mdx` (direct lead + FAQPage)
- `content/journeys/checklists/day-90.json` (haze/heat kit item)
- `src/lib/site.ts` (Life haze + motor-claims topics; Move DP topic)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / competitor clone copy.
- Did not edit tick-7 open files (between-jobs / housing / bank / day-7/30 / arriving/leaving pages).
- Did not rewrite Loop C dengue/lease bodies or Loop A EP eligibility trees beyond DP FAQPage shape.

### Questions mined (sample)

1. Should I trust my phone’s AQI app during Singapore haze?
2. What is the difference between 1-hour PM2.5 and 24-hour PSI?
3. When should healthy adults cut outdoor exercise in haze?
4. Do I need N95 masks indoors during haze?
5. Is heat stress only a haze-season problem?
6. Do I need a police report for a minor parking scrape?
7. When is an SPF traffic accident report mandatory?
8. Can we settle in cash on WhatsApp and skip insurance?
9. A Malaysian-plate car hit me — what should I expect?
10. Does a Dependant’s Pass let my spouse work?
11. Can a DP LOC renew without hiring a local employee?
12. What happens to family DPs when the main EP is cancelled?

---

---

---

---

---

---

## Loop C — Home + Life (parallel) — Tick 24 — 2026-09-15

Branch: `cursor/home-life-tick24-2739` → PR to `main`. Owns **Home** + **Life** guides and neighbourhood entities only.

### Sources mined

**Reddit**

- r/askSingapore — HDB HIP dust / portable toilets / mid-tenancy landlord upgrades ([HIP experience](https://www.reddit.com/r/askSingapore/comments/1ohzaqn/how_was_your_home_improvement_programme_hip/); [block HIP daily life](https://www.reddit.com/r/askSingapore/comments/1i5469w/for_those_whose_block_went_through_hip_how_did_it/); [landlord HIP mid-tenancy](https://www.reddit.com/r/askSingapore/comments/17ue1mj/anybody_renting_in_a_hdb_and_halfway_through/); [room renters during HIP](https://www.reddit.com/r/askSingapore/comments/1srkqkh/room_renters_during_hip_do_you_move_out_or_just/)).
- r/askSingapore — post-handover deposit ambushes / SCT after leaving ([handover vs 14-day invent](https://www.reddit.com/r/askSingapore/comments/1ejg8wu/tenancy_handover_process/); [signed clean then cut](https://www.reddit.com/r/askSingapore/comments/13jqzd5/landlord_not_refunding_my_full_deposit/); [overseas SCT / CJTS](https://www.reddit.com/r/askSingapore/comments/1is1n6f/singapore_landlord_small_claims_court_advice/); [SCT continuous tenancy](https://www.reddit.com/r/askSingapore/comments/1rdzwbb/small_claims_tribunal_free_legal_advice/)).
- r/askSingapore — ActiveSG Standard Rate / multipass / Singpass friction ([multipass foreigners](https://www.reddit.com/r/askSingapore/comments/1f325y0/activsg_gym_multipass_scheme_not_available_for/); [foreigner gym](https://www.reddit.com/r/askSingapore/comments/1k5cyl5/foreigner_looking_for_a_gym_to_work_out/); [tourist ActiveSG](https://www.reddit.com/r/askSingapore/comments/1mr0lvx/being_a_tourist_can_i_go_to_activesg_gyms/)).
- r/askSingapore — neighbourhood shortlists for Serangoon / Pasir Ris / Yishun ([Serangoon vs Hougang](https://www.reddit.com/r/askSingapore/comments/1irofhy/considering_moving_to_serangoon_central_or/); [best HDB neighbourhoods](https://www.reddit.com/r/askSingapore/comments/1fubtw7/best_hdb_neighbourhood_in_singapore/); [Pasir Ris vibe](https://www.reddit.com/r/askSingapore/comments/1cpjx80/what_do_you_think_of_pasir_ris/); [best towns](https://www.reddit.com/r/askSingapore/comments/1qq0fly/what_are_the_best_towns_to_live_in_singapore_and/)).

**Official**

- [HDB — Home Improvement Programme (HIP)](https://www.hdb.gov.sg/residential/living-in-an-hdb-flat/sers-and-upgrading-programmes/upgrading-programmes/types/home-improvement-programme-hip) + [gov.sg HIP explainer](https://www.gov.sg/explainers/5-things-you-should-know-if-your-home-is-undergoing-hip/) + [CPF Board HIP overview](https://www.cpf.gov.sg/member/infohub/educational-resources/home-improvement-programme-what-to-know).
- [CEA — Tenancy templates](https://www.cea.gov.sg/real-estate-professionals/agreements-and-checklists/) + [renting guidance](https://www.cea.gov.sg/consumers/engaging-a-property-agent/renting-or-renting-out/).
- [Judiciary — SCT eligibility](https://www.judiciary.gov.sg/civil/cases-eligible-small-claim) + [small claims guide PDF](https://www.judiciary.gov.sg/docs/default-source/civil-docs/sct_guide_to_small_claims.pdf).
- [ActiveSG — Individual rates](https://www.activesgcircle.gov.sg/facilities/individual-rates) + [Membership / MyActiveGYM](https://www.activesgcircle.gov.sg/membership) + [MyActiveSG+](https://www.activesgcircle.gov.sg/myactivesg-plus).

### Gaps vs Tick 23 (Home + Life slice)

Tick 23 shipped lease renewal / rent caps myths, landlord entry / quiet enjoyment, dengue cluster + chute fogging, Toa Payoh / AMK / Bedok entities. Remaining high-intent Home+Life gaps matched forum heat: **HDB HIP mid-tenancy survival (≠ adjacent BTO NEA rail)**, **post-handover deposit ambushes + overseas SCT**, **ActiveSG Standard Rate / multipass FAQ depth**, plus neighbourhood entity depth for **Serangoon**, **Pasir Ris**, and **Yishun**. Early-exit / renewal / entry / flood / dengue left alone beyond cross-links.

### Shipped this tick

**New guides**

- `content/guides/home/hdb-hip-tenants.mdx`
- `content/guides/home/deposit-return-handover-disputes.mdx`

**Upgraded guides (depth + citations + cross-links + FAQPage where useful)**

- `content/guides/life/sports-fitness-singapore.mdx` (ActiveSG multipass / Standard Rate FAQPage)
- `content/guides/home/rental-inventory-fair-wear-tear.mdx` (handover deep-link + FAQs)
- `content/guides/home/construction-site-noise-renters.mdx` (HIP vs NEA split)
- `content/guides/home/heartland-living-for-expats.mdx` (HIP + Serangoon/Pasir Ris/Yishun)
- `content/guides/home/choosing-neighbourhood-expat.mdx` (entity shortlist + HIP)
- `content/guides/home/security-deposit-diplomatic-clause.mdx` (deposit-return deep-link)
- `content/guides/home/renting-process-loi-ta-deposits.mdx` (HIP + deposit-return related)
- `content/guides/home/hdb-ceiling-leak-tenants.mdx` (HIP adjacency)
- `src/lib/site.ts` (Home HIP / deposit-return topics; Life sports blurb; neighbourhood blurb)

**Neighbourhood entity depth**

- `content/entities/neighbourhoods/serangoon.json`
- `content/entities/neighbourhoods/pasir-ris.json`
- `content/entities/neighbourhoods/yishun.json`

### Explicitly not done

- No ads/monetization expansion (existing sponsorSlots left as-is).
- No copying of third-party “expat-sg” / Grok clones.
- Did not edit Move/Money/Family/Belong/Next guides owned by other loops.
- Did not re-litigate Tick 19–23 fibre/mould/CDRT/HDB-sale/construction/early-exit/flood/renewal/entry/dengue topics beyond cross-links.

### Questions mined (sample)

1. Do I pay for HIP as a tenant, or does the landlord?
2. How many days will workers be inside my flat during HIP?
3. Can I refuse optional toilet upgrading so I do not need a hotel?
4. Should my landlord abate rent or pay for temporary housing during HIP?
5. Am I liable for contractor damage to my furniture during HIP?
6. Can the landlord invent new defects after we signed a clean handover?
7. Does the TA’s 14-day deposit refund window allow a second secret inspection?
8. I already left Singapore — can I still file SCT for my deposit?
9. Is SCT worth it when enforcement costs more than the withheld sum?
10. Can foreigners use ActiveSG, and what is the Standard Rate?
11. Why don’t I see ActiveSG multipass options as an EP holder?
12. Serangoon vs Pasir Ris vs Yishun — which fits NEL/CCL, quiet east park, or north value?

---

---

---

---

---

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 7)

Branch: `loop/story-aeo-tick7` → PR to `main`. Owns **journey completeness** and **answer-engine shape** after tick 6’s scams / lost-card / ICA STVP-extension FAQPages. Did **not** expand ads/monetization or rewrite Loop C Home/Life dengue–lease bodies or A/B/D/E/F/G trees.

### Sources mined

**Reddit / forums**

- r/askSingapore — laid-off “only 30 days?” panic, spouse DP/LOC myths, JB hop to reset MOM STVP (distinct from tick 6’s ICA tourist extension).
- r/askSingapore — condo Airbnb “under 3 months is fine” folklore vs URA short-term rules; serviced-apartment address for banks.
- r/askSingapore — IPA-only bank open fails / no address letter / no-FIN personal account myths (FAQPage debt from early H ticks).

**Official**

- [MOM — Cancel an Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass) + [Cancel a Dependant’s Pass](https://www.mom.gov.sg/passes-and-permits/dependants-pass/cancel-a-pass) (STVP up to 90 days; family cascade).
- [URA — Short-term accommodation](https://www.ura.gov.sg/guidelines/property-and-business-owners/property/short-term-accommodation/) (hotels + qualifying SA; &lt;3-month private residential illegal).
- [DBS — Account opening documents](https://www.dbs.com.sg/personal/support/bank-account-opening-documents-required.html) + [Singpass](https://www.singpass.gov.sg/) (example KYC stack).
- [ScamShield helpline 1799](https://www.scamshield.gov.sg/scamshield-helpline/) (journey checklist wiring for tick 6 FAQPage).

### Gaps vs ticks 1–6

Tick 6 shipped FAQPages for scams, lost work-pass card, and **ICA** visit-pass extension — but left **journey hubs / site topics unwired** and did not FAQPage the **MOM EP-cancel STVP** rail. Early ticks claimed FAQ shape for **serviced apartment** and **bank opening** that later lacked `faqs[]` frontmatter. Remaining high-intent gaps: **MOM cancel STVP FAQPage**, **restore housing/bank FAQPages**, **ScamShield + leaving STVP hub links**.

### Shipped this loop

**Upgraded (AEO / journey polish)**

- `content/guides/next/between-jobs-stvp-singapore.mdx` (direct lead + FAQPage; MOM vs ICA distinction)
- `content/guides/move/first-housing-serviced-apartment.mdx` (FAQPage restore; URA SA vs Airbnb)
- `content/guides/money/opening-bank-account-expat.mdx` (FAQPage restore; address / Singpass / FIN)
- `content/journeys/checklists/day-7.json` (ScamShield item; SGWorkPass replacement cue)
- `content/journeys/checklists/day-30.json` (pass-card → lost-card href)
- `content/journeys/leaving-singapore.json` (STVP section → between-jobs guide)
- `src/app/journeys/arriving/page.tsx` + `src/app/journeys/leaving/page.tsx`
- `src/lib/site.ts` (Living start-here; Life scams; Money bank open; Next STVP + lost-card; Move housing blurb)

### Explicitly not done

- No ads / monetization expansion (insurance sponsorSlot left as-is).
- No Grok / competitor clone copy.
- Did not rewrite Loop A eligibility trees, Loop B Family/Belong, Loop C dengue/lease bodies, Loop F services entities, or Loop G SEO shell.
- Did not re-edit tick 6 FAQ bodies beyond hub links.

### Questions mined (sample)

1. When my EP is cancelled, do I only have 30 days to leave?
2. Can I keep working on the STVP after EP cancellation?
3. Do my spouse’s DP and LOC survive when my EP is cancelled?
4. Is EP-cancel STVP the same as ICA tourist visit-pass extension?
5. Should I book a serviced apartment for my first weeks?
6. Is a condo Airbnb short-let legal under three months?
7. Can a serviced-apartment address work for bank opening and MOM?
8. What is SA vs SA2 minimum stay?
9. Can I open a bank account with only an IPA letter?
10. Do I need Singpass before opening a local account?
11. How do I prove address while still in a hotel?
12. Should I register PayNow to FIN or mobile?

---

---

---

---

---

---

---

## Loop F — Services directory depth — Tick 3 — 2026-09-15

Branch: `cursor/services-directory-tick3-710d` → PR to `main`. Owns **services directory** entities only. Did **not** touch neighbourhoods (Loop C), schools/clubs (Loop B), or pillar guides (A–D). No ads / featured / monetization expansion. No Grok copy. Skipped tick 1–2 topics (tax / dental / notary / storage / pets / mental health / licence / aircon / private health insurance / FDW DIY).

### Sources mined

**Reddit / forums**

- r/askSingapore — bed bugs / who pays / multi-visit pest control ([agent refused proper treatment](https://www.reddit.com/r/askSingapore/comments/16cecjd/i_just_rented_a_place_discovered_bed_bug_and/); [HDB hygiene landlord vs tenant](https://www.reddit.com/r/askSingapore/comments/1b33122/who_is_responsible_for_the_hygiene_of_the_hdb/); [condo termites habitability](https://www.reddit.com/r/askSingapore/comments/1e9w12r/contract_termination_in_condo_termites/); [cockroach nest / professional service](https://www.reddit.com/r/askSingapore/comments/1bk010u/cockroaches_at_home/)).
- r/askSingapore — bare vs furnished / furniture exit dumps ([semi vs fully furnished](https://www.reddit.com/r/askSingapore/comments/1acslvx/renting_semibare_vs_fully_furnished_condo/); TA professional-cleaning asks adjacency ([what to look for in a TA](https://www.reddit.com/r/askSingapore/comments/zmcmh7/what_to_look_for_in_a_tenancy_agreement_when/))).
- r/askSingapore — confinement nanny agency vs freelancer ([first-timer parents](https://www.reddit.com/r/askSingapore/comments/1rlk81j/first_timer_parents_confinement_nanny/)).
- r/askSingapore — car sharing photo/excess anxiety vs COE ([which car sharing](https://www.reddit.com/r/askSingapore/comments/1jvrlzs/which_car_sharing_service_do_you_recommend_and_why/); Grab-car rental side-hustle maths adjacency).
- r/askSingapore — wills vs CPF nomination ([how to write will](https://www.reddit.com/r/askSingapore/comments/1e0lqb5/how_to_write_will_to_donate_organs_and_money/)).

**Official**

- [NEA — Vector Control Operator](https://www.nea.gov.sg/our-services/pest-control/vector-control-operator) + [Management of bed bugs](https://www.nea.gov.sg/our-services/pest-control/management-of-bed-bugs) + [mosquito habitat inspection](https://www.nea.gov.sg/dengue-zika/inspecting-your-homes-and-premises-for-mosquito-habitats).
- [CEA — Renting guidance](https://www.cea.gov.sg/consumers/engaging-a-property-agent/renting-or-renting-out/) + [Agreements / checklists](https://www.cea.gov.sg/real-estate-professionals/agreements-and-checklists/).
- [MOM — Work Permit for confinement nanny](https://www.mom.gov.sg/passes-and-permits/work-permit-for-confinement-nanny/key-facts) + [eligibility](https://www.mom.gov.sg/passes-and-permits/work-permit-for-confinement-nanny/eligibility) + [apply](https://www.mom.gov.sg/passes-and-permits/work-permit-for-confinement-nanny/apply-for-permit).
- [LTA OneMotoring — COE](https://onemotoring.lta.gov.sg/content/onemotoring/home/buying/upfront-vehicle-costs/certificate-of-entitlement--coe-.html) + [vehicle tax structure](https://onemotoring.lta.gov.sg/content/onemotoring/home/buying/upfront-vehicle-costs/tax-structure.html) + [SPF driving licence](https://www.police.gov.sg/Knowledge-Hub/Traffic/Traffic-Matters/Singapore-Driving-Licence).
- [Judiciary — probate](https://www.judiciary.gov.sg/family/apply-for-probate) + [CPF nomination](https://www.cpf.gov.sg/member/account-services/providing-for-your-loved-ones/making-a-cpf-nomination) + [SCT](https://www.judiciary.gov.sg/civil/about-small-claims-tribunals).

### Gaps vs tick 2

Tick 2 shipped mental health / licence / aircon / private health insurance / FDW DIY + agent dual-rep depth. Remaining high-intent **directory** gaps matched this mine: **NEA VCO pest control (bed bugs / German roaches / who pays)**, **furniture rental for bare units**, **end-of-lease professional cleaning / curtain clauses**, **confinement-nanny agencies (distinct from MDW)**, **car sharing vs COE ownership**, plus wills/CPF nomination engage cues on family-law counsel and cleaning/pest LOI asks on agent brands.

### Shipped this tick

**New service entities**

- `content/entities/services/pest-control.json`
- `content/entities/services/furniture-rental.json`
- `content/entities/services/end-of-lease-cleaning.json`
- `content/entities/services/confinement-nanny.json`
- `content/entities/services/car-sharing-rental.json`

**Upgraded existing**

- Aircon / movers / storage: `aircon-servicing.json`, `alliance-movers.json`, `self-storage.json`, `driving-schools-licence.json`
- FDW brands + category: `fdw-agencies.json`, `comfort-employment.json`, `nation-employment.json` (confinement-nanny cross-rail)
- Agents: `era-realty.json`, `huttons.json`, `orange-tee.json` (cleaning / pest / defect-free LOI asks)
- Legal: `family-law-expat.json` (wills / CPF nomination / probate links)

### Explicitly not done

- No ads / featured / monetization expansion (existing sponsored flags left as-is).
- No Grok / third-party clone copy.
- Did not re-litigate tick 1–2 tax/dental/notary/storage/pet/mental-health/licence/aircon/insurance/FDW DIY topics beyond cross-links.
- Did not edit neighbourhoods, schools, clubs, or pillar guide MDX trees.

### Questions mined (sample)

1. Who pays for bed-bug treatment discovered in week one — landlord or tenant?
2. Is a single fogging visit enough, or do I need a multi-visit NEA VCO plan?
3. How do I verify a pest company is an NEA-registered Vector Control Operator?
4. Should I rent furniture for a bare condo on a 12-month EP, or buy and dump?
5. Will my landlord buy my sofa when I leave Singapore?
6. Does my TA really require professional curtain cleaning at handover?
7. What invoices protect my security deposit at checkout?
8. Is a confinement nanny the same MOM pass as an MDW?
9. Can foreigners hire a Malaysian confinement nanny, and what is the levy?
10. Agency vs freelancer pui yuet — what should be in writing?
11. Is GetGo cheaper than Grab once I have a Singapore licence?
12. Do I photograph the car every trip to avoid damage invoices?
13. Does a will move my CPF, or do I need a separate CPF nomination?
14. Will a UK probate unfreeze my Singapore bank accounts?

---

---

---

---

---

---

## Loop E — Journeys, checklists, calendar, tools — 2026-09-15 (tick 3)

Branch: `loop/e-journeys-tools-tick3` → PR to `main`. Owns **journeys / checklists / calendar / calculators** only. Did **not** edit pillar guide MDX trees. No ads / Grok.

### Sources mined

**Reddit / forums**

- r/askSingapore — EP resign / STVP folklore ([EP resignation STVP](https://www.reddit.com/r/askSingapore/comments/1ttedbd/ep_question_on_resignation_stvp/); [EP cancel → STVP timing](https://www.reddit.com/r/askSingapore/comments/1jk7dy7/ep_cancellation_stvp_approval/); [LTVP after job loss](https://www.reddit.com/r/askSingapore/comments/1q66ra7/getting_an_ltvp_after_losing_job/)).
- Forum heat: “default 30-day STVP” vs ask-for-90; STVP single-entry; Dependant Pass falls with main EP; IR21 vs same-year rehire.

**Official**

- [MOM — Cancel an Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass) (STVP up to 90 days; cancel within 1 week; related passes cancel).
- [MOM — Job change does not auto-cancel EP](https://www.mom.gov.sg/faq/employment-pass/if-an-ep-or-s-pass-holder-changes-jobs-is-the-existing-pass-automatically-cancelled).
- [IRAS — Working out my tax residency](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/working-out-my-tax-residency) (≥183 days; 3 consecutive years; straddling employment).
- [IRAS — Re-employment in Singapore](https://www.iras.gov.sg/taxes/individual-income-tax/employees/scenario-based-faqs-for-working-in-singapore-and-abroad/i-am-re-employed-in-singapore).
- [Singpass — Work Permit expired/cancelled grace](https://ask.gov.sg/singpass/questions/clul2p4cf003s3b8g1podbru7) (~3 months login; no Myinfo; not immigration status).
- [MOE calendar 2026](https://www.moe.gov.sg/calendar) — Youth Day / Teachers’ Day / Children’s Day.
- [MOM — EP eligibility / 1 Jan 2027 uplift](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility).

### Gaps vs Loop E ticks 1–2

Ticks 1–2 shipped arriving 7/30/90 depth, leaving IR21/STVP/SFA, AEIS/tax calendar, lease-duty + setup-cash + EP tables. Remaining high-intent journey/tool gaps: **between-jobs playbook** (distinct from full exit), **tax-residency day sketch**, **EP salary uplift on calendar**, **MOE Youth/Teachers’/Children’s Day care gaps**. Skipped pillar guide MDX.

### Shipped this tick

**Journeys**

- `content/journeys/between-jobs.json` + `/journeys/between-jobs`
- Journeys index / leaving / arriving nav cross-links
- `day-90.json` — tax-residency tool + between-jobs awareness items
- `leaving-singapore.json` — stay-and-rehire pointer

**Tools**

- `src/lib/tools/tax-residency.ts`
- `src/components/tools/TaxResidencyCalculator.tsx`
- `/tools/tax-residency` + tools index + sitemap

**Calendar**

- `ep-salary-uplift-2027.json` (featured)
- `youth-day-2026.json`, `teachers-day-2026.json`, `childrens-day-2026.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did **not** edit pillar guide MDX trees.

### Questions mined (sample)

1. When my EP cancels between jobs, do I automatically get 90 days STVP?
2. Can I leave Singapore on STVP and fly back on the same visit pass?
3. Does a new IPA auto-cancel my old EP?
4. What happens to my spouse’s Dependant Pass when my EP dies?
5. Does resigning into a new job still trigger IR21?
6. If I work Jan–Mar then Aug–Dec, am I tax resident for that YA?
7. How do I sketch the 183-day calendar-year test before April filing?
8. Does Singpass keep working after EP cancel, and is that the same as lawful stay?
9. When do MOM EP qualifying salaries rise again?
10. Which MOE single-day holidays need backup childcare in 2026?

---

---

---

---

---

## Loop G — SEO, internal linking, hub polish — 2026-09-15 (tick 3)

Branch: `cursor/loop-g-seo-tick3-a144` → PR to `main`. Owns shell/metadata/hubs/crosslink depth only. Did **not** rewrite A–F/H guide bodies; skipped ads inventory / Grok; left tick-1 pillar topics and tick-2 hub OG work alone beyond shell reciprocity.

### Gaps closed

- ~560 one-way `relatedGuides` frontmatter edges still only surfaced same-pillar reverses — shell fill now also prefers **cross-pillar** reverse links (no mass MDX reciprocity edits).
- Service detail pages lacked BreadcrumbList / crumbs and printed raw related-guide slugs.
- `/sponsored` and `/advertise` still used title+description metadata (no canonical/OG via `buildPageMetadata`).
- About / editorial trust pages lacked breadcrumbs and soft reciprocal explore links.
- Entity detail crosslinks used slug title-case instead of real school/neighbourhood names; thin pillar back-links on neighbourhoods/schools/clubs.

### Shipped this loop

- `src/lib/content/guides.ts` — `resolveGuidesBySlug`; `getRelatedGuides` cross-pillar reciprocal fill
- Service detail — breadcrumbs + BreadcrumbList JSON-LD + titled related guides + Life pillar link
- `/sponsored` — `buildPageMetadata` + crumbs + CollectionPage; `/advertise` — canonical/OG only (no inventory expansion)
- `/about` + `/editorial-policy` — breadcrumbs + trust reciprocal links
- Neighbourhood / school / club details — resolve entity display names; deepen hub/pillar reciprocal nav
- `site.ts` — Move↔arrival checklists; Home↔lease-duty tool; Life↔directory; Belong↔directory

### Explicitly not done / notes for other loops

- No mass frontmatter `relatedGuides` rewrites (shell fill handles ranking).
- No new sponsorSlots / featured inventory / advertise product expansion.
- No A–F/H guide body rewrites; no Grok / third-party clone copy.

---

---

## Loop A — Move + Money — 2026-09-15 (tick 6)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `cursor/loop-a-move-money-tick6-49cb` → PR to `main` (worktree off fresh `origin/main` after A5/#46; rebased onto C23/#48 + H6).

### Sources mined

**Reddit**

- r/askSingapore — DP work / LOC / dual-career trap ([Can spouse work on DP](https://www.reddit.com/r/askSingapore/comments/1obgpqo/can_spouse_work_while_on_a_dependent_pass/); [DP career trap](https://www.reddit.com/r/askSingapore/comments/1ranfcm/spouse_got_a_dream_job_offer_in_singapore_but_the/); [DP remote overseas](https://www.reddit.com/r/askSingapore/comments/10qkgfs/does_the_dependent_pass_prevent_me_from_working/); [Jobs as DP](https://www.reddit.com/r/askSingapore/comments/169pt9i/jobs_as_a_dependent_pass_holder/)).
- r/askSingapore — ONE Pass spouse LOC vs ordinary EP DP ([ONE Pass for spouse work](https://www.reddit.com/r/askSingapore/comments/1d9jml1/expats_how_does_my_wife_get_onepass_to_allow_her/); [Zurich→SG ONE Pass / common-law](https://www.reddit.com/r/askSingapore/comments/1cv5alv/zurich_singapore/)).
- r/askSingapore — digital nomad / DP company myths ([DP digital nomad](https://www.reddit.com/r/askSingapore/comments/r1khtp/digital_nomad_moving_to_singapore_on_dependent/)).
- r/askSingapore — CPF on EP myths + shadow pensions ([CPF for foreigners](https://www.reddit.com/r/askSingapore/comments/14avcvv/cpf_for_foreigners/); [Do I get CPF on EP?](https://www.reddit.com/r/askSingapore/comments/112u5q9/do_i_get_cpf_on_ep/)).
- r/askSingapore — bank IPA / address / Singpass chicken-egg ([Open account from abroad](https://www.reddit.com/r/askSingapore/comments/1qp5wh5/opening_a_bank_account_in_singapore_as_a/); [DBS expat address](https://www.reddit.com/r/askSingapore/comments/19amqw7/opening_bank_account_with_dbs_as_expat/); [IPA-only opening](https://www.reddit.com/r/askSingapore/comments/ufns4k/personal_bank_account_opening_procedure/); [No proof of residence](https://www.reddit.com/r/askSingapore/comments/17jok89/open_a_bank_account_without_proof_of_residence/)).

**Official**

- [MOM — ONE Pass eligibility](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/eligibility) + [spouse LOC](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/passes-for-families/dependants-pass-for-overseas-networks-expertise-pass/working-in-singapore) + [one LOC FAQ](https://www.mom.gov.sg/faq/one-pass/can-a-spouse-of-an-onepass-holder-apply-for-multiple-loc)
- [MOM — EntrePass eligibility](https://www.mom.gov.sg/passes-and-permits/entrepass/eligibility) + [Renew an EntrePass](https://www.mom.gov.sg/passes-and-permits/entrepass/renew-a-pass) (TBS/LWF ladder)
- [MOM — DP working in Singapore](https://www.mom.gov.sg/passes-and-permits/dependants-pass/working-in-singapore) + [overseas employer FAQ](https://www.mom.gov.sg/faq/dependants-pass/do-i-need-a-work-pass-if-i-am-self-employed-or-working-for-an-overseas-based-employer)
- [MOM — Can a work pass holder work in multiple jobs?](https://www.mom.gov.sg/faq/work-pass-general/can-a-work-pass-holder-work-in-multiple-jobs)
- [MOM — What is a fixed monthly salary?](https://www.mom.gov.sg/faq/employment-pass/what-is-a-fixed-monthly-salary) + [AWS / variable wages](https://www.mom.gov.sg/employment-practices/salary/variable-wage-components)
- [CPF Board — Who should receive CPF](https://www.cpf.gov.sg/employer/employer-obligations/who-should-receive-cpf-contributions)
- [DBS — Account opening documents](https://www.dbs.com.sg/personal/support/bank-account-opening-documents-required.html)

### Gaps vs prior Loop A ticks (Move + Money scope)

Ticks 1–5 shipped EP floors/COMPASS, EP vs S Pass, CBNI, remittance, IR21/medical, EP-cancel STVP / DP LOC / PayNow / CPF withdrawal, FWTES, job-change IPA, HISA, tax residency, EP medical, salary notify, CC GX, COR, LOG, PEP, Tech.Pass, IPA reassessment, SRS, RSU, foreign income, COL helper, ACRA, pets transit. Remaining high-intent Move/Money gaps matched this mine: **ONE Pass spouse LOC vs ordinary EP DP**, **EntrePass TBS/LWF renewal ladder**, **DP/trailing/side-income FAQPages**, **CPF-on-EP myths**, **bank IPA/address FAQPage**, **fixed monthly salary vs AWS/bonus**. EP renewal NOA / between-jobs STVP remain Next/H-adjacent — left alone.

### Shipped this loop

**Upgraded guides (FAQPage + depth)**

- `content/guides/move/one-pass-singapore.mdx`
- `content/guides/move/entrepass-singapore.mdx` (renewal TBS/LWF table)
- `content/guides/move/dependant-pass-singapore.mdx`
- `content/guides/move/trailing-partner-career-singapore.mdx`
- `content/guides/move/side-income-freelance-work-pass.mdx`
- `content/guides/money/cpf-and-foreigners.mdx`
- `content/guides/money/opening-bank-account-expat.mdx`
- `content/guides/money/salary-package-decoding.mdx` (MOM fixed-salary vs AWS)
- `src/lib/site.ts` (ONE/EntrePass/DP + bank/CPF topic hrefs)
- `content/entities/services/intact-immigration.json` (ONE Pass LOC vs EP DP)

### Explicitly not done

- No ads/monetization expansion (no sponsorSlot / featured).
- No Grok / third-party clone copy.
- Did not re-own Loop H STVP/lost-pass AEO bodies or Loop D EP-renewal NOA.
- Did not edit Family / Belong / Home / Life heavily.

### Questions mined (sample)

1. Is ONE Pass just a fancier PEP?
2. Does my ONE Pass spouse automatically get work rights?
3. Can a ONE Pass spouse hold two LOCs?
4. Do I cancel my EP before applying for ONE Pass?
5. Does ACRA registration get me an EntrePass?
6. What TBS/LWF do I need at second EntrePass renewal?
7. Can my spouse work on an ordinary EP Dependant’s Pass?
8. Can I remote for a US employer while on DP?
9. Can an EP holder freelance or run Grab on the side?
10. Do EP holders get CPF / Medisave?
11. Can I open a bank account with only an IPA and no stamped TA?
12. Does AWS / 13th-month count toward my EP salary floor?

---

---

---

## Loop B — Family + Belong (tick 9) — 2026-09-15

Branch: `cursor/loop-b-family-belong-tick8-8971` → PR to `main`. Owns **Family** + **Belong** guides plus schools/clubs/services entity depth only. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next (MDW stays Home-owned; ActiveSG facilities depth stays Life-owned; HSA personal-med import body stays Move-owned — this tick only cross-links it for ADHD continuity).

### Sources mined

**Reddit / forums**

- r/askSingapore — kids ADHD medication continuity ([recently moved ADHD meds](https://www.reddit.com/r/askSingapore/comments/182euk3/recently_moved_to_singapore_how_do_we_get/), [private vs public ADHD meds](https://www.reddit.com/r/askSingapore/comments/1ney5b8/adhd_medication_in_singapore_private_or_public/), [expat kids assessment](https://www.reddit.com/r/askSingapore/comments/1hg0srx/what_is_the_general_process_for_seeking_advice_on/), [HSA form timing](https://www.reddit.com/r/askSingapore/comments/1q326zx/i_didnt_know_i_was_supposed_to_get_approval_to/)).
- r/askSingapore — Mandarin enrichment for non-Mandarin homes ([Berries](https://www.reddit.com/r/askSingapore/comments/1i12wnc/is_berries_worth_it_asking_parents_of_singapore/), [LingoAce](https://www.reddit.com/r/askSingapore/comments/1ls4t8u/lingoace_chinese_lessons_are_they_good/), [home Chinese tutor](https://www.reddit.com/r/askSingapore/comments/1n9uvgo/where_to_find_fun_and_engaging_home_chinese_tutor/), [Mandarin-focus school shortlist](https://www.reddit.com/r/askSingapore/comments/1j6qcys/question_can_someone_help_me_with_choosing_a/)).
- r/askSingapore — Belong book / hiking rails ([book clubs](https://www.reddit.com/r/askSingapore/comments/1gymqok/book_clubs_in_singapore/), [hobby groups / trekking + reading](https://www.reddit.com/r/askSingapore/comments/1tpvlq4/are_there_any_hobby_groups_in_singapore_to_join/), [interest groups](https://www.reddit.com/r/askSingapore/comments/1liawk2/where_to_find_interest_groups_in_sg/), [Rail Corridor hiking company](https://www.reddit.com/r/askSingapore/comments/zu4kv3/how_can_i_find_like_minded_people_who_wanted_to/)).

**Official**

- [HSA — Travelling with personal medications](https://www.hsa.gov.sg/travelling-with-medication-and-medical-devices/personal-medications/) + [check requirements](https://www.hsa.gov.sg/personal-medication/check-requirements).
- [IMH Child Guidance Clinic](https://www.imh.com.sg/Clinical-Services/Outpatient-Clinics/Pages/Child-Guidance-Clinic.aspx) + [appointments / referrals](https://www.imh.com.sg/Patients-and-Visitors/Pages/Appointments-and-Referrals.aspx) + [KKH Child Development](https://www.kkh.com.sg/our-specialties/child-development) + [MOH ADHD note](https://www.moh.gov.sg/newsroom/attention-deficit/).
- [MOE — Mother Tongue Languages](https://www.moe.gov.sg/primary/curriculum/mother-tongue-languages) + [Studying in Singapore](https://www.moe.gov.sg/international-students/studying-in-singapore) + [NLB](https://www.nlb.gov.sg/).
- [NLB Book Clubs](https://readingnation.nlb.gov.sg/initiatives/book-clubs/) + [NParks guided tours](https://www.nparks.gov.sg/visit/activities/nature-walks-tours/guided-tours).

### Gaps vs prior Loop B ticks

Ticks 1–7 covered schools/waitlists/SEN/camps/clubs/volunteering/LGBTQ/dual-career, newborn/leave/vaccines, IVF/maternity/divorce/PPO, Reclub/parkrun, school-bus/Mandarin-thin/preschool/chambers/faith, confinement-nanny WP/levy, indoor hobby belonging, AEIS 2026, allergy/EpiPen, IB vs A-Level, music/arts belonging. Remaining Family/Belong heat: **kids ADHD stimulant continuity** (HSA + local psychiatry; Adderall gaps), **dedicated Mandarin enrichment product map** beyond the thin kids-activities / IS asides, **book-club + hiking belonging** for non-sport / non-music personalities.

### Shipped this loop

**New guides**

- `content/guides/family/kids-adhd-medication-singapore.mdx`
- `content/guides/family/mandarin-enrichment-expat-kids-singapore.mdx`
- `content/guides/belong/book-hiking-communities-singapore.mdx`

**Upgraded guides**

- `content/guides/family/special-needs-support.mdx` (ADHD continuity cross-link)
- `content/guides/family/finding-pediatrician-singapore.mdx`
- `content/guides/family/mental-health-resources.mdx`
- `content/guides/family/kids-allergy-epipen-singapore.mdx`
- `content/guides/family/kids-activities-holiday-camps.mdx` (Mandarin section → dedicated guide)
- `content/guides/family/international-schools-landscape.mdx`
- `content/guides/belong/find-my-people-singapore.mdx`
- `content/guides/belong/indoor-hobby-communities-singapore.mdx`
- `content/guides/belong/hobby-sports-communities-singapore.mdx`
- `content/guides/belong/music-arts-communities-singapore.mdx`
- `src/lib/site.ts` (Family + Belong topic rails)

**Entity depth (schools / clubs / services)**

- `content/entities/schools/canadian-international-school.json`
- `content/entities/clubs/british-association.json`
- `content/entities/services/mental-health-counselling.json`
- `content/entities/services/the-tutors.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not rewrite Move HSA personal-med body (cross-link only); no MDW / ActiveSG facilities / Tuition Grant bond rewrites.

### Questions mined (sample)

1. Will a polyclinic refill my child’s overseas Concerta prescription?
2. Do I need HSA approval to land with methylphenidate for my kid?
3. Is Adderall available in Singapore, or do we switch molecules?
4. Private child psychiatrist vs IMH Child Guidance Clinic — which for EP/DP cash?
5. Will my preschool accept a US 504 plan without a local psychiatrist letter?
6. Is Berries worth it if nobody speaks Mandarin at home?
7. Should we buy LingoAce packages or trial a home tutor first?
8. Is CIS bilingual track enough, or do we still need outside enrichment?
9. Does IS optional Mandarin equal MOE Chinese for AEIS later?
10. Where do readers find friends if board games and pickleball are not the rail?
11. Are NLB book clubs actually open to foreigners with a library card?
12. Is Facebook “Singapore Hikers” safer than solo MacRitchie for soft landing?
13. Do NParks guided walks create weak ties, or just tourist groups?
14. Can trailing partners host an NLB-style book club as a belonging cheat code?

---

---

## Loop B — Family + Belong (tick 8) — 2026-09-15

Branch: `loop/family-belong-tick8` → PR to `main`. Owns **Family** + **Belong** guides plus schools/clubs entity depth only. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next (MDW stays Home-owned; HSS cleaning adjacency cited only; ActiveSG stays Life-owned).

### Sources mined

**Reddit / forums**

- r/askSingapore — part-time babysitter / day nanny vs live-in ([part-time caregiver](https://www.reddit.com/r/askSingapore/comments/1iavktv/where_to_find_part_time_child_caregiver/); [part-time instead of live-in](https://www.reddit.com/r/askSingapore/comments/1kx7bj4/can_we_have_a_parttime_helpernanny_instead_of/); [nanny hire services](https://www.reddit.com/r/askSingapore/comments/1rqowk6/has_anyone_used_nanny_hire_services_and_what_do/); [babysitters](https://www.reddit.com/r/askSingapore/comments/xrlycz/babysitters_in_singapore/)).
- r/askSingapore — university counselling / IS exits ([HCIS](https://www.reddit.com/r/askSingapore/comments/1p7y994/hwa_chong_international_school_thoughts/); [SJII/HCI/ACI](https://www.reddit.com/r/askSingapore/comments/1r8hxmi/have_you_attended_sjii_hci_or_aci/); [SJII vs Dulwich](https://www.reddit.com/r/askSingapore/comments/1p8egox/saint_josephs_international_or_dulwich/); [IS worth it](https://www.reddit.com/r/askSingapore/comments/1e9e01p/are_international_schools_in_singapore_worth_it/)).

**Official**

- [MOM — Household Services Scheme](https://www.mom.gov.sg/faq/work-permit-for-foreign-worker/what-is-household-services-scheme) (part-time company services; child-minding concession wind-down note).
- [MOM — Confinement nanny](https://www.mom.gov.sg/passes-and-permits/work-permit-for-confinement-nanny) + [MDW](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker) (product separation).
- [MOE — Post-secondary admissions](https://www.moe.gov.sg/post-secondary/admissions) + [IB university admissions](https://www.ibo.org/university-admission/).
- [NLB](https://www.nlb.gov.sg/) learning communities.

### Gaps vs prior Loop B ticks

Ticks 1–7 covered schools/SEN/camps/clubs/volunteering/LGBTQ, newborn/leave/vaccines, IVF/maternity/divorce, Reclub/parkrun, school-bus/Mandarin/preschool/chambers/faith, confinement WP, indoor hobbies, allergy/EpiPen, IB/A-Level, music belonging. Remaining heat: **ad-hoc/part-time babysitter legal lanes vs MDW moonlighting myths**, **IS university counselling ops**, **book-club belonging** for introverts.

### Shipped this loop

**New guides**

- `content/guides/family/part-time-babysitter-nanny-singapore.mdx`
- `content/guides/family/university-counselling-international-schools-singapore.mdx`
- `content/guides/belong/book-clubs-reading-communities-singapore.mdx`

**Upgraded guides**

- `content/guides/family/confinement-nanny-postpartum-singapore.mdx`
- `content/guides/family/preschool-childcare-singapore.mdx`
- `content/guides/family/secondary-ib-alevel-pathways-singapore.mdx`
- `content/guides/belong/find-my-people-singapore.mdx`
- `content/guides/belong/indoor-hobby-communities-singapore.mdx`

**Entity depth**

- `content/entities/schools/hwa-chong-international.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not edit Move / Money / Home / Life / Next trees (no MDW ownership rewrite).

### Questions mined (sample)

1. Can I hire my neighbour’s FDW for evening babysitting on her rest day?
2. Is a part-time foreign cleaner via HSS the same as a babysitter?
3. Will ad-hoc platform nannies show up every weekday for months?
4. When does hourly babysitting cost more than a junior MDW all-in?
5. How is a day nanny different from a confinement nanny?
6. What counsellor caseload should I ask for before paying an IS deposit?
7. Do HCIS exits skew UK more than US without SAT prep?
8. Can IGCSE grads casually enter a local JC for A-Levels?
9. When should mobile families book university counselling — DP1 or DP2 panic?
10. Where do introverts find book clubs without a country-club membership?
11. Are NLB learning communities open to foreigners?
12. Should SJII vs HCIS decisions weight counselling lists or only IB branding?

---
## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 7)

Branch: `loop/next-polish-tick7` → PR to `main`. Owns **Next** guides plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home / Life body trees (Move keeps arrival LTVP / DP survey; divorce stays Family-owned; Next deepens spouse LTVP / PLOC / student PR only).

### Sources mined

**Reddit / forums**

- r/askSingapore — spouse LTVP / PMLA / processing ([LTVP when spouse is PR](https://www.reddit.com/r/askSingapore/comments/1clukc0/topic_applying_for_ltvp_when_your_spouse_is_a/); [LTVP best practices + PLOC](https://www.reddit.com/r/askSingapore/comments/1r1awpl/questions_on_best_practicerequirements_for_ltvp/); [LTVP processing 2025](https://www.reddit.com/r/askSingapore/comments/1j01dhw/ltvp_application_process_time_2025/); [2026 processing heat](https://www.reddit.com/r/askSingapore/comments/1sfnn0r/this_years_ltvp_processing_time/)).
- r/askSingapore — PLOC / LOC work rights on ICA LTVP (same LTVP threads + MOM PLOC FAQs peers cite).
- r/askSingapore — student PR / national-exam folklore ([O Levels private candidate](https://www.reddit.com/r/askSingapore/comments/1ipvk6q/can_an_international_student_get_approved_for_pr/); [uni student PR](https://www.reddit.com/r/askSingapore/comments/ztk7q4/singapore_pr_for_university_students/); [GCE exam myth](https://www.reddit.com/r/askSingapore/comments/1g8r2pu/singapore_now_eases_pr_path_for_international/); [SIM GE rejection](https://www.reddit.com/r/askSingapore/comments/zd2j6k/help_foreign_uni_student_applying_for_pr_first/)).

**Official**

- [ICA — Becoming a Long-Term Visit Pass Holder](https://www.ica.gov.sg/reside/LTVP) (SC vs PR spouse rows; fees; renew)
- [ICA — Spouse of a Singapore Citizen (LTVP)](https://www.ica.gov.sg/reside/LTVP/apply/spouse-of-a-singapore-citizen-(sc))
- [ICA — Spouse of a Singapore PR (LTVP)](https://www.ica.gov.sg/reside/LTVP/apply/spouse-of-a-singapore-permanent-resident-(pr))
- [ICA — Pre-Marriage LTVP Assessment (PMLA)](https://www.ica.gov.sg/reside/pre-marriage-long-term-visit-pass-assessment) (SC-only; LLE 1 year; 7-day draft; WP marriage approval)
- [MOM — PLOC eligibility / key facts / taking up employment / restricted occupations](https://www.mom.gov.sg/passes-and-permits/pre-approved-letter-of-consent/eligibility)
- [MOM — Work passes for ICA-issued LTVP holders](https://www.mom.gov.sg/passes-and-permits/work-passes-for-holders-of-long-term-visit-passes-issued-by-ica)
- [ICA — Becoming a Permanent Resident](https://www.ica.gov.sg/reside/PR) (student exam/IP row; NS liability for student PR)

### Gaps vs prior ticks

Tick 6 shipped spouse-sponsored PR, aged-parent PR vs LTVP, EP renewal NOA. Remaining high-intent **Next** gaps matched this mine: **spouse LTVP + PMLA** (SC-only PMLA; PR sponsors have no PMLA; LLE ≠ LTVP), **PLOC vs employer LOC** for ICA spouse/child LTVP (not graduate LTVP; not self-employed; restricted media/religion jobs), **student PR** (exam/IP row; live ICA table has no printed multi-year residency floor — crush private-exam folklore; male NS disruption). About + editorial research language updated.

### Shipped

**New:** `spouse-ltvp-pmla-singapore.mdx`, `ploc-loc-ica-ltvp-singapore.mdx`, `pr-for-student-singapore.mdx`

**Upgraded:** `pr-for-spouse-singapore.mdx`, `pr-application-strategy.mdx`, `graduate-ltvp-job-hunt.mdx`, `after-getting-pr-checklist.mdx`, `renewing-life-admin-annually.mdx`; `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No Move/Money/Family/Belong/Home/Life body edits (Move LTVP / DP surveys left alone beyond Next cross-links).

### Questions mined

1. Is PMLA available when my sponsor is a PR rather than a citizen?
2. Does a positive PMLA Letter of Eligibility equal LTVP approval?
3. How long is the LLE valid, and what is the 7-day PMLA draft rule?
4. Why is SC spouse LTVP up to 6 months without PMLA but ~6 weeks with it?
5. What fees does ICA publish for spouse LTVP submission and issuance?
6. Do existing/former Work Permit holders need MOM marriage approval before marrying an SC/PR?
7. Does LTVP alone let my foreign spouse work in Singapore?
8. What is the difference between PLOC and an employer LOC?
9. Can PLOC holders be self-employed or take media/religion jobs?
10. When must an employer notify MOM if a PLOC holder starts or leaves work?
11. Can a graduate-seeking-employment LTVP use PLOC?
12. Does passing private O Levels make student PR likely — and what does ICA’s live student row actually list?

---

## Loop C — Home + Life (parallel) — Tick 23 — 2026-09-15

Branch: `loop/home-life-t23` → PR to `main`. Owns **Home** + **Life** guides and neighbourhood entities only.

### Sources mined

**Reddit**

- r/askSingapore — lease renewal / rent-increase ambushes and negotiation ([S$2.3k→S$3.2k](https://www.reddit.com/r/askSingapore/comments/16ababb/singapore_lease_renewal_from_s2300_top_s3200_is/); [same-day +S$300](https://www.reddit.com/r/askSingapore/comments/1021pl0/the_state_agent_of_my_flat_told_me_my_rent_was/); [negotiate extension](https://www.reddit.com/r/askSingapore/comments/1q3demy/how_to_negotiate_rent_extension/); [early renewal notice](https://www.reddit.com/r/askSingapore/comments/16zf8uc/rental_renewal/)).
- r/askSingapore — landlord entry / quiet enjoyment / keys ([quiet enjoyment implied?](https://www.reddit.com/r/askSingapore/comments/1gxpm7w/is_the_quiet_enjoyment_clause_a_common_law_rights/); [landlord trespass](https://www.reddit.com/r/askSingapore/comments/18vvh4f/can_a_landlord_trespass/); [enter while away](https://www.reddit.com/r/askSingapore/comments/13805zc/is_it_against_the_law_for_landlord_to_enter_your/); permission norms adjacency).
- r/askSingapore — dengue reporting + HDB refuse-chute fogging ([report stagnant water](https://www.reddit.com/r/askSingapore/comments/1i4rzk5/something_about_reporting_to_nea_for_dengue/); [fog from chute](https://www.reddit.com/r/askSingapore/comments/18fvvf9/fumigation_fog_coming_out_from_rubbish_chute/); [tape chute gaps](https://www.reddit.com/r/askSingapore/comments/1rsjkr5/can_i_contact_hdb_to_do_a_test_to_see_if_my/)).
- r/askSingapore — neighbourhood shortlists for Toa Payoh / Ang Mo Kio / Bedok belts (HDB vs condo budget threads; east vs central-north heartland asks).

**Official**

- [CEA — Tenancy templates](https://www.cea.gov.sg/real-estate-professionals/agreements-and-checklists/) + [renting guidance](https://www.cea.gov.sg/consumers/engaging-a-property-agent/renting-or-renting-out/).
- [URA — Private residential rental contracts](https://eservice.ura.gov.sg/property-market-information/pmiResidentialRentalSearch).
- [HDB — Rental statistics](https://www.hdb.gov.sg/business/estate-agents-and-salespersons/renting-a-flat/rental-statistics).
- [IRAS — Stamp duty when renting](https://www.iras.gov.sg/taxes/stamp-duty/for-property/renting-a-property).
- [NEA — Dengue clusters](https://www.nea.gov.sg/dengue-zika/dengue/dengue-clusters) + [home inspection](https://www.nea.gov.sg/dengue-zika/inspecting-your-homes-and-premises-for-mosquito-habitats).
- [OneService — App FAQs](https://www.oneservice.gov.sg/osapp-faq/).

### Gaps vs Tick 22 (Home + Life slice)

Tick 22 shipped early lease exit, bed-bug / habitability pest escalation, PUB flash-flood checks, Bishan / Sengkang / Queenstown entities. Remaining high-intent Home+Life gaps matched forum heat: **lease renewal without rent-control caps + URA/HDB comps**, **landlord entry / quiet enjoyment / key control**, **dengue cluster living + HDB chute fogging ops** (emergencies already covered door inspections), plus neighbourhood entity depth for **Toa Payoh**, **Ang Mo Kio**, and **Bedok**. Stamp duty already covered under renting-process — left alone beyond renewal re-stamp pointers.

### Shipped this tick

**New guides**

- `content/guides/home/lease-renewal-rent-increase.mdx`
- `content/guides/home/landlord-entry-quiet-enjoyment.mdx`
- `content/guides/life/dengue-cluster-living-renters.mdx`

**Upgraded guides (depth + citations + cross-links + lastReviewed 2026-09-15)**

- `content/guides/home/aircon-pest-renewals.mdx` (chute fogging deep-link + renewal pointer)
- `content/guides/home/renting-process-loi-ta-deposits.mdx` (entry + renewal asks)
- `content/guides/home/security-deposit-diplomatic-clause.mdx` (renewal / entry related)
- `content/guides/home/early-lease-termination-tenants.mdx` (renewal adjacency)
- `content/guides/home/choosing-neighbourhood-expat.mdx` (Toa Payoh / AMK / Bedok)
- `content/guides/home/heartland-living-for-expats.mdx` (entity shortlist + dengue/chute)
- `content/guides/life/emergencies-995-999-embassies.mdx` (cluster living deep-link)
- `content/guides/life/haze-climate-preparedness.mdx` (dengue climate stack)
- `content/guides/life/apps-that-matter-singapore.mdx` (OneService row)
- `src/lib/site.ts` (Home renewal/entry topics; Life dengue topic; neighbourhood blurb)

**Neighbourhood entity depth**

- `content/entities/neighbourhoods/toa-payoh.json`
- `content/entities/neighbourhoods/ang-mo-kio.json`
- `content/entities/neighbourhoods/bedok.json`

### Explicitly not done

- No ads/monetization expansion (existing sponsorSlots left as-is).
- No copying of third-party “expat-sg” / Grok clones.
- Did not edit Move/Money/Family/Belong/Next guides owned by other loops.
- Did not re-litigate Tick 19–22 fibre/mould/CDRT/HDB-sale/construction/early-exit/flood topics beyond cross-links.

### Questions mined (sample)

1. Is there a legal percentage cap on rent increases at lease renewal in Singapore?
2. Can my landlord raise rent mid-lease, or only when the fixed term ends?
3. When should I start renewal talks relative to the notice clause in my TA?
4. Are PropertyGuru asking prices a valid comps set for negotiation?
5. Do I need to re-stamp IRAS lease duty when we renew at a higher rent?
6. Can the landlord enter with spare keys while I am at work?
7. Is “quiet enjoyment” about neighbour noise, or exclusive possession?
8. Must I allow buyer / re-let viewings in the last two months?
9. What do red vs yellow NEA dengue clusters mean for my estate?
10. Should I tape my HDB rubbish chute before Town Council fogging?
11. Where do I report stagnant water without starting a neighbour war?
12. Toa Payoh vs Ang Mo Kio vs Bedok — which fits NSL CBD vs EWL east office?

---

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 6)

Branch: `loop/story-aeo-tick6` → PR to `main`. Owns **journey completeness** and **answer-engine shape** after tick 5’s pets / wrong PayNow / vaping FAQPages. Did **not** expand ads/monetization or collide with open Loop A–G body rewrites (EP eligibility / job-change / Multiplier, Home/HDB, SEO shell, services directory, Family/Belong left alone).

### Sources mined

**Reddit / forums (shaped questions)**

- r/askSingapore — WhatsApp “bank fraud” / fake police / OTP phishing against new EP holders; mule “side job” ads asking for EP photos.
- r/askSingapore — lost wallet / JB weekend / airline check-in without plastic FIN card; wrong-agency blue NRIC vs MOM card.
- r/askSingapore — JB visa-run folklore while waiting for IPA / Student’s Pass; overstay anxiety on 30-day stamps.

**Official**

- [ScamShield](https://www.scamshield.gov.sg/) + helpline **1799** + [gov.sg SMS sender](https://sms.gov.sg/) + [GovTech Singpass hygiene](https://www.tech.gov.sg/technews/five-ways-to-keep-your-singpass-safe/).
- [MOM — Replace an Employment Pass card](https://www.mom.gov.sg/passes-and-permits/employment-pass/replace-a-pass-card) + [SGWorkPass](https://www.mom.gov.sg/eservices/sgworkpass) (digital pass does **not** waive 1-week replacement).
- [ICA — Seeking Extension of Visit Pass](https://www.ica.gov.sg/enter-transit-depart/extend-stay) (online only; ≤14 days remaining; ~5 working days; sponsor rules).

### Gaps vs ticks 1–5

Ticks 1–5 shipped SIM→Singpass→bank, SGAC, healthcare/emergency, IPA/EPSC, SimplyGo, serviced apartment, Changi Grab/taxi, CBNI + PayNow setup/recovery, HSA meds, licence conversion, household GST, pets, vaping. Remaining high-intent **week-one security / card-loss / visit-clock** gaps: **Singpass phishing without FAQPage/direct lead**, **lost work-pass card without FAQPage** (SGWorkPass myth under-weighted), **ICA STVP extension without FAQPage** (≤14-day window + JB myth; distinct from MOM post-cancel STVP).

### Shipped this tick

**Upgraded (AEO / journey polish)**

- `content/guides/life/scams-singpass-phishing-expats.mdx` (direct lead + FAQPage)
- `content/guides/next/lost-replace-work-pass-card.mdx` (direct lead + FAQPage)
- `content/guides/move/short-term-visit-pass-extension.mdx` (direct lead + FAQPage; ICA ≤14-day / online clocks)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / competitor clone copy.
- Did not wholesale rewrite Loop A–G guides (Family/Belong, Home/HDB, EP eligibility / Multiplier, SEO shell, services directory left alone).

### Questions mined (sample)

1. Will the police or my bank ask me to transfer money to a “safe” account?
2. What should new EP holders install in week one against scams?
3. I already shared OTP or clicked a Singpass link — what now?
4. Is a job ad asking for EP front/back photos plus a selfie safe?
5. Does ScamShield replace calling the bank after a phishing hit?
6. I lost my EP card — what do I do first?
7. Does SGWorkPass mean I can skip replacing the physical card?
8. How much does MOM charge to replace a lost EP card?
9. Can I fly or re-enter without the plastic FIN card?
10. Is a lost blue PR NRIC replaced the same way as an EP card?
11. Can I extend my STVP while waiting for an EP or Student’s Pass?
12. When should I apply for an ICA STVP extension?
13. Can I walk into ICA to extend my visit pass?
14. Will a JB weekend “refresh” my visit pass safely?
15. Can I work while on an extended visit pass waiting for IPA?

### Answer-engine shapes

- **FAQPage** JSON-LD via `faqs[]` on all three guides (5 Qs each).
- Direct-answer leads (~40–60 words) before narrative.
- Decision tables (scam non-negotiables / week-one hardening; MOM fee table; ICA extension clocks).
- Numbered recovery / replacement / extension checklists with official citations.

---

## Loop G — SEO, internal linking, hub polish — 2026-09-15 (tick 2)

Branch: `loop/seo-crosslinks-tick2c` → PR to `main`. Owns shell/metadata/hubs/light cross-links only. Did **not** rewrite A–F/H guide bodies; skipped ads / Grok; left Loop G tick 1 pillar topic + guide relatedGuides work alone.

### Gaps closed

- Root layout forced `canonical: "/"` onto every child route that lacked its own `alternates` — removed so page-owned canonicals win.
- Directory / journeys / tools / calendar hubs still used title+description only (no OG/Twitter/canonical via `buildPageMetadata`).
- Mode hubs and directory indexes lacked breadcrumbs + CollectionPage JSON-LD.
- Neighbourhood / school / club detail pages lacked BreadcrumbList trails and pillar back-links (orphan risk).
- Thin reciprocal shell links: Money↔tools, Next↔leaving playbook, journeys↔Arriving/Move/Next, tools↔guides.

### Shipped this loop

- `src/app/layout.tsx` — drop inherited homepage canonical
- Hub indexes — `buildPageMetadata` + breadcrumbs + CollectionPage where useful (neighbourhoods, schools, clubs, directory + categories, journeys + arriving + leaving + phases, tools + COL/EP/setup-cash/lease-duty, calendar)
- `ModeHub` — breadcrumbs + CollectionPage JSON-LD
- `DirectoryHero` — optional `crumbs`
- Detail pages — breadcrumbs + pillar reciprocal links
- `PillarPage` — featured “browse all” deep-links to `/guides#pillar-*`
- `site.ts` — Money related → tools; Next related → leaving playbook
- Homepage — `buildPageMetadata` spread for OG url/canonical while keeping absolute title

### Explicitly not done / notes for other loops

- No mass `relatedGuides` frontmatter reciprocity edits.
- Skipped advertise / sponsored surfaces (ads).
- No A–F/H guide body rewrites.

---

## Loop A — Move + Money — 2026-09-15 (tick 5)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `loop/move-money-tick5` (rebased onto latest main after Loop H pets FAQPage).

### Sources mined

**Reddit**

- r/askSingapore — PEP one-shot / overseas apply timing ([Pros and cons of PEP](https://www.reddit.com/r/askSingapore/comments/1hff5n2/pros_and_cons_of_personalized_employment_pass/); [Job Hunt and PEP overseas](https://www.reddit.com/r/askSingapore/comments/1dxd5ox/job_hunt_and_pep_when_to_apply_from_overseas/); [PEP + tech.pass](https://www.reddit.com/r/askSingapore/comments/n5ew8q/requirements_for_job_hunting_in_singapore_and/)).
- r/askSingapore — IPA reassessment / postpone arrival ([What does EP reassessment mean?](https://www.reddit.com/r/askSingapore/comments/1izbe21/what_does_employment_pass_reassessment_mean/); [EP appeal chances](https://www.reddit.com/r/askSingapore/comments/1jehp27/job_offer_rejected_due_to_ep_issues_what_are_my/)).
- r/askSingapore — COMPASS campus / SAT myths ([COMPASS university campus](https://www.reddit.com/r/askSingapore/comments/1q00yh8/question_about_employment_pass_compass_framework/)).
- r/askSingapore — SRS exit withholding / early top-up trap ([SRS Investment](https://www.reddit.com/r/askSingapore/comments/13ogmnh/srs_investment/); [job-loss SRS](https://www.reddit.com/r/askSingapore/comments/187h2wf/in_light_of_losing_my_job_24_hours_ago_i_have_a/); [moving timing + SRS](https://www.reddit.com/r/askSingapore/comments/19b12g0/moving_to_sg_timing_for_income_tax_foreigner/)).
- r/askSingapore — RSU/ESOP no-local-entity filing ([ESOP no local entity](https://www.reddit.com/r/askSingapore/comments/1it3g96/esop_tax_filing_but_my_company_does_not_have_a/); [RSU tax](https://www.reddit.com/r/askSingapore/comments/oh9u7v/do_i_have_to_pay_income_tax_on_rsus_as_part_of_my/)).
- r/askSingapore — foreign income remittance myths + COL/helper stack ([income tax overseas](https://www.reddit.com/r/askSingapore/comments/16eeijh/income_tax_for_2024/); [family of 4](https://www.reddit.com/r/askSingapore/comments/1l8sdak/moving_to_sg_as_a_young_family_of_4/); [helper costs](https://www.reddit.com/r/askSingapore/comments/1llhf9w/opinions_on_getting_a_helper_in_singapore/)).
- r/askSingapore — ACRA/nominee / self-sponsor EP myths ([which visa start company](https://www.reddit.com/r/askSingapore/comments/1762o0u/which_visa_will_allow_me_to_start_a_company_in/); [launching business](https://www.reddit.com/r/askSingapore/comments/1ejq9y5/expats_launching_a_business_in_singapore/)).
- Pets transit-loophole FAQ only (Loop H tick 5 already shipped core pet FAQPage).

**Official**

- [MOM — PEP eligibility](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass/eligibility)
- [EDB — Tech.Pass](https://www.edb.gov.sg/en/incentives-and-programmes/incentives-and-facilitation-programmes/tech-pass.html)
- [IRAS — Tax on SRS withdrawals](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/special-tax-schemes/tax-on-srs-withdrawals)
- [IRAS — Income received from overseas](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/what-is-taxable-what-is-not/income-received-from-overseas) + [ESOP/ESOW e-Tax Guide](https://www.iras.gov.sg/docs/default-source/e-tax/etaxguides_iit_esop_2026-01-30.pdf)
- [ACRA — Requirements for foreigners](https://www.acra.gov.sg/register/business/requirements-eligibility/)

### Gaps vs prior Loop A ticks (Move + Money scope)

Ticks 1–4 shipped EP floors/COMPASS overview, EP vs S Pass, CBNI, remittance, IR21/medical portability, EP-cancel STVP / DP LOC / PayNow / CPF, FWTES, job-change IPA, HISA (Multiplier/OCBC/UOB), ≥1-year tax residency, EP medical, salary/occupation notify, CC GX, COR, LOG. Remaining high-intent gaps matched this mine: **PEP one-shot + overseas apply**, **Tech.Pass vs PEP FAQ**, **IPA reassessment**, **COMPASS SAT≠guarantee / campus FAQ**, **SRS foreigner withholding**, **RSU no-local-entity FAQ**, **foreign-income remittance myths**, **COL helper all-in**, **ACRA/self-sponsor myths**, plus **pets transit-loophole** additive to Loop H’s FAQPage. EP renewal NOA / between-jobs STVP remain Next-owned.

### Shipped this loop

**Upgraded guides (FAQPage + depth)**

- `content/guides/move/personalised-employment-pass-pep.mdx`
- `content/guides/move/tech-pass-singapore.mdx`
- `content/guides/move/ep-rejection-appeal-ipa-issuance.mdx` (IPA reassessment)
- `content/guides/move/compass-framework-explained.mdx`
- `content/guides/move/importing-pets-singapore.mdx` (transit-loophole FAQ additive only)
- `content/guides/move/incorporate-company-foreigner-singapore.mdx`
- `content/guides/money/srs-investing-as-foreigner.mdx` (24%/15% withholding table)
- `content/guides/money/rsu-esop-tax-singapore.mdx`
- `content/guides/money/foreign-income-and-tax.mdx`
- `content/guides/money/cost-of-living-by-household.mdx` (helper all-in)
- `src/lib/site.ts` (PEP/IPA + SRS/RSU/foreign-income topic hrefs)
- `content/entities/services/intact-immigration.json` (IPA reassessment)

### Explicitly not done

- No ads/monetization expansion.
- No Grok / third-party clone copy.
- Did not re-own Loop H’s pets/wrong-PayNow AEO bodies beyond the transit-loophole FAQ.
- Did not edit Family / Belong / Home / Life / Next heavily.

### Questions mined (sample)

1. Should I switch from EP to PEP when renewal looks easy?
2. Can I apply for PEP from overseas before I have a Singapore job?
3. What happens when my PEP expires after three years?
4. Is Tech.Pass the same as PEP?
5. What does IPA reassessment / postpone arrival mean?
6. Does a green SAT screenshot guarantee EP approval?
7. Does my university’s overseas campus count for 20 COMPASS points?
8. Should an EP holder contribute to SRS in year one if they might leave?
9. If I lose my job in December, can I still top up SRS safely?
10. My US parent has no Singapore entity — how do I report RSU/ESOP gains?
11. Is foreign income remitted into DBS taxable?
12. Is S$12k/month enough for a family of four paying international school?
13. Can I incorporate then hire myself on an EP?
14. Can I avoid pet quarantine by flying via a low-risk country?

---

---

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 6)

Branch: `loop/next-polish-tick6` → PR to `main`. Owns **Next** guides plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home / Life body trees (EP salary notify stays Move-owned; divorce custody stays Family-owned; Next cross-links only).

### Sources mined

**Reddit / forums**

- r/askSingapore — spouse PR sponsorship / LTVP bridge ([SC/PR marry foreigner guide](https://www.reddit.com/r/askSingapore/comments/15ji6jz/guide_what_to_do_if_youre_a_sc_or_pr_that_wants/); [husband sponsorship rejected](https://www.reddit.com/r/askSingapore/comments/1g2npsc/husband_pr_by_local_sponsorship_rejected/); [convert foreigner spouse](https://www.reddit.com/r/askSingapore/comments/1pfkl1x/advice_for_route_to_convert_foreigner_spouse/); [reference letters](https://www.reddit.com/r/askSingapore/comments/1ebjj8i/is_it_good_to_have_reference_letter_for_pr/)).
- r/askSingapore — aged parents PR vs LTVP ([new citizen bring parents](https://www.reddit.com/r/askSingapore/comments/1qbhxf4/how_much_would_a_new_citizen_need_to_earn_to/); [aged parent age folklore](https://www.reddit.com/r/askSingapore/comments/t7yrg6/looking_for_advice_my_mum_wants_me_citizen_to/); [sponsor mum citizenship](https://www.reddit.com/r/askSingapore/comments/1etf7j8/may_be_a_bit_of_a_dumb_question_but_can_i/); [mum SC rejection](https://www.reddit.com/r/askSingapore/comments/1qhyht7/i_dont_understand_why_my_mom_keeps_getting/)).
- r/askSingapore — EP renewal NOA / salary mismatch ([MOM request NOA](https://www.reddit.com/r/askSingapore/comments/1slvkfe/do_mom_usually_request_noa_for_ep_renewal/); IR8A adjacency: [IR8E/IR8A](https://www.reddit.com/r/askSingapore/comments/1j9nr27/ir8e_document_from_previous_employer/)).

**Official**

- [ICA — Becoming a Permanent Resident](https://www.ica.gov.sg/reside/PR) (spouse + aged-parent rows; fees; Singpass)
- [ICA — Becoming a Long-Term Visit Pass Holder](https://www.ica.gov.sg/reside/LTVP) (parent of SC/PR; in-laws excluded; fees)
- [ICA — PR document checklist (PDF)](https://www.ica.gov.sg/docs/default-source/ica/ipses/pr-document-checklist.pdf)
- [MOM — Renew an Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/renew-a-pass)
- [MOM — Notify MOM of EP updates](https://www.mom.gov.sg/passes-and-permits/employment-pass/notify-mom-of-changes)
- [IRAS — Notice of Assessment](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/notices-and-forms/notice-of-assessment)

### Gaps vs prior ticks

Tick 5 shipped child PR, NRIC name change, REP passport transfer. Remaining high-intent **Next** gaps matched this mine: **spouse-sponsored PR** (strategy page was row-thin), **aged-parent PR vs parent LTVP** (SC-only PR; PR children on LTVP; no published “aged” number), **EP renewal NOA / IR8A document asks** (Loop A deferred deep-dive to Next). About + editorial research language updated.

### Shipped

**New:** `pr-for-spouse-singapore.mdx`, `aged-parents-pr-ltvp-singapore.mdx`, `ep-renewal-noa-documents.mdx`

**Upgraded:** `ep-renewal-strategy.mdx`, `pr-application-strategy.mdx`, `pr-for-child-newborn-singapore.mdx`, `after-getting-pr-checklist.mdx`, `renewing-life-admin-annually.mdx`; `src/lib/site.ts` Next topics; about + editorial.

### Explicitly not done

- No ads / Grok. No Move/Money/Family/Belong/Home/Life body edits (salary-notify guide stays Move; divorce stays Family).

### Questions mined

1. Does marrying an SC or PR automatically grant my spouse Singapore PR?
2. Should we apply for spouse PR the week after ROM?
3. Do I need MP / recommendation letters for a spouse-sponsored PR file?
4. Is LTVP required before spouse PR, or optional bridging?
5. Can a PR child sponsor an aged parent for PR?
6. What age makes a parent “aged” on ICA’s PR page?
7. Are parents-in-law eligible for the parent LTVP row?
8. What fees does ICA publish for parent LTVP vs aged-parent PR?
9. Why did MOM suddenly ask for my NOA on EP renewal?
10. Is an IR8A the same document as a Notice of Assessment?
11. What if my EP-declared salary does not match IRAS assessment?
12. Does MOM always require NOA, or only case-by-case?


---

## Loop E — Journeys, checklists, calendar, tools — 2026-09-15 (tick 2)

Branch: `loop/e-journeys-tools-tick2` → PR to `main`. Owns **journeys / checklists / calendar / calculators** only. Did **not** edit pillar guide MDX trees. No ads / Grok.

### Sources mined

**Reddit / forums**

- r/askSingapore — rental stamp duty myths / agent “optional” folklore / who pays ([stamp duty necessary](https://www.reddit.com/r/askSingapore/comments/lsz072/is_rental_stamp_duty_necessary_and_why_would_a/); [agent hasn’t stamped](https://www.reddit.com/r/askSingapore/comments/1dntunl/moved_into_a_new_apartment_but_agent_hasnt_paid/); [property tax vs lease duty confusion](https://www.reddit.com/r/askSingapore/comments/1e2ydnt/paying_property_tax_as_a_foreign_renter_in/); [TA checklist](https://www.reddit.com/r/askSingapore/comments/zmcmh7/what_to_look_for_in_a_tenancy_agreement_when/)).
- r/askSingapore — AEIS / mainstream school path for foreign kids ([local primary for foreign kids](https://www.reddit.com/r/askSingapore/comments/1houq07/local_primary_schools_for_foreign_kids/); [EP child subsidies](https://www.reddit.com/r/askSingapore/comments/13hduoz/do_any_educational_subsidies_or_grants_exists_for/); [intl → public transfer](https://www.reddit.com/r/askSingapore/comments/kg0mdd/whats_the_admission_process_for_a_transfer_from/)).
- r/askSingapore — foreign licence 12-month conversion clock ([foreigner driving](https://www.reddit.com/r/askSingapore/comments/1bujpm1/foreigner_driving_in_singapore/); [EP licence conversion](https://www.reddit.com/r/askSingapore/comments/1q4987p/getting_a_singapore_drivers_licence_as_a/); [conversion timing](https://www.reddit.com/r/askSingapore/comments/18e48al/foreign_license_conversion/)).
- r/askSingapore — IR21 withhold / STVP single-entry adjacency already covered in tick 1; tick 2 adds post-cancel **SFA / myTax** filing continuity heat.

**Official**

- [MOE — AEIS](https://www.moe.gov.sg/international-students/aeis) + [S-AEIS](https://www.moe.gov.sg/international-students/s-aeis) + [international students hub](https://www.moe.gov.sg/international-students) (2026 AEIS Jul apps / Sep tests; 2027 S-AEIS Jan apps).
- [IRAS — Tax Season 2026](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/understanding-my-income-tax-filing/tax-season-2026---all-you-need-to-know) (1 Mar–18 Apr 2026) + [SFA for foreign individuals](https://www.iras.gov.sg/digital-services/others/singpass-foreign-user-account-(sfa)-for-foreign-individuals).
- [IRAS — Renting a property / lease duty](https://www.iras.gov.sg/taxes/stamp-duty/for-property/renting-a-property) (0.4% ≤4yr; 4× AAR >4yr; AAR ≤S$1,000 exempt; floor to nearest dollar).
- [SPF — Singapore Driving Licence (foreigners)](https://www.police.gov.sg/Advisories/Traffic/Traffic-Matters/Singapore-Driving-Licence).

### Gaps vs Loop E tick 1

Tick 1 shipped leaving IR21/STVP timeline, day-30/90 depth, MOE holiday/P1/intl-school calendar, setup-cash tool, EP salary tables. Remaining high-intent journey/tool gaps: **AEIS/S-AEIS calendar windows**, **IRAS YA filing season on the calendar**, **dedicated lease-duty calculator** (stamp-duty-only searches), day-7 **SGWorkPass**, day-30 **12-month licence clock**, day-90 **tax-season + 14-day stamp**, leaving **SFA continuity**. Skipped pillar guide edits.

### Shipped this tick

**Calendar**

- `content/calendar/aeis-2026.json`
- `content/calendar/s-aeis-2027.json`
- `content/calendar/iras-tax-filing-ya2026.json`
- `src/app/calendar/page.tsx` (copy)

**Tools**

- `src/lib/tools/lease-duty.ts`
- `src/components/tools/LeaseDutyCalculator.tsx`
- `src/app/tools/lease-duty/page.tsx`
- tools index + sitemap wiring

**Journeys / checklists**

- `content/journeys/checklists/day-7.json` (SGWorkPass)
- `content/journeys/checklists/day-30.json` (licence clock, AEIS calendar cue; kept Loop H PayNow/pets items)
- `content/journeys/checklists/day-90.json` (lease-duty + tax season)
- `content/journeys/leaving-singapore.json` (SFA + lease-duty cross-link; shipping section retained)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did **not** edit pillar guide MDX trees.

### Questions mined (sample)

1. When do AEIS 2026 applications and tests run, and must we sit the test in Singapore?
2. What is the S-AEIS 2027 window if we miss AEIS for January entry?
3. How much IRAS lease stamp duty on a S$4,500 × 24-month condo TA?
4. Is stamp duty optional if the agent says so, and who usually pays?
5. What is the S$1,000 AAR exemption — does a room rental ever qualify?
6. When is YA 2026 e-Filing open, and do first-year EP holders need to file?
7. If my EP cancels before April, how do I reach myTax Portal without Singpass?
8. When must I convert my foreign driving licence — from arrival or from first drive?
9. After EPSC, how soon can I see my FIN / digital pass in SGWorkPass?
10. Do I stamp the TA within 14 days if we signed in Singapore?
11. Can MOE AEIS guarantee a school near my condo?
12. Should lease duty be sketched separately from the full first-month cash tool?

---

## Loop E — Journeys, checklists, calendar, tools — 2026-09-15 (tick 1)

Branch: `loop/e-journeys-tools` → merged as `f4fd03f` (PR #31). Owns journeys / checklists / calendar / tools only.

### Shipped (tick 1 — already on main)

- Leaving IR21/STVP timeline depth (`leaving-singapore.json`)
- Day-30 / day-90 checklist upgrades
- MOE-accurate school holiday + P1 + international-school application calendar events
- `/tools/setup-cash` first-month cash sketch
- EP qualifying-salary regime tables / toggle

### Explicitly not done (tick 1)

- No pillar guide MDX edits; no ads; no Grok.

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 5)

Branch: `loop/story-aeo-tick5` → PR to `main`. Owns **journey completeness** and **answer-engine shape** after tick 4’s HSA meds / foreign licence / household GST FAQPages. Did **not** expand ads/monetization or collide with open Loop A–G body rewrites (EP eligibility / job-change / Multiplier, Home/HDB, SEO shell, services directory, Family/Belong left alone).

### Sources mined

**Reddit / forums**

- r/askSingapore — pet import timelines / condo “pets OK” verbal traps (adjacency in relocation + Schedule III quarantine threads).
- r/askSingapore — weekly wrong-PayNow / recycled prepaid number fails (adjacency after PayNow setup heat).
- r/askSingapore — K-pod / vape on DP or Student’s Pass pass-risk panic (nightlife + enforcement threads).

**Official**

- [AVS — Importing dogs and cats](https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/import/dogs-and-cats/) + [general information / recognised pet agents](https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/general-information/) (owner **or** AVS-recognised agent may file).
- [MAS — E-Payments User Protection Guidelines](https://www.mas.gov.sg/regulation/guidelines/e-payments-user-protection-guidelines) (+ Dec 2024 PDF) erroneous-transfer process.
- [gov.sg — Stop vaping / higher penalties](https://www.gov.sg/stopvaping-penalties/) (TVCA foreigner composition → revocation / etomidate).

### Gaps vs ticks 1–4

Ticks 1–4 shipped SIM→Singpass→bank, SGAC, healthcare/emergency, IPA/EPSC, SimplyGo, serviced apartment, Changi Grab/taxi, CBNI + PayNow setup, HSA meds, licence conversion, household GST. Remaining high-intent **family / money-fail / pass-risk** gaps: **pet import without FAQPage/direct lead** (body existed; owner-vs-agent under-weighted), **wrong PayNow recovery without FAQPage** (setup FAQ existed; failure mode thin), **vaping pass-risk without FAQPage** (pre-land packing + nightlife).

### Shipped this loop

**Upgraded (AEO / journey polish)**

- `content/guides/move/importing-pets-singapore.mdx` (direct lead + FAQPage; AVS owner/agent)
- `content/guides/money/wrong-paynow-epayment-recovery.mdx` (direct lead + FAQPage)
- `content/guides/life/vaping-tobacco-laws-foreigners.mdx` (direct lead + FAQPage)
- `content/journeys/checklists/day-7.json` (no-vapes item)
- `content/journeys/checklists/day-30.json` (optional pet import + PayNow recovery href)
- `src/app/journeys/arriving/page.tsx`
- `src/lib/site.ts` (Move pets / Money wrong-PayNow / Life vaping topics)

### Explicitly not done

- No ads / monetization expansion (remittance sponsorSlot left as-is).
- No Grok / competitor clone copy.
- Did not rewrite Loop A EP eligibility / job-change / Multiplier, Loop B Family/Belong, Loop C Home/HDB, Loop F services entities, or Loop G SEO shell.

### Questions mined (sample)

1. Can I bring my dog or cat into Singapore?
2. How long is quarantine for pets arriving in Singapore?
3. Do I need an AVS-recognised pet agent?
4. When should I book Animal Quarantine Centre space?
5. Can my condo reject my pet after I import it?
6. I PayNow’d the wrong number — what do I do first?
7. Will the bank guarantee same-day recovery?
8. I received a wrong PayNow — should I send it back?
9. When do I need a police report for a wrong PayNow?
10. Are vapes illegal for tourists and EP holders?
11. Can a vaping offence cancel my EP or DP?
12. Can I bring a vape as “personal medication”?

---

## Loop B — Family + Belong (tick 6) — 2026-09-15

Branch: `loop/family-belong` → PR to `main`. Owns **Family** + **Belong** guides plus schools/clubs entity depth only. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next (MDW deep hiring stays Home-owned).

### Sources mined

**Reddit / forums**

- r/askSingapore — birth location vs confinement cost ([foreign wife birth SG vs home](https://www.reddit.com/r/askSingapore/comments/1l1fe33/important_considerations_whether_to_have_my/)).
- r/askSingapore — local-school / DP fee realism ([primary admission foreigners](https://www.reddit.com/r/askSingapore/comments/1azh44d/primary_school_admission/); [DP + government education](https://www.reddit.com/r/askSingapore/comments/1jfc9e5/dependent_pass_and_government_education/)).
- Belong soft-landing beyond sport: InterNations / Toastmasters / board-game Meetup patterns (forum “make friends” threads + Meetup calendars).

**Official**

- [MOM — Confinement nanny WP key facts](https://www.mom.gov.sg/passes-and-permits/work-permit-for-confinement-nanny/key-facts) + [eligibility](https://www.mom.gov.sg/passes-and-permits/work-permit-for-confinement-nanny/eligibility) + [apply](https://www.mom.gov.sg/passes-and-permits/work-permit-for-confinement-nanny/apply-for-permit) (Malaysian-only; levy S$60 SC baby / S$300 non-SC; max 16 weeks from birth).
- [MOE — AEIS](https://www.moe.gov.sg/international-students/aeis) (2026 apps closed; tests 1–3 Sep 2026) + [S-AEIS](https://www.moe.gov.sg/international-students/s-aeis) (2027 apps early Jan 2027).
- [Toastmasters Club of Singapore](https://toastmasters.org.sg/) + [Meetup boardgames](https://www.meetup.com/singapore-international-boardgames-meetup/) + [InterNations Singapore](https://www.internations.org/singapore-expats).

### Gaps vs prior Loop B ticks

Ticks 1–5 covered waitlists/SEN/camps/clubs/LGBTQ/dual-career, newborn/Baby Bonus/leave/marriage/vaccines/mental-health, IVF/maternity/divorce/hobby-sports, school-bus/Mandarin/infant-care/paediatric/chambers/faith/AAS. Remaining heat: **confinement nanny WP + foreign-baby levy**, **AEIS 2026 live calendar + DSA conditional offers**, **indoor belonging rails** (board games / Toastmasters / InterNations ROI) for non-sport personalities.

### Shipped this loop

**New guides**

- `content/guides/family/confinement-nanny-postpartum-singapore.mdx`
- `content/guides/belong/indoor-hobby-communities-singapore.mdx`

**Upgraded guides**

- `content/guides/family/aeis-saeis-international-students.mdx` (2026/2027 calendar + DSA-Sec conditional note)
- `content/guides/family/maternity-care-singapore.mdx` + `newborn-pass-birth-registration-singapore.mdx` (confinement cross-links)
- `content/guides/belong/find-my-people-singapore.mdx` + `hobby-sports-communities-singapore.mdx` (indoor hobby cross-links)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not edit Move / Money / Home / Life / Next trees (full MDW hiring left Home-owned).

### Questions mined (sample)

1. Should we hire a confinement nanny in Singapore or fly grandparents in?
2. Is the MOM confinement Work Permit only for Malaysians — and how long does it last?
3. Why is the confinement levy S$300 for our foreign baby but S$60 for SC friends?
4. Can an agency skip the security bond story for a 28-day nanny?
5. Did we already miss 2026 AEIS — what does S-AEIS 2027 actually buy us?
6. If DSA-Sec shortlists our international-school kid, do we still need AEIS?
7. How do introverts make friends without pickleball humidity?
8. Are InterNations mixers worth annual dues after week two?
9. Is Toastmasters a belonging rail or just career theatre?
10. Which board-game Meetup actually seats newcomers instead of closed friend tables?

---

## Loop F — Services directory depth — Tick 2 — 2026-09-15

Branch: `loop/services-directory-tick2b` → PR to `main`. Owns **services directory** entities only. Did **not** touch neighbourhoods (Loop C), schools/clubs (Loop B), or pillar guides (A–D). No ads / featured / monetization expansion. No Grok copy. Skipped tick 1 topics (tax / dental / notary / self-storage / pet-relocation).

### Sources mined

**Reddit / forums**

- r/askSingapore — mental health for foreigners / insurance carve-outs ([foreigner mental health services](https://www.reddit.com/r/askSingapore/comments/1m8tl7z/mental_health_services_in_sg_for_foreigners/); [therapy costs](https://www.reddit.com/r/askSingapore/comments/1jbp3ii/has_anyone_tried_therapy_or_counselling_in/); [non-resident options](https://www.reddit.com/r/askSingapore/comments/1byriih/seeking_options_for_mental_health_help_as_a_non-resident/)).
- r/askSingapore — driving licence conversion / BTT / JB myth ([EP licence steps](https://www.reddit.com/r/askSingapore/comments/1q4987p/getting_a_singapore_drivers_licence_as_a/); [BTT next step](https://www.reddit.com/r/askSingapore/comments/1nnfrv8/basic_theory_test_the_next_step/); [foreign conversion](https://www.reddit.com/r/askSingapore/comments/18e48al/foreign_license_conversion/)).
- r/askSingapore — aircon TA quarterly service / chemical wash / gas top-up ([who pays](https://www.reddit.com/r/askSingapore/comments/1jy8adw/aircon_servicing_who_will_pay/); [TA clause](https://www.reddit.com/r/askSingapore/comments/1h3c1xm/tenancy_agreement_aircon_servicing/); [chemical wash + gas](https://www.reddit.com/r/askSingapore/comments/1l7ai97/renting_in_sg_aircon_chemical_wash_and_top_up/); [low gas scam](https://www.reddit.com/r/askSingapore/comments/1eh9inq/aircon_servicing/)).
- r/askSingapore — EP hospitalisation / maternity waiting / group-cover gaps ([EP hospitalisation](https://www.reddit.com/r/askSingapore/comments/pr1l6h/hospitalization_insurance_for_ep_holders/); [DP maternity+visit cover](https://www.reddit.com/r/askSingapore/comments/1g76uwq/can_anyone_share_their_experience_with_insurance/); [maternity plans](https://www.reddit.com/r/askSingapore/comments/1fjlm8c/maternity_insurance/); [expat health advice](https://www.reddit.com/r/askSingapore/comments/1qknwn1/expat_health_insurance_advice_needed/)).
- r/askSingapore — FDW DIY renew / age-50 MI premiums ([renew without agency](https://www.reddit.com/r/askSingapore/comments/1diomhc/after_2_years_are_we_allow_to_renew_our_maids/); [helper over 50 insurance](https://www.reddit.com/r/askSingapore/comments/1nd7mrs/helper_insurance_for_helper_over_50/)).
- r/askSingapore — CEA dual-rep / tenant commission pushes ([dual representation](https://www.reddit.com/r/askSingapore/comments/1hrw1w8/can_an_rental_agent_act_on_behalf_of_both_tenant/); [agent fee because owner won’t pay](https://www.reddit.com/r/askSingapore/comments/10zoiys/why_agent_mentions_agent_fee_is_applicable/); [landlord asks tenant to pay agent](https://www.reddit.com/r/askSingapore/comments/yr6yxp/landlord_asking_to_pay_agent_their_fees/)).

**Official**

- [MOH — Mental health services / mindline 1771](https://www.moh.gov.sg/seeking-healthcare/find-a-facility-or-service/mental-health-services/) + [IMH appointments](https://www.imh.com.sg/Patients-and-Visitors/Pages/Appointments-and-Referrals.aspx) + [mindline.sg](https://mindline.sg/).
- [SPF — Singapore Driving Licence](https://www.police.gov.sg/Knowledge-Hub/Traffic/Traffic-Matters/Singapore-Driving-Licence) + [e-services appointments](https://www.police.gov.sg/e-services).
- [MOH — Integrated Shield Plans](https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/integratedshieldplans/) + [CPF MediShield Life](https://www.cpf.gov.sg/member/healthcare-financing/medishield-life) + [compareFIRST](https://www.comparefirst.sg/).
- [MOM — Employ/renew MDW without agency](https://www.mom.gov.sg/faq/work-permit-for-fdw/can-i-employ-an-fdw-without-going-through-an-employment-agency) + [MDW insurance / Stage 2 Jul 2025](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/eligibility-and-requirements/insurance-requirements) + [renew WP](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/renew-a-work-permit).
- [CEA — Public register / renting guidance](https://www.cea.gov.sg/public-register/) + [CASE](https://www.case.org.sg/).

### Gaps vs tick 1

Tick 1 shipped tax / dental / notary / self-storage / pet-relocation + schema/UI engage fields. Remaining high-intent **directory** gaps matched this mine: **mental health cash vs IMH**, **BTT-only licence conversion**, **aircon chemical-wash / gas-top-up upsells**, **EP private health / maternity waiting category guide**, **FDW DIY renew + age-50 MI**, plus agent dual-rep / landlord-commission push depth on existing brands.

### Shipped this tick

**New service entities**

- `content/entities/services/mental-health-counselling.json`
- `content/entities/services/driving-schools-licence.json`
- `content/entities/services/aircon-servicing.json`
- `content/entities/services/private-health-insurance.json`
- `content/entities/services/fdw-agencies.json`

**Upgraded existing**

- FDW brands: `comfort-employment.json`, `nation-employment.json` (DIY renew / Stage 2 / age-50)
- Insurance brands: `aia-singapore.json`, `prudential-singapore.json` (maternity / MediSave myth / group end)
- Clinics: `parkway-shenton.json`, `smg.json` (mental-health carve-outs)
- Agents: `era-realty.json`, `huttons.json`, `orange-tee.json` (dual-rep / tenant commission push)

### Explicitly not done

- No ads / featured / monetization expansion (existing sponsored flags left as-is).
- No Grok / third-party clone copy.
- Did not re-litigate tick 1 tax/dental/notary/storage/pet topics.
- Did not edit neighbourhoods, schools, clubs, or pillar guide MDX trees.

### Questions mined (sample)

1. Does my EP group plan cover outpatient counselling or psychiatry?
2. How much does private therapy cost for foreigners in Singapore?
3. Can I use IMH as a non-citizen, and do I get subsidies?
4. Do I need FTT and lessons to convert a foreign driving licence, or only BTT?
5. Can I get a Malaysia licence this weekend and convert it in Singapore?
6. Who pays quarterly aircon servicing under a typical tenancy agreement?
7. Is lease-end chemical wash + gas top-up a fair landlord demand?
8. Why did the aircon vendor say my 2-year-old unit needs gas?
9. Can EP holders buy MediShield / ISP with MediSave?
10. When should I buy maternity insurance relative to trying to conceive?
11. Can I renew my helper’s Work Permit and insurance without an agency?
12. Why did MDW medical insurance triple after my helper turned 50?
13. Can a rental agent collect commission from both landlord and tenant?
14. Landlord’s agent wants me (tenant) to pay their fee — is that legal?

---

---

---

## Loop C — Home + Life (parallel) — Tick 22 — 2026-09-15

Branch: `loop/home-life-t22` → PR to `main`. Owns **Home** + **Life** guides and neighbourhood entities only.

### Sources mined

**Reddit**

- r/askSingapore — early lease exit without diplomatic clause / deposit forfeiture vs remaining-rent SCT claims ([can landlord sue](https://www.reddit.com/r/askSingapore/comments/1fh2rcg/can_my_landlord_sue_me_for_ending_a_tenancy_early/); [S$20k demand](https://www.reddit.com/r/askSingapore/comments/1j5m8bl/landlord_demanding_20k_for_early_lease/); [deposit-only myths](https://www.reddit.com/r/askSingapore/comments/1gsh3fn/in_singapore_what_happens_if_the_tenancy_rental/)).
- r/askSingapore — habitability / pest exits adjacency ([condo termites](https://www.reddit.com/r/askSingapore/comments/1e9w12r/contract_termination_in_condo_termites/)).
- r/askSingapore — neighbourhood shortlists for Bishan / Sengkang / Queenstown / Bedok belts ([Bishan](https://www.reddit.com/r/askSingapore/comments/1p6c1sd/is_staying_at_bishan_really_good/); [love/hate neighbourhoods](https://www.reddit.com/r/askSingapore/comments/1k2tn35/what_do_you_love_and_hate_about_your/); [quiet long-stay](https://www.reddit.com/r/askSingapore/comments/1qwfoge/best_quiet_area_in_sg_for_long_term_stay_wfh_5k/); [best MRT](https://www.reddit.com/r/askSingapore/comments/1581thm/best_mrt_to_live_nearby_to/)).

**Official**

- [CEA — Tenancy templates](https://www.cea.gov.sg/real-estate-professionals/agreements-and-checklists/) + [renting guidance](https://www.cea.gov.sg/consumers/engaging-a-property-agent/renting-or-renting-out/).
- [Judiciary — SCT eligibility](https://www.judiciary.gov.sg/civil/cases-eligible-small-claim) + [small claims guide PDF](https://www.judiciary.gov.sg/docs/default-source/civil-docs/sct_guide_to_small_claims.pdf).
- [NEA — Management of bed bugs](https://www.nea.gov.sg/our-services/pest-control/management-of-bed-bugs).
- [PUB — About floods](https://www.pub.gov.sg/Public/KeyInitiatives/Flood-Resilience/About-Floods) + [Flood Resilience](https://www.pub.gov.sg/Public/KeyInitiatives/Flood-Resilience).

### Gaps vs Tick 21 (Home + Life slice)

Tick 21 shipped HDB mid-lease sale, bedroom continuous-occupation / partitions, adjacent BTO/site construction noise, SP ownership-transfer cut-offs, Punggol + Jurong East entities. Remaining high-intent Home+Life gaps matched forum heat: **early termination without diplomatic clause (deposit ≠ full release)**, **bed-bug / habitability pest escalation**, **PUB flash-flood checks for renters**, plus neighbourhood entity depth for **Bishan**, **Sengkang**, and **Queenstown**. Stamp duty already covered under renting-process — left alone beyond cross-links.

### Shipped this tick

**New guides**

- `content/guides/home/early-lease-termination-tenants.mdx`
- `content/guides/life/flash-floods-singapore-renters.mdx`

**Upgraded guides (depth + citations + cross-links + lastReviewed 2026-09-15)**

- `content/guides/home/aircon-pest-renewals.mdx` (bed bugs + NEA + habitability exit pointer)
- `content/guides/home/security-deposit-diplomatic-clause.mdx` (non-clause exit deep-link)
- `content/guides/home/renting-process-loi-ta-deposits.mdx` (early-exit ask + related)
- `content/guides/home/choosing-neighbourhood-expat.mdx` (Bishan/Sengkang/Queenstown + flood constraint)
- `content/guides/home/heartland-living-for-expats.mdx` (entity shortlist + flood/construction)
- `content/guides/life/haze-climate-preparedness.mdx` (flood cross-link)
- `src/lib/site.ts` (Home early-exit topic; Life climate/floods topic)

**Neighbourhood entity depth**

- `content/entities/neighbourhoods/bishan.json`
- `content/entities/neighbourhoods/sengkang.json`
- `content/entities/neighbourhoods/queenstown.json`

### Explicitly not done

- No ads/monetization expansion (existing sponsorSlots left as-is).
- No copying of third-party “expat-sg” / Grok clones.
- Did not edit Move/Money/Family/Belong/Next guides owned by other loops.
- Did not re-litigate Tick 19–21 fibre/mould/CDRT/HDB-sale/construction topics beyond cross-links.

### Questions mined (sample)

1. If I forfeit my security deposit to leave early, can the landlord still sue for remaining rent?
2. Does “without prejudice to further claims” in my TA mean deposit forfeiture is not a full release?
3. Must the landlord mitigate by finding a replacement tenant before claiming months of rent?
4. Can I assign my lease to a friend without the landlord’s consent?
5. Is SCT the right forum when the landlord files for S$20k after I break the lease?
6. Should I stop paying rent once I give early-termination notice?
7. Who pays for the first bed-bug treatment — tenant or landlord — and how do I document it?
8. Can untreated bed bugs or termites support a mutual early termination?
9. How do I check PUB flood hotspots before I LOI a ground-floor or basement-parking unit?
10. Does a one-hour lobby flash flood let me break the lease?
11. Bishan vs Queenstown vs Sengkang — which fits a CBD office vs NEL-office family?
12. Is Junction 8 / Compass One enough errand gravity, or do I still need a car?

---

---


## Loop B — Family + Belong (tick 7) — 2026-09-15

Branch: `loop/family-belong-tick7` → PR to `main`. Owns **Family** + **Belong** guides plus schools/clubs entity depth only. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next (MDW stays Home-owned; ActiveSG facilities depth stays Life-owned; Tuition Grant bond stays Move-owned).

### Sources mined

**Reddit / forums**

- r/askSingapore — kids allergy / EpiPen continuity ([polyclinic nut allergy](https://www.reddit.com/r/askSingapore/comments/1n6ayva/polyclinic_for_nut_allergy_or_do_we_have_to_go_to/); [paediatric allergist](https://www.reddit.com/r/askSingapore/comments/1uij2re/looking_for_best_paediatric_allergist_in/); [prescription drugs / EpiPen](https://www.reddit.com/r/askSingapore/comments/1cr7j1l/prescription_drugs/)).
- r/askSingapore — private ST/OT cash realism ([speech therapy S$200++](https://www.reddit.com/r/askSingapore/comments/1s14acu/speech_therapy_for_kids_in_singapore_is_200_per/); [moving with special needs](https://www.reddit.com/r/askSingapore/comments/1svtc96/moving_to_singapore_with_a_child_with_special/)).
- r/askSingapore — secondary IB / A-Level / transfer myths ([local vs IB](https://www.reddit.com/r/askSingapore/comments/1h15iwd/local_schools_vs_ib_schools/); [Cambridge A-Level after IGCSE](https://www.reddit.com/r/askSingapore/comments/1l9jedc/anyone_recommend_any_schools_in_singapore_that/); [IS → public transfer](https://www.reddit.com/r/askSingapore/comments/kg0mdd/whats_the_admission_process_for_a_transfer_from/)).
- r/askSingapore — Belong music/arts rails ([musical communities](https://www.reddit.com/r/askSingapore/comments/1r53h7g/musical_communities_to_join_to_make_friends/); [join bands / orchestra](https://www.reddit.com/r/askSingapore/comments/17zkwjp/how_can_i_join_bands_in_singapore/); [classical community](https://www.reddit.com/r/askSingapore/comments/18qkpsq/classical_music_looking_for_a_community/); [Sing Song Social Club](https://www.reddit.com/r/askSingapore/comments/1kcquiw/anyone_attended_the_sing_song_social_club/)).

**Official**

- [KKH — Allergy](https://www.kkh.com.sg/our-specialties/allergy) + [HealthHub EpiPen](https://www.healthhub.sg/medication-devices-and-treatment/medications/adrenaline-auto-injector-epipen-and-epipen-jr) + [NDF EpiPen](https://www.ndf.gov.sg/about-drugs/product-information/sin13288p/) + [MOH EpiPen subsidy note](https://www.moh.gov.sg/newsroom/increase-in-number-of-reported-incidents-of-food-related-anaphylaxis-in-children-and-assistance-for-those-from-low-income-families/).
- [MOE — Studying in Singapore](https://www.moe.gov.sg/international-students/studying-in-singapore) + [international admissions](https://www.moe.gov.sg/international-students) + [post-secondary admissions](https://www.moe.gov.sg/post-secondary/admissions).
- [BHSO join](https://bhso.org/join-our-family/) + [OMM join](https://www.orchestra.sg/join) + [SSO](https://www.sso.org.sg/) / [Esplanade](https://www.esplanade.com/).

### Gaps vs prior Loop B ticks

Ticks 1–6 covered schools/waitlists/SEN/camps/clubs/volunteering/LGBTQ/dual-career, newborn/leave/vaccines, IVF/maternity/divorce/PPO, Reclub/parkrun, school-bus/Mandarin/preschool/chambers/faith, confinement-nanny WP/levy, indoor hobby belonging, AEIS 2026. Remaining Family/Belong heat: **allergy/EpiPen continuity + local Rx**, **private ST/OT cash wall** (deepen), **IB vs A-Level / IGCSE≠JC myth**, **music/arts belonging** beyond board games/Toastmasters.

### Shipped this loop

**New guides**

- `content/guides/family/kids-allergy-epipen-singapore.mdx`
- `content/guides/family/secondary-ib-alevel-pathways-singapore.mdx`
- `content/guides/belong/music-arts-communities-singapore.mdx`

**Upgraded guides**

- `content/guides/family/special-needs-support.mdx` (ST/OT cash band)
- `content/guides/family/finding-pediatrician-singapore.mdx`
- `content/guides/family/international-schools-landscape.mdx`
- `content/guides/family/kids-activities-holiday-camps.mdx`
- `content/guides/belong/find-my-people-singapore.mdx`
- `content/guides/belong/indoor-hobby-communities-singapore.mdx`
- `src/lib/site.ts` (Family + Belong topic rails)

**Entity depth (schools / clubs)**

- `content/entities/schools/tanglin-trust-school.json`
- `content/entities/schools/acs-international.json`
- `content/entities/schools/uwcsea-dover.json`
- `content/entities/schools/dulwich-college-singapore.json`
- `content/entities/clubs/british-association.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not edit Move / Money / Home / Life / Next trees (no MDW fork; no ActiveSG facilities rewrite; TG bond stays Move).

### Questions mined (sample)

1. Will a polyclinic accept my overseas nut-allergy report and refill an EpiPen?
2. Do foreign prescriptions work for adrenaline auto-injectors in Singapore?
3. Will my preschool accept a US/UK allergy action plan PDF alone?
4. Are portable EpiPens subsidised for EP/DP kids the way hospital epinephrine can be?
5. Is private kids’ speech therapy really S$200+/session for foreigners?
6. Can my foreign child use EIPIC while waiting for private ST/OT?
7. Does finishing IGCSE overseas let my teen walk into a local JC for A-Levels?
8. Should a mobile family choose IB DP or A-Level if the next posting is unknown?
9. Can we transfer mid-DP from one international school to another without losing a year?
10. Is Dulwich an A-Level school or an IB DP exit?
11. Where do singers find friends if Reclub and board games are not the rail?
12. Can expats audition for Braddell Heights Symphony Orchestra by video?
13. Are OMM auditions open year-round or by instrument intake windows?
14. Are open mics actually good for making musician friends, or just stage time?

---

## Loop B — Family + Belong (tick 6) — 2026-09-15

Branch: `loop/family-belong` → PR to `main`. Owns **Family** + **Belong** guides plus schools/clubs entity depth only. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next (MDW deep hiring stays Home-owned).

### Sources mined

**Reddit / forums**

- r/askSingapore — birth location vs confinement cost ([foreign wife birth SG vs home](https://www.reddit.com/r/askSingapore/comments/1l1fe33/important_considerations_whether_to_have_my/)).
- r/askSingapore — local-school / DP fee realism ([primary admission foreigners](https://www.reddit.com/r/askSingapore/comments/1azh44d/primary_school_admission/); [DP + government education](https://www.reddit.com/r/askSingapore/comments/1jfc9e5/dependent_pass_and_government_education/)).
- Belong soft-landing beyond sport: InterNations / Toastmasters / board-game Meetup patterns (forum “make friends” threads + Meetup calendars).

**Official**

- [MOM — Confinement nanny WP key facts](https://www.mom.gov.sg/passes-and-permits/work-permit-for-confinement-nanny/key-facts) + [eligibility](https://www.mom.gov.sg/passes-and-permits/work-permit-for-confinement-nanny/eligibility) + [apply](https://www.mom.gov.sg/passes-and-permits/work-permit-for-confinement-nanny/apply-for-permit) (Malaysian-only; levy S$60 SC baby / S$300 non-SC; max 16 weeks from birth).
- [MOE — AEIS](https://www.moe.gov.sg/international-students/aeis) (2026 apps closed; tests 1–3 Sep 2026) + [S-AEIS](https://www.moe.gov.sg/international-students/s-aeis) (2027 apps early Jan 2027).
- [Toastmasters Club of Singapore](https://toastmasters.org.sg/) + [Meetup boardgames](https://www.meetup.com/singapore-international-boardgames-meetup/) + [InterNations Singapore](https://www.internations.org/singapore-expats).

### Gaps vs prior Loop B ticks

Ticks 1–5 covered waitlists/SEN/camps/clubs/LGBTQ/dual-career, newborn/Baby Bonus/leave/marriage/vaccines/mental-health, IVF/maternity/divorce/hobby-sports, school-bus/Mandarin/infant-care/paediatric/chambers/faith/AAS. Remaining heat: **confinement nanny WP + foreign-baby levy**, **AEIS 2026 live calendar + DSA conditional offers**, **indoor belonging rails** (board games / Toastmasters / InterNations ROI) for non-sport personalities.

### Shipped this loop

**New guides**

- `content/guides/family/confinement-nanny-postpartum-singapore.mdx`
- `content/guides/belong/indoor-hobby-communities-singapore.mdx`

**Upgraded guides**

- `content/guides/family/aeis-saeis-international-students.mdx` (2026/2027 calendar + DSA-Sec conditional note)
- `content/guides/family/maternity-care-singapore.mdx` + `newborn-pass-birth-registration-singapore.mdx` (confinement cross-links)
- `content/guides/belong/find-my-people-singapore.mdx` + `hobby-sports-communities-singapore.mdx` (indoor hobby cross-links)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not edit Move / Money / Home / Life / Next trees (full MDW hiring left Home-owned).

### Questions mined (sample)

1. Should we hire a confinement nanny in Singapore or fly grandparents in?
2. Is the MOM confinement Work Permit only for Malaysians — and how long does it last?
3. Why is the confinement levy S$300 for our foreign baby but S$60 for SC friends?
4. Can an agency skip the security bond story for a 28-day nanny?
5. Did we already miss 2026 AEIS — what does S-AEIS 2027 actually buy us?
6. If DSA-Sec shortlists our international-school kid, do we still need AEIS?
7. How do introverts make friends without pickleball humidity?
8. Are InterNations mixers worth annual dues after week two?
9. Is Toastmasters a belonging rail or just career theatre?
10. Which board-game Meetup actually seats newcomers instead of closed friend tables?

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 5)

Branch: `loop/next-polish-tick5c` → PR to `main`. Owns **Next** guides plus light About / Editorial polish. Did **not** touch Move / Money / Family / Belong / Home / Life trees (CPF withdrawal stays Money-owned; Next cross-links only).

### Sources mined

**Reddit / forums**

- r/askSingapore — PR for newborn / child ([newborn PR odds](https://www.reddit.com/r/askSingapore/comments/1j048c8/im_a_pr_how_likely_will_my_newborn_get_a_pr_if_i/); [Malaysian newborn papers](https://www.reddit.com/r/askSingapore/comments/1b0icqt/questions_regarding_malaysian_newborn_baby/); [Singpass kid link](https://www.reddit.com/r/askSingapore/comments/1krqpqp/kid_isnt_in_my_singpass_how_to_fix_is_it_even/)).
- r/askSingapore — deed poll / NRIC name change ([changing name process](https://www.reddit.com/r/askSingapore/comments/1hocjy4/changing_name_in_singapore_process/); [changing name in NRIC](https://www.reddit.com/r/askSingapore/comments/14hmukz/changing_name_in_nric/); [update institutions](https://www.reddit.com/r/askSingapore/comments/11478ey/question_on_changing_name/); [planning legal name change](https://www.reddit.com/r/askSingapore/comments/1lb94s6/planning_to_change_my_legal_name/)).
- ICA transfer-REP adjacency — new passport without updating REP (travel clearance folklore).

**Official**

- [ICA — Becoming a Permanent Resident](https://www.ica.gov.sg/reside/PR)
- [ICA — Replace Identity Card (Change of Particulars/Damaged)](https://www.ica.gov.sg/documents/ic/update_particulars)
- [ICA — Alteration of Child's Name on Birth Certificate](https://www.ica.gov.sg/documents/birth/alter-child-name)
- [ICA — Transfer of Re-Entry Permit / Update Travel Document](https://www.ica.gov.sg/reside/PR/transfer-REP)
- [ICA — Apply / renew REP](https://www.ica.gov.sg/reside/PR/apply-REP)

### Gaps vs prior ticks

Tick 4 covered lost NRIC + SC renunciation. Remaining Next heat: **child PR sponsorship**, **NRIC name change / deed poll**, **REP transfer to new foreign passport**. CPF cash-out remains Money guide.

### Shipped

**New:** `pr-for-child-newborn-singapore.mdx`, `change-name-nric-singapore.mdx`, `transfer-rep-new-passport.mdx`

**Upgraded:** leaving playbook, renouncing PR, tax clearance (Money CPF cross-links); after-PR checklist; life-admin; lost NRIC; REP related link; about + editorial.

### Explicitly not done

- No ads / Grok. No Move/Money/Family/Belong/Home/Life body edits.

### Questions mined

1. Does my newborn automatically get PR because I hold a blue IC?
2. Does birth in Singapore create PR for a foreign baby?
3. If I sponsor PR for my son, is he liable for NS?
4. What fees does ICA publish for child PR?
5. Do I need a deed poll before ICA changes my NRIC name?
6. As a PR, must I update my foreign passport before the IC name change?
7. Is S$60 particulars the same as lost-IC S$100/S$300?
8. Can parents alter a birth-certificate name after age one?
9. I renewed my foreign passport — renew REP or transfer it?
10. Is REP transfer free, and how long does ICA take?
11. Can I re-enter as PR if REP shows the old passport number?
12. Does a parent’s REP transfer cover a child’s new passport?


---

## Loop A — Move + Money — 2026-09-15 (tick 4)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `loop/move-money-tick4` (from main `@48f51c4`).

### Sources mined

**Reddit**

- r/askSingapore — EP / work-pass medical exam vs Work Permit form myths / clinic logistics ([MoM Work Authorization Medical Exam](https://www.reddit.com/r/askSingapore/comments/1rw9ev6/mom_work_authorization_medical_exam/); [TEP medical clinics](https://www.reddit.com/r/askSingapore/comments/1jd978t/clinics_to_go_for_a_medical_examination_for_the/); IPA-only start-work adjacency: [Start work with IPA only?](https://www.reddit.com/r/askSingapore/comments/16i7zxi/start_work_with_ipa_only/)).
- r/askSingapore — salary / occupation / DP cascade when pay changes (adjacency to [MOM NOA for EP renewal](https://www.reddit.com/r/askSingapore/comments/1slvkfe/do_mom_usually_request_noa_for_ep_renewal/) salary-mismatch heat; living notify rules from MOM docs).
- r/askSingapore — credit card GX / no history / secured FD ([Best SG banks and credit cards?](https://www.reddit.com/r/askSingapore/comments/1l7nynj/best_sg_banks_and_credit_cards/); [Credit card for expat](https://www.reddit.com/r/askSingapore/comments/1d7x88f/credit_card_for_expat/); [Credit card for postgraduates](https://www.reddit.com/r/askSingapore/comments/1p6alun/credit_card_for_postgraduates_with_unassessable/)).
- r/askSingapore — OCBC 360 vs UOB One salary-credit codes beyond Multiplier ([OCBC 360/365 vs UOB EVOL/ONE](https://www.reddit.com/r/askSingapore/comments/195gqov/ocbc_360365_vs_uob_evolone/); [Uob one and ocbc 360](https://www.reddit.com/r/askSingapore/comments/1fde027/uob_one_and_ocbc_360/)).
- r/askSingapore — corporate LOG / Letter of Guarantee cashflow ([Confused about Letter of Guarantee](https://www.reddit.com/r/askSingapore/comments/1q67qw4/confused_about_letter_of_guarantee_from_my_insurer/); [AIA Corporate Medical Insurance](https://www.reddit.com/r/askSingapore/comments/1rkernq/anyone_claimed_aia_corporate_medical_insurance_before/)).

**Official**

- [MOM — Apply for an Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/apply-for-a-pass/) (IPA medical wording + STVP extension while labs process).
- [MOM — Notify MOM of EP updates](https://www.mom.gov.sg/passes-and-permits/employment-pass/notify-mom-of-changes) (salary lower ≥1 month; raise for DP privileges; occupation; related-company).
- [OCBC — 360 salary bonus](https://www.ocbc.com/personal-banking/help-and-support/accounts/360account-salarybonus) + [UOB — One Account](https://www.uob.com.sg/personal/save/everyday-accounts/one-account.page).
- [DBS — Card application eligibility](https://www.dbs.com.sg/personal/support/card-application-eligibility.html) + [IRAS — Certificate of Residence](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/apply-for-certificate-of-residence).

### Gaps vs prior Loop A ticks (Move + Money scope)

Ticks 1–3 shipped EP floors/COMPASS, EP vs S Pass, CBNI, remittance MPI/SoF, IR21 job-hop medical portability, EP-cancel STVP / DP LOC / PayNow / CPF withdrawal, FWTES address/passport, job-change IPA, Multiplier salary-credit, ≥1-year tax residency. Remaining high-intent Move/Money gaps matched this mine: **IPA-required EP medical vs WP form myth + STVP lab extension**, **employer salary-cut notify / DP cascade / occupation update**, **OCBC 360 / UOB One salary codes beyond Multiplier**, **credit-card GX / secured FD bootstrap**, **COR FAQ shape**, **LOG cashflow for foreigners**. EP renewal NOA deep-dives remain Next-owned.

### Shipped this loop

**New guides**

- `content/guides/move/ep-medical-examination-issuance.mdx`
- `content/guides/move/ep-salary-occupation-changes.mdx`

**Upgraded guides (depth + citations + cross-links + lastReviewed 2026-09-15)**

- `content/guides/money/high-interest-salary-accounts-foreigners.mdx` (OCBC 360 / UOB One + FAQPage)
- `content/guides/money/credit-cards-foreigners-singapore.mdx` (GX / secured FD + FAQPage)
- `content/guides/money/certificate-of-residence-dta.mdx` (FAQPage)
- `content/guides/money/health-insurance-expat.mdx` (LOG foreigner cashflow)
- `content/guides/move/work-pass-issuance-epsc-notification.mdx`
- `content/guides/move/ep-rejection-appeal-ipa-issuance.mdx`
- `content/guides/move/ep-notify-mom-address-passport.mdx`
- `content/guides/move/changing-jobs-employment-pass.mdx`
- `src/lib/site.ts` (Move medical + Money HISA/CC topic hrefs)

**Entity depth**

- `content/entities/services/intact-immigration.json` (medical form mismatch + salary-cut DP cascade)

### Explicitly not done

- No ads/monetization expansion (no HISA/CC sponsorSlot).
- No Grok / third-party clone copy.
- Did not edit Family / Belong / Home / Life / Next heavily (EP renewal NOA / between-jobs STVP remain Next-owned).

### Questions mined (sample)

1. Does my IPA always require a MOM medical, or only when the letter says so?
2. Is the Work Permit medical_form.pdf from Google the right form for EP issuance?
3. Can I finish the EP medical overseas before I fly?
4. What if my STVP expires while I wait for chest X-ray / HIV results?
5. Must HR notify MOM one month before cutting my EP salary?
6. If my salary is lowered, does my spouse’s DP get revoked?
7. Do raises need immediate MOM notification before I apply for dependants?
8. Why was my credit card rejected when I already clear the S$45k foreigner floor?
9. What payroll description unlocks OCBC 360 or UOB One bonus interest?
10. Can UOB One earn bonus interest with 3× GIRO instead of salary credit?
11. Do I need a Letter of Guarantee before private-hospital surgery on group medical?
12. Is an EP card enough for foreign-broker DTA rates, or do I need IRAS COR?

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 4)

Branch: `loop/story-aeo-tick4` → PR to `main`. Owns **journey completeness** and **answer-engine shape** after tick 3’s Changi Grab/taxi + CBNI/PayNow FAQPages. Did **not** expand ads/monetization or collide with open Loop A–G body rewrites (EP eligibility / job-change / Multiplier, Home/HDB, SEO shell, services directory left alone).

### Sources mined

**Reddit / forums**

- r/askSingapore — ADHD / benzo / sleep-tablet HSA panic (adjacency in medication + mental-health threads; last-week packing fails).
- r/askSingapore — foreign licence 12-month clock / BTT / JB conversion myth (adjacency in car vs Grab lifestyle threads).
- r/askSingapore — sea-freight GST bills when DOF missing (mover / DHL / personal-effects threads).

**Official**

- [HSA — Travelling with personal medications](https://www.hsa.gov.sg/travelling-with-medication-and-medical-devices/personal-medications/) (3-month non-controlled; controlled prior approval; **≥2 weeks** apply window; transit-without-clearance note).
- [SPF Traffic Police — Singapore Driving Licence](https://www.police.gov.sg/Knowledge-Hub/Traffic/Traffic-Matters/Singapore-Driving-Licence) + [convert appointment](https://www.police.gov.sg/E-Services/Book-Appointment-to-Convert-Foreign-Driving-Licence).
- [Singapore Customs — GST relief for used effects](https://www.customs.gov.sg/personal-shipment/moving-to-singapore/do-i-qualify-for-gst-relief/) + [unaccompanied items / DOF](https://www.customs.gov.sg/personal-shipment/moving-to-singapore/sending-unaccompanied-items/).

### Gaps vs ticks 1–3

Ticks 1–3 shipped SIM→Singpass→bank, SGAC, healthcare/emergency FAQPage, IPA/EPSC, SimplyGo fee, serviced-apartment legality, Changi Grab/taxi, CBNI + PayNow FAQPages. Remaining high-intent **pre-land / settle** gaps: **HSA medication without FAQPage/direct lead** (body existed; 2-week clock under-weighted), **foreign licence 12-month / JB myth without FAQPage**, **household GST relief / DOF without FAQPage** (journey completeness for families shipping crates).

### Shipped this loop

**Upgraded (AEO / journey polish)**

- `content/guides/move/bringing-medication-singapore-hsa.mdx` (direct lead + FAQPage; HSA ≥2-week apply)
- `content/guides/move/converting-foreign-driving-licence.mdx` (direct lead + FAQPage)
- `content/guides/move/shipping-household-singapore.mdx` (direct lead + FAQPage)
- `content/journeys/checklists/day-7.json` (HSA meds item)
- `src/app/journeys/arriving/page.tsx`
- `src/lib/site.ts` (Move topic hrefs for meds / shipping / licence)

### Explicitly not done

- No ads / monetization expansion (existing movers sponsorSlot left as-is).
- No Grok / competitor clone copy.
- Did not rewrite Loop A EP eligibility / job-change / Multiplier bodies or Loop C home/HDB trees.

### Questions mined (sample)

1. Can I bring my prescription medication into Singapore?
2. Do ADHD stimulants or sleeping tablets need HSA approval?
3. How early should I apply for HSA personal-medication approval?
4. Do I declare approved meds at Changi Customs?
5. What if I only transit Singapore without clearing immigration?
6. How long can I drive on a foreign licence as an EP holder?
7. What do I need to convert a foreign driving licence?
8. Can I get a Malaysia licence this weekend and convert it?
9. Do I need to convert if I only take Grab and MRT?
10. Do I pay GST on used household goods shipped to Singapore?
11. What is the Declaration of Facts (DOF) for household shipping?
12. Are brand-new sealed items eligible for GST relief?

---


## Loop B — Family + Belong (tick 5) — 2026-09-15

Branch: `loop/family-belong-tick5` → PR to `main`. Owns **Family** + **Belong** guides plus schools/clubs entity depth only. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next (MDW stays Home-owned; neighbourhood/housing deep guides stay Home-owned).

### Sources mined

**Reddit / forums**

- r/askSingapore — school commute / housing lock-in ([SAS vs OFS vs Stamford](https://www.reddit.com/r/askSingapore/comments/1s7j0lb/moving_to_singapore_with_2_young_kids_help_with/); [Stamford American](https://www.reddit.com/r/askSingapore/comments/1l310j3/is_stamford_american_international_school_a_good/); [Aussie family school bus](https://www.reddit.com/r/askSingapore/comments/1ah4ofa/where_is_an_awesome_place_to_live_in_sg_for_a/); [relocate school realism](https://www.reddit.com/r/askSingapore/comments/1tq770u/consider_relocating_to_singapore_please_help/)).
- r/askSingapore — Mandarin enrichment for IS / non-Mandarin homes ([Berries](https://www.reddit.com/r/askSingapore/comments/1i12wnc/is_berries_worth_it_asking_parents_of_singapore/); [LingoAce](https://www.reddit.com/r/askSingapore/comments/1ls4t8u/lingoace_chinese_lessons_are_they_good/); [home Chinese tutor](https://www.reddit.com/r/askSingapore/comments/1n9uvgo/where_to_find_fun_and_engaging_home_chinese_tutor/); [Mandarin school shortlist](https://www.reddit.com/r/askSingapore/comments/1j6qcys/question_can_someone_help_me_with_choosing_a/)).
- r/askSingapore — preschool / infant care vs helper ([expat preschool fees](https://www.reddit.com/r/askSingapore/comments/1911bks/expats_please_recommend_a_preschool/); [infant care vs helper](https://www.reddit.com/r/askSingapore/comments/1krpxo7/infant_care_or_domestic_helper/); [travel childcare](https://www.reddit.com/r/askSingapore/comments/1jobcri/childcare_options_while_traveling_for_work/); [preschool student visa myth](https://www.reddit.com/r/askSingapore/comments/1auflqg/preschool_student_visa/)).
- r/askSingapore — cash-pay paediatric after-hours ([cash-pay paediatrician](https://www.reddit.com/r/askSingapore/comments/1e73vx8/pediatrician_recommendation_for_nonlocal_pay_via/); [recommend paediatrician](https://www.reddit.com/r/askSingapore/comments/1g54za3/anyone_can_recommend_a_pediatrician_in_sgp/); [foreigner medical diagnosis](https://www.reddit.com/r/askSingapore/comments/v0bgxx/where_can_foreigners_go_to_for_medical_diagnosis/)).
- r/askSingapore — Belong chambers / faith / nationality ([young professional friends](https://www.reddit.com/r/askSingapore/comments/1r69mda/how_to_make_friends_as_a_young_professional/); [young expat groups](https://www.reddit.com/r/askSingapore/comments/1edbojo/groupsevents_to_meet_young_expats/); [engineering networking](https://www.reddit.com/r/askSingapore/comments/1gbmb1l/networking_for_engineers_in_sg/); [SG Catholics church](https://www.reddit.com/r/askSingapore/comments/1i5hlrx/sg_catholics_which_church_to_attend/); [joining church](https://www.reddit.com/r/askSingapore/comments/1ejw01r/joining_church_in_sg/); [where are the Americans?](https://www.reddit.com/r/askSingapore/comments/18bpqu8/where_are_the_americans/)).

**Official**

- [ECDA — Preschool subsidies](https://www.ecda.gov.sg/parents/preschool-subsidies) (SC-child framing for infant/childcare + KiFAS).
- [AmCham Singapore](https://www.amcham.com.sg/) + [BritCham](https://www.britcham.org.sg/) + [EuroCham](https://eurocham.org.sg/) + [AustCham](https://www.austcham.org.sg/).
- [Roman Catholic Archdiocese](https://www.catholic.sg/) + [MUIS](https://www.muis.gov.sg/) + [American Association of Singapore](https://www.aasingapore.com/).
- [CIS](https://www.cis.edu.sg/) + [Dulwich Singapore](https://singapore.dulwich.org/) + [GESS](https://www.gess.sg/) (campus / language pathway verification).

### Gaps vs prior Loop B ticks

Ticks 1–4 covered waitlists/SEN/camps/clubs/LGBTQ/dual-career, newborn/Baby Bonus/leave/marriage/vaccines/mental-health, IVF/maternity/divorce/hobby-sports. Remaining Family/Belong heat: **school-bus commute tax + Woodlands≠Woodleigh**, **Mandarin enrichment vs IS bilingual tracks**, **infant care vs helper for unsubsidised foreigners**, **cash-pay paediatric after-hours triage**, **chambers ROI for young professionals**, **faith soft landing without networking-only etiquette**, **AAS family-heavy American soft landing**. Also restores Loop B tick 4 log entry accidentally overwritten by a later Loop D prepend.

### Shipped this loop

**Upgraded guides**

- `content/guides/family/international-schools-landscape.mdx` (bus/commute table; Mandarin/bilingual tracks; CIS/Dulwich/GESS/Stamford geography)
- `content/guides/family/kids-activities-holiday-camps.mdx` (Mandarin enrichment decision frame)
- `content/guides/family/preschool-childcare-singapore.mdx` (infant care vs helper foreigner stack)
- `content/guides/family/finding-pediatrician-singapore.mdx` (after-hours / cash-pay triage)
- `content/guides/belong/chambers-of-commerce-singapore.mdx` (young-pro / steep association ROI)
- `content/guides/belong/religious-communities-singapore.mdx` (Catholic/OYP soft landing; faith-first etiquette)
- `content/guides/belong/nationality-groups-singapore.mdx` (AAS family-heavy American pattern)
- `content/guides/belong/find-my-people-singapore.mdx` (chambers/faith/nationality cross-links)

**Entity depth (schools / clubs / services)**

- `content/entities/schools/canadian-international-school.json`
- `content/entities/schools/dulwich-college-singapore.json`
- `content/entities/schools/gess.json`
- `content/entities/schools/stamford-american.json`
- `content/entities/schools/overseas-family-school.json`
- `content/entities/clubs/american-association-singapore.json` (new)
- `content/entities/clubs/amcham.json`
- `content/entities/clubs/britcham.json`
- `content/entities/clubs/eurocham.json`
- `content/entities/services/the-tutors.json`

**Log hygiene**

- Restored `Loop B — Family + Belong (tick 4)` section below (was overwritten when Loop D prepended).

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not edit Move / Money / Home / Life / Next trees (MDW / neighbourhood deep guides left owned elsewhere).

### Questions mined (sample)

1. Should we live near SAS Woodlands, OFS Pasir Ris, or Stamford Woodleigh — and how long is the school bus?
2. Is Woodleigh the same as Woodlands when shortlisting Stamford American?
3. Do CIS bilingual tracks actually deliver Mandarin immersion hours past junior school?
4. Is Dulwich Mandarin optional language or a bilingual pathway?
5. Are Berries / LingoAce packages worth it for international-school kids from non-Mandarin homes?
6. As a foreigner, should we choose infant care, a helper, or both when ECDA subsidies do not apply?
7. Can a preschool Student’s Pass replace a Dependant’s Pass for a toddler?
8. Where should cash-pay foreigners take a febrile toddler after hours — poly, panel, Thomson 24h, or KKH ED?
9. Are AmCham/BritCham worth it for mid-20s friendship, or only for BD committees?
10. Are steep industry associations (AAIS/SSIA) just expensive chambers?
11. Which Catholic parish should a CBD transplant try first, and is OYP for newcomers?
12. Is it appropriate to join a church only to make friends?
13. Where are the Americans if not at expat bars — AAS, American Club, or SAS geography?
14. Can smaller-passport families find nationality groups without a megaclub?

---

## Loop B — Family + Belong (tick 4) — 2026-09-15

Branch: `loop/family-belong` → PR to `main`. Owns **Family** + **Belong** guides plus schools/clubs entity depth only. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next (MDW stays Home-owned; ActiveSG facilities depth stays Life-owned).

### Sources mined

**Reddit / forums**

- r/askSingapore — IVF / fertility financing ([IVF options and cost](https://www.reddit.com/r/askSingapore/comments/1rzjjfj/couples_who_gone_through_ivf_in_singapore_what/); [public IVF options](https://www.reddit.com/r/askSingapore/comments/1p02anc/public_ivf_options_in_singapore/); [KKH fertility](https://www.reddit.com/r/askSingapore/comments/1rqlga7/fertility_treatments_kkh_advice_needed/); [trying after 38](https://www.reddit.com/r/askSingapore/comments/1ewu432/women_who_have_are_trying_for_kids_after_38_in/); [conceive support](https://www.reddit.com/r/askSingapore/comments/1raofat/for_those_who_have_been_trying_to_conceive/)).
- r/askSingapore — maternity insurance / DP spouse gaps ([maternity cover for DP wife](https://www.reddit.com/r/askSingapore/comments/1g76uwq/can_anyone_share_their_experience_with_insurance/); [foreign spouse pregnant](https://www.reddit.com/r/askSingapore/comments/x14pk6/foreign_spouse_pregnant_whats_your_experience_as/); [parental leave corporates](https://www.reddit.com/r/askSingapore/comments/196mitu/parental_leave_in_corporates/)).
- r/askSingapore — divorce / LTVP / PPO ([divorce foreign spouse custody](https://www.reddit.com/r/askSingapore/comments/x6dksp/anybody_divorced_a_foreign_spouse_and_share_kids/); [LTVP baby threat](https://www.reddit.com/r/askSingapore/comments/1k7hpf3/ltvp_wife_threatens_to_take_baby_away/); [remarry without dissolve](https://www.reddit.com/r/askSingapore/comments/1sz2ouu/can_a_foreigner_who_got_married_in_singapore_get/); [PPO summons](https://www.reddit.com/r/askSingapore/comments/17qfrak/summoned_to_attend_family_court_hearing/); [DV + divorce](https://www.reddit.com/r/askSingapore/comments/1ja4ei3/anyone_that_can_share_their_experience_with/)).
- r/askSingapore — Belong via hobby sport ([Reclub pickleball](https://www.reddit.com/r/askSingapore/comments/1u4qy8o/pickleball_games_training_community/); [pickleball venues](https://www.reddit.com/r/askSingapore/comments/1l6xsnv/pickleball_venues_in_singapore/); [running clubs](https://www.reddit.com/r/askSingapore/comments/1tcmff8/do_you_have_any_running_club_recommendations/); [Meetup relocate](https://www.reddit.com/r/askSingapore/comments/1n4xf99/recently_relocated_to_singapore_are_there_any/); [expat friends](https://www.reddit.com/r/askSingapore/comments/1qr196s/expat_friends_group_in_singapore/)).
- r/askSingapore — school shortlist adjacency ([SAS vs OFS housing](https://www.reddit.com/r/askSingapore/comments/1s7j0lb/moving_to_singapore_with_2_young_kids_help_with/); [relocate school realism](https://www.reddit.com/r/askSingapore/comments/1tq770u/consider_relocating_to_singapore_please_help/)).

**Official**

- [MOH — Marriage and Parenthood schemes](https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/marriage-and-parenthood-schemes/) (ART co-funding tiers incl. SC–foreigner 35%; MediSave maternity; PGT tables).
- [MOH — Elective egg-freezing](https://www.moh.gov.sg/newsroom/updates-on-prices-and-procedures-for-elective-egg-freezing-in-singapore/) + [SC + foreign spouse IVF reply](https://www.moh.gov.sg/newsroom/support-available-for-singaporeans-and-foreign-spouses-seeking-ivf-treatment/).
- [Judiciary — Apply for PPO](https://www.judiciary.gov.sg/family/apply-personal-protection-order) + respond-to-PPO path; [Divorce requirements](https://www.judiciary.gov.sg/family/understand-requirements-getting-divorce).
- [Reclub](https://reclub.co/) + [West Coast Park parkrun](https://www.parkrun.sg/westcoast/).

### Gaps vs prior Loop B ticks

Ticks 1–3 covered schools/waitlists/SEN/camps/clubs/volunteering/LGBTQ/dual-career, newborn DP/Baby Bonus/leave/marriage/vaccines/mental-health soft landing. Remaining Family/Belong heat: **exact MOH ART tiers + elective egg freezing + PGT cash**, **DP spouse maternity insurance + foreigner private billing**, **LTVP expire ≠ divorce + PPO/EO depth**, **kids orthodontics cash**, **Reclub/parkrun belonging playbook** (Life keeps ActiveSG facilities; Home keeps MDW).

### Shipped this loop

**New guides**

- `content/guides/belong/hobby-sports-communities-singapore.mdx`

**Upgraded guides**

- `content/guides/family/ivf-fertility-foreigners-singapore.mdx`
- `content/guides/family/maternity-care-singapore.mdx`
- `content/guides/family/divorce-custody-foreigners-singapore.mdx`
- `content/guides/family/family-violence-ppo-foreigners.mdx`
- `content/guides/family/dental-care-foreigners-singapore.mdx`
- `content/guides/belong/find-my-people-singapore.mdx`
- `content/guides/belong/hash-house-harriers.mdx`
- `content/guides/family/international-schools-landscape.mdx`

**Entity depth (schools / clubs / services)**

- `content/entities/schools/overseas-family-school.json` (Pasir Ris campus correction)
- `content/entities/schools/nexus-international.json`
- `content/entities/schools/xcl-world-academy.json`
- `content/entities/clubs/singapore-cricket-club.json`
- `content/entities/services/family-law-expat.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not edit Move / Money / Home / Life / Next trees (no MDW fork; no ActiveSG facilities rewrite).

### Questions mined (sample)

1. Do EP–EP couples get any MOH IVF co-funding at KKH/NUH?
2. What is the published co-funding % for an SC + foreigner couple on a fresh ART cycle?
3. Can I start co-funded IVF after 40 if I never tried AR before 40?
4. Does elective egg freezing qualify for MediSave or ART co-funding?
5. Why is PGT still a huge cash bill even on the public path?
6. My company covers me on EP — will it cover my DP wife’s maternity and delivery?
7. If I get a polyclinic referral to KKH as a foreigner, do I get subsidised maternity rates?
8. Can EP holders use the MediSave Maternity Package?
9. If we separate, can I just not renew my spouse’s LTVP — and does that end the marriage?
10. Does leaving Singapore and letting the LTVP expire dissolve a Women’s Charter marriage?
11. What is an Expedited Order vs a PPO, and can unmarried partners use PPO?
12. I was summoned as a PPO respondent — do I have to attend?
13. Are kids’ braces covered by typical expat group dental riders?
14. How do beginners actually find pickleball games — Reclub drills or ActiveSG courts?
15. Is parkrun a realistic first social ritual before joining a paid run club?

---

## Loop F — Services directory depth — 2026-09-15

Branch: `loop/services-directory` → PR to `main`. Owns **services directory** entities + service detail UI fields only. Did **not** touch neighbourhoods (Loop C), schools/clubs (Loop B), or pillar guides (A–D). No ads / featured / monetization expansion. No Grok copy.

### Sources mined

**Reddit / forums**

- r/askSingapore — tax agents / IR21 / ESOP filing ([tax accountant worth it](https://www.reddit.com/r/askSingapore/comments/l965lj/tax_accountant_singapore_worth_it/); [expat income tax](https://www.reddit.com/r/askSingapore/comments/15iwnrp/income_tax_question_for_expats_in_singapore/); [ESOP no local entity](https://www.reddit.com/r/askSingapore/comments/1it3g96/esop_tax_filing_but_my_company_does_not_have_a/); [IR21 withhold explain](https://www.reddit.com/r/askSingapore/comments/119uwo8/hr_tax_qn_how_do_you_explain_to_your_employee/); [left after EP cancel + overdue tax](https://www.reddit.com/r/askSingapore/comments/1r8ztij/left_singapore_after_ep_cancellation_may_2024_and/)).
- r/askSingapore — dental foreigner fees / polyclinic path ([wisdom tooth EP MediSave myth](https://www.reddit.com/r/askSingapore/comments/1on4gnd/wisdom_tooth_extraction_as_a_foreigner/); [dentist via polyclinic](https://www.reddit.com/r/askSingapore/comments/1tvfr6l/is_seeing_a_dentist_via_polyclinic_possible/); [public dental route](https://www.reddit.com/r/askSingapore/comments/rga3uj/how_to_receive_dental_treatment_via_the_public/)).
- r/askSingapore — notary / apostille / LTVP translation quotes ([US form notarize](https://www.reddit.com/r/askSingapore/comments/1qgzuba/need_to_get_a_usa_institutions_form_notarized/); [LTVP translation cost](https://www.reddit.com/r/askSingapore/comments/1rff1fu/translation_of_documents_for_ltvp/)).
- r/askSingapore — movers + self-storage / condo lift deposits ([mover with storage](https://www.reddit.com/r/askSingapore/comments/1rvaxn6/mover_with_storage_recommendations/); [condo move deposit](https://www.reddit.com/r/askSingapore/comments/1uf6vp6/deposit_for_moving_into_condo/); [lift padding fee](https://www.reddit.com/r/askSingapore/comments/18lse0i/condo_manager_charging_for_lift_padding/); [padding responsibility](https://www.reddit.com/r/askSingapore/comments/1l3vp58/condo_lift_padding_whose_responsible_to_install/)).
- r/askSingapore — immigration counsel adjacency (PR rejection / agency myths — reinforce category-guide honesty, not ranked firms) ([PR rejection advice](https://www.reddit.com/r/askSingapore/comments/1d4mbr2/rejected_pr_application_seeking_advice/); [agencies caution](https://www.reddit.com/r/askSingapore/comments/1sx0502/considering_applying_for_singapore_pr_after_only/)).

**Official**

- [IRAS — Tax agents](https://www.iras.gov.sg/quick-links/tax-agents) + [tax clearance for employees (IR21)](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees) + [tax residency](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/working-out-my-tax-residency) + [Certificate of Residence](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/apply-for-certificate-of-residence).
- [MOH — Guide to dental treatment costs](https://www.moh.gov.sg/managing-expenses/bills-and-fee-benchmarks/guide-to-dental-treatment-costs/).
- [SAL — Notaries Public directory](https://legalisation.sal.sg/Directory) + [legalisation FAQ](https://legalisation.sal.sg/Faq).
- [AVS — Importing dogs and cats](https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/import/dogs-and-cats/) + [recognised pet agents / CAPQ](https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/general-information/).
- [Singapore Customs — moving to Singapore / GST relief](https://www.customs.gov.sg/personal-shipment/moving-to-singapore/).
- [CEA — Public register](https://www.cea.gov.sg/public-register/) + [MOM FDW / SIP](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker).

### Gaps vs prior directory state

Directory had movers, clinics, agents, FDW, tutors, insurance, legal stubs, and telecom “other” — but **no tax category**, thin practical fields (no engage-when / official links / related guides on detail UI), and missing high-intent category guides for **dental**, **notary/apostille**, **self-storage**, and **pet relocation** (AVS agent rule). Existing brand listings were summary-only.

### Shipped this loop

**Schema + UI**

- `src/lib/content/schemas.ts` — `tax` category; `whenToEngage`, `officialLinks`, `relatedGuides` on services
- `src/app/directory/[category]/[slug]/page.tsx` — render engage-when chips, related guides, official source links

**New service entities**

- `content/entities/services/tax-agents.json`
- `content/entities/services/dental-care.json`
- `content/entities/services/notary-apostille.json`
- `content/entities/services/self-storage.json`
- `content/entities/services/pet-relocation.json`

**Upgraded all 18 existing service entities** with whenToEngage + officialLinks + relatedGuides (immigration, family law, movers, clinics, agents, FDW, telecom, tutors, insurance).

### Explicitly not done

- No ads / featured / monetization expansion (existing sponsored flags left as-is).
- No Grok / third-party clone copy.
- Did not edit neighbourhoods, schools, clubs, or pillar guide MDX trees.

### Questions mined (sample)

1. Do I need a tax accountant for a simple Singapore salary year?
2. Who files IR21 — me or my employer — and why is final pay withheld?
3. How do I declare ESOP/RSU gains when there is no local IR8A entity?
4. As an EP holder, can I use MediSave for wisdom-tooth surgery?
5. Is polyclinic dental usable for foreigners, and what do referrals cost?
6. Where do I find a Singapore notary / apostille for a US form?
7. Why are overseas LTVP translation+apostille quotes thousands of dollars?
8. Which movers also offer self-storage for a reno / lease gap?
9. Who pays the condo lift-padding fee and damage deposit?
10. Do I need an AVS-recognised pet agent for CAPQ clearance (esp. from Apr 2026)?
11. Should I hire an immigration agency for a first PR application?
12. When is immigration counsel worth it vs employer-led EP filing?

---

## Loop C — Home + Life (parallel) — Tick 21 — 2026-09-15

Branch: `loop/home-life-t21e` (rebase of #17 onto latest main) → PR to `main`. Owns **Home** + **Life** guides and neighbourhood entities only.

### Sources mined

**Reddit**

- r/askSingapore — HDB landlord selling mid-lease / vacant possession vs sale-with-tenancy folklore ([2yr contract owner sells](https://www.reddit.com/r/askSingapore/comments/1lidib5/renting_a_hdb_with_2yrs_contract_but_owner_wants/); rental nightmare / deposit leverage adjacency ([rental nightmare](https://www.reddit.com/r/askSingapore/comments/1sftqn4/rental_nightmare_in_singapore/); first-timer condo ask list ([questions for agent](https://www.reddit.com/r/askSingapore/comments/1oeici6/firsttimer_in_renting_a_condo_unit_what_are_some/))).
- r/askSingapore — HDB bedroom rental / owner continuous occupation / illegal partitions ([owner stay weekly](https://www.reddit.com/r/askSingapore/comments/1mzsjy6/inquiry_about_renting_hdb_with_owner_stay/); [partition room](https://www.reddit.com/r/askSingapore/comments/1kaidl9/isit_ever_legal_in_singapore_to_rent_out_a_hdb/); landlord enter room adjacency).
- r/askSingapore — adjacent construction / BTO site noise vs condo reno ([construction past 2am](https://www.reddit.com/r/askSingapore/comments/1g3vf5r/where_to_report_loud_ongoing_construction_that/); [BTO beside block](https://www.reddit.com/r/SingaporeRaw/comments/1reztv8/bto_construction_noise_beside_my_block_driving_me/)).
- r/askSingapore — SP cut-off after previous tenant / ownership transfer ([previous tenant cut-off](https://www.reddit.com/r/askSingapore/comments/1cbtcet/sp_services_cut_off_supplies_due_to_previous/); [ownership transfer](https://www.reddit.com/r/askSingapore/comments/1jml1sd/power_cutoff_due_to_ownership_transfer_any_way_to/)).
- r/askSingapore — neighbourhood shortlists west/northeast ([non-expat areas](https://www.reddit.com/r/askSingapore/comments/195ji13/nonexpat_areas_for_expat/); [east vs west](https://www.reddit.com/r/askSingapore/comments/xxx5wb/renting_in_east_vs_west/); [best towns](https://www.reddit.com/r/askSingapore/comments/1qq0fly/what_are_the_best_towns_to_live_in_singapore_and/)).

**Official**

- [HDB — Resale completion](https://www.hdb.gov.sg/residential/selling-a-flat/resale-completion) + [temporary extension of stay](https://www.hdb.gov.sg/cs/infoweb/residential/selling-a-flat/resale-application/request-for-temporary-extension-of-stay) + resale T&Cs.
- [HDB — Tenant eligibility](https://www.hdb.gov.sg/residential/renting-a-flat/renting-from-the-open-market/eligibility) + [renting-out flat eligibility](https://www.hdb.gov.sg/residential/renting-out-a-flat-bedroom/renting-out-your-flat/eligibility) + [regulations / continuous occupation](https://www.hdb.gov.sg/business/estate-agents-and-salespersons/renting-out-a-flat-or-bedroom/regulations-for-renting-out-flats) + [gov.sg owner explainer](https://www.gov.sg/explainers/renting-out-your-hdb-flat-a-homeowners-guide/).
- [NEA — Construction noise control](https://www.nea.gov.sg/our-services/pollution-control/noise-pollution/construction-noise-control) + [FAQs](https://www.nea.gov.sg/our-services/pollution-control/noise-pollution/construction-noise-control/frequently-asked-questions-(faqs)) + [Sunday/PH no-work rule](https://www.nea.gov.sg/our-services/pollution-control/noise-pollution/construction-noise-control/work-on-sundays-and-ph) + [OneService](https://www.oneservice.gov.sg/).
- [CEA — Tenancy templates](https://www.cea.gov.sg/real-estate-professionals/agreements-and-checklists/) + [SP open account](https://openaccount.spgroup.com.sg/#/open-account/).

### Gaps vs Tick 20 (Home + Life slice)

Tick 20 shipped fibre TP / NetLink, mould remediation, CDRT + secondhand smoke, bulky waste / laundry poles, Katong–Tampines–Clementi–Bukit Timah entity depth. Remaining high-intent Home+Life gaps matched forum heat: **HDB mid-lease sale / vacant possession**, **bedroom rental continuous-occupation + illegal partitions**, **adjacent BTO/site construction noise (NEA rail)**, SP ownership-transfer cut-offs, plus **Punggol** and **Jurong East** neighbourhood entities. Dengue inspections already covered under Life emergencies — left alone.

### Shipped this tick

**New guides**

- `content/guides/home/hdb-landlord-selling-tenants.mdx`
- `content/guides/home/hdb-bedroom-rental-rules-tenants.mdx`
- `content/guides/home/construction-site-noise-renters.mdx`

**Upgraded guides (depth + citations + cross-links + lastReviewed 2026-09-15)**

- `content/guides/home/condo-noise-mcst-neighbours.mdx` (site-noise row + cross-link)
- `content/guides/home/heartland-living-for-expats.mdx` (approval / sale / construction + Punggol/Jurong entities)
- `content/guides/home/choosing-neighbourhood-expat.mdx` (construction constraint + west/northeast shortlist)
- `content/guides/home/renting-process-loi-ta-deposits.mdx` (HDB approval + sale clause asks)
- `content/guides/home/security-deposit-diplomatic-clause.mdx` (sale / bedroom adjacency)
- `content/guides/home/utilities-telecom-setup.mdx` (ownership-transfer cut-off playbook)
- `content/guides/home/moving-within-singapore.mdx` (HDB Town Council lift booking)

**Neighbourhood entity depth**

- `content/entities/neighbourhoods/punggol.json`
- `content/entities/neighbourhoods/jurong-east.json`

### Explicitly not done

- No ads/monetization expansion (existing sponsorSlots left as-is).
- No copying of third-party “expat-sg” / Grok clones.
- Did not edit Move/Money/Family/Belong/Next guides owned by other loops.
- Did not re-litigate Tick 19–20 fibre/mould/CDRT/pets/ceiling-leak topics beyond cross-links.

### Questions mined (sample)

1. My HDB landlord is selling three months into a two-year lease — does the contract die automatically?
2. Is “sale with tenancy” a real option for HDB the way it is for condos?
3. How much notice and compensation should I negotiate for viewings and early move-out?
4. Can the listing agent keep a set of keys and bring buyers when I am at work?
5. Is it legal to rent an HDB bedroom when the owner only visits from Malaysia on weekends?
6. How do I verify the landlord actually got HDB approval to rent out the bedroom or whole flat?
7. Is a partitioned living-room “bedroom” ever lawful, and can I use that to exit and reclaim my deposit?
8. Who do I call when BTO piling next door runs past midnight — MCST, police, or NEA?
9. Does construction noise let me break the lease or demand a rent cut?
10. SP cut power after the previous tenant’s arrears / an ownership transfer — how do I get reconnected while living there?
11. Punggol vs Jurong East vs Tampines — which fits a west-office vs NEL-office family?
12. Should I walk empty plots at 8am before I LOI a “quiet” heartland unit?

---

## Loop A — Move + Money — 2026-09-15 (tick 3)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `loop/move-money-tick3` (from main `@229508e`).

### Sources mined

**Reddit**

- r/askSingapore — EP residential address / FWTES landlord blockers / 5-day clock ([EP holder stuck FWTES](https://www.reddit.com/r/askSingapore/comments/1oaf0dl/ep_holder_stuck_landlord_wont_enable_fwtes_so_i/); [update address in Singpass](https://www.reddit.com/r/askSingapore/comments/1l2wbjh/how_to_update_address_in_singpass/); adjacency in short-stay rental threads).
- r/askSingapore — passport particulars / auto-gates after renew ([update passport particulars](https://www.reddit.com/r/askSingapore/comments/11sji0w/update_passport_particulars/); travel without EP card adjacency: [lost EP in Malaysia](https://www.reddit.com/r/askSingapore/comments/12g8yk6/lost_my_employment_pass_ep_in_malaysia_on_a/); [forgot EP card](https://www.reddit.com/r/askSingapore/comments/yfm0ut/forgot_ep_card_at_home_how_do_i_travel_back/)).
- r/askSingapore — Singpass IPA vs issued FIN ([Singpass with temp EP or IPA](https://www.reddit.com/r/askSingapore/comments/1ehccsc/singpass_with_temp_ep_or_ipa/); [expat SingPass day-one](https://www.reddit.com/r/askSingapore/comments/wfwo76/expat_arrived_from_australia_last_evening_can_i/)).
- r/askSingapore — changing jobs on EP / resign-after-IPA / dual pending ([changing job under EP](https://www.reddit.com/r/askSingapore/comments/uefner/changing_job_under_ep/); [EP process on company change](https://www.reddit.com/r/askSingapore/comments/120shl1/ep_process_on_company_change/)).
- r/askSingapore — first-year tax residency / ≥1-year pass / straddling ([income tax for expats](https://www.reddit.com/r/askSingapore/comments/15iwnrp/income_tax_question_for_expats_in_singapore/); [tax for a foreigner](https://www.reddit.com/r/askSingapore/comments/1fl09aq/info_about_tax_for_a_foreigner/); [moving timing for income tax](https://www.reddit.com/r/askSingapore/comments/19b12g0/moving_to_sg_timing_for_income_tax_foreigner/)).
- Banking product heat — Multiplier salary-credit recognition (DBS docs + recurring “why no bonus interest” peer advice).

**Official**

- [MOM — Notify MOM of EP updates](https://www.mom.gov.sg/passes-and-permits/employment-pass/notify-mom-of-changes) + [FWTES](https://www.mom.gov.sg/eservices/services/tes) + [OFWAS](https://www.mom.gov.sg/eservices/services/ofwas) + [EP eService](https://www.mom.gov.sg/eservices/services/employment-pass-eservice).
- [MOM — Change jobs while on an EP](https://www.mom.gov.sg/faq/employment-pass/what-if-i-want-to-change-jobs-while-i-am-on-an-ep).
- [IRAS — Working out my tax residency](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/working-out-my-tax-residency) (≥1-year work-pass treatment + clearance review).
- [DBS — Multiplier](https://www.dbs.com.sg/personal/deposits/bank-earn/multiplier) + [FAQs](https://www.dbs.com.sg/personal/deposits/multiplier/faqs.page) + [eligible transactions](https://www.dbs.com.sg/personal/support/bank-multiplier-eligible-transactions.html).

### Gaps vs prior Loop A ticks (Move + Money scope)

Tick 1 shipped EP floors / COMPASS clocks, EP vs S Pass, CBNI, no-FIN banking, remittance MPI/SoF, IR21 job-hop cashflow, group medical portability. Tick 2 shipped EP-cancel STVP asks, DP cascade / LOC renewal, PayNow FIN vs mobile, CPF withdrawal myths. Remaining high-intent Move/Money gaps matched this mine: **5-day address/mobile + FWTES landlord blockers**, **passport particulars / auto-gate lag**, **Singpass IPA vs FIN**, **dedicated change-jobs resign-after-IPA playbook**, **≥1-year pass tax-resident treatment vs clearance reclassification**, **Multiplier salary-credit recognition for EP payroll**. Home-owned short-stay FWTES mentions stay thin pointers — Move now owns the pass-holder ops guide.

### Shipped this loop

**New guides**

- `content/guides/move/ep-notify-mom-address-passport.mdx`
- `content/guides/move/changing-jobs-employment-pass.mdx`
- `content/guides/money/high-interest-salary-accounts-foreigners.mdx`

**Upgraded guides (depth + citations + cross-links + lastReviewed 2026-09-15)**

- `content/guides/move/employment-pass-singapore.mdx`
- `content/guides/move/first-housing-serviced-apartment.mdx`
- `content/guides/move/relocation-checklist-7-30-90.mdx`
- `content/guides/money/opening-bank-account-expat.mdx`
- `content/guides/money/iras-tax-residency-filing.mdx`
- `content/guides/money/financial-planning-year-one.mdx`
- `content/guides/money/salary-package-decoding.mdx`

**Entity depth**

- `content/entities/services/intact-immigration.json` (FWTES / passport / job-change IPA)

### Explicitly not done

- No ads/monetization expansion (no Multiplier sponsorSlot).
- No Grok / third-party clone copy.
- Did not edit Family / Belong / Home / Life / Next heavily (lost-card + between-jobs STVP + EP renewal remain Next-owned; Home short-stay keeps adjacency only).

### Questions mined (sample)

1. My landlord will not enable FWTES — how do I update my EP address within 5 days?
2. After I renew my passport, when can I use automated immigration gates again?
3. Can I register Singpass with only an IPA / temporary EP letter?
4. Should I resign before or after the new employer’s EP IPA?
5. Can two companies file EPs for me at the same time while one IPA is pending?
6. Does my FIN change when I change employers on EP?
7. Why does IR21 still withhold my final pay if I am staying in Singapore on a new EP?
8. Does a ≥1-year EP make me a tax resident even if I arrive mid-year under 183 days?
9. Why is my DBS Multiplier still on base rate when salary hits my account?
10. What payroll description / GIRO code does HR need so Multiplier recognises income?

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 3)

Branch: `loop/story-aeo-tick3` → PR to `main`. Owns **journey completeness** and **answer-engine shape** after tick 2’s EPSC / SimplyGo / serviced-apartment FAQs. Did **not** expand ads/monetization or collide with open Loop A–G body rewrites (EP eligibility / job-change, Home/HDB, SEO shell, services directory left alone).

### Sources mined

**Reddit / forums**

- r/askSingapore — Changi Grab vs taxi / payment ([airport transportation](https://www.reddit.com/r/askSingapore/comments/1gukbru/airport_transportation/); [coming next week advice](https://www.reddit.com/r/askSingapore/comments/1d8ma13/coming_to_singapore_next_week_need_advice/)).
- r/askSingapore — cash “limit” myths and suitcase financing (adjacency in remittance / first-month float threads).
- r/askSingapore — PayNow FIN vs recycled prepaid / wrong-number traps (adjacency with bank-open and remittance threads).

**Official**

- [LTA — Taxi fares & payment methods](https://www.lta.gov.sg/content/ltagov/en/getting_around/point_to_point_transport_and_cross_border_services/taxi_fares_payment_methods.html) (Changi location surcharge S$6 / S$8; peak / late-night %).
- [Grab — Changi Airport transfers](https://www.grab.com/global/airport-rides/changi-airport/) (upfront fare framing).
- [ICA — Taking cash in and out of Singapore (CBNI)](https://www.ica.gov.sg/enter-transit-depart/at-our-checkpoints/for-travellers/CBNI) (S$20k threshold; 72-hour e-727; post-13 May 2024 electronic receipt).
- [ABS — PayNow](https://www.abs.org.sg/e-payments/pay-now) + [PayNow fact sheet](https://abs.org.sg/docs/library/paynow_factsheet.pdf) (FIN / mobile / VPA proxies).

### Gaps vs ticks 1–2

Tick 1 shipped SIM→Singpass→bank, SGAC, healthcare/emergency FAQPage. Tick 2 shipped IPA/Notification Letter/EPSC, SimplyGo foreign-card fee, serviced-apartment legality. Remaining high-intent **landing-day** gaps: **Grab vs taxi from Changi** (no dedicated guide; MRT guide only answered “when Grab wins” for daily rides), **CBNI S$20k myth without FAQPage/direct lead**, **PayNow FIN vs mobile without FAQPage** (dependency map pointed here but answer-engine shape was thin).

### Shipped this loop

**New**

- `content/guides/life/changi-airport-grab-taxi.mdx`

**Upgraded (AEO / journey polish)**

- `content/guides/money/cbni-cash-declaration-singapore.mdx` (direct lead + FAQPage)
- `content/guides/money/paynow-setup-foreigners-singapore.mdx` (direct lead + FAQPage)
- `content/guides/life/mrt-bus-transport-literacy.mdx` (Changi cross-link)
- `content/journeys/checklists/day-7.json` (airport-transfer item)
- `src/app/journeys/arriving/page.tsx`
- `src/lib/site.ts` (Arriving start-here + Move/Life/Money topic hrefs)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / competitor clone copy.
- Did not rewrite Loop A EP eligibility / job-change bodies or Loop C home/HDB trees.

### Questions mined (sample)

1. Should I take Grab or a taxi from Changi Airport?
2. What is the Changi Airport taxi surcharge right now?
3. Do I need Singapore dollars cash for the taxi queue?
4. Can I take the MRT from Changi with luggage?
5. Where do I pick up Grab at my terminal?
6. Is there a cash limit when entering Singapore?
7. When must I submit the CBNI / NP 727 declaration?
8. Do bank wires or Wise need a CBNI form?
9. Do I still hand a paper form at the Red Channel?
10. Can foreigners use PayNow without a local bank account?
11. Should I register PayNow to FIN or mobile?
12. Why did money sent to my new +65 number go to someone else?

---

## Loop G — SEO, internal linking, hub polish — 2026-09-15

Branch: `loop/seo-crosslinks` → PR to `main`. Owns sitemap/robots/metadata helpers, pillar hub index pages, related-guides wiring, breadcrumbs, JSON-LD, and app-shell internal linking. Did **not** rewrite A–D guide bodies; no ads / Grok copy. Rebased onto Loop H (kept FAQPage schema / ModeHub how-to).

### Gaps closed

- Pillar hub topics mostly pointed at generic `/guides` — rewired to cornerstone guide URLs (and directories where appropriate) in `src/lib/site.ts`.
- Pillar / mode / guides hubs lacked canonical + OG via `buildPageMetadata`.
- No breadcrumbs (UI or BreadcrumbList JSON-LD) on guides or pillar hubs.
- Guides index did not deep-link to pillar hubs; pillar hubs did not list featured guides.
- Related-guides fill ignored reciprocal frontmatter links.

### Shipped this loop

- `src/lib/seo.ts` — `breadcrumbJsonLd`, `collectionPageJsonLd` (kept Loop H `faqJsonLd`)
- `src/components/seo/Breadcrumbs.tsx` (+ export)
- `src/lib/site.ts` — topic hrefs → real guides; related “All guides”
- `src/components/pillars/PillarPage.tsx` — breadcrumbs, CollectionPage JSON-LD, featured guides (+ Loop H how-to)
- Guide article / meta bar / guide page — breadcrumbs + pillar deep links + BreadcrumbList JSON-LD (+ FAQPage)
- Guides index — pillar hub strip, hub headings, CollectionPage JSON-LD
- Pillar + Arriving/Living pages — `buildPageMetadata` with canonical paths
- `getRelatedGuides` — prefer reciprocal same-pillar links before chronological fill

### Explicitly not done / notes for other loops

- No mass reciprocity edits across 200+ one-way `relatedGuides` pairs (shell fill handles ranking).
- Did not expand ads / sponsor inventory.

---

## Loop H — Storytelling + AEO — 2026-09-15 (tick 2)

Branch: `loop/story-aeo-tick2` → PR to `main`. Owns **journey completeness** and **answer-engine shape** after tick 1’s SIM/SGAC/FAQPage foundation. Did **not** expand ads/monetization or collide with open Loop A–G body rewrites (FWTES / EP job-change / HDB / SEO shell / services directory left alone).

### Sources mined

**Reddit / forums**

- r/askSingapore — IPA vs Notification Letter / when can I work / Singpass before plastic card ([start work with IPA only](https://www.reddit.com/r/askSingapore/comments/16i7zxi/start_work_with_ipa_only/); [EP but no IPA yet](https://www.reddit.com/r/askSingapore/comments/16kc2jf/i_have_the_ep_but_no_ipa_yet/); [Singpass after Notification Letter](https://www.reddit.com/r/askSingapore/comments/wfwo76/expat_arrived_from_australia_last_evening_can_i/); [EP related IPA delay](https://www.reddit.com/r/askSingapore/comments/1f1jnjh/ep_related/)).

**Official**

- [MOM — Apply for an Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/apply-for-a-pass/) (IPA → issue → Notification Letter 1 month → EPSC within 2 weeks → card ~5 working days; SGWorkPass).
- [MOM — Key facts on Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/key-facts).
- [SimplyGo — Contactless bank cards FAQ](https://simplygo.com.sg/faqs/cards-and-charms/simplygo/contactless-bank-cards/) (S$0.60/day foreign-card admin fee).
- [URA — Short-term accommodation](https://www.ura.gov.sg/guidelines/property-and-business-owners/property/short-term-accommodation/).

### Gaps vs tick 1

Tick 1 shipped SIM→Singpass→bank, SG Arrival Card, healthcare/emergency FAQs, FAQPage schema. Remaining high-intent **arriving** gaps: **can I work on IPA alone / Notification Letter / EPSC bag list / card delivery** (only buried in appeal guide + day-7 MOM deep-link), **SimplyGo foreign-card fee** (MRT guide had no FAQ/lead), **serviced apartment legality + address for banks/MOM** (housing bridge lacked FAQPage).

### Shipped this loop

**New**

- `content/guides/move/work-pass-issuance-epsc-notification.mdx`

**Upgraded (AEO / journey polish)**

- `content/guides/life/mrt-bus-transport-literacy.mdx` (direct lead + FAQPage)
- `content/guides/move/first-housing-serviced-apartment.mdx` (direct lead + FAQPage)
- `content/guides/move/first-week-sim-singpass-bank.mdx` (cross-links)
- `content/guides/move/ep-rejection-appeal-ipa-issuance.mdx` (cross-link only)
- `content/journeys/checklists/day-7.json` (EPSC + SimplyGo hrefs)
- `src/app/journeys/arriving/page.tsx`
- `src/lib/site.ts` (Arriving start-here + Move/Life topic hrefs)

### Explicitly not done

- No ads / monetization expansion.
- No Grok / competitor clone copy.
- Did not rewrite Loop A EP eligibility / job-change bodies or Loop C home/HDB trees.

### Questions mined (sample)

1. Can I start work with only an IPA letter?
2. What is the MOM Notification Letter, and how long is it valid?
3. Do I need the physical EP card before I can work?
4. How soon must I attend EPSC for fingerprints and photo?
5. When does the physical work pass card arrive, and what if delivery fails?
6. Can I ride MRT/buses on a foreign credit card, and what is the SimplyGo admin fee?
7. Do I need an EZ-Link as a new expat?
8. Why was I charged the maximum MRT fare?
9. Should I book a serviced apartment for my first weeks?
10. Is a condo Airbnb short-let legal under three months?
11. Can a serviced-apartment address work for bank opening and MOM issuance?
12. When should I update my MOM residential address after the bridge stay?

---

## Loop H — Storytelling + AEO — 2026-09-15

Branch: `loop/story-aeo` → PR to `main`. Owns **journey completeness**, **answer-engine shape** (FAQ leads, FAQPage JSON-LD, decision tables), Arriving/Living hub framing, and surgical FAQ upgrades. Did **not** expand ads/monetization or wholesale-rewrite guides owned by Loops A–G this hour.

### Questions mined (forum-shaped)

1. Do I need Singpass before I can open a Singapore bank account?
2. Can I buy a +65 SIM with only passport / IPA?
3. What is the real order: SIM → pass → Singpass → bank → PayNow?
4. Does Singpass SMS 2FA work with my home-country number?
5. What is the SG Arrival Card, and when must I submit it?
6. Is SG Arrival Card a visa?
7. I have an EP IPA — which SGAC path do I use?
8. What should I actually do in the first 7 days?
9. 995 or 999 — which number for medical vs police?
10. Should expats use a polyclinic or a private GP?
11. When is A&E right vs wait-for-GP?
12. Will my embassy pay hospital bills or cancel a dengue fine?

### Answer-engine shape added

- Optional `faqs[]` frontmatter → **FAQPage JSON-LD** on guide pages (`faqJsonLd` in `src/lib/seo.ts`).
- Direct-answer leads (first ~40–60 words), question-shaped H2s, numbered procedures, comparison tables, ICA/MOM/MOH/SCDF/SPF/DBS citations.
- Arriving/Living ModeHub **“How to use”** + start-here answer links; Move/Family/Life pillar topics pointed at live guides; day-7 checklist + arriving journeys page cross-links.

### Shipped

**New**

- `content/guides/move/first-week-sim-singpass-bank.mdx`
- `content/guides/move/sg-arrival-card-expats.mdx`

**Upgraded (AEO / journey polish)**

- `content/guides/move/relocation-checklist-7-30-90.mdx`
- `content/guides/family/healthcare-gp-hospital.mdx`
- `content/guides/life/emergencies-995-999-embassies.mdx`
- `content/guides/money/opening-bank-account-expat.mdx` (FAQ + cross-link)
- `content/guides/home/utilities-telecom-setup.mdx` (FAQ + cross-link)
- `content/journeys/checklists/day-7.json`
- `src/app/journeys/arriving/page.tsx`
- `src/components/modes/ModeHub.tsx`
- `src/components/pillars/PillarPage.tsx`
- `src/lib/site.ts`
- `src/lib/content/schemas.ts` / `src/lib/seo.ts` / `src/app/guides/[slug]/page.tsx`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / competitor clone copy.
- Did not wholesale rewrite Loop A–G guides beyond light FAQ leads / related links.

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 4)

Branch: `loop/next-polish-tick4` → PR to `main`. Owns **Next** guides (PR, renewals, leaving, citizenship/NS, post-AIP, NRIC / life-admin) plus light About / Editorial policy polish. Did **not** touch Move / Money / Family / Belong / Home / Life files owned by Loops A–C.

### Sources mined

**Reddit / forums**

- r/askSingapore — lost / stolen IC fees and overseas replacement ([lost IC overseas](https://www.reddit.com/r/askSingapore/comments/xaopoz/lost_singapore_ic_overseas/); [lost IC 14 days](https://www.reddit.com/r/askSingapore/comments/1gpwgbx/lost_ic/); [stolen IC S$300](https://www.reddit.com/r/askSingapore/comments/1eemjks/ic_was_stolen_must_pay_300_for_2nd_replacement/); [NRIC renewal at 30](https://www.reddit.com/r/askSingapore/comments/wbnz5h/nric_renewal_for_pr/); [re-register overseas](https://www.reddit.com/r/askSingapore/comments/ozzprx/reregistering_ic_at_30_yo_and_collecting_it_i/)).
- r/askSingapore — PR address / “PR renew” folklore ([PR renew + address](https://www.reddit.com/r/askSingapore/comments/14ypowc/pr_renew_and_change_of_residential_address/); [advice renewing PR/REP](https://www.reddit.com/r/askSingapore/comments/11er8in/advice_on_renewing_pr/)).
- r/askSingapore + r/NationalServiceSG — adult SC renunciation vs ORAL ([renunciation overseas](https://www.reddit.com/r/askSingapore/comments/195g78b/renunciation_of_sg_citizenship_overseas/); [process after ORD](https://www.reddit.com/r/NationalServiceSG/comments/whersp/procedure_for_renouncing_citizenship_after_ord/); [renounce mid-service myths](https://www.reddit.com/r/NationalServiceSG/comments/12v1pi1/has_anyone_been_discharged_from_service_because/); [how long dual for females](https://www.reddit.com/r/askSingapore/comments/1koqllo/how_long_can_a_female_legally_hold_dual/)).
- r/askSingapore — post-PR identity hygiene follow-ons ([next steps after PR](https://www.reddit.com/r/askSingapore/comments/1j7t4a5/next_steps_for_my_wifes_singapore_pr_status/); [what happens right after PR](https://www.reddit.com/r/askSingapore/comments/159r6lg/what_happens_right_after_you_get_pr/)).

**Official**

- [ICA — Loss of Identity Card](https://www.ica.gov.sg/documents/ic/loss) (14-day replace ask; S$100 / S$300; overseas return; collection within 3 months of approval).
- [ICA — Re-Register Identity Card for 30/55-year-olds](https://www.ica.gov.sg/documents/ic/re-registration) (10-year rule; S$10 SC / S$50 PR; overseas return within 1 year).
- [ICA — Change of Residential Address on Identity Card](https://www.ica.gov.sg/documents/ic/update_residential_address) (28-day clock; eCOA; PIN + sticker).
- [ICA — Renunciation of Singapore Citizenship](https://www.ica.gov.sg/enter-depart/for-singapore-citizens/renunciation) + [ask.gov.sg — another citizenship required](https://ask.gov.sg/ica/questions/clxwhkixr006kdsotsvorx1u1) + [user guide PDF](https://www.ica.gov.sg/docs/default-source/ica/forms/user-guide-sc-renunciation.pdf) (age 21+, S$35, cooling-off, NS withhold language).
- [ICA — Oath-taking for Minors (ORAL)](https://www.ica.gov.sg/reside/citizenship/minor-oath-taking) (retention vs renunciation contrast).

### Gaps vs prior ticks (Next-owned)

Tick 3 shipped ORAL@21, REP/PRSEP, EP family cascade, SCJ depth. Remaining high-intent **Next** gaps matched this mine: **lost/stolen blue NRIC** (work-pass card guide did not cover ICA IC), **NRIC re-registration 30/55 + 28-day address**, **adult SC renunciation** (distinct from ORAL keep-SC and PR renunciation), plus thin **annual life-admin / passport** guides needing those clocks. About + editorial needed clearer NRIC / SC-renunciation research language.

### Shipped this loop

**New guides**

- `content/guides/next/lost-replace-nric-pr-singapore.mdx`
- `content/guides/next/renouncing-singapore-citizenship.mdx`

**Upgraded guides**

- `content/guides/next/renewing-life-admin-annually.mdx` (NRIC / address / REP / ORAL rows)
- `content/guides/next/passports-and-documents-overseas.mdx` (MOM sync, ORAL/SC renunciation, document pack table)
- `content/guides/next/lost-replace-work-pass-card.mdx` (wrong-agency NRIC cross-link)
- `content/guides/next/after-getting-pr-checklist.mdx` (address, lost IC, re-reg hygiene)
- `content/guides/next/citizenship-ns-implications.mdx` / `oral-dual-citizenship-age-21.mdx` / `singapore-citizenship-application.mdx` / `renouncing-pr-singapore.mdx` (SC renunciation cross-links)

**Editorial polish**

- `src/app/about/page.tsx`
- `src/app/editorial-policy/page.tsx`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not edit Move / Money / Family / Belong / Home / Life guide trees owned by Loops A–C.

### Questions mined (sample)

1. I lost my blue PR IC — is that MOM or ICA, and what is the fee?
2. Do I need a police report to replace a lost NRIC?
3. Can someone collect my replacement IC for me while I am overseas?
4. Why does ICA say I am not eligible to re-register my NRIC at 30?
5. How long after moving must I update my IC residential address?
6. If I put an overseas address on my IC, will my REP renew for five years?
7. Can I renounce Singapore citizenship before I get another nationality?
8. Will ICA let a male renounce SC while NS liability is outstanding?
9. What documents must I return with an SC renunciation application?
10. Is missing ORAL the same as formally renouncing citizenship?
11. After PR, should I still carry my old FIN card as backup ID?
12. What belongs on the annual September life-admin checklist for PRs?

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 3)

Branch: `loop/next-polish-tick3` → PR to `main`. Owns **Next** guides (PR, renewals, leaving, citizenship/NS, post-AIP) plus light About / Editorial policy polish. Did **not** touch Move / Money / Family / Belong / Home / Life files owned by Loops A–C.

### Sources mined

**Reddit / forums**

- r/askSingapore — ORAL / dual citizenship at 21 ([do I take the oath](https://www.reddit.com/r/askSingapore/comments/5s8py3/do_i_have_to_take_the_oath_of_citizenship/); [early oath before 21](https://www.reddit.com/r/askSingapore/comments/1t5965o/has_anyone_successfully_requested_early_oath/); [renounce Malaysian overseas](https://www.reddit.com/r/askSingapore/comments/1m0l46v/renouncing_malaysian_citizenship_overseas/); [dual citizenship consequences](https://www.reddit.com/r/askSingapore/comments/1q0gb63/consequences_of_holding_dual_citizenship/); [renounce for minor](https://www.reddit.com/r/askSingapore/comments/1b13q64/renounce_citizenship_for_minor/)).
- r/askSingapore — unemployed / short REP renewals ([unemployed overseas REP](https://www.reddit.com/r/askSingapore/comments/1cp6e0r/rep_renewal_concerns_when_unemployed_overseas/); [REP renewed 1 year](https://www.reddit.com/r/askSingapore/comments/1eaair5/reentry_permit_renewed_for_only_1_year_sg_pr/); [does unemployment affect REP](https://www.reddit.com/r/askSingapore/comments/1ep9pvp/does_being_unemployed_effect_your_reentry_permit/); [unemployed PR opinion](https://www.reddit.com/r/askSingapore/comments/1t4wg22/opinion_if_unemployed_pr_reentry_permit/); [advice renewing PR/REP](https://www.reddit.com/r/askSingapore/comments/11er8in/advice_on_renewing_pr/)).
- r/askSingapore — EP cancel family cascade / travel during PR formalities ([travel while waiting formalities](https://www.reddit.com/r/askSingapore/comments/1jbnuyb/sg_pr_application_safe_to_travel_while_waiting/); [PR approved next steps](https://www.reddit.com/r/askSingapore/comments/1tfhowb/pr_approved_help_with_next_steps_please/); [formalities delay](https://www.reddit.com/r/askSingapore/comments/1k4x482/completion_of_sg_pr_formalities_is_taking_a_while/); adjacency: DP/LOC when sponsor pass dies in between-jobs threads).

**Official**

- [ICA — Oath-taking for Minors (ORAL)](https://www.ica.gov.sg/reside/citizenship/minor-oath-taking) (21–22 window; auto-loss on 22nd birthday; NRIC + foreign renunciation certificate; no fee; same-day).
- [MHA — REP process revisions from 1 Dec 2025](https://www.mha.gov.sg/media-room/newsroom/revisions-to-permanent-resident-re-entry-permit-application-process-from-1-december-2025/) + [ICA REP FAQ PDF](https://www.ica.gov.sg/docs/default-source/ica/files/faqs_revisions-to-permanent-resident-re-entry-permit-application-process-from-1-december-2025.pdf) + [Entry Permit & REP conditions](https://www.ica.gov.sg/PR/see-more/entry-permit-and-re-entry-permit-conditions-for-singapore-permanent-residents) (180-day clocks, PRSEP, no reinstatement, good-conduct conditions).
- [MOM — Cancel an Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass) + [Dependant’s Pass](https://www.mom.gov.sg/passes-and-permits/dependants-pass).
- [MOM — Pre-approved Letter of Consent eligibility](https://www.mom.gov.sg/passes-and-permits/pre-approved-letter-of-consent/eligibility) (SC/PR spouse LTVP category — contrasted with EP-tied DP cascade).
- [ICA — Apply for Singapore Citizenship](https://www.ica.gov.sg/reside/citizenship/apply) (SCJ ages 16–60; completion fees).

### Gaps vs prior ticks (Next-owned)

Tick 2 shipped citizenship application, graduate LTVP, REP visa-free myth, PR AIP formalities. Remaining high-intent **Next** gaps matched this mine: **ORAL dual-citizenship retention at 21**, **unemployed / 1-year REP realism + PRSEP / no-reinstatement depth on the Dec 2025 rules**, **EP-cancel DP/LTVP family cascade**, **citizenship post-IPA SCJ formalities**, **truthful REP fields at PR take-up**. About + editorial needed clearer ORAL / dated-REP research language.

### Shipped this loop

**New guides**

- `content/guides/next/oral-dual-citizenship-age-21.mdx`

**Upgraded guides**

- `content/guides/next/re-entry-permit-pr-overseas.mdx` (180-day clocks table, PRSEP, no reinstatement, unemployed/1-year REP, family NS note)
- `content/guides/next/between-jobs-stvp-singapore.mdx` (family cascade checklist; PLOC vs DP distinction)
- `content/guides/next/singapore-citizenship-application.mdx` (SCJ formalities project; ORAL cross-link)
- `content/guides/next/after-getting-pr-checklist.mdx` (truthful REP fields; travel on existing pass during formalities)
- `content/guides/next/citizenship-ns-implications.mdx` (ORAL cross-link)

**Editorial polish**

- `src/app/about/page.tsx`
- `src/app/editorial-policy/page.tsx`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not edit Move / Money / Family / Belong / Home / Life guide trees owned by Loops A–C (spouse LTVP/PLOC depth stays Move/Family; Next only contrasts categories).

### Questions mined (sample)

1. Do I have to take the ORAL after turning 21 if I got SC by descent?
2. What happens if I miss ORAL before my 22nd birthday?
3. Can ICA administer ORAL early for a university visa / passport-validity problem?
4. Which documents prove foreign citizenship renunciation for ORAL?
5. If I am unemployed, will ICA only renew my REP for one year?
6. Can I stay in Singapore without a valid REP as long as I never travel?
7. After 1 Dec 2025, is there still a reinstatement path if REP is refused overseas?
8. What is PRSEP, and does it replace a normal multi-year REP?
9. When my EP is cancelled, does my spouse’s DP and LOC survive?
10. Can I travel on EP while waiting for PR formalities / blue IC?
11. Should I put “unemployed” on the REP form at PR take-up?
12. What is the SCJ calendar after citizenship IPA, and how does it differ from ORAL at 21?

---

## Loop D — Next pillar + editorial polish — 2026-09-15 (tick 2)

Branch: `loop/next-polish` → PR to `main`. Owns **Next** guides (PR, renewals, leaving, citizenship/NS) plus light About / Editorial policy polish. Did **not** touch Move / Money / Family / Belong / Home / Life files owned by Loops A–C.

### Sources mined

**Reddit / forums**

- r/askSingapore — citizenship eligibility / timing / agencies / dual nationality ([eligible for citizenship](https://www.reddit.com/r/askSingapore/comments/1j8kll1/am_i_eligible_for_singapore_citizenship/); [apply after 1 year PR](https://www.reddit.com/r/askSingapore/comments/1aids0j/applying_for_sg_citizenship_after_1_year_of_pr/); [chances + processing length](https://www.reddit.com/r/askSingapore/comments/191d218/the_chances_of_getting_sg_citizenship_and_how/); [immigration company](https://www.reddit.com/r/askSingapore/comments/1qsa0tg/applying_for_citizenship_with_an_immigration/); [renounce SC consequences](https://www.reddit.com/r/askSingapore/comments/1qdfyl9/what_are_the_consequences_of_renouncing_singapore/)).
- r/askSingapore — graduate LTVP / post-study / after EP loss ([NUS grads LTVP](https://www.reddit.com/r/askSingapore/comments/1jh3lc1/nus_grads_ltvp_need_clarification_on_poststudy/); [local diploma + LOC myth](https://www.reddit.com/r/askSingapore/comments/1h1psrq/foreigner_with_local_diploma_looking_for_a_job/); [LTVP for job listings](https://www.reddit.com/r/askSingapore/comments/1muskjm/should_i_apply_for_an_ltvp_to_get_access_to_more/); [LTVP after losing job](https://www.reddit.com/r/askSingapore/comments/1q66ra7/getting_an_ltvp_after_losing_job/); [retrenched → LTVP](https://www.reddit.com/r/askSingapore/comments/186nx8g/and_so_it_happened_i_got_retrenched_today/)).
- r/askSingapore — REP / visa-free myth / overseas renewal ([REP vs visa-free](https://www.reddit.com/r/askSingapore/comments/1b748r8/rep_renewal_for_pr_does_not_matter_now_because_an/); [reapply PR after years overseas](https://www.reddit.com/r/askSingapore/comments/1sm019a/can_i_reapply_for_pr_in_singapore_after_leaving/); [REP overseas student](https://www.reddit.com/r/askSingapore/comments/198ssst/pr_rep_renewal_for_overseas_student/)).
- r/askSingapore — PR AIP formalities / FIN→NRIC / Singpass ([after AIP](https://www.reddit.com/r/askSingapore/comments/1lclx0v/what_happens_after_pr_approved_in_principle/); [wife next steps](https://www.reddit.com/r/askSingapore/comments/1j7t4a5/next_steps_for_my_wifes_singapore_pr_status/); [formalities delay](https://www.reddit.com/r/askSingapore/comments/1k4x482/completion_of_sg_pr_formalities_is_taking_a_while/); [FIN vs NRIC](https://www.reddit.com/r/askSingapore/comments/1ha53xs/does_my_fin_number_change_when_getting_a_pr/)).

**Official**

- [ICA — Becoming a Singapore Citizen](https://www.ica.gov.sg/reside/citizenship) + [Apply](https://www.ica.gov.sg/reside/citizenship/apply) (2-year PR floors, fees, 12-month processing, SCJ ages 16–60, NS obligation block).
- [ICA — Graduate IHL LTVP seeking employment](https://www.ica.gov.sg/reside/LTVP/apply/graduate-from-an-institute-of-higher-learning-seeking-employment-in-singapore) (S$45 / S$60, ~6 weeks).
- [MOM — Work passes for ICA LTVP holders](https://www.mom.gov.sg/passes-and-permits/work-passes-for-holders-of-long-term-visit-passes-issued-by-ica) + [LOC for ICA LTVP/LTVP+](https://www.mom.gov.sg/passes-and-permits/loc-for-ica-issued-ltvp-holders).
- [ICA — Apply / renew REP](https://www.ica.gov.sg/reside/PR/apply-REP) + [Entry Permit & REP conditions](https://www.ica.gov.sg/PR/see-more/entry-permit-and-re-entry-permit-conditions-for-singapore-permanent-residents).
- [MOM — Cancel an Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass).

### Gaps vs prior ticks (Next-owned)

Prior Loop D tick shipped PR rejection, EP renewal age-bands, NS Exit Permit, renunciation, leaving polish. Remaining high-intent **Next** gaps matched forum heat: **citizenship application process** (eligibility floors / 12-month clock / SCJ / agencies / dual nationality — NS guide was process-thin), **graduate LTVP** (fees, no-work, LOC category myth, EP-cancel timing), **REP visa-free loophole myth**, **PR AIP formalities + FIN→NRIC Singpass**. About + editorial needed clearer Next-pillar research language.

### Shipped this loop

**New guides**

- `content/guides/next/singapore-citizenship-application.mdx`
- `content/guides/next/graduate-ltvp-job-hunt.mdx`

**Upgraded guides**

- `content/guides/next/between-jobs-stvp-singapore.mdx` (graduate LTVP depth + cross-link)
- `content/guides/next/re-entry-permit-pr-overseas.mdx` (visa-free ≠ keep PR)
- `content/guides/next/after-getting-pr-checklist.mdx` (AIP formalities timeline)
- `content/guides/next/citizenship-ns-implications.mdx` (citizenship-application cross-link)
- `content/guides/next/pr-application-strategy.mdx` (citizenship-application cross-link)

**Editorial polish**

- `src/app/about/page.tsx`
- `src/app/editorial-policy/page.tsx`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not edit Move / Money / Family / Belong / Home / Life guide trees owned by Loops A–C (side-income / moonlighting stays Move).

### Questions mined (sample)

1. Can I apply for Singapore citizenship after only one year as a PR if the e-Service lets me click through?
2. How long is citizenship processing really taking, and does longer pending mean higher odds?
3. Are immigration agencies worth it for citizenship “profile building”?
4. What happens to dual nationality when I take up Singapore citizenship?
5. Can foreign NUS/poly grads get an LTVP to job-hunt, and can they work on it?
6. Does graduate LTVP come with LOC so I can do F&B while searching?
7. After EP cancel, can I apply for graduate LTVP while still on notice / STVP?
8. If my passport is visa-free for Singapore, do I still need to renew REP?
9. If I lose PR after years overseas, can I get it back easily after NS?
10. What happens after PR “approved in principle” before the blue IC?
11. Does my FIN become my NRIC, and must I re-register Singpass?
12. How long do ICA formalities / IC collection usually take?

---

---

---

## Loop C — Home + Life (parallel) — Tick 20 — 2026-09-15

Branch: `loop/home-life` → PR to `main`. Owns **Home** + **Life** guides and neighbourhood entities only.

### Sources mined

**Reddit**

- r/askSingapore — fibre TP / NetLink Unreleased Fibre / second TP ([ports in use](https://www.reddit.com/r/askSingapore/comments/1gih02b/fibre_tp_in_used_what_to_do/); [old property no FTP](https://www.reddit.com/r/askSingapore/comments/1mteyos/installation_of_fiber_tp_at_old_properties/); [BTO fibre point](https://www.reddit.com/r/askSingapore/comments/1j5qpdg/need_help_with_bto_wifi_installation_issues_fiber/); [new condo NetLink backend](https://www.reddit.com/r/askSingapore/comments/1t9ssb4/anyone_having_issues_with_netlink_trust/); [install cancellations](https://www.reddit.com/r/askSingapore/comments/1cgkwm1/is_fibre_broad_installation_down_nationwide/)).
- r/askSingapore — rental mould / paint-over / aircon mould / dehumidifier ([condo leak damp mould](https://www.reddit.com/r/askSingapore/comments/18ysztr/condo_leak_damp_mould_responsibility_rights/); [mold in aircon](https://www.reddit.com/r/askSingapore/comments/1coj9oi/mold_in_aircon_tenant_or_landlord_responsible/); [apartment mold owner vs tenant](https://www.reddit.com/r/askSingapore/comments/11iytkz/apartment_mold_owner_or_tenant/); [paint-over after leak](https://www.reddit.com/r/askSingapore/comments/14naq3b/mould_situation_at_a_rental/); [move-in ceiling mould](https://www.reddit.com/r/askSingapore/comments/1fuce70/mould_in_apartment_what_to_do/)).
- r/askSingapore — secondhand smoke + CDRT ([nightly cigarette drift](https://www.reddit.com/r/askSingapore/comments/1on5w7n/need_advice_neighbors_cigarette_smoke_fills_my/); [HDB service-yard smoke](https://www.reddit.com/r/askSingapore/comments/1knwfxa/hdb_neighbour_secondhand_smoke/); [balcony smoke + pets](https://www.reddit.com/r/askSingapore/comments/1n4mqb6/any_way_to_deal_with_neighbours_smoking_out_their/); [filed CDRT](https://www.reddit.com/r/askSingapore/comments/1ggwxzh/anyone_filed_a_case_with_community_disputes/); [recourse upstairs smokers](https://www.reddit.com/r/askSingapore/comments/1h9iuew/do_i_have_any_recourse_against_my_neighbor/)).
- r/askSingapore — bulky waste / laundry poles / OneService ([HDB bulky](https://www.reddit.com/r/askSingapore/comments/1g8k344/bulky_item_disposal/); [condo bulky](https://www.reddit.com/r/askSingapore/comments/xxudnu/disposal_of_bulky_items_condo/); [chute dumping](https://www.reddit.com/r/askSingapore/comments/14844rl/who_to_talk_to_about_hdb_neighbours_leaving_trash/); [dripping laundry](https://www.reddit.com/r/askSingapore/comments/zx331d/hdb_problems_and_inconsiderate_neighbours/); [litter on laundry](https://www.reddit.com/r/askSingapore/comments/j4vbtw/neighbours_above_littering_on_my_laundry_how_do/)).
- r/askSingapore — neighbourhood shortlists east/west ([non-expat areas](https://www.reddit.com/r/askSingapore/comments/195ji13/nonexpat_areas_for_expat/); [east vs west rent](https://www.reddit.com/r/askSingapore/comments/xxx5wb/renting_in_east_vs_west/); [best towns](https://www.reddit.com/r/askSingapore/comments/1qq0fly/what_are_the_best_towns_to_live_in_singapore_and/); [where to stay](https://www.reddit.com/r/askSingapore/comments/1jo5une/which_area_in_sg_is_best_to_live_in/); [any neighbourhood](https://www.reddit.com/r/askSingapore/comments/13sa2zi/if_you_could_stay_in_any_neighbourhood_in_sg_you/)).

**Official**

- [NetLink Trust — Residential connections](https://www.netlinktrust.com/faq/residential-connections/) + [appointment FAQ](https://www.netlinktrust.com/faq/appointment-related/) + [Fibre TP installation tariff (1 Apr 2024)](https://www.netlinktrust.com/images/pdf/2024/Installation%20of%20Fibre%20Termination%20Point%20in%20Residential%20Premise%20Effective%201%20Apr%202024.pdf).
- [Judiciary — CDRT eligibility](https://www.judiciary.gov.sg/civil/cases-eligible-neighbour-dispute-claim) + [how to file / serve](https://www.judiciary.gov.sg/civil/how-to-file-serve-neighbour-dispute-claim) + [MCCY CDMF](https://www.mccy.gov.sg/sectors/community/community-disputes-management-framework/).
- [CEA — Tenancy templates](https://www.cea.gov.sg/real-estate-professionals/agreements-and-checklists/) + [SCT eligibility](https://www.judiciary.gov.sg/civil/cases-eligible-small-claim).
- [OneService](https://www.oneservice.gov.sg/) + [NEA e-waste](https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/e-waste-management/where-to-recycle-e-waste).

### Gaps vs Tick 19 (Home + Life slice)

Tick 19 shipped HDB ceiling leaks, pets daily life, PUB water appeals, grocery delivery depth, visitor parking. Remaining high-intent Home+Life gaps matched forum heat: **fibre TP / Unreleased Fibre for renters**, **mould remediation vs paint-over**, **CDRT + secondhand smoke** (condo-noise was CMC/STB-only), **bulky waste + HDB laundry/OneService**, plus neighbourhood entity depth for Katong/Joo Chiat, Tampines, Clementi/West Coast, Bukit Timah.

### Shipped this tick

**New guides**

- `content/guides/home/fibre-tp-netlink-renters.mdx`
- `content/guides/home/mould-humidity-rental-tenants.mdx`

**Upgraded guides (depth + citations + cross-links + lastReviewed 2026-09-15)**

- `content/guides/home/utilities-telecom-setup.mdx` (pre-LOI TP check + NetLink)
- `content/guides/home/condo-noise-mcst-neighbours.mdx` (secondhand smoke + CDRT)
- `content/guides/home/aircon-pest-renewals.mdx` / `furnishing-rental-flat.mdx` (mould cross-links)
- `content/guides/home/heartland-living-for-expats.mdx` (laundry poles / OneService)
- `content/guides/home/choosing-neighbourhood-expat.mdx` (east/west shortlist + fibre note)
- `content/guides/life/shopping-essentials-singapore.mdx` (bulky waste playbook)

**Neighbourhood entity depth**

- `content/entities/neighbourhoods/katong-joo-chiat.json`
- `content/entities/neighbourhoods/tampines.json`
- `content/entities/neighbourhoods/clementi-west-coast.json`
- `content/entities/neighbourhoods/bukit-timah.json`

### Explicitly not done

- No ads/monetization expansion.
- No copying of third-party “expat-sg” / Grok clones.
- Did not edit Move/Money/Family/Belong/Next guides owned by other loops.

### Questions mined (sample)

1. Both fibre TP ports say “in use” — can I switch ISP to get online this week?
2. How long after the previous tenant cancels until the NetLink port actually frees?
3. Do I need landlord permission (and how destructive is it) to install a new FTP in an old walk-up?
4. Who pays when the landlord only paints over black mould after a pipe leak?
5. Is aircon mould after three months a tenant chemical-wash bill or a landlord handover failure?
6. Can I ask for rent reduction for 24/7 dehumidifier electricity when the damp is landlord-side?
7. Is neighbour cigarette smoke from a balcony illegal, and will NEA help?
8. When do I file CDRT vs keep complaining to MCST / OneService?
9. How do HDB tenants dispose of bulky furniture vs condo residents?
10. Upstairs dripping laundry keeps soaking my clothes — Town Council or confront?
11. Katong vs Tampines vs Clementi vs Bukit Timah — which fits a mid-package family?
12. Should I run a fibre TP availability check before paying the rental deposit?

---

---

## Loop B — Family + Belong (tick 3) — 2026-09-15

Branch: `loop/family-belong` → PR to `main`. Owns **Family** + **Belong** guides plus schools/clubs entity depth only. No ads / no Grok. Did **not** touch Move / Money / Home / Life / Next.

### Sources mined

**Reddit / forums**

- r/askSingapore — newborn DP / birth registration / passport clock ([Dependent Pass newborn](https://www.reddit.com/r/askSingapore/comments/17hkidm/dependent_pass/); [Malaysian newborn docs](https://www.reddit.com/r/askSingapore/comments/1b0icqt/questions_regarding_malaysian_newborn_baby/); [foreign wife birth SG vs home](https://www.reddit.com/r/askSingapore/comments/1l1fe33/important_considerations_whether_to_have_my/); [LTVP+ pregnancy myths](https://www.reddit.com/r/askSingapore/comments/1dnbo2y/applying_for_ltvp_for_foreigner_spouse/)).
- r/askSingapore — paternity / SPL / marriage pass sequencing ([maternity/paternity/SPL split](https://www.reddit.com/r/askSingapore/comments/1rawm1s/maternitypaternityshared_parental_leave/); [under 3 months leave](https://www.reddit.com/r/askSingapore/comments/1j8gf7d/has_anyone_able_to_claim_parental_leave_despite/); [PMLA → LTVP + PLOC](https://www.reddit.com/r/askSingapore/comments/1qvnbml/relocating_sc_spouse_to_singapore/); [SC + foreign spouse pregnancy](https://www.reddit.com/r/askSingapore/comments/x14pk6/foreign_spouse_pregnant_whats_your_experience_as/)).
- r/askSingapore — vaccines / mental health ([NIR not linked](https://www.reddit.com/r/askSingapore/comments/12099bi/childs_immunisation_records/); [cash-pay paediatrician vaccines](https://www.reddit.com/r/askSingapore/comments/1e73vx8/pediatrician_recommendation_for_nonlocal_pay_via/); [vaccination memo](https://www.reddit.com/r/askSingapore/comments/1nk2vi1/getting_a_doctors_vaccination_memo/); [ADHD expat kids](https://www.reddit.com/r/askSingapore/comments/1hg0srx/what_is_the_general_process_for_seeking_advice_on/); [non-resident mental health](https://www.reddit.com/r/askSingapore/comments/1byriih/seeking_options_for_mental_health_help_as_a/)).
- r/askSingapore — Belong soft landing ([trailing spouse](https://www.reddit.com/r/askSingapore/comments/1inyc7x/whats_it_like_to_be_a_trailing_spouse_in_singapore/); [AWA crafts](https://www.reddit.com/r/askSingapore/comments/1twijzv/looking_for_craft_group_to_join/); [introvert foreigners](https://www.reddit.com/r/askSingapore/comments/1u1tmdb/introvert_foreigners_of_singapore_how_do_you_make/); [Meetup relocate](https://www.reddit.com/r/askSingapore/comments/1n4xf99/recently_relocated_to_singapore_are_there_any/)).

**Official**

- [MOM — Dependant’s Pass for a newborn](https://www.mom.gov.sg/passes-and-permits/dependants-pass/getting-a-pass-for-a-newborn) (14-day register ask; 6-week DP; Special Pass extension rules).
- [MSF — Shared Parental Leave](https://www.profamilyleave.msf.gov.sg/schemes/shared-parental-leave) (6 vs 10 weeks; SC child gate; under-3-month nuance).
- [LifeSG — Baby Bonus eligibility](https://www.life.gov.sg/family-parenting/benefits-support/baby-bonus-scheme/eligibility-criteria).
- [MOH — childhood vaccinations subsidies](https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/childhood-developmental-screening-and-childhood-vaccinations/) + [NIR](https://www.nir.hpb.gov.sg/nirp/eservices/parentalfaq).

### Gaps vs prior Loop B ticks

Ticks 1–2 covered schools/waitlists/SEN/camps/clubs/volunteering/LGBTQ/dual-career. Remaining heat: **newborn DP passport clock**, **Baby Bonus SC gate + LTVP+**, **GPPL/SPL citizenship + 2026 weeks**, **PMLA→LTVP/PLOC marriage path**, **NIR/foreigner vaccine fees**, **kids ADHD + non-resident counselling**, **ANZA/AWA trailing-spouse soft landing**.

### Shipped this loop

**Upgraded guides**

- `content/guides/family/newborn-pass-birth-registration-singapore.mdx`
- `content/guides/family/baby-bonus-cda-mixed-status.mdx`
- `content/guides/family/paternity-shared-parental-leave-foreigners.mdx`
- `content/guides/family/getting-married-foreigners-singapore.mdx`
- `content/guides/family/childhood-vaccination-foreigners.mdx`
- `content/guides/family/mental-health-resources.mdx`
- `content/guides/belong/anza-awa-associations.mdx`
- `content/guides/belong/find-my-people-singapore.mdx`

**Entity depth (schools / clubs)**

- `content/entities/clubs/anza.json`
- `content/entities/clubs/awa.json`
- `content/entities/clubs/hollandse-club.json`
- `content/entities/clubs/british-club.json`
- `content/entities/schools/australian-international-school.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not edit Move / Money / Home / Life / Next trees.

### Questions mined (sample)

1. How soon after birth must I register and lodge a newborn Dependant’s Pass?
2. Can I apply for DP before the baby’s passport is ready?
3. What happens if the newborn DP is rejected — will MOM extend the Special Pass?
4. Do EP–EP babies get Baby Bonus / CDA just because they were born in Singapore?
5. Does pregnancy alone unlock LTVP+ hospital subsidies?
6. Are government paternity / SPL weeks available when the child is not a Singapore citizen?
7. What are the SPL week counts for births before vs after 1 Apr 2026?
8. If I have worked under 3 months, can my employer still grant reimbursed parental leave?
9. Should SC + foreigner couples run PMLA before ROM, and when does PLOC help?
10. Why are my newborn’s vaccines not showing in HealthHub / NIR?
11. Do foreigners pay subsidised childhood vaccine rates at polyclinics?
12. How do EP families get an ADHD assessment for a preschooler without outpatient cover?
13. Where should trailing spouses look besides Facebook megagroups — ANZA, AWA, Meetup?
14. Is AWA open to non-American women for craft / interest groups?

---

## Loop A — Move + Money — 2026-09-15 (tick 2)

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `loop/move-money`.

### Sources mined

**Reddit**

- r/askSingapore — EP cancel → STVP 30 vs 90 / single-entry / notice travel ([EP resignation STVP](https://www.reddit.com/r/askSingapore/comments/1ttedbd/ep_question_on_resignation_stvp/); [EP cancellation → STVP approval](https://www.reddit.com/r/askSingapore/comments/1jk7dy7/ep_cancellation_stvp_approval/); [working after EP expired](https://www.reddit.com/r/askSingapore/comments/1hdcxx0/working_after_ep_expired/); [STVP after unemployment](https://www.reddit.com/r/askSingapore/comments/1dmqy7z/short_term_visit_pass_expat/); [LTVP after losing job](https://www.reddit.com/r/askSingapore/comments/1q66ra7/getting_an_ltvp_after_losing_job/)).
- r/askSingapore — DP cascade / LOC renewal local-hire / DP career trap ([EP spouse dies → DP](https://www.reddit.com/r/askSingapore/comments/1lp737m/if_ep_holding_spouse_dies_is_dp_immediately/); [spouse work on DP](https://www.reddit.com/r/askSingapore/comments/1obgpqo/can_spouse_work_while_on_a_dependent_pass/); [DP career trap](https://www.reddit.com/r/askSingapore/comments/1ranfcm/spouse_got_a_dream_job_offer_in_singapore_but_the/); [LOC renewal / start business](https://www.reddit.com/r/askSingapore/comments/1qq3zsf/advice_on_starting_business_in_singapore/); [content creation on work pass](https://www.reddit.com/r/askSingapore/comments/1p4cjd6/if_an_work_pass_holder_made_income_from_content/)).
- r/askSingapore — PayNow FIN vs mobile / recycled prepaid / Wise QR ([foreigner peer-to-peer PayNow](https://www.reddit.com/r/askSingapore/comments/1n84kwi/how_can_foreigners_use_peertopeer_paynow/); [someone using my number for PayNow](https://www.reddit.com/r/askSingapore/comments/111707y/someone_using_my_number_for_paynow/); [using PayNow as a foreigner](https://www.reddit.com/r/askSingapore/comments/1uetszj/using_paynow_as_a_foreigner_accepting_payments/); [PayNow/PayLah newbie](https://www.reddit.com/r/askSingapore/comments/zmcsg8/help_im_completely_foreign_to_paynowpaylah/)).
- r/askSingapore — CPF withdrawal / Aussie super myth / PR leave ([CPF → Aussie super](https://www.reddit.com/r/askSingapore/comments/1jfnm56/transferring_singapore_cpf_to_australian/); [what to do with my CPF](https://www.reddit.com/r/askSingapore/comments/ji9hgb/what_to_do_with_my_cpf/); [giving up PR](https://www.reddit.com/r/askSingapore/comments/1k4yszc/giving_up_singapore_permanent_residency_and/); [becoming PR for CPF](https://www.reddit.com/r/askSingapore/comments/1fv0wa3/becoming_pr_and_cpf/); [large bank deposit SoF](https://www.reddit.com/r/askSingapore/comments/1i6cbc8/you_suddenly_deposit_1_mil_into_your_bank_account/)).

**Official**

- [MOM — Cancel an Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass) + [LOC eligibility](https://www.mom.gov.sg/passes-and-permits/loc-for-dependants-pass-business-owners/eligibility) + [LOC renew/cancel](https://www.mom.gov.sg/passes-and-permits/loc-for-dependants-pass-business-owners/renew-cancel-or-replace).
- [ABS — PayNow](https://www.abs.org.sg/e-payments/pay-now) + [PayNow fact sheet](https://abs.org.sg/docs/library/paynow_factsheet.pdf).
- [CPF Board — Closing account when leaving](https://www.cpf.gov.sg/member/account-services/cpf-asset-management/on-leaving-singapore) + [online closure form](https://www.cpf.gov.sg/member/tools-and-services/forms-e-applications/apply-online-to-close-cpf-accounts-for-non-singapore-citizens-and-non-permanent-residents).

### Gaps vs prior Loop A / ticks (Move + Money scope)

Prior Loop A tick shipped EP floors / COMPASS clocks, EP vs S Pass, CBNI, no-FIN banking, remittance MPI/SoF, IR21 job-hop cashflow, group medical portability. Side-income / DP LOC overview and CPF myths already existed but were thin on **LOC renewal local-hire failure**, **EP-cancel DP cascade**, **PayNow FIN vs recycled mobile**, and **CPF account-closure ~12 weeks / no super pipe**. Between-jobs STVP deep guide remains Next-owned — Move guides now deep-link rather than fork.

### Shipped this loop

**New guides**

- `content/guides/money/paynow-setup-foreigners-singapore.mdx`
- `content/guides/money/cpf-withdrawal-leaving-singapore.mdx`

**Upgraded guides (depth + citations + cross-links + lastReviewed 2026-09-15)**

- `content/guides/move/dependant-pass-singapore.mdx` (LOC renewal LQS + EP-cancel DP cascade)
- `content/guides/move/employment-pass-singapore.mdx` (cancel → ask 90-day STVP)
- `content/guides/move/side-income-freelance-work-pass.mdx` (LOC renewal pointer)
- `content/guides/move/trailing-partner-career-singapore.mdx` (LOC renewal failure forks)
- `content/guides/money/cpf-and-foreigners.mdx`
- `content/guides/money/opening-bank-account-expat.mdx`
- `content/guides/money/remittances-singapore.mdx`
- `content/guides/money/wrong-paynow-epayment-recovery.mdx`

**Entity depth**

- `content/entities/services/intact-immigration.json` (DP cascade / LOC renewal / STVP ask)

### Explicitly not done

- No ads/monetization expansion (did not touch remittance `sponsorSlot` enablement beyond existing).
- No Grok / third-party clone copy.
- Did not edit Family / Belong / Home / Life / Next heavily (between-jobs STVP, renouncing PR, tax-clearance remain Next-owned; Money/Move link out).

### Questions mined (sample)

1. Will HR auto-issue a 90-day STVP when my EP is cancelled, or do I have to ask?
2. If my EP is cancelled, does my spouse’s DP drop immediately, and can the household stay on STVP?
3. Can I take vacation / leave Singapore on notice and re-enter on the post-cancel STVP?
4. My DP LOC renewal failed because I cannot hire a local — can I keep serving Singapore clients?
5. Can a foreigner use peer-to-peer PayNow without a Singapore bank account?
6. Why did my Wise/PayNow to my new prepaid number credit someone else’s bank?
7. Should I link PayNow to FIN or mobile as an EP holder?
8. Can I transfer CPF straight into Australian super when I leave?
9. If I keep PR overseas, can I still withdraw CPF without renouncing?
10. How long does CPF account closure take after I am no longer SC/PR?

---

## Loop B — Family + Belong (tick 2) — 2026-09-15

Branch: `loop/family-belong` → PR to `main`. Owns **Family** + **Belong** guides plus schools/clubs entity depth only. Did **not** touch Move / Money / Home / Life / Next files owned by Loops A / C / D. No ads / no Grok.

### Sources mined

**Reddit / forums**

- r/askSingapore — DP / government school + P1 IS assignment realism ([DP and government education](https://www.reddit.com/r/askSingapore/comments/1jfc9e5/dependent_pass_and_government_education/); [local primary for foreign kids](https://www.reddit.com/r/askSingapore/comments/1houq07/local_primary_schools_for_foreign_kids/); [primary admission fees](https://www.reddit.com/r/askSingapore/comments/1azh44d/primary_school_admission/); [AEIS vs Bangkok IS](https://www.reddit.com/r/askSingapore/comments/1i1ssai/academic_for_our_kids_with_global_range/); [Cambridge English gate](https://www.reddit.com/r/askSingapore/comments/12822wo/language_requirement_for_entering_the_public/)).
- r/askSingapore — SEN / neurodivergent relocation ([moving with special needs](https://www.reddit.com/r/askSingapore/comments/1svtc96/moving_to_singapore_with_a_child_with_special/); [neurodivergent kid support](https://www.reddit.com/r/askSingapore/comments/1uadhgj/support_for_neurodivergent_kid_in_singapore/); [Europe vs SG SEN](https://www.reddit.com/r/askSingapore/comments/1fmpv9e/is_europe_countries_school_system_cater_to/); [MOE waiver → FSS](https://www.reddit.com/r/askSingapore/comments/1u4ilik/can_i_move_my_kid_to_an_international_school_in/)).
- r/askSingapore — holiday camps / kids sports ([outdoor holiday camps](https://www.reddit.com/r/askSingapore/comments/1m1wlfb/are_there_any_good_outdoor_holiday_camps_for_kids/); [NTUC Outdoor School vs Wildlings](https://www.reddit.com/r/askSingapore/comments/1n0kw0b/anyone_has_sent_their_kids_to_ntuc_outdoor_school/); [June holiday plans](https://www.reddit.com/r/askSingapore/comments/1swv0eq/parents_what_is_your_plan_for_june_school_holidays/); [team sports outside school](https://www.reddit.com/r/askSingapore/comments/1re4fxt/team_sports_for_kids_pri_sch_outside_of_school/); [relocate + activities](https://www.reddit.com/r/askSingapore/comments/1tq770u/consider_relocating_to_singapore_please_help/)).
- r/askSingapore — volunteering + belonging ([can foreigners volunteer?](https://www.reddit.com/r/askSingapore/comments/1jonb00/can_foreigners_do_volunteering/); [looking for volunteer opportunities](https://www.reddit.com/r/askSingapore/comments/1i34c4r/looking_for_volunteer_opportunities/); [DP spouse volunteering](https://www.reddit.com/r/askSingapore/comments/1934dul/volunteer_opportunities_for_foreigners_in/); [Buddhist volunteering](https://www.reddit.com/r/askSingapore/comments/1m2y8ue/volunteering_as_a_buddhist_devotee/); [make friends as a foreigner](https://www.reddit.com/r/askSingapore/comments/1gymfj0/how_do_you_make_friends_as_a_foreigner/); [introvert foreigners](https://www.reddit.com/r/askSingapore/comments/1u1tmdb/introvert_foreigners_of_singapore_how_do_you_make/); [where are the Americans?](https://www.reddit.com/r/askSingapore/comments/18bpqu8/where_are_the_americans/)).

**Official**

- [MOE — P1 registration for international students](https://www.moe.gov.sg/primary/p1-registration/international-students) (2026 interest window 19–25 May; outcome by end October).
- [MOE — Admissions process for international students](https://www.moe.gov.sg/international-students/admission) + [AEIS eligibility](https://www.moe.gov.sg/international-students/aeis/eligibility-criteria) + [school fees](https://www.moe.gov.sg/financial-matters/fees) (IS GST-inclusive; CDA cannot pay mainstream GIRO fees).
- [ECDA — EIPIC](https://www.ecda.gov.sg/parents/other-services/early-intervention-services/early-intervention-programme-for-infants-and-children-%28eipic%29) (SC/PR only).
- [giving.sg](https://www.giving.sg/) + [volunteer.gov.sg](https://www.volunteer.gov.sg/) + [NTUC First Campus Outdoor School camps](https://www.ntucfirstcampus.com/outdoorschool/holiday-camps/).

### Gaps vs prior Loop B tick

Prior Loop B covered waitlists, preschool/POP, dual-career spouse, LGBTQ partner-pass, American/Tanglin clubs. Remaining Family/Belong heat: **P1 IS 2026 calendar + assignment commute**, **CEQ native-speaker myth**, **Pathlight/local SPED foreigner wall**, **Dover Court/SAS SEN wait realism**, **outdoor camp + ActiveSG foreigner full-fee**, **CC volunteering SC/PR-only vs giving.sg**, nationality/hash/chamber soft-landing depth. Skipped ads; no Move/Money/Home/Life/Next ownership edits.

### Shipped this loop

**Upgraded guides**

- `content/guides/family/local-schools-for-expats.mdx`
- `content/guides/family/aeis-saeis-international-students.mdx`
- `content/guides/family/special-needs-support.mdx`
- `content/guides/family/kids-activities-holiday-camps.mdx`
- `content/guides/belong/volunteering-networks-singapore.mdx`
- `content/guides/belong/religious-communities-singapore.mdx`
- `content/guides/belong/nationality-groups-singapore.mdx`
- `content/guides/belong/chambers-of-commerce-singapore.mdx`
- `content/guides/belong/hash-house-harriers.mdx`

**Entity depth (schools / clubs)**

- `content/entities/schools/dover-court.json`
- `content/entities/schools/singapore-american-school.json`
- `content/entities/schools/lycee-francais.json`
- `content/entities/schools/invictus-international.json`
- `content/entities/schools/japanese-school.json`
- `content/entities/clubs/swiss-club.json`
- `content/entities/clubs/british-association.json`
- `content/entities/clubs/german-association.json`
- `content/entities/clubs/seletar-hash.json`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not edit Move / Money / Home / Life / Next guide trees.

### Questions mined (sample)

1. Can Dependant Pass kids enrol in MOE government schools, and do EP parents get citizen fees?
2. How does the 2026 P1 international-student interest window work, and when is the outcome?
3. If MOE assigns a far primary, do families usually move or carpool?
4. Does a native English-speaking child still need Cambridge English (CEQ) before AEIS?
5. Does passing AEIS let us choose a popular brand school?
6. Can foreigners access EIPIC or Pathlight?
7. How long are Dover Court / SAS learning-support waitlists, and what reports do admissions need?
8. What do local SPED foreigner places (APSN/MINDS) actually cost per month?
9. Where are good outdoor holiday camps that are not indoor coding?
10. Do ActiveSG kids programmes charge foreigners the full (unsubsidised) fee?
11. Are People’s Association CC volunteer roles open to foreigners?
12. Where should a DP spouse look if the CC says no — giving.sg, Willing Hearts, HOME/TWC2?
13. Can religious communities take foreigner volunteers (e.g. Buddhist temples)?
14. Is hashing a realistic low-fee alternative to country clubs for making friends?

---

## Loop D — Next pillar + editorial polish — 2026-09-15

Branch: `loop/next-polish` → PR to `main`. Owns **Next** guides (PR, renewals, leaving, citizenship/NS) plus light About / Editorial policy polish. Did **not** touch Move / Money / Family / Belong / Home / Life files owned by Loops A–C.

### Sources mined

**Reddit / forums**

- r/askSingapore — PR rejection / appeal / reapply / long pending ([appeal for PR rejection](https://www.reddit.com/r/askSingapore/comments/196c2xa/appeal_for_pr_rejection/); [four lines / re-apply UI](https://www.reddit.com/r/askSingapore/comments/1hbwgci/if_i_have_seen_four_lines_in_my_pr_application/); [17 months pending](https://www.reddit.com/r/askSingapore/comments/1bvp1o2/pr_application_been_17_months_still_pending/); [pending status myths](https://www.reddit.com/r/askSingapore/comments/10l5vyh/singapore_pr_application_status/); [update salary while pending](https://www.reddit.com/r/askSingapore/comments/1ez5zog/pr_application/); [reapply what to change](https://www.reddit.com/r/askSingapore/comments/1dv2qgn/reapply_pr/); [husband local sponsorship rejected](https://www.reddit.com/r/askSingapore/comments/1g2npsc/husband_pr_by_local_sponsorship_rejected/); [rejected seeking advice](https://www.reddit.com/r/askSingapore/comments/1d4mbr2/rejected_pr_application_seeking_advice/); [apply after few months](https://www.reddit.com/r/askSingapore/comments/1sx0502/considering_applying_for_singapore_pr_after_only/)).
- r/askSingapore — EP renewal / age-band salary / COMPASS / S Pass downgrade ([new round of EP renewals](https://www.reddit.com/r/askSingapore/comments/1cfsd88/new_round_of_ep_renewals/); [qualifying salary by age](https://www.reddit.com/r/askSingapore/comments/1fmj3t4/how_does_ep_qualifying_salary_by_age_works/); [salary slightly below age band](https://www.reddit.com/r/askSingapore/comments/1js33jo/ep_qualifying_salary_slightly_below_considering/); [COMPASS uni campus](https://www.reddit.com/r/askSingapore/comments/1q00yh8/question_about_employment_pass_compass_framework/); [EP processing times](https://www.reddit.com/r/askSingapore/comments/1o4eekn/are_eps_getting_really_processed_in_singapore/); [qualifying salary update confusion](https://www.reddit.com/r/askSingapore/comments/1jk9yhn/has_the_ep_qualifying_salary_been_updated/)).
- r/askSingapore + r/NationalServiceSG — Exit Permit / renounce PR / NS overseas ([NS obligations exit permits living overseas](https://www.reddit.com/r/askSingapore/comments/1ozhd20/ns_obligations_exit_permits_and_living_overseas/); [ORD overseas exit permit](https://www.reddit.com/r/NationalServiceSG/comments/1eledbd/ord_help_overseas_and_temp_review/); [exit permit IPPT mistake](https://www.reddit.com/r/NationalServiceSG/comments/1qq2c20/missing_ippt_due_to_mistake_on_exit_permit/); [should I renounce SG PR](https://www.reddit.com/r/NationalServiceSG/comments/1i032rw/should_i_renounce_my_sg_pr/); [how to renounce after going in](https://www.reddit.com/r/NationalServiceSG/comments/1oqm6f1/how_to_renounce_pr_after_going_in_guide/); [renounce in unit and leave](https://www.reddit.com/r/NationalServiceSG/comments/1oo0nsm/renounce_pr_in_unit_and_leave/)).
- r/askSingapore — leaving / IR21 / STVP / notice travel ([EP resignation STVP](https://www.reddit.com/r/askSingapore/comments/1ttedbd/ep_question_on_resignation_stvp/); [IR21 withhold explain](https://www.reddit.com/r/askSingapore/comments/119uwo8/hr_tax_qn_how_do_you_explain_to_your_employee/); [lost job exit questions](https://www.reddit.com/r/askSingapore/comments/187h2wf/in_light_of_losing_my_job_24_hours_ago_i_have_a/); [GIRO refund after clearance](https://www.reddit.com/r/askSingapore/comments/1h21yvx/can_i_refund_giro_payment/)).

**Official**

- [ICA — Appeal for SC / PR / LTVP](https://www.ica.gov.sg/reside/reside-appeals) + [ask.gov.sg PR appeal FAQ](https://ask.gov.sg/ica/questions/clxwhkiyp00hudsotw6rtl2oh) + [status enquire](https://ask.gov.sg/ica/questions/clxwhkixw007sdsotpvir28dv) + [Becoming a PR](https://www.ica.gov.sg/reside/PR).
- [MOM — EP eligibility / COMPASS / age-band salary through 2027–2028](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility) + [SAT](https://www.mom.gov.sg/eservices/services/employment-s-pass-self-assessment-tool) + [FCF](https://www.mom.gov.sg/passes-and-permits/employment-pass/consider-all-candidates-fairly).
- [CMPB — Exit Permit and bond (pre-enlistment)](https://www.cmpb.gov.sg/before-ns/pre-enlistment-process/exit-permit-and-bond/) + [ask.gov.sg NSman Exit Permit](https://ask.gov.sg/mindef/questions/cmhvc94jb0049koswqmmlpgoh) + [overseas work/study Exit Permit](https://ask.gov.sg/mindef/questions/cmhvblo84008ihpjiojoczv1g).
- [ICA — Renunciation of Permanent Residence](https://www.ica.gov.sg/enter-transit-depart/more-information/for-permanent-residents/renunciation-of-permanent-residence) + [CPF leaving / account closure](https://www.cpf.gov.sg/member/account-services/cpf-asset-management/on-leaving-singapore).
- [IRAS — Tax clearance IR21](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees).

### Gaps vs prior ticks (Next-owned)

Ticks 1–18 already covered PR strategy / after-PR / REP, thin EP renewal, leaving playbook / IR21 / costs, citizenship-NS overview, STVP between jobs, retrenchment, bonds/WICA, etc. Remaining high-intent **Next** gaps matched forum heat: **PR rejection + e-Service appeal + reapply**, **EP renewal age-band / 2027–2028 floors / S Pass contingency**, **NS Exit Permit + bond for PR sons**, **ICA renunciation process vs NS adverse impact**, plus leaving polish on **STVP length / notice travel / withholding cashflow**. About + editorial needed clearer research/orientation language.

### Shipped this loop

**New guides**

- `content/guides/next/pr-rejection-reapply.mdx`
- `content/guides/next/ns-exit-permit-pr-families.mdx`
- `content/guides/next/renouncing-pr-singapore.mdx`

**Upgraded guides**

- `content/guides/next/ep-renewal-strategy.mdx` (age bands, 2027/2028, COMPASS/SAT, S Pass contingency)
- `content/guides/next/leaving-singapore-playbook.mdx` (STVP ask, notice travel, withholding runway, renounce cross-link)
- `content/guides/next/pr-application-strategy.mdx` (rejection/exit-permit cross-links)
- `content/guides/next/citizenship-ns-implications.mdx` (Exit Permit + renounce cross-links)

**Editorial polish**

- `src/app/about/page.tsx`
- `src/app/editorial-policy/page.tsx`

### Explicitly not done

- No ads / monetization expansion.
- No Grok / third-party clone copy.
- Did not edit Move / Money / Family / Belong / Home / Life guide trees owned by Loops A–C.

### Questions mined (sample)

1. Can I appeal a PR rejection, or only reapply after circumstances change?
2. Does “pending” for 17+ months mean anything good?
3. How do I tell ICA about a new job/salary while PR is pending?
4. What should I change before PR try #2 after a local-sponsor refusal?
5. Will my EP renew if cash salary is under the age-band floor?
6. Is age counted at renewal filing or at pass expiry?
7. If EP renewal fails, will HR convert me to S Pass?
8. Do 13th-month / bonuses count toward EP qualifying salary?
9. Does my PR son need an Exit Permit (and bond) for overseas school?
10. As an NSman, when is Exit Permit required (6 vs 12 months)?
11. Can I renounce PR during NSF / BMT, and what happens to future EP chances?
12. After EP cancel, do I automatically get 90-day STVP?
13. Can I travel on notice while EP is still live?
14. Why is my final salary withheld for IR21, and how much runway do I need?

---

## Loop B — Family + Belong — 2026-09-15

Branch: `loop/family-belong` (Family + Belong guides + schools/clubs entity depth only).

### Sources mined

**Reddit**

- r/askSingapore — international school short-notice / waitlists / SAS vs Stamford ([international school help](https://www.reddit.com/r/askSingapore/comments/1jeyw1a/international_school_help_please/); [Stamford American?](https://www.reddit.com/r/askSingapore/comments/1l310j3/is_stamford_american_international_school_a_good/); [primary admission / ~S$35k fees](https://www.reddit.com/r/askSingapore/comments/1azh44d/primary_school_admission/); [MOE waiver → FSS](https://www.reddit.com/r/askSingapore/comments/1u4ilik/can_i_move_my_kid_to_an_international_school_in/)).
- r/askSingapore — preschool / childcare unsubsidised reality + POP traps ([expats recommend preschool](https://www.reddit.com/r/askSingapore/comments/1911bks/expats_please_recommend_a_preschool/); [relocation two kids](https://www.reddit.com/r/askSingapore/comments/1golvge/relocation_to_singapore_with_two_kids/); [POP vs private](https://www.reddit.com/r/askSingapore/comments/1s970xq/partner_operated_preschool_pop_vs_nonpop_private/); [12k family / school fees](https://www.reddit.com/r/askSingapore/comments/1qisb1f/frenchchinese_family_considering_move_to_sg_is/); [preschool student visa](https://www.reddit.com/r/askSingapore/comments/1auflqg/preschool_student_visa/)).
- r/askSingapore — family healthcare / paediatrician cash-pay ([pediatrician non-local](https://www.reddit.com/r/askSingapore/comments/1e73vx8/pediatrician_recommendation_for_nonlocal_pay_via/); [public vs private PD](https://www.reddit.com/r/askSingapore/comments/1lksvrf/pediatrician_public_vs_private/); [recommend PD cash](https://www.reddit.com/r/askSingapore/comments/1g54za3/anyone_can_recommend_a_pediatrician_in_sgp/)).
- r/askSingapore — spouse career / DP work ([finding job on DP](https://www.reddit.com/r/askSingapore/comments/18kmvea/finding_a_job_on_a_dependant_pass/); [male DP job chances](https://www.reddit.com/r/askSingapore/comments/17i35df/going_to_singapore_as_a_male_dp_need_a_job_but/); [expat spouse tech leadership](https://www.reddit.com/r/askSingapore/comments/1qvow08/expat_spouse_moving_to_singapore_realistic/); [can spouse work on DP](https://www.reddit.com/r/askSingapore/comments/1obgpqo/can_spouse_work_while_on_a_dependent_pass/); [DP + overseas employer](https://www.reddit.com/r/askSingapore/comments/uli2dx/how_can_a_dependent_pass_holder_work_in_singapore/)).
- r/askSingapore — LGBTQ partner pass / queer families ([same sex LTVP](https://www.reddit.com/r/askSingapore/comments/1rjp492/same_sex_couple_ltvp_options/); [LGBT couple + 2 kids](https://www.reddit.com/r/askSingapore/comments/1ixj6hq/lgbt_couple_and_2_kids_is_it_possible_to_raise_a/); [SG/FR gay couple relocate](https://www.reddit.com/r/askSingapore/comments/15qwmkv/thoughts_on_relocating_from_paris_to_singapore/)).
- r/askSingapore — clubs + trailing-spouse community ([trailing spouse life](https://www.reddit.com/r/askSingapore/comments/1inyc7x/whats_it_like_to_be_a_trailing_spouse_in_singapore/); [country club waits / Tanglin](https://www.reddit.com/r/askSingapore/comments/1153k1x/country_clubs_are_they_still_popular_with_the/); [private clubs](https://www.reddit.com/r/askSingapore/comments/16k8oin/private_clubs_in_singapore/); [finding friends / Meetup](https://www.reddit.com/r/askSingapore/comments/1n4xf99/recently_relocated_to_singapore_are_there_any/); [expat friends group](https://www.reddit.com/r/askSingapore/comments/1qr196s/expat_friends_group_in_singapore/)).

**Official**

- [ECDA — Preschool subsidies](https://www.ecda.gov.sg/parents/preschool-subsidies) (SC-framed).
- [MOM — Working in Singapore on a Dependant’s Pass](https://www.mom.gov.sg/passes-and-permits/dependants-pass/working-in-singapore) (EP/S Pass/DP-WP paths).
- [MOM — LTVP documents required](https://www.mom.gov.sg/passes-and-permits/long-term-visit-pass/documents-required) + [DP eligibility](https://www.mom.gov.sg/passes-and-permits/dependants-pass/eligibility) (partner-pass framing).
- [MOH — Healthcare system](https://www.moh.gov.sg/home/our-healthcare-system).

### Gaps vs prior ticks

Prior ticks covered waitlists, preschool subsidies, paediatrician, clubs, LGBTQ stub, ANZA/AWA, trailing-partner (Move pillar). Remaining Family/Belong heat: **POP/AOP citizen-fee screenshots vs foreigner gross**, **nationality caps / short-notice school seats**, **foreigner poly ≈ private cash**, **dual-career household planning** (Family-owned, linking Move trailing-partner), **LGBTQ partner-pass + queer-family depth**, **club holiday-camp / Tanglin decade-wait realism**, **trailing-spouse belonging without Facebook megagroups**. Skipped ads / sponsor expansion; no Move/Money/Home/Life/Next ownership edits.

### Shipped this loop

**New guides**

- `content/guides/family/dual-career-spouse-singapore.mdx`

**Upgraded guides**

- `content/guides/belong/lgbtq-resources-singapore.mdx`
- `content/guides/family/preschool-childcare-singapore.mdx`
- `content/guides/family/school-waitlist-realism.mdx`
- `content/guides/family/international-schools-landscape.mdx`
- `content/guides/family/finding-pediatrician-singapore.mdx`
- `content/guides/family/healthcare-gp-hospital.mdx`
- `content/guides/belong/membership-clubs-comparison.mdx` (removed sponsorSlot; added citations + holiday-camp axis)
- `content/guides/belong/american-club-vs-tanglin.mdx`
- `content/guides/belong/find-my-people-singapore.mdx`
- `content/guides/belong/anza-awa-associations.mdx`

**Entity depth (schools / clubs)**

- `content/entities/schools/stamford-american.json`
- `content/entities/schools/singapore-american-school.json`
- `content/entities/schools/tanglin-trust-school.json`
- `content/entities/schools/uwcsea-dover.json`
- `content/entities/clubs/american-club.json`
- `content/entities/clubs/tanglin-club.json`
- `content/entities/clubs/hollandse-club.json`
- `content/entities/clubs/british-club.json`
- `content/entities/clubs/anza.json`
- `content/entities/clubs/awa.json`
- `content/entities/clubs/oogachaga.json`

### Explicitly not done

- No ads/monetization expansion (removed clubs `sponsorSlot`).
- No copying of third-party “expat-sg” / Grok clones.
- Did not edit Move/Money/Home/Life/Next guides (trailing-partner left under Move; Family dual-career links to it).

---

## Loop A — Move + Money — 2026-09-15

Parallel content loop owning **Move** + **Money** guides and related comparisons only. Branch: `loop/move-money`.

### Sources mined

**Reddit**

- r/askSingapore — EP qualifying salary 2025 / age bands / signed-at-S$5k vs S$5.6k ([has the EP qualifying salary been updated?](https://www.reddit.com/r/askSingapore/comments/1jk9yhn/has_the_ep_qualifying_salary_been_updated/); [how does EP qualifying salary by age work?](https://www.reddit.com/r/askSingapore/comments/1fmj3t4/how_does_ep_qualifying_salary_by_age_works/); [is it realistic to get an EP?](https://www.reddit.com/r/askSingapore/comments/1j3siis/is_it_realistic_to_get_an_employment_pass_in/); [EP application COMPASS process time 2025](https://www.reddit.com/r/askSingapore/comments/1j3cwm2/ep_application_with_compass_process_time_2025/); [COMPASS university campus points](https://www.reddit.com/r/askSingapore/comments/1q00yh8/question_about_employment_pass_compass_framework/); [EP process on company change](https://www.reddit.com/r/askSingapore/comments/120shl1/ep_process_on_company_change/)).
- r/askSingapore — non-resident / no-FIN personal banking + PayNow as foreigner ([how to open a foreign bank account](https://www.reddit.com/r/askSingapore/comments/1qtoo1v/how_to_open_a_foreign_bank_account/); [DBS Treasures non-resident](https://www.reddit.com/r/askSingapore/comments/1ocese7/dbs_treasure_account_nonresident_noncitizen/); [opening a bank account as a foreign national](https://www.reddit.com/r/askSingapore/comments/1dadryl/opening_a_bank_account_as_a_foreign_national_in/); [using PayNow as a foreigner](https://www.reddit.com/r/askSingapore/comments/1uetszj/using_paynow_as_a_foreigner_accepting_payments/)).
- r/askSingapore — CBNI / cash >S$20k vs wires ([how much $$$ can I bring into Singapore?](https://www.reddit.com/r/askSingapore/comments/19dh0bb/how_much_can_i_bring_into_singapore/); [advice on bringing in more than $20,000 cash](https://www.reddit.com/r/askSingapore/comments/11726uv/advice_on_bringing_in_more_than_20000_cash_into/); [bringing money from overseas](https://www.reddit.com/r/askSingapore/comments/17ivkvx/bringing_money_from_overseas_to_singapore/); [cheapest inward remittance](https://www.reddit.com/r/askSingapore/comments/w6uicx/cheapest_way_for_inward_remittance/)).
- r/askSingapore — IR21 withhold on cease / job hop + group medical end dates ([HR explain IR21 withhold](https://www.reddit.com/r/askSingapore/comments/119uwo8/hr_tax_qn_how_do_you_explain_to_your_employee/); [lost job — SRS / IR21](https://www.reddit.com/r/askSingapore/comments/187h2wf/in_light_of_losing_my_job_24_hours_ago_i_have_a/); [EP notice <1 month vs IR21](https://www.reddit.com/r/askSingapore/comments/1q9stq3/what_happens_if_an_ep_holder_gives_leaving_notice/); [medical insurance during notice](https://www.reddit.com/r/askSingapore/comments/147evuh/medical_insurance_during_resignation_notice_period/); [medical allowance vs insurance](https://www.reddit.com/r/askSingapore/comments/1s9cv26/company_providing_medical_allowance_or_medical/); [expat health insurance advice](https://www.reddit.com/r/askSingapore/comments/1qknwn1/expat_health_insurance_advice_needed/)).

**Official**

- [MOM — EP eligibility / salary tables](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility) + [key facts](https://www.mom.gov.sg/passes-and-permits/employment-pass/key-facts) + [COMPASS C1 benchmarks](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility/compass-c1-salary-benchmarks) + [S Pass eligibility](https://www.mom.gov.sg/passes-and-permits/s-pass/eligibility).
- [ICA — CBNI cash declaration](https://www.ica.gov.sg/enter-transit-depart/at-our-checkpoints/for-travellers/CBNI) + [go.gov.sg/cbnideclaration](https://go.gov.sg/cbnideclaration) + [SPF STRO cross-border cash](https://www.police.gov.sg/Advisories/Commercial-Crimes/Suspicious-Transaction-Reporting-Office).
- [IRAS — tax clearance for non-SC employees](https://www.iras.gov.sg/taxes/individual-income-tax/employees/scenario-based-faqs-for-working-in-singapore-and-abroad/tax-clearance-for-non-singapore-citizen-employees) + [re-employment in Singapore](https://www.iras.gov.sg/taxes/individual-income-tax/employees/scenario-based-faqs-for-working-in-singapore-and-abroad/i-am-re-employed-in-singapore) + [overseas income](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/what-is-taxable-what-is-not/income-received-from-overseas).
- [MAS](https://www.mas.gov.sg/) + [ABS PayNow](https://www.abs.org.sg/e-payments/pay-now).

### Gaps vs prior ticks (Move + Money scope)

Prior ticks already covered EP appeal/IPA, COMPASS/FCF overview, remittance basics, bank chicken-and-egg, IRAS residency/COR/NOA GIRO, health insurance audit, salary package heuristics. Remaining high-intent Move/Money gaps matched this mine: **age-banded EP floors + new vs renewal calendars**, **EP vs S Pass “no EP quota” comparison**, **CBNI ≥S$20k physical cash**, **non-resident / no-FIN personal banking myths**, **MPI vs bank for remittance**, **IR21 withhold on job hop while staying**, **group medical end-on-last-day / non-portability**.

### Shipped this loop

**New guides / comparisons**

- `content/guides/money/cbni-cash-declaration-singapore.mdx`
- `content/guides/move/ep-vs-s-pass-comparison.mdx`

**Upgraded guides (depth + citations + cross-links + lastReviewed 2026-09-15)**

- `content/guides/move/employment-pass-singapore.mdx` (Stage 1 salary tables + job-change / pending IPA)
- `content/guides/move/compass-framework-explained.mdx` (C1 vs floor + new/renewal clocks + S$22.5k exempt)
- `content/guides/move/decoding-job-offer-singapore.mdx`
- `content/guides/move/s-pass-singapore.mdx` (comparison deep-link)
- `content/guides/money/remittances-singapore.mdx` (CBNI + MPI + inward SoF)
- `content/guides/money/opening-bank-account-expat.mdx` (no-FIN / non-resident section)
- `content/guides/money/health-insurance-expat.mdx` (notice / job-change portability)
- `content/guides/money/salary-package-decoding.mdx` (IR21 job-hop cashflow)
- `content/guides/money/foreign-income-and-tax.mdx` (CBNI adjacency)

**Entity depth**

- `content/entities/services/intact-immigration.json`
- `content/entities/services/aia-singapore.json`
- `content/entities/services/prudential-singapore.json`

### Explicitly not done

- No ads/monetization expansion.
- No Grok / third-party clone copy.
- Did not edit Family / Belong / Home / Life / Next heavily (IR21 deep guide remains under Next; Money guides link out).

---

## Loop C — Home + Life (parallel) — Tick 19 — 2026-09-15

Branch: `loop/home-life` → PR to `main`. Owns **Home** + **Life** guides and neighbourhood entities only.

### Sources mined

**Reddit**

- r/askSingapore — HDB ceiling leaks / upstairs shower drip / tenant leverage ([how to deal with leaking HDB](https://www.reddit.com/r/askSingapore/comments/1iibua6/how_to_deal_with_leaking_hdb_as_a_renter/); [leaking ceiling jet-wash](https://www.reddit.com/r/askSingapore/comments/1g44v9n/leaking_ceiling_in_hdb_flat/); [tenant fire/water whose fault](https://www.reddit.com/r/askSingapore/comments/1ba7q1r/tenant_fire_water_leaking_happens_whose_fault/); [S$200 minor-repair water heater](https://www.reddit.com/r/askSingapore/comments/1ca7p2k/qn_to_tenantsproperty_agentslandlord/); [tenancy condition dispute](https://www.reddit.com/r/askSingapore/comments/mh3v6m/hdb_tenancy_dispute_due_to_condition_of_the_house/)).
- r/askSingapore — pets daily life / renting with dogs & cats / GrabPet ([renting with dogs and cats](https://www.reddit.com/r/askSingapore/comments/xqronf/renting_with_dogs_and_cats/); [condo landlords + cats](https://www.reddit.com/r/askSingapore/comments/1b9b7bl/odds_of_finding_condo_landlord_willing_to_accept/); [relocating with dog](https://www.reddit.com/r/askSingapore/comments/1hr5g5y/experience_relocating_with_your_dog/); [feasible with pets](https://www.reddit.com/r/askSingapore/comments/1u81hf1/is_it_feasible_to_move_to_singapore_with_pets/); [HDB vs condo budget adjacency](https://www.reddit.com/r/askSingapore/comments/1jh5euh/housing_questions_for_expat_hdb_vs_condo/)).
- r/askSingapore — PUB/SP high water bills / silent leaks / landlord bill opacity ([insane water bill](https://www.reddit.com/r/askSingapore/comments/1rgvtuw/insane_water_bill_how_to_resolve_it/); [7.6→79.9 Cu M spike](https://www.reddit.com/r/askSingapore/comments/1jijxzx/water_consumption_big_jump_from_76cu_m_to_799/); [500% jump](https://www.reddit.com/r/askSingapore/comments/1s1a3oj/water_reading_jumped_500_went_from_like_2_cu_m_in/); [landlord fraud utilities](https://www.reddit.com/r/askSingapore/comments/1f8l5sg/help_i_suspect_my_landlord_is_committing_fraud/)).
- r/askSingapore — RedMart / FairPrice Online / platform fees ([which online supermarket](https://www.reddit.com/r/askSingapore/comments/1bqrik9/which_online_supermarket_do_you_use_for_your/); [RedMart on Lazada safe?](https://www.reddit.com/r/askSingapore/comments/1rtuul6/redmart_in_lazada_for_food_is_it_safe/); [platform fee](https://www.reddit.com/r/askSingapore/comments/1nm39cb/anyone_else_notice_redmart_has_a_new_platform_fee/); [FairPrice no-show](https://www.reddit.com/r/askSingapore/comments/1l9doeb/online_grocery_delivery_services/)).
- r/askSingapore — condo visitor parking / CashCard vs SimplyGo myth ([do condos charge visitors](https://www.reddit.com/r/askSingapore/comments/119y05w/do_condos_charge_visitors_for_parking/); [car label / clamp](https://www.reddit.com/r/askSingapore/comments/1al3clm/condo_council_enforcing_car_label_dedicated/); [card payment parking](https://www.reddit.com/r/askSingapore/comments/1fmoe3e/card_payment_to_park_in_millenia_walk/)).

**Official**

- [HDB — Ceiling leaks](https://www.hdb.gov.sg/managing-my-home/renovation-and-maintenance/home-maintenance/home-care-guide/ceiling-leaks) + [GRA media letter](https://www.hdb.gov.sg/cs/infoweb/about-us/news-and-publications/letters-to-the-media/goodwill-repair-assistance-scheme-helps-fix-leaks-quickly).
- [HDB — Keeping pets](https://www.hdb.gov.sg/community/caring-for-your-neighbours/being-a-good-neighbour/tips-on-neighbourliness/keeping-pets) + [AVS ownership limits](https://avs.nparks.gov.sg/pets/licensing-a-pet/information-on-dog-and-cat-licences/limits-of-ownership/) + [PALS licensing](https://avs.nparks.gov.sg/pets/licensing-a-pet/information-on-dog-and-cat-licences/licensing-requirements/) + [Cat Management Framework](https://www.nparks.gov.sg/news/news-detail/avs-announces-finalised-cat-management-framework-with-licensing-and-microchipping-for-pet-cats-starting-1-september-2024).
- [PUB — Tips on finding leaks (PDF)](https://www.pub.gov.sg/-/media/Images/Feature/Content-Pages/Resources/Publications/Pdfs/Tips_on_Finding_Leaks.pdf) + [water-saving / leak tablets](https://www.pub.gov.sg/Public/WaterLoop/Water-Conservation/Water-Saving-Items) + [SP residential utilities / leakage appeals](https://www.spgroup.com.sg/our-services/utilities/quick-guide-to-your-utilities-residential).
- [CEA — Tenancy templates](https://www.cea.gov.sg/real-estate-professionals/agreements-and-checklists/) (adjacency for tenantable premises / repair clauses).

### Gaps vs Tick 1–18 (Home + Life slice)

Tick 1–18 already covered renting LOI/TA, tenant-agent commission, fair-wear inventory, diplomatic clause/SCT, aircon/pest, condo noise/MCST, utilities SP/OEM (thin on **PUB silent-leak / SP water-leakage appeal**), condo vs HDB (thin on **pets + slab-leak ops**), heartland, furnishing, shopping/e-waste (thin on **RedMart platform-fee / fresh-vs-pantry split**), apps/PayNow, SimplyGo, car/COE (thin on **visitor parking + CashCard ≠ SimplyGo**), hawker, haze, cycling, CASE/Lemon Law, traffic claims, importing pets under Move (no **daily pet living** Life guide). Remaining high-intent Home+Life gaps matched forum heat: **HDB ceiling leaks for tenants**, **pets daily life (HDB cats + PALS + GrabPet)**, PUB water spikes, grocery delivery depth, visitor parking.

### Shipped this tick

**New guides**

- `content/guides/home/hdb-ceiling-leak-tenants.mdx`
- `content/guides/life/pets-daily-life-singapore.mdx`

**Upgraded guides (depth + citations + cross-links + lastReviewed 2026-09-15)**

- `content/guides/home/utilities-telecom-setup.mdx` (PUB meter test + SP water leakage appeals)
- `content/guides/home/condo-vs-hdb-expat.mdx` (pets + slab-leak rows)
- `content/guides/life/shopping-essentials-singapore.mdx` (RedMart/FairPrice delivery ops)
- `content/guides/life/car-ownership-vs-sharing-singapore.mdx` (visitor parking + CashCard)
- `content/guides/life/apps-that-matter-singapore.mdx` (grocery + GrabPet rows)

**Neighbourhood entity depth**

- `content/entities/neighbourhoods/tiong-bahru.json`
- `content/entities/neighbourhoods/east-coast.json`
- `content/entities/neighbourhoods/holland-village.json`

### Explicitly not done

- No ads/monetization expansion.
- No copying of third-party “expat-sg” / Grok clones.
- Did not edit Move/Money/Family/Belong guides (importing-pets left owned by Move; Life guide cross-links only).
- Did not re-litigate Tick 1–18 Home/Life topics beyond the leak, pets, water-bill, grocery-delivery, and visitor-parking gaps above.

---

## Tick 18 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — WICA / workplace injury / employer delay / Singapore-doctor bills ([injured @ work but can't quit](https://www.reddit.com/r/askSingapore/comments/ypkjy7/injured_work_but_cant_quit_bc_of_bond/); [workplace injury and help](https://www.reddit.com/r/askSingapore/comments/1u80ui1/need_advice_workplace_injury_and_help/); [5 months no progress](https://www.reddit.com/r/askSingapore/comments/1ie2u9r/it_has_been_5_months_since_my_workplace_injury/); [critically ill foreign worker](https://www.reddit.com/r/askSingapore/comments/14kzixu/what_will_happen_to_a_foreign_worker_if_they_get/); [workplace injury claims](https://www.reddit.com/r/askSingapore/comments/st81i3/workplace_injury_claims/)).
- r/askSingapore — tenant agent commission / renewal fee / CEA agreement ([want to avoid agent's commission upon renewal](https://www.reddit.com/r/askSingapore/comments/1jd30vm/want_to_avoid_agents_commission_upon_renewal/); [need agent for renewal?](https://www.reddit.com/r/askSingapore/comments/1dss3xs/tenants_in_sg_do_you_still_need_a_property_agent/); [use tenant agent?](https://www.reddit.com/r/askSingapore/comments/1psr0va/on_renting_do_you_use_tenant_agent/); [expat hire agent?](https://www.reddit.com/r/askSingapore/comments/1dnzx8x/expat_looking_to_rent_should_i_hire_an_agent/); [TA without agent](https://www.reddit.com/r/askSingapore/comments/1g7qpkq/tenancy_agreement_question/)).
- r/askSingapore — EP training bonds / liquidated damages / clawbacks ([unfair foreigner bond](https://www.reddit.com/r/askSingapore/comments/1cyigjo/unfair_employment_contract_clause/); [EP offer letter bond](https://www.reddit.com/r/askSingapore/comments/1qquyw2/employment_pass_ep_offer_letter_bond/); [penalty / LD clause](https://www.reddit.com/r/askSingapore/comments/16dgitq/penaltyliquidated_damages_clause_in_job_offer/); [probation exit fee](https://www.reddit.com/r/askSingapore/comments/udlpxh/friends_offer_letter_says_this_first_time_hearing/); [bonus clawback](https://www.reddit.com/r/askSingapore/comments/1pqhpd3/resignation_healthcare_can_they_clawback_my_bonus/)).
- r/askSingapore — traffic accident / SPF report criteria / Malaysian plates / GetGo pressure ([traffic accident reported against me](https://www.reddit.com/r/askSingapore/comments/1rv6u8q/traffic_accident_reported_against_me/); [car cannot be driven](https://www.reddit.com/r/askSingapore/comments/1jauhx7/if_my_car_gets_into_accident_and_cannot_be_driven/); [hit and run carpark](https://www.reddit.com/r/askSingapore/comments/1cxwz02/minor_damage_from_hit_and_run_in_a_carpark_police/); [Malaysian rear-end](https://www.reddit.com/r/askSingapore/comments/1nk69kt/moms_car_got_rear_ended_badly_by_a_malaysian_car/); [rental assessor TP report](https://www.reddit.com/r/askSingapore/comments/16xn8c2/am_i_being_scammed_by_car_rental_company/)).
- r/askSingapore — first NOA / GIRO instalment timing adjacency ([GIRO income tax payment](https://www.reddit.com/r/askSingapore/comments/11wb03o/giro_income_tax_payment/); [moving timing for income tax](https://www.reddit.com/r/askSingapore/comments/19b12g0/moving_to_sg_timing_for_income_tax_foreigner/); [change GIRO bank](https://www.reddit.com/r/askSingapore/comments/14fuhlz/how_to_change_giro_bank_for_tax_payments_online/)).

**Official**

- [MOM — EP holders under WICA](https://www.mom.gov.sg/faq/employment-pass/are-ep-holders-covered-under-wica) + [who is covered](https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/who-is-covered) + [eligible claims](https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/eligible-claims) + [types / S$53k from 1 Nov 2025](https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/types-of-compensation) + [mandatory insurance](https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/work-injury-compensation-insurance) + [employees how to claim](https://www.mom.gov.sg/workplace-safety-and-health/work-injury-compensation/employees-how-to-claim) + [higher limits PR](https://www.mom.gov.sg/newsroom/press-releases/2024/0802-higher-compensation-limits-under-the-work-injury-compensation-act).
- [CEA — renting / engaging an agent](https://www.cea.gov.sg/consumers/engaging-a-property-agent/renting-or-renting-out/) + [what to note](https://www.cea.gov.sg/consumers/engaging-a-property-agent/what-to-take-note-of-when-engaging-a-property-agent/) + [public register](https://www.cea.gov.sg/public-register/) + [TA templates](https://www.cea.gov.sg/real-estate-professionals/agreements-and-checklists/) + [IRAS lease duty](https://www.iras.gov.sg/taxes/stamp-duty/for-property/renting-a-property).
- [MOM — salary deductions](https://www.mom.gov.sg/employment-practices/salary/salary-deductions) + [reject resignation FAQ](https://www.mom.gov.sg/faq/termination/can-an-employer-reject-an-employees-resignation) + [termination with notice](https://www.mom.gov.sg/employment-practices/termination-of-employment/termination-with-notice) + [change jobs on EP](https://www.mom.gov.sg/faq/employment-pass/what-if-i-want-to-change-jobs-while-i-am-on-an-ep).
- [SPF — Reporting traffic accidents](https://www.police.gov.sg/Knowledge-Hub/Traffic/Traffic-Matters/Reporting-Traffic-Accidents-and-Offences) + [GIA motor insurance / foreign motorists](https://gia.org.sg/motor-insurance/22-premium-renewal-of-policy/361-claiming-against-foreign-motorists.html).
- [IRAS — late payment / GIRO instalments](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/receive-tax-bill-pay-tax-check-refunds/late-payment-or-non-payment-of-individual-income-tax) + [GIRO IIT](https://www.iras.gov.sg/quick-links/payments/giro-individual-income-tax) + [new taxpayer guide](https://www.iras.gov.sg/taxes/individual-income-tax/employees/basic-guide-for-new-individual-taxpayers).

### Gaps vs Tick 1–17

Tick 1–17 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR/MediShield/CareShield/DPS, MDW, diplomatic clause/SCT/inventory, insurance/maternity/Baby Bonus, preschool, banks/CPF/credit cards/RSU, licence conversion, clubs, SIM/Singpass/scams, pets, IRAS/foreign income/COR (thin on **NOA GIRO approval-before-due-date**), short-stay/FWTES, MOE P1/AEIS, LTVP, EP appeal/IPA/COMPASS/FCF, healthcare/HSA/dental/vaccination (thin on **WICA vs group plan**), remittance/PayNow recovery, S Pass, Customs GST, Student’s Pass/Tuition Grant, career pivots/TADM/leave/harassment/FWA/retrenchment (thin on **training bonds / LD / clawbacks**), SimplyGo, aircon/mould, SRS, haze, ABSD/HDB, STVP, PEP/ONE/Tech.Pass, EntrePass/incorporation, COE/car (thin on **SPF report vs Motor Claims Framework**), JB, dengue, year-one finance, furnishing, condo noise, mental health, SEN, paediatrician, stay-vs-exit, ActiveSG, groceries, hawker, dating, volunteering, camps, passport embassy, NLB/museums, shipping out, wardrobe, nightlife/vaping, nationality/religious/chambers/hash, SP/OEM, moonlighting, overseas remote, apostille, lost EP card, stamp duty, ROM/divorce/PPO, newborn/LOG, REP, probate/death/LPA, cycling, IVF, visit-pass, paternity/SPL, WHP/TEP, CASE/Lemon Law. Remaining high-intent gaps matched forum heat: **WICA**, **tenant-agent commission/renewal**, **EP bonds/clawbacks**, **traffic accident claims**, NOA/GIRO depth.

### Shipped this tick

**New guides**

- `content/guides/next/wica-work-injury-compensation-ep.mdx`
- `content/guides/home/tenant-agent-commission-cea.mdx`
- `content/guides/next/training-bonds-clawbacks-ep.mdx`
- `content/guides/life/traffic-accident-motor-claims-singapore.mdx`

**Upgraded guides (depth + citations + cross-links + lastReviewed 2026-09-15)**

- `content/guides/next/career-pivots-singapore.mdx`
- `content/guides/next/employment-act-leave-notice-ep.mdx`
- `content/guides/home/renting-process-loi-ta-deposits.mdx`
- `content/guides/home/moving-within-singapore.mdx`
- `content/guides/money/health-insurance-expat.mdx`
- `content/guides/family/healthcare-gp-hospital.mdx`
- `content/guides/money/iras-tax-residency-filing.mdx` (NOA / GIRO instalment clocks)
- `content/guides/move/decoding-job-offer-singapore.mdx`
- `content/guides/life/car-ownership-vs-sharing-singapore.mdx`

**Entity depth**

- `content/entities/services/era-realty.json`
- `content/entities/services/huttons.json`
- `content/entities/services/orange-tee.json`
- `content/entities/services/raffles-medical.json`
- `content/entities/services/intact-immigration.json`
- `content/entities/services/family-law-expat.json`

### Explicitly not done

- No ads/monetization expansion.
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–17 topics beyond the WICA, tenant-commission, training-bond, traffic-claim, and NOA/GIRO adjacency gaps above.

---

## Tick 17 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — EP rejection / appeal chances / employer-only process ([job offer rejected due to EP](https://www.reddit.com/r/askSingapore/comments/1jehp27/job_offer_rejected_due_to_ep_issues_what_are_my/); [EP rejected due to employers issue](https://www.reddit.com/r/askSingapore/comments/1idope2/ep_rejected_due_to_employers_issue/); [WP rejected non-rectifiable](https://www.reddit.com/r/askSingapore/comments/1c2clnc/got_offer_letter_last_week_work_permit_is/); [MOM medical exam privacy](https://www.reddit.com/r/askSingapore/comments/1rw9ev6/mom_work_authorization_medical_exam/)).
- r/askSingapore — CASE / Lemon Law / SCT for defective goods & promo failures ([valid lemon law case](https://www.reddit.com/r/askSingapore/comments/1axy4sv/is_this_a_valid_lemon_law_case/); [COE car lemon law myth](https://www.reddit.com/r/askSingapore/comments/1chdeky/bought_a_used_coe_car_dealer_claiming_lemon_law/); [furniture non-delivery](https://www.reddit.com/r/askSingapore/comments/u0yvmv/what_can_i_do_as_a_consumer_if_furniture_shop/); [StarHub CASE vs SCT](https://www.reddit.com/r/askSingapore/comments/1odx7cq/need_advice_taking_big_companies_to_case_or_sct/)).
- r/askSingapore — fair wear & tear / inventory / deposit checkout ([fair wear rented HDB](https://www.reddit.com/r/askSingapore/comments/1qe8j6k/what_is_considered_fair_wear_tear_on_a_rented_hdb/); [move-out after 5 years](https://www.reddit.com/r/askSingapore/comments/1qkg6bq/advice_needed_moving_out_after_5_years_agents/); [TA inventory tips](https://www.reddit.com/r/askSingapore/comments/zmcmh7/what_to_look_for_in_a_tenancy_agreement_when/); [deposit from overseas](https://www.reddit.com/r/askSingapore/comments/1n36t6r/landlord_refusing_to_return_deposit_what_can_i_do/)).
- r/askSingapore — incorporate / nominee director / EP as resident director / DP LOC renewals ([which visa to start company on EP](https://www.reddit.com/r/askSingapore/comments/1762o0u/which_visa_will_allow_me_to_start_a_company_in/); [incorporating in Singapore](https://www.reddit.com/r/askSingapore/comments/1e77aq4/incorporating_in_singapore/); [self-sponsor EP timeline](https://www.reddit.com/r/askSingapore/comments/1bhqar4/creating_a_company_to_selfsponsor_ep_timeline/); [DP LOC → own Pte Ltd EP](https://www.reddit.com/r/askSingapore/comments/1qq3zsf/advice_on_starting_business_in_singapore/); [PR asked to be nominee director](https://www.reddit.com/r/askSingapore/comments/159tuzx/foreign_employer_asking_me_to_become_company/)).
- r/askSingapore — MDW insurance / SIP / medical bill shock (adjacency on MDW upgrade) ([helper medical issues](https://www.reddit.com/r/askSingapore/comments/18slzmu/what_should_i_do_if_newly_joined_domestic_helper_has/); [maid dental](https://www.reddit.com/r/askSingapore/comments/11x7jut/maid_dental_treatment/); [how much for helper](https://www.reddit.com/r/askSingapore/comments/17kh6qm/how_much_for_a_domestic_helper/); [abusive employer / SIP booklet](https://www.reddit.com/r/askSingapore/comments/193d0pr/abusive_employer/)).

**Official**

- [MOM — Appeal rejected EP](https://www.mom.gov.sg/passes-and-permits/employment-pass/appeal-against-a-rejected-application) + [Apply / IPA / issue the pass](https://www.mom.gov.sg/passes-and-permits/employment-pass/apply-for-a-pass/) + [SAT](https://www.mom.gov.sg/eservices/services/employment-s-pass-self-assessment-tool) + [Secondary directorship LOC](https://www.mom.gov.sg/passes-and-permits/employment-pass/taking-up-secondary-directorship).
- [CASE — CPFTA & Lemon Law](https://www.case.org.sg/cpfta-lemon-law/) + [Submit a complaint](https://www.case.org.sg/submit-a-complaint/) + [MTI Lemon Law advisory](https://www.mti.gov.sg/resources/laws-and-regulations/general-advisory-on-amendments-to-the-consumer-protection-fair-trading-act-and-hire-purchase-act/) + [CCCS seeking compensation](https://www.ccs.gov.sg/get-in-touch/for-consumers/seeking-compensation/).
- [CEA — Tenancy templates](https://www.cea.gov.sg/real-estate-professionals/agreements-and-checklists/) + [Judiciary SCT eligibility](https://www.judiciary.gov.sg/civil/cases-eligible-small-claim).
- [ACRA — Foreigner requirements](https://www.acra.gov.sg/register/business/requirements-eligibility/) + [Directors & officers](https://www.acra.gov.sg/register/business/registering-different-business-structures/local-company/appointing-company-directors-other-key-officers/) + [Register local company](https://www.acra.gov.sg/register/business/registering-different-business-structures/local-company/).
- [MOM — MDW insurance](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/eligibility-and-requirements/insurance-requirements) + [Settling-in Programme](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/eligibility-and-requirements/settling-in-programme-sip).

### Gaps vs Tick 1–16

Tick 1–16 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR/MediShield/CareShield/DPS, MDW (thin on **enhanced MI ≥S$60k + SIP 7-day clock**), diplomatic clause/SCT (thin on **inventory / fair-wear make-good**), insurance/maternity/Baby Bonus, preschool, banks/CPF/credit cards/RSU, licence conversion, clubs, SIM/Singpass/scams, pets, IRAS/foreign income/COR, short-stay/FWTES, MOE P1/AEIS, LTVP, EP/COMPASS/FCF (thin on **rejection appeal + IPA medical issuance**), healthcare/HSA/dental/vaccination, remittance/PayNow recovery, S Pass, Customs GST, Student’s Pass/Tuition Grant, career pivots/TADM/leave/harassment/FWA/retrenchment, SimplyGo, aircon/mould, SRS, haze, ABSD/HDB, STVP, PEP/ONE/Tech.Pass, EntrePass (thin on **ACRA/CSP/resident director vs pass**), COE/car, JB, dengue, year-one finance, furnishing, condo noise, mental health, SEN, paediatrician, stay-vs-exit, ActiveSG, groceries, hawker, dating, volunteering, camps, passport embassy, NLB/museums, shipping out, wardrobe, nightlife/vaping, nationality/religious/chambers/hash, SP/OEM, moonlighting, overseas remote, apostille, lost EP card, stamp duty, ROM/divorce/PPO, newborn/LOG, REP, probate/death/LPA, cycling, IVF, visit-pass, paternity/SPL, WHP/TEP. Remaining high-intent gaps matched forum heat: **EP appeal/IPA**, **CASE/Lemon Law**, **fair wear inventory**, **foreigner incorporation**, MDW insurance/SIP.

### Shipped this tick

**New guides**

- `content/guides/move/ep-rejection-appeal-ipa-issuance.mdx`
- `content/guides/life/case-lemon-law-consumers-singapore.mdx`
- `content/guides/home/rental-inventory-fair-wear-tear.mdx`
- `content/guides/move/incorporate-company-foreigner-singapore.mdx`

**Upgraded guides (depth + citations + cross-links + lastReviewed 2026-09-15)**

- `content/guides/move/employment-pass-singapore.mdx`
- `content/guides/move/entrepass-singapore.mdx`
- `content/guides/move/side-income-freelance-work-pass.mdx`
- `content/guides/home/security-deposit-diplomatic-clause.mdx`
- `content/guides/home/furnishing-rental-flat.mdx`
- `content/guides/home/hiring-domestic-helper-mdw.mdx` (enhanced MI + SIP)

**Entity depth**

- `content/entities/services/intact-immigration.json`
- `content/entities/services/comfort-employment.json`
- `content/entities/services/era-realty.json`
- `content/entities/services/family-law-expat.json`

### Explicitly not done

- No ads/monetization expansion.
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–16 topics beyond the EP-appeal/IPA, CASE/lemon-law, inventory/fair-wear, incorporation, and MDW insurance/SIP adjacency gaps above.

---

## Tick 16 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — death of a foreigner / FIN overseas death reporting / repatriation vs probate freeze ([what happens when a foreigner dies](https://www.reddit.com/r/askSingapore/comments/1qp1dg4/what_happens_when_a_foreigner_dies_in_sg/); [reporting death of a foreign spouse](https://www.reddit.com/r/askSingapore/comments/1mjknll/reporting_death_of_a_foreign_spouse/); [repatriation of ashes](https://www.reddit.com/r/askSingapore/comments/1ic0dcz/repatriation_of_foreign_ashes_usa/); [probate when foreigner passes](https://www.reddit.com/r/askSingapore/comments/lr8iou/process_for_grant_of_probate_when_a_foreigner/); [DP survivor after spouse death](https://www.reddit.com/r/askSingapore/comments/x09kp0/my_friend_is_on_a_dependent_visa_in_singapore/)).
- r/askSingapore — LPA vs will / hospital capacity / bank access ([will vs LPA for parents](https://www.reddit.com/r/askSingapore/comments/1m4m9a6/assume_i_am_an_only_child_what_would_the/); [final days outstanding bills](https://www.reddit.com/r/askSingapore/comments/1lozngb/my_father_is_in_his_final_days_of_cancer_and_have/); [cancer treatment costs / LPA nudge](https://www.reddit.com/r/askSingapore/comments/1j4y19f/unable_to_afford_cancer_treatment_cost/); [paying for parents wellbeing](https://www.reddit.com/r/askSingapore/comments/1tn3dhr/paying_for_your_parents_wellbeing_in_singapore/)).
- r/askSingapore — retrenchment on EP / STVP ask / notice hunting window ([retrenched today](https://www.reddit.com/r/askSingapore/comments/186nx8g/and_so_it_happened_i_got_retrenched_today/); [LTVP after losing job](https://www.reddit.com/r/askSingapore/comments/1q66ra7/getting_an_ltvp_after_losing_job/); [laid off stay more than a month](https://www.reddit.com/r/askSingapore/comments/vn8l3i/if_im_laid_off_as_an_ep_holder_is_there_anyway_to/); [managing EP after job loss](https://www.reddit.com/r/askSingapore/comments/16p9wv0/managing_my_ep_after_job_loss_in_singapore/); [working after EP expired](https://www.reddit.com/r/askSingapore/comments/1hdcxx0/working_after_ep_expired/)).
- r/askSingapore — wrong PayNow / erroneous transfer recovery ([accidentally PayNow wrong number](https://www.reddit.com/r/askSingapore/comments/1bo98q5/accidentally_paynow_to_a_wrong_number/); [wrong phone number](https://www.reddit.com/r/askSingapore/comments/1u939vv/wrong_paynow_transaction_wrong_phone_number/); [received wrong PayNow — which bank](https://www.reddit.com/r/askSingapore/comments/1s08l28/wrong_paynow_transfer_received_which_bank_ask/)).
- r/askSingapore — vaping / K-pod pass cancellation myths ([caught with K-Pod hypothetical](https://www.reddit.com/r/askSingapore/comments/1q4isu7/caught_with_kpod_hypothetical/)).
- r/askSingapore — Certificate of Residence / dual-tax adjacency (tax residency threads pointing at foreign withholding needs) ([moving timing for income tax](https://www.reddit.com/r/askSingapore/comments/19b12g0/moving_to_sg_timing_for_income_tax_foreigner/); [income tax question for expats](https://www.reddit.com/r/askSingapore/comments/15iwnrp/income_tax_question_for_expats_in_singapore/)).

**Official**

- [NEA — When death occurs](https://www.nea.gov.sg/our-services/after-death/post-death-matters/when-death-occurs) + [overseas](https://www.nea.gov.sg/our-services/after-death/post-death-matters/when-death-occurs/overseas) + [ICA overseas death report](https://www.ica.gov.sg/documents/death/death_overseas) + [death extract](https://www.ica.gov.sg/documents/death/apply_extract).
- [MSF/OPG — LPA](https://www.msf.gov.sg/what-we-do/opg/lasting-power-of-attorney/what-is-a-lasting-power-of-attorney) + [MyLegacy LPA](https://mylegacy.life.gov.sg/find-a-service/lpa) + [LPA fees PDF](https://www.msf.gov.sg/docs/default-source/opg/lpa_fees_table.pdf) + [Public Guardian Fees Regs 2026](https://sso.agc.gov.sg/SL-Supp/S272-2026/Published/20260430?DocDate=20260430) + [MOH AMD](https://www.moh.gov.sg/seeking-healthcare/advance-medical-directive/).
- [MOM — Responsible retrenchment](https://www.mom.gov.sg/employment-practices/retrenchment/responsible-retrenchment) + [unpaid benefit FAQ](https://www.mom.gov.sg/faq/retrenchment/what-should-i-do-if-i-did-not-receive-retrenchment-benefit-from-my-company) + [TAMEM PDF](https://www.mom.gov.sg/-/media/mom/documents/employment-practices/guidelines/tripartite-advisory-on-managing-excess-manpower-and-responsible-retrenchment.pdf) + [cancel EP / STVP](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass).
- [MAS — E-Payments User Protection Guidelines](https://www.mas.gov.sg/regulation/guidelines/e-payments-user-protection-guidelines) + [EUPG PDF (16 Dec 2024)](https://www.mas.gov.sg/-/media/mas-media-library/regulation/guidelines/pso/e-payments-user-protection-guidelines-with-effect-from-16-dec-2024/e-payments-user-protection-guidelines-with-effect-from-16-december-2024.pdf).
- [gov.sg — Stop vaping / higher penalties](https://www.gov.sg/stopvaping-penalties/) (foreigner pass revocation / etomidate).
- [IRAS — Certificate of Residence](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/apply-for-certificate-of-residence) + [DTA claims](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/claiming-exemptions-under-Avoidance-of-Double-Taxation-Agreements-(DTAs)).

### Gaps vs Tick 1–15

Tick 1–15 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR/MediShield/CareShield/DPS, MDW, diplomatic clause/SCT, insurance/maternity/Baby Bonus, preschool, banks/CPF/credit cards/RSU, licence conversion, clubs, SIM/Singpass/scams, pets, IRAS/foreign income (thin on **Certificate of Residence / DTA**), short-stay/FWTES, MOE P1/AEIS, LTVP (parent S$12k already deep), EP renewal, healthcare/HSA/dental/vaccination, remittance, apps/PayNow (thin on **erroneous transfer recovery**), S Pass, COMPASS/FCF, Customs GST, Student’s Pass/Tuition Grant, career pivots/TADM/leave-notice/harassment/FWA, SimplyGo, aircon/mould/cockroach, SRS, haze, ABSD/HDB, STVP-between-jobs (thin on **retrenchment benefit vs advisory norms**), PEP/ONE/Tech.Pass, EntrePass, COE/car, JB, dengue, year-one finance, furnishing, condo noise/MCST, mental health, SEN, paediatrician, stay-vs-exit, ActiveSG, groceries/e-waste, hawker, dating, volunteering, camps, passport embassy, NLB/museums, shipping out, wardrobe, nightlife (thin on **vaping/TVCA pass risk**), nationality/religious/chambers/hash, SP/OEM, moonlighting, overseas remote, apostille, lost EP card, stamp duty, ROM/divorce/PPO, newborn/LOG, REP, probate (thin on **death registration / NEA / repatriation** and **LPA/AMD**), cycling, IVF, visit-pass extension, paternity/SPL, WHP/TEP, SkillsFuture adjacency. Remaining high-intent gaps matched forum heat: **death/repatriation**, **LPA/AMD**, **retrenchment benefits**, **wrong PayNow**, **vaping pass risk**, **COR/DTA**.

### Shipped this tick

**New guides**

- `content/guides/next/death-repatriation-foreigners-singapore.mdx`
- `content/guides/next/lasting-power-attorney-amd-foreigners.mdx`
- `content/guides/next/retrenchment-ep-benefits.mdx`
- `content/guides/life/vaping-tobacco-laws-foreigners.mdx`
- `content/guides/money/wrong-paynow-epayment-recovery.mdx`
- `content/guides/money/certificate-of-residence-dta.mdx`

**Upgraded guides (cross-links + adjacency + lastReviewed 2026-09-15)**

- `content/guides/next/wills-probate-cpf-nomination-singapore.mdx`
- `content/guides/next/between-jobs-stvp-singapore.mdx`
- `content/guides/next/employment-act-leave-notice-ep.mdx`
- `content/guides/life/apps-that-matter-singapore.mdx`
- `content/guides/life/emergencies-995-999-embassies.mdx`
- `content/guides/life/nightlife-social-scene.mdx`
- `content/guides/money/iras-tax-residency-filing.mdx`

**Entity depth**

- `content/entities/services/family-law-expat.json`
- `content/entities/services/intact-immigration.json`
- `content/entities/services/raffles-medical.json`
- `content/entities/neighbourhoods/holland-village.json`

### Explicitly not done

- No ads/monetization expansion.
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–15 topics beyond the death-admin, LPA/AMD, retrenchment-benefit, PayNow-recovery, vaping, and COR adjacency gaps above.

---

## Tick 15 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — workplace harassment / TAFEP / PoHA vs MOM notice myths ([wife harassed at work](https://www.reddit.com/r/askSingapore/comments/1s63ud9/wife_is_being_blatantly_harassed_at_work/); [MOM can’t help sexual harassment](https://www.reddit.com/r/askSingapore/comments/1fo0fu0/mom_cant_help_with_sexual_harassment/); [MOM and TAFEP](https://www.reddit.com/r/askSingapore/comments/1fgdzok/can_mom_and_tafep_do_something/); [should I report employer](https://www.reddit.com/r/askSingapore/comments/1hxtc95/should_i_report_my_employer/)).
- r/askSingapore — Flexible Work Arrangement requests post-1 Dec 2024 ([FWA from Dec 2024](https://www.reddit.com/r/askSingapore/comments/1h3d3u2/flexible_working_arrangements_fwas_from_1st/); [updates since Dec 2024](https://www.reddit.com/r/askSingapore/comments/1llhhz3/flexible_work_arrangement_updates_since_dec_2024/); [tried requesting FWA/WFH 2025](https://www.reddit.com/r/askSingapore/comments/1i2aqkv/anyone_tried_requesting_for_fwawfh_2025/); [FWA question](https://www.reddit.com/r/askSingapore/comments/1noyb6u/question_on_flexible_work_arrangements/); [EP WFH overseas adjacency](https://www.reddit.com/r/askSingapore/comments/1jh3phu/as_epass_holder_can_i_work_from_cheaper_countries/)).
- r/askSingapore — Work Holiday Pass / Training Employment Pass internships ([WHP job market](https://www.reddit.com/r/askSingapore/comments/1pylys7/whats_the_job_market_like_for_someone_on_a/); [apply WHP when?](https://www.reddit.com/r/askSingapore/comments/159toan/do_i_apply_for_whp_working_holiday_pass_while/); [WHP after ends](https://www.reddit.com/r/askSingapore/comments/11tk3rr/after_a_work_holiday_pass_ends_can_you_extend/); [TEP acceptable institution](https://www.reddit.com/r/askSingapore/comments/1jdqcl9/training_employment_pass_how_to_know_if_an/); [WHP eligibility cook](https://www.reddit.com/r/askSingapore/comments/1jjgsc3/am_i_cooked_if_i_dont_qualify_for_the_work/)).
- r/askSingapore — condo noise / MCST / renovation ([neighbour from hell](https://www.reddit.com/r/askSingapore/comments/1arhz6p/neighbour_from_hell_in_condo/); [can MCST help](https://www.reddit.com/r/askSingapore/comments/1fn9grf/can_condo_mcst_help_with_neighbours_issue/); [renovation noise 3 months](https://www.reddit.com/r/askSingapore/comments/1q75mhu/condo_renovation_noise_for_3_months_struggling_to/); [upstairs fights](https://www.reddit.com/r/askSingapore/comments/1gbva0t/my_upstairs_neighbour_is_a_couple_that_fight_all/); [suspected domestic abuse](https://www.reddit.com/r/askSingapore/comments/qf5jiq/not_sure_if_there_is_domestic_abuse_happening/)).
- r/askSingapore — SkillsFuture Credit vs PR subsidy myth (adjacency on after-PR checklist) ([new PR courses](https://www.reddit.com/r/askSingapore/comments/1lacle2/what_courses_should_a_new_pr_take_to_have_higher/); [SkillsFuture credits](https://www.reddit.com/r/askSingapore/comments/1mc7s1c/skillsfuture_credits_question/)).

**Official**

- [TAFEP — Seek help / report workplace harassment](https://www.tal.sg/tafep/employment-practices/workplace-harassment/seek-help-on-workplace-harassment) + [contact](https://www.tal.sg/tafep/contact-us) + [Tripartite Advisory PDF](https://www.mom.gov.sg/-/media/mom/documents/employment-practices/guidelines/tripartite-advisory-on-managing-workplace-harassment.pdf).
- [MOM — TG-FWAR](https://www.mom.gov.sg/employment-practices/good-work-practices/flexible-work-arrangements) + [PDF](https://www.mom.gov.sg/-/media/mom/documents/press-releases/2024/tripartite-guidelines-on-flexible-work-arrangement-requests.pdf) + [approve-all FAQ](https://www.mom.gov.sg/faq/flexible-work-arrangements/do-the-tripartite-guidelines-require-employers-to-approve-all-flexible-work-arrangement-requests).
- [MOM — Work Holiday Programme](https://www.mom.gov.sg/passes-and-permits/work-holiday-programme/eligibility) + [AU/NZ Work & Holiday](https://www.mom.gov.sg/passes-and-permits/work-and-holiday-visa-programme/eligibility) + [Training Employment Pass](https://www.mom.gov.sg/passes-and-permits/training-employment-pass/eligibility).
- [BCA — Prescribed strata by-laws](https://www.bca.gov.sg/publications/BMSM/BM_strata_mgt_reg.html) + [private-estate disputes](https://www1.bca.gov.sg/guidelines-and-requirements/common-issues-or-disputes-encountered-by-residents-in-private-estates/) + [NEA renovation noise routing](https://www.nea.gov.sg/our-services/pollution-control/noise-pollution/construction-noise-control/information-on-noise-from-renovation-work-in-residential-areas).
- [MSF — Abuse / NAVH](https://www.msf.gov.sg/what-we-do/break-the-silence/get-help/i-am-experiencing-abuse) + [PPO](https://familyassist.msf.gov.sg/content/making-decisions/seeking-safety/getting-help/personal-protection-order-ppo/) + [Judiciary PPO](https://www.judiciary.gov.sg/family/apply-personal-protection-order).
- [MySkillsFuture — Credit](https://www.myskillsfuture.gov.sg/content/portal/en/career-resources/career-resources/education-career-personal-development/SkillsFuture_Credit.html) + [funding for individuals](https://www.myskillsfuture.gov.sg/content/portal/en/career-resources/career-resources/education-career-personal-development/SkillsFuture_Funding.html).

### Gaps vs Tick 1–14

Tick 1–14 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR/MediShield/CareShield/DPS, MDW, diplomatic clause/SCT, insurance/maternity/Baby Bonus, preschool, banks/CPF/credit cards/RSU, licence conversion, clubs, SIM/Singpass/scams, pets, IRAS/foreign income, short-stay/FWTES, MOE P1/AEIS, LTVP, EP renewal, healthcare/HSA/dental/vaccination, remittance, apps/PayNow, S Pass, COMPASS/FCF, Customs GST, Student’s Pass/Tuition Grant, career pivots/TADM/leave-notice (thin on **harassment/TAFEP** and **FWA TG-FWAR**), SimplyGo, aircon/mould/cockroach, SRS, haze, ABSD/HDB, STVP, PEP/ONE/Tech.Pass, EntrePass, COE/car, JB, dengue, year-one finance, furnishing, condo move (thin on **noise/MCST/reno**), mental health, SEN, paediatrician, stay-vs-exit, ActiveSG, groceries/e-waste, hawker, dating, volunteering, camps, passport embassy, NLB/museums, shipping out, wardrobe, nightlife, nationality/religious/chambers/hash, SP/OEM, moonlighting, overseas remote, apostille, lost EP card, stamp duty, ROM/divorce (thin on **PPO / pass-dependency safety**), newborn/LOG, REP, probate, cycling, IVF, visit-pass extension, paternity/SPL. Remaining high-intent gaps matched forum heat: **workplace harassment**, **FWA formal requests**, **WHP/TEP**, **condo noise/MCST**, **family violence/PPO**, SkillsFuture Credit vs PR subsidy.

### Shipped this tick

**New guides**

- `content/guides/next/workplace-harassment-tafep-ep.mdx`
- `content/guides/next/flexible-work-arrangement-request.mdx`
- `content/guides/move/work-holiday-training-employment-pass.mdx`
- `content/guides/home/condo-noise-mcst-neighbours.mdx`
- `content/guides/family/family-violence-ppo-foreigners.mdx`

**Upgraded guides (depth + citations + cross-links + lastReviewed 2026-09-15)**

- `content/guides/next/employment-act-leave-notice-ep.mdx` (FWA + harassment adjacency)
- `content/guides/next/career-pivots-singapore.mdx`
- `content/guides/next/salary-dispute-tadm-mom.mdx`
- `content/guides/next/after-getting-pr-checklist.mdx` (SkillsFuture Credit vs PR subsidies)
- `content/guides/family/divorce-custody-foreigners-singapore.mdx`
- `content/guides/move/ltvp-singapore.mdx`
- `content/guides/move/dependant-pass-singapore.mdx`
- `content/guides/move/student-pass-singapore.mdx` (WHP/TEP)
- `content/guides/life/emergencies-995-999-embassies.mdx` (NAVH)
- `content/guides/home/moving-within-singapore.mdx`
- `content/guides/home/security-deposit-diplomatic-clause.mdx`

**Entity depth**

- `content/entities/services/family-law-expat.json`
- `content/entities/services/intact-immigration.json`
- `content/entities/services/era-realty.json`
- `content/entities/neighbourhoods/holland-village.json`

### Explicitly not done

- No ads/monetization expansion.
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–14 topics beyond the harassment, FWA, WHP/TEP, condo-noise, family-violence, and SkillsFuture adjacency gaps above.

---

## Tick 14 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — Baby Bonus / CDA citizenship gate for mixed-status & EP–EP households ([foreign spouse pregnant / SC baby benefits](https://www.reddit.com/r/askSingapore/comments/x14pk6/foreign_spouse_pregnant_whats_your_experience_as/); [pregnant on EP](https://www.reddit.com/r/askSingapore/comments/1js0d2p/pregnant_on_epass_need_help/); [PR parents / child citizenship](https://www.reddit.com/r/askSingapore/comments/13wmlw2/can_parents_who_are_permanent_residents_prs_in/); [CDA deposit tactics](https://www.reddit.com/r/askSingapore/comments/1ebx3r6/how_to_maximise_kidss_cda_how_much_to_deposit/); [CDC voucher adjacency](https://www.reddit.com/r/askSingapore/comments/rkkom0/who_gets_to_claim_cdc_vouchers/)).
- r/askSingapore — Employment Act annual leave / MC during notice ([MC during notice](https://www.reddit.com/r/askSingapore/comments/1r9ka54/taking_mc_during_notice_period/); [employer extend notice for MC](https://www.reddit.com/r/askSingapore/comments/1qceed0/can_my_employer_extend_my_notice_when_i_take_mc/); [annual leave first year](https://www.reddit.com/r/askSingapore/comments/1fhpup5/is_it_allowed_to_take_annual_leave_during_the/); [leave accrual](https://www.reddit.com/r/askSingapore/comments/1mdy0n7/annual_leave_entitlement_accrual/); [employer take leave away](https://www.reddit.com/r/askSingapore/comments/15qhqcq/can_an_employer_just_take_your_leave_away/)).
- r/askSingapore — MOE Tuition Grant bond / liquidated damages ([TG + work visa](https://www.reddit.com/r/askSingapore/comments/11mjkrf/moe_tuition_grant_and_work_visa/); [resign mid-bond](https://www.reddit.com/r/askSingapore/comments/14xpywp/im_a_foreigner_whos_currently_serving_moe_3_years/); [buyout](https://www.reddit.com/r/askSingapore/comments/1hb6hos/moe_tuition_grant_buyout/); [intl student TG doubts](https://www.reddit.com/r/askSingapore/comments/1okkmil/questions_about_tuition_grant_and_bond_for/); [3-year bond regrets](https://www.reddit.com/r/askSingapore/comments/1ea3k0x/questions_regarding_moe_tuition_grant_and_3year/)).
- r/askSingapore — Singpass phishing / bank WhatsApp / NRIC mule traps ([Singpass compromised](https://www.reddit.com/r/askSingapore/comments/1qn4wm0/singpass_got_compromised_what_should_i_be_worried/); [phished ID photos](https://www.reddit.com/r/askSingapore/comments/1j8liyc/did_i_just_get_scammedphished/); [NRIC to Telegram recruiters](https://www.reddit.com/r/askSingapore/comments/1ae04xt/nric_scam/); [telco identity call](https://www.reddit.com/r/askSingapore/comments/1s5y06p/identity_theftscam_advise_needed/); [report scam from overseas](https://www.reddit.com/r/askSingapore/comments/1rvt56b/reporting_scam_to_spf_from_overseas/)).
- r/askSingapore — Childhood vaccines / polyclinic fees for foreigners ([cash-pay PD + vaccines](https://www.reddit.com/r/askSingapore/comments/1e73vx8/pediatrician_recommendation_for_nonlocal_pay_via/); [foreigner medical diagnosis](https://www.reddit.com/r/askSingapore/comments/v0bgxx/where_can_foreigners_go_to_for_medical_diagnosis/); [HPV foreigner pricing](https://www.reddit.com/r/askSingapore/comments/1bayjxb/cheapest_hpv_vaccine_in_singapore/); [SC baby BCG overseas](https://www.reddit.com/r/askSingapore/comments/1jk39q9/singapore_citizen_baby_born_overseas/)).
- r/askSingapore — Ex-PR NS / EP after renunciation (adjacency on citizenship guide) ([EP for ex-PR who skipped NS](https://www.reddit.com/r/askSingapore/comments/1n6c4uw/issuing_employment_pass_to_expr_who_didnt_do_ns/); [return on WP after renounce](https://www.reddit.com/r/askSingapore/comments/1tkmy4k/returning_to_singapore_back_on_work_permit_after/); [NS after leaving at 12](https://www.reddit.com/r/askSingapore/comments/18av6o9/ns_obligations_for_former_pr_who_left_at_12/)).

**Official**

- [LifeSG — Baby Bonus Scheme](https://www.life.gov.sg/family-parenting/benefits-support/baby-bonus-scheme) + [eligibility](https://www.life.gov.sg/family-parenting/benefits-support/baby-bonus-scheme/eligibility-criteria) + [apply](https://www.life.gov.sg/services-tools/baby-bonus) + [Made For Families](https://www.madeforfamilies.gov.sg/support-measures/child-raising/financial-support/baby-bonus-scheme).
- [MOM — Annual leave](https://www.mom.gov.sg/employment-practices/leave/annual-leave/eligibility-and-entitlement) + [sick leave](https://www.mom.gov.sg/employment-practices/leave/sick-leave/eligibility-and-entitlement) + [termination with notice / MC](https://www.mom.gov.sg/employment-practices/termination-of-employment/termination-with-notice) + [Employment Act coverage](https://www.mom.gov.sg/employment-practices/employment-act/who-is-covered).
- [MOE — Tuition Grant](https://www.moe.gov.sg/financial-matters/tuition-grant-scheme) + [bond matters](https://www.moe.gov.sg/financial-matters/tuition-grant-scheme/bond-matters) + [employment types](https://www.moe.gov.sg/financial-matters/tuition-grant-scheme/bond-matters/employment/types-of-employment) + [liquidated damages](https://www.moe.gov.sg/financial-matters/tuition-grant-scheme/liquidated-damages).
- [ScamShield](https://www.scamshield.gov.sg/) + [phishing](https://www.scamshield.gov.sg/i-want-protection-from-scams/learn-to-recognise-scams/phishing-scams/) + [app setup](https://www.scamshield.gov.sg/about-scamshield/scamshield-app/set-up-scamshield-app/) + [sms.gov.sg](https://sms.gov.sg/) + [Singpass security](https://www.singpass.gov.sg/main/security/).
- [MOH — Childhood vaccinations subsidies](https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/childhood-developmental-screening-and-childhood-vaccinations/) + [NIR FAQ](https://www.nir.hpb.gov.sg/nirp/eservices/parentalfaq) + [diphtheria/measles pass docs](https://www.moh.gov.sg/newsroom/documentation-of-diphtheria-and-measles-vaccination-required-for-foreign-born-children-applying-for-long-term-immigration-passes-in-singapore/).

### Gaps vs Tick 1–13

Tick 1–13 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR/day-one MediShield, MDW, diplomatic clause/SCT, insurance/maternity (thin on **Baby Bonus/CDA citizenship gate**), preschool, banks/CPF/credit cards/RSU, licence conversion, clubs, SIM/Singpass (thin on **ScamShield / phishing**), pets, IRAS/foreign income, short-stay/FWTES, MOE P1/AEIS, LTVP, EP renewal, healthcare/HSA/dental (thin on **NIR / NCIS foreigner fees**), remittance, apps/PayNow, S Pass, COMPASS/FCF, Customs GST, Student’s Pass (thin on **Tuition Grant bond**), career pivots/TADM (thin on **Employment Act leave/notice/MC**), SimplyGo, aircon/mould/cockroach, SRS, haze, ABSD/HDB, STVP, PEP/ONE/Tech.Pass, EntrePass, COE/car, JB, dengue, year-one finance, furnishing, condo move, mental health, SEN, paediatrician, stay-vs-exit, ActiveSG, groceries/e-waste, hawker, dating, volunteering, camps, passport embassy, NLB/museums, shipping out, wardrobe, nightlife, nationality/religious/chambers/hash, SP/OEM, moonlighting, overseas remote, apostille, lost EP card, stamp duty, ROM/divorce, newborn/LOG, REP, probate, cycling, IVF, visit-pass extension, paternity/SPL. Remaining high-intent gaps matched forum heat: **Baby Bonus/CDA**, **EA leave/notice**, **MOE TG bond**, **scams/Singpass**, **childhood vaccination/NIR**, ex-PR NS adjacency.

### Shipped this tick

**New guides**

- `content/guides/family/baby-bonus-cda-mixed-status.mdx`
- `content/guides/next/employment-act-leave-notice-ep.mdx`
- `content/guides/move/moe-tuition-grant-bond.mdx`
- `content/guides/life/scams-singpass-phishing-expats.mdx`
- `content/guides/family/childhood-vaccination-foreigners.mdx`

**Upgraded guides (depth + citations + cross-links + lastReviewed 2026-09-15)**

- `content/guides/family/maternity-care-singapore.mdx`
- `content/guides/family/newborn-pass-birth-registration-singapore.mdx`
- `content/guides/family/finding-pediatrician-singapore.mdx`
- `content/guides/move/student-pass-singapore.mdx`
- `content/guides/life/apps-that-matter-singapore.mdx`
- `content/guides/life/emergencies-995-999-embassies.mdx`
- `content/guides/next/career-pivots-singapore.mdx`
- `content/guides/next/citizenship-ns-implications.mdx` (ex-PR NS / EP risk)
- `content/guides/next/between-jobs-stvp-singapore.mdx`
- `content/guides/next/salary-dispute-tadm-mom.mdx`
- `content/guides/next/after-getting-pr-checklist.mdx`

**Entity depth**

- `content/entities/services/intact-immigration.json`
- `content/entities/services/raffles-medical.json`
- `content/entities/services/telecom-setup-help.json`

**Also included prior unpushed Tick 13 editorial** already sitting in the working tree (after-PR checklist, AEIS/S-AEIS, paternity/SPL, FCF, related upgrades/entities).

### Explicitly not done

- No ads/monetization expansion.
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–13 topics beyond the Baby Bonus, leave/notice, Tuition Grant, scam, vaccination, and ex-PR NS adjacency gaps above.

---

## Tick 13 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — day-one after PR / MediShield / CareShield / DPS / CPF graded ([just got PR](https://www.reddit.com/r/askSingapore/comments/14186hk/i_just_got_my_pr_what_do_i_need_to_know/); [what happens right after](https://www.reddit.com/r/askSingapore/comments/159r6lg/what_happens_right_after_you_get_pr/); [what should I do](https://www.reddit.com/r/askSingapore/comments/1cgqumy/what_should_i_do_after_getting_pr/); [DPS / CareShield / MediShield](https://www.reddit.com/r/askSingapore/comments/14m164d/dps_careshield_life_medishield_life/); [SPR medical spending](https://www.reddit.com/r/askSingapore/comments/102150c/whats_the_proper_way_to_plan_for_medical_spending/)).
- r/askSingapore — AEIS / local vs international placement ([12k family / AEIS lottery](https://www.reddit.com/r/askSingapore/comments/1qisb1f/frenchchinese_family_considering_move_to_sg_is/); [academic global range AEIS](https://www.reddit.com/r/askSingapore/comments/1i1ssai/academic_for_our_kids_with_global_range/); [int’l → public transfer](https://www.reddit.com/r/askSingapore/comments/kg0mdd/whats_the_admission_process_for_a_transfer_from/); [EP kids subsidies / AEIS](https://www.reddit.com/r/askSingapore/comments/13hduoz/do_any_educational_subsidies_or_grants_exists_for/); [DP government education](https://www.reddit.com/r/askSingapore/comments/1jfc9e5/dependent_pass_and_government_education/)).
- r/askSingapore — paternity / shared parental leave citizenship gate ([parental leave corporates](https://www.reddit.com/r/askSingapore/comments/196mitu/parental_leave_in_corporates/); [maternity leave length](https://www.reddit.com/r/askSingapore/comments/11j20np/singapore_maternity_leave/); [SPL work pressure](https://www.reddit.com/r/askSingapore/comments/1n2y6pp/company_expecting_parent_to_work_on_shared/); [SPL split](https://www.reddit.com/r/askSingapore/comments/1rawm1s/maternitypaternityshared_parental_leave/); [3-month service](https://www.reddit.com/r/askSingapore/comments/1j8gf7d/has_anyone_able_to_claim_parental_leave_despite/)).
- r/askSingapore — Fair Consideration Framework / MyCareersFuture ([EP regulations / MCF theatre](https://www.reddit.com/r/askSingapore/comments/1dho3o0/question_for_hr_violating_mom_ep_regulations/); [MCF success rate](https://www.reddit.com/r/askSingapore/comments/1khjmr6/mycareersfuture_jobstreet_jobsdb_whats_the/); [LinkedIn → MCF](https://www.reddit.com/r/askSingapore/comments/15po633/linkedin_job_posting_directs_you_to/); [unfair hiring / ICT](https://www.reddit.com/r/askSingapore/comments/1g5w561/is_this_considered_an_unfair_hiring_practice/); [MCF salary numbers](https://www.reddit.com/r/askSingapore/comments/z8gbdq/how_true_are_the_salary_numbers_on/)).
- r/askSingapore — EP sponsorship outlook / fresh-grad COMPASS friction (adjacency) ([companies sponsoring EPs](https://www.reddit.com/r/askSingapore/comments/1t1kj56/outlook_on_companies_sponsoring_eps_in_singapore/); [securing employment as foreigner](https://www.reddit.com/r/askSingapore/comments/1sor9me/securing_employment_as_a_foreigner/)).

**Official**

- [MOH — MediShield Life](https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/medishield-life/medishield-life/) + [ISP comparison](https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/medishield-life/comparison-of-integrated-shield-plans/) + [CPF CareShield Life](https://www.cpf.gov.sg/member/healthcare-financing/careshield-life) + [DPS](https://www.cpf.gov.sg/member/account-services/providing-for-your-loved-ones/insuring-to-protect-your-dependants) + [CPF contribution rates](https://www.cpf.gov.sg/employer/employer-obligations/how-much-cpf-contributions-to-pay).
- [MOE — AEIS](https://www.moe.gov.sg/international-students/aeis) + [apply / fees](https://www.moe.gov.sg/international-students/aeis/apply) + [eligibility](https://www.moe.gov.sg/international-students/aeis/eligibility-criteria) + [S-AEIS](https://www.moe.gov.sg/international-students/s-aeis) + [SEAB AEIS](https://www.seab.gov.sg/aeis/about-aeis/).
- [MOM — Paternity leave](https://www.mom.gov.sg/employment-practices/leave/paternity-leave) + [non-citizen child FAQ](https://www.mom.gov.sg/faq/paternity-leave/my-child-is-not-a-singapore-citizen-am-i-eligible-for-paternity-leave) + [Shared parental leave](https://www.mom.gov.sg/employment-practices/leave/shared-parental-leave) + [MSF GPL portal](https://www.profamilyleave.msf.gov.sg/schemes/paternity-leave).
- [MOM — Fair Consideration Framework](https://www.mom.gov.sg/employment-practices/fair-consideration-framework) + [EP advertise fairly](https://www.mom.gov.sg/passes-and-permits/employment-pass/consider-all-candidates-fairly) + [S$22,500 exemption](https://www.mom.gov.sg/faq/fair-consideration-framework/why-are-jobs-with-fixed-monthly-salary-of-22500-and-above-exempted-from-advertising).

### Gaps vs Tick 1–12

Tick 1–12 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR (thin on **day-one MediShield/CareShield/DPS/CPF graded**), MDW, diplomatic clause/SCT, insurance/maternity (thin on **paternity/SPL citizenship gate**), preschool, banks/CPF/credit cards/RSU, licence conversion, clubs, SIM/Singpass, pets, IRAS residency/foreign income, short-stay/FWTES, MOE P1 (thin on **AEIS/S-AEIS depth**), LTVP, EP renewal, healthcare/HSA/dental, remittance, apps/PayNow, S Pass, COMPASS (thin on **FCF/MCF 14-day theatre**), Customs GST, Student’s Pass, career pivots, SimplyGo, aircon/mould/cockroach, SRS, haze, ABSD, STVP, PEP/ONE/Tech.Pass, EntrePass, COE/car, JB, dengue, year-one finance, furnishing, condo move, mental health, SEN, paediatrician, stay-vs-exit, ActiveSG, groceries/e-waste, hawker, dating, volunteering, camps, passport embassy, NLB/museums, shipping out, wardrobe, nightlife, nationality/religious/chambers/hash, SP/OEM, moonlighting, overseas remote, apostille, lost EP card, stamp duty, ROM marriage, divorce/Hague, newborn, LOG, REP, probate, cycling, IVF, TADM, HDB for PR, visit-pass extension. Remaining high-intent gaps matched forum heat: **after-PR admin stack**, **AEIS/S-AEIS**, **GPPL/SPL for non-SC children**, **FCF MyCareersFuture for EP seekers**.

### Shipped this tick

**New guides**

- `content/guides/next/after-getting-pr-checklist.mdx`
- `content/guides/family/aeis-saeis-international-students.mdx`
- `content/guides/family/paternity-shared-parental-leave-foreigners.mdx`
- `content/guides/move/fair-consideration-framework-ep.mdx`

**Upgraded guides (depth + citations + cross-links + lastReviewed 2026-09-15)**

- `content/guides/next/pr-application-strategy.mdx` (day-one deep-link)
- `content/guides/family/local-schools-for-expats.mdx` (AEIS dedicated guide)
- `content/guides/family/maternity-care-singapore.mdx` (paternity/SPL adjacency)
- `content/guides/money/health-insurance-expat.mdx` (PR MediShield flip)
- `content/guides/money/cpf-and-foreigners.mdx` (graded rates + DPS)
- `content/guides/move/employment-pass-singapore.mdx` (FCF)
- `content/guides/move/compass-framework-explained.mdx` (FCF deep-link)
- `content/guides/next/career-pivots-singapore.mdx` (FCF related)

**Entity depth**

- `content/entities/services/aia-singapore.json`
- `content/entities/services/prudential-singapore.json`
- `content/entities/services/intact-immigration.json`
- `content/entities/services/the-tutors.json`

### Explicitly not done

- No ads/monetization expansion (existing insurance `sponsorSlot` / AIA featured flags left as-is).
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–12 topics beyond the after-PR, AEIS, paternity/SPL, and FCF adjacency gaps above.

---

## Tick 12 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — divorce / custody / Hague ([foreign spouse kids](https://www.reddit.com/r/askSingapore/comments/x6dksp/anybody_divorced_a_foreign_spouse_and_share_kids/); [PR spouse young kid](https://www.reddit.com/r/askSingapore/comments/1m62us2/divorce_question_with_young_kid_and_pr_spouse/); [separated parents](https://www.reddit.com/r/askSingapore/comments/1axx4ew/divorcedseparated_parents_of_young_kids_in_sg/); [LTVP take baby](https://www.reddit.com/r/askSingapore/comments/1k7hpf3/ltvp_wife_threatens_to_take_baby_away/); [kid retained overseas](https://www.reddit.com/r/askSingapore/comments/1ef6yyu/wife_and_i_brought_kid_overseas/)).
- r/askSingapore — IVF / fertility costs & subsidies ([IVF options cost](https://www.reddit.com/r/askSingapore/comments/1rzjjfj/couples_who_gone_through_ivf_in_singapore_what/); [public IVF](https://www.reddit.com/r/askSingapore/comments/1p02anc/public_ivf_options_in_singapore/); [trying after 38](https://www.reddit.com/r/askSingapore/comments/1ewu432/women_who_have_are_trying_for_kids_after_38_in/); [KKH fertility](https://www.reddit.com/r/askSingapore/comments/1rqlga7/fertility_treatments_kkh_advice_needed/); [pregnant on EP](https://www.reddit.com/r/askSingapore/comments/1js0d2p/pregnant_on_epass_need_help/)).
- r/askSingapore — TADM / unpaid salary / levy kickbacks / false declared pay ([partial salary TADM](https://www.reddit.com/r/askSingapore/comments/yvt2e9/my_employer_has_only_paid_a_partial_salary_and_is/); [paid less than WP](https://www.reddit.com/r/askSingapore/comments/1of0q9q/need_legal_advice_getting_paid_less_than_whats/); [levy payback](https://www.reddit.com/r/askSingapore/comments/1gv1j23/paying_employer_back_for_foreign_worker_levy/)).
- r/askSingapore — HDB for PR / SC + foreign spouse ([PR buy](https://www.reddit.com/r/askSingapore/comments/161qs6l/buying_a_property_as_a_pr/); [HDB PR spouse](https://www.reddit.com/r/askSingapore/comments/1m4nbg2/hdb_with_pr_spouse_on_hdb_matters/); [6-month pass wording](https://www.reddit.com/r/askSingapore/comments/19ejcns/how_would_you_interpret_this_eligibility/); [foreign spouse scheme](https://www.reddit.com/r/askSingapore/comments/1s25vcl/foreign_spouse_scheme_for_resale/); [SC-NONSG resale](https://www.reddit.com/r/askSingapore/comments/168crqk/advice_needed_buying_a_resale_flat_in_sg_as/)).
- r/askSingapore — visit pass extension / no overstay / no JB visa run ([extend while waiting Student’s Pass](https://www.reddit.com/r/askSingapore/comments/1i794be/suggestion_on_visit_pass_extension/); [helper visit extend](https://www.reddit.com/r/askSingapore/comments/1pc64g3/how_to_extend_visa_for_former_helper_who_is/); [beyond 30 days waiting EP](https://www.reddit.com/r/askSingapore/comments/1g69073/staying_in_singapore_beyond_30_days_while_waiting/)).
- r/askSingapore — maternity leave 12 vs 16 / post-leave retrenchment ([maternity leave length](https://www.reddit.com/r/askSingapore/comments/11j20np/singapore_maternity_leave/); [laid off after maternity](https://www.reddit.com/r/askSingapore/comments/1r8sgrf/hr_said_wife_will_be_potentially_laid_off_when/)).

**Official**

- [Judiciary — Divorce requirements](https://www.judiciary.gov.sg/family/understand-requirements-getting-divorce) + [Divorce guide PDF](https://www.judiciary.gov.sg/docs/default-source/family-docs/divorce_guide_english.pdf) + [International child abduction](https://www.judiciary.gov.sg/family/international-child-abduction) + [ICAA application](https://www.judiciary.gov.sg/family/file-international-child-abduction-application).
- [MOH — Marriage & Parenthood / ACP co-funding](https://www.moh.gov.sg/managing-expenses/schemes-and-subsidies/marriage-and-parenthood-schemes/) + [IVF co-funding response](https://www.moh.gov.sg/newsroom/response-to-adjournment-motion-on-providing-more-help-for-those-undergoing-ivf/).
- [MOM — TADM disputes](https://www.mom.gov.sg/employment-practices/managing-employment-disputes) + [unpaid salary FAQ](https://www.mom.gov.sg/faq/salary/my-employer-hasn-t-paid-my-salary-or-has-made-an-unauthorised-deduction-what-can-i-do) + [levy must not be passed on](https://www.mom.gov.sg/faq/levy/can-employers-pass-on-the-foreign-worker-levy-costs--to-their-foreign-workers) + [salary deductions](https://www.mom.gov.sg/employment-practices/salary/salary-deductions) + [EFMA](https://www.mom.gov.sg/legislation/employment-of-foreign-manpower-act).
- [HDB — Couples & families](https://www.hdb.gov.sg/buying-a-flat/flat-grant-and-loan-eligibility/couples-and-families) + [HFE letter](https://www.hdb.gov.sg/residential/buying-a-flat/understanding-your-eligibility-and-housing-loan-options/application-for-an-hdb-flat-eligibility-hfe-letter) + [resale T&Cs](https://www.hdb.gov.sg/cs/infoweb/e-resale/resale-purchase-of-an-hdb-resale-flat) + [EIP/SPR quota](https://www.hdb.gov.sg/residential/buying-a-flat/buying-procedure-for-resale-flats/plan-source-and-contract/planning-considerations/eip-spr-quota).
- [ICA — Extend short stay](https://www.ica.gov.sg/enter-depart/extend_short_stay) + [MOM — Maternity leave eligibility](https://www.mom.gov.sg/employment-practices/leave/maternity-leave/eligibility-and-entitlement).

### Gaps vs Tick 1–11

Tick 1–11 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR (thin on **HDB after PR / non-resident spouse**), MDW, diplomatic clause/SCT, insurance/maternity (thin on **12 vs 16 leave** + **IVF co-funding gate**), preschool, banks/CPF/credit cards/RSU, licence conversion, clubs, SIM/Singpass, pets, IRAS residency/foreign income, short-stay/FWTES (thin on **ICA visit-pass extension vs MOM cancel STVP**), MOE P1, LTVP, EP renewal, healthcare/HSA/dental, remittance, apps/PayNow, S Pass, COMPASS, Customs GST, Student’s Pass, career pivots (thin on **TADM / levy kickbacks**), SimplyGo, aircon/mould/cockroach, SRS, haze, ABSD (thin on **HDB SPR path**), STVP-between-jobs, PEP/ONE/Tech.Pass, EntrePass, COE/car, JB, dengue, year-one finance, furnishing, condo move, mental health, SEN, paediatrician, stay-vs-exit, ActiveSG, groceries/e-waste, hawker, dating, volunteering, camps, passport embassy, NLB/museums, shipping out, wardrobe, nightlife, nationality/religious/chambers/hash, SP/OEM, moonlighting, overseas remote, apostille, lost EP card, stamp duty, ROM marriage (thin on **divorce/Hague**), newborn, LOG, REP, probate, cycling. Remaining high-intent gaps matched forum heat: **divorce jurisdiction + Hague/ICAA**, **IVF SC co-funding gate**, **TADM salary / levy / false declaration**, **HDB 3-year SPR + SC/foreign spouse**, **ICA visit-pass extension / no overstay**, maternity leave depth.

### Shipped this tick

**New guides**

- `content/guides/family/divorce-custody-foreigners-singapore.mdx`
- `content/guides/family/ivf-fertility-foreigners-singapore.mdx`
- `content/guides/next/salary-dispute-tadm-mom.mdx`
- `content/guides/home/hdb-for-pr-and-mixed-status.mdx`
- `content/guides/move/short-term-visit-pass-extension.mdx`

**Upgraded guides (depth + citations + lastReviewed 2026-09-15)**

- `content/guides/family/maternity-care-singapore.mdx` (12 vs 16 leave + TADM/IVF cross-links)
- `content/guides/family/getting-married-foreigners-singapore.mdx` (divorce cross-link)
- `content/guides/home/buying-property-foreigner-absd.mdx` (HDB deep-link)
- `content/guides/home/short-term-vs-long-term-rental.mdx` (visit-pass extension)
- `content/guides/next/career-pivots-singapore.mdx` (TADM adjacency)
- `content/guides/next/between-jobs-stvp-singapore.mdx` (disambiguate ICA vs MOM STVP)
- `content/guides/next/pr-application-strategy.mdx` (HDB after PR)

**Entity depth**

- `content/entities/services/family-law-expat.json`
- `content/entities/services/intact-immigration.json`
- `content/entities/services/era-realty.json`
- `content/entities/services/raffles-medical.json`

### Explicitly not done

- No ads/monetization expansion.
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–11 topics beyond the divorce, IVF, TADM, HDB, visit-pass, and maternity-leave adjacency gaps above.

---

## Tick 11 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — ROM marriage for foreigners / two-foreigner fees / witnesses ([getting married as foreigner](https://www.reddit.com/r/askSingapore/comments/150w2rz/getting_married_as_a_foreigner_in_singapore/); [two foreigners](https://www.reddit.com/r/askSingapore/comments/1oc1hpo/two_foreigners_getting_married_in_singapore/); [foreigner marrying SC](https://www.reddit.com/r/askSingapore/comments/1fvqv3c/foreigner_marrying_to_singaporean/); [EU couple docs later](https://www.reddit.com/r/askSingapore/comments/1q3xyp9/getting_married_in_singapore_as_two/); [ROM witnesses](https://www.reddit.com/r/askSingapore/comments/1bsosop/soleminisation_at_rom/)).
- r/askSingapore — newborn LifeSG / DP salary gate / Special Pass clock ([Malaysian newborn](https://www.reddit.com/r/askSingapore/comments/1b0icqt/questions_regarding_malaysian_newborn_baby/); [NC birth cost](https://www.reddit.com/r/askSingapore/comments/1k5uahv/whats_the_procedure_cost_of_giving_birth_in/); [pregnant move](https://www.reddit.com/r/askSingapore/comments/1p476gs/moving_to_singapore_potentially_pregnant_advise_me/); [DP for baby](https://www.reddit.com/r/askSingapore/comments/17hkidm/dependent_pass/); [DP salary dilemma](https://www.reddit.com/r/askSingapore/comments/13dh57p/dependants_pass_dilemma/)).
- r/askSingapore — hospital LOG / admission deposits ([AIA LOG](https://www.reddit.com/r/askSingapore/comments/1t0u1tk/aia_corporate_insurance_log_procedure/); [confused LOG](https://www.reddit.com/r/askSingapore/comments/1q67qw4/confused_about_letter_of_guarantee_from_my_insurer/); [dispute hospital charges](https://www.reddit.com/r/askSingapore/comments/15laxa9/anybody_have_any_experience_disputing_hospital/)).
- r/askSingapore — REP / maintain PR overseas / CPF after renounce ([REP expires](https://www.reddit.com/r/askSingapore/comments/175ttbi/immigration_permanent_resident_pr_if_reentry/); [maintain PR abroad](https://www.reddit.com/r/askSingapore/comments/1qodrxz/how_difficult_is_it_to_maintain_singapore/); [UK relocate keep PR](https://www.reddit.com/r/askSingapore/comments/1qz9gyi/will_be_relocating_to_uk_but_i_dont_want_to_lose/); [give up PR](https://www.reddit.com/r/askSingapore/comments/1k4yszc/giving_up_singapore_permanent_residency_and/); [CPF to Aussie super](https://www.reddit.com/r/askSingapore/comments/1jfnm56/transferring_singapore_cpf_to_australian/)).
- r/askSingapore — probate / foreigner death / CPF nomination ([grant of probate foreigner](https://www.reddit.com/r/askSingapore/comments/lr8iou/process_for_grant_of_probate_when_a_foreigner/); [what happens when foreigner dies](https://www.reddit.com/r/askSingapore/comments/1qp1dg4/what_happens_when_a_foreigner_dies_in_sg/); [late mother’s bank](https://www.reddit.com/r/askSingapore/comments/1g17ky0/need_help_accessing_late_mothers_bank_account/); [CPF nomination](https://www.reddit.com/r/askSingapore/comments/12ffjw4/cpf_nomination_before_death/)).
- r/askSingapore — cycling / PAB rules ([cycling as foreigner](https://www.reddit.com/r/askSingapore/comments/1dugti9/cycling_as_a_foreigner/); [tourist cycling](https://www.reddit.com/r/askSingapore/comments/1d76vnc/cycling_in_singapore_as_a_tourist_what_are/); [why e-bikes unpopular](https://www.reddit.com/r/askSingapore/comments/17l6pse/why_arent_ebikes_popular_in_sg/)).

**Official**

- [Marriage.gov.sg — Overview of marriage process PDF](https://www.marriage.gov.sg/Overview_of_Marriage_Process_Oct_2024.pdf) + [Women’s Charter notice/licence](https://sso.agc.gov.sg/Act/WC1961?ProvIds=P13-) + [MOM WP marriage regulations](https://www.mom.gov.sg/faq/work-permit-for-foreign-worker/what-are-the-marriage-and-pregnancy-regulations-for-wp-holders-in-singapore).
- [ICA — Birth registration](https://www.ica.gov.sg/documents/birth/birth_registration) + [LifeSG birth](https://www.life.gov.sg/services-tools/birth-registration) + [MOM DP for newborn](https://www.mom.gov.sg/passes-and-permits/dependants-pass/getting-a-pass-for-a-newborn).
- [ICA — Apply/renew REP](https://www.ica.gov.sg/reside/PR/apply-REP) + [REP conditions](https://www.ica.gov.sg/PR/see-more/entry-permit-and-re-entry-permit-conditions-for-singapore-permanent-residents) + [1 Dec 2025 REP FAQ PDF](https://www.ica.gov.sg/docs/default-source/ica/files/faqs_revisions-to-permanent-resident-re-entry-permit-application-process-from-1-december-2025.pdf) + [CPF closing account](https://www.cpf.gov.sg/member/account-services/cpf-asset-management/on-leaving-singapore).
- [Judiciary — Apply for probate](https://www.judiciary.gov.sg/family/apply-for-probate) + [FJC probate practice directions](https://epd2024-familyjusticecourts.judiciary.gov.sg/part-24-non-contentious-probate-proceedings) + [CPF nomination](https://www.cpf.gov.sg/member/account-services/providing-for-your-loved-ones/making-a-cpf-nomination).
- [LTA — Active Mobility rules](https://www.lta.gov.sg/content/ltagov/en/getting_around/active_mobility/rules_and_public_education/rules_and_code_of_conduct.html) + [OneMotoring PAB](https://onemotoring.lta.gov.sg/content/onemotoring/home/buying/vehicle-types-and-registrations/active-mobility-devices/PAB.html).

### Gaps vs Tick 1–10

Tick 1–10 covered packages, DP LOC (thin on **newborn Special Pass / LifeSG**), waitlists, heartland, leaving/IR21, PR (thin on **REP + 1 Dec 2025 180-day rule**), MDW, diplomatic clause/SCT, insurance/maternity (thin on **LOG deposits** + **birth-registration clock**), preschool, banks/CPF/credit cards/RSU, licence conversion, clubs, SIM/Singpass, pets, IRAS residency/foreign income, short-stay/FWTES, MOE P1, LTVP, EP renewal, healthcare/HSA/dental, remittance, apps/PayNow, S Pass, COMPASS, Customs GST, Student’s Pass, career pivots, SimplyGo, aircon/mould/cockroach, SRS, haze, ABSD, STVP, PEP/ONE/Tech.Pass, EntrePass, COE/car, JB, dengue, year-one finance, furnishing, condo move, mental health, SEN, paediatrician, stay-vs-exit, ActiveSG, groceries/e-waste, hawker, dating, volunteering, camps, passport embassy, NLB/museums, shipping out, wardrobe, nightlife, nationality/religious/chambers/hash, SP/OEM, moonlighting, overseas remote, apostille, lost EP card, stamp duty. Remaining high-intent gaps matched forum heat: **ROM 31-day / both-foreigner fee / WP approval**, **newborn 42-day + DP**, **hospital LOG**, **REP overseas + CPF renounce cash-out**, **Singapore probate vs foreign grant + CPF nomination**, **bicycle/PAB Active Mobility**.

### Shipped this tick

**New guides**

- `content/guides/family/getting-married-foreigners-singapore.mdx`
- `content/guides/family/newborn-pass-birth-registration-singapore.mdx`
- `content/guides/next/re-entry-permit-pr-overseas.mdx`
- `content/guides/next/wills-probate-cpf-nomination-singapore.mdx`
- `content/guides/life/cycling-active-mobility-singapore.mdx`

**Upgraded guides (depth + citations + lastReviewed 2026-09-15)**

- `content/guides/family/maternity-care-singapore.mdx` (newborn clock cross-link)
- `content/guides/family/healthcare-gp-hospital.mdx` (LOG / deposits)
- `content/guides/money/health-insurance-expat.mdx` (LOG audit question)
- `content/guides/move/dependant-pass-singapore.mdx` (newborn section)
- `content/guides/next/pr-application-strategy.mdx` (REP + nomination)
- `content/guides/money/cpf-and-foreigners.mdx` (nomination / renounce cash-out)
- `content/guides/life/mrt-bus-transport-literacy.mdx` (Active Mobility cross-link)

**Entity depth**

- `content/entities/services/family-law-expat.json`
- `content/entities/services/raffles-medical.json`
- `content/entities/services/parkway-shenton.json`

**Also included prior unpushed Tick 8–10 editorial** already sitting in the working tree (HSA meds, credit cards, lost EP card, RSU/ESOP, Tech.Pass, side income, apostille, dental, SCT, arts/culture, shipping-out, wardrobe, nightlife, nationality/religious/chambers/hash, utilities SP/OEM, related entities).

### Explicitly not done

- No ads/monetization expansion (existing insurance `sponsorSlot` left as-is).
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–10 topics beyond the marriage, newborn, LOG, REP, probate, and cycling adjacency gaps above.

---

## Tick 10 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — HSA personal medication / ADHD & anxiety controlled drugs ([doctor’s note vs approval](https://www.reddit.com/r/askSingapore/comments/1qfdg7w/doctors_note_vs_prior_approval_on_medication_and/); [bring personal meds](https://www.reddit.com/r/askSingapore/comments/1j4n1cs/bringing_in_personal_medication_to_singapore/); [late HSA form](https://www.reddit.com/r/askSingapore/comments/1q326zx/i_didnt_know_i_was_supposed_to_get_approval_to/); [ADHD/anxiety declare](https://www.reddit.com/r/askSingapore/comments/1gdx6wr/do_i_need_to_declare_my_adhd_anxiety_medication/); [OTC packing](https://www.reddit.com/r/askSingapore/comments/x187ux/how_to_carry_otc_medicine_into_singapore/)).
- r/askSingapore — foreigner credit cards / payslip timing ([credit card for expat](https://www.reddit.com/r/askSingapore/comments/1d7x88f/credit_card_for_expat/); [without payslip](https://www.reddit.com/r/askSingapore/comments/1h9ny13/anybody_tried_applying_credit_card_without_payslip/); [best CC foreign workers](https://www.reddit.com/r/askSingapore/comments/zhtg3o/best_credit_card_for_foreign_workers/); [freelancer CC](https://www.reddit.com/r/askSingapore/comments/1nng3vm/freelancer_credit_card_recommendation/)).
- r/askSingapore — lost EP card / travel without plastic ([lost EP in Malaysia](https://www.reddit.com/r/askSingapore/comments/12g8yk6/lost_my_employment_pass_ep_in_malaysia_on_a/); [forgot EP overseas](https://www.reddit.com/r/askSingapore/comments/yfm0ut/forgot_ep_card_at_home_how_do_i_travel_back/)).
- r/askSingapore — rental stamp duty myths / illegal sublets ([stamp duty necessary?](https://www.reddit.com/r/askSingapore/comments/lsz072/is_rental_stamp_duty_necessary_and_why_would_a/); [landed studio no stamp](https://www.reddit.com/r/askSingapore/comments/1jqaiaa/landed_property_rent_studio_apartments/); [room stamp duty](https://www.reddit.com/r/askSingapore/comments/1rc57xu/first_time_renting_as_a_singaporean/); [scam landlord](https://www.reddit.com/r/askSingapore/comments/15xtoq2/got_scammed_by_landlord_during_trip_to_sg_what_now/)).
- r/askSingapore — RSU / ESOP tax + exit ([tax on RSUs](https://www.reddit.com/r/askSingapore/comments/oh9u7v/do_i_have_to_pay_income_tax_on_rsus_as_part_of_my/); [ESOP no local entity](https://www.reddit.com/r/askSingapore/comments/1it3g96/esop_tax_filing_but_my_company_does_not_have_a/); [ESOP scheme](https://www.reddit.com/r/askSingapore/comments/xmqg1o/employee_share_option_scheme/)).
- r/askSingapore — mould / dehumidifier / deposit fights ([how to use dehumidifier](https://www.reddit.com/r/askSingapore/comments/1fnlcbc/how_to_use_a_dehumidifier/); [humidity mould health](https://www.reddit.com/r/askSingapore/comments/1olgjew/humidity_causing_mould_worried_about_health_issues/); [70% RH enough?](https://www.reddit.com/r/askSingapore/comments/1q648l0/aircon_at_2628c_drops_my_room_humidity_to_70_good/); [apartment mould liability](https://www.reddit.com/r/askSingapore/comments/11iytkz/apartment_mold_owner_or_tenant/); [aircon mould tenant vs LL](https://www.reddit.com/r/askSingapore/comments/1coj9oi/mold_in_aircon_tenant_or_landlord_responsible/)).

**Official**

- [HSA — Travelling with personal medications](https://www.hsa.gov.sg/travelling-with-medication-and-medical-devices/personal-medications/) + [Check requirements](https://www.hsa.gov.sg/personal-medication/check-requirements) + [Apply approval](https://www.hsa.gov.sg/personal-medication/apply-approval).
- [DBS — Card eligibility](https://www.dbs.com.sg/personal/support/card-application-eligibility.html) + [checklist](https://www.dbs.com.sg/personal/cards/cards-application-checklist.page) + [documents](https://www.dbs.com.sg/personal/support/card-application-documents.html).
- [MOM — Replace EP card](https://www.mom.gov.sg/passes-and-permits/employment-pass/replace-a-pass-card) + [SGWorkPass](https://www.mom.gov.sg/eservices/sgworkpass).
- [IRAS — Stamp duty renting](https://www.iras.gov.sg/taxes/stamp-duty/for-property/renting-a-property) + [Who should pay](https://www.iras.gov.sg/taxes/stamp-duty/for-property/basics-of-stamp-duty-for-property/who-should-pay-stamp-duty).
- [IRAS — Stock options / share plans](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/what-is-taxable-what-is-not/employment-income/gains-from-the-exercise-of-stock-options) + [ESOP/ESOW e-Tax Guide PDF](https://www.iras.gov.sg/docs/default-source/e-tax/etaxguides_iit_esop_2026-01-30.pdf).

### Gaps vs Tick 1–9

Tick 1–9 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR, MDW, diplomatic clause/SCT, insurance/maternity, preschool, banks/CPF (thin on **credit cards**), licence conversion, clubs, SIM/Singpass, pets, IRAS residency/foreign income (thin on **RSU/ESOP**), short-stay/FWTES, MOE P1, LTVP, EP renewal, healthcare (thin on **HSA med import**), remittance, apps/PayNow, S Pass, COMPASS, Customs GST, Student’s Pass, career pivots, SimplyGo, aircon/cockroach (thin on **mould RH tactics**), SRS, haze, ABSD, STVP, PEP/ONE/Tech.Pass, EntrePass, COE/car, JB, dengue, year-one finance, furnishing, condo move, mental health, SEN, paediatrician, stay-vs-exit, ActiveSG, groceries/e-waste, hawker, dating, volunteering, camps, passport embassy, NLB/museums, shipping out, wardrobe, nightlife, nationality/religious/chambers/hash, SP/OEM, moonlighting, overseas remote, apostille, dental. Remaining high-intent gaps matched forum heat: **HSA controlled meds**, **foreigner CC S$45k + payslips**, **lost EP card / SGWorkPass**, **lease stamp duty 0.4%**, **RSU vest tax + deemed exercise**, mould/dehumidifier deposit fights.

### Shipped this tick

**New guides**

- `content/guides/move/bringing-medication-singapore-hsa.mdx`
- `content/guides/money/credit-cards-foreigners-singapore.mdx`
- `content/guides/next/lost-replace-work-pass-card.mdx`
- `content/guides/money/rsu-esop-tax-singapore.mdx`

**Upgraded guides (depth + citations + lastReviewed 2026-09-15)**

- `content/guides/home/renting-process-loi-ta-deposits.mdx` (IRAS lease duty)
- `content/guides/home/furnishing-rental-flat.mdx` (mould / dehumidifier)
- `content/guides/money/opening-bank-account-expat.mdx` / `salary-package-decoding.mdx`
- `content/guides/family/healthcare-gp-hospital.mdx`
- `content/guides/next/tax-clearance-when-leaving.mdx` / `renewing-life-admin-annually.mdx`
- `content/guides/move/relocation-checklist-7-30-90.mdx`

**Entity depth**

- `content/entities/services/raffles-medical.json`
- `content/entities/services/parkway-shenton.json`
- `content/entities/services/intact-immigration.json`
- `content/entities/services/era-realty.json`

**Also included prior unpushed Tick 8–9 editorial** already sitting in the working tree (Tech.Pass, side income, apostille, dental, SCT, arts/culture, shipping-out, wardrobe, nightlife, nationality/religious/chambers/hash, utilities SP/OEM, related entities).

### Explicitly not done

- No ads/monetization expansion (existing renting `sponsorSlot` left as-is).
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–9 topics beyond the stamp-duty, mould, equity-tax, medication, and pass-card adjacency gaps above.

---

## Tick 9 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — EP/S Pass side income / content creation / moonlighting ([content creation](https://www.reddit.com/r/askSingapore/comments/1p4cjd6/if_an_work_pass_holder_made_income_from_content/); [freelance passes](https://www.reddit.com/r/askSingapore/comments/1niib2q/how_does_the_foreigner_work_pass_work_for/)).
- r/askSingapore — DP/LTVP remote work for overseas employer ([EP required?](https://www.reddit.com/r/askSingapore/comments/1f08mi2/is_ep_required_if_i_work_remote_for_nonsg_company/); [LTVP remote US job](https://www.reddit.com/r/askSingapore/comments/1hdenuw/working_remotely_for_foreign_employer_on_longterm/)).
- r/askSingapore — Tech.Pass vs PEP ([job hunt + Tech.Pass](https://www.reddit.com/r/askSingapore/comments/n5ew8q/requirements_for_job_hunting_in_singapore_and/)).
- r/askSingapore — notary / apostille / LTVP translations ([apostille where?](https://www.reddit.com/r/askSingapore/comments/1je8k4t/anyone_knows_a_place_around_to_have_documents/); [US form notarised](https://www.reddit.com/r/askSingapore/comments/1qgzuba/need_to_get_a_usa_institutions_form_notarized/); [LTVP translation cost](https://www.reddit.com/r/askSingapore/comments/1rff1fu/translation_of_documents_for_ltvp/); [common-law LTVP](https://www.reddit.com/r/askSingapore/comments/1q1xg98/long_term_visit_pass_for_partner_to_someone_with/); [common-law affidavit](https://www.reddit.com/r/askSingapore/comments/w7m73e/long_term_visit_pass_common_law_spouse_affidavit/)).
- r/askSingapore — SCT deposit fights / overseas landlords ([foreign landlord SCT](https://www.reddit.com/r/askSingapore/comments/1cgvud1/small_claim_deposit_return_against_foreign/); [deposit from overseas](https://www.reddit.com/r/askSingapore/comments/1n36t6r/landlord_refusing_to_return_deposit_what_can_i_do/); [SCT free advice](https://www.reddit.com/r/askSingapore/comments/1rdzwbb/small_claims_tribunal_free_legal_advice/); [serving overseas landlord](https://www.reddit.com/r/askSingapore/comments/1oj0esy/followup_serving_a_landlord_who_lives_overseas/)).
- r/askSingapore — dental / Medisave myths ([private pay dentist](https://www.reddit.com/r/askSingapore/comments/1q4udi9/how_do_you_see_a_dentist_doctor_hospital_if_it_is/); [wisdom tooth foreigner](https://www.reddit.com/r/askSingapore/comments/1on4gnd/wisdom_tooth_extraction_as_a_foreigner/); [cheaper implants](https://www.reddit.com/r/askSingapore/comments/1taupd2/where_can_foreign_workers_get_cheaper_dental/)).
- r/askSingapore — cockroach / chute fogging ([cockroach problems](https://www.reddit.com/r/askSingapore/comments/1rbjoc0/do_all_singaporeans_face_cockroach_problems_at/)).

**Official**

- [MOM — Work pass multiple jobs FAQ](https://www.mom.gov.sg/faq/work-pass-general/can-a-work-pass-holder-work-in-multiple-jobs) + [DP overseas employer FAQ](https://www.mom.gov.sg/faq/dependants-pass/do-i-need-a-work-pass-if-i-am-self-employed-or-working-for-an-overseas-based-employer) + [LTVP documents required](https://www.mom.gov.sg/passes-and-permits/long-term-visit-pass/documents-required).
- [EDB — Tech.Pass](https://www.edb.gov.sg/en/incentives-and-programmes/incentives-and-facilitation-programmes/tech-pass.html) + [apply](https://www.edb.gov.sg/en/incentives-and-programmes/incentives-and-facilitation-programmes/tech-pass/apply-for-a-tech-pass.html) + [application/renewal sunset](https://www.edb.gov.sg/en/how-we-help/incentives-and-facilitation/tech-pass/application-and-renewal) + [MOM foreign workforce factsheet 3 Mar 2026](https://www.mom.gov.sg/-/media/mom/documents/press-releases/2026/factsheet-on-foreign-workforce-policies-03032026.pdf) + [5-year tech EP](https://www.mom.gov.sg/passes-and-permits/employment-pass/experienced-tech-professionals-with-skills-in-shortage).
- [SAL — Legalisation](https://legalisation.sal.sg/LegalisationInfo) + [FAQ](https://legalisation.sal.sg/Faq) + [Authentication](https://legalisation.sal.sg/AuthenticationInfo) + [Notary directory](https://legalisation.sal.sg/Directory).
- [Judiciary — SCT eligibility](https://www.judiciary.gov.sg/civil/cases-eligible-small-claim) + [Guide to small claims PDF](https://www.judiciary.gov.sg/docs/default-source/civil-docs/sct_guide_to_small_claims.pdf).
- [MOH — Dental treatment costs / fee benchmarks](https://www.moh.gov.sg/managing-expenses/bills-and-fee-benchmarks/guide-to-dental-treatment-costs/).

### Gaps vs Tick 1–8

Tick 1–8 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR, MDW, diplomatic clause (thin on **SCT jurisdiction**), insurance/maternity, preschool, banks/CPF, licence conversion, clubs, SIM/Singpass, pets, IRAS residency/foreign income, short-stay/FWTES, MOE P1, LTVP/parent S$12k (thin on **common-law affidavit docs**), EP renewal, healthcare (thin on **dental/Medisave myths**), remittance, apps/PayNow, S Pass, COMPASS, Customs GST inbound, Student’s Pass, career pivots, SimplyGo, aircon (thin on **cockroach chute tactics**), SRS, haze, ABSD, STVP, PEP/ONE Pass (no **Tech.Pass**), EntrePass, COE/car, JB, dengue, year-one finance, furnishing, condo move, mental health, SEN, paediatrician, stay-vs-exit, ActiveSG, groceries/e-waste, hawker cashless, dating/Bumble BFF, volunteering, holiday camps, passport embassy admin, NLB/museums, shipping out, wardrobe, nightlife, nationality groups, religious communities, chambers, hash, SP/OEM. Remaining high-intent gaps matched forum heat: **EP moonlighting ban**, **DP/LTVP overseas remote**, **Tech.Pass + 2027 sunset**, **SAL apostille / notary**, **common-law LTVP evidence**, **SCT 2-year / overseas landlord limits**, **dental fee benchmarks**, cockroach ops.

### Shipped this tick

**New guides**

- `content/guides/move/tech-pass-singapore.mdx`
- `content/guides/move/side-income-freelance-work-pass.mdx`
- `content/guides/next/document-apostille-notary-singapore.mdx`
- `content/guides/family/dental-care-foreigners-singapore.mdx`

**Upgraded guides (depth + citations + lastReviewed 2026-09-15)**

- `content/guides/home/security-deposit-diplomatic-clause.mdx` (SCT jurisdiction)
- `content/guides/move/ltvp-singapore.mdx` (common-law paperwork)
- `content/guides/move/trailing-partner-career-singapore.mdx` (overseas remote FAQ)
- `content/guides/home/aircon-pest-renewals.mdx` (cockroach chute tactics)
- `content/guides/family/healthcare-gp-hospital.mdx` (dental cross-link)
- `content/guides/move/personalised-employment-pass-pep.mdx` / `one-pass-singapore.mdx` (Tech.Pass cross-links)
- `content/guides/move/relocation-checklist-7-30-90.mdx`

**Entity depth**

- `content/entities/services/family-law-expat.json`
- `content/entities/services/intact-immigration.json`
- `content/entities/services/raffles-medical.json`
- `content/entities/services/smg.json`
- `content/entities/services/the-tutors.json`
- `content/entities/neighbourhoods/holland-village.json`

**Also included prior unpushed Tick 8 editorial** already sitting in the working tree (arts/culture, shipping-out, wardrobe, nightlife, nationality/religious/chambers/hash, utilities SP/OEM, related club/neighbourhood/service entities).

### Explicitly not done

- No ads/monetization expansion.
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–8 topics beyond the SCT, common-law LTVP, overseas-remote, cockroach, and Tech.Pass adjacency gaps above.

---

## Tick 8 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — NLB / library for foreigners ([membership worth it?](https://www.reddit.com/r/askSingapore/comments/1hpibo6/is_it_worth_getting_a_library_membership_in/); [foreigners using library](https://www.reddit.com/r/askSingapore/comments/1ttfh63/questions_for_foreigners_using_the_public_library/); [visitor work spots](https://www.reddit.com/r/askSingapore/comments/1hhpm5s/international_visitor_places_to_get_some_work/); [libraries free entry](https://www.reddit.com/r/askSingapore/comments/1923opt/any_public_libraries_open_and_free_for/)).
- r/askSingapore — shipping out / SingPost vs movers ([SingPost vs international](https://www.reddit.com/r/askSingapore/comments/1kvo2ga/relocating_abroad_use_international_movers_or/); [overseas movers cost](https://www.reddit.com/r/askSingapore/comments/1aii8jl/oversea_mover_service_in_singapore/); [packers recommendations](https://www.reddit.com/r/askSingapore/comments/ohel71/any_recommendations_for_a_good_international/)).
- r/askSingapore — climate wardrobe / office sweat ([expat weather](https://www.reddit.com/r/askSingapore/comments/khue33/as_an_expat_how_are_you_experiencing_the_weather/); [office wear + MRT](https://www.reddit.com/r/askSingapore/comments/1fb0quq/singapore_men_wearing_office_wear_and_taking/)).
- r/askSingapore — nightlife dress codes / ID ([clubbing clothes](https://www.reddit.com/r/askSingapore/comments/vvf74m/what_should_i_be_wearing_to_clubbing/); [Marquee](https://www.reddit.com/r/askSingapore/comments/1ixwp2z/marquee_nightclub_clothes_and_drinks/); [ID in clubs](https://www.reddit.com/r/askSingapore/comments/182qw0w/id_in_clubs/); [where expats hang out](https://www.reddit.com/r/askSingapore/comments/1i6z5x9/where_does_all_the_expatriates_hang_out_in/)).
- r/askSingapore — nationality clusters / Japanese Association ([Japanese community area](https://www.reddit.com/r/askSingapore/comments/1e9vd0j/japanese_community_area/); [make friends](https://www.reddit.com/r/askSingapore/comments/1gymfj0/how_do_you_make_friends_as_a_foreigner/); [Sweden move / chamber](https://www.reddit.com/r/askSingapore/comments/1aunb5u/moving_to_sg_from_sweden_insights_needed/)).
- r/askSingapore — churches / mosques / temples ([churches open?](https://www.reddit.com/r/askSingapore/comments/1e7rhh5/are_sg_churches_open_for_everyone/); [peace at worship](https://www.reddit.com/r/askSingapore/comments/129jx0h/seeking_peace_at_places_of_worship/); [temple dress](https://www.reddit.com/r/askSingapore/comments/x78mep/visiting_hindu_and_buddhist_temple_what_is_the/); [Buddhist intro](https://www.reddit.com/r/askSingapore/comments/15p0hwv/best_buddhist_temple_for_an_introduction_to/)).
- r/askSingapore — SP utilities / IPA / OEM ([SP for foreigners](https://www.reddit.com/r/askSingapore/comments/1rdhgez/sp_utility_account_for_foreigners/); [turn-on timing](https://www.reddit.com/r/askSingapore/comments/1eew2ow/sp_utilities_services_turnon/); [previous-tenant cut-off](https://www.reddit.com/r/askSingapore/comments/1cbtcet/sp_services_cut_off_supplies_due_to_previous/); [utilities retailer](https://www.reddit.com/r/askSingapore/comments/1f025o6/utilities_service_provider/)).

**Official**

- [NLB — Membership types and fees](https://www.nlb.gov.sg/main/services/library-membership/types-of-membership) + [Sign up](https://www.nlb.gov.sg/main/services/library-membership/Sign-up-for-Membership).
- [NHB — Free admission (SC/PR)](https://www.nhb.gov.sg/free-admission) + [ACM admissions](https://www.acm.nhb.gov.sg/visit/admissions).
- [SP open account](https://openaccount.spgroup.com.sg/#/open-account/) + [OEM making the switch](https://www.openelectricitymarket.sg/residential/making-the-switch) + [price comparison](https://compare.openelectricitymarket.sg/#/home) + [EMA OEM FAQ](https://www.ema.gov.sg/resources/faqs/electricity/open-electricity-market/what-is-the-open-electricity-market).
- [MUIS](https://www.muis.gov.sg/) + [Sultan Mosque visitors](https://www.sultanmosque.sg/visitors-info/) + [MusollahSG](https://www.musollahsg.com/).
- [AmCham](https://www.amcham.com.sg/) + [BritCham](https://www.britcham.org.sg/) + [EuroCham](https://eurocham.org.sg/) + [AustCham](https://www.austcham.org.sg/) + [JAS](https://www.jas.org.sg/) + [Singapore Customs personal shipment](https://www.customs.gov.sg/personal-shipment/).

### Gaps vs Tick 1–7

Tick 1–7 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR, MDW, diplomatic clause, insurance/maternity, preschool, banks/CPF, licence conversion, clubs, SIM/Singpass, pets, IRAS residency/foreign income, short-stay/FWTES, MOE P1, LTVP/parent S$12k, EP renewal, healthcare, remittance, apps/PayNow, S Pass, COMPASS, Customs GST inbound, Student’s Pass, career pivots, SimplyGo, aircon, SRS, haze, ABSD, STVP, PEP/ONE Pass, EntrePass, COE/car, JB, dengue, year-one finance, furnishing, condo move, mental health, SEN, paediatrician, stay-vs-exit, ActiveSG, groceries/e-waste, hawker cashless, dating/Bumble BFF, volunteering, holiday camps, passport embassy admin. Remaining high-intent stubs mismatched forum heat: **NLB foreigner fees + Libby**, **NHB museum ticket vs SC/PR free**, **SingPost vs outbound movers**, **humidity/office wardrobe**, **club dress + ID**, **JAS / West Coast nationality clusters**, **church/mosque/temple walk-in etiquette**, **chamber ROI**, **hash kennel guest norms**, **SP IPA open-account + OEM plan types**.

### Shipped this tick

**Upgraded guides (depth + tables + citations + lastReviewed 2026-09-15)**

- `content/guides/life/arts-culture-singapore.mdx`
- `content/guides/next/shipping-out-household.mdx`
- `content/guides/life/what-to-wear-singapore-climate.mdx`
- `content/guides/life/nightlife-social-scene.mdx`
- `content/guides/belong/nationality-groups-singapore.mdx`
- `content/guides/belong/religious-communities-singapore.mdx`
- `content/guides/belong/chambers-of-commerce-singapore.mdx`
- `content/guides/belong/hash-house-harriers.mdx`
- `content/guides/home/utilities-telecom-setup.mdx` (SP IPA + OEM depth)

**Entity depth**

- `content/entities/clubs/amcham.json`
- `content/entities/clubs/britcham.json`
- `content/entities/clubs/eurocham.json`
- `content/entities/clubs/austcham.json`
- `content/entities/clubs/japanese-association.json`
- `content/entities/clubs/st-georges-church.json`
- `content/entities/clubs/seletar-hash.json`
- `content/entities/services/santa-fe-relocation.json`
- `content/entities/neighbourhoods/clementi-west-coast.json`

### Explicitly not done

- No ads/monetization expansion (existing shipping-out `sponsorSlot` left as-is).
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–7 topics beyond SP/OEM depth on the existing utilities guide and light cross-links.

---

## Tick 7 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — ActiveSG / gym worth it / Singpass booking friction ([gym recommendations](https://www.reddit.com/r/askSingapore/comments/1jn7ooo/gym_membership_recommendations_and_is_it_worth_it/); [tourist ActiveSG](https://www.reddit.com/r/askSingapore/comments/1mr0lvx/being_a_tourist_can_i_go_to_activesg_gyms/); [tourist pool](https://www.reddit.com/r/askSingapore/comments/1f8nwoh/using_activesg_public_pool_in_singapore_as_a/); [cheap gym 3 weeks](https://www.reddit.com/r/askSingapore/comments/13cnnuz/im_staying_in_sg_for_3_weeks_and_would_love_to/)).
- r/askSingapore — FairPrice vs Sheng Siong vs RedMart / cooking costs ([cheapest supermarket](https://www.reddit.com/r/askSingapore/comments/1q1kwb4/which_is_the_cheapest_local_supermarket_to_do/); [cheap groceries](https://www.reddit.com/r/askSingapore/comments/1fy684k/cheap_groceries/); [reduce cooking costs](https://www.reddit.com/r/askSingapore/comments/1ucps1z/tips_on_reducing_monthly_food_costs_when_cooking/)).
- r/askSingapore — e-waste / bulky appliance disposal ([discard electronics](https://www.reddit.com/r/askSingapore/comments/1l9auoo/where_to_discard_electronic_appliances/)).
- r/askSingapore — hawker / cashless for foreigners ([cashless tourists](https://www.reddit.com/r/askSingapore/comments/1etknwp/singapore_is_slowly_going_cashless_what_are_some/); [credit cards / hawkers](https://www.reddit.com/r/askSingapore/comments/1jmgiee/credit_cardscashwechat_pay_for_a_tourist/)).
- r/askSingapore — friends / dating / Bumble BFF ([Bumble BFF](https://www.reddit.com/r/askSingapore/comments/16vu8g1/looking_for_girl_friends_as_a_girl_in_singapore/); [finding friends](https://www.reddit.com/r/askSingapore/comments/18j1x9t/finding_new_friends_in_sg/); [32F friends/dates](https://www.reddit.com/r/askSingapore/comments/1ntsmtd/32f_advice_on_how_to_find_new_friends_dates_in_sg/); [young professional foreigner](https://www.reddit.com/r/askSingapore/comments/1r69mda/how_to_make_friends_as_a_young_professional/); [dating culture](https://www.reddit.com/r/askSingapore/comments/15w6gwq/is_this_the_dating_culture_in_sg/)).
- r/askSingapore — volunteering with kids / families ([kids volunteer](https://www.reddit.com/r/askSingapore/comments/1kr66sa/volunteer_opportunities_for_kids/); [family volunteer](https://www.reddit.com/r/askSingapore/comments/1arydmn/suggestions_for_volunteer_work_as_families/)).
- r/askSingapore — EP/S Pass parents LTVP / S$12k + healthcare ([bring parent](https://www.reddit.com/r/askSingapore/comments/1dwrds5/bringing_parent_to_singapore_as_dependent_visa/); [new citizen parents cost](https://www.reddit.com/r/askSingapore/comments/1qbhxf4/how_much_would_a_new_citizen_need_to_earn_to/); [salary support parents](https://www.reddit.com/r/askSingapore/comments/1j9z8zi/how_much_salary_do_you_need_to_support_2_retired/); [parental LTVP rejection](https://www.reddit.com/r/askSingapore/comments/1d3u4sl/any_parental_ltvp_application_rejection/)).
- r/askSingapore — passport / embassy renewal timing ([helper passport](https://www.reddit.com/r/askSingapore/comments/1pdv7k5/how_to_renew_myanmar_helper_passport/); [embassy London](https://www.reddit.com/r/askSingapore/comments/1kk4ml8/passport_renewal_at_the_embassy_in_london/)).

**Official**

- [ActiveSG — Individual rates](https://www.activesgcircle.gov.sg/facilities/individual-rates) + [MyActiveSG+](https://www.activesgcircle.gov.sg/myactivesg-plus) + [Membership / MyActiveGYM](https://www.activesgcircle.gov.sg/membership).
- [NEA — Where to recycle e-waste](https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/e-waste-management/where-to-recycle-e-waste) + [ALBA E-Waste](https://alba-ewaste.sg/) + [EPR overview](https://www.nea.gov.sg/our-services/waste-management/3r-programmes-and-resources/e-waste-management/extended-producer-responsibility-(epr)-system-for-e-waste-management-system).
- [MOM — LTVP eligibility](https://www.mom.gov.sg/passes-and-permits/long-term-visit-pass/eligibility) + [Apply LTVP](https://www.mom.gov.sg/passes-and-permits/long-term-visit-pass/apply-for-a-pass) (parents ≥ S$12k fixed monthly salary).
- [giving.sg](https://www.giving.sg/) + [NVPC](https://nvpc.org.sg/) + [Oogachaga](https://www.oogachaga.com/) + [Pink Dot SG](https://pinkdot.sg/) + [MFA overseas missions](https://www.mfa.gov.sg/Overseas-Missions) + [NEA hawker centres](https://www.nea.gov.sg/our-services/hawker-management/about-hawker-centres).

### Gaps vs Tick 1–6

Tick 1–6 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR, MDW, diplomatic clause, insurance/maternity, preschool, banks/CPF, licence conversion, clubs, SIM/Singpass, pets, IRAS residency/foreign income, short-stay/FWTES, MOE P1, LTVP (SC spouse thin on **EP parents S$12k**), EP renewal, healthcare, remittance, apps/PayNow, S Pass, COMPASS, Customs GST, Student’s Pass, career pivots, SimplyGo, aircon, SRS, haze, ABSD, STVP, PEP/ONE Pass, EntrePass, COE/car, JB weekends, dengue, year-one finance, furnishing, condo move, mental health, SEN, paediatrician, stay-vs-exit. Remaining high-intent stubs mismatched forum heat: **ActiveSG Standard Rate + Singpass gym friction**, **FairPrice/Sheng Siong/RedMart + e-waste**, **hawker cash vs PayNow**, **Bumble BFF / friend-finding**, **giving.sg volunteering**, **holiday camps**, **passport embassy admin**, **MOM parent LTVP S$12k + unsubsidised healthcare**.

### Shipped this tick

**Upgraded guides (depth + tables + citations + lastReviewed 2026-09-15)**

- `content/guides/life/sports-fitness-singapore.mdx`
- `content/guides/life/shopping-essentials-singapore.mdx`
- `content/guides/life/hawker-food-guide.mdx`
- `content/guides/life/dating-social-singapore.mdx`
- `content/guides/family/kids-activities-holiday-camps.mdx`
- `content/guides/belong/volunteering-networks-singapore.mdx`
- `content/guides/belong/find-my-people-singapore.mdx`
- `content/guides/belong/lgbtq-resources-singapore.mdx`
- `content/guides/belong/anza-awa-associations.mdx`
- `content/guides/next/renewing-life-admin-annually.mdx`
- `content/guides/next/passports-and-documents-overseas.mdx`
- `content/guides/move/ltvp-singapore.mdx` (MOM parent S$12k path)

**Entity depth**

- `content/entities/clubs/oogachaga.json`
- `content/entities/clubs/anza.json`
- `content/entities/clubs/awa.json`
- `content/entities/clubs/lion-city-hash.json`
- `content/entities/services/kumon-centres.json`
- `content/entities/neighbourhoods/tiong-bahru.json`

### Explicitly not done

- No ads/monetization expansion.
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–6 topics beyond light cross-links and the parent-LTVP gap on the existing LTVP guide.

---

## Tick 6 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — furnishing / bare vs semi / Carousell–IKEA humidity ([moving in a month](https://www.reddit.com/r/askSingapore/comments/1n1elqn/moving_to_singapore_in_a_month/); [affordable furniture](https://www.reddit.com/r/askSingapore/comments/1hvm3yl/where_to_get_relatively_affordable_furniture_in_sg/); [where to buy](https://www.reddit.com/r/askSingapore/comments/1jgb22o/where_to_buy_affordable_furnitures/); [partially furnished condo](https://www.reddit.com/r/askSingapore/comments/197u0n0/moving_to_sg_soon_but_condo_partially_furnished/); [semi vs fully furnished](https://www.reddit.com/r/askSingapore/comments/1acslvx/renting_semibare_vs_fully_furnished_condo/)).
- r/askSingapore — condo lift padding / MCST move deposits / mover trolley surcharges ([lift padding responsibility](https://www.reddit.com/r/askSingapore/comments/1l3vp58/condo_lift_padding_whose_responsible_to_install/); [move-in deposit](https://www.reddit.com/r/askSingapore/comments/1uf6vp6/deposit_for_moving_into_condo/); [padding fee](https://www.reddit.com/r/askSingapore/comments/18lse0i/condo_manager_charging_for_lift_padding/); [movers shifting house](https://www.reddit.com/r/askSingapore/comments/1nl8h1a/questions_about_movers_shifting_house_in/); [agent fee / overseas landlord](https://www.reddit.com/r/askSingapore/comments/1h10b2z/who_should_pay_the_agent_fees_if_landlord_is/)).
- r/askSingapore — mental health access / outpatient exclusions ([foreigners mental health](https://www.reddit.com/r/askSingapore/comments/1m8tl7z/mental_health_services_in_sg_for_foreigners/); [outpatient insurance](https://www.reddit.com/r/askSingapore/comments/1pjqhk9/outpatient_insurance_recommendation/); [top-up insurance](https://www.reddit.com/r/askSingapore/comments/1larsa4/foreigners_in_sg_top_up_insurance/); [pre-existing mental health](https://www.reddit.com/r/askSingapore/comments/1hdz9wf/insurance_for_preexisting_mental_health_conditions/)).
- r/askSingapore — SEN / EIPIC / international school support ([moving with special needs](https://www.reddit.com/r/askSingapore/comments/1svtc96/moving_to_singapore_with_a_child_with_special/); [SEN primary support](https://www.reddit.com/r/askSingapore/comments/1gcsmj7/sen_teacher_support_for_primary_school_kids/); [ASD schooling](https://www.reddit.com/r/askSingapore/comments/wzj1id/iso_asd_schooling_options/); [MOE waiver / FSS](https://www.reddit.com/r/askSingapore/comments/1u4ilik/can_i_move_my_kid_to_an_international_school_in/); therapy cost notes in [moving to SG](https://www.reddit.com/r/askSingapore/comments/114zacw/moving_to_singapore/)).
- r/askSingapore — paediatrician private vs polyclinic for foreigners ([recommend PD](https://www.reddit.com/r/askSingapore/comments/1g54za3/anyone_can_recommend_a_pediatrician_in_sgp/); [cash-pay PD](https://www.reddit.com/r/askSingapore/comments/1e73vx8/pediatrician_recommendation_for_nonlocal_pay_via/); [public vs private](https://www.reddit.com/r/askSingapore/comments/1lksvrf/pediatrician_public_vs_private/)).
- r/askSingapore — PayNow without local bank / FIN proxy ([P2P PayNow](https://www.reddit.com/r/askSingapore/comments/1n84kwi/how_can_foreigners_use_peertopeer_paynow/); [PayNow or cash only](https://www.reddit.com/r/askSingapore/comments/15cnlmb/how_can_i_pay_at_a_place_that_only_accepts_paynow/)).

**Official**

- [MOH — Mental health services](https://www.moh.gov.sg/seeking-healthcare/find-a-facility-or-service/mental-health-services/) + [mindline 1771 announcement](https://www.moh.gov.sg/newsroom/national-mindline-1771-to-provide--round-the-clock-support-for-mental-health/) + [IMH Emergency](https://www.imh.com.sg/Clinical-Services/Pages/Emergency-Services.aspx) + [CHAT](https://www.imh.com.sg/CHAT/Get-Help/Pages/default.aspx).
- [ECDA — EIPIC](https://www.ecda.gov.sg/parents/other-services/early-intervention-services/early-intervention-programme-for-infants-and-children-%28eipic%29) + [SG Enable Enabling Guide](https://www.enablingguide.sg/im-looking-for-disability-support/therapy-intervention/early-intervention-programme-for-infants-children).
- [CEA — Engaging a property agent](https://www.cea.gov.sg/consumers/engaging-a-property-agent/what-to-take-note-of-when-engaging-a-property-agent/) + [renting guidance](https://www.cea.gov.sg/consumers/engaging-a-property-agent/renting-or-renting-out/) (no dual representation).
- [ABS — PayNow](https://www.abs.org.sg/e-payments/pay-now) + [DBS PayNow / FIN registration](https://www.dbs.com.sg/personal/support/bank-ssb-paynow-register-profile.html).
- [ICA — PR](https://www.ica.gov.sg/reside/PR) + [IRAS IR21](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees) + [CMPB](https://www.cmpb.gov.sg/) + [Dover Court admissions FAQs](https://www.nordangliaeducation.com/dcis-singapore/faqs).

### Gaps vs Tick 1–5

Tick 1–5 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR, MDW, diplomatic clause, insurance/maternity, preschool, banks/CPF, licence conversion, clubs, SIM/Singpass, pets, IRAS residency/foreign income, short-stay/FWTES, MOE P1, LTVP, EP renewal, healthcare, remittance, apps (thin PayNow), S Pass, COMPASS, Customs GST, Student’s Pass, career pivots, SimplyGo, aircon, SRS, haze, ABSD, STVP, PEP/ONE Pass, EntrePass, COE/car, JB weekends, dengue/emergencies, year-one finance. Remaining high-intent stubs mismatched forum heat: **bare/semi furnishing + Carousell exit**, **condo MCST lift/move deposits + dual-rep fee myth**, **mental-health outpatient exclusions + mindline 1771**, **EIPIC SC/PR-only + SEN school waitlists**, **foreigner paediatrician / polyclinic fee reality**, **stay-vs-exit year-three framework**, PayNow FIN depth.

### Shipped this tick

**Upgraded guides (depth + tables + citations + lastReviewed 2026-09-15)**

- `content/guides/home/furnishing-rental-flat.mdx`
- `content/guides/home/moving-within-singapore.mdx`
- `content/guides/family/mental-health-resources.mdx`
- `content/guides/family/special-needs-support.mdx`
- `content/guides/family/finding-pediatrician-singapore.mdx`
- `content/guides/next/long-term-stay-vs-exit.mdx`
- `content/guides/life/apps-that-matter-singapore.mdx` (PayNow FIN + Carousell)

**Entity depth**

- `content/entities/schools/dover-court.json`
- `content/entities/schools/singapore-american-school.json`
- `content/entities/services/alliance-movers.json`
- `content/entities/services/asian-tigers-mobility.json`
- `content/entities/services/raffles-medical.json`
- `content/entities/services/smg.json`

### Explicitly not done

- No ads/monetization expansion (existing movers `sponsorSlot` on moving-within left as-is).
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–5 topics beyond light cross-links.

---

## Tick 5 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — EP resignation / STVP after cancellation ([thread](https://www.reddit.com/r/askSingapore/comments/1ttedbd/ep_question_on_resignation_stvp/); [laid off stay longer](https://www.reddit.com/r/askSingapore/comments/vn8l3i/if_im_laid_off_as_an_ep_holder_is_there_anyway_to/); [LTVP after losing job](https://www.reddit.com/r/askSingapore/comments/1q66ra7/getting_an_ltvp_after_losing_job/)).
- r/askSingapore — rent vs buy / 60% ABSD for foreigners ([thread](https://www.reddit.com/r/askSingapore/comments/1s2f47a/longterm_renting_vs_buying_as_a_foreigner/); [options to buy](https://www.reddit.com/r/askSingapore/comments/1ajao3j/various_options_available_for_foreigners_to_buy_a/); [FTA ABSD](https://www.reddit.com/r/askSingapore/comments/10hkn38/why_do_foreigners_not_have_to_pay_absd_when/)).
- r/askSingapore — PEP pros/cons / job-hunt timing ([thread](https://www.reddit.com/r/askSingapore/comments/1hff5n2/pros_and_cons_of_personalized_employment_pass/); [PEP from overseas](https://www.reddit.com/r/askSingapore/comments/1dxd5ox/job_hunt_and_pep_when_to_apply_from_overseas/); [PEP + Tech.Pass](https://www.reddit.com/r/askSingapore/comments/n5ew8q/requirements_for_job_hunting_in_singapore_and/)).
- r/askSingapore — ONE Pass / spouse LOC myths ([thread](https://www.reddit.com/r/askSingapore/comments/1d9jml1/expats_how_does_my_wife_get_onepass_to_allow_her/)).
- r/askSingapore — Grab vs own car / GetGo / COE realism ([GetGo](https://www.reddit.com/r/askSingapore/comments/1jvrlzs/which_car_sharing_service_do_you_recommend_and_why/); [S$1.2k Grab](https://www.reddit.com/r/askSingapore/comments/1br6cwy/i_spend_12k_per_month_on_grab_should_i_get_a_car/); [when buy makes sense](https://www.reddit.com/r/askSingapore/comments/1oh0qdo/when_will_it_make_sense_to_buy_a_car_eg_if_you/); [moving considerations / COE](https://www.reddit.com/r/askSingapore/comments/1coj3s5/what_should_i_consider_before_moving_to_singapore/)).
- r/askSingapore — JB / RTS commute politics ([thread](https://www.reddit.com/r/askSingapore/comments/1roo6vb/with_the_upcoming_rts_would_govt_consider_making/)).
- r/askSingapore — NEA dengue home checks / fines ([officers](https://www.reddit.com/r/askSingapore/comments/1r1q6uu/nea_officers_checking_for_mosquitoes/); [is it serious](https://www.reddit.com/r/askSingapore/comments/14q419q/nea_check_is_it_serious/); [clusters](https://www.reddit.com/r/askSingapore/comments/1i4rzk5/something_about_reporting_to_nea_for_dengue/)).

**Official**

- [IRAS — ABSD](https://www.iras.gov.sg/taxes/stamp-duty/for-property/buying-or-acquiring-property/additional-buyers-stamp-duty-(absd)) + [FTA remission](https://www.iras.gov.sg/taxes/stamp-duty/for-property/appeals-refunds-reliefs-and-remissions/common-stamp-duty-remissions-and-reliefs-for-property/foreigners-eligible-for-absd-remission-under-free-trade-agreements-(ftas)).
- [MOM — Cancel EP / STVP](https://www.mom.gov.sg/passes-and-permits/employment-pass/cancel-a-pass) + [PEP eligibility](https://www.mom.gov.sg/passes-and-permits/personalised-employment-pass/eligibility) + [ONE Pass eligibility](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/eligibility) + [ONE Pass family / spouse LOC](https://www.mom.gov.sg/passes-and-permits/overseas-networks-expertise-pass/passes-for-families) + [EntrePass eligibility](https://www.mom.gov.sg/passes-and-permits/entrepass/eligibility).
- [LTA OneMotoring — COE](https://onemotoring.lta.gov.sg/content/onemotoring/home/buying/upfront-vehicle-costs/certificate-of-entitlement--coe-.html) + [vehicle tax structure](https://onemotoring.lta.gov.sg/content/onemotoring/home/buying/upfront-vehicle-costs/tax-structure.html).
- [NEA — Dengue clusters](https://www.nea.gov.sg/dengue-zika/dengue/dengue-clusters) + [home inspection](https://www.nea.gov.sg/dengue-zika/inspecting-your-homes-and-premises-for-mosquito-habitats).
- [ICA — LTVP graduate seeking employment](https://www.ica.gov.sg/reside/LTVP/apply/graduate-from-an-institute-of-higher-learning-seeking-employment-in-singapore).

### Gaps vs Tick 1–4

Tick 1–4 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR, MDW, diplomatic clause, insurance/maternity, preschool, banks/CPF, licence conversion, clubs, SIM/Singpass, pets, IRAS residency/foreign income, short-stay/FWTES, MOE P1, LTVP, EP renewal, healthcare, remittance, apps, S Pass, COMPASS, Customs GST, Student’s Pass, career pivots, SimplyGo, aircon, SRS, haze. Remaining high-intent gaps matched forum heat: **60% ABSD / rent-vs-buy**, **STVP between jobs**, **PEP one-shot rules**, **ONE Pass + spouse LOC**, **EntrePass eligibility depth**, **COE vs GetGo/Grab**, **JB Causeway timing**, **NEA dengue inspections**, year-one FOMO finance.

### Shipped this tick

**New guides**

- `content/guides/home/buying-property-foreigner-absd.mdx`
- `content/guides/next/between-jobs-stvp-singapore.mdx`
- `content/guides/move/personalised-employment-pass-pep.mdx`
- `content/guides/move/one-pass-singapore.mdx`
- `content/guides/life/car-ownership-vs-sharing-singapore.mdx`

**Upgraded guides (depth + citations + lastReviewed 2026-09-15)**

- `content/guides/move/entrepass-singapore.mdx`
- `content/guides/life/weekend-getaways-from-singapore.mdx`
- `content/guides/life/emergencies-995-999-embassies.mdx`
- `content/guides/money/financial-planning-year-one.mdx`
- `content/guides/move/employment-pass-singapore.mdx` (cross-links)
- `content/guides/next/career-pivots-singapore.mdx` / `leaving-singapore-playbook.mdx` / `converting-foreign-driving-licence.mdx` / `condo-vs-hdb-expat.mdx` (cross-links)

**Entity depth**

- `content/entities/services/era-realty.json`
- `content/entities/services/huttons.json`
- `content/entities/services/orange-tee.json`
- `content/entities/neighbourhoods/woodlands.json`
- `content/entities/neighbourhoods/marina-bay-cbd.json`

### Explicitly not done

- No ads/monetization expansion.
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–4 topics beyond light cross-links.
- Included prior unpushed Tick 4 commit in the same push to origin/main.

---

## Tick 4 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — S Pass vs EP / “company has no EP quota” myth ([thread](https://www.reddit.com/r/askSingapore/comments/194p4v0/s_pass_vs_e_pass/); [EP vs S Pass](https://www.reddit.com/r/askSingapore/comments/1bg072z/difference_between_ep_and_spass_visa_types/); [EP salary 2025](https://www.reddit.com/r/askSingapore/comments/1jk9yhn/has_the_ep_qualifying_salary_been_updated/); [EP realism](https://www.reddit.com/r/askSingapore/comments/1j3siis/is_it_realistic_to_get_an_employment_pass_in/)).
- r/askSingapore — COMPASS university points / pending EP ([thread](https://www.reddit.com/r/askSingapore/comments/1q00yh8/question_about_employment_pass_compass_framework/); [internal transfer](https://www.reddit.com/r/askSingapore/comments/1tvux52/how_difficult_is_employment_pass_through_internal/)).
- r/askSingapore — job hop / career change on EP/S Pass ([thread](https://www.reddit.com/r/askSingapore/comments/1b3nt5g/how_hard_is_it_to_switch_jobsjob_hop_as_a/); [company change](https://www.reddit.com/r/askSingapore/comments/120shl1/ep_process_on_company_change/)).
- r/askSingapore — GST on used personal effects / unaccompanied shipping ([thread](https://www.reddit.com/r/askSingapore/comments/16hp6iq/do_i_need_to_pay_gst_for_bringing_used_personal/); [DHL tax](https://www.reddit.com/r/askSingapore/comments/1swzsgt/taxed_for_shipping_personal_items_from_uk_to/); [student customs](https://www.reddit.com/r/askSingapore/comments/1hwlik5/moving_to_singapore_as_a_student/); [land entry bulky](https://www.reddit.com/r/askSingapore/comments/xz9xtn/can_you_handcarry_items_through_land_entry_into/)).
- r/askSingapore — Student’s Pass process / address chicken-and-egg ([process](https://www.reddit.com/r/askSingapore/comments/1d74yq4/how_does_the_student_pass_application_process_work/); [accommodation dilemma](https://www.reddit.com/r/askSingapore/comments/1d5q09h/student_pass_and_accommodation_in_singapore/); [student visa](https://www.reddit.com/r/askSingapore/comments/1aywrfe/student_visa/)).
- r/askSingapore — SimplyGo / foreign card admin fee ([thread](https://www.reddit.com/r/askSingapore/comments/1ir6xyb/simplygo_or_just_use_contactless_pay_tourist/); [MTA analogy](https://www.reddit.com/r/askSingapore/comments/1dc8jei/using_mta_business_trip/)).
- r/askSingapore — aircon servicing scams / gas top-ups ([recommend](https://www.reddit.com/r/askSingapore/comments/1slcphx/aircon_servicing_which_companies_do_you_guys/); [scam](https://www.reddit.com/r/askSingapore/comments/1np90u9/am_i_getting_scammed_by_aircon_servicing/); [frequency](https://www.reddit.com/r/askSingapore/comments/1mh5imt/how_often_do_you_service_your_aircon/)).
- r/askSingapore — SRS for foreigners / exit tax trap ([SRS investment](https://www.reddit.com/r/askSingapore/comments/13ogmnh/srs_investment/); [dividend withdrawal](https://www.reddit.com/r/askSingapore/comments/1mwrvxb/srs_dividend_cash_withdrawal_any_penalties/); [tax timing](https://www.reddit.com/r/askSingapore/comments/19b12g0/moving_to_sg_timing_for_income_tax_foreigner/); [CPF vs SRS](https://www.reddit.com/r/askSingapore/comments/14avcvv/cpf_for_foreigners/)).

**Official**

- [MOM — S Pass eligibility](https://www.mom.gov.sg/passes-and-permits/s-pass/eligibility) + [levy/quota](https://www.mom.gov.sg/passes-and-permits/s-pass/quota-and-levy/levy-and-quota-requirements) + [DP eligibility](https://www.mom.gov.sg/passes-and-permits/dependants-pass/eligibility) + [COS 2025 foreign workforce factsheet](https://www.mom.gov.sg/-/media/mom/documents/budget2025/cos-2025-factsheet-on-foreign-workforce-policies).
- [MOM — EP COMPASS eligibility](https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility) + [scoring rubric PDF](https://www.mom.gov.sg/-/media/mom/documents/press-releases/2023/annex-a---compass-scoring-rubric.pdf).
- [MOM — Change jobs on EP](https://www.mom.gov.sg/faq/employment-pass/what-if-i-want-to-change-jobs-while-i-am-on-an-ep) + cancellation FAQs.
- [Singapore Customs — GST relief](https://www.customs.gov.sg/personal-shipment/moving-to-singapore/do-i-qualify-for-gst-relief/) + [unaccompanied items](https://www.customs.gov.sg/personal-shipment/moving-to-singapore/sending-unaccompanied-items/) + [excluded goods](https://www.customs.gov.sg/personal-shipment/moving-to-singapore/what-goods-are-not-eligible-for-relief/).
- [ICA — Student's Pass](https://www.ica.gov.sg/reside/STP/) + [apply](https://www.ica.gov.sg/reside/STP/apply) + [formalities](https://www.ica.gov.sg/reside/STP/collect); [MOM student work exemption](https://www.mom.gov.sg/passes-and-permits/work-pass-exemption-for-foreign-students).
- [SimplyGo — foreign bank card FAQ](https://simplygo.com.sg/faqs/cards-and-charms/simplygo/contactless-bank-cards/); [haze.gov.sg](https://www.haze.gov.sg/) + [MOH haze](https://www.moh.gov.sg/others/haze/); [IRAS SRS](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-reliefs-rebates-and-deductions/tax-reliefs/supplementary-retirement-scheme-(srs)) + [SRS withdrawals](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/special-tax-schemes/tax-on-srs-withdrawals).

### Gaps vs Tick 1–3

Tick 1–3 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR, MDW, diplomatic clause, insurance/maternity, preschool, banks/CPF, licence conversion, clubs, SIM/Singpass, pets, IRAS residency/foreign income, short-stay/FWTES, MOE P1, LTVP, EP renewal, healthcare, remittance, apps. Remaining high-intent stubs still mismatched forum heat: **S Pass quota/levy vs EP myth**, **COMPASS C1–C6 depth**, **job-hop IPA sequencing**, **Customs GST relief / DOF**, **Student’s Pass address chicken-egg**, **SimplyGo foreign-card fee**, **aircon servicing scam patterns**, **SRS exit taxation**, **PSI vs PM2.5**. Mover/neighbourhood entities still thin on Customs and west/east living detail.

### Shipped this tick

**Upgraded guides (depth + tables + citations + lastReviewed 2026-09-15)**

- `content/guides/move/s-pass-singapore.mdx`
- `content/guides/move/compass-framework-explained.mdx`
- `content/guides/move/shipping-household-singapore.mdx`
- `content/guides/move/student-pass-singapore.mdx`
- `content/guides/next/career-pivots-singapore.mdx`
- `content/guides/life/mrt-bus-transport-literacy.mdx`
- `content/guides/home/aircon-pest-renewals.mdx`
- `content/guides/money/srs-investing-as-foreigner.mdx`
- `content/guides/life/haze-climate-preparedness.mdx`

**Entity depth**

- `content/entities/services/asian-tigers-mobility.json`
- `content/entities/services/alliance-movers.json`
- `content/entities/services/santa-fe-relocation.json`
- `content/entities/neighbourhoods/clementi-west-coast.json`
- `content/entities/neighbourhoods/katong-joo-chiat.json`

### Explicitly not done

- No ads/monetization expansion (existing shipping `sponsorSlot` left as-is).
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–3 topics beyond light cross-links.

---

## Tick 3 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — SIM / eSIM with IPA only; FIN not accepted until pass formalities ([thread](https://www.reddit.com/r/askSingapore/comments/1fpn9bw/purchasing_simcard_as_a_foreign_worker_with_only/); [student eSIM](https://www.reddit.com/r/askSingapore/comments/1hs50m0/why_am_i_not_able_to_register_a_sg_phone_number/); [foreigner number](https://www.reddit.com/r/askSingapore/comments/14qb2zg/how_can_a_foreigner_buy_a_singapore_mobile_number/)).
- r/askSingapore — Singpass SMS 2FA overseas / Singapore-number-only ([thread](https://www.reddit.com/r/askSingapore/comments/1otua5y/can_i_use_an_overseas_number_for_singpass_2fa/); [app SMS](https://www.reddit.com/r/askSingapore/comments/1ltsce4/singpass_sms_2fa_from_overseas/)).
- r/askSingapore — pet import / AQC quarantine booking months ahead / Schedule III ([USA cat](https://www.reddit.com/r/askSingapore/comments/1hud9od/moving_from_usa_to_sg_with_a_cat/); [AQS booking](https://www.reddit.com/r/askSingapore/comments/1nsvrcl/any_recent_dog_relocations_how_many_weeks_or/); [import experience](https://www.reddit.com/r/askSingapore/comments/1dbvnxa/thinking_of_importing_a_dog_into_singapore_how/); [quarantine conditions](https://www.reddit.com/r/askSingapore/comments/1m5cq3n/anyone_able_to_share_your_experience_bringing/); [schedules](https://www.reddit.com/r/askSingapore/comments/1r7m71i/advice_about_importing_a_pet_back/)).
- r/askSingapore — tax residency timing / first-year IRAS bill / foreign income myths ([timing](https://www.reddit.com/r/askSingapore/comments/19b12g0/moving_to_sg_timing_for_income_tax_foreigner/); [remote overseas employer](https://www.reddit.com/r/askSingapore/comments/hj8mqq/personal_income_tax_for_remote_overseas_company/); [taxes as foreigner](https://www.reddit.com/r/askSingapore/comments/x29hg4/taxes_as_a_foreigner/)).
- r/askSingapore — short-term address gaps / FWTES landlord blockers for EP address update ([rent gap](https://www.reddit.com/r/askSingapore/comments/1j6ebw5/suggestions_required_for_rent_and_address_update/); [FWTES](https://www.reddit.com/r/askSingapore/comments/1oaf0dl/ep_holder_stuck_landlord_wont_enable_fwtes_so_i/)).
- r/askSingapore — local MOE schools / P1 IS lottery / non-citizen fee bands ([relocation kids](https://www.reddit.com/r/askSingapore/comments/1golvge/relocation_to_singapore_with_two_kids/); [12k family](https://www.reddit.com/r/askSingapore/comments/1qisb1f/frenchchinese_family_considering_move_to_sg_is/); [consider relocating](https://www.reddit.com/r/askSingapore/comments/1tq770u/consider_relocating_to_singapore_please_help/)).
- r/askSingapore — SC spouse LTVP / PMLA / PLOC ([relocating SC spouse](https://www.reddit.com/r/askSingapore/comments/1qvnbml/relocating_sc_spouse_to_singapore/); [marriage guide](https://www.reddit.com/r/askSingapore/comments/15ji6jz/guide_what_to_do_if_youre_a_sc_or_pr_that_wants/)).
- r/askSingapore — EP renewal / COMPASS / time outside SG ([new EP rules](https://www.reddit.com/r/askSingapore/comments/128pszn/new_ep_rules/); [time outside](https://www.reddit.com/r/askSingapore/comments/1co1ebv/how_long_can_a_ep_holder_stay_outside_of/)).

**Official**

- [URA — Short-term accommodation](https://www.ura.gov.sg/guidelines/property-and-business-owners/property/short-term-accommodation/) + [Renting property](https://www.ura.gov.sg/guidelines/property-and-business-owners/property/renting-property/) (3-month private residential minimum; hotels / serviced apartments).
- [AVS — Importing dogs and cats](https://avs.nparks.gov.sg/pets/importing-exporting-a-pet/import/dogs-and-cats/) + [Animal Quarantine Centre](https://avs.nparks.gov.sg/about-us/our-centres/animal-quarantine-centre/) + [GoBusiness AVS licence](https://licensing.gobusiness.gov.sg/licence-directory/avs/licence-to-importexporttransship-non-food-animals-birds-eggs-and-biologics).
- [IRAS — Tax residency](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/tax-residency-and-tax-rates/working-out-my-tax-residency) + [Income from overseas](https://www.iras.gov.sg/taxes/individual-income-tax/basics-of-individual-income-tax/what-is-taxable-what-is-not/income-received-from-overseas).
- [MOE — P1 international students](https://www.moe.gov.sg/primary/p1-registration/international-students) + [School fees](https://www.moe.gov.sg/financial-matters/fees) + [2024–2026 non-citizen fee revision](https://www.moe.gov.sg/news/press-releases/20231018-revised-school-fees-for-non-citizens-in-government-and-government-aided-schools-for-2024-to-2026).
- [ICA — LTVP](https://www.ica.gov.sg/reside/LTVP) + [MOM — PLOC](https://www.mom.gov.sg/passes-and-permits/pre-approved-letter-of-consent/eligibility).
- [Singpass](https://www.singpass.gov.sg/) + [CMPB](https://www.cmpb.gov.sg/) + [MOH healthcare system](https://www.moh.gov.sg/home/our-healthcare-system).

### Gaps vs Tick 1–2

Tick 1–2 covered packages, DP LOC, waitlists, heartland, leaving/IR21, PR, MDW, diplomatic clause, insurance/maternity, preschool, banks/CPF, licence conversion, clubs. Remaining high-intent stubs still mismatched forum heat: **SIM/Singpass chicken-and-egg**, **pet Schedules + AQC booking**, **IRAS residency/foreign-income myths**, **URA 3-month short-stay illegality + FWTES address**, **MOE P1 IS + fee bands**, **LTVP/PMLA/PLOC**, EP renewal depth, healthcare triage, remittance vs PayNow. Neighbourhood/clinic/telco entities still thin.

### Shipped this tick

**Upgraded guides (depth + tables + citations + lastReviewed 2026-09-15)**

- `content/guides/home/utilities-telecom-setup.mdx`
- `content/guides/home/short-term-vs-long-term-rental.mdx`
- `content/guides/move/importing-pets-singapore.mdx`
- `content/guides/move/first-housing-serviced-apartment.mdx`
- `content/guides/move/ltvp-singapore.mdx`
- `content/guides/money/iras-tax-residency-filing.mdx`
- `content/guides/money/foreign-income-and-tax.mdx`
- `content/guides/money/remittances-singapore.mdx`
- `content/guides/family/local-schools-for-expats.mdx`
- `content/guides/family/healthcare-gp-hospital.mdx`
- `content/guides/next/ep-renewal-strategy.mdx`
- `content/guides/next/citizenship-ns-implications.mdx`
- `content/guides/life/apps-that-matter-singapore.mdx`

**Entity depth**

- `content/entities/services/telecom-setup-help.json`
- `content/entities/services/raffles-medical.json`
- `content/entities/services/parkway-shenton.json`
- `content/entities/neighbourhoods/holland-village.json`
- `content/entities/neighbourhoods/woodlands.json`
- `content/entities/neighbourhoods/river-valley.json`

### Explicitly not done

- No ads/monetization expansion (existing remittance sponsorSlot left as-is).
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1–2 topics beyond light cross-links.

---

## Tick 2 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — hiring helper advice / timelines / salary bands ([thread](https://www.reddit.com/r/askSingapore/comments/1lvuwq0/advice_and_things_to_note_when_hiring_a_helper/); [salary](https://www.reddit.com/r/askSingapore/comments/1kk34be/how_much_do_you_pay_your_maid_for_how_many_years/); increments ([thread](https://www.reddit.com/r/askSingapore/comments/1rfx1y0/how_much_salary_increment_for_your_helper/)); part-time cleaning vs live-in ([thread](https://www.reddit.com/r/askSingapore/comments/1s5304c/domestic_helpers_going_to_work_for_uc/)).
- r/askSingapore — diplomatic clause denials / early termination deposit fights ([thread](https://www.reddit.com/r/askSingapore/comments/1twdqhg/can_landlord_deny_using_diplomatic_clause/); [S$20k demand](https://www.reddit.com/r/askSingapore/comments/1j5m8bl/landlord_demanding_20k_for_early_lease_termination/); [no clause in TA](https://www.reddit.com/r/askSingapore/comments/18i8htj/landlord_didnt_include_a_diplomatic_clause_in_my/); [what to look for in a TA](https://www.reddit.com/r/askSingapore/comments/zmcmh7/what_to_look_for_in_a_tenancy_agreement_when/)).
- r/askSingapore — expat health insurance / maternity gaps / top-ups ([thread](https://www.reddit.com/r/askSingapore/comments/1qknwn1/expat_health_insurance_advice_needed/); [top-up costs](https://www.reddit.com/r/askSingapore/comments/1larsa4/foreigners_in_sg_top_up_insurance/)).
- r/askSingapore — preschool for foreigners / unsubsidised fees ([thread](https://www.reddit.com/r/askSingapore/comments/1auflqg/preschool_student_visa/); [temporary childcare](https://www.reddit.com/r/askSingapore/comments/1hd2si7/childcare_temporary_non_citizen/); fee stacking in family budget threads).
- r/askSingapore — DBS/address-proof bank opening chicken-and-egg ([thread](https://www.reddit.com/r/askSingapore/comments/19amqw7/opening_bank_account_with_dbs_as_expat/)).
- r/askSingapore — CPF myths for EP ([thread](https://www.reddit.com/r/askSingapore/comments/112u5q9/do_i_get_cpf_on_ep/); [foreigners](https://www.reddit.com/r/askSingapore/comments/14avcvv/cpf_for_foreigners/)).
- r/askSingapore — foreign licence conversion / 12-month rule / JB shortcut myth ([thread](https://www.reddit.com/r/askSingapore/comments/1q4987p/getting_a_singapore_drivers_licence_as_a/); [visitor driving](https://www.reddit.com/r/askSingapore/comments/1bujpm1/foreigner_driving_in_singapore/)).
- r/askSingapore — club membership scarcity / American vs Tanglin chatter ([thread](https://www.reddit.com/r/askSingapore/comments/1153k1x/country_clubs_are_they_still_popular_with_the/); [private clubs](https://www.reddit.com/r/askSingapore/comments/16k8oin/private_clubs_in_singapore/); [where are the Americans](https://www.reddit.com/r/askSingapore/comments/18bpqu8/where_are_the_americans/)).

**Forums / categories**

- forum.singaporeexpats.com — Domestic Helper & Babysitter; Insurance; Drivers Licence; Preschools; Credit Card & Banking categories (ongoing poorly answered sticky themes echoed above). Health underwriting honesty thread ([topic](https://forum.singaporeexpats.com/viewtopic.php?t=133768)).

**Official**

- [MOM — MDW Work Permit](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker) + [levy rates](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/foreign-domestic-worker-levy/paying-levy) + [levy concession (SC child / elderly / PWD rules)](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/foreign-domestic-worker-levy/levy-concession) + [rest days](https://www.mom.gov.sg/passes-and-permits/work-permit-for-foreign-domestic-worker/employers-guide/rest-days-and-well-being).
- [CEA — Tenancy agreement templates](https://www.cea.gov.sg/real-estate-professionals/agreements-and-checklists/).
- [ECDA — Preschool subsidies](https://www.ecda.gov.sg/parents/preschool-subsidies) (SC children) + [LifeSG Form 1](https://www.life.gov.sg/services-tools/form-1-preschool).
- [CPF Board — Who should receive CPF](https://www.cpf.gov.sg/employer/employer-obligations/who-should-receive-cpf-contributions).
- [SPF Traffic Police — Singapore Driving Licence](https://www.police.gov.sg/Knowledge-Hub/Traffic/Traffic-Matters/Singapore-Driving-Licence) + conversion appointment e-service.
- [MOH — Healthcare system](https://www.moh.gov.sg/home/our-healthcare-system); [DBS account-opening docs](https://www.dbs.com.sg/personal/support/bank-account-opening-documents-required.html) as bank example.

### Gaps vs Tick 1 / existing site

Tick 1 covered packages, DP LOC, school waitlists, heartland, leaving costs, PR framing. Remaining high-intent stubs (~24–35 lines) still mismatched forum heat: MDW all-in costs + **expat levy-concession trap**, diplomatic clause trigger fights, insurance/maternity for foreigners, unsubsidised preschool, bank address proof, CPF myths, licence conversion clock, club comparison depth. Neighbourhood/club/school entities were thin one-liners. No Tampines entity despite heartland guide naming it.

### Shipped this tick

**New**

- `content/entities/neighbourhoods/tampines.json`

**Upgraded guides (depth + comparison tables + citations + lastReviewed 2026-09-15)**

- `content/guides/home/hiring-domestic-helper-mdw.mdx`
- `content/guides/home/security-deposit-diplomatic-clause.mdx`
- `content/guides/home/renting-process-loi-ta-deposits.mdx`
- `content/guides/money/health-insurance-expat.mdx`
- `content/guides/money/opening-bank-account-expat.mdx`
- `content/guides/money/cpf-and-foreigners.mdx`
- `content/guides/family/preschool-childcare-singapore.mdx`
- `content/guides/family/maternity-care-singapore.mdx`
- `content/guides/family/international-schools-landscape.mdx`
- `content/guides/belong/membership-clubs-comparison.mdx`
- `content/guides/belong/american-club-vs-tanglin.mdx`
- `content/guides/move/converting-foreign-driving-licence.mdx`
- `content/guides/home/heartland-living-for-expats.mdx` (relatedEntities → Tampines/East Coast)

**Entity depth**

- `content/entities/neighbourhoods/east-coast.json`
- `content/entities/neighbourhoods/bukit-timah.json`
- `content/entities/clubs/american-club.json`
- `content/entities/clubs/tanglin-club.json`
- `content/entities/clubs/hollandse-club.json`
- `content/entities/schools/singapore-american-school.json`
- `content/entities/schools/tanglin-trust-school.json`

### Explicitly not done

- No ads/monetization expansion.
- No copying of third-party “expat-sg” / Grok clones.
- Did not re-litigate Tick 1 topics (packages, DP LOC, waitlists-as-primary, leaving-cost playbooks, PR framing) beyond light cross-links.

---

## Tick 1 — 2026-09-15

### Sources mined

**Reddit**

- r/askSingapore — “120k Salary for an expat couple” ([thread](https://www.reddit.com/r/askSingapore/comments/1slfs8x/120k_salary_for_an_expat_couple/)): mid-range condo rents ~S$4–5k, DP spouse job friction, DINK realism.
- r/askSingapore — “Is 12k SGD/month enough… with 2 kids?” ([thread](https://www.reddit.com/r/askSingapore/comments/1qisb1f/frenchchinese_family_considering_move_to_sg_is/)): international school + rent stacking; DP work limits.
- r/askSingapore — “What’s the cost for comfortable living?” ([thread](https://www.reddit.com/r/askSingapore/comments/1l29f9t/whats_the_cost_for_comfortable_living_in_singapore/)): ~S$10k+/person heuristics for couples; healthcare shock.
- r/askSingapore — “Is 200k salary… enough?” ([thread](https://www.reddit.com/r/askSingapore/comments/1c5e4y5/is_200k_salary_in_sg_for_a_couple_enough/)): school + location as make-or-break.
- r/askSingapore — COMPASS / EP questions ([thread](https://www.reddit.com/r/askSingapore/comments/1q00yh8/question_about_employment_pass_compass_framework/)).
- r/askSingapore — IR21 withholding / last pay ([thread](https://www.reddit.com/r/askSingapore/comments/119uwo8/hr_tax_qn_how_do_you_explain_to_your_employee/); [EP exit timing](https://www.reddit.com/r/askSingapore/comments/1q9stq3/what_happens_if_an_ep_holder_gives_leaving_notice/)).
- r/singapore — international school waitlists / corporate nomination pricing ([thread](https://www.reddit.com/r/singapore/comments/c5lpyw/over_176000_per_place_firms_buy_spots_at_top/); TTS vs UWC campus notes).
- r/askSingapore — local primary admission / foreigner priority ([thread](https://www.reddit.com/r/askSingapore/comments/1azh44d/primary_school_admission/)).

**Forums / expat media**

- forum.singaporeexpats.com — IR21 / tax on exit ([topic](https://forum.singaporeexpats.com/viewtopic.php?t=116699)); NS liability anecdotes with PR/citizenship ([topic](https://forum.singaporeexpats.com/viewtopic.php?t=131488)).
- Expat.com — trailing spouse career themes ([article](https://www.expat.com/en/expat-mag/1086-maintaining-a-career-as-the-trailing-spouse.html)).
- Common Facebook-group themes (via secondary writeups + forum echo): heartland HDB vs condo trade-offs; DP “can I work?” confusion post-2021; school waitlist + housing lock-in.

**Official**

- [ICA — Becoming a Permanent Resident](https://www.ica.gov.sg/reside/PR) — assessment factors, fees, 6-month processing note, NS warnings, no affiliation with commercial agents.
- [IRAS — Tax clearance for employees (IR21)](https://www.iras.gov.sg/taxes/individual-income-tax/employers/tax-clearance-for-foreign-spr-employees-(ir21)/tax-clearance-for-employees) — one-month notice, withholding, exceptions, employer penalties.
- [MOM — Employment Pass](https://www.mom.gov.sg/passes-and-permits/employment-pass) — S$5,600+ floor (verify live), COMPASS.
- [MOM — LOC for DP business owners](https://www.mom.gov.sg/passes-and-permits/loc-for-dependants-pass-business-owners/eligibility) + [Budget 2021 DP work factsheet](https://www.mom.gov.sg/-/media/mom/documents/budget2021/factsheet-work-arrangements-dp-holders.pdf) — employment LOC ended May 2021 for ordinary jobs.
- [HDB — Open-market renting eligibility](https://www.hdb.gov.sg/residential/renting-a-flat/renting-from-the-open-market/eligibility) — pass types, 6-month validity, tourist ban.
- [CMPB](https://www.cmpb.gov.sg/) — NS liability pointer for PR guides.

### Gaps vs existing site

Several high-intent guides existed as thin stubs (~25–40 lines) despite matching exact forum questions: school waitlists, salary decoding, trailing spouse work rights, PR strategy, neighbourhood/heartland depth, leaving cashflow, cost-of-living realism. Dependant Pass guide still implied general LOC-for-employment (pre-2021). No dedicated heartland or leaving-costs guides. Tax clearance citation URL was stale/404-pattern.

### Shipped this tick

**New**

- `content/guides/home/heartland-living-for-expats.mdx`
- `content/guides/next/leaving-singapore-costs.mdx`
- `docs/content-loop-log.md` (this file)

**Upgraded (depth + citations + lastReviewed 2026-09-15)**

- `content/guides/family/school-waitlist-realism.mdx`
- `content/guides/money/salary-package-decoding.mdx`
- `content/guides/money/cost-of-living-by-household.mdx`
- `content/guides/move/trailing-partner-career-singapore.mdx`
- `content/guides/move/dependant-pass-singapore.mdx`
- `content/guides/move/decoding-job-offer-singapore.mdx`
- `content/guides/next/pr-application-strategy.mdx`
- `content/guides/next/leaving-singapore-playbook.mdx`
- `content/guides/next/tax-clearance-when-leaving.mdx`
- `content/guides/home/choosing-neighbourhood-expat.mdx`
- `content/guides/home/condo-vs-hdb-expat.mdx`

### Explicitly not done

- No ads/monetization expansion.
- No copying of third-party “expat-sg” / Grok clones.
