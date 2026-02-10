export default function Lacrosse() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900">Lacrosse</h1>
          <p className="text-lg text-stone-600 font-light">
            A sport that's shaped how I think about teams and leadership
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto px-6 pb-24 md:pb-32">
        <div className="space-y-12">
          {/* Playing for England */}
          <div className="space-y-6">
            <p className="text-stone-600 font-light leading-relaxed">
              I represented England in three World Indoor Lacrosse Championships—Canada (2007), Czech Republic (2011), and USA (2015). Playing on the world stage taught me a lot about pressure, preparation, and what it takes to compete at the highest level. I served as assistant captain twice, which gave me insight into how teams function under stress and what keeps people motivated when things get tough.
            </p>
          </div>

          {/* Building the Team */}
          <div className="space-y-6 border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-light tracking-tight text-stone-900">Growing the Game in England</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              When I started playing lacrosse, the sport barely existed in England outside a handful of people. I helped establish the <a href="https://englandboxlacrosse.org.uk/" className="text-stone-900 underline hover:text-stone-600 transition-colors">England Box Lacrosse Team</a>, which involved recruiting players, setting up training structures, and building a community around the sport. It's been rewarding to see it grow from nothing to a competitive national team.
            </p>
          </div>

          {/* Sharing Knowledge */}
          <div className="space-y-6 border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-light tracking-tight text-stone-900">Sharing What I've Learned</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              Over the years, I've written and spoken about the sport and its growth in the UK:
            </p>
            <ul className="space-y-2">
              <li className="text-stone-600 font-light">
                <a href="https://www.insidelacrosse.com/article/a-look-at-lacrosse-in-the-uk-south-of-england/ca5df587-a587-4111-9f77-1a51f6350c9f" className="text-stone-900 underline hover:text-stone-600 transition-colors">
                  Article: A Look at Lacrosse in the UK
                </a>
                {" "}— Inside Lacrosse
              </li>
              <li className="text-stone-600 font-light">
                <a href="https://laxallstars.com/how-does-england-lacrosse-grow-the-game/" className="text-stone-900 underline hover:text-stone-600 transition-colors">
                  Interview: How Does England Lacrosse Grow the Game?
                </a>
                {" "}— Lax All Stars
              </li>
            </ul>
          </div>

          {/* Lessons */}
          <div className="space-y-6 border-t border-stone-200 pt-6">
            <h2 className="text-2xl font-light tracking-tight text-stone-900">Why This Matters</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              Lacrosse taught me that building something meaningful requires more than individual talent. It requires patience, a clear vision, and the ability to inspire others to believe in that vision. The principles I learned on the field—how to lead a team, how to stay composed under pressure, how to build trust—directly apply to everything else I do in work and life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
