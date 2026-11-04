import type { ReactNode } from "react";
import { Container } from "./container";

type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

/** A page section with a two-column header on wide screens. */
export function Section({ id, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-20 py-12 sm:py-20"
    >
      <Container className="grid gap-10 lg:grid-cols-[240px_1fr] lg:gap-16">
        <div>
          <h2
            id={headingId}
            className="font-semibold text-2xl tracking-tight sm:text-[1.75rem]"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-3 max-w-xs text-muted text-sm">{intro}</p>
          ) : null}
        </div>
        <div>{children}</div>
      </Container>
    </section>
  );
}
