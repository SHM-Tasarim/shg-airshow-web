import React, { useEffect } from "react";
import { Language } from "../App";

interface TicketsProps {
  lang: Language;
  targetId?: string | null;
}

const Tickets: React.FC<TicketsProps> = ({ lang, targetId }) => {

  useEffect(() => {
    if (targetId === "faq") {
      const faqSection = document.getElementById("faq");
      if (faqSection) {
        setTimeout(() => {
          faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [targetId]);

  const translations = {
    title: lang === "TR" ? "BİLETLER" : "TICKETS",
    addToCart: lang === "TR" ? "Bilet Al" : "Add to Cart",
    rulesTitle: lang === "TR" ? "BİLETLERLE İLGİLİ İSTİSNAİ KONULAR" : "EXCEPTIONAL CONDITIONS REGARDING TICKETS",
    freeEntryText: lang === "TR"
      ? "6 yaş ve altı çocuklar ücretsizdir. Gazi, engelli, basın kartı sahipleri, Türk Silahlı Kuvvetleri (Hava, Deniz ve Kara Kuvvetleri), Jandarma Genel Komutanlığı ve Emniyet Genel Müdürlüğü Teşkilatı Personeli, kimlik ibraz etmek kaydıyla şahsen ücretsiz giriş yapabilirler. Beraberindeki aile fertleri ise ücrete tabidir."
      : "Veterans, persons with disabilities, press card holders, and personnel of the Turkish Armed Forces (Air, Naval and Land Forces), General Command of Gendarmerie and General Directorate of Security Organization may enter free of charge upon presentation of their ID. Their accompanying family members are subject to entry fees.",
    rulesText: lang === "TR"
      ? [
          "Doğal afetler, savaş, seferberlik, salgın hastalık, terör ihbarı gibi her türlü mücbir sebeplerle SHG Airshow'un kısmen ve/veya tamamen iptal edilmesi,",
          "SHG Airshow'un bir havacılık organizasyonu olması nedeniyle, gösteri uçuşlarını etkileyebilecek her türlü olumsuz hava şartları nedeniyle gösterilerin kısmen ve/veya tamamen iptal edilmesi,",
          "SHG Airshow'da yer alan hava taşıtlarının teknik arızalar ve/veya personellerinde oluşabilecek sağlık sorunları gibi sebeplerle SHG Airshow organizasyonunun yapıldığı S.H.M.'ye (Sivrihisar Havacılık Merkezi'ne) ulaşamamaları ve/veya ulaştıkları halde bahis edilen sebeplerle SHG Airshow sırasında kısmen ve/veya tamamen gösteri uçuşu yapamamaları,",
          "SHG Airshow gösteri ve uçuş programında kısmi ve/veya asli değişikliklerin yapılması,",
          "Ve/veya yukarıda belirten benzeri şartların oluşabileceği diğer sebeplerle SHG Airshow'un kısmen ve/veya tamamen iptal edilmesi,",
          "hallerinde bilet ücretlerinde iade ve/veya değişiklik yapılmaz.",
          "SHG Airshow bilet ücretleri iade kapsamı dışındadır.",
        ]
      : [
          "In the event that SHG Airshow is partially or completely cancelled due to any force majeure reasons such as natural disasters, war, mobilization, pandemics, terror alerts,",
          "Due to SHG Airshow being an aviation organization, partial or complete cancellation of the show due to any adverse weather conditions that may affect demonstration flights,",
          "Inability of aircraft participating in SHG Airshow to reach SHM (Sivrihisar Aviation Center) due to technical malfunctions or health issues of personnel, and/or being unable to perform demonstration flights partially or completely during SHG Airshow for the stated reasons,",
          "Partial or substantial changes to the SHG Airshow demonstration and flight program,",
          "And/or other reasons similar to the conditions mentioned above occurring, resulting in partial or complete cancellation of SHG Airshow,",
          "In such cases, ticket fees will not be refunded or changed.",
          "SHG Airshow ticket fees are excluded from refund policies.",
        ],
  };

  const pricing = [
    {
      title: lang === "TR" ? "Günlük Bilet" : "TICKET",
      features:
        lang === "TR"
          ? [
              "Gösteri alanına tam gün erişim",
              "Stant alanlarını ziyaret etme fırsatı",
              "Yiyecek ve içecek alanlarından alışveriş imkanı",
            ]
          : [
              "Full day access to the show area",
              "Opportunity to visit stand areas",
              "Food and beverage stands access",
            ],
    },
    {
      title: lang === "TR" ? "Günlük VIP Bilet" : "1-DAY VIP TICKET",
      features:
        lang === "TR"
          ? [
              "VIP alanına özel giriş",
              "Airshow'a hızlı ulaşım",
              "Gösterileri yakından izleme imkanı",
              "Gölgeli verandada ve klimalı VIP salonunda oturma alanı",
              "Özel VIP ve engelli tuvaletleri",
              "Türk Mutfağından sunulan ikram büfesi",
              "Özel otopark ve vale hizmeti",
              "Günlük Bilet'teki tüm imkanlar",
            ]
          : [
              "Private Entrance",
              "VIP seating area in shaded veranda and/or air-conditioned lounge",
              "Access to VIP restrooms located in the lounge",
              "A selection of Turkish cuisine and a rich buffet served from our exclusive VIP lounge kitchen",
              "Special parking and valet service",
            ],
    },
  ];

  return (
    <div className="font-display overflow-x-hidden bg-white dark:bg-background-dark transition-colors duration-500">
      
      {/* Video Hero Section */}
      <section className="relative py-24 lg:py-36 text-center text-white overflow-hidden bg-secondary min-h-[75vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover opacity-60">
            <source src="/images/shg-bilet.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/90"></div>
        </div>

        <div className="relative z-20 container mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase drop-shadow-2xl">
            {translations.title}
          </h1>
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
                <h3 className="text-2xl lg:text-3xl font-black mb-6 text-gray-900 dark:text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                  {tier.title}
                </h3>
                <ul className="space-y-4 lg:space-y-5 mb-12 flex-grow">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 lg:gap-4">
                      <span className="material-icons text-xl lg:text-2xl text-primary">
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

      {/* Ticket Rules Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-4xl font-black mb-6 text-secondary dark:text-white uppercase tracking-tight text-center">
              {translations.rulesTitle}
            </h2>
            
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-center mb-10 max-w-3xl mx-auto">
              {translations.freeEntryText}
            </p>

            <div className="bg-white dark:bg-gray-900/50 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
              <ul className="space-y-6">
                {translations.rulesText.map((item, idx) => {
                  // İlk 5 madde için (0,1,2,3,4) madde işareti göster, son 2 madde için gösterme
                  const showBullet = idx < 5;
                  
                  return (
                    <li 
                      key={idx} 
                      className={`text-gray-700 dark:text-gray-300 font-medium leading-relaxed text-sm lg:text-base flex items-start ${!showBullet ? 'mt-8 font-bold text-secondary dark:text-white' : ''}`}
                    >
                      {showBullet && (
                        <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      )}
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tickets;