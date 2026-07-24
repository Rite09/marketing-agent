import SectionContainer from "@/components/layout/SectionContainer";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { processSteps } from "@/data/programs";

export default function Timeline() {
  return (
    <SectionContainer className="border-t border-[var(--color-border)] py-24 sm:py-28 lg:py-32">
      <SectionTitle
        eyebrow="HOW WE WORK"
        title="A simple, transparent process."
        description="No bloated decks, no guesswork. Clear steps that deliver outcomes from week one."
        titleClassName="max-w-[14ch]"
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step, index) => (
          <Reveal key={step.number} delay={index * 0.06}>
            <article className="h-full rounded-2xl border border-[var(--color-border)] bg-[rgba(16,21,31,0.92)] p-6 transition duration-300 hover:border-[rgba(45,104,255,0.35)]">
              <p className="text-[13px] font-semibold tracking-[0.18em] text-[var(--color-accent-soft)]">
                {step.number}
              </p>
              <h3 className="mt-5 text-[1.1rem] font-bold tracking-[-0.02em] text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.65] text-[var(--color-muted)]">
                {step.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
