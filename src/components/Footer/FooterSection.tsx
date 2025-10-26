import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1A1D2B] to-[#0F172A] text-gray-300">
      {/* Subtle glowing orbs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(6,182,212,0.25) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(6,182,212,0.25) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 z-10">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Branding / Intro */}
          <div className="space-y-6">
            <p className="max-w-sm text-gray-400 text-lg leading-relaxed">
              Empowering your business with intelligent automation and real-time AI solutions for a smarter future.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <Link href="#" target="_blank" className="hover:text-cyan-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>

              <Link href="#" target="_blank" className="hover:text-cyan-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-10">
            {[
              {
                title: 'Our Products',
                links: [
                  ['Dock-RP', '/dockrp-productpage'],
                  ['Shop-RP', '/shoprp-productpage'],
                  ['School-RP', '/schoolrp-productpage'],
                ],
              },
              {
                title: 'Company',
                links: [
                  ['Home', '/'],
                  ['About Us', '/about'],
                  ['Our Services', '/#projects-overview'],
                  ['Our Products', '/#our-products'],
                  ['Contact Us', '/#contact'],
                ],
              },
            ].map((section, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map(([name, href]) => (
                    <li key={href}>
                      <Link href={href} className="text-gray-400 hover:text-cyan-300 transition-colors">
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Crafted with <span className="text-pink-400">♥</span> by
          <span className="text-cyan-400 font-medium"> AI Innovators</span>.
        </div>
      </div>
    </footer>
  );
}
