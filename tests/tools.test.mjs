import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { estimateLeaseDuty } from "../src/lib/tools/lease-duty.ts";
import {
  estimateEpMinimum,
} from "../src/lib/tools/ep-threshold.ts";
import { estimateMonthlyCol } from "../src/lib/tools/col.ts";
import { estimateTaxResidencyDays } from "../src/lib/tools/tax-residency.ts";
import { estimateSchoolCcaKitBond } from "../src/lib/tools/school-cca-kit-bond.ts";
import { estimateSchoolDeviceBond } from "../src/lib/tools/school-device-bond.ts";
import { estimateSchoolExamIbDeposit } from "../src/lib/tools/school-exam-ib-deposit.ts";
import { estimateTuitionCentreBond } from "../src/lib/tools/tuition-centre-bond.ts";
import { estimateClinicDepositExit } from "../src/lib/tools/clinic-deposit-exit.ts";
import { estimateHelperLevyFinalMonth } from "../src/lib/tools/helper-levy-final-month.ts";
import { estimateBankStatementArchive } from "../src/lib/tools/bank-statement-archive.ts";
import { estimateSetupCash } from "../src/lib/tools/setup-cash.ts";
import { estimateCpfWithdrawal } from "../src/lib/tools/cpf-withdrawal.ts";
import { estimateIr21Withhold } from "../src/lib/tools/ir21-withhold.ts";
import { estimateLeaseNotice } from "../src/lib/tools/lease-notice.ts";
import { estimateForeignLicenceClock } from "../src/lib/tools/foreign-licence-clock.ts";
import { estimateIpaWindow } from "../src/lib/tools/ipa-window.ts";
import { estimateSchoolWithdrawalNotice } from "../src/lib/tools/school-withdrawal.ts";
import { estimateHdbRenoDeposit } from "../src/lib/tools/hdb-reno-deposit.ts";
import { estimateCarCoeExit } from "../src/lib/tools/car-coe-exit.ts";
import { estimateClubDepositExit } from "../src/lib/tools/club-deposit-exit.ts";
import { estimateDrivingInsuranceGap } from "../src/lib/tools/driving-insurance-gap.ts";
import { estimateFibreBroadbandEtf } from "../src/lib/tools/fibre-broadband-etf.ts";
import { estimateInsurancePortability } from "../src/lib/tools/insurance-portability-float.ts";
import { estimateFdwLevy, FDW_LEVY_BANDS } from "../src/lib/tools/fdw-levy.ts";
import { todaySgt } from "../src/lib/tools/_today.ts";
import { estimatePetQuarantineFloat } from "../src/lib/tools/pet-quarantine-float.ts";
import { estimatePharmacyLastRefillFloat } from "../src/lib/tools/pharmacy-last-refill-float.ts";
import { estimateSchoolBusLastWeekFloat } from "../src/lib/tools/school-bus-last-week-float.ts";
import { estimateSchoolLeaversFee } from "../src/lib/tools/school-leavers-fee.ts";
import { estimateSchoolDepositClawback } from "../src/lib/tools/school-deposit-clawback.ts";
import { estimateSimOtpKeep } from "../src/lib/tools/sim-otp-keep.ts";
import { estimateStorageMonths } from "../src/lib/tools/storage-months.ts";
import { estimateAgentCommission } from "../src/lib/tools/agent-commission.ts";

describe("lease-duty (IRAS rules)", () => {
  it("charges 0.4% of total rent for a 24-month lease", () => {
    const r = estimateLeaseDuty({ monthlyRent: 6800, leaseMonths: 24, otherMonthly: 0 });
    assert.equal(r.totalConsideration, 163200);
    assert.equal(r.duty, 652);
    assert.equal(r.exempt, false);
  });
  it("uses 4x AAR for leases over 4 years", () => {
    const r = estimateLeaseDuty({ monthlyRent: 5000, leaseMonths: 60, otherMonthly: 0 });
    assert.equal(r.dutyBase, 240000);
    assert.equal(r.duty, 960);
    assert.equal(r.longLease, true);
  });
  it("exempts AAR at or under S$1,000", () => {
    const r = estimateLeaseDuty({ monthlyRent: 80, leaseMonths: 12, otherMonthly: 0 });
    assert.equal(r.duty, 0);
    assert.equal(r.exempt, true);
  });
  it("sanitizes negative inputs", () => {
    const r = estimateLeaseDuty({ monthlyRent: -500, leaseMonths: -3, otherMonthly: -1 });
    assert.equal(r.duty, 0);
  });
});

