import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/blog-data";
import { SectionTitle } from "@/components/section-title";
import { BlogList } from "@/components/blog-list";

export const metadata: Metadata = buildMetadata({
  title: "Blog | Implantologie și chirurgie dento-alveolară în Buzău | Clinica Dr. Miu",
  description:
    "Articole utile despre implant dentar, implantologie, adiție osoasă, sinus lift și All-on-X, scrise pentru pacienții care caută informații clare în Buzău.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.85),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(248,250,252,1),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionTitle
            eyebrow="Blog"
            title="Informații utile despre implant dentar, implantologie și chirurgie orală"
            description="Conținut scris clar, într-un ton calm și medical, pentru pacienții care vor să înțeleagă mai bine tratamentele și opțiunile disponibile."
          />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <BlogList posts={blogPosts} />
        </div>
      </section>
    </main>
  );
}
