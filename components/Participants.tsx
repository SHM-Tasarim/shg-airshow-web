import React, { useEffect } from "react";
import { Language } from "../App";

interface ParticipantsProps {
  lang: Language;
  targetId?: string | null;
  onNavigate?: (view: 'tickets') => void;
}

const Participants: React.FC<ParticipantsProps> = ({ lang, targetId, onNavigate }) => {
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
    subtitle: lang === "TR" ? "(Alfabetik Sırayla)" : "(in alphabetical order)",
    cta: {
      button: lang === "TR" ? "BİLET AL" : "BUY TICKET",
    },
  };

  const participants = [
    {
      id: "acromach",
      name: "ACROMACH",
      desc: lang === "TR" ? "Acromach Gökyüzü Dansçıları - Hava Akrobasi Grubu SHG Airshow 2026'da!" : "Acromach Sky Dancers - Aerial Aerobatics Group at SHG Airshow 2026!",
      image: "/images/aio-sos.jpg",
      url: "https://www.seminozturk.com/",
    },
    {
      id: "airparkhotel",
      name: "AirParkHotel",
      desc: lang === "TR" ? "Üzerinden Spitfire geçen TEK otel, SHG Airshow 2026'da!" : "AirParkHotel, the ONLY hotel in the world with a Spitfire flying over it, is at SHG Airshow 2026!",
      image: "/images/aph-4.jpg",
      secondaryImage: "/images/aph-3.jpg",
    },
    {
      id: "antonov-an2",
      name: "ANTONOV AN-2",
      desc: lang === "TR" ? "M.S.Ö. Hava ve Uzay Müzesi envanterinde bulunan 1957 model Antonov AN-2, dünya çapında askeri ve sivil alanda uzun yıllar havacılığa hizmet etti. Dünyanın En Büyük Çift Kanatlı Uçağı olan Annie / Annushka SHG Airshow'da!" : "The 1957 model Antonov AN-2 in the M.S.Ö. Air and Space Museum inventory has been used by many military and civilian users worldwide. Annie / Annushka, the world's largest biplane, is at SHG Airshow!",
      image: "/images/antonov-an2.jpg",
      url: "https://msomuseum.com/antonov-an-2/",
    },
    {
      id: "uh1h",
      name: "BELL UH-1H (HUEY)",
      desc: lang === "TR" ? '"Vietnam Gazisi" UH-1H ön kısmında, hizmet verdiği vurucu tim ile özleşen sarı renkli büyük bir "ARI" figürü taşıyor. Dünyanın en ünlü helikopterlerinden biri olan Huey, sürpriz gösteri uçuşu ve etkileyici sesiyle izleyicilere unutulmaz anlar yaşatıyor!' : 'The "Vietnam Veteran" UH-1H carries a large yellow "BEE" figure on its front, synonymous with the strike team it served. One of the world\'s most famous helicopters, Huey is at SHG Airshow!',
      image: "/images/uh1h-3.jpg",
      url: "https://msomuseum.com/bell-uh-1h-huey/",
    },
    {
      id: "boeing-stearman",
      name: "BOEING STEARMAN A75N1",
      desc: lang === "TR" ? "Türkiye'nin uçar durumdaki En Yaşlı Çift Kanatlı Tayyareleri olan 1940 ve 1943 yapımı Boeing Stearman A75N1, seyircileri adeta zaman makinesinde bir yolculuğa çıkarıyor." : "Türkiye's oldest airworthy biplanes, the 1940 and 1943 Boeing Stearman A75N1, will take the audience on a journey in a time machine.",
      image: "/images/boeing-stearman.jpg",
      url: "https://msomuseum.com/a75n1-pt-17-boeing-stearman/",
    },
    {
      id: "cessna-business",
      name: "CESSNA 195A BUSINESSLINER",
      desc: lang === "TR" ? "M.S.Ö. Hava ve Uzay Müzesi envanterinde bulunan 1950 yapımı Cessna 195 A Businessliner, güzelliği ile SHG Airshow 2026'da herkesi büyülüyor." : "The 1950 model Cessna 195 A Businessliner from the M.S.Ö. Air and Space Museum collection will enchant you with its beauty at SHG Airshow.",
      image: "/images/cessna-business-2.jpg",
      url: "https://msomuseum.com/cessna-195-a-businessliner/",
    },
    {
      id: "tiger-moth",
      name: "DE HAVILLAND DH.82 TIGER MOTH",
      desc: lang === "TR" ? "9 dalda Oscar ödül kazanan \"The English Patient\" (İngiliz Hasta) filminde yer alan T7471 seri no'lu Tiger Moth, SHG Airshow 2026'da hayranlarıyla buluşuyor!" : "The Tiger Moth with serial number T7471, featured in the 9-time Oscar-winning film 'The English Patient', is with you at SHG Airshow!",
      image: "/images/tiger-moth-3.jpg",
      url: "https://msomuseum.com/de-havilland-dh.82-tiger-moth/",
    },
    {
      id: "dc3",
      name: lang === "TR" ? <>DOUGLAS DC-3<br />"TURKISH DELIGHT"</> : <>DOUGLAS DC-3<br />"TURKISH DELIGHT"</>,
      desc: lang === "TR"
        ? `Normandiya Çıkartması'nda hava bombardıman görevine gönderilen 1940 yapımı, "İlk ve Tek DC-3", M.S.Ö. Hava ve Uzay Müzesi envanterinde "Turkish Delight" ismiyle yer alıyor. 2017'de tam bir dünya turunu tamamlayarak "Dünyayı Dolaşan En Yaşlı Uçak" ünvanını alan "Turkish Delight" SHG Airshow 2026'da gökyüzünde!`
        : `The 1940 Model DC-3 'Turkish Delight', brought to Turkish aviation by the M.S.Ö. Air and Space Museum, successfully completed a full world tour in 2017 and received the title of 'the oldest aircraft to travel the world'. This magnificent classic aircraft is with you at SHG Airshow!`,
      image: "/images/dc3.jpg",
      url: "https://msomuseum.com/douglas-dc-3-turkish-delight/",
    },
    {
      id: "dukkan",
      name: lang === "TR" ? "DÜKKAN" : "DÜKKAN",
      desc: lang === "TR" ? "M.S.Ö. Hava ve Uzay Müzesi'nde bulunan tarihi hava araçlarından ilham alınarak hazırlanan eşsiz koleksiyonlarıyla DÜKKAN, SHG Airshow 2026'da yer alıyor!" : "The SHOP, with its unique clothing and accessories related to the historical aircraft of the M.S.Ö. Air and Space Museum, is at SHG Airshow 2026!",
      image: "/images/dukkan.jpg",
      url: "https://shop.msomuseum.com/",
    },
    {
      id: "andy-goodall",
      name: "ANDY GOODALL",
      desc: lang === "TR" ? "2019'dan beri Sivrihisar Hava Gösterileri'nde uçan Pilot ve Paraşüt Eğitmeni Andy, yine heyecan dolu uçuş gösterileriyle SHG Airshow 2026'da seyircilerinin huzurunda!" : "Pilot and skydiving instructor Andy GOODALL is at SHG Airshow 2026 with T-6G Texan \"Happy Hour\" and Tiger Moth performance!",
      image: "/images/andy.jpg",
    },
    {
      id: "women-aviators",
      name: lang === "TR" ? "HAVACI KADINLAR DERNEĞİ" : "WOMEN AVIATORS ASSOCIATION",
      desc: lang === "TR" ? "Asıl vazifesi, Türk Kadınının havacılık kültürünü artırmak olan, havacılığa merak duyan bütün kadınlara yardımcı olmayı ve kadın uçucu sayısını mümkün olduğu kadar artırmayı hedefleyen Havacı Kadınlar Derneği, SHG Airshow 2026'da!" : "The Women Aviators Association, whose noble mission is to increase the aviation culture of 'Turkish Women' and help all women interested in aviation, is at SHG Airshow 2026!",
      image: "/images/havkad-stand.jpg",
      url: "https://www.havacikadinlar.org/",
    },
    {
      id: "tom-van-hoorn",
      name: "TOM van HOORN",
      desc: lang === "TR" ? "Boeing 777 tipi uçaklarında Kaptan Pilot olan Tom, 41 yılı aşkın havayolu tecrübesi ve 16 yıllık DC-3 uçuş eğitmenliğiyle, efsanevi DC-3 \"Turkish Delight\" ile SHG Airshow 2026'da gökyüzünde!" : "Tom van Hoorn, captain pilot on the Boeing 777, with over 41 years of airline experience and 16 years of DC-3 flight instructor experience, will be in the skies at SHG Airshow 2026 with the legendary DC-3 \"Turkish Delight\"!",
      image: "/images/tom.jpg",
    },
    {
      id: "senan",
      name: lang === "TR" ? "LOKANTA SENAN" : "LOKANTA SENAN",
      desc: lang === "TR" ? "Enfes lezzetleri ve zengin menüsüyle Lokanta Senan SHG Airshow 2026'da!" : "Lokanta Senan is at SHG Airshow 2026 with its delicious flavors and rich menu!",
      image: "/images/lokanta-senan.jpg",
      url: "https://www.lokantasenan.com/",
    },
    {
      id: "mach",
      name: "MACH AVIATION",
      desc: lang === "TR" ? "1989 yılından bu yana Sivil ve Genel Havacılık sektöründe hizmet veren Mach Aviation SHG Airshow 2026'da!" : "Mach Aviation, serving the civil and general aviation sector since 1989, is at SHG Airshow 2026.",
      image: "/images/mach-aviation.jpg",
      url: "https://www.mach.aero/",
    },
    {
      id: "museum",
      name: lang === "TR" ? "M.S.Ö. HAVA ve UZAY MÜZESİ" : "M.S.Ö. AIR AND SPACE MUSEUM",
      desc: lang === "TR" ? "Türkiye'nin Uçan Havacılık Müzesi olan M.S.Ö. Hava ve Uzay Müzesi, Dünya Havacılığı açısından tarihi değere sahip hava araçları ile SHG Airshow 2026'da!" : "Türkiye's Flying Aviation Museum, M.S.Ö. Air and Space Museum, is at SHG Airshow 2026 with its many aircraft of historical value for world aviation!",
      image: "/images/mso-lobby.jpg",
      url: "https://msomuseum.com/",
    },
    {
      id: "p51-mustang",
      name: "NORTH AMERICAN MUSTANG P-51 D",
      desc: lang === "TR" ? "Ülkemize M.S.Ö. Hava ve Uzay Müzesi tarafından kazandırılan Ferocious Frankie, Türkiye'deki İlk ve Tek North American P-51D Mustang olma özelliğiyle Sivrihisar Semalarında!" : "Ferocious Frankie, brought to our country by the M.S.Ö. Air and Space Museum, is at SHG Airshow as the first and only North American P-51 Mustang in Türkiye!",
      image: "/images/mustang-p51d-3.jpg",
      url: "https://msomuseum.com/north-american-p-51d-mustang-ferocious-frankie/",
    },
    {
      id: "t6-texan",
      name: "NORTH AMERICAN T-6G TEXAN",
      desc: lang === "TR" ? "M.S.Ö. Hava ve Uzay Müzesi'nin kazandırdığı Türkiye'nin İlk Sivil T\u20116G\u00A0Harvard uçağı, SHG Airshow 2026'da görsel bir şölen sunuyor." : "The first civilian T-6G Harvard aircraft in Turkey, brought by the M.S.Ö. Air and Space Museum, offers a visual feast at SHG Airshow 2026.",
      image: "/images/t6-texan.jpg",
      url: "https://msomuseum.com/north-american-t-6g-happy-hour/",
    },
    {
      id: "t28-trojan",
      name: "NORTH AMERICAN T-28B TROJAN",
      desc: lang === "TR" ? " ABD'de hem eğitim hem de savaş uçağı olarak görev yapan Trojan, SHG Airshow 2026'da muhteşem bir performans sergiliyor." : "The Trojan, the first US trainer aircraft with 'Tricycle Landing Gear', was also used as a fighter aircraft and will fascinate the audience at SHG Airshow 2026.",
      image: "/images/t28b-trojan.jpg",
      url: "https://msomuseum.com/t-28b_trojan/",
    },
    {
      id: "lee-proudfoot",
      name: "LEE PROUDFOOT",
      desc: lang === "TR" ? "1993 yılından beri Mustang P-51D \"Ferocious Frankie\" ile uçan Muaazam Tecrübeli Pilot Lee, SHG Airshow 2026'da hayranlarıyla buluşuyor." : "Lee PROUDFOOT, who has been flying the Mustang P-51 D \"Ferocious Frankie\" since 1993, meets his fans at SHG Airshow 2026 with both the Mustang P-51 D and Türkiye's oldest biplane Boeing Stearman performance.",
      image: "/images/lee.jpg",
    },
    {
      id: "gabriel-rieser",
      name: "GABRIEL ORLANDO RIESER",
      desc: lang === "TR" ? "Sivrihisar Hava Gösterileri'nin hem en genç hem de yetenekli pilotu Gabriel; aynı zamanda uçuş eğitmenliği yapıyor. SHG Airshow 2026'da, gösteri uçuşuyla seyircileri tarihte bir yolculuğa çıkarıyor." : "Experienced pilot of historical aircraft, flight instructor Gabriel RIESER will take the audience on a journey through history with his performances.",
      image: "/images/gabriel.jpg",
    },
    {
      id: "fabian-schouten",
      name: "FABIAN SCHOUTEN",
      desc: lang === "TR" ? "Havacılık kariyerine teknisyen olarak başlayan ve son 15 yıldır aktif pilotluk yapan Fabian, hava yollarında Kaptan Pilot olarak görev alıyor. Fabian 17 yıllık DC-3 tecrübesiyle, SHG Airshow 2026'da benzersiz bir gösteri uçuşu gerçekleştiriyor!" : "Fabian Schouten, serving as a captain pilot in airlines, is an aviator with 17 years of DC-3 experience; he started this adventure as a technician and has been an active pilot for the last 15 years. At SHG Airshow 2026, in the legendary DC-3 \"Turkish Delight\" in the skies with you!",
      image: "/images/fabian.jpg",
    },
    {
      id: "spitfire",
      name: "SUPERMARINE SPITFIRE MK.IX",
      desc: lang === "TR" ? "22.777 adet üretilen ve bugün \"uçar vaziyette\" sadece 30 adet kalan Spitfire uçaklarından Mk.9 TE517, SHG Airshow 2026'da Şanlı Hava Kuvvetleri'mizin \"Kare Fors\" amblemi ile donatılmış şekilde izleyicilerle buluşuyor!" : "Out of 22,777 produced, only 30 Spitfires remain airworthy today. Mk.9 TE517 meets the audience at SHG Airshow 2026, equipped with our Glorious Air Force's 'Square Roundel' emblem!",
      image: "/images/spitfire-mk-9.jpg",
      url: "https://msomuseum.com/spitfire-mk-9/",
    },
    {
      id: "pars-sener",
      name: "PARS&DEDE AIRSHOW",
      desc: lang === "TR" ? "Pars Şener ilk hava gösterisi deneyimini 4 yaşındayken dedesi ve Türkiye'nin İlk Profesyonel Akrobasi Pilotu Ali İsmet Öztürk ile yaşadı. SHG Airshow 2026'da ise yine sürprizlerle yer alıyor!" : "Pars Şener had his first airshow experience at age 4 with his grandfather and Türkiye's first professional aerobatic pilot Ali İsmet Öztürk. Now at SHG Airshow 2026, he will be before the audience with a surprise show!",
      image: "/images/pars-dede-1.jpg",
      url: "https://www.mach.aero/",
    },
    {
      id: "semin-ozturk",
      name: "SEMİN ÖZTÜRK ŞENER",
      desc: lang === "TR" ? "İlk gösteri uçuşunu SHG Airshow 2015'te gerçekleştiren Türkiye'nin İlk Profesyonel Kadın Akrobasi ve İlk Sivil Türk Kadın Helikopter Pilotu Semin Öztürk Şener, muhteşem akrobasi gösterisi ile SHG Airshow 2026'da!" : "Türkiye's first professional female aerobatic pilot Semin Öztürk Şener will take your breath away at SHG Airshow 2026 with her magnificent performance!",
      image: "/images/semin-ozturk-sener.jpg",
      url: "https://www.seminozturk.com/",
    },
    {
      id: "sivrihisar-havacilik-kulubu-2",
      name: lang === "TR" ? <><span className="block">SİVRİHİSAR FORMASYON</span></> : <><span className="block">3-SHIP FORMATION FLIGHT</span></>,
      desc: lang === "TR" ? "Sivrihisar Havacılık Kulübü ve Havacı Kadınlar Derneği bu yıl da, heyecan verici bir kol uçuşu ile gökyüzünde!" : "The main mission of the \"Women Aviators Association\" is to increase the aviation culture of \"Turkish Women\", to help all women interested in aviation, and to increase the number of female pilots as much as possible. Together with the \"Sivrihisar Aviation Club\", they will meet the audience for the second time this year with an exciting formation flight.",
      image: "/images/kol-ucusu-5.jpg",
      url: "https://shm.aero/",
    },
    {
      id: "sivrihisar-havacilik-kulubu",
      name: lang === "TR" ? "SİVRİHİSAR HAVACILIK KULÜBÜ DERNEĞİ" : "SIVRIHISAR AVIATION CLUB ASSOCIATION",
      desc: lang === "TR" ? "2013 yılında kurulan Sivrihisar Havacılık Kulübü Derneği, amatör ve profesyonel havacılara yönelik düzenlediği etkinlik ve organizasyonlar, eğitim programları ve akrobasi uçuşlarıyla her yaştan havacılık tutkunlarına ilham vererek Türkiye'de Havacılık Kültürü'nün gelişimine önemli katkılar sağlıyor." : "Founded in 2013, Sivrihisar Aviation Club Association inspires aviation enthusiasts of all ages through events, training programs, and aerobatic flights, making significant contributions to the development of aviation culture in Türkiye.",
      image: "/images/sivrihisar-havacilik-kulubu.jpg",
      url: "https://shm.aero/",
    },
    {
      id: "vecihi-xiv",
      name: lang === "TR" ? "VECİHİ XIV (14)" : "VECIHI XIV (14)",
      desc: lang === "TR" ? "Büyük Türk Havacısı Vecihi Hürkuş tarafından inşa edilen ve uçurulan Vecihi XIV (14) tipi uçağın,  M.S.Ö. Hava ve Uzay Müzesi ile Sivrihisar Havacılık Kulübü'nün ortak çalışması olarak, uçar durumda bir replikasının imalat projesi 2025 yılında başarıyla tamamlandı. Tam 95 yıl sonra yeniden gökyüzüyle buluşan Vecihi XIV (14) Replikası, Sivrihisar Hava Gösterileri 2026'da!" : "The replica of Türkiye's 'First Certified Aircraft' Vecihi XIV (14) is at SHG Airshow 2026 through the work of M.S.Ö. Air and Space Museum and Sivrihisar Aviation Club!",
      image: "/images/vecihi-14-2.jpg",
      url: "https://msomuseum.com/vecihi-XIV-14/",
    },
    {
      id: "edward-yard",
      name: "EDWARD YARD",
      desc: lang === "TR" ? "Standart Kategori Akrobasi Şampiyonu ve Boeing 777 tipi uçaklarında Pilot olan Edward, İngiltere'den S.H.M.'ye getirdiği Spitfire Mk.9 ile, bu sene de SHG Airshow 2026 seyircilerine unutulmaz bir gösteri uçuşu gerçekleştiriyor." : "Standard category aerobatics champion and B777 pilot Edward Yard will once again mesmerize the SHG Airshow audience with his Spitfire Mk.9, coming from England to SHM.",
      image: "/images/edward.jpg",
    },
    {
      id: "pitts-s2s",
      name: lang === "TR" ? <>YENİ MENEKŞE <br /> ACROMACH S2S</> : <>NEW VIOLET <br /> ACROMACH S2S</>,
      desc: lang === "TR" ? "\"Efsanevi Mor Menekşe\" Mak Teknik'in özverili çalışmalarından sonra \"Yeni Menekşe\" adını aldı ve Semin Öztürk Şener ile göklerde yeni serüvenlerine devam ediyor." : "The 'Legendary Purple Violet' took the name 'New Violet' after the dedicated work of Mak Teknik and continues its new adventures in the skies with Semin Öztürk Şener.",
      image: "/images/yeni-menekse.jpg",
      url: "https://www.seminozturk.com/",
    },

  ];

  return (
    <div className="py-16 font-display overflow-hidden bg-white dark:bg-background-dark">
      {/* Page Header */}
      <div className="text-center mb-20 relative px-4">
        <h1 className="text-5xl md:text-7xl font-black text-secondary dark:text-white leading-tight tracking-tighter mb-4 uppercase">
          {translations.title}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 font-bold tracking-tight text-base md:text-lg italic">
          {translations.subtitle}
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-4 grid gap-12 lg:gap-16">
        {participants.map((p, index) => {
          const isAirPark = p.id === "airparkhotel";

          return (
            <div
              key={p.id}
              id={p.id}
              className="group relative bg-white/5 dark:bg-gray-800/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 border border-black/5 dark:border-white/5 hover:border-primary/30 scroll-mt-32"
            >
              <div className={`flex flex-col ${isAirPark ? "lg:flex-row items-stretch" : (index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row")}`}>

                {/* --- IMAGE 1 (Standard left or AirPark left) --- */}
                <div className={`${isAirPark ? "lg:w-1/4" : "lg:w-1/2 xl:w-2/5"} w-full relative overflow-hidden lg:aspect-[16/10] lg:min-h-[300px]`}>
                  <img
                    alt={typeof p.name === 'string' ? p.name : 'participant'}
                    className="w-full h-auto object-contain lg:absolute lg:inset-0 lg:h-full lg:object-cover transition-all duration-1000 lg:scale-105 lg:group-hover:scale-110 saturate-[0.8] group-hover:saturate-100"
                    src={p.image}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                </div>

                {/* --- CONTENT (Center for AirPark, Standard for others) --- */}
                <div className={`flex-1 p-8 lg:p-12 xl:p-16 flex flex-col justify-center relative z-10 ${isAirPark ? "text-center items-center" : ""}`}>
                  {/* Number HUD */}
                  <div className={`absolute top-0 ${isAirPark ? "left-1/2 -translate-x-1/2" : "right-8"} text-[120px] md:text-[180px] font-black text-gray-100 dark:text-white/[0.03] select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-700 leading-none`}>
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  <div className="relative z-20">
                    <h3 className="text-3xl md:text-5xl font-black text-secondary dark:text-white mb-6 tracking-tighter leading-tight group-hover:text-primary transition-colors duration-300">
                      {p.name}
                    </h3>

                    <p className={`text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl font-medium ${isAirPark ? "mx-auto" : "border-l-2 border-primary/20 pl-6 group-hover:border-primary"} transition-colors`}>
                      {p.desc}
                    </p>

                    <div className={`mt-10 flex items-center ${isAirPark ? "justify-center" : ""}`}>
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

                {/* --- IMAGE 2 (Only for AirParkHotel - Right Side) --- */}
                {isAirPark && (
                  <div className="lg:w-1/4 w-full relative overflow-hidden lg:aspect-[16/10] lg:min-h-[300px]">
                    <img
                      alt={`${typeof p.name === 'string' ? p.name : 'participant'} 2`}
                      className="w-full h-auto object-contain lg:absolute lg:inset-0 lg:h-full lg:object-cover transition-all duration-1000 lg:scale-105 lg:group-hover:scale-110 saturate-[0.8] group-hover:saturate-100"
                      src={p.secondaryImage || p.image}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="mt-32 px-4 md:px-6 max-w-5xl mx-auto pb-24">
        <div className="relative py-8 md:py-12 px-4 md:px-8 bg-primary text-white text-center overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
          <div className="relative z-10">
            <button
              onClick={() => onNavigate?.('tickets')}
              className="bg-white text-primary font-black py-4 md:py-6 px-8 md:px-20 rounded-lg md:rounded-xl hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl uppercase tracking-[0.1em] md:tracking-[0.2em] text-base md:text-lg cursor-pointer w-full md:w-auto"
            >
              {translations.cta.button}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Participants;