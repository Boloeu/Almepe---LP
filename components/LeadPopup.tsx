"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { X, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// A/B Testing images - alternates between appearances
const popupImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%201-9e5oIQdEAgkZE6fsm7jLUBDLg1cfCd.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%202-W1aSq6jaQ0Csg0Wc4LfZTb42h1KgV7.jpg",
]

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)

  // Get stored appearance count for A/B testing
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedIndex = localStorage.getItem("almepe-popup-index")
      if (storedIndex !== null) {
        setImageIndex(parseInt(storedIndex, 10) % popupImages.length)
      }
    }
  }, [])

  const show = useCallback(() => {
    if (!dismissed) {
      setIsOpen(true)
      // Increment index for next appearance
      if (typeof window !== "undefined") {
        const nextIndex = (imageIndex + 1) % popupImages.length
        localStorage.setItem("almepe-popup-index", nextIndex.toString())
      }
    }
  }, [dismissed, imageIndex])

  // Timer-based trigger (15s)
  useEffect(() => {
    const timer = setTimeout(show, 15000)
    return () => clearTimeout(timer)
  }, [show])

  // Exit-intent trigger
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show()
    }
    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [show])

  const close = () => {
    setIsOpen(false)
    setDismissed(true)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-card border border-border shadow-2xl animate-fade-in-up overflow-hidden">
        <button
          onClick={close}
          className="absolute top-4 right-4 z-10 rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors bg-card/80 backdrop-blur-sm"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image side - 50% of modal */}
          <div className="relative w-full md:w-1/2 h-48 md:h-auto md:min-h-[320px]">
            <Image
              src={popupImages[imageIndex]}
              alt="Equipe Almepe"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content side */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-highlight/10 mb-4">
              <span className="text-xl font-bold text-highlight">%</span>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-2">
              Diagnóstico Gratuito
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Descubra como economizar nos impostos e otimizar a gestão da sua
              empresa. Fale com um especialista sem compromisso.
            </p>

            <Link href="/redirect-fale-conosco" onClick={close}>
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-accent font-semibold"
              >
                Quero meu Diagnóstico
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <button
              onClick={close}
              className="mt-3 text-xs text-muted-foreground hover:text-foreground underline"
            >
              Agora não, obrigado
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
