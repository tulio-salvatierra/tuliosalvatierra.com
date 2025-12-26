import { Button } from "@/components/ui/button"
import { EMAIL_URL } from "@/contants/contants"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden z-20">
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
        <div className="w-5 h-8 border border-green-500/10 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-green-500/10 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

