"use client"

import { useInView } from "@/hooks/use-in-view"
import { Search, FileText, Settings, TrendingUp } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Diagnostico",
    description:
      "Analisamos a situacao atual da sua empresa para entender seus desafios e oportunidades.",
  },
  {
    icon: FileText,
    title: "Planejamento",
    description:
      "Elaboramos um plano personalizado com as melhores estrategias fiscais e contabeis.",
  },
  {
    icon: Settings,
    title: "Implementacao",
    description:
      "Colocamos tudo em pratica com processos ageis e tecnologia de ponta.",
  },
  {
    icon: TrendingUp,
    title: "Acompanhamento",
    description:
      "Monitoramos resultados e ajustamos estrategias para maximizar seus resultados.",
  },
]

export default function MethodologySection() {
  const { ref, isInView } = useInView(0.15)

  return (
    <section id="metodologia" ref={ref} className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            Nossa Metodologia
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Como transformamos a contabilidade da sua empresa
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Um processo claro e eficiente que gera resultados reais para o seu negocio.
          </p>
        </div>

        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`relative flex flex-col items-center text-center group transition-all duration-500 ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {/* Step number badge */}
                <div className="relative z-10 mb-4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-card border border-border shadow-sm group-hover:border-primary group-hover:shadow-md transition-all duration-300">
                    <step.icon className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="absolute -top-2 -right-2 flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
