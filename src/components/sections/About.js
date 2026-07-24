import Image from "next/image";
import { HeartHandshake, Orbit, Target } from "lucide-react";

import SectionContainer from "@/components/layout/SectionContainer";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Tag from "@/components/ui/Tag";

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
      <SectionContainer className="border-b border-[var(--color-border)] pt-28 sm:pt-32 lg:pt-36">
        <div className="grid gap-12 pb-20 sm:pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:pb-28">
          <div>
            <Reveal>
              <Tag className="border-none bg-transparent px-0 py-0 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
                OUR STORY
              </Tag>
            </Reveal>

            <Reveal delay={0.08}>
              <Heading
                as="h1"
                className="mt-6 max-w-[14ch] text-[2.5rem] leading-[1.1] sm:text-[3.15rem] lg:text-[3.35rem]"
              >
                Helping small businesses grow with smart, simple marketing.
              </Heading>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-7 max-w-[34rem] space-y-5 text-[15px] leading-[1.7] text-[var(--color-muted)] sm:text-[16px]">
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
            <div className="mx-auto max-w-[520px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[rgba(10,14,20,0.96)] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.4)] lg:ml-auto lg:mr-0">
              <Image
                src="/images/team-session.jpg"
                alt="CipherIgnite team collaborating over campaign materials"
                width={560}
                height={510}
                className="aspect-[4/3.4] h-auto w-full rounded-xl object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </SectionContainer>

      <SectionContainer className="py-24 sm:py-28 lg:py-32">
        <SectionTitle
          eyebrow="OUR MISSION"
          title={
            <>
              To help every business we work with{" "}
              <span className="text-gradient">grow predictably</span> using
              smart strategies and clear data - without the agency fluff.
            </>
          }
          titleClassName="max-w-[22ch] text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem]"
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {missionCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06}>
              <Card
                {...card}
                className="h-full p-6"
                titleClassName="mt-4 text-[1.1rem]"
                descriptionClassName="mt-2.5 text-[14px] leading-[1.65]"
              />
            </Reveal>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
