/** Tenancy agent commission sketch — market norms, not CEA advice */

export const AGENT_COMMISSION_LAST_REVIEWED = "2026-09-15";
export const AGENT_COMMISSION_NOTE =
  "Residential rental commissions are contractual market practice (often negotiated). This sketch multiplies monthly rent × fee months and optional GST — confirm the LOI / exclusive agreement in writing.";

export const GST_RATE = 0.09;

export type AgentSide = "tenant" | "landlord";

export type AgentCommissionInputs = {
  /** Monthly rent in SGD */
  monthlyRent: number;
  /** Fee expressed as months of rent (e.g. 0.5, 1, 1.5) */
  feeMonths: number;
  /** Which side is paying this agent */
  side: AgentSide;
  /** Whether to add 9% GST on the commission */
  includeGst: boolean;
};

export type AgentCommissionResult = {
  monthlyRent: number;
  feeMonths: number;
  side: AgentSide;
  baseFee: number;
  gst: number;
  total: number;
  includeGst: boolean;
  formulaLabel: string;
  note: string;
};

export function estimateAgentCommission(
  inputs: AgentCommissionInputs,
): AgentCommissionResult {
  const rent = Math.max(0, Number(inputs.monthlyRent) || 0);
  const months = Math.max(0, Number(inputs.feeMonths) || 0);
  const baseFee = Math.round(rent * months * 100) / 100;
  const gst = inputs.includeGst
    ? Math.round(baseFee * GST_RATE * 100) / 100
    : 0;
  const total = Math.round((baseFee + gst) * 100) / 100;

  const sideLabel =
    inputs.side === "tenant" ? "tenant-side agent" : "landlord-side agent";
  const gstLabel = inputs.includeGst ? " + 9% GST" : " (ex-GST)";

  let note = AGENT_COMMISSION_NOTE;
  if (rent <= 0 || months <= 0) {
    note = "Enter a positive monthly rent and fee in months of rent.";
  } else if (inputs.side === "tenant" && months > 1) {
    note =
      "Tenant-side fees above one month of rent are uncommon on ordinary 1–2 year leases — re-read the exclusive / co-broke terms before you pay.";
  }

  return {
    monthlyRent: rent,
    feeMonths: months,
    side: inputs.side,
    baseFee,
    gst,
    total,
    includeGst: inputs.includeGst,
    formulaLabel: `${sideLabel}: ${months} × monthly rent${gstLabel}`,
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
