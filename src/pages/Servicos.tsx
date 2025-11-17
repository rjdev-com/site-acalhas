import { Home, Shield, Flame, Wind, Layers, Droplets, ArrowRight, CheckCircle } from 'lucide-react';
import { usePageContent } from '../hooks/usePageContent';

export default function Servicos() {
  const { getContent } = usePageContent('servicos');

  const services = [
    {
      icon: Home,
      titleKey: 'service1_title',
      descriptionKey: 'service1_description',
      detailKeys: ['service1_detail1', 'service1_detail2', 'service1_detail3', 'service1_detail4', 'service1_detail5'],
      imageKey: 'service1_image',
    },
    {
      icon: Shield,
      titleKey: 'service2_title',
      descriptionKey: 'service2_description',
      detailKeys: ['service2_detail1', 'service2_detail2', 'service2_detail3', 'service2_detail4', 'service2_detail5'],
      imageKey: 'service2_image',
    },
    {
      icon: Layers,
      titleKey: 'service3_title',
      descriptionKey: 'service3_description',
      detailKeys: ['service3_detail1', 'service3_detail2', 'service3_detail3', 'service3_detail4', 'service3_detail5'],
      imageKey: 'service3_image',
    },
    {
      icon: Flame,
      titleKey: 'service4_title',
      descriptionKey: 'service4_description',
      detailKeys: ['service4_detail1', 'service4_detail2', 'service4_detail3', 'service4_detail4', 'service4_detail5'],
      imageKey: 'service4_image',
    },
    {
      icon: Wind,
      titleKey: 'service5_title',
      descriptionKey: 'service5_description',
      detailKeys: ['service5_detail1', 'service5_detail2', 'service5_detail3', 'service5_detail4', 'service5_detail5'],
      imageKey: 'service5_image',
    },
    {
      icon: Droplets,
      titleKey: 'service6_title',
      descriptionKey: 'service6_description',
      detailKeys: ['service6_detail1', 'service6_detail2', 'service6_detail3', 'service6_detail4', 'service6_detail5'],
      imageKey: 'service6_image',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4d70] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{getContent('hero_title')}</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {getContent('hero_subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-16 border-l-4 border-[#ff6b35]">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4">{getContent('aluminio_title')}</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {getContent('aluminio_intro')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{getContent('aluminio_05_title')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{getContent('aluminio_05_benefit1')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{getContent('aluminio_05_benefit2')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{getContent('aluminio_05_benefit3')}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{getContent('aluminio_07_title')}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{getContent('aluminio_07_benefit1')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{getContent('aluminio_07_benefit2')}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{getContent('aluminio_07_benefit3')}</span>
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
                    src={getContent(service.imageKey)}
                    alt={getContent(service.titleKey)}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-[#ff6b35] text-white rounded-lg flex items-center justify-center">
                      <service.icon size={24} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a5f]">
                      {getContent(service.titleKey)}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {getContent(service.descriptionKey)}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.detailKeys.map((detailKey, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle size={20} className="text-[#ff6b35] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{getContent(detailKey)}</span>
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
            {getContent('cta_title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {getContent('cta_subtitle')}
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
