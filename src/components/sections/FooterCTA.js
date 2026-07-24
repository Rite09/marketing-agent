import { ArrowRight, MessageCircleMore } from "lucide-react";

import SectionContainer from "@/components/layout/SectionContainer";
import Button from "@/components/ui/Button";
import GradientBackground from "@/components/ui/GradientBackground";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { siteMetadata } from "@/lib/constants";

export default function FooterCTA() {
  return (
    <SectionContainer className="py-24 sm:py-28">
      <div className="relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(18,32,64,0.95),rgba(8,12,22,0.98))] px-6 py-12 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:px-12 md:py-14">
        <GradientBackground variant="cta" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-12">
          <Reveal>
            <div className="max-w-[36rem]">
              <Tag className="border-none bg-transparent px-0 py-0 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
                READY WHEN YOU ARE
              </Tag>
              <Heading className="mt-4 text-[2rem] leading-[1.12] sm:text-[2.35rem] lg:text-[2.6rem]">
                Let&apos;s turn your marketing into a growth engine.
              </Heading>
              <p className="mt-4 max-w-[32rem] text-[15px] leading-[1.7] text-[var(--color-muted)] sm:text-base">
                Book a free 15-minute consultation. We&apos;ll review your current
                funnel and share 2-3 actionable wins - even if you never hire
                us.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-3 lg:w-full lg:max-w-[340px] lg:justify-self-end">
              <Button href="/contact" size="lg" className="w-full">
                Get Free Consultation
                <ArrowRight className="size-4" />
              </Button>
              <a
                href={siteMetadata.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[rgba(11,16,24,0.5)] px-6 text-[14px] font-semibold text-white transition duration-300 hover:border-[var(--color-success)] hover:text-[var(--color-success)]"
              >
                <MessageCircleMore className="size-4" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}
