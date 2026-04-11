import type { MetadataRoute } from "next";
import { clinic } from "@/lib/clinic";
import { servicePages } from "@/lib/pages-data";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/despre-dr-miu",
    "/contact",
    "/blog",
    ...servicePages.map((page) => page.path),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];

  return staticPages.map((path) => ({
    url: `${clinic.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/blog/") ? 0.7 : 0.8,
  }));
}
