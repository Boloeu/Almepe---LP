import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo / Bio */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/almepe-colorido-icone.png"
                alt="Almepe Logo"
                width={44}
                height={44}
                className="object-contain"
              />
              <span className="font-mono text-lg font-bold">Almepe</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Contabilidade digital que entrega resultados. Mais de 20 anos
              transformando a gestão de empresas em São Paulo.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <Link
                href="https://www.instagram.com/almepe_contabilidade/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-9 w-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Links rapidos */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
              Links Rápidos
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#inicio" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#metodologia" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <Link href="/privacidade" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-highlight flex-shrink-0" />
                <span className="text-sm text-primary-foreground/60">(11) 5670-0760</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-highlight flex-shrink-0" />
                <span className="text-sm text-primary-foreground/60">Almepe@almepe.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-highlight flex-shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/60">São Paulo, SP</span>
              </li>
            </ul>
          </div>

          {/* Selos */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
              Certificações
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 rounded-lg bg-primary-foreground/5 p-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-highlight/20 text-highlight text-xs font-bold">
                  CRC
                </div>
                <span className="text-xs text-primary-foreground/60">
                  Registro CRC Ativo
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-primary-foreground/5 p-3">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-highlight/20 text-highlight text-xs font-bold">
                  ISO
                </div>
                <span className="text-xs text-primary-foreground/60">
                  Processos Padronizados
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/40">
            {new Date().getFullYear()} Almepe Contabilidade. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
