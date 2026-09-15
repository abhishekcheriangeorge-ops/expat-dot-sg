import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import type { LeavingPlaybook } from "@/lib/content";

type LeavingPlaybookViewProps = {
  playbook: LeavingPlaybook;
};

export function LeavingPlaybookView({ playbook }: LeavingPlaybookViewProps) {
  return (
    <div
      className="mx-auto max-w-[var(--max-page)] px-5 py-14 sm:px-8"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <meta itemProp="name" content={playbook.title} />
      <meta itemProp="description" content={playbook.summary} />
      <FadeIn>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted">
          {playbook.summary}
        </p>
      </FadeIn>

      <Stagger className="mt-12 flex flex-col gap-12">
        {playbook.sections.map((section, index) => (
          <StaggerItem
            key={section.id}
            className="grid gap-4 sm:grid-cols-[4rem_1fr]"
            itemProp="step"
            itemScope
            itemType="https://schema.org/HowToStep"
          >
            <p className="font-display text-3xl text-tungsten/80">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div>
              <meta itemProp="position" content={String(index + 1)} />
              <h2
                className="font-display text-2xl text-ink"
                itemProp="name"
              >
                {section.title}
              </h2>
              <p
                className="mt-3 max-w-2xl leading-relaxed text-ink-muted"
                itemProp="text"
              >
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
                  className="mt-4 inline-block text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
                  {...(section.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  Official reference →
                </Link>
              ) : null}
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <FadeIn className="mt-16 border-t border-fog-soft pt-10">
        <p className="text-sm text-ink-faint">
          This playbook is editorial guidance, not legal or tax advice. Confirm
          current IRAS and MOM requirements before you act.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/journeys/arriving"
            className="text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            ← Arriving checklists
          </Link>
          <Link
            href="/journeys/between-jobs"
            className="text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Between-jobs playbook
          </Link>
          <Link
            href="/journeys/leaving"
            className="text-sm font-medium text-canopy no-underline hover:text-canopy-mist"
          >
            Leaving playbook
          </Link>
          <Link
            href="/tools"
            className="text-sm font-medium text-ink-muted no-underline hover:text-ink"
          >
            Supporting tools
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
