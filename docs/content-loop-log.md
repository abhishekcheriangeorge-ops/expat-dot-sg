# Content loop log

Short running log of research → gap analysis → shipped editorial. No monetization expansion in these ticks.

**Standing order:** after each loop tick, audit then merge PR to main.

---

## Loop F — Services directory depth — Tick 2 — 2026-09-15

Branch: `loop/services-directory-tick2` → PR to `main`. Owns **services directory** entities only. Did **not** touch neighbourhoods (Loop C), schools/clubs (Loop B), or pillar guides (A–D). No ads / featured / monetization expansion. No Grok copy. Skipped tick 1 topics (tax / dental / notary / self-storage / pet-relocation).

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
