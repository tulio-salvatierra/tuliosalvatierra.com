'use client'

import VideoBackground from "@/components/sections/video-background"
import Header from "@/components/sections/header"
import Hero from "@/components/sections/hero"
import QuickContact from "@/components/sections/quick-contact"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"
import Footer from "@/components/sections/footer"
import FloatingContact from "@/components/sections/floating-contact"

export default function LandingPage() {
  return (
    <>
      <main className="min-h-screen relative">
        <VideoBackground />
        <Header />
        <Hero />
        <QuickContact />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <FloatingContact />
      </main>
    </>
  )
}