describe("ep-threshold (MOM tables)", () => {
  it("returns the published floors", () => {
    assert.equal(estimateEpMinimum(23, "general", "current").minimum, 5600);
    assert.equal(estimateEpMinimum(45, "general", "current").minimum, 10700);
    assert.equal(estimateEpMinimum(23, "financial", "current").minimum, 6200);
    assert.equal(estimateEpMinimum(23, "general", "from-2027").minimum, 6000);
  });
  it("clamps out-of-range ages", () => {
    assert.equal(estimateEpMinimum(17, "general", "current").minimum, 5600);
    assert.equal(estimateEpMinimum(99, "general", "current").minimum, 10700);
  });
});

describe("col", () => {
  it("sums the couple expat-typical band", () => {
    const r = estimateMonthlyCol({
      household: "couple",
      housing: "expat-typical",
      internationalSchool: false,
      domesticHelp: false,
    });
    assert.equal(r.total, 4500 + 1200 + 280 + 220);
    assert.equal(r.schooling, 0);
  });
  it("adds schooling and helper for families", () => {
    const r = estimateMonthlyCol({
      household: "family-two-children",
      housing: "modest",
      internationalSchool: true,
      domesticHelp: true,
    });
    assert.equal(r.schooling, 5200);
    assert.equal(r.domesticHelp, 1200);
  });
});

describe("tax-residency day counts", () => {
  it("counts a full year as clearing 183 days", () => {
    const r = estimateTaxResidencyDays({
      calendarYear: 2025,
      presenceStart: "2025-01-01",
      presenceEnd: "2025-12-31",
      creditedAwayDays: 0,
    });
    assert.equal(r.daysCounted, 365);
    assert.equal(r.clears183, true);
    assert.equal(r.yearOfAssessment, 2026);
  });
  it("rejects invalid dates without crashing", () => {
    const r = estimateTaxResidencyDays({
      calendarYear: 2025,
      presenceStart: "not-a-date",
      presenceEnd: "2025-12-31",
      creditedAwayDays: 0,
    });
    assert.equal(r.daysCounted, 0);
    assert.equal(r.clears183, false);
  });
  it("clamps windows to the calendar year", () => {
    const r = estimateTaxResidencyDays({
      calendarYear: 2025,
      presenceStart: "2024-06-01",
      presenceEnd: "2026-06-01",
      creditedAwayDays: 0,
    });
    assert.equal(r.daysCounted, 365);
  });
});

describe("school bond double-count fixes", () => {
  it("cca damage-hold deducts damage once", () => {
    const r = estimateSchoolCcaKitBond({
      mode: "damage-hold",
      bondSgd: 500,
      overdueDays: 0,
      overduePerDaySgd: 0,
      damageSgd: 100,
      adminFeeSgd: 0,
    });
    assert.equal(r.cashInSgd, 400);
    assert.equal(r.cashOutSgd, 0);
    assert.equal(r.netSketchSgd, 400);
  });
  it("cca lost-forfeit keeps bond out of cash-out", () => {
    const r = estimateSchoolCcaKitBond({
      mode: "lost-forfeit",
      bondSgd: 500,
      overdueDays: 0,
      overduePerDaySgd: 0,
      damageSgd: 200,
      adminFeeSgd: 50,
    });
    assert.equal(r.cashInSgd, 0);
    assert.equal(r.cashOutSgd, 250);
    assert.equal(r.netSketchSgd, -250);
  });
  it("device damage-hold deducts damage once", () => {
    const r = estimateSchoolDeviceBond({
      mode: "damage-hold",
      bondSgd: 500,
      overdueDays: 0,
      overduePerDaySgd: 0,
      damageSgd: 100,
      adminFeeSgd: 0,
    });
    assert.equal(r.cashInSgd, 400);
    assert.equal(r.cashOutSgd, 0);
  });
  it("rejects invalid modes", () => {
    const r = estimateSchoolDeviceBond({
      // @ts-expect-error tampered input
      mode: "bogus",
      bondSgd: 500,
      overdueDays: 0,
      overduePerDaySgd: 0,
      damageSgd: 0,
      adminFeeSgd: 0,
    });
    assert.equal(r.mode, "full-return");
  });
});

