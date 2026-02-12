
import React, { useEffect, useState } from 'react';
import { Language } from '../App';

interface ActionBridgeProps {
  lang: Language;
}

const ActionBridge: React.FC<ActionBridgeProps> = ({ lang }) => {
  const isTR = lang === 'TR';
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const planeOffset = (scrollY - 1500) * 0.1;

  return (
    <section className="relative w-full py-16 md:py-24 bg-white dark:bg-background-dark overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Text Content Area */}
          <div className="w-full md:w-1/2 z-20 space-y-6">

            {/* Giant Typographic Headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-secondary dark:text-white leading-[2.5] tracking-loose uppercase">
              {isTR ? (
                <>GLOBAL HAVA GÖSTERİLERİ<br /><span className="text-gray-200 dark:text-white/10"></span></>
              ) : (
                <>GLOBAL AIRSHOWS<br /><span className="text-gray-200 dark:text-white/10"></span></>
              )}
            </h2>

            {/* Narrative with Highlight */}
            <div className="max-w-xl">
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 font-normal leading-relaxed">
                {isTR ? (
                  <>
                    Avrupa Hava Gösterileri Konseyi (EAC) tarafından Avrupa'da hava gösterileri listesine alınarak global bir marka tescili kazanan SHG Airshow; II. Dünya Savaşı'nın efsanevi uçaklarından en modern hava taşıtlarına, nefes kesen akrobasi gösterilerinden kol uçuşlarına uzanan eşsiz bir görsel şölenle ziyaretçilerine unutulmaz anlar yaşatıyor!
                  </>
                ) : (
                  <>
                    SHG Airshow, registered as a global brand by being listed among European airshows by the European Airshow Council (EAC), creates unforgettable moments for visitors with a unique visual spectacle ranging from the legendary aircraft of World War II to the most modern air vehicles, from breathtaking aerobatic displays to formation flights.
                  </>
                )}
              </p>
            </div>

          </div>

          {/* Image Area - The Plane (Cutout) */}
          <div className="w-full md:w-1/2 relative h-[280px] md:h-[400px] flex items-center justify-center">

            {/* The Plane with Parallax and Float Animation */}
            <div
              className="relative z-10 w-[80%] md:w-[90%] max-w-none transition-transform duration-300 ease-out"
              style={{ transform: `translateY(${planeOffset}px) rotate(-5deg)` }}
            >
              <img
                src="/images/seyirci-view-2.png"
                className="w-full h-auto drop-shadow-[0_25px_40px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_25px_40px_rgba(220,38,38,0.1)] animate-hover"
                alt="TC-S1 Aircraft"
              />

            </div>

            {/* Subtle Gradient Glow behind the plane */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 dark:bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes hover {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-hover {
          animation: hover 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ActionBridge;
