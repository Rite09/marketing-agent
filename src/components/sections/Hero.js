import { ArrowRight, Check } from "lucide-react";

import SectionContainer from "@/components/layout/SectionContainer";
import Button from "@/components/ui/Button";
import GradientBackground from "@/components/ui/GradientBackground";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { ctaHighlights } from "@/lib/constants";

export default function Hero() {
  return (
    <SectionContainer className="overflow-hidden border-b border-[var(--color-border)] pt-28 sm:pt-32 lg:pt-36">
      <GradientBackground variant="hero" />

      <div className="relative z-10 max-w-[640px] pb-20 sm:pb-24 lg:pb-28">
        <Reveal>
          <Tag className="border-none bg-transparent px-0 py-0 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
            PERFORMANCE MARKETING AGENCY
          </Tag>
        </Reveal>

        <Reveal delay={0.08}>
          <Heading
            as="h1"
            className="mt-6 text-[2.75rem] leading-[1.08] sm:text-[3.5rem] lg:text-[3.75rem]"
          >
            We Help Businesses Grow with{" "}
            <span className="text-gradient">Data-Driven Marketing</span>
          </Heading>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-[var(--color-muted)] sm:text-[17px]">
            Smart strategies. Measurable results. We turn ad spend into
            predictable pipeline for small and medium businesses - without the
            jargon.
          </p>
        </Reveal>

        <Reveal delay={0.24} className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <Button href="/contact" size="lg">
            Get Free Consultation
            <ArrowRight className="size-4" />
          </Button>
          <Button href="/services" size="lg" variant="outline">
            View Services
            <ArrowRight className="size-4" />
          </Button>
        </Reveal>

        <Reveal delay={0.32} className="mt-9">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] text-[var(--color-muted)]">
            {ctaHighlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="inline-flex size-4 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-[var(--color-success)]">
                  <Check className="size-2.5" strokeWidth={3} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
