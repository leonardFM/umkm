import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  "use cache";
  const lastModified = new Date();
  const sections = ["", "#katalog", "#keunggulan", "#testimoni", "#faq"];

  return sections.map((section, index) => ({
    url: `${siteConfig.url}/${section}`,
    lastModified,
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.7,
    images: index === 0 ? [`${siteConfig.url}/images/hero-cireng.png`] : undefined,
  }));
}
