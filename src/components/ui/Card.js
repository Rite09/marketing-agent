import { ArrowUpRight } from "lucide-react";

import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/helpers";

export default function Card({
  icon: Icon,
  badge,
  title,
  description,
  cta,
  className,
  iconClassName,
  titleClassName,
  descriptionClassName,
  children,
}) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-[var(--color-border)] bg-[rgba(16,21,31,0.92)] p-6 transition duration-300 hover:border-[rgba(45,104,255,0.4)] hover:bg-[rgba(18,24,36,0.98)]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        {Icon ? (
          <div
            className={cn(
              "flex size-10 items-center justify-center rounded-xl bg-[rgba(45,104,255,0.14)] text-[var(--color-accent-soft)]",
              iconClassName
            )}
          >
            <Icon className="size-[18px]" strokeWidth={1.9} />
          </div>
        ) : null}
        {badge ? <Badge>{badge}</Badge> : null}
        {!badge && cta ? (
          <ArrowUpRight className="size-4 text-[var(--color-muted)] transition duration-300 group-hover:text-white" />
        ) : null}
      </div>
      {title ? (
        <h3
          className={cn(
            "mt-5 text-[1.15rem] font-bold leading-[1.3] tracking-[-0.02em] text-white",
            titleClassName
          )}
        >
          {title}
        </h3>
      ) : null}
      {description ? (
        <p
          className={cn(
            "mt-3 text-[14px] leading-[1.65] text-[var(--color-muted)]",
            descriptionClassName
          )}
        >
          {description}
        </p>
      ) : null}
      {children}
    </article>
  );
}
