import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/service-page-template";
import { servicePages } from "@/lib/pages-data";
import { buildMetadata, dentistJsonLd, faqJsonLd } from "@/lib/seo";

const page = servicePages.find((item) => item.path === "/aditie-osoasa-buzau")!;
export const metadata: Metadata = buildMetadata({ title: page.title, description: page.description, path: page.path });

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistJsonLd(page.description, page.path)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(page.faq)) }} />
      <ServicePageTemplate page={page} />
    </main>
  );
}
