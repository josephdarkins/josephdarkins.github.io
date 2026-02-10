import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://josephdarkins.com";

  // Static pages
  const staticPages = [
    "",
    "about",
    "lacrosse",
    "blog",
  ].map((page) => ({
    url: `${baseUrl}${page ? "/" + page : ""}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1.0 : 0.8,
  }));

  // Blog posts
  const posts = getAllPosts();
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
