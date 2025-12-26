import { Bird } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-12 bg-black/70 backdrop-blur-sm border-t border-gray-800/50 z-20">
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
  )
}

