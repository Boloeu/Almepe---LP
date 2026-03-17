"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/551156700780?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Almepe"

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {showTooltip && (
        <div className="rounded-lg bg-card border border-border px-4 py-2 shadow-lg text-sm font-medium text-foreground animate-fade-in-up">
          Fale conosco no WhatsApp
        </div>
      )}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}
