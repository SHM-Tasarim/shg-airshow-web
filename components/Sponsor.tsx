import React, { useState, useEffect, useRef } from "react";
import { Language } from "../App";

interface SponsorProps {
  lang: Language;
  onNavigate: (view: any) => void;
}

const Sponsor: React.FC<SponsorProps> = ({ lang, onNavigate }) => {
  const isTR = lang === "TR";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = {
    introText: isTR
      ? "SHG Airshow firma ve kuruluşlara; \"seyircilerimizle\" doğrudan iletişim kurarak, marka bilinirliğini artırmak ve yeni işbirlikleri için önemli fırsatlar sunuyor."
      : "SHG Airshow offers companies and organizations significant opportunities to increase brand awareness and establish new collaborations by directly interacting with \"Our Audience\".",
    
    chartTitle: isTR ? "Yıllara Göre SHG Seyirci Sayısı ve Erişim" : "SHG audience by years",
    pandemicText: isTR ? "Pandemi Sebebiyle Canlı Yayın" : "LIVE STREAM",

    liveStreamLabel: isTR ? 'CANLI YAYIN ERİŞİMİ' : 'LIVE STREAM REACH',
    digitalReachLabel: isTR ? 'DİJİTAL ERİŞİM' : 'DIGITAL REACH',
    
    descriptionText: isTR
      ? "Sivrihisar Hava Gösterileri, 2015 yılından bu yana her sene artan seyirci sayısı ve erişimiyle; TV, basın ve özellikle dijital mecralar aracılığıyla \"MARKANIZI\", ulusal ve uluslararası düzeyde geniş kitlelere ulaştırıyor."
      : "Sivrihasar Airshows helps promote \"YOUR BRAND\" to wide audiences at both national and international levels through TV, press, and especially digital platforms, with an increasing number of spectators and reach every year since 2015.",

    emailFooterDesc: isTR ? "Lütfen her türlü sorularınız için mail atabilirsiniz." : "For any questions, please email us."
  };

  const chartData = [
    { year: "2015", h: 15 },
    { year: "2017", h: 25 },
    { year: "2018", h: 36 },
    { year: "2019", h: 58 },
    { year: "2020", h: 190, isPandemic: true },
    { year: "2021", h: 100, isPandemic: true },
    { year: "2022", h: 70 },
    { year: "2023", h: 72 },
    { year: "2024", h: 72 },
    { year: "2025", h: 76 }
  ];

  const barMultiplier = typeof window !== 'undefined' && window.innerWidth < 768 ? 2.8 : 4;

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32">
      
      {/* Hero Section */}
      <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden relative">
        <img 
          src="/images/sponsor-2.jpg" 
          className="w-full h-full object-cover" 
          style={{ transform: `scale(1.1) translateY(${scrollY * 0.1}px)` }} 
          alt="Sponsor" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-black/40"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
        <header className="mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter mb-8 leading-tight">
            {isTR ? (
              <>
                Sponsorluk Fırsatları<br />
                ve Tanıtım & Satış Standları<br />   
              </>
            ) : (
              <>
                Sponsorship<br />
                and Promotion & Sales Stand<br />
                Opportunities
              </>
            )}
          </h1>
          <div className="w-24 h-2 bg-primary"></div>
        </header>

        {/* 1. Intro & Stats Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl md:text-5xl font-black text-secondary dark:text-white uppercase leading-tight">
                {isTR ? (
                  <>
                    Markanızı <span className="text-primary">"Seyircilerimizle"</span>
                    <br />
                    Buluşturun!
                  </>
                ) : (
                  <>
                    CONNECT YOUR BRAND WITH <span className="text-primary">"OUR AUDIENCE"</span>
                    <br />
                    Today!
                  </>
                )}
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-200 font-bold italic border-l-8 border-primary pl-8">
                {t.introText}
              </p>
            </div>
            
            {/* Stats Sidebar */}
            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 space-y-4 self-start shadow-xl">
              <h3 className="text-lg font-black text-secondary dark:text-white uppercase tracking-widest mb-2 text-center">
                SHG AIRSHOW<br />
                {isTR ? 'REKLAM EŞDEĞERİ' : 'AD EQUIVALENT'}
              </h3>
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                <span className="material-icons text-primary text-3xl">sensors</span>
                <div>
                  <div className="text-2xl font-black text-secondary dark:text-white leading-none">8 M+</div>
                  <div className="text-sm font-bold text-white tracking-widest uppercase mt-1">{t.liveStreamLabel}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                <span className="material-icons text-primary text-3xl">trending_up</span>
                <div>
                  <div className="text-2xl font-black text-secondary dark:text-white leading-none">7 M+</div>
                  <div className="text-sm font-bold text-white tracking-widest uppercase mt-1">{t.digitalReachLabel}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Grafik Bölümü */}
        <section className="mb-12">
          <div className="bg-[#0a0f1a] rounded-2xl md:rounded-[3rem] p-4 py-8 md:p-16 shadow-2xl border border-white/5 relative overflow-hidden">
            <h2 className="text-lg md:text-4xl font-black text-white text-center mb-8 md:mb-16 tracking-tighter">
              {t.chartTitle}
            </h2>

            <div className="relative h-[280px] md:h-[400px] w-full mt-4 md:mt-10">
              
              {/* Y-Axis */}
              <div className="absolute left-0 top-0 bottom-10 w-8 md:w-16 flex flex-col justify-between text-[8px] md:text-[10px] font-black text-white/30 text-right pr-1 md:pr-4 border-r border-white/10">
                <span>8M+</span>
                <span>70K</span>
                <span>50K</span>
                <span>35K</span>
                <span>20K</span>
                <span>0</span>
              </div>

              {/* Grafik Alanı */}
              <div className="absolute left-8 md:left-16 right-0 top-0 bottom-10">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-full h-px bg-white/5"></div>
                  ))}
                </div>

                <div className="w-full h-full flex items-end justify-around px-0 md:px-4 relative">
                  {chartData.map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center justify-end group relative z-10 mx-[1px] md:mx-1 h-full">
                      <div
                        className={`w-full max-w-[20px] md:max-w-[42px] rounded-t-sm transition-all duration-500 relative flex items-center justify-center
                          ${item.isPandemic
                            ? 'bg-slate-500 shadow-[0_0_15px_rgba(100,116,139,0.4)]'
                            : 'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]'}`}
                        style={{ height: `${item.h * barMultiplier}px` }} 
                      >
                        {item.isPandemic && (
                          <span className="text-white text-[8px] md:text-xl font-black rotate-180 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
                            {t.pandemicText}
                          </span>
                        )}
                      </div>
                      <div className="absolute -bottom-7 md:-bottom-10 text-white/40 font-black text-[7px] md:text-[11px] tracking-wider group-hover:text-white transition-colors">
                        {item.year}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2.1 Grafik Altı Bilgi Metni */}
        <section className="mb-12 px-4">
          <div className="bg-gray-50 dark:bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 dark:border-white/10 shadow-inner">
            <p className="text-lg md:text-xl text-secondary dark:text-white font-medium italic leading-relaxed text-center md:text-left">
              {t.descriptionText}
            </p>
          </div>
        </section>

        {/* Coverflow Gallery - Sponsor Photos */}
        <section className="mb-32">
          <CustomCoverflow images={[
            '/images/sponsor-2.jpg',
            '/images/sponsor-4.jpg',
            '/images/sponsor-5.png',
            '/images/sponsor-6.png',
            '/images/seyirci-t.jpg',
            '/images/seyirci-1.jpg',
            '/images/sponsor-21.png',
            '/images/sponsor-8.png',
            '/images/sponsor-9.png',
            '/images/sponsor-10.png',
            '/images/sponsor-11.png',
            '/images/sponsor-12.png',
            '/images/sponsor-13.png',
            '/images/sponsor-14.png',
            '/images/sponsor-15.png',
            '/images/sponsor-16.png',
            '/images/sponsor-17.png',
            '/images/sponsor-18.png',
            '/images/sponsor-19.png',
            '/images/sponsor-20.png',
          ]} />
        </section>

        {/* 3. İletişim */}
        <div className="grid grid-cols-1 text-center lg:grid-cols-1 gap-8 mb-16">
          <div className="bg-white/5 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-white/10 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-2xl md:text-4xl font-black text-secondary dark:text-white mb-4 break-all md:break-normal">
                <a href="mailto:marketing@shm.aero" className="hover:text-primary transition-colors">marketing@shm.aero</a>
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-bold">
                {t.emailFooterDesc}
              </p>
            </div>
          </div>
        </div>

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

