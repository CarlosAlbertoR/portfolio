import { describe, expect, it } from "vitest";
import { serializeJsonLd } from "./json-ld";
import { formatMonth, formatPeriod } from "./site";

describe("formatMonth", () => {
  it("formats an ISO month without timezone drift", () => {
    expect(formatMonth("2024-06")).toBe("Jun 2024");
    expect(formatMonth("2025-01")).toBe("Jan 2025");
  });
});

describe("formatPeriod", () => {
  it("shows Present for current roles", () => {
    expect(formatPeriod("2025-11", null)).toBe("Nov 2025 – Present");
  });
});

describe("serializeJsonLd", () => {
  it("escapes < so the script tag cannot be closed early", () => {
    expect(serializeJsonLd({ x: "</script>" })).not.toContain("</script>");
  });
});
