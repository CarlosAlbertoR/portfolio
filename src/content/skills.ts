import type { SkillGroup } from "./types";

export const skills = [
  {
    name: "Frontend",
    items: [
      "Angular (12–22)",
      "React",
      "Next.js",
      "TypeScript",
      "Signals",
      "NgRx",
      "RxJS",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
  },
  {
    name: "Architecture",
    items: [
      "Microfrontends",
      "Module Federation",
      "Native Federation",
      "single-spa",
      "Nx",
      "Turborepo",
      "Headless CMS",
      "Storybook",
    ],
  },
  {
    name: "Backend & delivery",
    items: [
      "NestJS",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "Docker",
      "GitHub Actions",
      "AWS",
    ],
  },
  {
    name: "Quality",
    items: [
      "Jest",
      "Vitest",
      "Playwright",
      "Jasmine",
      "Karma",
      "Core Web Vitals",
      "Code review",
    ],
  },
] satisfies SkillGroup[];
