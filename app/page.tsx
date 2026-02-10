import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section - Minimal */}
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight leading-tight text-stone-900">
              Technology Leader
            </h1>
            <p className="text-lg text-stone-600 font-light leading-relaxed">
              I'm a CTO and product strategist passionate about AI, technology leadership, and building
              ambitious organizations. I write about these topics and share lessons from working across
              startups, Fortune 500 companies, and sports tech.
            </p>
          </div>

          {/* Interests */}
          <div className="space-y-3">
            <p className="text-sm text-stone-500 font-light uppercase tracking-wide">Interests</p>
            <div className="flex flex-wrap gap-3">
              {["AI & Technology", "Product Strategy", "Leadership", "Lacrosse"].map((interest) => (
                <span key={interest} className="text-sm text-stone-700 font-light">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link
              href="/blog"
              className="inline-block px-6 py-2 bg-stone-900 text-white hover:bg-stone-800 transition-colors font-light"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-light tracking-tight text-stone-900 mb-2">Recent Articles</h2>
            <p className="text-stone-600 font-light text-sm">Latest thoughts on technology and leadership</p>
          </div>

          <div className="space-y-8">
            {recentPosts.map((post) => (
              <article key={post.slug} className="border-b border-stone-200 pb-8">
                <div className="space-y-3">
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-light text-stone-900 hover:text-stone-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <time>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    {post.category && (
                      <>
                        <span>•</span>
                        <span>{post.category}</span>
                      </>
                    )}
                    {post.readingTime && (
                      <>
                        <span>•</span>
                        <span>{post.readingTime} min read</span>
                      </>
                    )}
                  </div>
                  <p className="text-stone-600 font-light leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-stone-900 hover:text-stone-600 transition-colors font-light text-sm inline-flex items-center gap-2"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href="/blog"
              className="text-stone-900 hover:text-stone-600 transition-colors font-light inline-flex items-center gap-2"
            >
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-stone-100 py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-2xl font-light tracking-tight text-stone-900">About</h2>
          <p className="text-stone-600 font-light leading-relaxed">
            I've spent 15+ years building technology organizations across financial services, real estate, and sports.
            Currently a CTO, previously Head of Product at fintech and Fortune 500. I'm passionate about leveraging AI
            strategically and building teams that ship great products.
          </p>
          <p className="text-stone-600 font-light leading-relaxed">
            Outside of work, I represented England in three World Indoor Lacrosse Championships and helped found the
            England Box Lacrosse Team. I enjoy travel, reading, skiing, and exploring how technology shapes the future.
          </p>
          <Link href="/technology" className="inline-block text-stone-900 hover:text-stone-600 transition-colors font-light">
            Full background →
          </Link>
        </div>
      </section>
    </div>
  );
}
