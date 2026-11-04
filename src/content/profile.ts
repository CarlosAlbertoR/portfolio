import type { Profile } from "./types";

export const profile = {
  name: "Carlos Alberto Ríos Naranjo",
  role: "Frontend Architect",
  location: "Manizales, Colombia · Remote",
  statement:
    "I design and modernize enterprise web platforms in Angular, React and Next.js, from microfrontend architecture to the CI pipeline that ships it.",
  about: [
    "Over the last 5+ years I have built platforms serving 100K+ users and 17,000+ suppliers, defined a multi-brand microfrontend architecture with Module Federation and single-spa, and moved large codebases forward without stopping delivery.",
    "Today I modernize production Angular applications at Apex Global Mobility. Before that I built a Next.js and NestJS platform end to end at an early-stage startup, which shaped how I think about frontend decisions: as product decisions with a cost.",
  ],
  email: "carlosalbertorios3@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/carlos-alberto-rios-naranjo",
    github: "https://github.com/CarlosAlbertoR",
    cv: "/carlos-rios-cv.pdf",
  },
  languages: ["Spanish (native)", "English (B2)"],
} satisfies Profile;
