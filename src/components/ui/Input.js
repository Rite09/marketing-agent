import { forwardRef } from "react";

import { cn } from "@/lib/helpers";

const Input = forwardRef(function Input(
  { label, error, className, inputClassName, ...props },
  ref
) {
  return (
    <label className={cn("block space-y-2", className)}>
      <span className="block text-[13px] font-medium text-[var(--color-muted)]">
        {label}
      </span>
      <input
        ref={ref}
        className={cn(
          "h-12 w-full rounded-xl border border-[var(--color-border)] bg-[rgba(8,11,18,0.9)] px-4 text-[14px] text-white outline-none transition duration-300 placeholder:text-[rgba(161,161,170,0.45)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[rgba(45,104,255,0.18)]",
          inputClassName
        )}
        {...props}
      />
      {error ? (
        <span className="block text-[13px] text-[#f87171]">{error}</span>
      ) : null}
    </label>
  );
});

export default Input;
