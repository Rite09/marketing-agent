import { cn } from "@/lib/helpers";

const variantClasses = {
  hero: "hero-grid hero-glow",
  cta: "cta-glow",
  page: "page-glow",
};

export default function GradientBackground({ variant = "page", className }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        variantClasses[variant],
        className
      )}
    >
      {variant === "hero" ? (
        <>
          <div className="hero-orb-left absolute -left-[8%] top-[30%] h-[58%] w-[45%]" />
          <div className="hero-orb-right absolute right-[-12%] top-[-12%] h-[72%] w-[58%]" />
          <div className="hero-band absolute left-[-5%] top-[36%] h-[10%] w-[80%] -rotate-[8deg]" />
          <div className="hero-band hero-band-alt absolute right-[-8%] top-[48%] h-[12%] w-[62%] rotate-[8deg]" />
          <div className="hero-card-shape absolute right-[18%] top-[20%] h-[40%] w-[34%] rotate-[20deg]" />
          <div className="hero-ring-left absolute left-[10%] top-[52%] h-[44%] w-[32%]" />
          <div className="hero-ring-right absolute right-[16%] top-[42%] h-[42%] w-[28%]" />
        </>
      ) : null}
    </div>
  );
}
