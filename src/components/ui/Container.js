import { cn } from "@/lib/helpers";

export default function Container({ className, children }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
