import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import {
  CONTACT_INFO,
  WHATSAPP_URL,
  EMAIL_URL,
  PHONE_URL,
  TELEPHONE,
  EMAIL
} from "@/contants/contants"

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact section" className="relative py-24 bg-gray-900/70 backdrop-blur-sm z-20">
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
  )
}

