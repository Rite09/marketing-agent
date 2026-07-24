import { ArrowRight } from "lucide-react";

import SectionContainer from "@/components/layout/SectionContainer";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { featuredPrograms, programs } from "@/data/programs";

export default function Programs() {
  return (
    <div>
      <SectionContainer className="hero-mesh border-b border-[var(--color-border)] pt-28 sm:pt-32 lg:pt-36">
        <div className="max-w-[640px] pb-16 sm:pb-20 lg:pb-24">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
              OUR CAPABILITIES
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <Heading
              as="h1"
              className="mt-5 text-[2.5rem] sm:text-[3.1rem] lg:text-[3.25rem]"
            >
              A full-service marketing partner - built around{" "}
              <span className="text-gradient">your growth goals</span>.
            </Heading>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 max-w-[34rem] text-[16px] leading-[1.7] text-[var(--color-muted)]">
              From strategy and creative to performance and analytics - pick a
              single service or run a fully integrated program. Every engagement
              starts with goals, audience and the metrics that matter.
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
            <a
              href="#featured-services"
              className="inline-flex h-12 items-center gap-2 px-2 text-[15px] font-semibold text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
            >
              Browse all services
              <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </SectionContainer>

      <SectionContainer
        id="featured-services"
        className="border-b border-[var(--color-border)] bg-[var(--color-surface)] py-20 sm:py-24 lg:py-28"
      >
        <SectionTitle
          eyebrow="FEATURED"
          title="Where most clients start"
          description="Our most-requested services - proven to drive visibility, leads and revenue for small and medium businesses."
          titleClassName="max-w-[14ch]"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredPrograms.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.05} variant="scaleIn">
              <Card {...program} className="h-full" />
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="section-soft py-20 sm:py-24 lg:py-28">
        <div className="space-y-16 lg:space-y-20">
          {programs.map((program) => (
            <section key={program.id} id={program.id} className="scroll-mt-28">
              <Reveal>
                <div className="mb-7 flex items-start gap-3.5">
                  <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-[12px] bg-[var(--color-accent-tint)] text-[var(--color-accent)]">
                    <program.icon className="size-[18px]" strokeWidth={1.9} />
                  </div>
                  <div>
                    <h2 className="text-[1.3rem] font-semibold tracking-[-0.02em] text-[var(--color-text)] sm:text-[1.4rem]">
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
                  <Reveal key={item.title} delay={index * 0.03}>
                    <article className="group flex h-full items-start gap-3.5 rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-xs)] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(37,99,235,0.28)] hover:shadow-[var(--shadow-sm)] sm:p-5">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-[var(--color-accent-tint)] text-[var(--color-accent)]">
                        <item.icon className="size-4" strokeWidth={1.9} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[15px] font-semibold leading-[1.35] tracking-[-0.015em] text-[var(--color-text)]">
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
