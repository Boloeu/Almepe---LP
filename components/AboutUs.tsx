export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Quem Somos</h2>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          A Almepe é uma empresa especializada em consultoria financeira e direito tributário, oferecendo soluções
          personalizadas para empresas e pessoas físicas há mais de uma década. Nossa equipe de especialistas está
          comprometida em fornecer serviços de alta qualidade, sempre pautados pela ética e transparência.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Missão</h3>
            <p className="text-gray-700">
              Oferecer soluções financeiras e jurídicas inovadoras, contribuindo para o sucesso e crescimento
              sustentável de nossos clientes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Visão</h3>
            <p className="text-gray-700">
              Ser reconhecida como referência nacional em consultoria financeira e direito tributário, destacando-se
              pela excelência e impacto positivo nos resultados dos clientes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Valores</h3>
            <p className="text-gray-700">
              Ética, transparência, inovação, excelência técnica e compromisso com o cliente são os pilares que norteiam
              nossas ações e decisões.
            </p>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Nossos Diferenciais</h3>
          <ul className="text-gray-700 space-y-2">
            <li>Mais de 10 anos de experiência no mercado</li>
            <li>Equipe especializada em finanças e direito tributário</li>
            <li>Soluções personalizadas para cada cliente</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

