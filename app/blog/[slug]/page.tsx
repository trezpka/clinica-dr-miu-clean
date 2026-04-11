import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/components/blog-post-template";
import { blogPosts } from "@/lib/blog-data";
import { buildMetadata, dentistJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    return buildMetadata({
      title: "Articol | Clinica Dr. Miu",
      description: "Articol informativ din blogul Clinicii Dr. Miu.",
      path: "/blog",
    });
  }

  return buildMetadata({
    title: `${post.title} | Blog Clinica Dr. Miu`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const jsonLd = dentistJsonLd(post.description, `/blog/${post.slug}`);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostTemplate post={post} />
    </>
  );
}
