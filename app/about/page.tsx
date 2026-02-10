export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900">About</h1>
          <p className="text-lg text-stone-600 font-light">
            My background in technology leadership and team building
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto px-6 pb-24 md:pb-32">
        <div className="space-y-12">
          {/* Career Journey */}
          <div className="space-y-6">
            <h2 className="text-2xl font-light tracking-tight text-stone-900">Career</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              I've spent 15+ years building technology organizations. I started as a software engineer at Thompson
              Reuters, where I led the development of frameworks serving hundreds of thousands of users. From there, I
              progressed through increasingly senior roles across financial services (Markit, IG, RateSetter), real
              estate (JLL), mobile payments (Fonix), and sports (Burnley FC).
            </p>
            <p className="text-stone-600 font-light leading-relaxed">
              My current role is CTO at Burnley Football Club. I've also served as Head of Product at high-growth
              fintech and Fortune 500 companies. Throughout my career, I've built and led global teams, driven product
              strategy, and navigated complex organizations through digital transformation.
            </p>
          </div>

          {/* What I Do */}
          <div className="space-y-6 border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-light tracking-tight text-stone-900">What I Focus On</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              I'm passionate about leveraging technology strategically to create business value. My focus areas
              include:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-4 text-stone-600 font-light">
                <span className="text-stone-900 flex-shrink-0">→</span>
                <span>Building and leading high-performing technology teams</span>
              </li>
              <li className="flex gap-4 text-stone-600 font-light">
                <span className="text-stone-900 flex-shrink-0">→</span>
                <span>Product strategy and creating customer value</span>
              </li>
              <li className="flex gap-4 text-stone-600 font-light">
                <span className="text-stone-900 flex-shrink-0">→</span>
                <span>Implementing AI strategically across organizations</span>
              </li>
              <li className="flex gap-4 text-stone-600 font-light">
                <span className="text-stone-900 flex-shrink-0">→</span>
                <span>Digital transformation in complex environments</span>
              </li>
              <li className="flex gap-4 text-stone-600 font-light">
                <span className="text-stone-900 flex-shrink-0">→</span>
                <span>Leadership and organizational design at scale</span>
              </li>
            </ul>
          </div>

          {/* Lacrosse */}
          <div className="space-y-6 border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-light tracking-tight text-stone-900">Lacrosse</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              I represented England in three World Indoor Lacrosse Championships (Canada 2007, Czech Republic 2011, USA
              2015), serving as assistant captain twice. I was instrumental in founding the England Box Lacrosse Team
              and remain passionate about the sport.
            </p>
            <p className="text-stone-600 font-light leading-relaxed">
              The sport has taught me lessons fundamental to leadership: the importance of teamwork, performing under
              pressure, continuous improvement, and building cultures that attract talented people.
            </p>
          </div>

          {/* Personal */}
          <div className="space-y-6 border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-light tracking-tight text-stone-900">Personal</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              I'm based in the UK and hold a Master of Engineering from the University of Reading. Beyond work and
              lacrosse, I enjoy travel, reading, skiing, and exploring how technology is shaping the future. I'm
              interested in AI, business strategy, organizational leadership, and how to build ambitious teams.
            </p>
          </div>

          {/* CTA */}
          <div className="space-y-6 border-t border-stone-200 pt-6">
            <p className="text-stone-600 font-light">
              If you'd like to discuss technology leadership, product strategy, or collaborate on interesting
              projects, feel free to reach out.
            </p>
            <a
              href="mailto:joseph.darkins@gmail.com"
              className="inline-block px-6 py-2 border border-stone-300 text-stone-900 hover:border-stone-900 hover:bg-stone-50 transition-colors font-light"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
