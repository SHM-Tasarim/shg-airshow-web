import React from 'react';
import { Language } from '../App';

interface GalleryPageProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const GalleryPage: React.FC<GalleryPageProps> = ({ lang, onNavigate }) => {
  const galleryItems = [
    { src: "/images/shg-solo-turk-2025.jpg", year: "2025" },
    { src: "/images/shg-vecihi-14-2025.jpg", year: "2025" },
    { src: "/images/shg-semin-ozturk-sener-2025.jpg", year: "2025" },
    { src: "/images/shg-tsk-parasut-2025.jpg", year: "2025" },
    { src: "/images/shg-pars-dede-airshow-2025.jpg", year: "2025" },
    { src: "/images/shg-pars-dede-airshow-2-2025.jpg", year: "2025" },
    { src: "/images/shg-vecihi-14-2-2025.jpg", year: "2025" },
    { src: "/images/shg-tsk-casa-2025.jpg", year: "2025" },
    { src: "/images/shg-pars-dede-airshow-3-2025.jpg", year: "2025" },
    { src: "/images/shg-yeni-menekse-2025.jpg", year: "2025" },
    { src: "/images/shg-spitfire-2024.jpg", year: "2024" },
    { src: "/images/shg-boeing-2024.jpg", year: "2024" },
    { src: "/images/shg-uh1h-2024.jpg", year: "2024" },
    { src: "/images/shg-spitfire-mustang-2024.jpg", year: "2024" },
    { src: "/images/shg-pars-dede-airshow-2024.jpg", year: "2024" },
    { src: "/images/shg-turk-yildizlari-2023.jpg", year: "2023" },
    { src: "/images/shg-deli-anlilar-2023.jpg", year: "2023" },
    { src: "/images/shg-tsk-parasut-2023.jpg", year: "2023" },
    { src: "/images/shg-turk-yildizlari-2-2023.jpg", year: "2023" },
    { src: "/images/shg-yeni-menekse-2023.jpg", year: "2023" },
    { src: "/images/shg-turk-yildizlari-3-2023.jpg", year: "2023" },
    { src: "/images/shg-turk-yildizlari-4-2023.jpg", year: "2023" },
    { src: "/images/shg-romanya-2023.jpg", year: "2023" },
    { src: "/images/shg-tiger-moth-2023.jpg", year: "2023" },
    { src: "/images/shg-yeni-menekse-2-2023.jpg", year: "2023" },
  ];

  const translations = {
    title: lang === "TR" ? "GALERİ" : "GALLERY",
  };

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32">
      {/* Üst Boşluk - Çizgisiz */}
      <div className="w-full h-[10vh] relative">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none texture-bg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SADECE GALERİ BAŞLIĞI */}
        <header className="text-center mb-24 relative px-4">
          <h1 className="text-2xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8 uppercase">
            {translations.title}
          </h1>
        </header>

        {/* Fotoğraf Izgarası */}
        <section className="mb-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">
                  
                  <img 
                    src={item.src} 
                    alt={`SHG Airshow ${item.year}`} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-100"
                  />
                  
                  {/* Vizör Efekti */}
                  <div className="absolute inset-0 p-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary"></div>
                    <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 border border-primary/30 rounded-full flex items-center justify-center">
                         <div className="w-1 h-1 bg-primary rounded-full"></div>
                      </div>
                    </div>

                    {/* Teknik Etiket */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-secondary/80 backdrop-blur-md px-6 py-2 rounded-lg text-[11px] font-mono font-black text-white tracking-[0.2em] border border-white/10 shadow-xl">
                      SHG AIRSHOW <span className="text-primary">{item.year}</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GalleryPage;