import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.clinicadrmiu.ro";

  const urls = [
    "/",
    "/despre-dr-miu",
    "/contact",
    "/blog",
    "/implant-dentar-buzau",
    "/implantologie-buzau",
    "/sinus-lift-buzau",
    "/aditie-osoasa-buzau",
    "/all-on-x-buzau",
    "/chirurgie-dento-alveolara-buzau",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
