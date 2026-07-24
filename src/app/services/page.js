import FooterCTA from "@/components/sections/FooterCTA";
import Programs from "@/components/sections/Programs";
import Timeline from "@/components/sections/Timeline";
import { createMetadata } from "@/lib/helpers";

export const metadata = createMetadata({
  title: "Services | CipherIgnite",
  description:
    "Explore CipherIgnite services across SEO, paid media, websites, branding, analytics, and growth strategy.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Programs />
      <Timeline />
      <FooterCTA />
    </>
  );
}
