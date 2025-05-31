import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Termos de Uso</h1>

        <div className="prose max-w-none">
          <p>
            Ao acessar e utilizar esta landing page, você concorda com os seguintes Termos de Uso. Se não concordar com
            algum dos termos, recomendamos que não utilize este site.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-3">1. Uso do Site</h2>
          <p>
            Este site é disponibilizado para fornecer informações sobre nossos serviços/produtos e para capturar o
            interesse de potenciais clientes. Você não deve:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Utilizar este site para fins ilegais ou não autorizados;</li>
            <li>Tentar hackear, modificar ou interferir no funcionamento do site;</li>
            <li>Copiar, distribuir ou reproduzir o conteúdo sem autorização.</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-3">2. Cadastro e Informações do Usuário</h2>
          <p>
            Se você fornecer informações através de formulários, garante que os dados fornecidos são verdadeiros e
            atualizados. Podemos utilizar esses dados para fins de contato e envio de informações sobre nossos serviços.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-3">3. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo disponibilizado neste site (textos, imagens, design, marca registrada) pertence à Almepe e
            não pode ser copiado ou distribuído sem autorização.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-3">4. Isenção de Responsabilidade</h2>
          <p>
            Fazemos o possível para manter o site atualizado e seguro, mas não garantimos que ele estará livre de erros,
            falhas ou indisponibilidades. Não somos responsáveis por eventuais danos causados pelo uso do site.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-3">5. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Recomendamos que você consulte
            esta página periodicamente para se manter informado(a).
          </p>

          <p className="mt-6">Se tiver dúvidas, entre em contato pelo e-mail Almepe@almepe.com.br.</p>
        </div>

        <div className="mt-8">
          <Link href="/">
            <Button className="bg-blue-900 text-white hover:bg-blue-800">Voltar para a página inicial</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
