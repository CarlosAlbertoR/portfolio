import type { CaseStudy } from "../types";
import { inchcape } from "./inchcape";

/** Register new case studies here. Order = order in the work list. */
const all: CaseStudy[] = [inchcape];

export function getCaseStudies(): CaseStudy[] {
  return all.filter((study) => study.status === "published");
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getCaseStudies().find((study) => study.slug === slug);
}
