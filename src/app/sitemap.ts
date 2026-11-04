import type { MetadataRoute } from "next";
import { getCaseStudies } from "@/content/case-studies";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl.href, changeFrequency: "monthly", priority: 1 },
    ...getCaseStudies().map((study) => ({
      url: new URL(`/work/${study.slug}`, siteUrl).href,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
