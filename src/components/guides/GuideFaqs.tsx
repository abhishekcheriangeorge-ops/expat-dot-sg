import type { GuideFaq } from "@/lib/content/schemas";

type GuideFaqsProps = {
  faqs: GuideFaq[];
};

export function GuideFaqs({ faqs }: GuideFaqsProps) {
  if (!faqs.length) return null;

  return (
    <section
      aria-labelledby="guide-faq-heading"
      className="border-t border-ink pt-10"
    >
      <h2
        id="guide-faq-heading"
        className="font-display text-2xl font-medium tracking-tight text-ink"
      >
        Questions, answered
      </h2>
      <dl className="mt-6 space-y-8">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dt className="font-display text-xl font-medium text-ink">
              {faq.question}
            </dt>
            <dd
              data-speakable
              className="mt-2 max-w-prose text-[15px] leading-relaxed text-ink-muted"
            >
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
