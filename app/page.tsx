import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight text-stone-900">
              Technology leader driving ambitious growth
            </h1>
            <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl">
              CTO, Product Strategist, and builder of high-performing teams. I've led product and technology
              across Fortune 500 companies, startups, and sports tech. Passionate about AI and its potential to
              transform industries.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/about"
              className="px-8 py-3 bg-stone-900 text-white hover:bg-stone-800 transition-colors font-light text-center"
            >
              Learn More
            </Link>
            <Link
              href="/blog"
              className="px-8 py-3 border border-stone-300 text-stone-900 hover:border-stone-900 hover:bg-stone-50 transition-colors font-light text-center"
            >
              Read My Thoughts
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-stone-100 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-2">
              <p className="text-4xl font-light text-stone-900">$470M+</p>
              <p className="text-sm text-stone-600 font-light">Revenue led as Product Director at JLL</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-light text-stone-900">£850M</p>
              <p className="text-sm text-stone-600 font-light">Assets Under Management at RateSetter</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-light text-stone-900">20+</p>
              <p className="text-sm text-stone-600 font-light">Global teams built and led</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-2">Featured Work</h2>
            <p className="text-stone-600 font-light">A selection of projects that made impact</p>
          </div>

          <div className="space-y-8">
            {/* Project 1 */}
            <div className="border-l-2 border-stone-300 pl-6 space-y-3 hover:border-stone-900 transition-colors duration-300">
              <h3 className="text-xl font-light text-stone-900">JLL Residential Digital Transformation</h3>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                Led full digital transformation of global residential business while reducing budget by $240k
                annually. Delivered 440% increase in website sales over four years to $2.8m p/a.
              </p>
              <p className="text-xs text-stone-500">Product Strategy • Digital Transformation • Fortune 500</p>
            </div>

            {/* Project 2 */}
            <div className="border-l-2 border-stone-300 pl-6 space-y-3 hover:border-stone-900 transition-colors duration-300">
              <h3 className="text-xl font-light text-stone-900">RateSetter IFISA Launch</h3>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                Led product team to create innovative IFISA product achieving £170m in deposits in year one.
                Managed £850m in assets under management with £100m+ in new loans annually.
              </p>
              <p className="text-xs text-stone-500">Product Leadership • Fintech • Team Building</p>
            </div>

            {/* Project 3 */}
            <div className="border-l-2 border-stone-300 pl-6 space-y-3 hover:border-stone-900 transition-colors duration-300">
              <h3 className="text-xl font-light text-stone-900">Burnley FC Technology Overhaul</h3>
              <p className="text-stone-600 text-sm font-light leading-relaxed">
                Created Burnley's first technology department as CTO. Renegotiated 50% cost reduction in stadium
                hardware and identified 144 underperforming vendor contracts for replacement.
              </p>
              <p className="text-xs text-stone-500">CTO • Technology Strategy • Cost Optimization</p>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/projects"
              className="text-stone-900 hover:text-stone-600 transition-colors font-light inline-flex items-center gap-2"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 text-stone-50 py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Let's Build Something Great</h2>
            <p className="text-stone-300 font-light text-lg">
              Interested in technology leadership, product strategy, or collaborating on ambitious projects?
            </p>
          </div>
          <a
            href="mailto:joseph.darkins@gmail.com"
            className="inline-block px-8 py-3 bg-stone-50 text-stone-900 hover:bg-stone-200 transition-colors font-light"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
