/** Pet quarantine / re-export cash float sketch — orientation, not AVS or airline advice */

export const PET_QUARANTINE_LAST_REVIEWED = "2026-09-15";
export const PET_QUARANTINE_NOTE =
  "Destination import rules, AVS export fees, titres, crates, and airline pet charges differ by route. This sketch only totals known cash lines so packing week keeps a float — not a booking quote.";

export type PetFloatMode = "direct-export" | "quarantine-arrival" | "delay-hold";

export type PetQuarantineInputs = {
  mode: PetFloatMode;
  /** AVS / vet / titre / microchip cash already known (SGD) */
  vetDocsSgd: number;
  /** Crate + airline pet fee sketch (SGD) */
  travelSgd: number;
  /** Destination quarantine / kennel days if required */
  quarantineDays: number;
  /** Daily quarantine / kennel rate sketch (SGD) */
  quarantineDailySgd: number;
  /** Contingency buffer for retests / delay (SGD) */
  bufferSgd: number;
};

export type PetQuarantineResult = {
  mode: PetFloatMode;
  quarantineDays: number;
  pathCostSgd: number;
  altCostSgd: number;
  savingsVsAltSgd: number;
  recommended: PetFloatMode;
  headline: string;
  note: string;
};

function money(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.round(n);
}

function clampDays(n: number): number {
  if (!Number.isFinite(n) || n < 0) return 0;
  return Math.min(180, Math.floor(n));
}

export function estimatePetQuarantineFloat(
  inputs: PetQuarantineInputs,
): PetQuarantineResult {
  const mode = inputs.mode;
  const vetDocsSgd = money(inputs.vetDocsSgd);
  const travelSgd = money(inputs.travelSgd);
  const quarantineDays = clampDays(inputs.quarantineDays);
  const quarantineDailySgd = money(inputs.quarantineDailySgd);
  const bufferSgd = money(inputs.bufferSgd);

  const quarantineTotal = money(quarantineDays * quarantineDailySgd);

  const costs: Record<PetFloatMode, number> = {
    "direct-export": money(vetDocsSgd + travelSgd + bufferSgd),
    "quarantine-arrival": money(
      vetDocsSgd + travelSgd + quarantineTotal + bufferSgd,
    ),
    "delay-hold": money(
      vetDocsSgd + travelSgd + quarantineTotal + bufferSgd * 2,
    ),
  };

  let recommended: PetFloatMode = "direct-export";
  let best = costs["direct-export"];
  (Object.keys(costs) as PetFloatMode[]).forEach((key) => {
    if (costs[key] < best) {
      best = costs[key];
      recommended = key;
    }
  });

  if (quarantineDays >= 14 && mode !== "direct-export") {
    // Prefer pricing quarantine-arrival honestly when days are material
    if (costs["quarantine-arrival"] <= costs["delay-hold"]) {
      recommended = "quarantine-arrival";
      best = costs["quarantine-arrival"];
    }
  }

  const pathCostSgd = costs[mode];
  const altCostSgd = costs[recommended];
  const savingsVsAltSgd = money(pathCostSgd - altCostSgd);

  const labels: Record<PetFloatMode, string> = {
    "direct-export": "Direct export · no arrival quarantine sketched",
    "quarantine-arrival": "Arrival quarantine / kennel days priced in",
    "delay-hold": "Delay / retest hold with doubled buffer",
  };

  let headline = `${labels[mode]} · sketch ${pathCostSgd} SGD`;
  let note = PET_QUARANTINE_NOTE;
  if (mode !== recommended) {
    headline += ` · cheaper sketch: ${labels[recommended]}`;
  }
  if (mode === "direct-export" && quarantineDays > 0) {
    note =
      "You entered quarantine days but chose direct-export — confirm the destination actually waives quarantine before you under-float.";
  } else if (mode === "delay-hold") {
    note =
      "Delay holds often mean a second titre or missed airline slot. Keep the doubled buffer until the export cert is in hand.";
  } else if (quarantineDays >= 30) {
    note =
      "Long quarantine stretches can exceed crate + ticket cash — re-price kennel rates before you resign.";
  }

  return {
    mode,
    quarantineDays,
    pathCostSgd,
    altCostSgd,
    savingsVsAltSgd,
    recommended,
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
