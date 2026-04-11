import { blogPosts } from "@/lib/blog-data";

describe("blogPosts", () => {
  it("contains at least 4 blog posts", () => {
    expect(blogPosts.length).toBeGreaterThanOrEqual(4);
  });

  it("ensures each blog post has sections and metadata", () => {
    blogPosts.forEach((post) => {
      expect(post.slug.length).toBeGreaterThan(3);
      expect(post.title.length).toBeGreaterThan(10);
      expect(post.description.length).toBeGreaterThan(30);
      expect(post.sections.length).toBeGreaterThanOrEqual(2);
    });
  });
});
