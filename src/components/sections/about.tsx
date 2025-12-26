import { Code, Shield, Users } from "lucide-react"

export default function About() {
  return (
    <section id="about" aria-label="About section" className="relative py-24 bg-black/10 backdrop-blur-xs z-20 h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
          <div className="text-center mb-16">
            <h2 className="text-6xl tracking-tight font-bold md:text-5xl font-light text-white mb-4">About</h2>
            <p className="text-2xl text-gray-400 max-w-2xl mx-auto font-light">
              Chicago-based developer creating digital solutions that matter
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors border border-green-500/20">
                <Code className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Web Development</h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                Custom websites and applications built with modern technologies
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors border border-green-500/20">
                <Shield className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">IT Support</h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                Comprehensive support and cloud solutions for businesses
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors border border-green-500/20">
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Local Focus</h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                Personalized service for Chicago and surrounding areas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

