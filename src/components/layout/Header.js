"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
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
      <span className="inline-flex size-8 items-center justify-center rounded-[10px] bg-[var(--color-accent)] text-[13px] font-extrabold tracking-tight text-white">
        C
      </span>
      <span className="text-[1.05rem] font-bold tracking-[-0.02em] text-white">
        CipherIgnite
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isScrolled = useScroll(24);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-30 transition duration-500",
          isScrolled
            ? "border-b border-[var(--color-border)] bg-[rgba(5,7,10,0.86)] shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <Container className="relative flex min-h-[76px] items-center justify-between gap-4">
          <Logo />

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[14px] font-medium transition duration-300 hover:text-white",
                    isActive ? "text-white" : "text-[var(--color-muted)]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button href="/contact" className="h-11 px-5 text-[13px]">
              Get Free Consultation
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-[var(--color-border)] text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </Container>
      </header>

      <MobileMenu
        open={isMenuOpen}
        pathname={pathname}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
