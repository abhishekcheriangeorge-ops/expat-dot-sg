"use client";

import { useState, type FormEvent } from "react";
import type { AdvertiseInterest } from "@/lib/content/schemas";

const INTEREST_OPTIONS: { value: AdvertiseInterest; label: string }[] = [
  { value: "featured_listing", label: "Featured directory listing" },
  { value: "sponsored_post", label: "Sponsored post / advertorial" },
  { value: "newsletter", label: "Newsletter sponsorship" },
  { value: "category_sponsorship", label: "Category / guide slot" },
  { value: "other", label: "Something else" },
];

const BUDGET_OPTIONS = [
  "Exploring / under SGD 2k",
  "SGD 2k–5k",
  "SGD 5k–15k",
  "SGD 15k+",
  "Prefer not to say",
];

type FormState = "idle" | "submitting" | "success" | "error";

export function AdvertiseInquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      interest: String(data.get("interest") ?? "") as AdvertiseInterest,
      message: String(data.get("message") ?? "").trim(),
      budgetBand: String(data.get("budgetBand") ?? "").trim(),
      source: "advertise",
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { error?: string; ok?: boolean };
      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        setState("error");
        return;
      }
      form.reset();
      setState("success");
    } catch {
      setError("Network error. Please try again.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        role="status"
        className="border border-canopy-mist/40 bg-paper-elevated px-6 py-8"
      >
        <p className="font-display text-2xl text-canopy-deep">Inquiry received</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Thanks — we will reply with availability, rates, and disclosure rules.
          Editorial integrity is non-negotiable; we will never unmarked your
          placement as independent advice.
        </p>
        <button
          type="button"
          className="mt-6 text-sm font-medium text-canopy underline"
          onClick={() => setState("idle")}
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-ink">Name</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 w-full border border-fog bg-paper-elevated px-3 py-2.5 text-ink outline-none focus:border-canopy-mist"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">Work email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full border border-fog bg-paper-elevated px-3 py-2.5 text-ink outline-none focus:border-canopy-mist"
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="font-medium text-ink">Company / brand</span>
        <input
          name="company"
          autoComplete="organization"
          className="mt-1.5 w-full border border-fog bg-paper-elevated px-3 py-2.5 text-ink outline-none focus:border-canopy-mist"
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-ink">Interest</span>
          <select
            name="interest"
            required
            defaultValue="featured_listing"
            className="mt-1.5 w-full border border-fog bg-paper-elevated px-3 py-2.5 text-ink outline-none focus:border-canopy-mist"
          >
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">Budget band (optional)</span>
          <select
            name="budgetBand"
            defaultValue=""
            className="mt-1.5 w-full border border-fog bg-paper-elevated px-3 py-2.5 text-ink outline-none focus:border-canopy-mist"
          >
            <option value="">Select…</option>
            {BUDGET_OPTIONS.map((band) => (
              <option key={band} value={band}>
                {band}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm">
        <span className="font-medium text-ink">Message</span>
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Audience, category, timing, and anything we should know."
          className="mt-1.5 w-full border border-fog bg-paper-elevated px-3 py-2.5 text-ink outline-none focus:border-canopy-mist"
        />
      </label>

      {error ? (
        <p role="alert" className="text-sm text-sponsored">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center bg-canopy px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-canopy-mist disabled:opacity-60"
      >
        {state === "submitting" ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
