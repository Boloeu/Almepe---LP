"use client"

import { useInView } from "@/hooks/use-in-view"
import Link from "next/link"
import Image from "next/image"
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
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%207-eB6CrQzZwOgyXMhTljBMxFB8Asty3Z.jpg",
  },
  {
    icon: Receipt,
    title: "Gestao Fiscal",
    description:
      "Escolha da melhor tributacao, entrega de obrigacoes acessorias e calculo de tributos.",
    link: "/redirect-servico-fiscal",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%206-WDrJICw0KZo38gogonVEDuKZEVRv3P.jpg",
  },
  {
    icon: Users,
    title: "Gestao de Pessoas",
    description:
      "Folha de pagamento, admissoes, demissoes, ferias e todas as obrigacoes trabalhistas.",
    link: "/redirect-servico-pessoal",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%205-rRKX977QrZ63hwbELpEcBtwIG8hwWs.jpg",
  },
  {
    icon: Landmark,
    title: "Gestao Societaria",
    description:
      "Registros, contratos sociais, regularizacao e planejamento para inicio de atividades.",
    link: "/redirect-servico-societario",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%204-QaTPX2wygoj0rTzMH0EMvqoBDhbees.jpg",
  },
  {
    icon: Wallet,
    title: "BPO Financeiro",
    description:
      "Contas a pagar e receber, conciliacao bancaria, notas fiscais e relatorios financeiros.",
    link: "/redirect-servico-bpo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%203-mblVnQqwtt7eecTwpQF83lnjMXAzbn.jpg",
  },
]

export default function ServicesSection() {
  const { ref, isInView } = useInView(0.05)

  return (
    <section id="servicos" ref={ref} className="py-0 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
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
      </div>

      {/* Horizontal row of cards with diagonal dividers - full width */}
      <div className="relative flex flex-col lg:flex-row lg:min-h-[70vh]">
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
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px z-20">
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
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
            )}

            {/* Horizontal divider on mobile */}
            {i > 0 && (
              <div className="lg:hidden h-px bg-border" />
            )}

            {/* Card with background image */}
            <div className="group relative h-full min-h-[300px] lg:min-h-0 flex flex-col justify-end overflow-hidden">
              {/* Background image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={i < 3}
              />
              
              {/* Blur layer */}
              <div className="absolute inset-0 backdrop-blur-[2px]" />
              
              {/* Dark gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-500/95 via-navy-500/70 to-navy-500/40" />

              {/* Content with intense backdrop blur */}
              <div className="relative z-10 p-6 lg:p-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/20 text-white group-hover:bg-highlight group-hover:text-white transition-colors duration-300 mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-highlight hover:text-white transition-colors"
                  >
                    Saiba mais
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="text-center">
          <Link href="/redirect-fale-conosco">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-8"
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
