"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    title: "IR 2025",
    subtitle: "Declaração de Imposto de Renda para Pessoas Físicas e Jurídicas",
    cta: "Saiba mais",
    link: "https://wa.me/551156700780?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20IR%202025",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&h=600&auto=format&fit=crop",
  },
  {
    title: "Contabilidade Digital",
    subtitle: "Gestão contábil, fiscal, de pessoas e societária para sua empresa",
    cta: "Saiba mais",
    link: "https://wa.me/551156700780?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20Contabilidade%20Digital",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&h=600&auto=format&fit=crop",
  },
  {
    title: "Financeiro Digital",
    subtitle: "Gestão financeira completa para otimizar seus recursos",
    cta: "Conheça nossos serviços",
    link: "https://wa.me/551156700780?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20Financeiro%20Digital",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&h=600&auto=format&fit=crop",
  },
  {
    title: "Consultoria",
    subtitle: "Soluções personalizadas para o crescimento do seu negócio",
    cta: "Fale com um Especialista",
    link: "https://wa.me/551156700780?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20Consultoria",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&h=600&auto=format&fit=crop",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">{slide.title}</h1>
            {slide.subtitle && <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">{slide.subtitle}</p>}
            <Link href={slide.link} target="_blank" rel="noopener noreferrer">
              <Button
                className={`text-white text-lg px-8 py-3 ${slide.title === "IR 2025" ? "bg-red-600 hover:bg-red-700" : "bg-blue-900 hover:bg-blue-800"}`}
              >
                {slide.cta}
              </Button>
            </Link>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        <ChevronLeft className="w-6 h-6 text-blue-900" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2"
      >
        <ChevronRight className="w-6 h-6 text-blue-900" />
      </button>
    </section>
  )
}
