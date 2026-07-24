import { cn } from "@/lib/helpers";

export default function Heading({
  as: Component = "h2",
  className,
  children,
}) {
  return (
    <Component
      className={cn(
        "font-bold leading-[1.05] tracking-[-0.035em] text-white",
        className
      )}
    >
      {children}
    </Component>
  );
}
