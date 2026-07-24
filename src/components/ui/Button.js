import Link from "next/link";
import { LoaderCircle } from "lucide-react";

import { cn } from "@/lib/helpers";

const variantClasses = {
  primary:
    "bg-[var(--color-accent)] text-white shadow-[0_14px_40px_rgba(45,104,255,0.28)] hover:bg-[var(--color-accent-strong)]",
  secondary:
    "bg-[rgba(18,35,73,0.82)] text-white hover:bg-[rgba(22,45,92,0.96)]",
  outline:
    "border border-[var(--color-border-strong)] bg-transparent text-white hover:border-[var(--color-accent)] hover:bg-white/5",
  ghost:
    "bg-transparent text-[var(--color-text)] hover:bg-white/6",
};

const sizeClasses = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[14px]",
  lg: "h-[52px] px-7 text-[15px]",
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
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold tracking-[-0.01em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] disabled:pointer-events-none disabled:opacity-60",
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
