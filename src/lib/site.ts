import { profile } from "@/content/profile";

/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL in Vercel once the domain is
 * known; Vercel's production URL is the fallback.
 */
export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
);

export const siteTitle = `${profile.name} — ${profile.role}`;

export const siteDescription =
  "Frontend Architect specialized in Angular, React and Next.js: microfrontend architecture, framework migrations and web performance.";

export function formatMonth(isoMonth: string): string {
  const [year, month] = isoMonth.split("-").map(Number);
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1)));
}

export function formatPeriod(start: string, end: string | null): string {
  return `${formatMonth(start)} – ${end ? formatMonth(end) : "Present"}`;
}
