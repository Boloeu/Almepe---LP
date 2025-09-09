import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export default function InstagramSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Nosso Instagram</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Acompanhe nossas dicas, novidades e conteúdos exclusivos sobre contabilidade e finanças no Instagram.
          </p>

          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 p-1 rounded-full mb-6">
              <div className="bg-white p-4 rounded-full">
                <Instagram className="w-12 h-12 text-gray-800" />
              </div>
            </div>

            <Link href="https://www.instagram.com/almepe_contabilidade/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-lg px-8 py-4 rounded-full flex items-center gap-3 shadow-lg transform hover:scale-105 transition-all duration-300">
                <Instagram className="w-6 h-6" />
                Acompanhe a Almepe no Instagram
              </Button>
            </Link>

            <p className="text-sm text-gray-500 mt-4">@almepe_contabilidade</p>
          </div>
        </div>
      </div>
    </section>
  )
}
