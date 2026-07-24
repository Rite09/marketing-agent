import Image from "next/image";
import { BadgeDollarSign, BriefcaseBusiness, Target, Zap } from "lucide-react";

import SectionContainer from "@/components/layout/SectionContainer";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { performanceStats } from "@/lib/constants";

const benefitCards = [
  {
    icon: Zap,
    title: "Data-Driven",
    description:
      "Decisions backed by analytics - not gut feel. We test, measure, iterate.",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description:
      "We optimize for the metrics that move your business: leads, revenue, and ROAS.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable",
    description:
      "Senior strategy without enterprise pricing. Plans that scale with you.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Personalized Strategies",
    description:
      "No templates. Every plan is built around your audience and goals.",
  },
];

export default function Benefits() {
  return (
    <SectionContainer className="section-dots border-b border-[var(--color-border)] py-20 sm:py-24 lg:py-28">
      <div className="grid gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:items-center xl:gap-14">
        <div>
          <SectionTitle
            eyebrow="WHY CIPHERIGNITE"
            title="Built for outcomes, not vanity metrics."
            description="We pair senior strategy with disciplined execution - so you get real numbers, real customers and real growth."
            titleClassName="max-w-[14ch]"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {benefitCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05} className="h-full">
                <Card {...card} className="h-full p-5" iconClassName="size-10" />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="fadeLeft" className="relative">
          <div className="media-glow relative">
            <div className="relative z-10 overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-[var(--shadow-md)]">
              <div className="relative overflow-hidden rounded-[16px]">
                <Image
                  src="/images/analytics-work.jpg"
                  alt="Marketer reviewing analytics dashboards on a laptop"
                  width={640}
                  height={420}
                  className="aspect-[4/3] h-auto w-full rounded-[16px] object-cover"
                />
              </div>
              <div className="relative z-10 -mt-10 grid gap-2.5 px-2.5 pb-2.5 sm:grid-cols-3">
                {performanceStats.map((item, index) => (
                  <Reveal key={item.label} delay={0.1 + index * 0.05}>
                    <div className="rounded-[14px] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3.5 shadow-[var(--shadow-sm)]">
                      <div className="text-[1.45rem] font-semibold leading-none tracking-[-0.03em] text-[var(--color-text)]">
                        {item.value}
                      </div>
                      <p className="mt-1.5 text-[12px] text-[var(--color-muted)]">
                        {item.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
