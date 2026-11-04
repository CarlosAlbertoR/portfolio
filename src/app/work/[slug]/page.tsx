import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { Container } from "@/components/container";
import { getCaseStudies, getCaseStudy } from "@/content/case-studies";

// Case studies are fully static. This also makes the first request for an
// unknown slug wait for the full render, so it answers with a real 404
// instead of a 200 fallback shell.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return getCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.outcome,
    alternates: { canonical: `/work/${study.slug}` },
    openGraph: { title: study.title, description: study.outcome },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article className="pt-12 pb-24 sm:pt-16">
      <Container>
        <Link
          href="/#work"
          className="text-muted text-sm transition-colors hover:text-ink"
        >
          All work
        </Link>

        <header className="mt-8 max-w-[44rem]">
          <p className="text-muted">
            {study.company} · {study.role} · {study.period}
          </p>
          <ViewTransition
            name={`case-${study.slug}`}
            share="morph"
            default="none"
          >
            <h1 className="mt-3 text-balance font-semibold text-4xl leading-[1.08] tracking-[-0.025em] sm:text-5xl">
              {study.title}
            </h1>
          </ViewTransition>
          <p className="mt-5 text-lg text-muted">{study.outcome}</p>
        </header>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1fr_260px] lg:gap-20">
          <div className="max-w-[44rem] space-y-12">
            {study.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-semibold text-xl tracking-tight">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[1.0625rem] leading-relaxed">
                  {section.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <aside className="space-y-10 lg:sticky lg:top-24 lg:self-start">
            <dl className="space-y-6">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="sr-only">{metric.label}</dt>
                  <dd>
                    <span className="block font-semibold text-4xl text-accent tracking-tight">
                      {metric.value}
                    </span>
                    <span className="mt-1 block text-muted text-sm">
                      {metric.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
            <div>
              <h2 className="font-semibold text-sm">Stack</h2>
              <ul className="mt-3 space-y-1.5 text-muted text-sm">
                {study.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </article>
  );
}
