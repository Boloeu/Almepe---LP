"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"

const steps = [
  {
    question: "Qual o porte da sua empresa?",
    options: ["MEI", "Microempresa (ME)", "Empresa de Pequeno Porte (EPP)", "Media / Grande Empresa"],
  },
  {
    question: "Qual sua principal dor hoje?",
    options: [
      "Pago muitos impostos",
      "Nao tenho controle financeiro",
      "Preciso abrir ou regularizar empresa",
      "Minha contabilidade e lenta",
    ],
  },
  {
    question: "Voce ja possui contabilidade?",
    options: [
      "Sim, mas estou insatisfeito",
      "Sim, mas quero uma segunda opiniao",
      "Nao, preciso de uma",
      "Estou comecando agora",
    ],
  },
]

export default function DiagnosticQuiz() {
  const { ref, isInView } = useInView(0.15)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [completed, setCompleted] = useState(false)

  const handleSelect = (option: string) => {
    const newAnswers = [...answers]
    newAnswers[currentStep] = option
    setAnswers(newAnswers)
  }

  const next = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setCompleted(true)
    }
  }

  const prev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1)
  }

  const progress = completed ? 100 : ((currentStep + (answers[currentStep] ? 1 : 0)) / steps.length) * 100

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="mx-auto max-w-3xl px-4">
        <div
          className={`text-center mb-10 transition-all duration-500 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
            Diagnostico Gratuito
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
            Descubra como podemos ajudar sua empresa
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Responda 3 perguntas rapidas e receba uma analise personalizada.
          </p>
        </div>

        <div
          className={`rounded-2xl bg-card border border-border p-6 md:p-10 shadow-sm transition-all duration-500 delay-100 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-muted-foreground">
                {completed ? "Completo" : `Passo ${currentStep + 1} de ${steps.length}`}
              </span>
              <span className="text-xs font-semibold text-accent">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {!completed ? (
            <>
              <h3 className="text-xl font-bold text-foreground mb-6">
                {steps[currentStep].question}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {steps[currentStep].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`rounded-xl p-4 text-left text-sm font-medium border transition-all duration-200 ${
                      answers[currentStep] === option
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border bg-card text-muted-foreground hover:border-accent/50 hover:bg-secondary"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex-shrink-0 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          answers[currentStep] === option
                            ? "border-accent bg-accent"
                            : "border-muted-foreground/30"
                        }`}
                      >
                        {answers[currentStep] === option && (
                          <span className="h-2 w-2 rounded-full bg-accent-foreground" />
                        )}
                      </span>
                      {option}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={prev}
                  disabled={currentStep === 0}
                  className="border-border text-foreground"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior
                </Button>
                <Button
                  onClick={next}
                  disabled={!answers[currentStep]}
                  className="bg-accent text-accent-foreground hover:bg-almepe-red-dark font-semibold"
                >
                  {currentStep < steps.length - 1 ? "Proximo" : "Ver Resultado"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-6">
              <CheckCircle2 className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Diagnostico Concluido!
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-md mx-auto">
                Com base nas suas respostas, nossos especialistas podem
                preparar uma proposta personalizada para sua empresa.
              </p>
              <Link href="/redirect-fale-conosco">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-almepe-red-dark font-semibold px-8"
                >
                  Falar com Especialista via WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <button
                onClick={() => {
                  setCompleted(false)
                  setCurrentStep(0)
                  setAnswers([])
                }}
                className="block mx-auto mt-4 text-sm text-muted-foreground hover:text-foreground underline"
              >
                Refazer diagnostico
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
