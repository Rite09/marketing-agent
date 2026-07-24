import { cn } from "@/lib/helpers";

export default function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-accent-tint)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]",
        className
      )}
    >
      {children}
    </span>
  );
}
