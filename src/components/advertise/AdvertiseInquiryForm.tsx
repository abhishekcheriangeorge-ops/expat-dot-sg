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

const inputClass =
  "mt-1.5 min-h-[48px] w-full rounded-sm border border-ink/20 bg-paper-elevated px-4 py-3 text-ink placeholder:text-ink-faint focus:border-tungsten focus:outline-2 focus:outline-tungsten";

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

    if (!payload.interest) {
      setError("Please choose what you are interested in.");
      setState("error");
      return;
    }

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
        className="rounded-sm border border-ink/15 bg-canopy-deep px-6 py-8 text-paper"
      >
        <p className="font-display text-2xl font-medium">Inquiry received</p>
        <p className="mt-3 text-sm leading-relaxed text-[#cfc8b4]">
          Thanks — we will reply with availability, rates, and disclosure rules.
          Editorial integrity is non-negotiable; we will never present your
          placement as independent advice.
        </p>
        <button
          type="button"
          className="mt-6 rounded-sm px-2 py-2.5 text-sm font-semibold text-tungsten-soft underline underline-offset-4 hover:text-paper focus-visible:outline-2 focus-visible:outline-tungsten"
          onClick={() => setState("idle")}
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-ink">
            Name <span aria-hidden="true">*</span>
          </span>
          <input
            name="name"
            required
            autoComplete="name"
            className={inputClass}
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">
            Work email <span aria-hidden="true">*</span>
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </label>
      </div>

      <label className="block text-sm">
        <span className="font-medium text-ink">Company / brand</span>
        <input
          name="company"
          autoComplete="organization"
          className={inputClass}
        />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-ink">
            Interest <span aria-hidden="true">*</span>
          </span>
          <select name="interest" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select…
            </option>
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">Budget band (optional)</span>
          <select name="budgetBand" defaultValue="" className={inputClass}>
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
        <span className="font-medium text-ink">
          Message <span aria-hidden="true">*</span>
        </span>
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Audience, category, timing, and anything we should know."
          className={inputClass}
        />
      </label>

      {error ? (
        <p role="alert" className="text-sm font-medium text-sponsored">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === "submitting"}
        aria-busy={state === "submitting"}
        className="inline-flex min-h-[48px] items-center rounded-sm bg-ink px-8 py-3.5 text-[13px] font-bold uppercase tracking-[0.06em] text-paper transition-colors hover:bg-canopy disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tungsten"
      >
        {state === "submitting" ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
