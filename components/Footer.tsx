import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="w-32 h-32 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/almepeLogo.png-X2WDqDqKkYOhqO91Mfp6ETpArEDnH9.png"
                alt="Almepe Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm text-gray-400 text-center md:text-left mb-4">
              Evite dores de cabeça. Vem pra Almepe!
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="https://www.instagram.com/almepe_contabilidade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacidade" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/carreiras" className="text-gray-400 hover:text-white transition-colors">
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Consultoria Financeira
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Direito Tributário
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Planejamento Estratégico
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>(11)56700780</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>Almepe@almepe.com.br</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Rua Bacaetava, 191. Sala 907 São Paulo SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2024 Almepe. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
