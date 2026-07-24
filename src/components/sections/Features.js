import {
  BarChart3,
  MapPinned,
  Megaphone,
  SearchCheck,
  ArrowRight,
} from "lucide-react";

import SectionContainer from "@/components/layout/SectionContainer";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "Audience-first content and paid social that builds brand and drives qualified traffic.",
  },
  {
    icon: SearchCheck,
    title: "Lead Generation (Google Ads)",
    description:
      "High-intent search and performance campaigns engineered for cost-efficient leads.",
  },
  {
    icon: MapPinned,
    title: "Google Business Profile",
    description:
      "Rank in the local map pack - optimized listings, reviews, and local SEO that converts.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Clean dashboards, attribution and weekly insights so every dollar is accounted for.",
  },
];

export default function Features() {
  return (
    <SectionContainer className="section-grid border-b border-[var(--color-border)] py-20 sm:py-24 lg:py-28">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          eyebrow="WHAT WE DO"
          title="Marketing services that drive growth"
          description="A focused suite of services designed to acquire customers, build brand, and grow revenue - together or individually."
          titleClassName="max-w-[14ch]"
        />
        <Reveal className="lg:pb-1">
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-accent)] transition hover:text-[var(--color-accent-strong)]"
          >
            Explore all services
            <ArrowRight className="size-4" />
          </a>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <Reveal
            key={service.title}
            delay={index * 0.05}
            variant="scaleIn"
            className="h-full"
          >
            <Card {...service} cta className="h-full" />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
