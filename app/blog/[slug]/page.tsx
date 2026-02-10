import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = getPostSlugs();
  if (slugs.length === 0) {
    return [];
  }
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
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-light tracking-tight text-stone-900 pt-6 pb-4">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-light tracking-tight text-stone-900 pt-4 pb-3">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-light tracking-tight text-stone-900 pt-3 pb-2">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-stone-600 font-light leading-relaxed text-lg">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="space-y-2 ml-4 list-disc">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="space-y-2 ml-4 list-decimal">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-stone-600 font-light">
                  {children}
                </li>
              ),
              strong: ({ children }) => (
                <strong className="font-medium text-stone-900">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="italic">{children}</em>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-stone-900 underline hover:text-stone-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-stone-300 pl-4 italic text-stone-500">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-stone-100 px-1.5 py-0.5 rounded text-sm font-mono text-stone-800">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-stone-100 p-4 rounded overflow-x-auto text-sm">
                  {children}
                </pre>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
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
                X
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
