import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="w-12 h-12">
          <Link href="/">
            <Image
              src="/images/almepe-colorido-icone.png"
              alt="Almepe Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="/#services" className="text-gray-600 hover:text-blue-900">
            Serviços
          </a>
          <a href="/#about" className="text-gray-600 hover:text-blue-900">
            Sobre Nós
          </a>
          <a href="/#contact" className="text-gray-600 hover:text-blue-900">
            Contato
          </a>
        </nav>
        <Link href="/redirect-fale-conosco">
          <Button className="bg-blue-900 text-white hover:bg-blue-800">Fale Conosco</Button>
        </Link>
      </div>
    </header>
  )
}
