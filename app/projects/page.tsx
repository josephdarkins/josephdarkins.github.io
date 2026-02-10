export default function Projects() {
  const projects = [
    {
      title: "JLL Residential Digital Transformation",
      period: "2019-2023",
      company: "JLL (Fortune 500)",
      description:
        "Led the complete digital transformation of the global residential business with $470m in annual revenue. Implemented new platforms, modernized legacy systems, and reduced operational costs while driving significant revenue growth.",
      impact: [
        "440% increase in website sales over 4 years to $2.8m p/a",
        "Reduced digital transformation budget by $240k annually",
        "Launched global valuation platform supporting $400m growth projections",
      ],
      technologies: [
        "Product Strategy",
        "Digital Transformation",
        "Team Leadership",
        "Vendor Management",
      ],
    },
    {
      title: "AI Data Investment Platform",
      period: "2020-2023",
      company: "JLL",
      description:
        "Created new startup data products designed for institutional investors. Leveraged machine learning and AI to provide investment insights across real estate markets.",
      impact: ["$4.6m in annual fees", "$130k+ in direct revenue", "Multiple Fortune 500 clients"],
      technologies: ["AI/ML", "Product Development", "Enterprise Sales", "Data Analytics"],
    },
    {
      title: "RateSetter IFISA Launch",
      period: "2017-2018",
      company: "RateSetter",
      description:
        "Led the product team to design and launch an innovative Individual Savings Account product. This project required navigating complex regulatory requirements while creating an intuitive user experience that drove unprecedented adoption.",
      impact: ["£170m deposits in year one", "£850m total assets under management", "£100m+ new loans annually"],
      technologies: ["Product Strategy", "Fintech", "Regulatory Compliance", "Team Leadership"],
    },
    {
      title: "Burnley FC Technology Overhaul",
      period: "2024-Present",
      company: "Burnley Football Club",
      description:
        "Created the first dedicated technology department for a Premier League football club with £134m in revenue. Leading comprehensive technology modernization across football and business operations, from infrastructure to data strategy.",
      impact: [
        "50% reduction in stadium hardware costs",
        "500% reduction in refinancing costs",
        "144 underperforming vendor contracts identified and optimized",
        "£200k-£400k annual savings targeted",
      ],
      technologies: [
        "Technology Strategy",
        "Team Building",
        "Vendor Optimization",
        "Data Centralization",
        "Cyber Security",
      ],
    },
    {
      title: "IG Stockbroking Integration",
      period: "2012-2014",
      company: "IG (Financial Trading)",
      description:
        "Managed a complex £multi-million stockbroking platform integration project. Coordinated 100+ developers across concurrent releases on web, mobile (iOS/Android), professional desktop platforms, and web channels.",
      impact: [
        "Delivered on time and under budget",
        "Coordinated across 100+ developers",
        "Worked with external partners: Citi, JP Morgan, LSE",
      ],
      technologies: ["Program Management", "Multi-platform Development", "Financial Services", "Agile Leadership"],
    },
    {
      title: "Fonix Mobile Growth & Leadership",
      period: "2014-2016",
      company: "Fonix Mobile",
      description:
        "Led technology and product teams while the company achieved explosive growth in mobile payments and messaging. Doubled end-user spend while managing client relationships with major UK media organizations.",
      impact: [
        "End-user spend doubled to £95m annually",
        "Major client relationships: ITV, EE, Global Radio, Bauer Media",
        "Technology leadership driving product innovation",
        "Company IPO in 2020 for £90m",
      ],
      technologies: [
        "Product Leadership",
        "Mobile Technology",
        "Payments",
        "Client Relations",
        "Team Management",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900">Projects & Work</h1>
          <p className="text-lg text-stone-600 font-light">
            Selection of projects that created measurable impact
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-4xl mx-auto px-6 pb-24 md:pb-32">
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <div key={idx} className="border-b border-stone-200 pb-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-light text-stone-900">{project.title}</h2>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-sm text-stone-600 font-light">{project.company}</p>
                    <p className="text-sm text-stone-500">{project.period}</p>
                  </div>
                </div>

                <p className="text-stone-600 font-light leading-relaxed">{project.description}</p>

                {/* Impact */}
                <div className="space-y-2">
                  <h4 className="text-sm font-light text-stone-900 uppercase tracking-wide">Impact</h4>
                  <ul className="space-y-1">
                    {project.impact.map((item, i) => (
                      <li key={i} className="text-sm text-stone-600 font-light flex gap-3">
                        <span className="text-stone-400 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-stone-100 text-stone-700 text-xs font-light rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
