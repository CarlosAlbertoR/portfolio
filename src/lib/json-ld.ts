import { profile } from "@/content/profile";
import { siteUrl } from "./site";

/** schema.org Person, rendered on the home page for search engines. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: siteUrl.href,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manizales",
      addressCountry: "CO",
    },
    sameAs: [profile.links.linkedin, profile.links.github],
    knowsAbout: [
      "Frontend architecture",
      "Microfrontends",
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "Web performance",
    ],
  };
}

/** Serializes JSON-LD safely for a <script> tag (escapes "<"). */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
