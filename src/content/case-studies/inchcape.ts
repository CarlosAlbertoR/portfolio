import type { CaseStudy } from "../types";

/**
 * Facts come from the Master CV. Anything not confirmed there is marked
 * TODO(carlos) and must be filled in by Carlos, not invented.
 * Keep client-internal names, code and screenshots out of this file.
 */
export const inchcape = {
  slug: "inchcape-multi-brand-platform",
  title: "One frontend platform for many brands, sites and languages",
  outcome:
    "A Next.js microfrontend architecture on a headless CMS, with one session shared across brand subdomains and build times cut by 25%.",
  company: "Inchcape Digital",
  role: "Frontend Architect",
  period: "Jun 2024 – Feb 2025",
  stack: [
    "Next.js",
    "Module Federation",
    "single-spa",
    "Umbraco (headless)",
    "Turborepo",
    "TypeScript",
  ],
  metrics: [
    {
      value: "25%",
      label:
        "shorter average CI build time after moving to a Turborepo monorepo",
    },
  ],
  sections: [
    {
      heading: "The problem",
      body: [
        "Inchcape operates digital channels for several automotive brands, each with its own sites and languages. The goal was one frontend platform that could serve all of them, with shared UI components and a single sign-in across brand sites.",
        // TODO(carlos): add the concrete starting point (how many brands/sites, what existed before).
      ],
    },
    {
      heading: "Architecture",
      body: [
        "I designed a multi-brand, multi-site, multi-language architecture with Next.js as the application layer, Module Federation to share code at runtime and single-spa to compose independently deployed microfrontends.",
        "Content lives in Umbraco, used as a headless CMS, so page content is managed outside the frontend codebase and delivered to it as structured data.",
      ],
    },
    {
      heading: "Shared sessions across subdomains",
      body: [
        "Each brand lives on its own subdomain. I defined secure cookie sharing across subdomains so users keep one authenticated session as they move between brand sites.",
      ],
    },
    {
      heading: "Build speed and shared UI",
      body: [
        "I built shared UI components and moved the builds into a Turborepo monorepo. Average CI build time dropped by 25%.",
      ],
    },
    {
      heading: "Making it last",
      body: [
        "Architecture only holds if teams can work inside it. I established documentation standards in Confluence, ran onboarding workshops for new teams and led code reviews and performance practices with the backend, UX and product teams.",
      ],
    },
  ],
  status: "published",
} satisfies CaseStudy;