describe("exam-ib and tuition nets", () => {
  it("exam partial-hold invoices penalties above the deposit", () => {
    const r = estimateSchoolExamIbDeposit({
      mode: "partial-hold",
      depositSgd: 1000,
      sittingFeeSgd: 0,
      adminFeeSgd: 100,
      lateCancelSgd: 1200,
      weeksToRefundClose: 4,
    });
    assert.equal(r.cashInSgd, 0);
    assert.equal(r.cashOutSgd, 300);
  });
  it("exam partial-hold deducts the hold from cash-in only", () => {
    const r = estimateSchoolExamIbDeposit({
      mode: "partial-hold",
      depositSgd: 1000,
      sittingFeeSgd: 0,
      adminFeeSgd: 100,
      lateCancelSgd: 200,
      weeksToRefundClose: 4,
    });
    assert.equal(r.cashInSgd, 700);
    assert.equal(r.cashOutSgd, 0);
    assert.equal(r.netSketchSgd, 700);
  });
  it("exam full-forfeit excludes the deposit from cash-out", () => {
    const r = estimateSchoolExamIbDeposit({
      mode: "full-forfeit",
      depositSgd: 1000,
      sittingFeeSgd: 200,
      adminFeeSgd: 50,
      lateCancelSgd: 100,
      weeksToRefundClose: 0,
    });
    assert.equal(r.cashOutSgd, 350);
  });
  it("tuition notice-partial nets dues against unused credits once", () => {
    const r = estimateTuitionCentreBond({
      mode: "notice-partial",
      bondSgd: 1000,
      unusedPackageSgd: 2000,
      noticeFeeSgd: 0,
      materialsHoldSgd: 0,
      noticeMonths: 2,
      monthlyPackageSgd: 500,
    });
    assert.equal(r.cashInSgd, 2000);
    assert.equal(r.cashOutSgd, 0);
  });
});

