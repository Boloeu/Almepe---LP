"use client"

import { useInView } from "@/hooks/use-in-view"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Shield, Users } from "lucide-react"

export default function HeroSection() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-700 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Contabilidade Digital
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance text-foreground">
              Sua empresa merece uma{" "}
              <span className="text-accent">contabilidade</span>{" "}
              que entrega resultados
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Gestao contabil, fiscal, de pessoas e financeira com atendimento
              agil, seguro e eficiente. Mais de 500 empresas confiam na Almepe.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="/redirect-fale-conosco">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-almepe-red-dark font-semibold px-8 text-base"
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

          {/* Right: 3D Placeholder / Visual element */}
          <div
            className={`flex-1 w-full max-w-lg lg:max-w-none transition-all duration-700 delay-200 ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Abstract visual representation */}
              <div className="absolute inset-0 rounded-3xl bg-card border border-border shadow-2xl overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 gap-6">
                  {/* Dashboard mock */}
                  <div className="w-full space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-24 rounded-full bg-muted" />
                      <div className="h-3 w-16 rounded-full bg-accent/20" />
                    </div>

                    {/* Chart bars */}
                    <div className="flex items-end gap-2 h-32 pt-4">
                      {[40, 65, 50, 80, 60, 90, 75, 95, 70, 85, 92, 88].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm transition-all duration-500"
                          style={{
                            height: `${h}%`,
                            backgroundColor: i >= 8 ? 'hsl(var(--accent))' : 'hsl(var(--muted))',
                            transitionDelay: `${i * 50}ms`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {[
                        { label: "Receita", value: "+23%" },
                        { label: "Economia", value: "R$45k" },
                        { label: "Satisfacao", value: "98%" },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-lg bg-secondary p-3 text-center"
                        >
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                          <p className="text-sm font-bold text-foreground">{stat.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Bottom row */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="h-10 flex-1 rounded-lg bg-accent/10 flex items-center justify-center">
                        <span className="text-xs font-semibold text-accent">Empresa Saudavel</span>
                      </div>
                      <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                        <BarChart3 className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -top-3 -right-3 h-20 w-20 rounded-2xl bg-accent/10 -z-10" />
              <div className="absolute -bottom-3 -left-3 h-16 w-16 rounded-2xl bg-primary/5 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
