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
    subtitle:
      lang === "TR"
        ? "Gökyüzünün sınırlarını zorlayan gösterilerde yerinizi ayırtın. Unutulmaz bir deneyim için biletinizi hemen alın!"
        : "Secure your spot at the breathtaking aerial displays that push the limits of the sky. Get your ticket now for an unforgettable experience!",
    faqTitle:
      lang === "TR" ? "Sıkça Sorulan Sorular" : "Frequently Asked Questions",
    addToCart: lang === "TR" ? "Biletini Al" : "Add to Cart",
  };

  // const pricing = [
  //   {
  //     title: lang === "TR" ? "Günlük Bilet" : "Ticket",
  //     features:
  //       lang === "TR"
  //         ? [
  //             "Gösteri alanına tam gün erişim",
  //             "Stant alanlarını ziyaret etme fırsatı",
  //             "Yiyecek ve içecek alanlarından faydalanma imkanı",
  //           ]
  //         : [
  //             "Full day access to the show area",
  //             "Opportunity to visit static displays",
  //             "Food and beverage stands access",
  //           ],
  //   },
  // {
  //   title: lang === "TR" ? "VIP Bilet" : "VIP Ticket",
  //   features:
  //     lang === "TR"
  //       ? [
  //           "Özel Giriş",
  //           "Güneşlikli veranda alanında ve/veya klimalı salonda VIP oturma alanı",
  //           "Salonda bulunan VIP tuvaletlerine erişim imkanı",
  //           "VIP salonuna ait özel mutfaktan sunulan Türk mutfağı seçkisi",
  //           "Gün boyu sunulan ücretsiz yiyecek ve içecekler ikramı",
  //           "VIP otopark",
  //         ]
  //       : [
  //           "Private Entrance",
  //           "VIP seating area in shaded veranda and/or air-conditioned lounge",
  //           "Access to VIP restrooms located in the lounge",
  //           "Selection of Turkish cuisine served from the lounge's private kitchen",
  //           "Complimentary food and beverages served throughout the day",
  //           "VIP parking",
  //         ],
  // },
  // ];

  const faqs = [
    {
      q: lang === "TR" ? "Nasıl Bilet Satın Alabilirim?" : "HOW TO BUY TICKETS?",
      a: lang === "TR" ? "SHG Airshow'a giriş işlemlerinizin hızlıca tamamlanabilmesi için biletlerinizi organizasyon öncesinde indirmenizi tavsiye ederiz. Biletlerinize e-posta, SMS veya Biletinial mobil uygulaması üzerinden ulaşabilirsiniz. Ayrıca, organizasyon günlerinde alanda bulunan SHG gişelerimizden de bilet satın alabilirsiniz." : "To ensure a smooth entry process to the SHG Airshow, we recommend downloading your tickets prior to the event. You can access your tickets via email, SMS, or the Biletinial mobile app. Additionally, you can purchase tickets at our SHG ticket booths located on-site during the event days.",
    },
    {
      q: lang === "TR" ? "Çocuklar için yaş sınırı var mı?" : "IS THERE AN AGE LIMIT FOR CHILDREN?",
      a: lang === "TR" ? "Organizasyonumuz tüm yaş grupları için uygundur; 6 yaş ve altı çocuklar ücretsizdir." : "Our event is suitable for all age groups; children aged 6 and under are free of charge.",
    },
    {
      q: lang === "TR" ? "Otopark mevcut mu?" : "IS PARKING AVAILABLE?",
      a: lang === "TR" ? "Etkinlik alanında ücretsiz otopark alanları mevcuttur. Ayrıca, VIP bilet alan seyircilerimiz için özel otopark alanı ayrılmıştır." : "There are free parking areas available at the event venue. Additionally, a dedicated parking area is reserved for our VIP ticket holders.",
    },
    {
      q: lang === "TR" ? "Nasıl Ulaşım Sağlayabilirim?" : "HOW CAN I GET THERE?",
      a: lang === "TR" ? "Gösteri alanına ulaşım için navigasyon uygulamalarında lütfen \"Sivrihisar Havacılık Merkezi\" konumunu hedefleyin. Bölgeye ulaştığınızda yol kenarındaki \"SHG Airshow\" tabelaları size rehberlik edecektir. Ayrıca, Sivrihisar Belediye Binası önünden hareket eden ücretsiz ring seferlerini kullanarak ulaşım sağlayabilirsiniz." : "For directions to the show area, please set your navigation app to 'Sivrihisar Aviation Center'. Upon reaching the area, follow the 'SHG Airshow' signs along the roadside for guidance. Additionally, you can utilize the free shuttle services departing from in front of the Sivrihisar Municipality Building.",
    },
    {
      q: lang === "TR" ? "Gösteriye Nasıl Hızlı Giriş Yapabilirim?" : "HOW CAN I ENTER THE SHOW QUICKLY?",
      a: lang === "TR" ? "SHG Airshow'a giriş işlemlerinizin hızlıca tamamlanabilmesi için biletlerinizi organizasyon öncesinde indirmenizi tavsiye ederiz. Biletlerinize e-posta, SMS veya Biletinial mobil uygulaması üzerinden ulaşabilirsiniz. Ayrıca, organizasyon günlerinde alanda bulunan SHG gişelerimizden de bilet satın alabilirsiniz." : "To ensure a smooth entry process to the SHG Airshow, we recommend downloading your tickets prior to the event. You can access your tickets via email, SMS, or the Biletinial mobile app. Additionally, you can purchase tickets at our SHG ticket booths located on-site during the event days.",
    },
    // {
    //   q: lang === "TR" ? "Ücretsiz Giriş İmkanı Var Mı?" : "IS THERE A FREE ENTRY OPTION?",
    //   a: lang === "TR" ? "Gazi, engelli ve basın kartı sahipleri için girişler ücretsizdir. Türk Silahlı Kuvvetleri (Hava, Deniz ve Kara Kuvvetleri), Jandarma Genel Komutanlığı ve Emniyet Genel Müdürlüğü Teşkilatı personeli, kimlik ibraz etmek kaydıyla şahsen ücretsiz giriş yapabilirler. Beraberindeki aile fertleri ise ücrete tabidir." : "Entry is free for veterans, disabled individuals, and press card holders. Personnel from the Turkish Armed Forces (Air, Naval, and Land Forces), Gendarmerie General Command, and Police Department can enter free of charge upon presenting identification. However, their accompanying family members are subject to ticket fees.",
    // },
    {
      q: lang === "TR" ? "Yanımıza Ne Almamızı Önerirsiniz?" : "WHAT DO YOU RECOMMEND BRINGING WITH YOU?",
      a: lang === "TR" ? "Sivrihisar Hava Gösterileri'ni kesintisiz seyredebilmek için güneş gözlüğü, şapka ve güneş kreminizi yanınızda bulundurmanızı öneririz." : "To fully enjoy the Sivrihisar Airshows, we recommend bringing sunglasses, a hat, and sunscreen with you.",
    },
    {
      q: lang === "TR" ? "Bebek Bakım Odası var mı?" : "IS THERE A BABY CARE ROOM?",
      a: lang === "TR" ? "Minik seyircilerimizin ve ailelerinin ihtiyaçları düşünülerek, SHG’de bebek bakım odası hizmeti ziyaretçilerimizin kullanımına sunulmaktadır." : "Considering the needs of our little spectators and their families, a baby care room service is available for our visitors at SHG.",
    },
    {
      q: lang === "TR" ? "SHG'de Alınan Acil Durum ve Güvenlik Önlemleri Nelerdir?" : "WHAT ARE THE EMERGENCY AND SAFETY MEASURES TAKEN AT SHG?",
      a: lang === "TR" ? "SHG alanında güvenlik ve itfaiye ekipleri hazır bulunmakta olup, olası acil durumlarda hızlı ve etkili müdahale sağlanmaktadır. " : "Security and fire teams are present within the SHG area to ensure prompt and effective response in case of emergencies. ",
    },
    {
      q: lang === "TR" ? "Engelli Ziyaretçi Hizmetleri Mevcut Mu?" : "DISABLED VISITOR SERVICES AVAILABLE?",
      a: lang === "TR" ? "SHG’de Engelli Ziyaretçilerimiz için giriş kolaylıkları sağlanmakta ve “engelli tuvaletleri” bulunmaktadır." : "At SHG, we provide entry conveniences for our disabled visitors and have 'disabled restrooms' available.",
    },
    {
      q: lang === "TR" ? "Evcil hayvan kabul ediliyor Mu?" : "DO YOU ACCEPT PETS?",
      a: lang === "TR" ? "Airshow’a sevimli dostlarınızla katılabilirsiniz. Evcil hayvanlar sahibi sorumluluğunda ve tasması takılı şekilde bulundurmalıdır." : "You can attend the Airshow with your furry friends. Pets must be under the owner's responsibility and kept on a leash.",
    },
    {
      q: lang === "TR" ? "Sağlık hizmetleri Nelerdir?" : "WHAT ARE THE HEALTH SERVICES?",
      a: lang === "TR" ? "Alan içerisinde revir, doktor ve ambulans hizmetleri mevcuttur; her türlü acil durumda profesyonel destek sağlanmaktadır." : "There are infirmary, doctor, and ambulance services available on-site; professional support is provided in all emergency situations.",
    },
    {
      q: lang === "TR" ? "Kamp Alanı Mevcut Mu?" : "IS THERE A CAMP AREA?",
      a: lang === "TR" ? "Organizasyon alanının çevresinde, kamp yapmak isteyen misafirlerimiz için özel olarak ayrılmış bir alan bulunmaktadır." : "There is a designated area around the event venue for guests who wish to camp. Portable restrooms are available in the camping area. This area is allocated for participants who want to experience the excitement of the Airshow throughout the day and combine the event's atmosphere with a camping experience.",
    },
  ];

  return (
    <div className="font-display overflow-x-hidden bg-white dark:bg-background-dark transition-colors duration-500">
      {/* Hero Section - AYNI KALDI */}
      <section className="relative py-24 lg:py-36 text-center text-white overflow-hidden bg-secondary min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
            <source src="/images/shg-airshow-2025-2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/90"></div>
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

      {/* Pricing Section -
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
      </section> */}

      {/* Bilet Al CTA Section */}
      <section className="py-16 lg:py-24 px-4 lg:px-8 text-center">
        <a
          href="https://www.biletinial.com/tr-tr/festival/shg-airshow-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-white font-extrabold py-4 px-10 lg:py-5 lg:px-12 rounded-xl hover:bg-red-700 hover:scale-105 transition-all duration-300 uppercase text-sm lg:text-base tracking-[0.2em] shadow-xl group"
        >
          {lang === "TR" ? "BİLET AL" : "BUY TICKETS"}
        </a>
        <p className="mt-10 max-w-3xl mx-auto text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
          {lang === "TR"
            ? "Gazi, engelli ve basın kartı sahipleri için girişler ücretsizdir. Türk Silahlı Kuvvetleri (Hava, Deniz ve Kara Kuvvetleri), Jandarma Genel Komutanlığı ve Emniyet Genel Müdürlüğü Teşkilatı Personeli, kimlik ibraz etmek kaydıyla şahsen ücretsiz giriş yapabilirler. Beraberindeki aile fertleri ise ücrete tabidir."
            : "Entry is free for veterans, disabled individuals, and press card holders. Personnel from the Turkish Armed Forces (Air, Naval, and Land Forces), Gendarmerie General Command, and Police Department can enter free of charge upon presenting identification. However, their accompanying family members are subject to ticket fees."}
        </p>
      </section>

      {/* FAQ Section - */}
      <section id="faq" className="bg-gray-50 dark:bg-gray-900/40 py-16 lg:py-24 px-4 mb-16 rounded-[2rem] lg:rounded-[3rem] mx-4 border border-gray-100 dark:border-white/5">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 text-gray-900 dark:text-white tracking-tight uppercase">
              {translations.faqTitle}
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
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
    </div>
  );
};

export default Tickets;