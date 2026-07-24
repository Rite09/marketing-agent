"use client";

import { cn } from "@/lib/helpers";

export default function Marquee({ items = [], className }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="marquee-track flex min-w-max items-center gap-8">
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
