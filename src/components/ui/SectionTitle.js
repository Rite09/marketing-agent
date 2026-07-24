import Heading from "@/components/ui/Heading";
import Tag from "@/components/ui/Tag";
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
        <Tag className="mb-4 border-none bg-transparent px-0 py-0 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-soft)]">
          {eyebrow}
        </Tag>
      ) : null}
      <Heading
        className={cn(
          "max-w-[16ch] text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem]",
          centered ? "mx-auto" : "",
          titleClassName
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 max-w-[48ch] text-[15px] leading-[1.7] text-[var(--color-muted)] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
