import { clinic } from "@/lib/clinic";
import { servicePages } from "@/lib/pages-data";
import { blogPosts } from "@/lib/blog-data";

export async function GET() {
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

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map((path) => {
    return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`;
  })
  .join("")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
