import { Mail, Phone } from "lucide-react"
import { EMAIL_URL, PHONE_URL, TELEPHONE, EMAIL } from "@/contants/contants"

export default function QuickContact() {
  return (
    <section className="relative py-8 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800/10 md:hidden z-20">
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
  )
}

