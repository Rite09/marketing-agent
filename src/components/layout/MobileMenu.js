"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

import Button from "@/components/ui/Button";
import { navigationItems } from "@/data/navigation";
import { siteMetadata } from "@/lib/constants";
import { cn } from "@/lib/helpers";

export default function MobileMenu({ open, pathname, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close mobile navigation"
            className="fixed inset-0 z-40 bg-[rgba(15,23,42,0.35)] backdrop-blur-sm md:hidden"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-[var(--color-border)] bg-[var(--color-surface)] px-5 pb-8 pt-5 shadow-[var(--shadow-md)] md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2.5">
                <span className="inline-flex size-8 items-center justify-center rounded-[10px] bg-[var(--color-accent)] text-[13px] font-extrabold text-white">
                  C
                </span>
                <span className="text-[1.02rem] font-semibold text-[var(--color-text)]">
                  CipherIgnite
                </span>
              </span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-10 items-center justify-center rounded-[12px] border border-[var(--color-border)] text-[var(--color-text)] transition hover:bg-[var(--color-surface-strong)]"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-[14px] border px-4 py-3.5 text-[15px] font-medium transition",
                      isActive
                        ? "border-[rgba(37,99,235,0.25)] bg-[var(--color-accent-tint)] text-[var(--color-accent)]"
                        : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[rgba(37,99,235,0.25)] hover:text-[var(--color-text)]"
                    )}
                    onClick={onClose}
                  >
                    {item.label}
                    <ArrowRight className="size-4" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-muted)] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                Ready when you are
              </p>
              <p className="mt-3 text-[1.25rem] font-semibold tracking-[-0.03em] text-[var(--color-text)]">
                Book a quick strategy consultation.
              </p>
              <p className="mt-3 text-[14px] leading-6 text-[var(--color-muted)]">
                We reply within 24 hours and keep the first conversation clear,
                helpful, and pressure free.
              </p>
              <Button
                href="/contact"
                size="lg"
                className="mt-5 w-full"
                onClick={onClose}
              >
                Get Free Consultation
              </Button>
              <a
                href={siteMetadata.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center rounded-[12px] border border-[var(--color-border)] px-5 py-3 text-[14px] font-medium text-[var(--color-text)] transition hover:border-[var(--color-success)] hover:text-[var(--color-success)]"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
