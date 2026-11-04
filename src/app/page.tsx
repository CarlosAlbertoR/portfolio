import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { getCaseStudies } from "@/content/case-studies";
import { experience } from "@/content/experience";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { skills } from "@/content/skills";
import { personJsonLd, serializeJsonLd } from "@/lib/json-ld";
import { formatList, formatPeriod } from "@/lib/site";

export default function HomePage() {
  const caseStudies = getCaseStudies();

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: serialized JSON-LD, "<" escaped.
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(personJsonLd()) }}
      />

      {/* Hero */}
      <Container className="grid items-center gap-12 pt-14 pb-16 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pt-24">
        <div>
          <p className="text-muted">
            Open to remote roles · {profile.location}
          </p>
          <h1 className="mt-5 max-w-[17ch] text-balance font-semibold text-[2.6rem] leading-[1.05] tracking-[-0.03em] sm:text-6xl">
            I design, build and modernize enterprise web platforms.
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg text-muted">
            {profile.statement}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/#work"
              className="rounded-full bg-accent px-5 py-2.5 font-medium text-accent-ink transition-transform active:scale-[0.98]"
            >
              Read the case study
            </Link>
            <a
              href={profile.links.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-2 rounded-full border border-line px-5 py-2.5 font-medium transition-colors hover:border-ink"
            >
              View CV
              <span className="font-mono text-muted text-xs">PDF</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <ArchitectureDiagram />
        </div>
      </Container>

      <Section
        id="work"
        title="Selected work"
        intro="How the architecture was decided, not only what was built."
      >
        <ul className="divide-y divide-line border-line border-y">
          {caseStudies.map((study) => (
            <li key={study.slug}>
              <Link
                href={`/work/${study.slug}`}
                className="group grid gap-3 py-8 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
              >
                <div>
                  <p className="text-muted text-sm">
                    {study.company} · {study.period}
                  </p>
                  <ViewTransition
                    name={`case-${study.slug}`}
                    share="morph"
                    default="none"
                  >
                    <h3 className="mt-2 max-w-[28ch] text-balance font-semibold text-2xl tracking-tight transition-colors group-hover:text-accent sm:text-3xl">
                      {study.title}
                    </h3>
                  </ViewTransition>
                  <p className="mt-3 max-w-[60ch] text-muted">
                    {study.outcome}
                  </p>
                </div>
                <span className="font-medium text-accent text-sm">
                  Read the case study
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="mt-16 font-semibold text-lg">Open-source projects</h3>
        <ul className="mt-6 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.name} className="border-line border-t pt-5">
              <h4 className="font-semibold">{project.name}</h4>
              <p className="mt-2 text-muted text-sm">{project.description}</p>
              <p className="mt-3 text-muted text-xs">
                {project.stack.join(", ")}
              </p>
              <p className="mt-4 flex gap-4 text-sm">
                <a
                  href={project.repo}
                  className="font-medium text-accent underline-offset-4 hover:underline"
                >
                  Source code
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    Live demo
                  </a>
                ) : null}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="experience"
        title="Experience"
        intro="Six roles, from freelance products to enterprise platforms."
      >
        <ol className="relative border-line border-l">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.start}`}
              className="relative pb-10 pl-7 last:pb-0"
            >
              <span
                aria-hidden="true"
                className={`absolute top-2 -left-[5px] size-[9px] rounded-full ${
                  job.end === null ? "bg-signal" : "bg-line"
                }`}
              />
              <p className="text-muted text-sm">
                <time dateTime={job.start}>
                  {formatPeriod(job.start, job.end)}
                </time>
              </p>
              <h3 className="mt-1 font-semibold text-lg">
                {job.role}, {job.company}
              </h3>
              <p className="mt-2 max-w-[64ch] text-muted">{job.summary}</p>
              {job.caseStudy ? (
                <Link
                  href={`/work/${job.caseStudy}`}
                  className="mt-3 inline-block font-medium text-accent text-sm underline-offset-4 hover:underline"
                >
                  Read the case study
                </Link>
              ) : null}
            </li>
          ))}
        </ol>
      </Section>

      <Section id="skills" title="Stack">
        <dl className="grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.name}>
              <dt className="font-semibold">{group.name}</dt>
              <dd className="mt-2 text-muted">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="contact" title="About">
        <div className="grid gap-10 sm:grid-cols-[1fr_200px] sm:items-start">
          <div className="max-w-[62ch] space-y-4 text-lg">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className="pt-4">
              I am open to remote roles as a {formatList(profile.openTo)},{" "}
              {formatList(profile.engagement)}. Write to{" "}
              <a
                href={`mailto:${profile.email}`}
                className="font-medium text-accent underline underline-offset-4"
              >
                {profile.email}
              </a>{" "}
              or find me on{" "}
              <a
                href={profile.links.linkedin}
                className="font-medium text-accent underline underline-offset-4"
              >
                LinkedIn
              </a>{" "}
              and{" "}
              <a
                href={profile.links.github}
                className="font-medium text-accent underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <Image
            src="/carlos-rios.jpg"
            alt={`Portrait of ${profile.name}`}
            width={400}
            height={400}
            sizes="200px"
            className="aspect-square w-[160px] rounded-2xl object-cover sm:w-full"
          />
        </div>
      </Section>
    </>
  );
}
