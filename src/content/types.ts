/**
 * Content model for the portfolio.
 *
 * All content is typed data in `src/content`. Pages read it at build time,
 * so every route is fully static. Facts here must match the Master CV:
 * never add metrics, employers or technologies that are not in it.
 */

export type Link = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  /** One sentence shown under the name in the hero. */
  statement: string;
  /** Short paragraph for the about section. */
  about: string[];
  /** Roles Carlos is open to, shown in the hero and contact section. */
  openTo: string[];
  /** Engagement types, e.g. "full-time". */
  engagement: string[];
  email: string;
  links: {
    linkedin: string;
    github: string;
    cv: string;
  };
  languages: string[];
};

export type Experience = {
  company: string;
  role: string;
  /** ISO year-month, e.g. "2024-06". */
  start: string;
  /** ISO year-month, or null while the role is current. */
  end: string | null;
  summary: string;
  stack: string[];
  /** Slug of a published case study for this role, if any. */
  caseStudy?: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  /** One line shown in the work list. */
  outcome: string;
  company: string;
  role: string;
  period: string;
  stack: string[];
  metrics: Metric[];
  sections: CaseStudySection[];
  /** Drafts are excluded from lists, routes and the sitemap. */
  status: "published" | "draft";
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  repo: string;
  demo?: string;
};

export type SkillGroup = {
  name: string;
  items: string[];
};
