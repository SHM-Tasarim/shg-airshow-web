import React from "react";
import { Language } from "../App";

interface TicketsProps {
  lang: Language;
}

const Tickets: React.FC<TicketsProps> = ({ lang }) => {
  const translations = {
    title: lang === "TR" ? "BİLETLER" : "TICKETS",
    subtitle:
      lang === "TR"
        ? "Gökyüzünün sınırlarını zorlayan gösterilerde yerinizi ayırtın. Unutulmaz bir deneyim için biletinizi hemen alın!"
        : "Secure your spot at the breathtaking aerial displays that push the limits of the sky. Get your ticket now for an unforgettable experience!",
    faqTitle:
      lang === "TR" ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions",
    addToCart: lang === "TR" ? "Biletini Al" : "Add to Cart",
  };

  const pricing = [
    {
      title: lang === "TR" ? "Günlük Bilet" : "Ticket",
      features:
        lang === "TR"
          ? [
              "Gösteri alanına tam gün erişim",
              "Stant alanlarını ziyaret etme fırsatı",
              "Yiyecek ve içecek alanlarından faydalanma imkanı",
            ]
          : [
              "Full day access to the show area",
              "Opportunity to visit static displays",
              "Food and beverage stands access",
            ],
    },
    {
      title: lang === "TR" ? "VIP Bilet" : "VIP Ticket",
      features:
        lang === "TR"
          ? [
              "Özel Giriş",
              "Güneşlikli veranda alanında ve/veya klimalı salonda VIP oturma alanı",
              "Salonda bulunan VIP tuvaletlerine erişim imkanı",
              "VIP salonuna ait özel mutfaktan sunulan Türk mutfağı seçkisi",
              "Gün boyu sunulan ücretsiz yiyecek ve içecekler ikramı",
              "VIP otopark",
            ]
          : [
              "Private Entrance",
              "VIP seating area in shaded veranda and/or air-conditioned lounge",
              "Access to VIP restrooms located in the lounge",
              "Selection of Turkish cuisine served from the lounge's private kitchen",
              "Complimentary food and beverages served throughout the day",
              "VIP parking",
            ],
    },
  ];

  const faqs = [
    {
      q:
        lang === "TR"
          ? "Çocuklar için yaş sınırı var mı?"
          : "Is there an age limit for children?",
      a:
        lang === "TR"
          ? "Organizasyonumuz tüm yaş grupları için uygundur; 6 yaş ve altı çocuklar ücretsizdir."
          : "Our event is suitable for all age groups; children aged 6 and under are free of charge.",
    },
    {
      q: lang === "TR" ? "Otopark mevcut mu?" : "Is parking available?",
      a:
        lang === "TR"
          ? "Etkinlik alanında ücretsiz otopark alanları mevcuttur. Ayrıca, VIP bilet alan seyircilerimiz için özel otopark alanı ayrılmıştır."
          : "There are free parking areas available at the event venue. Additionally, a dedicated parking area is reserved for our VIP ticket holders.",
    },
  ];

  return (
    <div className="font-display overflow-x-hidden">
      {/* Hero Section with Video Background - GÜNCELLENDİ */}
      <section className="relative py-24 lg:py-36 text-center text-white overflow-hidden bg-secondary min-h-[50vh] flex items-center justify-center">
        
        {/* Video Arkaplan Alanı */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/images/shg-airshow-2025-2.mp4" type="video/mp4" />
          </video>
          
          {/* Gradyan ve Karartma */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/90"></div>
          
          {/* Fallback Görseli (Video yüklenmezse) */}
          <div
            className="absolute inset-0 z-[-1] bg-cover bg-center opacity-40">
            </div>
        </div>

        <div className="relative z-20 container mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase drop-shadow-2xl">
            {translations.title}
          </h1>
          <p className="text-base md:text-xl text-gray-200 max-w-3xl mx-auto font-medium drop-shadow-lg leading-relaxed">
            {translations.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {pricing.map((tier, idx) => (
              <div
                key={idx}
                className="group flex flex-col p-8 lg:p-12 rounded-3xl bg-white dark:bg-gray-900/50 border-2 border-gray-100 dark:border-gray-800 shadow-xl transition-all duration-500 hover:border-primary hover:bg-primary/[0.03] dark:hover:bg-primary/[0.05] hover:-translate-y-2"
              >
                <h3 className="text-2xl lg:text-3xl font-black mb-2 text-gray-900 dark:text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                  {tier.title}
                </h3>
                <p className="text-4xl lg:text-6xl font-black mb-8 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                </p>
                <ul className="space-y-4 lg:space-y-5 mb-12 flex-grow">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 lg:gap-4">
                      <span className="material-icons text-xl lg:text-2xl text-primary group-hover:scale-110 transition-transform">
                        check_circle
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 font-semibold leading-tight text-sm lg:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-primary text-white py-4 lg:py-5 rounded-2xl font-black uppercase text-xs lg:text-sm tracking-[0.2em] hover:bg-red-700 transition-all shadow-xl shadow-primary/20 active:scale-95">
                  {translations.addToCart}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 dark:bg-gray-900/30 py-16 lg:py-24 rounded-[2rem] lg:rounded-[3rem] mx-4 mb-16 border border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-gray-900 dark:text-white tracking-tight uppercase">
              {translations.faqTitle}
            </h2>
            <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 font-bold opacity-70">
              {translations.faqSubtitle}
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900/80 p-6 lg:p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/20 transition-all shadow-sm"
              >
                <h4 className="font-black text-base lg:text-lg mb-4 text-gray-900 dark:text-white uppercase leading-tight flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs lg:text-sm font-medium leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;