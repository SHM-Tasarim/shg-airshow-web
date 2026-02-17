import React from "react";
import { Language } from "../App";

interface HighlightsProps {
  lang: Language;
  onNavigate: (
    view:
      | "home"
      | "program"
      | "participants"
      | "tickets"
      | "partners"
      | "about"
      | "shm"
      | "museum"
      | "transport"
      | "mach"
      | "acromach"
  ) => void;
}

const Highlights: React.FC<HighlightsProps> = ({ lang, onNavigate }) => {
  const highlights = [
    {
      title: lang === "TR" ? "M.S.Ö. HAVA VE UZAY MÜZESİ" : "M.S.Ö. AIR AND SPACE MUSEUM",
      id: "museum",
      desc: lang === "TR" ? "Türkiye'nin Uçan Havacılık Müzesi" : "Türkiye's Flying Aviation Museum",
      image: "/images/mso-gri.jpg",
    },
    {
      title: lang === "TR" ? "SİVRİHİSAR HAVA GÖSTERİLERİ" : "SHG AIRSHOW",
      id: "about",
      desc: lang === "TR" ? "SHG Airshow İlklerin Adresi" : "SHG Airshow The Address of Firsts",
      image: "/images/shg-gri.jpg",
    },
    {
      title: lang === "TR" ? "MACH AVIATION" : "Mach",
      id: "mach",
      desc: lang === "TR" ? "Türk Sivil Havacılığının Öncüsü" : "The Pioneer of Turkish Civil Aviation",
      image: "/images/mach-gri.jpg",
    },
    {
      title: lang === "TR" ? "ACROMACH" : "ACROMACH",
      id: "acromach",
      desc:
        lang === "TR"
          ? "Gökyüzü Dansçıları - Hava Akrobasi Grubu"
          : "Sky Dancers - Air Acrobatics Team",
      image: "/images/acromach-gri.jpg",
    },
    {
      title:
        lang === "TR" ? "SİVRİHİSAR HAVACILIK MERKEZİ" : "SIVRIHISAR AVIATION CENTER",
      id: "shm",
      desc:
        lang === "TR"
          ? "Gökyüzü Sevdalılarının Buluşma Noktası"
          : "The Meeting Point of Sky Lovers",
      image: "/images/shm-gri.jpg",
    },
    {
      title: lang === "TR" ? "AirParkHotel" : "AirParkHotel",
      id: "airparkhotel",
      desc:
        lang === "TR"
          ? "Üzerinden Spitfire Geçen TEK Otel"
          : "The Only Hotel Where Spitfires Fly Over",
      image: "/images/aph-gri.jpg",
    },
  ];

  return (
    <section className="py-12 container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 xl:gap-4">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onNavigate(item.id as any)}
            className="group bg-white dark:bg-gray-800/20 rounded-2xl overflow-hidden shadow-xl border border-transparent hover:border-primary/30 transition-all duration-300 cursor-pointer flex flex-col"
          >
            {/* Görsel Alanı */}
            <div className="overflow-hidden h-60 sm:h-44 xl:h-36">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Metin Alanı */}
            <div className="p-5 xl:p-4 text-center flex flex-col flex-grow">
              <h3 className="text-base xl:text-sm font-extrabold text-gray-900 dark:text-white group-hover:text-primary transition-colors leading-tight min-h-[56px] xl:min-h-[48px] flex items-center justify-center">
                {item.title}
              </h3>

              <p className="mt-3 xl:mt-2 text-gray-600 dark:text-gray-400 text-sm xl:text-xs leading-relaxed line-clamp-2 flex-grow">
                {item.desc}
              </p>

              <div className="mt-4 xl:mt-3 flex items-center justify-center text-primary font-bold text-xs tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                {lang === "TR" ? "İNCELE" : "VIEW"}
                <span className="material-icons text-sm ml-1">arrow_forward</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;