interface CoverflowProps {
  images: string[];
}

const CARD_WIDTH_DESKTOP = 420;
const CARD_GAP = 16;

const CustomCoverflow: React.FC<CoverflowProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [cardWidth, setCardWidth] = useState(CARD_WIDTH_DESKTOP);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateWidth = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (mobile) {
        // Mobilde ekran genişliğinden yeterli margin bırak
        setCardWidth(window.innerWidth - 80);
      } else {
        setCardWidth(CARD_WIDTH_DESKTOP);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const step = cardWidth + CARD_GAP;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxSrc(null);
    };
    if (lightboxSrc) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxSrc]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setActiveIndex((prev) => Math.min(images.length - 1, prev + 1));
      } else {
        setActiveIndex((prev) => Math.max(0, prev - 1));
      }
    }
    touchStartX.current = null;
  };

  const handleCardClick = (index: number, src: string) => {
    if (index === activeIndex) {
      setLightboxSrc(src);
    } else {
      setActiveIndex(index);
    }
  };

  const offset = -(activeIndex * step);

  return (
    <>
      <div
        className="relative w-full mx-auto overflow-hidden"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >

        {/* Sol ok */}
        <div className={`absolute left-0 top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none ${isMobile ? 'w-10' : 'w-24'}`}>
          <button
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeIndex === 0}
            className={`pointer-events-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110 ${isMobile ? 'w-8 h-8' : 'w-12 h-12'}`}
          >
            <span className={`material-icons text-secondary dark:text-white ${isMobile ? 'text-lg' : 'text-2xl'}`}>chevron_left</span>
          </button>
        </div>

        {/* Sağ ok */}
        <div className={`absolute right-0 top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none ${isMobile ? 'w-10' : 'w-24'}`}>
          <button
            onClick={() => setActiveIndex((prev) => Math.min(images.length - 1, prev + 1))}
            disabled={activeIndex === images.length - 1}
            className={`pointer-events-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110 ${isMobile ? 'w-8 h-8' : 'w-12 h-12'}`}
          >
            <span className={`material-icons text-secondary dark:text-white ${isMobile ? 'text-lg' : 'text-2xl'}`}>chevron_right</span>
          </button>
        </div>

        {/* Coverflow Track */}
        <div className="py-8">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              gap: `${CARD_GAP}px`,
              transform: `translateX(calc(50% - ${cardWidth / 2}px + ${offset}px))`,
            }}
          >
            {images.map((src, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index, src)}
                  className="cursor-pointer transition-transform duration-500 flex-shrink-0 hover:scale-[1.03]"
                  style={{
                    width: `${cardWidth}px`,
                    transform: isActive ? 'scale(1)' : 'scale(0.85)',
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  <div className="w-full h-[200px] sm:h-[260px] rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={src}
                      alt={`Sponsor ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sayaç */}
        <div className="flex items-center justify-center gap-4 mt-2">
          <span className="text-sm font-black text-gray-500 dark:text-gray-400 tabular-nums">
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            onClick={() => setLightboxSrc(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
          >
            <span className="material-icons text-white text-3xl">close</span>
          </button>
          <img
            src={lightboxSrc}
            alt="Enlarged"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Sponsor;