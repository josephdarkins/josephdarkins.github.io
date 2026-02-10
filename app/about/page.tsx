export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900">About Me</h1>
          <p className="text-lg text-stone-600 font-light">
            Technology leader with a passion for building great teams and driving growth
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 pb-24 md:pb-32">
        <div className="space-y-12">
          {/* Career Journey */}
          <div className="space-y-6">
            <h2 className="text-2xl font-light tracking-tight text-stone-900">Career Journey</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              I've had the privilege of building technology and product organizations across some of the world's
              most interesting companies. My journey started as a software engineer at Thompson Reuters, where I
              led the development of next-generation frameworks serving 300k+ end users globally. From there, I've
              progressively taken on greater responsibility—from business analysis at Markit, to program management
              at IG managing multi-million pound integrations, to executive leadership roles.
            </p>
          </div>

          {/* Career Timeline */}
          <div className="space-y-6">
            <h3 className="text-xl font-light text-stone-900">Timeline</h3>
            <div className="space-y-8">
              <div className="border-l-2 border-stone-300 pl-6 space-y-2">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-light text-stone-900">Chief Technology Officer</h4>
                  <span className="text-sm text-stone-500">2024 - Present</span>
                </div>
                <p className="text-stone-600 text-sm font-light">Burnley Football Club</p>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  Created the first technology department for a £134m revenue Premier League club. Leading technology
                  strategy, team building, and vendor optimization.
                </p>
              </div>

              <div className="border-l-2 border-stone-300 pl-6 space-y-2">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-light text-stone-900">Senior Product Director</h4>
                  <span className="text-sm text-stone-500">2019 - 2023</span>
                </div>
                <p className="text-stone-600 text-sm font-light">JLL (Fortune 500)</p>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  Global product lead for residential, valuations, and hotels businesses supporting $470m in annual
                  revenue. Led teams of 20+ across EMEA and USA. Launched new platforms and drove $4.6m in fees from
                  AI data products.
                </p>
              </div>

              <div className="border-l-2 border-stone-300 pl-6 space-y-2">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-light text-stone-900">Head of Product</h4>
                  <span className="text-sm text-stone-500">2017 - 2018</span>
                </div>
                <p className="text-stone-600 text-sm font-light">RateSetter</p>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  Led product team managing £850m in assets under management. Created innovative IFISA product with
                  £170m in deposits in year one. Member of senior leadership team.
                </p>
              </div>

              <div className="border-l-2 border-stone-300 pl-6 space-y-2">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-light text-stone-900">Director of Technology</h4>
                  <span className="text-sm text-stone-500">2014 - 2016</span>
                </div>
                <p className="text-stone-600 text-sm font-light">Fonix Mobile</p>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  Led technology and product teams while company doubled end user spend to £95m annually. Managed
                  relationships with major broadcasters and media companies. (IPO in 2020 for £90m)
                </p>
              </div>

              <div className="border-l-2 border-stone-300 pl-6 space-y-2">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-light text-stone-900">Project Manager Team Leader</h4>
                  <span className="text-sm text-stone-500">2012 - 2014</span>
                </div>
                <p className="text-stone-600 text-sm font-light">IG (Financial Trading)</p>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  Program managed £multi-million stockbroking integration using 100+ developers across web, mobile,
                  and professional platforms.
                </p>
              </div>

              <div className="border-l-2 border-stone-300 pl-6 space-y-2">
                <div className="flex items-baseline justify-between">
                  <h4 className="font-light text-stone-900">Earlier Roles</h4>
                  <span className="text-sm text-stone-500">2006 - 2012</span>
                </div>
                <p className="text-stone-600 text-sm font-light leading-relaxed">
                  Business Analyst at Markit (OTC derivatives), Team Leader/Software Developer at Thompson Reuters
                  (Next Generation Framework), and took a career break for world travel.
                </p>
              </div>
            </div>
          </div>

          {/* What I Do */}
          <div className="space-y-6 pt-6">
            <h2 className="text-2xl font-light tracking-tight text-stone-900">What I Do</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              I build and lead technology organizations that drive growth. My focus is on translating complex
              technical challenges into business value. I'm passionate about:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-4 text-stone-600 font-light">
                <span className="text-stone-900 flex-shrink-0">→</span>
                <span>Building high-performing teams and fostering inclusive engineering cultures</span>
              </li>
              <li className="flex gap-4 text-stone-600 font-light">
                <span className="text-stone-900 flex-shrink-0">→</span>
                <span>Creating product strategies that solve real business problems</span>
              </li>
              <li className="flex gap-4 text-stone-600 font-light">
                <span className="text-stone-900 flex-shrink-0">→</span>
                <span>Leveraging AI to unlock competitive advantages</span>
              </li>
              <li className="flex gap-4 text-stone-600 font-light">
                <span className="text-stone-900 flex-shrink-0">→</span>
                <span>Digital transformation across legacy organizations</span>
              </li>
              <li className="flex gap-4 text-stone-600 font-light">
                <span className="text-stone-900 flex-shrink-0">→</span>
                <span>Managing through complexity, uncertainty, and change</span>
              </li>
            </ul>
          </div>

          {/* Skills & Expertise */}
          <div className="space-y-6 pt-6 border-t border-stone-200">
            <h2 className="text-2xl font-light tracking-tight text-stone-900">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-light text-stone-900">Leadership</h3>
                <ul className="space-y-2 text-sm text-stone-600 font-light">
                  <li>• Executive team building and management</li>
                  <li>• Global team leadership (EMEA, USA, APAC)</li>
                  <li>• Board-level strategy and communication</li>
                  <li>• Organizational design and scaling</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-light text-stone-900">Product & Technology</h3>
                <ul className="space-y-2 text-sm text-stone-600 font-light">
                  <li>• Product strategy and roadmapping</li>
                  <li>• Technology architecture and scalability</li>
                  <li>• Digital transformation initiatives</li>
                  <li>• AI/ML product implementation</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-light text-stone-900">Business</h3>
                <ul className="space-y-2 text-sm text-stone-600 font-light">
                  <li>• Budget management and cost optimization</li>
                  <li>• Vendor negotiation and procurement</li>
                  <li>• M&A due diligence and integration</li>
                  <li>• Financial acumen across fintech/real estate</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-light text-stone-900">Industries</h3>
                <ul className="space-y-2 text-sm text-stone-600 font-light">
                  <li>• Financial services & capital markets</li>
                  <li>• Real estate technology</li>
                  <li>• Sports technology</li>
                  <li>• Mobile payments & fintech</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Personal */}
          <div className="space-y-6 pt-6 border-t border-stone-200">
            <h2 className="text-2xl font-light tracking-tight text-stone-900">Beyond Work</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              I'm a competitive athlete and represented England in the World Indoor Lacrosse Championships three
              times (USA 2015, Czech Republic 2011, Canada 2007), serving as assistant captain twice. I helped found
              the England Box Lacrosse Team and remain passionate about the sport. Beyond lacrosse, I enjoy keeping
              fit, cycling, reading, and international travel with my family.
            </p>
            <p className="text-stone-600 font-light leading-relaxed">
              I'm based in the UK and hold a Master of Engineering from the University of Reading (2001-2005).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
