import { cn } from "@/lib/helpers";

export default function Badge({ className, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-border)] bg-[rgba(21,30,54,0.68)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-soft)]",
        className
      )}
    >
      {children}
    </span>
  );
}
