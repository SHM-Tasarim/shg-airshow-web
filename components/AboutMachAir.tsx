import React from 'react';
import { Language } from '../App';

interface AboutMachAirProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const AboutMachAir: React.FC<AboutMachAirProps> = ({ lang, onNavigate }) => {
  const content = {
    TR: {
      title: "Mach Aviation",
      history: "Mak Havacılık (Mach Air), 1989 yılında İstanbul Atatürk Havalimanı'nda kurulmuştur.",
      legacy: "Mach Air, Sivil Havacılık Genel Müdürlüğü tarafından onaylanmış AOC (İşletme Ruhsatı) belgesine sahip, yetkin ve güvenilir bir genel havacılık operatörü olarak havacılık sektöründe öncü rol oynamaktadır.",
      transition: "Uzun yıllar Atatürk Havalimanı'nda faaliyet gösteren Mach Air; genel havacılık, bakım hizmetleri, film prodüksiyon çekimleri ve uçuş eğitimi gibi pek çok alanda Türk sivil havacılığına yenilikler kazandırmıştır.",
      modernEra: "2013 yılından bu yana operasyonlarını Sivrihisar Havacılık Merkezi (S.H.M.) bünyesinde sürdüren Mach Air, profesyonel teknik ekibiyle gökyüzü mirasını yaşatmaya devam ediyor.",
      participation: 'Türkiye\'nin Uçan Havacılık Müzesi "M.S.Ö. Hava ve Uzay Müzesi" envanterindeki nadide tarihi hava araçlarının tüm bakım ve uçuş işletmesi, Mach Air\'in uzman teknisyenleri tarafından titizlikle gerçekleştirilmektedir.',
      back: "mach.aero"
    },
    EN: {
      title: "Mach Aviation",
      history: "Mach Air was founded in 1989 by Ali İsmet Öztürk, Türkiye's First Professional National Aerobatic Pilot.",
      legacy: "As a qualified general aviation operator with an AOC issued by the DGCA, Mach Air plays a pioneering role in the aviation industry with its reliability and expertise.",
      transition: "Operating at Istanbul Atatürk Airport for many years, Mach Air introduced innovations to Turkish civil aviation in general aviation, maintenance, film production, and flight training.",
      modernEra: "Continuing its operations at Sivrihisar Aviation Center (S.H.M.) since 2013, Mach Air continues to preserve the aviation heritage with its professional technical team.",
      participation: "The maintenance and flight operation of the rare historical aircraft in the 'M.S.Ö. Air and Space Museum' inventory are meticulously carried out by Mach Air's expert technicians.",
      back: "mach.aero"
    }
  }[lang];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500">
      {/* Hero Header */}
      <div className="w-full h-[45vh] md:h-[65vh] overflow-hidden relative">
        <img
          src="/images/mach-aviation-3.jpg"
          className="w-full h-full object-cover"
          alt="Mach Air Header"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-black/30"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        <header className="mb-16">
          <p className="text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4">
            {content.tagline}
          </p>
          <h1 className="text-2xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8">
            {content.title}<span className="text-primary">.</span>
          </h1>
          <div className="w-16 h-1 bg-primary"></div>
        </header>

        {/* Narrative Section */}
        <div className="space-y-10 mb-12">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-200 font-bold italic border-l-4 border-primary pl-8">
            {content.history}
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
            {content.legacy}
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium border-l-4 border-primary/20 pl-8">
            {content.transition}
          </p>

          {/* Visual Divider 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-xl group relative border border-gray-100 dark:border-white/5">
              <img
                src="/images/mach-1.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Technical Maintenance"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">1992 - Atatürk Havalimanı</div>
            </div>
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-xl group relative border border-gray-100 dark:border-white/5">
              <img
                src="/images/mach-3.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Operations"
              />
              <div className="absolute bottom-4 left-4 bg-primary/80 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">1996 - Dolmabahçe Sarayı</div>
            </div>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed text-primary font-black tracking-tight italic">
            {content.modernEra}
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
            {content.participation}
          </p>

          {/* YENİ EKLENEN FOTOĞRAF ALANI (Butondan Hemen Önce) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-xl group relative border border-gray-100 dark:border-white/5">
              <img
                src="/images/mach-5.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Mach Air Maintenance Team"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-xl group relative border border-gray-100 dark:border-white/5">
              <img
                src="/images/mach-6.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Mach Air Hangar"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-8 pt-8">
          <a
            href="https://www.mach.aero/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary text-white font-black py-5 px-12 rounded-xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 text-center uppercase tracking-widest text-sm"
          >
            {content.back}
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-8 px-4 md:px-6 max-w-5xl mx-auto pb-24">
        <div className="relative py-8 md:py-12 px-4 md:px-8 bg-primary text-white text-center overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
          <div className="relative z-10">
            <button
              onClick={() => onNavigate?.("tickets")}
              className="bg-white text-primary font-black py-4 md:py-6 px-8 md:px-20 rounded-lg md:rounded-xl hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl uppercase tracking-[0.1em] md:tracking-[0.2em] text-base md:text-lg cursor-pointer w-full md:w-auto"
            >
              {lang === "TR" ? "BİLET AL" : "BUY TICKET"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMachAir;