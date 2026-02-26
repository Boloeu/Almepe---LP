"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { X, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function LeadPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  const show = useCallback(() => {
    if (!dismissed) setIsOpen(true)
  }, [dismissed])

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
      <div className="relative w-full max-w-md rounded-2xl bg-card border border-border p-8 shadow-2xl animate-fade-in-up">
        <button
          onClick={close}
          className="absolute top-4 right-4 rounded-lg p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-accent/10 mb-5">
            <span className="text-2xl font-bold text-accent">%</span>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-2">
            Diagnostico Gratuito
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Descubra como economizar nos impostos e otimizar a gestao da sua
            empresa. Fale com um especialista sem compromisso.
          </p>

          <Link href="/redirect-fale-conosco" onClick={close}>
            <Button
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-almepe-red-dark font-semibold"
            >
              Quero meu Diagnostico
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>

          <button
            onClick={close}
            className="mt-3 text-xs text-muted-foreground hover:text-foreground underline"
          >
            Agora nao, obrigado
          </button>
        </div>
      </div>
    </div>
  )
}
