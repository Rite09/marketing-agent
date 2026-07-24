import Image from "next/image";
import { ArrowRight, MessageCircleMore } from "lucide-react";

import SectionContainer from "@/components/layout/SectionContainer";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import { siteMetadata } from "@/lib/constants";

export default function FooterCTA() {
  return (
    <SectionContainer className="section-soft py-16 sm:py-20 lg:py-24">
      <Reveal variant="scaleIn">
        <div className="cta-panel relative overflow-hidden rounded-[24px] px-6 py-10 shadow-[var(--shadow-md)] md:px-10 md:py-12">
          <Image
            src="/images/strategy-meeting.jpg"
            alt=""
            fill
            aria-hidden="true"
            className="object-cover opacity-[0.18]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.92)_0%,rgba(30,41,59,0.88)_100%)]"
          />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-10">
            <div className="max-w-[36rem]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#93c5fd]">
                READY WHEN YOU ARE
              </p>
              <Heading className="mt-3 text-[1.9rem] text-white sm:text-[2.2rem] lg:text-[2.4rem]">
                Let&apos;s turn your marketing into a growth engine.
              </Heading>
              <p className="mt-4 max-w-[32rem] text-[15px] leading-[1.7] text-slate-300 sm:text-[16px]">
                Book a free 15-minute consultation. We&apos;ll review your
                current funnel and share 2-3 actionable wins - even if you never
                hire us.
              </p>
            </div>

            <div className="space-y-3 lg:w-full lg:max-w-[320px] lg:justify-self-end">
              <Button href="/contact" size="lg" className="w-full">
                Get Free Consultation
                <ArrowRight className="size-4" />
              </Button>
              <a
                href={siteMetadata.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[12px] border border-white/15 bg-white/5 px-6 text-[14px] font-semibold text-white transition duration-200 hover:bg-white/10"
              >
                <MessageCircleMore className="size-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
