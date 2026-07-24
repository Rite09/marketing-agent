import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/helpers";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-[720px]",
        centered ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "max-w-[18ch] text-[2rem] sm:text-[2.35rem] lg:text-[2.6rem]",
          centered ? "mx-auto" : "",
          titleClassName
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.7] text-[var(--color-muted)] sm:text-[16px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
