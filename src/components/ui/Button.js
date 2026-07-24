import Link from "next/link";
import { LoaderCircle } from "lucide-react";

import { cn } from "@/lib/helpers";

const variantClasses = {
  primary:
    "bg-[var(--color-accent)] text-white shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_8px_20px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)] hover:shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_12px_28px_rgba(37,99,235,0.3)]",
  secondary:
    "bg-[var(--color-surface-strong)] text-[var(--color-text)] hover:bg-[#e2e8f0]",
  outline:
    "border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-[var(--shadow-xs)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-tint)]",
  ghost:
    "bg-transparent text-[var(--color-text)] hover:bg-[var(--color-surface-strong)]",
};

const sizeClasses = {
  sm: "h-9 px-3.5 text-[13px]",
  md: "h-11 px-5 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
};

export default function Button({
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  loading = false,
  disabled = false,
  ...props
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[12px] font-semibold tracking-[-0.01em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:pointer-events-none disabled:opacity-55",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {loading ? <LoaderCircle className="size-4 animate-spin" /> : null}
      <span className="inline-flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}
