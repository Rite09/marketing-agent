import {
  Compass,
  LineChart,
  PenTool,
  Rocket,
} from "lucide-react";

import SectionContainer from "@/components/layout/SectionContainer";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { processSteps } from "@/data/programs";

const stepIcons = [Compass, PenTool, Rocket, LineChart];

export default function Timeline() {
  return (
    <SectionContainer className="section-grid border-t border-[var(--color-border)] py-20 sm:py-24 lg:py-28">
      <SectionTitle
        eyebrow="HOW WE WORK"
        title="A simple, transparent process."
        description="No bloated decks, no guesswork. Clear steps that deliver outcomes from week one."
        titleClassName="max-w-[14ch]"
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step, index) => {
          const Icon = stepIcons[index] ?? Compass;

          return (
            <Reveal
              key={step.number}
              delay={index * 0.05}
              variant="scaleIn"
              className="h-full"
            >
              <article className="flex h-full flex-col rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-xs)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(37,99,235,0.28)] hover:shadow-[var(--shadow-sm)]">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex size-11 items-center justify-center rounded-[14px] border border-[rgba(37,99,235,0.12)] bg-[linear-gradient(180deg,#eff6ff_0%,#dbeafe_100%)] text-[var(--color-accent)]">
                    <Icon className="size-5" strokeWidth={1.85} />
                  </div>
                  <p className="text-[13px] font-semibold tracking-[0.14em] text-[var(--color-accent)]">
                    {step.number}
                  </p>
                </div>
                <h3 className="mt-5 text-[1.05rem] font-semibold tracking-[-0.02em] text-[var(--color-text)]">
                  {step.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[14px] leading-[1.65] text-[var(--color-muted)]">
                  {step.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </SectionContainer>
  );
}
