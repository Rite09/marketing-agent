import { cn } from "@/lib/helpers";

export default function Container({ className, children }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1140px] px-5 md:px-8", className)}>
      {children}
    </div>
  );
}
