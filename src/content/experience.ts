import type { Experience } from "./types";

/** Reverse-chronological. Mirrors the Master CV. */
export const experience = [
  {
    company: "Apex Global Mobility",
    role: "Frontend Developer",
    start: "2025-11",
    end: null,
    summary:
      "Upgraded 24 internal Angular repositories across major versions (18 → 20, now moving to 22), migrating projects to standalone components and Signals, and shipping features in a Native Federation microfrontend architecture.",
    stack: ["Angular", "Signals", "Native Federation", "TypeScript"],
  },
  {
    company: "Cosmo",
    role: "Founding Engineer (part-time)",
    start: "2025-06",
    end: "2026-10",
    summary:
      "Built a B2B sustainable-finance platform end to end: Next.js 16 and NestJS 11 in a Turborepo monorepo, PostgreSQL, ERP integrations and CI/CD.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Turborepo", "GitHub Actions"],
  },
  {
    company: "Inchcape Digital",
    role: "Frontend Architect",
    start: "2024-06",
    end: "2025-02",
    summary:
      "Designed a multi-brand, multi-site frontend architecture with Next.js, Module Federation and single-spa; cut build times by 25% with Turborepo.",
    stack: [
      "Next.js",
      "Module Federation",
      "single-spa",
      "Umbraco",
      "Turborepo",
    ],
    caseStudy: "inchcape-multi-brand-platform",
  },
  {
    company: "XpertGroup",
    role: "Frontend Developer (Development Analyst)",
    start: "2022-06",
    end: "2024-06",
    summary:
      "Developed Puntos Colombia for Businesses, a platform serving 100K+ users, with Angular, NgRx and RxJS.",
    stack: ["Angular", "NgRx", "RxJS", "Storybook"],
  },
  {
    company: "Intelcost (Suplos)",
    role: "Frontend Developer",
    start: "2021-06",
    end: "2022-06",
    summary:
      "Rebuilt the UI of a supply-chain platform serving 17,000+ suppliers and improved Core Web Vitals by 35%.",
    stack: ["Angular", "TypeScript", "RxJS"],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    start: "2019-07",
    end: "2021-05",
    summary:
      "Delivered web and mobile products for clients, from architecture to deployment.",
    stack: [
      "React",
      "Angular",
      "React Native",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "MySQL",
    ],
  },
] satisfies Experience[];
