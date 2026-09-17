import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import type { LeavingPlaybook } from "@/lib/content";

type LeavingPlaybookViewProps = {
  playbook: LeavingPlaybook;
};

export function LeavingPlaybookView({ playbook }: LeavingPlaybookViewProps) {
  return (
    <div className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8">
      <FadeIn>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
          {playbook.summary}
        </p>
      </FadeIn>

      <Stagger className="mt-12 flex flex-col border-b border-ink">
        {playbook.sections.map((section, index) => (
          <StaggerItem
            key={section.id}
            className="grid gap-4 border-t border-ink/15 py-8 first:border-t-0 sm:grid-cols-[4rem_1fr]"
          >
            <p
              aria-hidden="true"
              className="font-display text-3xl font-medium text-tungsten"
            >
              {String(index + 1).padStart(2, "0")}
            </p>
            <div>
              <h2 className="font-display text-2xl font-medium tracking-tight text-ink">
                {section.title}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
                {section.body}
              </p>
              {section.bullets.length > 0 ? (
                <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
              {section.href ? (
                <Link
                  href={section.href}
                  className="mt-4 inline-block rounded-sm py-1.5 text-sm font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
                  {...(section.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  Official reference <span aria-hidden="true">→</span>
                </Link>
              ) : null}
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeIn className="mt-16 border-t border-ink pt-10">
        <p className="text-sm text-ink-faint">
          This playbook is editorial guidance, not legal or tax advice. Confirm
          current IRAS and MOM requirements before you act.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <Link
            href="/journeys/arriving"
            className="rounded-sm py-1.5 text-sm font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            <span aria-hidden="true">←</span> Arriving checklists
          </Link>
          <Link
            href="/journeys/between-jobs"
            className="rounded-sm py-1.5 text-sm font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Between-jobs playbook
          </Link>
          <Link
            href="/journeys/leaving"
            className="rounded-sm py-1.5 text-sm font-semibold text-canopy no-underline underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Leaving playbook
          </Link>
          <Link
            href="/tools"
            className="rounded-sm py-1.5 text-sm font-medium text-ink-muted no-underline hover:text-ink focus-visible:outline-2 focus-visible:outline-tungsten"
          >
            Supporting tools
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
