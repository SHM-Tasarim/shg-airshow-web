import React, { useState, useEffect } from 'react';
import { Language } from '../App';

interface LoadingScreenProps {
  onComplete: () => void;
  lang: Language;
  targetDate: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, lang, targetDate }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [daysRemaining, setDaysRemaining] = useState(0);

  const sponsors = [
    { name: "Acromach", logo: "/images/acromach.png" },
    { name: "M.S.Ö. Hava ve Uzay Müzesi", logo: "/images/mso-2.png" },
    { name: "Mach Air", logo: "/images/mach.png" }, 
    { name: "Sivrihisar Havacılık Kulübü Derneği", logo: "/images/sivhav.png" },
    { name: "AirParkHotel", logo: "/images/airpark.png" }, 
    { name: "Dükkan", logo: "/images/dukkan.png" },
    { name: "Lokanta Senan", logo: "/images/ls-2.png" }, 
    { name: "Agense190", logo: "/images/agense190.png" },  
    { name: "CinemaPink", logo: "/images/cp-2.png" },  
    { name: "Keskinler", logo: "/images/kes-2.png" },  
    { name: "Ofis Tekin", logo: "/images/ofis-tekin.png" },    
  ];

  useEffect(() => {
    const calculateDays = () => {
      const diff = +new Date(targetDate) - +new Date();
      return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
    };
    setDaysRemaining(calculateDays());

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsVisible(false);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 35);

    return () => clearInterval(timer);
  }, [onComplete, targetDate]);

  const label = lang === 'TR' ? 'GÜN KALDI' : 'DAYS TO GO';
  const sponsorTitle = lang === 'TR' ? 'SPONSORLARIMIZ' : 'OUR SPONSORS';
  // const alphabeticalText = lang === 'TR' ? 'Alfabetik Sırayla' : 'In Alphabetical Order';

  if (!isVisible && progress === 100) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-secondary flex flex-col items-center justify-between py-8 md:py-12 transition-opacity duration-300 ease-in-out ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>

      <div className="relative w-full max-w-sm px-10 flex flex-col items-center flex-shrink-0">

        {/* Big Days Counter */}
        <div className="flex flex-col items-center mb-6 md:mb-10 animate-in zoom-in duration-1000">
          <div className="text-[80px] md:text-[140px] font-black text-white leading-none tracking-normal drop-shadow-[0_10px_30px_rgba(220,38,38,0.3)]">
            {daysRemaining}
          </div>
          <div className="text-primary font-black tracking-[0.4em] text-xs md:text-sm uppercase mt-2 italic">
            {label}
          </div>
        </div>

        {/* Minimalist Flight Line (Progress) */}
        <div className="relative h-1 w-full bg-white/5 rounded-full overflow-hidden mb-4 md:mb-8">
          <div
            className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_20px_rgba(220,38,38,0.8)] transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Branding */}
        <div className="text-center mb-6 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary tracking-tight uppercase whitespace-nowrap">
            SHG AIRSHOW 2026
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight uppercase mt-2 whitespace-nowrap">
            Sivrihisar Hava Gösterileri
          </p>
        </div>

      </div>

      {/* Sponsor Logos Section */}
      <div className="w-full px-6 overflow-hidden flex-shrink-0 mb-12">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-4 mb-6 md:mb-8 opacity-100">
            <span className="w-12 h-px bg-primary/30"></span>
            <p className="text-[10px] font-black text-primary tracking-[0.8em] uppercase flex flex-col md:flex-row items-center gap-2">
              {sponsorTitle}
              {/* <span className="text-white/20 font-mono text-[8px] tracking-widest">[alphabeticalText]</span> */}
            </p>
            <span className="w-12 h-px bg-primary/30"></span>
          </div>

          {/* Logo Konteynırları */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
            {sponsors.map((sponsor, idx) => (
              <div
                key={idx}
                className="h-10 md:h-20 flex items-center justify-center opacity-0 animate-logo-reveal"
                style={{
                  animationDelay: `${700 + (idx * 150)}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-full w-auto object-contain transition-all hover:scale-110 duration-500 opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Arka Plan Detayları */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 pointer-events-none"></div>
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 pointer-events-none"></div>

      <style>{`
        @keyframes logo-reveal {
          0% { 
            opacity: 0; 
            transform: translateY(20px) scale(0.8);
            filter: blur(10px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        .animate-logo-reveal {
          animation: logo-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;