describe("signed nets and validation", () => {
  it("clinic forfeit excludes deposit and reports a negative net", () => {
    const r = estimateClinicDepositExit({
      mode: "forfeit-hold",
      depositSgd: 500,
      unusedPackageSgd: 200,
      noShowFeeSgd: 50,
      recordsFeeSgd: 0,
      openBalanceSgd: 0,
    });
    assert.equal(r.cashOutSgd, 50);
    assert.equal(r.netSketchSgd, -50);
  });
  it("helper-levy net is a signed cash-out", () => {
    const r = estimateHelperLevyFinalMonth({
      mode: "keep-through-month",
      monthlyLevySgd: 60,
      daysEmployed: 30,
      daysInMonth: 30,
      adminFeeSgd: 0,
      waiverClawbackSgd: 0,
    });
    assert.equal(r.cashOutSgd, 60);
    assert.equal(r.netSketchSgd, -60);
  });
  it("bank rush with no gap charges nothing", () => {
    const r = estimateBankStatementArchive({
      mode: "rush-courier",
      monthsNeeded: 5,
      monthsOnHand: 5,
      reprintFeeSgd: 10,
      rushFeeSgd: 25,
      weeksToClose: 4,
    });
    assert.equal(r.monthsGap, 0);
    assert.equal(r.cashOutSgd, 0);
  });
  it("setup-cash sanitizes NaN and whitelists lease years", () => {
    const bad = estimateSetupCash({
      monthlyRent: NaN,
      leaseYears: 5,
      depositMonths: NaN,
      agentMonths: NaN,
      tempHousingWeeks: NaN,
      tempHousingWeekly: NaN,
      miscBuffer: NaN,
    });
    assert.equal(bad.total, 0);
    const r = estimateSetupCash({
      monthlyRent: 5000,
      leaseYears: 5,
      depositMonths: 2,
      agentMonths: 1,
      tempHousingWeeks: 0,
      tempHousingWeekly: 0,
      miscBuffer: 0,
    });
    assert.equal(r.total, 5000 + 10000 + 5000 + Math.floor(5000 * 24 * 0.004));
  });
  it("cpf falls back to preset on infinite custom windows", () => {
    const r = estimateCpfWithdrawal({
      departureDate: "2026-12-01",
      windowId: "typical",
      customDays: Infinity,
    });
    assert.equal(r.processDays, 30);
    assert.match(r.applyBy ?? "", /^\d{4}-\d{2}-\d{2}$/);
  });
  it("ir21 falls back to preset on infinite custom windows", () => {
    const r = estimateIr21Withhold({
      cessationDate: "2026-12-01",
      windowId: "typical",
      customDays: Infinity,
    });
    assert.equal(r.clearDays, 30);
    assert.match(r.estimatedRelease ?? "", /^\d{4}-\d{2}-\d{2}$/);
  });
  it("lease-notice falls back on NaN months", () => {
    const r = estimateLeaseNotice({
      leaseStart: "2025-01-15",
      leaseMonths: NaN,
      lockInMonths: NaN,
      noticeMonths: NaN,
      targetEnd: "2026-03-15",
    });
    assert.match(r.leaseEnd ?? "", /^\d{4}-\d{2}-\d{2}$/);
  });
  it("school-bus rounds once at the end", () => {
    const r = estimateSchoolBusLastWeekFloat({
      mode: "ride-through",
      weeklyFeeSgd: 99,
      rideDaysLeft: 3,
      noticeDaysShort: 0,
      cancelFeeSgd: 0,
      siblingFeeSgd: 0,
    });
    assert.equal(r.rideCostSgd, 59);
  });
  it("school-bus caps ride days at a week", () => {
    const r = estimateSchoolBusLastWeekFloat({
      mode: "ride-through",
      weeklyFeeSgd: 100,
      rideDaysLeft: 30,
      noticeDaysShort: 0,
      cancelFeeSgd: 0,
      siblingFeeSgd: 0,
    });
    assert.equal(r.rideDaysLeft, 7);
  });
  it("school-withdrawal rejects NaN weeks", () => {
    const r = estimateSchoolWithdrawalNotice({
      noticeWeeks: NaN,
      lastAttendance: "2026-11-01",
    });
    assert.equal(r.lastAttendance, null);
  });
  it("hdb-reno treats explicit 0 defect as zero, missing as 25%", () => {
    const zero = estimateHdbRenoDeposit({
      depositSgd: 500,
      holdDays: 30,
      defectCostSgd: 0,
      inspectionDate: "2026-10-01",
      outcome: "minor-defects",
    });
    assert.equal(zero.atRiskSgd, 0);
    const missing = estimateHdbRenoDeposit({
      depositSgd: 500,
      holdDays: 30,
      // @ts-expect-error missing input
      defectCostSgd: undefined,
      inspectionDate: "2026-10-01",
      outcome: "minor-defects",
    });
    assert.equal(missing.atRiskSgd, 125);
  });
  it("car-coe export adds no phantom buffer on zero fees", () => {
    const r = estimateCarCoeExit({
      mode: "export-scrap",
      saleProceedsSgd: 0,
      rebateSketchSgd: 20000,
      loanBalanceSgd: 0,
      exitFeesSgd: 0,
      prepaidMonths: 0,
      prepaidMonthlySgd: 0,
    });
    assert.equal(r.cashOutSgd, 0);
  });
  it("driving-insurance allows a zero-day gap and recommends the min", () => {
    const r = estimateDrivingInsuranceGap({
      mode: "daily-float",
      gapDays: 0,
      dailyFloatSgd: 60,
      extendCostSgd: 120,
      grabBudgetSgd: 200,
      addonSgd: 0,
    });
    assert.equal(r.gapDays, 0);
    assert.equal(r.altCostSgd, 0);
  });
  it("sim rejects invalid strategies", () => {
    const r = estimateSimOtpKeep({
      monthsNeeded: 6,
      prepaidMonthlySgd: 15,
      postpaidMonthlySgd: 30,
      portOneTimeSgd: 40,
      replaceOneTimeSgd: 20,
      // @ts-expect-error tampered input
      strategy: "bogus",
    });
    assert.equal(r.strategy, "keep-prepaid");
  });
  it("storage and commission neutralize Infinity", () => {
    const s = estimateStorageMonths({
      bandId: "locker",
      months: Infinity,
      addOnMonthly: 0,
      accessFee: 0,
    });
    assert.equal(s.total, 0);
    const a = estimateAgentCommission({
      monthlyRent: Infinity,
      feeMonths: 1,
      side: "tenant",
      includeGst: false,
    });
    assert.equal(a.total, 0);
  });
  it("clawback falls back to notice-protected on bad mode", () => {
    const r = estimateSchoolDepositClawback({
      // @ts-expect-error tampered input
      mode: "bogus",
      depositSgd: 1000,
      remainingTuitionSgd: 5000,
      forfeitFraction: 0.5,
      termRemainingFraction: 0.5,
    });
    assert.equal(r.mode, "notice-protected");
  });
  it("pharmacy travel-fill with no gap bills only the family add-on", () => {
    const r = estimatePharmacyLastRefillFloat({
      mode: "travel-fill",
      daysCoverNeeded: 10,
      daysOnHand: 10,
      refillFeeSgd: 50,
      privatePremiumSgd: 40,
      familyAddOnSgd: 30,
    });
    assert.equal(r.cashOutSgd, 30);
  });
  it("foreign-licence handles missing start without crashing", () => {
    const r = estimateForeignLicenceClock({
      // @ts-expect-error missing input
      startDate: undefined,
      windowId: "arrive-12",
    });
    assert.equal(r.startDate, null);
  });
  it("fibre recommends the true minimum", () => {
    const r = estimateFibreBroadbandEtf({
      mode: "serve-notice",
      monthsRemaining: 1,
      monthlyFeeSgd: 50,
      etfSgd: 100,
      transferFeeSgd: 20,
      rebateClawbackSgd: 0,
    });
    assert.equal(r.recommended, "transfer-takeover");
    assert.equal(r.altCostSgd, 20);
  });
  it("leavers uses the true floor for the delta", () => {
    const r = estimateSchoolLeaversFee({
      mode: "core-only",
      coreFeeSgd: 500,
      yearbookSgd: 200,
      optionalSgd: 0,
      departingChildren: 1,
      siblingDiscountFraction: 0,
    });
    assert.equal(r.altCostSgd, 500);
    assert.equal(r.savingsVsAltSgd, 0);
  });
  it("pet keeps direct-export recommended when quarantine is waived", () => {
    const r = estimatePetQuarantineFloat({
      mode: "direct-export",
      vetDocsSgd: 500,
      travelSgd: 2000,
      quarantineDays: 20,
      quarantineDailySgd: 100,
      bufferSgd: 300,
    });
    assert.equal(r.recommended, "direct-export");
  });
  it("ipa measures days-until-deadline from today", () => {
    const r = estimateIpaWindow({
      ipaDate: "2026-01-01",
      entryDate: "2026-02-01",
      issueDate: "2026-02-02",
    });
    assert.equal(r.deadline, "2026-07-01");
    assert.equal(typeof r.daysUntilDeadline, "number");
  });
  it("insurance recommends the true minimum", () => {
    const r = estimateInsurancePortability({
      mode: "extend-sg",
      gapDays: 70,
      extendCostSgd: 300,
      bridgeCostSgd: 200,
      cancelFeeSgd: 50,
      destinationStartSgd: 100,
    });
    assert.equal(r.recommended, "cancel-and-start");
    assert.equal(r.altCostSgd, 150);
  });
  it("club validates modes and drops forfeited deposits from spend", () => {
    const r = estimateClubDepositExit({
      // @ts-expect-error tampered input
      mode: "bogus",
      depositSgd: 1000,
      monthlyDuesSgd: 200,
      noticeMonths: 2,
      adminFeeSgd: 50,
      prepaidMonthsBurn: 0,
    });
    assert.equal(r.mode, "full-refund");
    assert.equal(r.cashInSgd, 1000);
  });
});

