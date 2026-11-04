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
    "A Next.js microfrontend architecture on a headless CMS, with shared sessions across brand subdomains and builds 25% faster.",
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
        "Inchcape runs digital experiences for several automotive brands, each with its own sites and languages. The frontend had to let brand teams ship independently while keeping one platform, one design language and one way of signing in.",
        // TODO(carlos): add the concrete starting point (how many brands/sites, what existed before).
      ],
    },
    {
      heading: "Architecture",
      body: [
        "I designed a multi-brand, multi-site, multi-language architecture with Next.js as the application layer, Module Federation to share code at runtime and single-spa to compose independently deployed microfrontends.",
        "Content lives in Umbraco used as a headless CMS, so editors manage each brand's pages without frontend releases, and the frontend stays a pure consumer of structured content.",
      ],
    },
    {
      heading: "Shared sessions across subdomains",
      body: [
        "Each brand lives on its own subdomain, but users should not sign in again when they move between them. I defined secure cookie sharing across subdomains so authentication and session state stay consistent between brand sites.",
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
