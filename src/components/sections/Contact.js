"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Clock3,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  SendHorizontal,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import SectionContainer from "@/components/layout/SectionContainer";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Reveal from "@/components/ui/Reveal";
import TextArea from "@/components/ui/TextArea";
import { siteMetadata } from "@/lib/constants";

const contactSchema = z.object({
  name: z.string().min(2, "Please share your name."),
  email: z.email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a phone number."),
  message: z.string().min(10, "Please share a little more context."),
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 750));
    setSubmitted(true);
    reset();
  };

  return (
    <SectionContainer className="pt-28 sm:pt-32 lg:pt-36">
      <div className="max-w-[640px]">
        <Reveal>
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-soft)]">
            GET IN TOUCH
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <Heading
            as="h1"
            className="mt-6 text-[2.5rem] leading-[1.1] sm:text-[3.15rem] lg:text-[3.35rem]"
          >
            Let&apos;s talk about your{" "}
            <span className="text-gradient">growth goals.</span>
          </Heading>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-[var(--color-muted)] sm:text-[17px]">
            Share a few details and we&apos;ll get back within 24 hours with a
            free 15-minute consultation slot.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 pb-20 sm:mt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-6 lg:pb-28">
        <Reveal>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-[var(--color-border)] bg-[rgba(16,21,31,0.92)] p-6 sm:p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Input
                label="Name"
                placeholder="Jane Doe"
                error={errors.name?.message}
                {...register("name")}
              />
              <Input
                label="Email"
                type="email"
                placeholder="jane@company.com"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>

            <div className="mt-5">
              <Input
                label="Phone"
                type="tel"
                placeholder="+91 99999 99999"
                error={errors.phone?.message}
                {...register("phone")}
              />
            </div>

            <div className="mt-5">
              <TextArea
                label="Message"
                placeholder="Tell us about your business and what you're trying to grow."
                error={errors.message?.message}
                {...register("message")}
              />
            </div>

            <div className="mt-7 flex flex-col items-start gap-3.5">
              <Button type="submit" size="lg" loading={isSubmitting}>
                Send message
                <SendHorizontal className="size-4" />
              </Button>
              <p className="text-[13px] leading-[1.6] text-[rgba(161,161,170,0.7)]">
                By submitting, you agree to be contacted by CipherIgnite about
                your enquiry.
              </p>
              {submitted ? (
                <p
                  className="text-[13px] text-[var(--color-success)]"
                  aria-live="polite"
                >
                  Thanks - we&apos;ll be in touch shortly.
                </p>
              ) : null}
            </div>
          </form>
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[rgba(16,21,31,0.92)] p-6 sm:p-7">
              <div className="flex items-center gap-2 text-[13px] font-medium text-[var(--color-success)]">
                <Clock3 className="size-3.5" strokeWidth={2.2} />
                We respond within 24 hours
              </div>
              <h2 className="mt-4 text-[1.25rem] font-bold tracking-[-0.02em] text-white sm:text-[1.35rem]">
                Prefer a quick chat?
              </h2>
              <p className="mt-3 text-[14px] leading-[1.65] text-[var(--color-muted)]">
                Message us on WhatsApp - we&apos;ll get a strategist on the line
                for your free 15-minute consultation.
              </p>
              <a
                href={siteMetadata.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-success)] px-6 text-[14px] font-semibold text-[#03130d] transition duration-300 hover:brightness-105"
              >
                <MessageCircleMore className="size-4" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[rgba(16,21,31,0.92)] p-6 sm:p-7">
              <h2 className="text-[1.25rem] font-bold tracking-[-0.02em] text-white sm:text-[1.35rem]">
                Other ways to reach us
              </h2>
              <div className="mt-6 space-y-5">
                <div className="flex gap-3.5">
                  <Mail className="mt-0.5 size-4 shrink-0 text-[var(--color-accent-soft)]" />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteMetadata.email}`}
                      className="mt-1 inline-block text-[15px] font-medium text-white transition hover:text-[var(--color-accent-soft)]"
                    >
                      {siteMetadata.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <Phone className="mt-0.5 size-4 shrink-0 text-[var(--color-accent-soft)]" />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                      Phone
                    </p>
                    <a
                      href={`tel:${siteMetadata.phone.replace(/\s+/g, "")}`}
                      className="mt-1 inline-block text-[15px] font-medium text-white transition hover:text-[var(--color-accent-soft)]"
                    >
                      {siteMetadata.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--color-accent-soft)]" />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                      Where
                    </p>
                    <p className="mt-1 text-[15px] font-medium text-white">
                      {siteMetadata.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}
