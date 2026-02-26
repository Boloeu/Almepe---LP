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
    span: "col-span-1 md:col-span-2",
  },
  {
    icon: Receipt,
    title: "Gestao Fiscal",
    description:
      "Escolha da melhor tributacao, entrega de obrigacoes acessorias e calculo de tributos.",
    link: "/redirect-servico-fiscal",
    span: "col-span-1",
  },
  {
    icon: Users,
    title: "Gestao de Pessoas",
    description:
      "Folha de pagamento, admissoes, demissoes, ferias e todas as obrigacoes trabalhistas.",
    link: "/redirect-servico-pessoal",
    span: "col-span-1",
  },
  {
    icon: Landmark,
    title: "Gestao Societaria",
    description:
      "Registros, contratos sociais, regularizacao e planejamento para inicio de atividades.",
    link: "/redirect-servico-societario",
    span: "col-span-1",
  },
  {
    icon: Wallet,
    title: "BPO Financeiro",
    description:
      "Contas a pagar e receber, conciliacao bancaria, notas fiscais e relatorios financeiros.",
    link: "/redirect-servico-bpo",
    span: "col-span-1 md:col-span-2",
  },
]

export default function ServicesSection() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="servicos" ref={ref} className="py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4">
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`${service.span} group relative rounded-2xl bg-card border border-border p-6 md:p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                  <service.icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <Link href={service.link} className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-accent hover:underline">
                    Saiba mais
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link href="/redirect-fale-conosco">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-almepe-red-dark font-semibold px-8"
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
