import { describe, expect, it } from "vitest";
import { getCaseStudies, getCaseStudy } from "./case-studies";
import { experience } from "./experience";
import { profile } from "./profile";

const isoMonth = /^\d{4}-(0[1-9]|1[0-2])$/;

describe("experience", () => {
  it("uses ISO months and ends after it starts", () => {
    for (const job of experience) {
      expect(job.start).toMatch(isoMonth);
      if (job.end !== null) {
        expect(job.end).toMatch(isoMonth);
        expect(job.end >= job.start).toBe(true);
      }
    }
  });

  it("is in reverse-chronological order", () => {
    const starts = experience.map((job) => job.start);
    expect(starts).toEqual([...starts].sort().reverse());
  });

  it("only links to published case studies", () => {
    for (const job of experience) {
      if (job.caseStudy) expect(getCaseStudy(job.caseStudy)).toBeDefined();
    }
  });
});

describe("case studies", () => {
  it("have unique, URL-safe slugs", () => {
    const slugs = getCaseStudies().map((study) => study.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("have at least one section with content", () => {
    for (const study of getCaseStudies()) {
      expect(study.sections.length).toBeGreaterThan(0);
      for (const section of study.sections) {
        expect(section.body.length).toBeGreaterThan(0);
      }
    }
  });
});

describe("profile", () => {
  it("links use https", () => {
    expect(profile.links.linkedin).toMatch(/^https:\/\//);
    expect(profile.links.github).toMatch(/^https:\/\//);
  });
});
