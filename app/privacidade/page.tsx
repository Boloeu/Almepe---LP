import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12 flex-grow">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Política de Privacidade</h1>

        <div className="prose max-w-none">
          <p>
            Bem-vindo(a) à Almepe. Valorizamos sua privacidade e estamos comprometidos em proteger seus dados pessoais.
            Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-3">1. Informações que Coletamos</h2>
          <p>Podemos coletar as seguintes informações quando você interage com nossa página:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Nome, e-mail e telefone (quando fornecidos voluntariamente em formulários);</li>
            <li>Dados de navegação, como endereço IP, tipo de dispositivo e tempo de visita;</li>
            <li>Cookies para melhorar a experiência do usuário.</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-3">2. Como Utilizamos Suas Informações</h2>
          <p>As informações coletadas podem ser usadas para:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Entrar em contato com você sobre nossos serviços ou responder dúvidas;</li>
            <li>Melhorar a experiência de navegação na página;</li>
            <li>Enviar comunicações promocionais, caso você tenha consentido.</li>
          </ul>

          <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-3">3. Compartilhamento de Informações</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos suas informações com terceiros, exceto quando necessário para
            cumprir requisitos legais ou melhorar nossos serviços.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-3">4. Cookies e Tecnologias Semelhantes</h2>
          <p>
            Utilizamos cookies para personalizar sua experiência e melhorar o desempenho da página. Você pode configurar
            seu navegador para bloquear cookies, mas isso pode afetar algumas funcionalidades.
          </p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-3">5. Seus Direitos</h2>
          <p>Você tem o direito de:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Acessar, corrigir ou excluir suas informações pessoais;</li>
            <li>Revogar o consentimento para o uso de seus dados a qualquer momento;</li>
            <li>Solicitar informações sobre como tratamos seus dados.</li>
          </ul>
          <p>Para exercer seus direitos, entre em contato conosco pelo e-mail Almepe@almepe.com.br.</p>

          <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-3">6. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos revisar esta página regularmente
            para se manter informado(a).
          </p>

          <p className="mt-6">Se tiver dúvidas, entre em contato conosco pelo e-mail Almepe@almepe.com.br.</p>
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
