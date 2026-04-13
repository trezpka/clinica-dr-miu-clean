import type { MetadataRoute } from "next";
import { clinic } from "@/lib/clinic";
import { servicePages } from "@/lib/pages-data";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = clinic.domain;

  const staticPages = [
    "",
    "/despre-dr-miu",
    "/contact",
    "/blog",
  ];

  const serviceUrls = servicePages.map((page) => page.path);
  const blogUrls = blogPosts.map((post) => `/blog/${post.slug}`);

  const allUrls = [...staticPages, ...serviceUrls, ...blogUrls];

  return allUrls.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
