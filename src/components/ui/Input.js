import { forwardRef } from "react";

import { cn } from "@/lib/helpers";

const Input = forwardRef(function Input(
  { label, error, className, inputClassName, ...props },
  ref
) {
  return (
    <label className={cn("block space-y-2", className)}>
      <span className="block text-[13px] font-medium text-[var(--color-text)]">
        {label}
      </span>
      <input
        ref={ref}
        className={cn(
          "h-11 w-full rounded-[12px] border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-3.5 text-[14px] text-[var(--color-text)] outline-none transition duration-200 placeholder:text-[#94a3b8] hover:border-[rgba(37,99,235,0.35)] focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[rgba(37,99,235,0.12)]",
          inputClassName
        )}
        {...props}
      />
      {error ? (
        <span className="block text-[13px] text-[var(--color-danger)]">{error}</span>
      ) : null}
    </label>
  );
});

export default Input;