// Regression tests for the three money bugs found in the 2026-09-19 tool audit.
// Each asserts the corrected behaviour against the authority that defines it.
describe("audit regressions (money-critical)", () => {
  it("helper levy bills an incomplete month at MOM's daily rate, not days-in-month", () => {
    // MOM publishes the daily rate as ceil(monthly x 12 / 365) to the cent:
    // $300 -> $9.87, $450 -> $14.80, $60 -> $1.98.
    const feb = estimateHelperLevyFinalMonth({
      mode: "mid-month-cancel",
      monthlyLevySgd: 450,
      daysInMonth: 28,
      daysEmployed: 20,
      adminFeeSgd: 0,
      waiverClawbackSgd: 0,
    });
    // 14.80 x 20 = 296.00. Days-in-month proration gave 321 and overcharged.
    assert.equal(feb.proRataLevySgd, 296);

    const long = estimateHelperLevyFinalMonth({
      mode: "transfer-out",
      monthlyLevySgd: 300,
      daysInMonth: 31,
      daysEmployed: 30,
      adminFeeSgd: 0,
      waiverClawbackSgd: 0,
    });
    // 9.87 x 30 = 296.10. Proration gave 290 and undercharged.
    assert.equal(long.proRataLevySgd, 296);
  });

  it("helper levy never charges more than the monthly rate for a full month", () => {
    // 9.87 x 31 = 306.97 would exceed the $300 month MOM actually bills.
    const full = estimateHelperLevyFinalMonth({
      mode: "mid-month-cancel",
      monthlyLevySgd: 300,
      daysInMonth: 31,
      daysEmployed: 31,
      adminFeeSgd: 0,
      waiverClawbackSgd: 0,
    });
    assert.equal(full.proRataLevySgd, 300);
  });

  it("tuition notice dues beyond unused credit are billed, not forgiven", () => {
    const r = estimateTuitionCentreBond({
      mode: "notice-partial",
      bondSgd: 300,
      unusedPackageSgd: 0,
      noticeFeeSgd: 50,
      materialsHoldSgd: 40,
      noticeMonths: 2,
      monthlyPackageSgd: 400,
    });
    // bond 300 in, fees 90 + uncovered notice 800 out. Clamping the residual to
    // zero reported +210, i.e. money coming back while the parent owed 590.
    assert.equal(r.netSketchSgd, -590);
    assert.ok(r.netSketchSgd < 0, "parent is out of pocket, not in credit");
  });

  it("tuition netting still does not double-charge when credit covers the dues", () => {
    const r = estimateTuitionCentreBond({
      mode: "notice-partial",
      bondSgd: 300,
      unusedPackageSgd: 1000,
      noticeFeeSgd: 50,
      materialsHoldSgd: 40,
      noticeMonths: 1,
      monthlyPackageSgd: 400,
    });
    // credit 1000 - dues 400 = 600 returned with the 300 bond, less 90 of fees.
    assert.equal(r.cashInSgd, 900);
    assert.equal(r.cashOutSgd, 90);
  });

  it("insurance gap-bridge is priced at the bridge quote, with no cancel-fee handicap", () => {
    const r = estimateInsurancePortability({
      mode: "gap-bridge",
      gapDays: 30,
      extendCostSgd: 450,
      bridgeCostSgd: 220,
      cancelFeeSgd: 1000,
      destinationStartSgd: 350,
    });
    // Adding 25% of the 1000 forfeit made this 470 and recommended extend-sg,
    // steering users off the genuinely cheapest path.
    assert.equal(r.pathCostSgd, 220);
    assert.equal(r.recommended, "gap-bridge");
  });

  it("fdw levy multiplies the selected band and rejects nonsense months", () => {
    const band = FDW_LEVY_BANDS.find((b) => b.id === "full-first");
    const r = estimateFdwLevy({ bandId: "full-first", months: 6 });
    assert.equal(r.total, band.monthly * 6);
    const bad = estimateFdwLevy({ bandId: "full-first", months: -3 });
    assert.equal(bad.months, 0);
    assert.equal(bad.total, 0);
  });
});

