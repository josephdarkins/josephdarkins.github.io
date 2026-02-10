import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-white font-light text-lg mb-4">Joseph Darkins</h3>
            <p className="text-sm text-stone-400 leading-relaxed">
              Technology leader, CTO, and product strategist with expertise in AI,
              digital transformation, and driving growth.
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-light text-sm mb-4 uppercase tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-stone-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-stone-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-stone-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-white font-light text-sm mb-4 uppercase tracking-wide">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/josephdarkins"
                  className="text-stone-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/josephdarkins"
                  className="text-stone-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:joseph.darkins@gmail.com"
                  className="text-stone-400 hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800">
          <p className="text-xs text-stone-500 text-center">
            © {currentYear} Joseph Darkins. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
