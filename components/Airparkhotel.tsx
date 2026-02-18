import React from 'react';
import { Language } from '../App';

interface AirparkhotelProps {
  lang: Language;
  onNavigate: (view: 'home' | 'tickets') => void;
}

const Airparkhotel: React.FC<AirparkhotelProps> = ({ lang, onNavigate }) => {
  const content = {
    TR: {
      tagline: "",
      title: "AirParkHotel",
      p1: "Üzerinden Spitfire Geçen TEK Otel",
      p2: "Sivrihisar Havacılık Merkezi'nin gelişimine katkı sağlayan AirParkHotel, havacılık sektörünün yanında turizm alanında da önemli bir hizmet noktası olmayı hedefliyor.<br /><br />AirParkHotel, iç mekan tasarımında tercih edilen modern renk paleti ve şık dizaynı ile konfor ve estetiği bir araya getiriyor.",
      p3: "Konaklama için AirParkHotel ile temas kurabilirsiniz.",
      infoTitle: "OTEL BİLGİLERİ",
      checkin: "",
      checkout: "",
      location: "Konum",
      contact: "İLETİŞİM",
      visitWeb: "TEL: +90 532 416 71 33",
      buyTicket: "BİLET AL"
    },
    EN: {
      tagline: "",
      title: "AirParkHotel",
      p1: "The Only Hotel Where Spitfires Fly Over",
      p2: "The AirParkHotel, which contributes to the development of Sivrihisar Aviation Center, aims to be an important service point in the tourism sector as well as the aviation sector. AirParkHotel combines comfort and aesthetics with its modern color palette and stylish design chosen for its interior.",
      p3: "For accommodation, you can contact AirParkHotel.",
      infoTitle: "HOTEL INFORMATION",
      checkin: "Check-in",
      checkout: "Check-out",
      location: "Location",
      contact: "CONTACT",
      visitWeb: "PHONE: +90 532 416 71 33",
      buyTicket: "BUY TICKET"
    }
  }[lang];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500">
      {/* 1. HERO IMAGE AREA (Sayfa başındaki ana fotoğraf) */}
      <div className="w-full h-[45vh] md:h-[65vh] overflow-hidden relative bg-gray-100 dark:bg-gray-800">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/aph-header-2.jpg" />
          <img
            src="/images/aph-4.jpg"
            className="w-full h-full object-cover md:object-contain"
            alt="AirPark Hotel Hero"
          />
        </picture>
        {/* Fotoğrafın üzerine yumuşak geçiş sağlayan gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark to-transparent"></div>
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

        {/* Narrative Text Section */}
        <div className="space-y-10 mb-20">
          {/* P1: Vurgulu Giriş */}
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-200 font-bold italic border-l-4 border-primary pl-8">
            {content.p1}
          </p>

          {/* P2: Detay Metni */}
          <div className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium" dangerouslySetInnerHTML={{ __html: content.p2 }} />

          {/* 2. RESİM ALANI - Galeri Görünümü */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-xl group">
              <img
                src="/images/aph-3.jpg" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="AirParkHotel Room"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-xl group">
              <img
                src="/images/aph-room.jpg" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="AirParkHotel Interior"
              />
            </div>
          </div>

          {/* P3: Davet Metni */}
          <p className="text-lg md:text-xl leading-relaxed text-primary font-bold">
            {content.p3}
          </p>
        </div>

        {/* Bilgi ve Rezervasyon Butonu */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
          <a
            //href="https://shm.aero/iletisim" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary text-white font-black py-5 px-12 rounded-xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 text-center uppercase tracking-widest text-sm"
          >
            {content.visitWeb}
          </a>
        </div>
      </div>

      {/* Sayfa Altı CTA (Bilet Al Bölümü) */}
      <section className="mt-32 px-4 md:px-6 max-w-5xl mx-auto pb-24">
        <div className="relative py-8 md:py-12 px-4 md:px-8 bg-primary text-white text-center overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
          <div className="relative z-10">
            <button
              onClick={() => onNavigate?.("tickets")}
              className="bg-white text-primary font-black py-4 md:py-6 px-8 md:px-20 rounded-lg md:rounded-xl hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl uppercase tracking-[0.1em] md:tracking-[0.2em] text-base md:text-lg cursor-pointer w-full md:w-auto"
            >
              {content.buyTicket}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Airparkhotel;