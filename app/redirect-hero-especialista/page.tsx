import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { Button } from "@/components/ui/button"

export default function RedirectHeroEspecialista() {
  return (
    <>
      <Script id="google-ads-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion', {'send_to': 'AW-11105298288/KkxHCPCB5qwZEPDOta8p'});`}
      </Script>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/almepe-colorido-icone.png"
              alt="Almepe Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold text-blue-900 mb-4">Você será redirecionado para o WhatsApp</h1>
          <p className="text-gray-600 mb-8">em instantes ou clique no botão abaixo.</p>
          <Link
            href="https://wa.me/551156700780?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20Consultoria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 transition-transform hover:scale-105">
              Ir para o WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
