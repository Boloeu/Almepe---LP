"use client"

import { useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Building2, Users, TrendingUp, Award } from "lucide-react"

const stats = [
  { icon: Building2, value: 500, suffix: "+", label: "Empresas Atendidas" },
  { icon: Users, value: 20, suffix: "+", label: "Anos de Experiencia" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Satisfacao dos Clientes" },
  { icon: Award, value: 30, suffix: "+", label: "Especialistas" },
]

function AnimatedCounter({ target, suffix, started }: { target: number; suffix: string; started: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let current = 0
    const step = Math.max(1, Math.floor(target / 40))
    const interval = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(current)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [started, target])

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  )
}

export default function NumbersSection() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section ref={ref} className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center transition-all duration-500 ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <stat.icon className="h-8 w-8 mb-3 text-highlight" />
              <p className="text-3xl md:text-4xl font-bold font-mono">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} started={isInView} />
              </p>
              <p className="mt-2 text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
