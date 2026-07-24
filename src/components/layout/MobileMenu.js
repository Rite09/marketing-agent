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
            className="fixed inset-0 z-40 bg-[rgba(2,6,16,0.72)] backdrop-blur-sm md:hidden"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.aside
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-[var(--color-border)] bg-[rgba(7,11,22,0.96)] px-6 pb-8 pt-5 shadow-[0_40px_100px_rgba(0,0,0,0.45)] md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2.5">
                <span className="inline-flex size-8 items-center justify-center rounded-[10px] bg-[var(--color-accent)] text-[13px] font-extrabold tracking-tight text-white">
                  C
                </span>
                <span className="text-[1.05rem] font-bold tracking-[-0.02em] text-white">
                  CipherIgnite
                </span>
              </span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-2">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-[18px] border px-4 py-4 text-base font-medium transition duration-300",
                      isActive
                        ? "border-[rgba(72,117,255,0.5)] bg-[rgba(46,102,255,0.12)] text-white"
                        : "border-[var(--color-border)] text-[var(--color-muted)] hover:border-[rgba(72,117,255,0.34)] hover:text-white"
                    )}
                    onClick={onClose}
                  >
                    {item.label}
                    <ArrowRight className="size-4" />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto rounded-[28px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(18,28,54,0.8),rgba(12,18,32,0.92))] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent-soft)]">
                Ready when you are
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                Book a quick strategy consultation.
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                We reply within 24 hours and keep the first conversation clear,
                helpful, and pressure free.
              </p>
              <Button
                href="/contact"
                size="lg"
                className="mt-6 w-full"
                onClick={onClose}
              >
                Get Free Consultation
              </Button>
              <a
                href={siteMetadata.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-[14px] border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-white transition hover:border-[var(--color-success)] hover:text-[var(--color-success)]"
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
