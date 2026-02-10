import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full">
      <section className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900">
            Page not found
          </h1>
          <p className="text-lg text-stone-600 font-light leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-stone-900 text-white hover:bg-stone-800 transition-colors font-light"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
