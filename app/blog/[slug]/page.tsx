import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Articol | Clinica Dr. Miu",
      description: "Articol Clinica Dr. Miu",
    };
  }

  return {
    title: `${post.title} | Clinica Dr. Miu`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-6 space-y-3">
        <p className="text-sm text-slate-500">
          {post.category} · {post.publishedAt} · {post.readingTime}
        </p>
        <h1 className="text-3xl font-bold text-slate-950 md:text-4xl">
          {post.title}
        </h1>
        <p className="text-base leading-7 text-slate-600">{post.description}</p>
      </div>

      <article className="space-y-10">
        <section className="space-y-4">
          {post.intro.map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-slate-700">
              {paragraph}
            </p>
          ))}
        </section>

        {post.sections.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-950">
              {section.title}
            </h2>

            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-700">
                {paragraph}
              </p>
            ))}

            {section.bullets?.length ? (
              <ul className="list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </article>
    </main>
  );
}
