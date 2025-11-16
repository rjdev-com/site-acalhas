import { Home, Shield, Flame, Wind, Layers, Droplets, ArrowRight, CheckCircle } from 'lucide-react';

export default function Servicos() {
  const services = [
    {
      icon: Home,
      title: 'Calhas de Alumínio',
      description: 'Fabricação e instalação de calhas residenciais e comerciais',
      details: [
        'Alumínio 0,5mm - opção econômica e durável',
        'Alumínio 0,7mm - resistência reforçada',
        'Modelos personalizados conforme necessidade',
        'Proteção eficiente contra águas pluviais',
        'Acabamento profissional',
      ],
      image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Shield,
      title: 'Rufos e Pingadeiras',
      description: 'Proteção completa para telhados e estruturas',
      details: [
        'Vedação perfeita em encontros de telhado',
        'Proteção contra infiltrações',
        'Acabamento em alumínio durável',
        'Resistente à corrosão',
        'Instalação precisa e profissional',
      ],
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Layers,
      title: 'Colarinhos de Chaminé',
      description: 'Vedação profissional para chaminés',
      details: [
        'Vedação completa contra água e vento',
        'Fabricação em alumínio de alta qualidade',
        'Modelos adaptáveis a diferentes tipos de chaminé',
        'Instalação técnica e segura',
        'Durabilidade garantida',
      ],
      image: 'https://images.pexels.com/photos/2816323/pexels-photo-2816323.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Flame,
      title: 'Chaminés para Churrasqueiras',
      description: 'Exaustão eficiente para áreas de churrasco',
      details: [
        'Design funcional e estético',
        'Alumínio resistente a altas temperaturas',
        'Tiragem de fumaça eficiente',
        'Personalização conforme projeto',
        'Instalação completa',
      ],
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Wind,
      title: 'Coifas para Cozinhas',
      description: 'Exaustão profissional para ambientes',
      details: [
        'Fabricação personalizada em alumínio',
        'Modelos residenciais e comerciais',
        'Eficiência na exaustão de vapores',
        'Acabamento de alta qualidade',
        'Instalação profissional',
      ],
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Droplets,
      title: 'Condutores Pluviais',
      description: 'Sistema completo de escoamento de água',
      details: [
        'Alumínio 0,5mm e 0,7mm',
        'Direcionamento eficiente de água pluvial',
        'Modelos redondos e quadrados',
        'Fixações seguras e discretas',
        'Integração perfeita com calhas',
      ],
      image: 'https://images.pexels.com/photos/221018/pexels-photo-221018.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4d70] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Soluções completas em alumínio de alta qualidade para projetos residenciais, comerciais e industriais em Joinville e região
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-16 border-l-4 border-[#ff6b35]">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">Alumínio de Primeira Qualidade</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Todos os nossos produtos são fabricados com alumínio de alta qualidade, disponível em duas espessuras para atender diferentes necessidades e orçamentos:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Alumínio 0,5mm</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Opção econômica com excelente custo-benefício</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ideal para projetos residenciais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Durabilidade comprovada</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">Alumínio 0,7mm</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Resistência reforçada para maior durabilidade</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Recomendado para projetos comerciais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Máxima proteção e vida útil prolongada</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow`}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-[#ff6b35] text-white rounded-lg flex items-center justify-center">
                      <service.icon size={24} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f]">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle size={20} className="text-[#ff6b35] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/5547989100709?text=Olá,%20gostaria%20de%20um%20orçamento%20para%20o%20serviço%20de%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Solicitar Orçamento
                    <ArrowRight className="ml-2" size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d4d70] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Iniciar seu Projeto?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Entre em contato e receba um orçamento personalizado sem compromisso
          </p>
          <a
            href="https://wa.me/5547989100709?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#ff6b35] hover:bg-[#e55a2b] px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Fale Conosco no WhatsApp
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
