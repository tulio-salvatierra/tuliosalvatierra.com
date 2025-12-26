import { Button } from "@/components/ui/button"
import Link from "next/link"
import { EMAIL_URL } from "@/contants/contants"

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" aria-label="Tulio Salvatierra Home">
            <span className="text-lg font-medium text-white">tuliosalvatierra.com</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
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
  )
}

