"use client"

import { useInView } from "@/hooks/use-in-view"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Receipt,
  Users,
  Landmark,
  Wallet,
  ArrowRight,
} from "lucide-react"

const services = [
  {
    icon: BookOpen,
    title: "Gestao Contabil",
    description:
      "Escrituracao, demonstracoes contabeis e relatorios para auxiliar nas tomadas de decisoes.",
    link: "/redirect-servico-contabil",
  },
  {
    icon: Receipt,
    title: "Gestao Fiscal",
    description:
      "Escolha da melhor tributacao, entrega de obrigacoes acessorias e calculo de tributos.",
    link: "/redirect-servico-fiscal",
  },
  {
    icon: Users,
    title: "Gestao de Pessoas",
    description:
      "Folha de pagamento, admissoes, demissoes, ferias e todas as obrigacoes trabalhistas.",
    link: "/redirect-servico-pessoal",
  },
  {
    icon: Landmark,
    title: "Gestao Societaria",
    description:
      "Registros, contratos sociais, regularizacao e planejamento para inicio de atividades.",
    link: "/redirect-servico-societario",
  },
  {
    icon: Wallet,
    title: "BPO Financeiro",
    description:
      "Contas a pagar e receber, conciliacao bancaria, notas fiscais e relatorios financeiros.",
    link: "/redirect-servico-bpo",
  },
]

export default function ServicesSection() {
  const { ref, isInView } = useInView(0.05)

  return (
    <section id="servicos" ref={ref} className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Nossos Servicos
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Solucoes completas para sua empresa
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Da contabilidade ao financeiro, cuidamos de tudo para que voce foque
            no crescimento do seu negocio.
          </p>
        </div>

        {/* Horizontal row of cards with diagonal dividers */}
        <div className="relative flex flex-col lg:flex-row lg:min-h-[65vh]">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`relative flex-1 transition-all duration-500 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Diagonal divider -- between cards on large screens */}
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px z-10">
                  <svg
                    className="absolute -left-3 top-0 h-full w-6"
                    viewBox="0 0 24 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="18"
                      y1="0"
                      x2="6"
                      y2="100"
                      stroke="hsl(var(--border))"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              )}

              {/* Horizontal divider on mobile */}
              {i > 0 && (
                <div className="lg:hidden h-px bg-border my-1" />
              )}

              {/* Card content with backdrop-blur */}
              <div className="group relative h-full flex flex-col justify-between p-6 lg:p-8 rounded-2xl lg:rounded-none overflow-hidden">
                {/* Blur layer */}
                <div className="absolute inset-0 bg-card/70 backdrop-blur-xl -z-[1]" />

                <div>
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 mb-5">
                    <service.icon className="h-7 w-7" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service.link}
                  className="inline-flex items-center gap-1 mt-6 text-sm font-semibold text-accent hover:underline"
                >
                  Saiba mais
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link href="/redirect-fale-conosco">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8"
            >
              Solicitar Proposta
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
