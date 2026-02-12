import React from 'react';
import { Language } from '../App';

interface GalleryPageProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ lang, onNavigate }) => {
  const galleryItems = [
    { src: "/images/vecihi-1.jpg", year: "2025" },
    { src: "/images/yeni-menekse-1.jpg", year: "2025" },
    { src: "/images/spitfire-1.jpg", year: "2025" },
    { src: "/images/husky-1.jpg", year: "2025" },
    { src: "/images/uh1h-1.jpg", year: "2025" },
    { src: "/images/pars-dede-1.jpg", year: "2025" },
    { src: "/images/tsk-1.jpg", year: "2025" },
    { src: "/images/tsk-2.jpg", year: "2025" },
    { src: "/images/semin-ozturk-sener-1.jpg", year: "2025" },
    //{ src: "/images/pars-dede-2.jpg", year: "2025" },
    { src: "/images/eurofighter-1.jpg", year: "2025" },
    { src: "/images/mig-1.jpg", year: "2025" },
    { src: "/images/soloturk-1.jpg", year: "2025" },
    { src: "/images/mustang-1.jpg", year: "2025" },
    { src: "/images/vecihi-2.jpg", year: "2025" },
    { src: "/images/cabioglu-1.jpg", year: "2024" },
    { src: "/images/sanna-1.jpg", year: "2024" },
    { src: "/images/yeni-menekse-3.jpg", year: "2024" },
    { src: "/images/tiger-moth-1.jpg", year: "2024" },
    { src: "/images/husky-2.jpg", year: "2024" },
    { src: "/images/gyrocopter-1.jpg", year: "2024" },
    { src: "/images/kol-ucusu-1.jpg", year: "2024" },
    { src: "/images/deli-anlilar-1.jpg", year: "2024" },
    { src: "/images/dc3-1.jpg", year: "2024" },
    { src: "/images/yeni-menekse-4.jpg", year: "2024" },
    { src: "/images/spitfire-mustang-1.jpg", year: "2024" },
    { src: "/images/pars-dede-3.jpg", year: "2024" },
    { src: "/images/spitfire-mustang-2.jpg", year: "2024" },
    { src: "/images/uh1h-2.jpg", year: "2024" },
    { src: "/images/boeing-1.jpg", year: "2024" },
    { src: "/images/spitfire-2.jpg", year: "2024" },
    { src: "/images/turk-yildizlari-1.jpg", year: "2023" },
    { src: "/images/tiger-moth-2.jpg", year: "2023" },
    { src: "/images/romanian-1.jpg", year: "2023" },
    { src: "/images/turk-yildizlari-2.jpg", year: "2023" },
    { src: "/images/turk-yildizlari-3.jpg", year: "2023" },
    { src: "/images/turk-yildizlari-4.jpg", year: "2023" },
    { src: "/images/yeni-menekse-5.jpg", year: "2023" },
    { src: "/images/parasut-1.jpg", year: "2023" },
    { src: "/images/jandarma-1.jpg", year: "2022" },
    { src: "/images/daniel-1.jpg", year: "2022" },
    { src: "/images/parasut-2.jpg", year: "2021" },
    { src: "/images/polis-1.jpg", year: "2021" },
    { src: "/images/polis-2.jpg", year: "2021" },
    { src: "/images/t6-1.jpg", year: "2021" },
    { src: "/images/boeing-2.jpg", year: "2021" },
    { src: "/images/turk-yildizlari-5.jpg", year: "2021" },
    { src: "/images/casa-1.jpg", year: "2021" },
    { src: "/images/t6-mustang.jpg", year: "2021" },
    { src: "/images/jandarma-2.jpg", year: "2021" },
    { src: "/images/tsk-parasut-2.jpg", year: "2021" },
    { src: "/images/t6-2.jpg", year: "2021" },
    { src: "/images/turk-yildizlari-6.jpg", year: "2021" },
    { src: "/images/boeing-3.jpg", year: "2021" },
    { src: "/images/casa-2.jpg", year: "2021" },
    //{ src: "/images/mor-menekse-1.jpg", year: "2021" },
    { src: "/images/sunucular.jpg", year: "2021" },
    { src: "/images/turk-yildizlari-7.jpg", year: "2021" },
    { src: "/images/mustang-2.jpg", year: "2021" },
    { src: "/images/mor-menekse-2.jpg", year: "2021" },
    { src: "/images/mor-menekse-3.jpg", year: "2021" },
    { src: "/images/turk-yildizlari-8.jpg", year: "2021" },
    { src: "/images/turk-yildizlari-9.jpg", year: "2021" },
    { src: "/images/turk-yildizlari-10.jpg", year: "2021" },
    { src: "/images/turk-yildizlari-11.jpg", year: "2021" },
    { src: "/images/boeing-4.jpg", year: "2021" },
    { src: "/images/mustang-3.jpg", year: "2021" },
    { src: "/images/spotters.jpg", year: "2021" },
    { src: "/images/parasut-3.jpg", year: "2021" },
    { src: "/images/ali-ismet-ozturk.jpg", year: "2021" },
    { src: "/images/ali-ismet-ozturk-2.jpg", year: "2021" },
    { src: "/images/t6-195-1.jpg", year: "2021" },
    { src: "/images/husky-3.jpg", year: "2021" },
    { src: "/images/casa-3.jpg", year: "2021" },
    { src: "/images/hurkus-1.jpg", year: "2021" },
    { src: "/images/hurkus-2.jpg", year: "2021" },
    { src: "/images/hurkus-3.jpg", year: "2021" },
    { src: "/images/t6-3.jpg", year: "2021" },
    { src: "/images/mustang-4.jpg", year: "2021" },
    //{ src: "/images/boeing-5.jpg", year: "2021" },
    { src: "/images/mor-menekse-4.jpg", year: "2021" },
    { src: "/images/turk-yildizlari-12.jpg", year: "2021" },
    { src: "/images/turk-yildizlari-13.jpg", year: "2021" },
    { src: "/images/polis-3.jpg", year: "2021" },
    { src: "/images/turk-yildizlari-14.jpg", year: "2021" },
    { src: "/images/mor-menekse-5.jpg", year: "2021" },
    { src: "/images/turk-yildizlari-15.jpg", year: "2021" },
    { src: "/images/ali-ismet-ozturk-3.jpg", year: "2021" },
    { src: "/images/jandarma-3.jpg", year: "2021" },
    //{ src: "/images/ali-ismet-ozturk-4.jpg", year: "2021" },
    //{ src: "/images/jandarma-4.jpg", year: "2021" },
    { src: "/images/mor-menekse-6.jpg", year: "2021" },
    { src: "/images/dc3-2.jpg", year: "2020" },
    { src: "/images/mor-menekse-7.jpg", year: "2020" },
    { src: "/images/mor-menekse-8.jpg", year: "2020" },
    { src: "/images/tsk-parasut-3.jpg", year: "2020" },
    { src: "/images/mustang-5.jpg", year: "2020" },
    { src: "/images/md500-1.jpg", year: "2020" },
    { src: "/images/boeing-6.jpg", year: "2020" },
    { src: "/images/ali-ismet-ozturk-5.jpg", year: "2020" },
    { src: "/images/195-1.jpg", year: "2020" },
    { src: "/images/soloturk-2.jpg", year: "2020" },
    //{ src: "/images/jandarma-5.jpg", year: "2020" },
    { src: "/images/meeting.jpg", year: "2020" },
    //{ src: "/images/vali-1.jpg", year: "2019" },
    { src: "/images/gyrocopter-2.jpg", year: "2019" },
    { src: "/images/thk-1.jpg", year: "2019" },
    { src: "/images/thk-2.jpg", year: "2019" },
    { src: "/images/rc-model-1.jpg", year: "2019" },
    { src: "/images/gonulluler-1.jpg", year: "2019" },
    { src: "/images/bisiklet-1.jpg", year: "2019" },
    { src: "/images/jandarma-6.jpg", year: "2019" },
    { src: "/images/seyirci-1.jpg", year: "2019" },
    { src: "/images/spotters-2.jpg", year: "2019" },
    { src: "/images/ali-ismet-ozturk-6.jpg", year: "2019" },
    { src: "/images/mickey-1.jpg", year: "2019" },
    { src: "/images/seyirci-3.jpg", year: "2019" },
    { src: "/images/spotters-3.jpg", year: "2019" },
    { src: "/images/planes-1.jpg", year: "2019" },
    { src: "/images/md500-2.jpg", year: "2019" },
    { src: "/images/turk-yildizlari-16.jpg", year: "2019" },
    { src: "/images/plane-1.jpg", year: "2019" },
    { src: "/images/semin-ozturk-sener-3.jpg", year: "2019" },
    { src: "/images/planes-3.jpg", year: "2019" },
    { src: "/images/turk-yildizlari-17.jpg", year: "2019" },
    { src: "/images/mustang-6.jpg", year: "2019" },
    { src: "/images/planes-4.jpg", year: "2019" },
    { src: "/images/planes-5.jpg", year: "2019" },
    { src: "/images/motors.jpg", year: "2019" },
    { src: "/images/planes-6.jpg", year: "2019" },
    { src: "/images/jandarma-7.jpg", year: "2019" },
    //{ src: "/images/md500-3.jpg", year: "2018" },
    { src: "/images/md500-7.jpg", year: "2018" },
    //{ src: "/images/ali-ismet-ozturk-7.jpg", year: "2018" },
    { src: "/images/rc-model-2.jpg", year: "2018" },
    { src: "/images/t6-mustang-2.jpg", year: "2018" },
    { src: "/images/catarina-1.jpg", year: "2018" },
    { src: "/images/mor-menekse-9.jpg", year: "2018" },
    { src: "/images/catarina-2.jpg", year: "2018" },
    //{ src: "/images/t6-4.jpg", year: "2018" },
    { src: "/images/crew-2.jpg", year: "2018" },
    { src: "/images/gyrocopter-3.jpg", year: "2018" },
    { src: "/images/semin-ozturk-sener-2.jpg", year: "2018" },
    { src: "/images/semin-ozturk-sener-4.jpg", year: "2018" },
    { src: "/images/catarina-3.jpg", year: "2018" },
    { src: "/images/t6-5.jpg", year: "2018" },
    { src: "/images/mor-menekse-10.jpg", year: "2017" },
    { src: "/images/mor-menekse-11.jpg", year: "2017" },
    { src: "/images/hurkus-4.jpg", year: "2017" },
    { src: "/images/gyrocopter-4.jpg", year: "2017" },
    { src: "/images/hurkus-5.jpg", year: "2017" },
    { src: "/images/thk-3.jpg", year: "2017" },
    { src: "/images/bisiklet-2.jpg", year: "2017" },
    { src: "/images/stand-1.jpg", year: "2017" },
    { src: "/images/crew-3.jpg", year: "2017" },
    { src: "/images/boeing-7.jpg", year: "2017" },
    { src: "/images/semin-ozturk-sener-5.jpg", year: "2017" },
    { src: "/images/planor.jpg", year: "2017" },
    { src: "/images/mor-menekse-12.jpg", year: "2017" },
    { src: "/images/plane-2.jpg", year: "2017" },
    { src: "/images/timbo.jpg", year: "2017" },
    { src: "/images/timbo-2.jpg", year: "2017" },
    { src: "/images/semin-ozturk-sener-6.jpg", year: "2017" },
    { src: "/images/kid.jpg", year: "2017" },
    { src: "/images/husky-4.jpg", year: "2015" },
    { src: "/images/md500-4.jpg", year: "2015" },
    { src: "/images/boeing-8.jpg", year: "2015" },
    { src: "/images/motors-2.jpg", year: "2015" },
    { src: "/images/mor-menekse-13.jpg", year: "2015" },
    { src: "/images/mor-menekse-14.jpg", year: "2015" },
    { src: "/images/bisiklet.jpg", year: "2015" },
    { src: "/images/ali-ismet-ozturk-8.jpg", year: "2015" },
    { src: "/images/husky-5.jpg", year: "2015" },
    { src: "/images/parasut-4.jpg", year: "2015" },
    { src: "/images/md500-5.jpg", year: "2015" },
    { src: "/images/semin-ozturk-sener-7.jpg", year: "2015" },
    { src: "/images/md500-6.jpg", year: "2015" },
    { src: "/images/car-1.jpg", year: "2015" },
  ];

  const translations = {
    title: lang === "TR" ? "GALERİ" : "GALLERY",
  };

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 pt-16 relative z-10">

        {/* SADECE GALERİ BAŞLIĞI */}
        <header className="text-center mb-32 relative px-4">
          <h1 className="text-4xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8 uppercase">
            {translations.title}
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </header>

        {/* Fotoğraf Izgarası */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">

                  <img
                    src={item.src}
                    alt={`SHG Airshow ${item.year}`}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-100"
                  />

                  {/* Teknik Etiket */}
                  <div className="absolute inset-0 p-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-secondary/80 backdrop-blur-md px-6 py-2 rounded-lg text-[11px] font-mono font-black text-white tracking-[0.2em] border border-white/10 shadow-xl whitespace-nowrap">
                      SHG AIRSHOW <span className="text-primary">{item.year}</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32 px-4 md:px-6 max-w-5xl mx-auto pb-24">
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
    </div>
  );
};

export default GalleryPage;