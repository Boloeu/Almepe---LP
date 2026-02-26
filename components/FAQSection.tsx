"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Quais servicos a Almepe oferece?",
    answer:
      "Oferecemos servicos completos de contabilidade digital incluindo gestao contabil, fiscal, de pessoas, societaria e BPO financeiro. Tudo para que sua empresa tenha suporte completo.",
  },
  {
    question: "A Almepe atende empresas de qualquer porte?",
    answer:
      "Sim! Atendemos desde MEIs e microempresas ate empresas de medio e grande porte. Nossas solucoes sao personalizadas de acordo com as necessidades de cada cliente.",
  },
  {
    question: "Como funciona a contabilidade digital?",
    answer:
      "Com a contabilidade digital, todos os processos sao otimizados com tecnologia. Voce envia documentos de forma online, acompanha relatorios em tempo real e tem comunicacao agil com nossa equipe.",
  },
  {
    question: "Qual o diferencial da Almepe?",
    answer:
      "Nosso diferencial esta na combinacao de experiencia tecnica com atendimento proximo e personalizado. Mais de 500 empresas confiam em nos, com 98% de satisfacao.",
  },
  {
    question: "Como posso solicitar uma proposta?",
    answer:
      "Voce pode clicar no botao 'Fale Conosco' no topo da pagina ou realizar nosso diagnostico rapido. Um especialista entrara em contato via WhatsApp para entender suas necessidades.",
  },
  {
    question: "A Almepe pode me ajudar a reduzir impostos?",
    answer:
      "Sim! Nossa equipe fiscal analisa o enquadramento tributario da sua empresa e propoe as melhores estrategias para reducao legal da carga tributaria.",
  },
]

function AccordionItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string }
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="text-base font-semibold text-foreground group-hover:text-accent transition-colors pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180 text-accent" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const { ref, isInView } = useInView(0.1)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" ref={ref} className="py-20 bg-secondary">
      <div className="mx-auto max-w-3xl px-4">
        <div
          className={`text-center mb-12 transition-all duration-500 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Tire suas duvidas sobre nossos servicos de contabilidade digital.
          </p>
        </div>

        <div
          className={`rounded-2xl bg-card border border-border p-6 md:p-8 shadow-sm transition-all duration-500 delay-100 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
