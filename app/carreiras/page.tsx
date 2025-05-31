"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function CarreirasPage() {
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("https://formsubmit.co/Almepe@almepe.com.br", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "Novo candidato - Trabalhe Conosco",
        }),
      })

      if (response.ok) {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Formulário enviado com sucesso! Entraremos em contato em breve.",
        })
        setFormData({ nome: "", email: "", telefone: "" })
      } else {
        throw new Error("Falha ao enviar o formulário")
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.",
      })
    }
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Trabalhe Conosco</h1>

        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Estamos sempre em busca de talentos para fazer parte da nossa equipe. Preencha o formulário abaixo e
            entraremos em contato assim que houver uma oportunidade compatível com o seu perfil.
          </p>

          {formStatus.submitted && (
            <div
              className={`p-4 mb-6 rounded-md ${formStatus.success ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
            >
              {formStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone *
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <Button type="submit" className="w-full bg-blue-900 text-white hover:bg-blue-800">
                Enviar
              </Button>
            </div>
          </form>

          <div className="mt-8">
            <Link href="/">
              <Button variant="outline" className="text-blue-900 border-blue-900 hover:bg-blue-100">
                Voltar para a página inicial
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