describe("todaySgt (deadline anchor)", () => {
  it("matches Singapore's calendar date, not the UTC one", () => {
    // Independent source of truth: ask Intl what the date is in Singapore.
    const parts = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Singapore",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date());
    assert.equal(todaySgt().toISOString().slice(0, 10), parts);
  });

  it("is a pure midnight-UTC date stamp, so day arithmetic stays exact", () => {
    const d = todaySgt();
    assert.equal(d.getUTCHours(), 0);
    assert.equal(d.getUTCMinutes(), 0);
    assert.equal(d.getUTCSeconds(), 0);
    assert.equal(d.getUTCMilliseconds(), 0);
  });

  it("would have differed from the old UTC-date behaviour before 08:00 SGT", () => {
    // Reproduce both rules against a fixed instant: 2026-03-02T01:30 SGT,
    // which is still 2026-03-01 in UTC. The old code returned 1 March and
    // handed the user an extra day.
    const instant = Date.UTC(2026, 2, 1, 17, 30); // 2026-03-02 01:30 +08
    const oldRule = new Date(instant);
    const oldStamp = new Date(
      Date.UTC(oldRule.getUTCFullYear(), oldRule.getUTCMonth(), oldRule.getUTCDate()),
    );
    const sgt = new Date(instant + 8 * 3_600_000);
    const newStamp = new Date(
      Date.UTC(sgt.getUTCFullYear(), sgt.getUTCMonth(), sgt.getUTCDate()),
    );
    assert.equal(oldStamp.toISOString().slice(0, 10), "2026-03-01");
    assert.equal(newStamp.toISOString().slice(0, 10), "2026-03-02");
  });
});

