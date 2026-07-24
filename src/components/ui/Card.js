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
        "group rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-xs)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(37,99,235,0.28)] hover:shadow-[var(--shadow-md)]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        {Icon ? (
          <div
            className={cn(
              "flex size-10 items-center justify-center rounded-[12px] bg-[var(--color-accent-tint)] text-[var(--color-accent)]",
              iconClassName
            )}
          >
            <Icon className="size-[18px]" strokeWidth={1.9} />
          </div>
        ) : null}
        {badge ? <Badge>{badge}</Badge> : null}
        {!badge && cta ? (
          <ArrowUpRight className="size-4 text-[var(--color-muted)] transition duration-300 group-hover:text-[var(--color-accent)]" />
        ) : null}
      </div>
      {title ? (
        <h3
          className={cn(
            "mt-5 text-[1.05rem] font-semibold leading-[1.35] tracking-[-0.02em] text-[var(--color-text)]",
            titleClassName
          )}
        >
          {title}
        </h3>
      ) : null}
      {description ? (
        <p
          className={cn(
            "mt-2.5 text-[14px] leading-[1.65] text-[var(--color-muted)]",
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
