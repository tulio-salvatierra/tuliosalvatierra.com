import { Badge } from "@/components/ui/badge"

const techStack = {
  Frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Vue.js", icon: "💚" },
  ],
  Backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Redis", icon: "🔴" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", icon: "☁️" },
    { name: "Vercel", icon: "▲" },
    { name: "Docker", icon: "🐳" },
    { name: "GitHub Actions", icon: "⚙️" },
    { name: "Cloudflare", icon: "🧡" },
  ],
  "Tools & Others": [
    { name: "Git", icon: "📝" },
    { name: "Figma", icon: "🎨" },
    { name: "VS Code", icon: "💙" },
    { name: "Stripe", icon: "💳" },
    { name: "Analytics", icon: "📊" },
  ],
}

const specializations = [
  "Full-Stack Development",
  "E-commerce Solutions",
  "API Development",
  "Database Design",
  "UI/UX Implementation",
  "Performance Optimization",
]

export default function Skills() {
  return (
    <section id="skills" aria-label="Technology stack section" className="relative py-24 bg-gray-900/70 backdrop-blur-sm z-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Technology Stack</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Modern tools for building exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div
                key={category}
                className="bg-gray-800 rounded-lg p-8 hover:bg-gray-800/80 transition-colors border border-gray-700"
              >
                <h3 className="text-lg font-medium text-white mb-6 text-center">{category}</h3>
                <div className="space-y-4">
                  {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3 text-gray-300">
                      <span className="text-lg">{tech.icon}</span>
                      <span className="font-light">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Specializations */}
          <div className="text-center">
            <h3 className="text-2xl font-light text-white mb-8">Specializations</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {specializations.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm font-light border-0"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

