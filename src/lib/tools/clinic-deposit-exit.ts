/** GP / dental / specialist clinic deposit exit sketch — orientation, not clinic advice */

export const CLINIC_DEPOSIT_LAST_REVIEWED = "2026-09-15";
export const CLINIC_DEPOSIT_NOTE =
  "Clinic and dental deposit, package, and prepayment rules differ by practice. This sketch only totals deposit return hope vs unused package value, no-show fees, and records-release holds so exit week keeps a float — not a bill.";

export type ClinicDepositMode =
  | "full-refund"
  | "package-offset"
  | "forfeit-hold";

export type ClinicDepositInputs = {
  mode: ClinicDepositMode;
  /** Refundable clinic / dental deposit hope (SGD) */
  depositSgd: number;
  /** Unused prepaid package / treatment credit (SGD) */
  unusedPackageSgd: number;
  /** No-show / late-cancel fees still open (SGD) */
  noShowFeeSgd: number;
  /** Medical records / transfer admin fee (SGD) */
  recordsFeeSgd: number;
  /** Outstanding consult balance before deposit release (SGD) */
  openBalanceSgd: number;
};

export type ClinicDepositResult = {
  mode: ClinicDepositMode;
  cashInSgd: number;
  cashOutSgd: number;
  netSketchSgd: number;
  headline: string;
  note: string;
};

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

export function estimateClinicDepositExit(
  inputs: ClinicDepositInputs,
): ClinicDepositResult {
  const mode = inputs.mode;
  const depositSgd = money(inputs.depositSgd);
  const unusedPackageSgd = money(inputs.unusedPackageSgd);
  const noShowFeeSgd = money(inputs.noShowFeeSgd);
  const recordsFeeSgd = money(inputs.recordsFeeSgd);
  const openBalanceSgd = money(inputs.openBalanceSgd);

  let cashInSgd = 0;
  let cashOutSgd = money(noShowFeeSgd + recordsFeeSgd + openBalanceSgd);

  if (mode === "full-refund") {
    cashInSgd = money(depositSgd + unusedPackageSgd);
  } else if (mode === "package-offset") {
    const offset = Math.min(unusedPackageSgd, openBalanceSgd + noShowFeeSgd);
    cashInSgd = money(depositSgd + unusedPackageSgd - offset);
    cashOutSgd = money(
      Math.max(0, noShowFeeSgd + recordsFeeSgd + openBalanceSgd - offset),
    );
  } else {
    cashInSgd = 0;
    cashOutSgd = money(
      depositSgd + unusedPackageSgd + noShowFeeSgd + recordsFeeSgd + openBalanceSgd,
    );
  }

  const netSketchSgd = money(cashInSgd - cashOutSgd);

  const labels: Record<ClinicDepositMode, string> = {
    "full-refund": "Full deposit + package hope",
    "package-offset": "Package offsets open fees",
    "forfeit-hold": "Deposit / package forfeit hold",
  };

  let headline = `${labels[mode]} · net sketch ${netSketchSgd} SGD`;
  let note = CLINIC_DEPOSIT_NOTE;
  if (mode === "full-refund" && openBalanceSgd > 0) {
    note =
      "Open consult balances often clear before deposit release — confirm the finance desk will net them, not hold the whole deposit.";
  } else if (mode === "forfeit-hold") {
    note =
      "Forfeit holds sometimes lift after records transfer completes. Ask for a written release date before you fly.";
  } else if (mode === "package-offset" && unusedPackageSgd < openBalanceSgd) {
    note =
      "Unused package credits may not fully cover open balances — keep a float for the residual.";
  }

  return {
    mode,
    cashInSgd,
    cashOutSgd,
    netSketchSgd,
    headline,
    note,
  };
}

export function formatSgd(amount: number): string {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
    maximumFractionDigits: 0,
  }).format(amount);
}
