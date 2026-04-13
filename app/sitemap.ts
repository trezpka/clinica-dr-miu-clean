export async function GET() {
  const baseUrl = "https://www.clinicadrmiu.ro";

  const urls = [
    "",
    "/despre-dr-miu",
    "/contact",
    "/blog",
  ];

  const allUrls = urls.map((path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
