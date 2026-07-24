import Link from "next/link";
import {
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { navigationItems } from "@/data/navigation";
import { siteMetadata } from "@/lib/constants";

function FooterLogo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      <span className="inline-flex size-8 items-center justify-center rounded-[10px] bg-[var(--color-accent)] text-[13px] font-extrabold tracking-tight text-white">
        C
      </span>
      <span className="text-[1.05rem] font-bold tracking-[-0.02em] text-white">
        CipherIgnite
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[rgba(4,6,10,0.96)]">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.7fr_0.95fr]">
          <div className="max-w-[28rem]">
            <FooterLogo />
            <p className="mt-5 max-w-[26rem] text-[15px] leading-[1.7] text-[var(--color-muted)]">
              {siteMetadata.tagline}
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
              Quick Links
            </p>
            <div className="mt-5 flex flex-col gap-3.5 text-[14px] text-[var(--color-muted)]">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
              Contact
            </p>
            <div className="mt-5 space-y-3.5 text-[14px] text-[var(--color-muted)]">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--color-accent-soft)]" />
                <span>{siteMetadata.location}</span>
              </p>
              <a
                href={`tel:${siteMetadata.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone className="size-4 text-[var(--color-accent-soft)]" />
                {siteMetadata.phone}
              </a>
              <a
                href={siteMetadata.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <MessageCircleMore className="size-4 text-[var(--color-success)]" />
                WhatsApp
              </a>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail className="size-4 text-[var(--color-accent-soft)]" />
                {siteMetadata.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--color-border)] pt-7 text-[13px] text-[rgba(161,161,170,0.7)] md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 CipherIgnite. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="transition hover:text-white">
              Privacy
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
