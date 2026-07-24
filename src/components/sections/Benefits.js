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
    <SectionContainer className="border-b border-[var(--color-border)] py-24 sm:py-28 lg:py-32">
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
              <Reveal key={card.title} delay={index * 0.06}>
                <Card {...card} className="h-full p-5" iconClassName="size-9" />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="fadeLeft" className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[rgba(10,14,20,0.96)] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-x-10 bottom-8 top-auto h-24 rounded-full bg-[rgba(45,104,255,0.12)] blur-[80px]" />
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/analytics-dashboard.png"
                alt="Analytics dashboard with marketing performance metrics"
                width={530}
                height={320}
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
            <div className="relative z-10 -mt-8 grid gap-2.5 px-2.5 pb-2.5 sm:grid-cols-3">
              {performanceStats.map((item, index) => (
                <Reveal key={item.label} delay={0.12 + index * 0.05}>
                  <div className="rounded-xl border border-[var(--color-border)] bg-[rgba(9,14,20,0.94)] px-4 py-3.5 shadow-[0_18px_40px_rgba(0,0,0,0.28)]">
                    <div className="text-[1.65rem] font-bold leading-none tracking-[-0.03em] text-white">
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
        </Reveal>
      </div>
    </SectionContainer>
  );
}
