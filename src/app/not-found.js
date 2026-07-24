import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-start justify-center py-24">
      <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
        404
      </p>
      <h1 className="mt-4 text-[2.4rem] font-semibold tracking-[-0.035em] text-[var(--color-text)]">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-[var(--color-muted)]">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Back to home</Button>
        <Button href="/services" variant="outline">
          View services
        </Button>
      </div>
      <Link
        href="/contact"
        className="mt-6 text-[14px] text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
      >
        Or contact us →
      </Link>
    </Container>
  );
}
