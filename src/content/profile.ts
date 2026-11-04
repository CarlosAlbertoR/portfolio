import type { Profile } from "./types";

export const profile = {
  name: "Carlos Alberto Ríos Naranjo",
  role: "Frontend Architect",
  location: "Manizales, Colombia",
  statement:
    "Frontend Architect with 5+ years in Angular, React and Next.js, and full stack delivery with NestJS and PostgreSQL. I focus on microfrontend architecture, framework migrations and web performance.",
  about: [
    "I have built platforms serving 100K+ users and 17,000+ suppliers, designed a multi-brand microfrontend architecture with Module Federation and single-spa, and improved Core Web Vitals by 35% on a supply-chain platform.",
    "Today I modernize production Angular applications at Apex Global Mobility. Before that I built a Next.js and NestJS platform end to end at an early-stage startup, including the API, database, ERP integrations and CI/CD.",
  ],
  openTo: [
    "Frontend Architect",
    "Senior Frontend Developer",
    "Full Stack Engineer",
  ],
  engagement: ["full-time", "contract"],
  email: "carlosalbertorios3@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/carlos-alberto-rios-naranjo",
    github: "https://github.com/CarlosAlbertoR",
    cv: "/carlos-rios-cv.pdf",
  },
  languages: ["Spanish (native)", "English (B2)"],
} satisfies Profile;
