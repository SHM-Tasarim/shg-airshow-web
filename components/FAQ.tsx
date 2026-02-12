import React, { useEffect } from "react";
import { Language } from "../App";

interface FAQProps {
  lang: Language;
  targetId?: string | null;
  onNavigate?: (view: 'tickets') => void;
}

const FAQ: React.FC<FAQProps> = ({ lang, targetId, onNavigate }) => {

  useEffect(() => {
    if (targetId) {
      const faqSection = document.getElementById(targetId);
      if (faqSection) {
        setTimeout(() => {
          faqSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [targetId]);

  const translations = {
    title: lang === "TR" ? "Sıkça Sorulan Sorular" : "FREQUENTLY ASKED QUESTIONS",
  };

  const faqs = [
    {
      q: lang === "TR" ? "Nereden Bilet Satın Alabilirim?" : "HOW TO BUY TICKETS?",
      a: lang === "TR" ? "Biletinizi; SHG Airshow 2026 resmi web sitesinden, \"biletinial\" dijital platformlarından ve organizasyon günlerinde kapıda bulunan SHG gişelerimizden satın alabilirsiniz." : "To ensure a smooth entry process to the SHG Airshow, we recommend downloading your tickets prior to the event. You can access your tickets via email, SMS, or the Biletinial mobile app. Additionally, you can purchase tickets at our SHG ticket booths located on-site during the event days.",
    },
    {
      q: lang === "TR" ? "Çocuklar için yaş sınırı var mı?" : "IS THERE AN AGE LIMIT FOR CHILDREN?",
      a: lang === "TR" ? "6 yaş ve altı çocuklar ücretsizdir." : "Our event is suitable for all age groups; children aged 6 and under are free of charge.",
    },
    {
      q: lang === "TR" ? "Otopark mevcut mu?" : "IS PARKING AVAILABLE?",
      a: lang === "TR" ? "Mevcuttur. Ayrıca, VIP bilet alan seyircilerimiz için özel giriş ve otopark alanları ayrılmıştır." : "There are free parking areas available at the event venue. Additionally, a dedicated parking area is reserved for our VIP ticket holders.",
    },
    {
      q: lang === "TR" ? "Nasıl Ulaşım Sağlayabilirim?" : "HOW CAN I GET THERE?",
      a: lang === "TR" ? "Navigasyon uygulamalarında lütfen S.H.M. \"Sivrihisar Havacılık Merkezi\" konumunu hedefleyin. Bölgeye ulaştığınızda yol kenarındaki \"SHG Airshow\" tabelaları size rehberlik edecektir. Ayrıca, Sivrihisar Belediye Binası önünden hareket eden ring seferlerini kullanarak ulaşım sağlayabilirsiniz." : "For directions to the show area, please set your navigation app to 'Sivrihisar Aviation Center'. Upon reaching the area, follow the 'SHG Airshow' signs along the roadside for guidance. Additionally, you can utilize the free shuttle services departing from in front of the Sivrihisar Municipality Building.",
    },
    {
      q: lang === "TR" ? "Gelirken Getirmemiz Gerekenler Nelerdir?" : "WHAT DO YOU RECOMMEND BRINGING WITH YOU?",
      a: lang === "TR" ? "Gösterileri konforlu seyredebilmek için güneş gözlüğü, şapka ve güneş kreminizi yanınızda bulundurmanızı öneririz. Ayrıca, sese aşırı hasssasiyeti olabilecek seyircilerimiz veya çocuklar için gerektiğinde kulanmak üzere sesi azaltıcı ekipman getirmenizi tavsiye ederiz." : "To fully enjoy the Sivrihisar Airshows, we recommend bringing sunglasses, a hat, and sunscreen with you. We also recommend bringing noise-reducing equipment for visitors or children who may be overly sensitive to sound.",
    },
    {
      q: lang === "TR" ? "Bebek Bakım Odası var mı?" : "IS THERE A BABY CARE ROOM?",
      a: lang === "TR" ? "Bebek ziyaretçilerimizle ilgili ihtiyaçlar düşünülerek, alanda \"bebek bakım odası\" bulunmaktadır." : "Considering the needs of our little spectators and their families, a baby care room service is available for our visitors at SHG.",
    },
    {
      q: lang === "TR" ? "SHG'de Alınan Acil Durum ve Güvenlik Önlemleri Nelerdir?" : "WHAT ARE THE EMERGENCY AND SAFETY MEASURES TAKEN AT SHG?",
      a: lang === "TR" ? "Acil durumlarda müdahale etmek üzere güvenlik ve itfaiye ekipleri bulunmaktadır." : "Security and fire teams are present within the SHG area to ensure prompt and effective response in case of emergencies. ",
    },
    {
      q: lang === "TR" ? "Engelli Ziyaretçi Hizmetleri Mevcut Mu?" : "ARE DISABLED VISITOR SERVICES AVAILABLE?",
      a: lang === "TR" ? "Engelli Ziyaretçilerimiz için giriş kolaylıkları sağlanmakta ve \"engelli tuvaletleri\" bulunmaktadır." : "At SHG, we provide entry conveniences for our disabled visitors and have 'disabled restrooms' available.",
    },
    {
      q: lang === "TR" ? "Evcil hayvan kabul ediliyor Mu?" : "DO YOU ACCEPT PETS?",
      a: lang === "TR" ? "Airshow'a sevimli dostlarınızla katılabilirsiniz. Evcil hayvanlar sahibi sorumluluğunda ve tasması takılı şekilde olmalıdır." : "You can attend the Airshow with your furry friends. Pets must be under the owner's responsibility and kept on a leash.",
    },
    {
      q: lang === "TR" ? "Sağlık hizmetleri Nelerdir?" : "WHAT ARE THE HEALTH SERVICES?",
      a: lang === "TR" ? "Alan içerisinde revir, doktor ve ambulans hizmetleri mevcuttur. İhtiyaç halinde tıbbi personel tarafından destek sağlanmaktadır." : "There are infirmary, doctor, and ambulance services available on-site; professional support is provided in all emergency situations.",
    },
    {
      q: lang === "TR" ? "Kamp Alanı Mevcut Mu?" : "IS THERE A CAMP AREA?",
      a: lang === "TR" ? "Kamp yapmak isteyen seyircilerimiz için ayrılmış bir alan bulunmaktadır." : "There is a designated area around the event venue for guests who wish to camp. Portable restrooms are available in the camping area. This area is allocated for participants who want to experience the excitement of the Airshow throughout the day and combine the event's atmosphere with a camping experience.",
    },
  ];

  return (
    <div className="font-display overflow-x-hidden bg-white dark:bg-background-dark transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 text-center text-white overflow-hidden bg-secondary min-h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-secondary/40 via-secondary/20 to-secondary/90"></div>

        <div className="relative z-20 container mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter uppercase drop-shadow-2xl">
            {translations.title}
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden bg-white dark:bg-gray-900/60 transition-all duration-300 shadow-sm"
              >
                <div className="p-6 pb-3 text-left">
                  <span className="text-sm md:text-base font-black uppercase tracking-tight leading-tight text-secondary dark:text-white">
                    {faq.q}
                  </span>
                </div>

                <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                  <div className="h-px bg-gray-100 dark:bg-white/5 mb-4"></div>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="relative py-8 md:py-12 px-4 md:px-8 bg-primary text-white text-center overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
          <div className="relative z-10">
            <button
              onClick={() => onNavigate?.('tickets')}
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

export default FAQ;
