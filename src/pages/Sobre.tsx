import { Award, CheckCircle, Clock, Users, Wrench, MapPin } from 'lucide-react';
import { usePageContent } from '../hooks/usePageContent';

export default function Sobre() {
  const { getContent } = usePageContent('sobre');

  const values = [
    { icon: Award, titleKey: 'value1_title', descriptionKey: 'value1_description' },
    { icon: Clock, titleKey: 'value2_title', descriptionKey: 'value2_description' },
    { icon: Users, titleKey: 'value3_title', descriptionKey: 'value3_description' },
    { icon: Wrench, titleKey: 'value4_title', descriptionKey: 'value4_description' },
  ];

  const benefitKeys = [
    'benefit1', 'benefit2', 'benefit3', 'benefit4',
    'benefit5', 'benefit6', 'benefit7', 'benefit8'
  ];

  const highlights = [
    { icon: Wrench, titleKey: 'highlight1_title', descriptionKey: 'highlight1_description' },
    { icon: Award, titleKey: 'highlight2_title', descriptionKey: 'highlight2_description' },
    { icon: MapPin, titleKey: 'highlight3_title', descriptionKey: 'highlight3_description' },
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                {getContent('main_title')}
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>{getContent('main_text1')}</p>
                <p>{getContent('main_text2')}</p>
                <p>{getContent('main_text3')}</p>
              </div>
            </div>
            <div className="relative">
              <img
                src={getContent('main_image')}
                alt="Profissional trabalhando"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#ff6b35] text-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold">{getContent('main_stat_number')}</p>
                <p className="text-sm">{getContent('main_stat_text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
              {getContent('values_title')}
            </h2>
            <p className="text-xl text-gray-600">
              {getContent('values_subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6b35] text-white rounded-full mb-4">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-3">{getContent(value.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{getContent(value.descriptionKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={getContent('benefits_image')}
                alt="Alumínio de qualidade"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
                {getContent('benefits_title')}
              </h2>
              <ul className="space-y-4">
                {benefitKeys.map((benefitKey, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={24} className="text-[#ff6b35] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{getContent(benefitKey)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1e3a5f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-[#2d4d70] rounded-xl p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff6b35] rounded-full mb-4">
                  <highlight.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{getContent(highlight.titleKey)}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {getContent(highlight.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-6">
            {getContent('cta_title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {getContent('cta_subtitle')}
          </p>
          <a
            href="https://wa.me/5547989100709?text=Olá,%20gostaria%20de%20conhecer%20melhor%20os%20serviços%20da%20A%20Calhas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
