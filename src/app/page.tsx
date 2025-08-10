import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Shield, Users, Mail, Phone, Bird, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { 
  CONTACT_INFO, 
  WHATSAPP_URL, 
  EMAIL_URL, 
  PHONE_URL,
  TELEPHONE,
  EMAIL
} from "@/contants/contants"
import { projectsData } from "@/projects_data/projectsData"

export default function LandingPage() {
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
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bird className="h-6 w-6 text-green-500" />
            <span className="text-lg font-medium text-white">tuliosalvatierra.com</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-gray-400 hover:text-green-500 transition-colors">
              Contact
            </Link>
          </nav>
          <Button 
            size="sm" 
            className="bg-green-600 hover:bg-green-700 text-sm px-4"
            asChild
          >
            <a href={EMAIL_URL}>
              Get Quote
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/hero.mp4" type="video/mp4" />
          <div className="absolute inset-0 bg-black"></div>
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-tight">Tulio Salvatierra</h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-green-400">Full-Stack Developer & IT Solutions</p>
          <p className="text-base mb-12 text-gray-300 max-w-xl mx-auto font-light">
            Creating modern web experiences and comprehensive IT support for Chicago businesses
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-base px-8 py-3 font-normal"
              asChild
            >
              <a href={EMAIL_URL}>
                Start Project
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-500/30 text-green-400 hover:bg-green-500/10 text-base px-8 py-3 font-normal bg-transparent"
              asChild
            >
              <a href="#projects">
                View Work
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-5 h-8 border border-green-500/30 rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-green-500/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section - Mobile Friendly */}
      <section className="py-8 bg-gray-900 border-b border-gray-800 md:hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-4">
            <a 
              href={PHONE_URL}
              className="flex items-center justify-center gap-3 text-green-400 hover:text-green-300 transition-colors py-2"
            >
              <Phone className="h-5 w-5" />
              <span className="font-light">{TELEPHONE}</span>
            </a>
            <a 
              href={EMAIL_URL}
              className="flex items-center justify-center gap-3 text-green-400 hover:text-green-300 transition-colors py-2"
            >
              <Mail className="h-5 w-5" />
              <span className="font-light">{EMAIL}</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4">About</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
                Chicago-based developer creating digital solutions that matter
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors border border-green-500/20">
                  <Code className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Web Development</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Custom websites and applications built with modern technologies
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors border border-green-500/20">
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">IT Support</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Comprehensive support and cloud solutions for businesses
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-500/10 rounded-full flex items-center justify-center group-hover:bg-green-500/20 transition-colors border border-green-500/20">
                  <Users className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Local Focus</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  Personalized service for Chicago and surrounding areas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-900">
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
                {[
                  "Full-Stack Development",
                  "E-commerce Solutions",
                  "API Development",
                  "Database Design",
                  "UI/UX Implementation",
                  "Performance Optimization",
                ].map((skill, index) => (
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

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-black">
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
                  className="group bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-300 border border-gray-800 block"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.alt || project.title}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-medium text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 font-light mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <Badge key={techIndex} className="bg-gray-800 text-gray-300 font-light border border-gray-700 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge className="bg-gray-700 text-gray-400 font-light border border-gray-600 text-xs">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">Let&apos;s Work Together</h2>
            <p className="text-lg text-gray-400 mb-12 font-light">Ready to start your project? Get in touch.</p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-base px-8 py-4 flex items-center gap-3 font-normal"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500/10 text-base px-8 py-4 flex items-center gap-3 font-normal bg-transparent"
                asChild
              >
                <a href={EMAIL_URL}>
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>
              </Button>
            </div>

            {/* Contact Information */}
            <div className="mt-12 p-8 bg-gray-800 rounded-lg border border-gray-700 max-w-2xl mx-auto">
              <h4 className="font-medium text-white mb-6 text-center">Contact Information</h4>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href={PHONE_URL}
                  className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-light">{TELEPHONE}</span>
                </a>
                <a 
                  href={EMAIL_URL}
                  className="flex items-center gap-3 text-green-400 hover:text-green-300 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-light">{EMAIL}</span>
                </a>
              </div>
              <div className="text-center mt-4">
                <p className="text-gray-400 font-light">{CONTACT_INFO.location}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
              <div>
                <h4 className="font-medium text-white mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400 font-light">
                  {CONTACT_INFO.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-white mb-4">Approach</h4>
                <ul className="space-y-2 text-gray-400 font-light">
                  {CONTACT_INFO.approach.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Bird className="h-5 w-5 text-green-500" />
              <span className="text-base font-medium text-white">tuliosalvatierra.com</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 font-light">© {new Date().getFullYear()} Tulio Salvatierra</p>
              <p className="text-gray-500 text-sm font-light mt-1">Full-stack developer, Chicago</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Button - Mobile Only */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Button
          size="lg"
          className="bg-green-600 hover:bg-green-700 rounded-full w-14 h-14 p-0 shadow-lg"
          asChild
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Phone className="h-6 w-6" />
          </a>
        </Button>
      </div>
    </div>
  )
}
