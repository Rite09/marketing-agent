import Benefits from "@/components/sections/Benefits";
import Features from "@/components/sections/Features";
import FooterCTA from "@/components/sections/FooterCTA";
import Hero from "@/components/sections/Hero";
import { createMetadata } from "@/lib/helpers";

export const metadata = createMetadata({
  title: "CipherIgnite | Performance Marketing for Growing Businesses",
  description:
    "Performance marketing, paid media, local SEO, and analytics for small and medium businesses that want predictable growth.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Benefits />
      <FooterCTA />
    </>
  );
}
