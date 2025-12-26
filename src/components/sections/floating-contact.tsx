import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { WHATSAPP_URL } from "@/contants/contants"

export default function FloatingContact() {
  return (
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
  )
}

