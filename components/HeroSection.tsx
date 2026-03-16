"use client"

import { useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Shield,
  Users,
  BarChart3,
  Clock,
} from "lucide-react"

// Photos for marquee background
const marqueeImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%205-rRKX977QrZ63hwbELpEcBtwIG8hwWs.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%207-eB6CrQzZwOgyXMhTljBMxFB8Asty3Z.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%206-WDrJICw0KZo38gogonVEDuKZEVRv3P.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%208-INwcUvftHqOlolt6QwSKKLcekPUDsf.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%202-W1aSq6jaQ0Csg0Wc4LfZTb42h1KgV7.jpg",
]

export default function HeroSection() {
  const { ref, isInView } = useInView(0.15)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0 })

  // Countdown to May 30, 2026 deadline
  useEffect(() => {
    function calcRemaining() {
      const deadline = new Date("2026-05-30T23:59:59-03:00").getTime()
      const now = Date.now()
      const diff = Math.max(0, deadline - now)
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
      }
    }
    setCountdown(calcRemaining())
    const id = setInterval(() => setCountdown(calcRemaining()), 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Marquee Background with photos */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Photo marquee - infinite horizontal scroll */}
        <div className="absolute inset-0 flex animate-marquee">
          {[...marqueeImages, ...marqueeImages].map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 h-full w-[300px] sm:w-[400px]"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                priority={i < 5}
              />
            </div>
          ))}
        </div>
        
        {/* Backdrop blur layer */}
        <div className="absolute inset-0 backdrop-blur-[8px]" />
        
        {/* Navy overlay with 60% opacity */}
        <div className="absolute inset-0 bg-navy-500/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-700 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-highlight" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Contabilidade Digital
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance text-white">
              Sua empresa merece uma{" "}
              <span className="text-highlight">contabilidade</span> que entrega
              resultados
            </h1>

            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Gestao contabil, fiscal, de pessoas e financeira com atendimento
              agil, seguro e eficiente. Mais de 500 empresas confiam na Almepe.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="/redirect-fale-conosco">
                <Button
                  size="lg"
                  className="bg-white text-navy-500 hover:bg-white/90 font-semibold px-8 text-base"
                >
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#servicos">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold px-8 text-base border-white/30 text-white hover:bg-white/10 bg-transparent"
                >
                  Conhecer Servicos
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-white/70">
                <Shield className="h-4 w-4 text-highlight" />
                <span className="text-sm">CRC Ativo</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Users className="h-4 w-4 text-highlight" />
                <span className="text-sm">+500 Clientes</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <BarChart3 className="h-4 w-4 text-highlight" />
                <span className="text-sm">+20 Anos</span>
              </div>
            </div>
          </div>

          {/* Right: IR 2026 countdown card */}
          <div
            className={`flex-1 w-full max-w-lg lg:max-w-md transition-all duration-700 delay-200 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-hidden shadow-2xl">
                {/* Card header */}
                <div className="bg-white/10 px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-highlight/20">
                      <Clock className="h-6 w-6 text-highlight" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        Imposto de Renda 2026
                      </h3>
                      <p className="text-sm text-white/70">
                        Prazo para declaracao
                      </p>
                    </div>
                  </div>
                </div>

                {/* Countdown */}
                <div className="px-6 py-6">
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wide mb-4">
                    Tempo restante para declarar
                  </p>
                  <div className="flex gap-3">
                    {[
                      { value: countdown.days, label: "dias" },
                      { value: countdown.hours, label: "horas" },
                      { value: countdown.mins, label: "min" },
                    ].map((unit) => (
                      <div
                        key={unit.label}
                        className="flex-1 rounded-xl bg-white/10 text-center py-4"
                      >
                        <p className="text-3xl font-bold font-mono text-white">
                          {unit.value}
                        </p>
                        <p className="text-[11px] font-medium text-white/60 uppercase mt-1">
                          {unit.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Link href="/redirect-hero-contabilidade">
                    <Button className="w-full bg-highlight text-white hover:bg-highlight/90 font-semibold text-base py-6">
                      Declarar com a Almepe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <p className="text-xs text-white/50 text-center mt-3">
                    Evite multas e problemas com o fisco
                  </p>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 rounded-3xl bg-highlight/20 blur-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
