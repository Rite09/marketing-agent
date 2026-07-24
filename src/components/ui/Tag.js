import { cn } from "@/lib/helpers";

export default function Tag({ className, active = false, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition duration-200",
        active
          ? "border-[rgba(37,99,235,0.28)] bg-[var(--color-accent-tint)] text-[var(--color-accent)]"
          : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}
