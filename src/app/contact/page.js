import Contact from "@/components/sections/Contact";
import { createMetadata } from "@/lib/helpers";

export const metadata = createMetadata({
  title: "Contact | CipherIgnite",
  description:
    "Start the conversation with CipherIgnite. Share your goals and book a free 15-minute consultation.",
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}
