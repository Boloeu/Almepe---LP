"use client"

import { useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Shield,
  Users,
  BarChart3,
  FileCheck,
  Clock,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react"

const checklistItems = [
  { label: "Rendimentos tributaveis", done: true },
  { label: "Informes bancarios", done: true },
  { label: "Despesas dedutiveis", done: false },
  { label: "Dependentes atualizados", done: false },
]

export default function HeroSection() {
  const { ref, isInView } = useInView(0.15)
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    checklistItems.map((item) => item.done)
  )
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

  const toggleItem = (i: number) => {
    setCheckedItems((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const progress = Math.round(
    (checkedItems.filter(Boolean).length / checkedItems.length) * 100
  )

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-700 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-highlight/10 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-highlight" />
              <span className="text-xs font-semibold text-highlight uppercase tracking-wider">
                Contabilidade Digital
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance text-foreground">
              Sua empresa merece uma{" "}
              <span className="text-accent">contabilidade</span> que entrega
              resultados
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Gestao contabil, fiscal, de pessoas e financeira com atendimento
              agil, seguro e eficiente. Mais de 500 empresas confiam na Almepe.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="/redirect-fale-conosco">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 text-base"
                >
                  Falar com Especialista
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#servicos">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold px-8 text-base border-border text-foreground hover:bg-secondary"
                >
                  Conhecer Servicos
                </Button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-sm">CRC Ativo</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-4 w-4 text-accent" />
                <span className="text-sm">+500 Clientes</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BarChart3 className="h-4 w-4 text-accent" />
                <span className="text-sm">+10 Anos</span>
              </div>
            </div>
          </div>

          {/* Right: IR 2026 interactive card */}
          <div
            className={`flex-1 w-full max-w-lg lg:max-w-none transition-all duration-700 delay-200 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="relative max-w-md mx-auto">
              <div className="rounded-2xl bg-card border border-border shadow-2xl overflow-hidden">
                {/* Card header */}
                <div className="bg-accent px-6 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center h-10 w-10 rounded-xl bg-accent-foreground/15">
                      <FileCheck className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-accent-foreground">
                        Imposto de Renda 2026
                      </h3>
                      <p className="text-xs text-accent-foreground/70">
                        Declaracao IRPF
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-highlight/20 px-2.5 py-1">
                    <AlertTriangle className="h-3 w-3 text-highlight" />
                    <span className="text-[10px] font-bold text-highlight uppercase">
                      Prazo aberto
                    </span>
                  </div>
                </div>

                {/* Countdown */}
                <div className="px-6 py-4 border-b border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Tempo restante para declarar
                    </span>
                  </div>
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

                {/* Checklist */}
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Checklist de documentos
                    </span>
                    <span className="text-xs font-bold text-accent">
                      {progress}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted overflow-hidden mb-4">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    {checklistItems.map((item, i) => (
                      <button
                        key={item.label}
                        onClick={() => toggleItem(i)}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                          checkedItems[i]
                            ? "bg-accent/8 text-foreground"
                            : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                        }`}
                      >
                        <span
                          className={`flex-shrink-0 flex items-center justify-center h-5 w-5 rounded-md border-2 transition-colors ${
                            checkedItems[i]
                              ? "border-accent bg-accent"
                              : "border-muted-foreground/30"
                          }`}
                        >
                          {checkedItems[i] && (
                            <CheckCircle2 className="h-3 w-3 text-accent-foreground" />
                          )}
                        </span>
                        <span
                          className={
                            checkedItems[i]
                              ? "line-through text-muted-foreground"
                              : ""
                          }
                        >
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-5">
                  <Link href="/redirect-hero-contabilidade">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                      Declarar com a Almepe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute -top-3 -right-3 h-20 w-20 rounded-2xl bg-accent/10 -z-10" />
              <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-2xl bg-primary/5 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
