import Image from "next/image";
import { HeartHandshake, Orbit, Target } from "lucide-react";

import SectionContainer from "@/components/layout/SectionContainer";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";

const missionCards = [
  {
    icon: Orbit,
    title: "Clarity over jargon",
    description:
      "We explain what we're doing, why, and what to expect - in plain language.",
  },
  {
    icon: Target,
    title: "Outcomes over output",
    description:
      "We don't celebrate impressions. We celebrate revenue and qualified leads.",
  },
  {
    icon: HeartHandshake,
    title: "Partners, not vendors",
    description:
      "We treat your business like our own - invested, accountable, available.",
  },
];

export default function AboutSection() {
  return (
    <div>
      <SectionContainer className="hero-mesh border-b border-[var(--color-border)] pt-28 sm:pt-32 lg:pt-36">
        <div className="grid gap-12 pb-16 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:pb-24">
          <div>
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                OUR STORY
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <Heading
                as="h1"
                className="mt-5 max-w-[14ch] text-[2.5rem] sm:text-[3.1rem] lg:text-[3.25rem]"
              >
                Helping small businesses grow with smart, simple marketing.
              </Heading>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-6 max-w-[34rem] space-y-4 text-[15px] leading-[1.7] text-[var(--color-muted)] sm:text-[16px]">
                <p>
                  CipherIgnite started with a simple frustration: small and
                  medium businesses were being sold complicated marketing they
                  didn&apos;t need - and couldn&apos;t measure.
                </p>
                <p>
                  We built a different kind of agency. One that pairs senior
                  strategists with hands-on execution, treats data as a tool
                  (not a trophy), and reports honestly - even when something
                  isn&apos;t working.
                </p>
                <p>
                  Today we partner with founders, marketers and local business
                  owners to turn their marketing into a growth engine they
                  actually understand.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal variant="fadeLeft">
            <div className="media-glow relative mx-auto max-w-[520px] lg:ml-auto lg:mr-0">
              <div className="relative z-10 overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-[var(--shadow-md)]">
                <Image
                  src="/images/team-collab.jpg"
                  alt="CipherIgnite team collaborating over campaign materials"
                  width={560}
                  height={510}
                  className="aspect-[4/3.4] h-auto w-full rounded-[16px] object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>

      <SectionContainer className="section-grid py-20 sm:py-24 lg:py-28">
        <SectionTitle
          eyebrow="OUR MISSION"
          title={
            <>
              To help every business we work with{" "}
              <span className="text-gradient">grow predictably</span> using
              smart strategies and clear data - without the agency fluff.
            </>
          }
          titleClassName="max-w-[22ch]"
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {missionCards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 0.05}
              variant="scaleIn"
              className="h-full"
            >
              <Card {...card} className="h-full" />
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
