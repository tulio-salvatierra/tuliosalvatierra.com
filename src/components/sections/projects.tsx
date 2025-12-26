import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { projectsData } from "@/projects_data/projectsData"

export default function Projects() {
  // Transform projectsData to match the expected format
  const projects = projectsData.map(project => ({
    title: project.title,
    description: project.description,
    tech: project.description.split('|').map(tech => tech.trim()),
    image: project.image,
    url: project.url,
    repo: project.repo,
    alt: project.alt
  }))

  return (
    <section id="projects" aria-label="Projects section" className="relative py-24 bg-black/70 backdrop-blur-sm z-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Recent Work</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Selected projects showcasing modern web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-500 border border-gray-800 block transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20"
              >
                <div className="relative overflow-hidden h-56">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} - ${project.description.split('|')[0] || 'Web development project'}`}
                    width={400}
                    height={300}
                    className="w-[120%] h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out animate-parallax"
                    loading={index < 3 ? "eager" : "lazy"}
                    fetchPriority={index < 3 ? "high" : "auto"}
                    style={{
                      animationDelay: `${index * 0.75}s`,
                      animationDuration: '20s',
                      animationIterationCount: 'infinite',
                      animationDirection: 'alternate',
                    }}
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <ArrowRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-light">Click to visit project</p>
                  </div>
                </div>

                <div className="p-6 transform group-hover:translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-green-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400 font-light mb-4 leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-gray-800 text-gray-300 font-light border border-gray-700 text-xs group-hover:bg-gray-700 group-hover:border-gray-600 transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge className="bg-gray-700 text-gray-400 font-light border border-gray-600 text-xs group-hover:bg-gray-600 group-hover:text-gray-300 transition-all duration-300">
                        +{project.tech.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

