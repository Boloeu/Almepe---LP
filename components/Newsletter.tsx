"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus({
        submitted: true,
        success: false,
        message: "Por favor, insira um e-mail válido.",
      })
      return
    }

    try {
      const response = await fetch("https://formsubmit.co/Almepe@almepe.com.br", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          _subject: "Nova inscrição na Newsletter - Almepe",
          _template: "table",
        }),
      })

      if (response.ok) {
        setStatus({
          submitted: true,
          success: true,
          message: "Obrigado! Você foi inscrito em nossa newsletter.",
        })
        setEmail("")
      } else {
        throw new Error("Falha ao inscrever na newsletter")
      }
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: "Ocorreu um erro. Por favor, tente novamente.",
      })
    }
  }

  return (
    <section className="py-16 bg-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Mail className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Receba Nossa Newsletter</h2>
          <p className="text-blue-100 mb-8">
            Fique por dentro das últimas novidades sobre contabilidade, finanças e mudanças na legislação tributária.
            Receba dicas exclusivas diretamente em seu e-mail.
          </p>

          {status.submitted && (
            <div
              className={`p-4 mb-6 rounded-md ${
                status.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              required
            />
            <Button type="submit" className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 font-semibold">
              Inscrever-se
            </Button>
          </form>

          <p className="text-blue-200 text-sm mt-4">
            Não enviamos spam. Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  )
}
