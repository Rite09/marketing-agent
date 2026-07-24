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
      <span className="text-[1.02rem] font-semibold tracking-[-0.02em] text-[var(--color-text)]">
        CipherIgnite
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-8">
          <div className="max-w-[28rem]">
            <FooterLogo />
            <p className="mt-5 max-w-[26rem] text-[15px] leading-[1.7] text-[var(--color-muted)]">
              {siteMetadata.tagline}
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text)]">
              Quick Links
            </p>
            <div className="mt-4 flex flex-col gap-3 text-[14px] text-[var(--color-muted)]">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-[var(--color-accent)]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text)]">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-[14px] text-[var(--color-muted)]">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--color-accent)]" />
                <span>{siteMetadata.location}</span>
              </p>
              <a
                href={`tel:${siteMetadata.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 transition hover:text-[var(--color-accent)]"
              >
                <Phone className="size-4 text-[var(--color-accent)]" />
                {siteMetadata.phone}
              </a>
              <a
                href={siteMetadata.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition hover:text-[var(--color-accent)]"
              >
                <MessageCircleMore className="size-4 text-[var(--color-success)]" />
                WhatsApp
              </a>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="flex items-center gap-3 transition hover:text-[var(--color-accent)]"
              >
                <Mail className="size-4 text-[var(--color-accent)]" />
                {siteMetadata.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-[13px] text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 CipherIgnite. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="transition hover:text-[var(--color-accent)]">
              Privacy
            </Link>
            <Link href="/contact" className="transition hover:text-[var(--color-accent)]">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
