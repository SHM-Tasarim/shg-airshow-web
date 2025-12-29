import React from "react";
import { Language } from "../App";

interface HighlightsProps {
  lang: Language;
  // Navigasyon tipine "transport" eklendi
  onNavigate: (view: "home" | "program" | "participants" | "tickets" | "partners" | "about" | "shm" | "spotter" | "transport") => void;
}

const Highlights: React.FC<HighlightsProps> = ({ lang, onNavigate }) => {
  const highlights = [
    {
      title: lang === "TR" ? "SHG AIRSHOW Hakkında" : "About SHG AIRSHOW",
      id: "about", // AboutShow.tsx sayfasını tetikler
      desc:
        lang === "TR"
          ? "Sivrihisar Hava Gösterileri’nin tarihçesi ve vizyonu hakkında detaylı bilgi."
          : "Detailed information about the history and vision of Sivrihisar Airshow to date.",
      image: "/images/shg-airshows.jpg",
    },
    {
      title: lang === "TR" ? "SHM Hakkında" : "About SHM",
      id: "shm", // AboutSHM.tsx sayfasını tetikler
      desc:
        lang === "TR"
          ? "Türkiye’nin sivil hava parkı olan Sivrihisar Havacılık Merkezi’ni ve sunduğu imkanları keşfedin."
          : "Discover Sivrihisar Aviation Center, Türkiye’s private civil air park, and the facilities it offers.",
      image: "/images/shm-about.jpg",
    },
    {
      title: lang === "TR" ? "Spotter Kaydı" : "Spotter Registration",
      id: "spotter", // SpotterRegistration.tsx'i tetikler
      desc:
        lang === "TR"
          ? "En iyi kareyi yakalamak isteyen fotoğraf tutkunları için özel kayıt süreci ve alan bilgileri."
          : "Special registration process and area information for photography enthusiasts who want to capture the best shot.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: lang === "TR" ? "Ulaşım" : "Transportation",
      id: "transport", // BURASI GÜNCELLENDİ: Transport.tsx sayfasını tetikler
      desc:
        lang === "TR"
          ? "Sivrihisar Hava Gösterileri'ne nasıl ulaşılır?"
          : "How to get to Sivrihisar Airshow?",
      image: "/images/shg-ulasim.jpg",
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