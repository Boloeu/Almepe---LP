"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const contabilidadeDigitalServices = [
  {
    title: "Gestão Contábil",
    description:
      "Nessa área, a Almepe busca não somente a contabilização, mas também apresentar as principais demonstrações contábeis para auxiliar sua empresa nas tomadas de decisões",
    items: [
      "Escrituração contábil",
      "Elaboração das demonstrações contábeis",
      "Relatórios e métricas para acompanhamento de indicadores",
      "Declarações e obrigações periódicas",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&h=400&auto=format&fit=crop",
    link: "https://wa.me/551156700780?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20Gestão%20Contábil",
  },
  {
    title: "Gestão Fiscal",
    description:
      "Nessa área, a Almepe escolhe e elabora a melhor forma de tributação para sua empresa, reduzindo custos e protegendo sua empresa de possíveis autos de infrações.",
    items: [
      "Elaboração, análise e entrega das obrigações acessórias fiscais",
      "Orientação e suporte",
      "Relatórios e métricas para acompanhamento de indicadores",
      "Cálculos dos tributos",
      "Escolha da melhor forma de tributação",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&h=400&auto=format&fit=crop",
    link: "https://wa.me/551156700780?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20Gestão%20Fiscal",
  },
  {
    title: "Gestão de Pessoas",
    description:
      "Uma das áreas de maior importância, o departamento pessoal da Almepe cuida para que todas as obrigações e necessidades dos clientes sejam atendidas.",
    items: [
      "Obrigações acessórias",
      "Cálculo de folha e dos tributos",
      "Relatórios e métricas para acompanhamento",
      "Rotinas de admissão, demissão, férias e afastamentos",
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&h=400&auto=format&fit=crop",
    link: "https://wa.me/551156700780?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20Gestão%20de%20Pessoas",
  },
  {
    title: "Gestão Societária",
    description:
      "Na área societária a Almepe estuda e aconselha quanto as melhores práticas e formas de se consolidar o seu negócio, sendo essa área responsável por:",
    items: [
      "Registros junto a órgãos públicos",
      "Elaboração de contratos e estatutos sociais",
      "Regularização do negócio frente às exigências das esferas Municipal, Estadual e Federal, evitando pagamento de multas desnecessárias",
      "Orientação e Planejamento para o início das atividades",
      "Contratos de acordo entre sócios",
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&h=400&auto=format&fit=crop",
    link: "https://wa.me/551156700780?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20Gestão%20Societária",
  },
]

const financeiroDigitalService = {
  title: "Gestão Financeira",
  description:
    "A Almepe organiza e cuida da gestão das contas a pagar e a receber da sua empresa, para que você possa se concentrar em áreas estratégicas. Com a terceirização do seu financeiro, vocês receberão informações precisas e estratégicas para gestão da sua empresa, além de obter uma grande economia nos custos.",
  items: [
    "Registro e controle de contas a receber e a pagar",
    "Emissão e envio de notas fiscais e boletos",
    "Conciliação Bancária Completa",
    "Agendamento de seus pagamentos no Internet Banking",
    "Envio de documentação para o seu contador",
    "Envio de Relatórios Financeiros",
    "Consultoria em Gestão",
  ],
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&h=400&auto=format&fit=crop",
  link: "https://wa.me/551156700780?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20Gestão%20Financeira",
}

export default function ServicesSection() {
  const [currentService, setCurrentService] = useState(0)
  const [currentCategory, setCurrentCategory] = useState("contabilidade")

  const nextService = () => {
    if (currentCategory === "contabilidade") {
      setCurrentService((prev) => (prev + 1) % contabilidadeDigitalServices.length)
    }
  }

  const prevService = () => {
    if (currentCategory === "contabilidade") {
      setCurrentService(
        (prev) => (prev - 1 + contabilidadeDigitalServices.length) % contabilidadeDigitalServices.length,
      )
    }
  }

  const toggleCategory = () => {
    setCurrentCategory((prev) => (prev === "contabilidade" ? "financeiro" : "contabilidade"))
    setCurrentService(0)
  }

  const currentServiceData =
    currentCategory === "contabilidade" ? contabilidadeDigitalServices[currentService] : financeiroDigitalService

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Nossos Serviços</h2>
        <div className="flex justify-center mb-8">
          <Button
            onClick={() => setCurrentCategory("contabilidade")}
            className={`mx-2 ${currentCategory === "contabilidade" ? "bg-blue-900" : "bg-gray-300 text-gray-700"}`}
          >
            Contabilidade Digital
          </Button>
          <Button
            onClick={() => setCurrentCategory("financeiro")}
            className={`mx-2 ${currentCategory === "financeiro" ? "bg-blue-900" : "bg-gray-300 text-gray-700"}`}
          >
            Financeiro Digital
          </Button>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-lg">
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-full w-full">
                  <Image
                    src={currentServiceData.image || "/placeholder.svg"}
                    alt={currentServiceData.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">{currentServiceData.title}</h3>
                <p className="text-gray-600 mb-4">{currentServiceData.description}</p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  {currentServiceData.items.map((item, index) => (
                    <li key={index} className="mb-1">
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={currentServiceData.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-900 text-white hover:bg-blue-800">Saiba Mais</Button>
                </Link>
              </div>
            </div>
          </div>
          {currentCategory === "contabilidade" && (
            <>
              <div className="flex justify-center mt-4">
                <span className="text-sm text-gray-500">
                  {currentService + 1} de {contabilidadeDigitalServices.length}
                </span>
              </div>
              <button
                onClick={prevService}
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
              >
                <ChevronLeft className="w-6 h-6 text-blue-900" />
              </button>
              <button
                onClick={nextService}
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
              >
                <ChevronRight className="w-6 h-6 text-blue-900" />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
