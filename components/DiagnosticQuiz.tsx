"use client"

import { useState, useMemo } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ArrowLeft, CheckCircle2, TrendingUp, Shield, FileText, Clock } from "lucide-react"

const steps = [
  {
    question: "Qual o porte da sua empresa?",
    options: [
      { label: "MEI", value: "mei", savings: "ate R$ 5.000/ano" },
      { label: "Microempresa (ME)", value: "me", savings: "ate R$ 25.000/ano" },
      { label: "Empresa de Pequeno Porte (EPP)", value: "epp", savings: "ate R$ 80.000/ano" },
      { label: "Media / Grande Empresa", value: "media-grande", savings: "ate R$ 250.000/ano" },
    ],
  },
  {
    question: "Qual sua principal dor hoje?",
    options: [
      { label: "Pago muitos impostos", value: "impostos", service: "Planejamento Tributario" },
      { label: "Nao tenho controle financeiro", value: "financeiro", service: "BPO Financeiro" },
      { label: "Preciso abrir ou regularizar empresa", value: "abertura", service: "Assessoria Societaria" },
      { label: "Minha contabilidade e lenta", value: "lentidao", service: "Contabilidade Consultiva" },
    ],
  },
  {
    question: "Voce ja possui contabilidade?",
    options: [
      { label: "Sim, mas estou insatisfeito", value: "insatisfeito", urgency: "alta" },
      { label: "Sim, mas quero uma segunda opiniao", value: "segunda-opiniao", urgency: "media" },
      { label: "Nao, preciso de uma", value: "sem-contabilidade", urgency: "alta" },
      { label: "Estou comecando agora", value: "iniciante", urgency: "media" },
    ],
  },
]

interface DiagnosticResult {
  companySize: string
  savings: string
  mainPain: string
  recommendedService: string
  situation: string
  urgency: string
}

function generateDiagnostic(answers: number[]): DiagnosticResult {
  const sizeOption = steps[0].options[answers[0]] || steps[0].options[0]
  const painOption = steps[1].options[answers[1]] || steps[1].options[0]
  const situationOption = steps[2].options[answers[2]] || steps[2].options[0]

  return {
    companySize: sizeOption.label,
    savings: sizeOption.savings,
    mainPain: painOption.label,
    recommendedService: painOption.service,
    situation: situationOption.label,
    urgency: situationOption.urgency,
  }
}

export default function DiagnosticQuiz() {
  const { ref, isInView } = useInView(0.15)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [completed, setCompleted] = useState(false)

  const diagnostic = useMemo(() => {
    if (completed && answers.length === steps.length) {
      return generateDiagnostic(answers)
    }
    return null
  }, [completed, answers])

  const handleSelect = (optionIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentStep] = optionIndex
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

  const reset = () => {
    setCompleted(false)
    setCurrentStep(0)
    setAnswers([])
  }

  const progress = completed ? 100 : ((currentStep + (answers[currentStep] !== undefined ? 1 : 0)) / steps.length) * 100

  return (
    <section ref={ref} id="diagnostico" className="py-20 bg-background">
      <div className="mx-auto max-w-3xl px-4">
        <div
          className={`text-center mb-10 transition-all duration-500 ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-highlight/10 text-highlight text-xs font-semibold uppercase tracking-wider">
            Diagnostico Gratuito
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground text-balance">
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
              <span className="text-xs font-semibold text-primary">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
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
                {steps[currentStep].options.map((option, index) => (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(index)}
                    className={`rounded-xl p-4 text-left text-sm font-medium border transition-all duration-200 ${
                      answers[currentStep] === index
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:bg-secondary"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex-shrink-0 h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          answers[currentStep] === index
                            ? "border-primary bg-primary"
                            : "border-muted-foreground/30"
                        }`}
                      >
                        {answers[currentStep] === index && (
                          <span className="h-2 w-2 rounded-full bg-primary-foreground" />
                        )}
                      </span>
                      {option.label}
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
                  disabled={answers[currentStep] === undefined}
                  className="bg-primary text-primary-foreground hover:bg-accent font-semibold"
                >
                  {currentStep < steps.length - 1 ? "Proximo" : "Ver Resultado"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          ) : diagnostic ? (
            <div className="py-4">
              {/* Success Icon */}
              <div className="text-center mb-6">
                <CheckCircle2 className="h-14 w-14 text-green-500 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-foreground">
                  Diagnostico Concluido!
                </h3>
              </div>

              {/* Personalized Summary */}
              <div className="bg-secondary/50 rounded-xl p-5 mb-6 border border-border">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Resumo do seu Perfil
                </h4>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Economia Potencial</p>
                      <p className="text-muted-foreground">
                        Como <span className="font-semibold text-foreground">{diagnostic.companySize}</span>, 
                        sua empresa pode economizar <span className="font-semibold text-highlight">{diagnostic.savings}</span> em 
                        impostos com planejamento tributario adequado.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Servico Recomendado</p>
                      <p className="text-muted-foreground">
                        Baseado na sua dor principal (<span className="font-semibold text-foreground">{diagnostic.mainPain.toLowerCase()}</span>), 
                        recomendamos nosso servico de <span className="font-semibold text-primary">{diagnostic.recommendedService}</span>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Prioridade de Atendimento</p>
                      <p className="text-muted-foreground">
                        Sua situacao atual ({diagnostic.situation.toLowerCase()}) indica 
                        <span className={`font-semibold ${diagnostic.urgency === 'alta' ? 'text-highlight' : 'text-amber-500'}`}>
                          {diagnostic.urgency === 'alta' ? ' prioridade alta' : ' prioridade media'}
                        </span>. 
                        {diagnostic.urgency === 'alta' 
                          ? ' Recomendamos agendar uma consultoria o quanto antes.'
                          : ' Um de nossos especialistas pode esclarecer suas duvidas.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection to Almepe Services */}
              <div className="bg-primary/5 rounded-xl p-5 mb-6 border border-primary/20">
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-semibold">A Almepe</span> possui mais de <span className="font-semibold">20 anos</span> de 
                  experiencia em <span className="font-semibold">{diagnostic.recommendedService}</span> para empresas do seu porte. 
                  Nossa equipe de especialistas esta pronta para criar um plano personalizado que pode resultar em economia 
                  de <span className="font-semibold text-highlight">{diagnostic.savings}</span> para o seu negocio.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="text-center space-y-3">
                <Link href="/redirect-fale-conosco" className="block">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-accent font-semibold px-8"
                  >
                    Falar com Especialista via WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <button
                  onClick={reset}
                  className="block mx-auto text-sm text-muted-foreground hover:text-foreground underline"
                >
                  Refazer diagnostico
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
