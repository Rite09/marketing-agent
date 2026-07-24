import { cn } from "@/lib/helpers";

export default function Tag({ className, active = false, children }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-4 py-2 text-sm transition duration-300",
        active
          ? "border-[var(--color-accent)] bg-[rgba(46,102,255,0.12)] text-white"
          : "border-[var(--color-border)] bg-transparent text-[var(--color-muted)]",
        className
      )}
    >
      {children}
    </span>
  );
}
