import AboutSection from "@/components/sections/About";
import FooterCTA from "@/components/sections/FooterCTA";
import { createMetadata } from "@/lib/helpers";

export const metadata = createMetadata({
  title: "About | CipherIgnite",
  description:
    "Learn how CipherIgnite helps small businesses grow through simple strategy, honest reporting, and performance-minded execution.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <FooterCTA />
    </>
  );
}
