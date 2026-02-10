import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Blog() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category).filter(Boolean)));

  return (
    <div className="w-full">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900">Articles & Insights</h1>
          <p className="text-lg text-stone-600 font-light">
            Thoughts on technology leadership, product strategy, AI, and building ambitious organizations
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-4xl mx-auto px-6 pb-24 md:pb-32">
        <div className="space-y-12">
          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <span key={cat} className="px-3 py-1 bg-stone-100 text-stone-700 text-xs font-light rounded">
                  {cat}
                </span>
              ))}
            </div>
          )}

          {/* Posts List */}
          <div className="space-y-8">
            {posts.length === 0 ? (
              <div className="py-12">
                <p className="text-stone-600 font-light">No posts yet. Check back soon!</p>
              </div>
            ) : (
              posts.map((post) => (
                <article key={post.slug} className="border-b border-stone-200 pb-8">
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between gap-4">
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-2xl font-light text-stone-900 hover:text-stone-600 transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      <time className="text-sm text-stone-500 whitespace-nowrap">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>

                    <p className="text-stone-600 font-light leading-relaxed">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex gap-4 text-xs text-stone-500">
                        {post.category && <span>{post.category}</span>}
                        {post.readingTime && <span>{post.readingTime} min read</span>}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-stone-900 hover:text-stone-600 transition-colors font-light inline-flex items-center gap-2"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-stone-100 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-stone-900">
            Want to stay updated?
          </h2>
          <p className="text-stone-600 font-light max-w-md mx-auto">
            I write about technology leadership, product strategy, and building ambitious organizations.
          </p>
        </div>
      </section>
    </div>
  );
}
