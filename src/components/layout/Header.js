"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import MobileMenu from "@/components/layout/MobileMenu";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { navigationItems } from "@/lib/constants";
import { cn } from "@/lib/helpers";
import { useScroll } from "@/hooks/useScroll";

function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      <span className="inline-flex size-8 items-center justify-center rounded-[10px] bg-[var(--color-accent)] text-[13px] font-extrabold tracking-tight text-white shadow-[0_8px_18px_rgba(37,99,235,0.28)]">
        C
      </span>
      <span className="text-[1.02rem] font-semibold tracking-[-0.02em] text-[var(--color-text)]">
        CipherIgnite
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isScrolled = useScroll(16);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-30 transition duration-300",
          isScrolled
            ? "border-b border-[var(--color-border)] bg-[rgba(255,255,255,0.86)] shadow-[var(--shadow-xs)] backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <Container className="relative flex min-h-[68px] items-center justify-between gap-4 lg:min-h-[72px]">
          <Logo />

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3.5 py-2 text-[14px] font-medium transition duration-200",
                    isActive
                      ? "bg-[var(--color-accent-tint)] text-[var(--color-accent)]"
                      : "text-[var(--color-muted)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-text)]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button href="/contact" size="sm" className="h-10 px-4">
              Get Free Consultation
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            className="inline-flex size-10 items-center justify-center rounded-[12px] border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] transition hover:bg-[var(--color-surface-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </Container>
      </motion.header>

      <MobileMenu
        open={isMenuOpen}
        pathname={pathname}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
