import { SectionTitle } from "@/components/section-title";
import { BulletList } from "@/components/bullet-list";
import { ContactCTA } from "@/components/contact-cta";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog-data";

export function BlogPostTemplate({ post }: { post: BlogPost }) {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,232,240,0.85),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(248,250,252,1),transparent_32%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{post.category} · {post.readingTime}</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">{post.title}</h1>
          <div className="mt-6 space-y-4 text-lg leading-8 text-slate-600">
            {post.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="space-y-10">
          {post.sections.map((section) => (
            <Card key={section.title} className="rounded-[1.75rem] border-slate-200 shadow-sm">
              <CardContent className="p-8">
                <SectionTitle eyebrow="Articol" title={section.title} description="" />
                <div className="mt-6 space-y-4 text-base leading-8 text-slate-700">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets?.length ? <div className="mt-6"><BulletList items={section.bullets} /></div> : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <ContactCTA
        title="Programează o consultație la Clinica Dr. Miu"
        text="Dacă vrei o evaluare corectă a situației tale clinice și un plan de tratament explicat clar, te așteptăm la consultație."
      />
    </main>
  );
}
