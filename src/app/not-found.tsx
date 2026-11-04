import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-32">
      <h1 className="font-semibold text-4xl tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-[48ch] text-muted">
        This page does not exist or has moved. The case studies and CV are on
        the home page.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-accent px-5 py-2.5 font-medium text-accent-ink"
      >
        Go to the home page
      </Link>
    </Container>
  );
}
