
import React from 'react';
import { Language } from '../App';

interface ActionBridgeProps {
  lang: Language;
}

const ActionBridge: React.FC<ActionBridgeProps> = ({ lang }) => {
  const content = {
    TR: {
      tagline: "DÜNYA HAVACILIĞININ",
      title: "BULUŞMA NOKTASI",
    },
    EN: {
      tagline: "POWER OF THE",
      title: "AVIATION COMMUNITY",
    }
  }[lang];

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 md:py-20 overflow-hidden my-12 group border-y border-primary/10">
      {/* Dynamic Action Background */}
      <div className="absolute inset-0 z-0 bg-secondary">
        <img 
          src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-110 opacity-40 dark:opacity-20 saturate-[0.2] group-hover:saturate-100"
          alt="Action Backdrop"
        />
        {/* Extreme Fade-out to match page background at edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-background-light dark:from-background-dark via-transparent to-background-light dark:to-background-dark"></div>
        <div className="absolute inset-0 bg-secondary/10"></div>
        
        {/* Static HUD Grid Overlay */}
        <div className="absolute inset-0 texture-bg opacity-10"></div>
      </div>

      {/* Telemetry Ticker Top */}
      <div className="absolute top-0 left-0 right-0 py-2 bg-primary/20 backdrop-blur-sm border-b border-primary/30 overflow-hidden whitespace-nowrap z-30">
        <div className="inline-block animate-marquee font-mono text-[10px] tracking-[0.5em] text-primary font-black uppercase">
         SİVRİHİSAR HAVA GÖSTERİLERİ 2026 / SHG AIRSHOW 2026 SİVRİHİSAR HAVA GÖSTERİLERİ 2026 / SHG AIRSHOW 2026SİVRİHİSAR HAVA GÖSTERİLERİ 2026 / SHG AIRSHOW 2026SİVRİHİSAR HAVA GÖSTERİLERİ 2026 / SHG AIRSHOW 2026
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left flex-shrink-0">
            <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
              <span className="w-12 h-px bg-primary shadow-[0_0_10px_rgba(220,38,38,1)]"></span>
              <p className="text-primary font-mono font-black tracking-[0.5em] text-[11px] uppercase drop-shadow-sm">
                {content.tagline}
              </p>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none italic uppercase group-hover:text-primary transition-colors duration-500">
              {content.title}
            </h2>
          </div>

          <div className="max-w-lg md:text-right">
            <p className="text-gray-700 dark:text-gray-300 font-bold italic text-base md:text-lg leading-relaxed text-center md:text-right drop-shadow-sm">
              {content.desc}
            </p>
            <div className="mt-6 flex items-center justify-center md:justify-end gap-3 text-[10px] font-black text-primary tracking-[0.4em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
               19-20 EYLÜL 2026 &nbsp;|&nbsp; 19-20 SEPTEMBER 2026
               <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,1)]"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Telemetry Ticker Bottom */}
      <div className="absolute bottom-0 left-0 right-0 py-2 bg-primary/20 backdrop-blur-sm border-t border-primary/30 overflow-hidden whitespace-nowrap z-30">
        <div className="inline-block animate-marquee-reverse font-mono text-[10px] tracking-[0.5em] text-primary font-black uppercase">
         SİVRİHİSAR HAVA GÖSTERİLERİ 2026 / SHG AIRSHOW 2026 SİVRİHİSAR HAVA GÖSTERİLERİ 2026 / SHG AIRSHOW 2026SİVRİHİSAR HAVA GÖSTERİLERİ 2026 / SHG AIRSHOW 2026SİVRİHİSAR HAVA GÖSTERİLERİ 2026 / SHG AIRSHOW 2026
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: inline-block;
          padding-left: 0;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
          display: inline-block;
          padding-left: 0;
        }
      `}</style>
    </section>
  );
};

export default ActionBridge;
