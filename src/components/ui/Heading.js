import { cn } from "@/lib/helpers";

export default function Heading({
  as: Component = "h2",
  className,
  children,
}) {
  return (
    <Component
      className={cn(
        "font-semibold leading-[1.1] tracking-[-0.035em] text-[var(--color-text)]",
        className
      )}
    >
      {children}
    </Component>
  );
}
