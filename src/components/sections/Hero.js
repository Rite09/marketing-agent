import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

import SectionContainer from "@/components/layout/SectionContainer";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import { ctaHighlights } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden border-b border-[var(--color-border)]">
      <SectionContainer className="pt-28 sm:pt-32 lg:pt-36">
        <div className="grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-20">
          <div className="max-w-[600px]">
            <Reveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                PERFORMANCE MARKETING AGENCY
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <Heading
                as="h1"
                className="mt-5 text-[2.6rem] sm:text-[3.25rem] lg:text-[3.5rem]"
              >
                We Help Businesses Grow with{" "}
                <span className="text-gradient">Data-Driven Marketing</span>
              </Heading>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[34rem] text-[16px] leading-[1.7] text-[var(--color-muted)] sm:text-[17px]">
                Smart strategies. Measurable results. We turn ad spend into
                predictable pipeline for small and medium businesses - without
                the jargon.
              </p>
            </Reveal>

            <Reveal
              delay={0.18}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href="/contact" size="lg">
                Get Free Consultation
                <ArrowRight className="size-4" />
              </Button>
              <Button href="/services" size="lg" variant="outline">
                View Services
              </Button>
            </Reveal>

            <Reveal delay={0.24} className="mt-8">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-[var(--color-muted)]">
                {ctaHighlights.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="inline-flex size-4 items-center justify-center rounded-full bg-[var(--color-success-tint)] text-[var(--color-success)]">
                      <Check className="size-2.5" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal variant="fadeLeft" delay={0.1} className="relative">
            <div className="relative overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface)] p-2 shadow-[var(--shadow-md)]">
              <Image
                src="/images/hero-workspace.jpg"
                alt="Marketing team collaborating in a modern workspace"
                width={720}
                height={560}
                priority
                className="aspect-[5/4] h-auto w-full rounded-[16px] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </section>
  );
}