describe("audit regressions (phantom costs and clamped residuals)", () => {
  it("port-out is priced at the port fee, not a slice of the replace fee", () => {
    const r = estimateSimOtpKeep({
      strategy: "port-out",
      monthsNeeded: 3,
      prepaidMonthlySgd: 15,
      postpaidMonthlySgd: 40,
      portOneTimeSgd: 30,
      replaceOneTimeSgd: 200,
    });
    // Adding 25% of the unrelated 200 replace fee made this 80.
    assert.equal(r.keepCostSgd, 30);
  });

  it("the rebate clawback sits on the ETF path, not the transfer path", () => {
    const transfer = estimateFibreBroadbandEtf({
      mode: "transfer-takeover",
      monthsRemaining: 6,
      monthlyFeeSgd: 50,
      etfSgd: 200,
      transferFeeSgd: 60,
      rebateClawbackSgd: 120,
    });
    assert.equal(transfer.pathCostSgd, 60);

    const etf = estimateFibreBroadbandEtf({
      mode: "pay-etf",
      monthsRemaining: 6,
      monthlyFeeSgd: 50,
      etfSgd: 200,
      transferFeeSgd: 60,
      rebateClawbackSgd: 120,
    });
    assert.equal(etf.pathCostSgd, 320);
  });

  it("device damage beyond the bond is still billed", () => {
    const r = estimateSchoolDeviceBond({
      mode: "damage-hold",
      bondSgd: 300,
      damageSgd: 900,
      adminFeeSgd: 0,
      overdueDays: 0,
      overdueDailySgd: 0,
    });
    // Clamping the excess made net stop moving once damage passed the bond.
    assert.equal(r.netSketchSgd, -600);
  });

  it("cca kit damage beyond the bond is still billed", () => {
    const r = estimateSchoolCcaKitBond({
      mode: "damage-hold",
      bondSgd: 200,
      damageSgd: 800,
      adminFeeSgd: 0,
      overdueDays: 0,
      overdueDailySgd: 0,
    });
    assert.equal(r.netSketchSgd, -600);
  });
});

describe("audit regressions (rate precision)", () => {
  it("a per-day fee keeps its cents before it is multiplied", () => {
    const r = estimateSchoolDeviceBond({
      mode: "full-return",
      bondSgd: 300,
      damageSgd: 0,
      adminFeeSgd: 0,
      overdueDays: 10,
      overduePerDaySgd: 2.5,
    });
    // Rounding the rate to $3 first billed 30 for 10 days at $2.50.
    assert.equal(r.cashOutSgd, 25);
  });

  it("a monthly fee keeps its cents across a 36-month term", () => {
    const r = estimateFibreBroadbandEtf({
      mode: "serve-notice",
      monthsRemaining: 36,
      monthlyFeeSgd: 49.9,
      etfSgd: 0,
      transferFeeSgd: 0,
      rebateClawbackSgd: 0,
    });
    // $49.90 rounded to $50 first overstated a 3-year term by about 4 dollars.
    assert.equal(r.pathCostSgd, 1796);
  });

  it("a per-statement fee keeps its cents", () => {
    const r = estimateBankStatementArchive({
      mode: "branch-reprint",
      monthsNeeded: 12,
      monthsOnHand: 0,
      reprintFeeSgd: 5.35,
      rushFeeSgd: 0,
      weeksToClose: 2,
    });
    // $5.35 rounded to $5 first understated 12 statements by 4 dollars.
    assert.equal(r.cashOutSgd, 64);
  });
});
