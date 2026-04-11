import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog-data";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {posts.map((post) => (
        <Card key={post.slug} className="rounded-[1.75rem] border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
          <CardContent className="flex h-full flex-col p-6">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{post.category}</div>
            <h3 className="mt-3 text-lg font-semibold text-slate-950">{post.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{post.description}</p>
            <div className="mt-4 text-xs text-slate-500">{post.readingTime}</div>
            <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-950">
              Citește articolul →
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
