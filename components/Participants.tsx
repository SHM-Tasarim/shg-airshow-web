import React, { useEffect } from "react";
import { Language } from "../App";

interface ParticipantsProps {
  lang: Language;
  targetId?: string | null;
}

const Participants: React.FC<ParticipantsProps> = ({ lang, targetId }) => {
  useEffect(() => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('ring-4', 'ring-primary', 'ring-opacity-50');
          setTimeout(() => element.classList.remove('ring-4', 'ring-primary', 'ring-opacity-50'), 2000);
        }, 100);
      }
    }
  }, [targetId]);

  const translations = {
    title:
      lang === "TR" ? (
        <>
          SHG AIRSHOW 2026 <br />{" "}
          <span className="text-primary">Katılımcıları</span>
        </>
      ) : (
        <>
          SHG AIRSHOW 2026 <br />{" "}
          <span className="text-primary">Participants</span>
        </>
      ),
    subtitle: lang === "TR" ? "(alfabetik sırayla)" : "(in alphabetical order)",
    cta: {
      title: lang === "TR" ? "Tarihe Tanıklık Et" : "Witness the History",
      desc:
        lang === "TR"
          ? "Unutulmaz bir deneyim için biletinizi hemen alın!"
          : "Get your ticket now for an unforgettable experience!",
      button: lang === "TR" ? "BİLETİNİ AL" : "BUY TICKETS",
    },
  };

  const seminUrl = "https://www.seminozturk.com/";
  const msomuseumUrl = "https://msomuseum.com/";

  // ÖZELLİK 2: Tüm katılımcılara ShowProgram ile eşleşen ID'ler eklendi
  const participants = [
    {
      id: "acromach",
      name: "ACROMACH",
      desc: lang === "TR" ? "Acromach Gökyüzü Dansçıları - Hava Akrobasi Grubu SHG Airshow 2026'da!" : "Acromach Sky Dancers - Aerial Aerobatics Group at SHG Airshow 2026!",
      image: "/images/acromach.jpg",
      url: seminUrl,
    },
    {
      id: "antonov-an2",
      name: "ANTONOV AN-2",
      desc: lang === "TR" ? "Dünyanın en büyük çift kanatlı uçağı olan Annie / Annushka SHG Airshow'da!" : "Annie / Annushka, the world's largest biplane, is at SHG Airshow!",
      image: "/images/antonov-an2.jpg",
      url: "https://msomuseum.com/antonov-an-2/",
    },
    {
      id: "aviat-husky",
      name: "AVIAT HUSKY A-1B",
      desc: lang === "TR" ? "Pist dışındaki arazilere ve kısa mesafelere rahatlıkla iniş-kalkış yapabilme özelliğine sahip olan Husky." : "Ability to take off and land comfortably on off-runway terrain.",
      image: "/images/aviat-husky.jpg",
    },
    {
      id: "uh1h",
      name: "BELL UH-1H (HUEY)",
      desc: lang === "TR" ? '"Vietnam Gazisi" efsanevi helikopter Huey SHG Airshow\'da!' : 'The legendary "Vietnam Veteran" helicopter Huey is at SHG Airshow!',
      image: "/images/uh1h.jpg",
      url: "https://msomuseum.com/bell-uh-1h-huey/",
    },
    {
      id: "boeing-stearman",
      name: "BOEING STEARMAN A75N1",
      desc: lang === "TR" ? "Türkiye’nin uçar durumdaki en yaşlı çift kanatlı tayyareleri." : "Turkey's oldest airworthy biplanes.",
      image: "/images/boeing-stearman.jpg",
      url: "https://msomuseum.com/a75n1-pt-17-boeing-stearman/",
    },
    {
      id: "cessna-172",
      name: "CESSNA 172",
      desc: lang === "TR" ? "Yılların eskimeyen, dünyanın en meşhur uçağı." : "The timeless, most famous aircraft in the world.",
      image: "/images/cessna-172.jpg",
    },
    {
      id: "cessna-business",
      name: "CESSNA 195A BUSINESSLINER",
      desc: lang === "TR" ? "1950 model klasik Cessna 195 A güzelliği ile büyüleyecek." : "The 1950 classic Cessna 195 A will enchant with its beauty.",
      image: "/images/cessna-business.jpg",
      url: "https://msomuseum.com/cessna-195-a-businessliner/",
    },
    {
      id: "tiger-moth",
      name: "DE HAVILLAND DH.82 TIGER MOTH",
      desc: lang === "TR" ? "Oscar ödüllü İngiliz Hasta filminde yer alan efsane uçak." : "The legendary aircraft featured in the Oscar-winning English Patient.",
      image: "/images/tiger-moth.jpg",
      url: "https://msomuseum.com/de-havilland-dh.82-tiger-moth/",
    },
    {
      id: "dc3",
      name: "DOUGLAS DC-3 “TURKISH DELIGHT”",
      desc: lang === "TR" ? 'Dünyayı dolaşan en yaşlı uçak ünvanlı "Turkish Delight".' : 'The "Turkish Delight," titled the oldest aircraft to travel the world.',
      image: "/images/dc3.jpg",
      url: "https://msomuseum.com/douglas-dc-3-turkish-delight/",
    },
    {
      id: "women-aviators",
      name: "HAVACI KADINLAR DERNEĞİ",
      desc: lang === "TR" ? "Türk Kadını’nın havacılık kültürünü artırmayı hedefleyen dernek." : "Association aiming to increase the aviation culture of Turkish Women.",
      image: "/images/havaci-kadinlar-dernegi.jpg",
      url: "https://www.havacikadinlar.org/",
    },
    {
      id: "senan",
      name: "LOKANTA SENAN",
      desc: lang === "TR" ? "Enfes lezzetleri ve zengin menüsüyle Lokanta Senan." : "Lokanta Senan with its delicious tastes and rich menu.",
      image: "/images/lokanta-senan.jpg",
    },
    {
      id: "mach",
      name: "MACH AVIATION",
      desc: lang === "TR" ? "Sivil ve genel havacılık sektöründe öncü hizmet." : "Leading service in the civil and general aviation sector.",
      image: "/images/mach-aviation.jpg",
    },
    {
      id: "museum",
      name: "M.S.Ö. HAVA ve UZAY MÜZESİ",
      desc: lang === "TR" ? "Türkiye'nin Uçan Havacılık Müzesi." : "Turkey's Flying Aviation Museum.",
      image: "/images/mso-air-space-museum.jpg",
      url: msomuseumUrl,
    },
    {
      id: "shop",
      name: "M.S.Ö. HAVA ve UZAY MÜZESİ DÜKKAN",
      desc: lang === "TR" ? "Eşsiz havacılık temalı kıyafet ve aksesuarlar." : "Unique aviation-themed clothing and accessories.",
      image: "/images/dukkan.jpg",
    },
    {
      id: "p51-mustang",
      name: "NORTH AMERICAN MUSTANG P-51 D",
      desc: lang === "TR" ? "Türkiye'deki ilk ve tek North American P-51 Mustang: Ferocious Frankie!" : "Turkey's first and only P-51 Mustang: Ferocious Frankie!",
      image: "/images/mustang-p51d.jpg",
      url: "https://msomuseum.com/north-american-p-51d-mustang-ferocious-frankie/",
    },
    {
      id: "t6-texan", 
      name: "NORTH AMERICAN T-6G TEXAN",
      desc: lang === "TR" ? "Türkiye’nin ilk sivil T-6G Harvard uçağı: Happy Hour." : "Turkey's first civilian T-6G Harvard: Happy Hour.",
      image: "/images/t6-texan.jpg",
      url: "https://msomuseum.com/north-american-t-6g-happy-hour/",
    },
    {
      id: "t28-trojan",
      name: "NORTH AMERICAN T-28B TROJAN",
      desc: lang === "TR" ? "Savaş uçağı olarak da kullanılmış efsanevi Trojan." : "The legendary Trojan, also used as a combat aircraft.",
      image: "/images/t28b-trojan.jpg",
    },
    {
      id: "spitfire",
      name: "SUPERMARINE SPITFIRE MK.IX",
      desc: lang === "TR" ? 'Şanlı Hava Kuvvetleri’mizin "Kare Fors" amblemi ile Spitfire.' : 'Spitfire with our Glorious Air Force’s "Square Roundel".',
      image: "/images/spitfire-mk-9.jpg",
      url: "https://msomuseum.com/spitfire-mk-9/",
    },
    {
      id: "pars-sener",
      name: "Pars ŞENER",
      desc: lang === "TR" ? "Geleceğin akrobasi pilotu, SHG Airshow 2026 sürprizi!" : "Future aerobatic pilot, SHG Airshow 2026 surprise!",
      image: "/images/pars-sener.jpg",
    },
    {
      id: "semin-ozturk",
      name: "Semin ÖZTÜRK ŞENER",
      desc: lang === "TR" ? "Türkiye’nin ilk profesyonel kadın akrobasi pilotu." : "Turkey's first professional female aerobatic pilot.",
      image: "/images/semin-ozturk-sener.jpg",
      url: seminUrl,
    },
    {
      id: "pitts-s2b", 
      name: "YENİ MENEKŞE (PITTS S-2B)",
      desc: lang === "TR" ? 'Semin Öztürk Şener ile göklerdeki serüvenine devam ediyor.' : 'Continuing its adventure in the skies with Semin Öztürk Şener.',
      image: "/images/yeni-menekse.jpg",
      url: seminUrl,
    }
  ];

  return (
    <div className="py-16 font-display overflow-hidden bg-white dark:bg-background-dark">
      {/* Page Header */}
      <div className="text-center mb-20 relative px-4">
        <h1 className="text-5xl md:text-7xl font-black text-secondary dark:text-white leading-tight tracking-tighter mb-4 uppercase">
          {translations.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-bold tracking-tight text-sm md:text-base italic">
          {translations.subtitle}
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-4 grid gap-12 lg:gap-16">
        {participants.map((p, index) => (
          <div
            key={p.id}
            id={p.id} 
            className="group relative bg-white/5 dark:bg-gray-800/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 border border-black/5 dark:border-white/5 hover:border-primary/30 scroll-mt-32"
          >
            <div className={`lg:flex ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              {/* Image Side with HUD Design */}
              <div className="lg:w-1/2 xl:w-2/5 relative overflow-hidden h-72 lg:h-auto min-h-[350px]">
                <img
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-110 saturate-[0.8] group-hover:saturate-100"
                  src={p.image}
                  loading="lazy"
                />

                {/* HUD Overlay Elements */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20">
                  <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-primary/80"></div>
                  <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-primary/80"></div>
                  <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-primary/80"></div>
                  <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-primary/80"></div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Content Side */}
              <div className="flex-1 p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative z-10">
                <div className="absolute top-0 right-8 text-[120px] md:text-[180px] font-black text-gray-100 dark:text-white/[0.03] select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-700 leading-none">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                <div className="relative z-20">
                  <h3 className="text-3xl md:text-5xl font-black text-secondary dark:text-white mb-6 uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors duration-300">
                    {p.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl font-medium border-l-2 border-primary/20 pl-6 group-hover:border-primary transition-colors">
                    {p.desc}
                  </p>

                  <div className="mt-10 flex items-center">
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-xs font-black tracking-[0.2em] text-secondary dark:text-white group/btn hover:text-primary transition-colors"
                      >
                        <span className="w-10 h-0.5 bg-primary group-hover/btn:w-16 transition-all duration-300"></span>
                        {lang === "TR" ? "DETAYLI BİLGİ" : "DETAILS"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-32 px-4 max-w-5xl mx-auto">
        <div className="relative py-24 px-8 bg-primary text-white text-center overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">
              {translations.cta.title}
            </h2>
            <p className="text-white/80 font-bold tracking-widest text-xs md:text-sm mb-12 uppercase">
              {translations.cta.desc}
            </p>
            <button className="bg-white text-primary font-black py-5 px-16 rounded-lg hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl uppercase tracking-[0.2em] text-sm">
              {translations.cta.button}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Participants;