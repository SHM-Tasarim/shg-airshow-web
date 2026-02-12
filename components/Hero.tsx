import React, { useRef, useEffect, useState } from "react";
import { Language } from "../App";
import Countdown from "./Countdown";

interface HeroProps {
  onNavigate: (
    view:
      | "home"
      | "program"
      | "participants"
      | "tickets"
      | "partners"
      | "about"
      | "shm"
      | "spotter"
      | "transport"
      | "museum"
      | "acromach"
  ) => void;
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ onNavigate, lang }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.play().catch(() => {
        setVideoFailed(true);
      });
    };

    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('error', () => setVideoFailed(true));

    const timeout = setTimeout(() => {
      if (video.paused) {
        tryPlay();
      }
    }, 1000);

    return () => {
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('error', () => setVideoFailed(true));
      clearTimeout(timeout);
    };
  }, []);

  const translations = {
    supertitle: "SHG AIRSHOW 2026",
    title:
      lang === "TR"
        ? "Sivrihisar Hava Gösterileri"
        : "SIVRIHISAR AIRSHOW",
    badgeDate: lang === "TR" ? "19-20 Eylül 2026" : "19-20 Sept 2026",
    badgeLocation: lang === "TR" ? "Sivrihisar Havacılık Merkezi" : "SIVRIHISAR AVIATION CENTER",
    buyTicket: lang === "TR" ? "BİLET AL" : "BUY TICKET",
    program: lang === "TR" ? "GÖSTERİ PROGRAMI" : "SHOW PROGRAM",
  };

  return (
    <section className="relative mt-0 min-h-[70vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center text-white overflow-hidden group shadow-2xl bg-secondary">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-secondary">

        {/* Fallback poster */}
        <img
          src="/images/sponsor-2.jpg"
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoFailed ? 'opacity-100' : 'opacity-0'}`}
        />

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/sponsor-2.jpg"
          className={`absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover scale-105 transition-opacity duration-700 ${videoFailed ? 'opacity-0' : 'opacity-100'}`}
        >
          <source src="/images/home-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-secondary/65 group-hover:bg-secondary/55 transition-colors duration-1000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/40 via-transparent to-secondary/90"></div>
      </div>

      <div className="relative z-10 px-6 max-w-5xl mx-auto w-full flex flex-col items-center">
        <div className="text-[#DC2627] text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 md:mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] uppercase">
          {translations.supertitle}
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] uppercase whitespace-nowrap">
          {translations.title}
        </h1>

        <div className="mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <span className="inline-flex flex-col md:flex-row items-center justify-center gap-0 md:gap-2 py-2 px-6 md:px-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] md:text-base font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] shadow-xl drop-shadow-md whitespace-nowrap">
            <span>{translations.badgeDate}</span>
            <span className="hidden md:inline">/</span>
            <span>{translations.badgeLocation}</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000">
          <button
            onClick={() => onNavigate("tickets")}
            className="bg-white text-secondary font-extrabold py-5 px-14 rounded-xl hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] uppercase text-lg md:text-xl tracking-widest flex items-center justify-center gap-3 group/btn"
          >
            <span className="material-icons text-xl md:text-2xl group-hover/btn:rotate-12 transition-transform">
              local_activity
            </span>
            {translations.buyTicket}
          </button>

          {/* GÖSTERİ PROGRAMI BUTONU */}
          {/*  <button
            onClick={() => onNavigate("program")}
            className="bg-primary text-white font-extrabold py-4 px-12 rounded-md hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-2xl uppercase text-sm tracking-widest border border-primary/20 flex items-center justify-center gap-2 group/btn"
          >
            <span className="material-icons text-lg group-hover/btn:translate-x-1 transition-transform">
              flight_takeoff
            </span>
            {translations.program}
          </button> */}
        </div>

        {/* Geri Sayım Sayacı */}
        <div className="mt-8 w-full max-w-4xl animate-in fade-in slide-in-from-bottom-20 duration-1000">
          <Countdown targetDate="2026-09-19T10:00:00" lang={lang} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary via-secondary/60 to-transparent lg:z-10 opacity-90"></div>
    </section>
  );
};

export default Hero;