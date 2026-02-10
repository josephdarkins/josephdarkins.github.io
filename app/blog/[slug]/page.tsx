import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full">
      {/* Header */}
      <section className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-4">
          <Link
            href="/blog"
            className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-light inline-flex items-center gap-2"
          >
            ← Back to blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 pt-4">
            <time className="text-sm text-stone-600">{formattedDate}</time>
            {post.category && (
              <>
                <span className="text-stone-300">•</span>
                <span className="text-sm text-stone-600">{post.category}</span>
              </>
            )}
            {post.readingTime && (
              <>
                <span className="text-stone-300">•</span>
                <span className="text-sm text-stone-600">{post.readingTime} min read</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-2xl mx-auto px-6 pb-24 md:pb-32">
        <div className="prose prose-stone max-w-none space-y-6">
          {post.content.split("\n").map((paragraph, idx) => {
            // Handle headers
            if (paragraph.startsWith("# ")) {
              return (
                <h1 key={idx} className="text-3xl font-light tracking-tight text-stone-900 pt-6 pb-4">
                  {paragraph.replace(/^# /, "")}
                </h1>
              );
            }
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl font-light tracking-tight text-stone-900 pt-4 pb-3">
                  {paragraph.replace(/^## /, "")}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-light tracking-tight text-stone-900 pt-3 pb-2">
                  {paragraph.replace(/^### /, "")}
                </h3>
              );
            }

            // Handle lists
            if (paragraph.startsWith("- ")) {
              return (
                <li key={idx} className="text-stone-600 font-light ml-4 list-disc">
                  {paragraph.replace(/^- /, "")}
                </li>
              );
            }

            // Handle bold and italic
            let processedText = paragraph;
            processedText = processedText.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            processedText = processedText.replace(/\*(.*?)\*/g, "<em>$1</em>");

            // Regular paragraphs
            if (paragraph.trim()) {
              return (
                <p key={idx} className="text-stone-600 font-light leading-relaxed text-lg">
                  {processedText}
                </p>
              );
            }
            return null;
          })}
        </div>

        {/* Author Bio */}
        <div className="mt-16 pt-8 border-t border-stone-200 space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-light text-stone-900">Joseph Darkins</h3>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              CTO and technology leader with expertise in product strategy, AI, and building high-performing teams.
              I write about technology leadership, product development, and driving growth in ambitious
              organizations.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://twitter.com/josephdarkins"
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com/in/josephdarkins"
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="mailto:joseph.darkins@gmail.com"
                className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-light"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles / Footer */}
      <section className="bg-stone-100 py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl font-light tracking-tight text-stone-900">More Articles</h2>
          <p className="text-stone-600 font-light">
            Explore other thoughts on technology leadership and product strategy.
          </p>
          <Link
            href="/blog"
            className="inline-block px-6 py-2 border border-stone-300 text-stone-900 hover:border-stone-900 hover:bg-stone-50 transition-colors font-light"
          >
            Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
}
