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
  CheckCircle2,
  FileText,
  AlertTriangle,
} from "lucide-react"

const heroImages = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%203-mblVnQqwtt7eecTwpQF83lnjMXAzbn.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%204-QaTPX2wygoj0rTzMH0EMvqoBDhbees.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%205-rRKX977QrZ63hwbELpEcBtwIG8hwWs.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%206-WDrJICw0KZo38gogonVEDuKZEVRv3P.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%207-eB6CrQzZwOgyXMhTljBMxFB8Asty3Z.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%208-INwcUvftHqOlolt6QwSKKLcekPUDsf.jpg",
]

export default function HeroSection() {
  const { ref, isInView } = useInView(0.15)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0 })
  const [checkedItems, setCheckedItems] = useState<number[]>([])

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

  const checklistItems = [
    "Informe de Rendimentos",
    "Comprovantes de despesas médicas",
    "Documentos de imóveis e veículos",
    "Informe de investimentos",
  ]

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    )
  }

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Marquee Images */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex animate-marquee">
          {[...heroImages, ...heroImages].map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[400px] h-screen"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-500/70 backdrop-blur-sm" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 w-full z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-700 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-highlight animate-pulse" />
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
              Gestão contábil, fiscal, de pessoas e financeira com atendimento
              ágil, seguro e eficiente. Mais de 500 empresas confiam na Almepe.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="/redirect-fale-conosco">
                <Button
                  size="lg"
                  className="bg-highlight text-white hover:bg-highlight/90 font-semibold px-8 text-base"
                >
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#servicos">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold px-8 text-base border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  Conhecer Serviços
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="h-4 w-4 text-highlight" />
                <span className="text-sm">CRC Ativo</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Users className="h-4 w-4 text-highlight" />
                <span className="text-sm">+500 Clientes</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <BarChart3 className="h-4 w-4 text-highlight" />
                <span className="text-sm">+20 Anos</span>
              </div>
            </div>
          </div>

          {/* Right: IR 2026 Interactive Card */}
          <div
            className={`flex-1 w-full max-w-lg lg:max-w-md transition-all duration-700 delay-200 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="rounded-2xl bg-card border border-border overflow-hidden shadow-2xl">
                {/* Card header with urgency badge */}
                <div className="bg-gradient-to-r from-primary to-accent px-6 py-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/20">
                        <FileText className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Imposto de Renda 2026
                        </h3>
                        <p className="text-sm text-white/80">
                          Declare com segurança
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-highlight/90 rounded-full px-3 py-1">
                      <AlertTriangle className="h-3.5 w-3.5 text-white" />
                      <span className="text-xs font-bold text-white">
                        URGENTE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Countdown */}
                <div className="px-6 py-5 border-b border-border">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
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
                        className="flex-1 rounded-xl bg-secondary text-center py-3"
                      >
                        <p className="text-2xl font-bold font-mono text-foreground">
                          {unit.value}
                        </p>
                        <p className="text-[10px] font-medium text-muted-foreground uppercase">
                          {unit.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Checklist */}
                <div className="px-6 py-5">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                    Checklist de documentos
                  </p>
                  <ul className="space-y-2.5">
                    {checklistItems.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 cursor-pointer group"
                        onClick={() => toggleCheck(idx)}
                      >
                        <div
                          className={`flex items-center justify-center h-5 w-5 rounded-md border-2 transition-all ${
                            checkedItems.includes(idx)
                              ? "bg-highlight border-highlight"
                              : "border-border group-hover:border-primary"
                          }`}
                        >
                          {checkedItems.includes(idx) && (
                            <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                          )}
                        </div>
                        <span
                          className={`text-sm transition-all ${
                            checkedItems.includes(idx)
                              ? "text-muted-foreground line-through"
                              : "text-foreground"
                          }`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Link href="/redirect-hero-contabilidade">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-accent font-semibold text-base py-5">
                      <Clock className="mr-2 h-4 w-4" />
                      Declarar com a Almepe
                    </Button>
                  </Link>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Evite multas de até 20% do imposto devido
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
