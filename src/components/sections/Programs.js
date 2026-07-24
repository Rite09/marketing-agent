import { ArrowRight } from "lucide-react";

import SectionContainer from "@/components/layout/SectionContainer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Tag from "@/components/ui/Tag";
import { featuredPrograms, programs } from "@/data/programs";

export default function Programs() {
  return (
    <div>
      <SectionContainer className="border-b border-[var(--color-border)] pt-28 sm:pt-32 lg:pt-36">
        <div className="max-w-[640px] pb-20 sm:pb-24 lg:pb-28">
          <Reveal>
            <Tag className="border-none bg-transparent px-0 py-0 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
              OUR CAPABILITIES
            </Tag>
          </Reveal>

          <Reveal delay={0.08}>
            <Heading
              as="h1"
              className="mt-6 text-[2.5rem] leading-[1.1] sm:text-[3.15rem] lg:text-[3.35rem]"
            >
              A full-service marketing partner - built around{" "}
              <span className="text-gradient">your growth goals</span>.
            </Heading>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-[var(--color-muted)] sm:text-[17px]">
              From strategy and creative to performance and analytics - pick a
              single service or run a fully integrated program. Every engagement
              starts with goals, audience and the metrics that matter.
            </p>
          </Reveal>

          <Reveal
            delay={0.24}
            className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <Button href="/contact" size="lg">
              Get Free Consultation
              <ArrowRight className="size-4" />
            </Button>
            <a
              href="#featured-services"
              className="inline-flex h-[52px] items-center gap-2 px-2 text-[15px] font-semibold text-white transition hover:text-[var(--color-accent-soft)]"
            >
              Browse all services
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </SectionContainer>

      <SectionContainer
        id="featured-services"
        className="border-b border-[var(--color-border)] py-24 sm:py-28 lg:py-32"
      >
        <SectionTitle
          eyebrow="FEATURED"
          title="Where most clients start"
          description="Our most-requested services - proven to drive visibility, leads and revenue for small and medium businesses."
          titleClassName="max-w-[14ch]"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredPrograms.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.06}>
              <Card
                {...program}
                className="h-full"
                titleClassName="mt-4 text-[1.05rem]"
                descriptionClassName="mt-2.5 text-[13px] leading-[1.6]"
              />
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-24 sm:py-28 lg:py-32">
        <div className="space-y-20 lg:space-y-24">
          {programs.map((program) => (
            <section key={program.id} id={program.id} className="scroll-mt-28">
              <Reveal>
                <div className="mb-8 flex items-start gap-3.5">
                  <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-[rgba(45,104,255,0.14)] text-[var(--color-accent-soft)]">
                    <program.icon className="size-[18px]" strokeWidth={1.9} />
                  </div>
                  <div>
                    <h2 className="text-[1.35rem] font-bold tracking-[-0.02em] text-white sm:text-[1.5rem]">
                      {program.label}
                    </h2>
                    <p className="mt-1.5 max-w-[40rem] text-[14px] leading-[1.65] text-[var(--color-muted)] sm:text-[15px]">
                      {program.description}
                    </p>
                  </div>
                </div>
              </Reveal>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {program.items.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.04}>
                    <article className="group flex h-full items-start gap-3.5 rounded-2xl border border-[var(--color-border)] bg-[rgba(16,21,31,0.92)] p-4 transition duration-300 hover:border-[rgba(45,104,255,0.4)] hover:bg-[rgba(18,24,36,0.98)] sm:p-5">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[rgba(45,104,255,0.14)] text-[var(--color-accent-soft)]">
                        <item.icon className="size-4" strokeWidth={1.9} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[15px] font-bold leading-[1.35] tracking-[-0.015em] text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-[13px] leading-[1.55] text-[var(--color-muted)]">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
