import type { MetadataRoute } from "next";
import { clinic } from "@/lib/clinic";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${clinic.domain}/sitemap.xml`,
    host: clinic.domain,
  };
}
