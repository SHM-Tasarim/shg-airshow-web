import React from "react";
import { Language } from "../App";

interface HighlightsProps {
  lang: Language;
  onNavigate: (view: "home" | "program" | "participants" | "tickets" | "partners" | "about" | "shm" | "museum" | "transport") => void;
}

const Highlights: React.FC<HighlightsProps> = ({ lang, onNavigate }) => {
  const highlights = [
    {
      title: lang === "TR" ? "Sivrihisar Hava Gösterileri" : "SHG AIRSHOW",
      id: "about", 
      desc:
        lang === "TR"
          ? "SHG Airshow İlklerin Adresi"
          : "SHG Airshow The Address of Firsts",
      image: "/images/shg-airshows.jpg",
    },
    {
      title: lang === "TR" ? "Sivrihisar Havacılık Merkezi" : "Sivrihisar Aviation Center",
      id: "shm",
      desc:
        lang === "TR"
          ? "Gökyüzü Sevdalılarının Adresi "
          : "The Address of Sky Lovers",
      image: "/images/shm-about.jpg",
    },
    {
      title: lang === "TR" ? "M.S.Ö. Hava ve Uzay Müzesi" : "M.S.Ö. Air and Space Museum",
      id: "museum",
      desc:
        lang === "TR"
          ? "Türkiye'nin Uçan Havacılık Müzesi"
          : "Turkiye's Flying Aviation Museum",
      image: "/images/mso.jpg",
    },
    {
      title: lang === "TR" ? "Acromach" : "Acromach",
      id: "acromach",
      desc:
        lang === "TR"
          ? "Gökyüzü Dansçıları - Hava Akrobasi Grubu"
          : "Sky Dancers - Air Acrobatics Team",
      image: "/images/acromach.jpg",
    },
  ];

  return (
    <section className="py-20 container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onNavigate(item.id as any)}
            className="group bg-white dark:bg-gray-800/20 rounded-xl overflow-hidden shadow-xl border border-transparent hover:border-primary/30 transition-all duration-300 cursor-pointer"
          >
            <div className="overflow-hidden h-48">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-gray-900 dark:text-white group-hover:text-primary transition-colors uppercase leading-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
              
              <div className="mt-4 flex items-center text-primary font-bold text-[10px] tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                {lang === "TR" ? "İNCELE" : "VIEW DETAILS"}
                <span className="material-icons text-sm ml-2">arrow_forward</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;