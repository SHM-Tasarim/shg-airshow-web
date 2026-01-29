import React from "react";
import { Language } from "../App";

interface GalleryProps {
  lang: Language;
  onNavigate: (view: any) => void;
}

const Gallery: React.FC<GalleryProps> = ({ lang, onNavigate }) => {
  const images = [
    {
      src: "/images/kol-ucusu-4.jpg",
      text: lang === "TR" ? "KATILIMCILAR" : "PARTICIPANTS",
      id: "participants",
    },
    {
      src: "/images/sponsor-3.jpg",
      text: lang === "TR" ? "SPONSORLUK" : "SPONSORSHIP",
      id: "sponsor",
    },
    {
      src: "/images/seyirci-t.jpg",
      text: lang === "TR" ? "TANITIM VE SATIŞ STANDLARI" : "PROMOTION AND SALES STANDS",
      id: "stand",
    },
    {
      src: "/images/shg-ulasim.jpg",
      text: lang === "TR" ? "ULAŞIM" : "TRANSPORTATION",
      id: "transport",
    },
  ];

  return (
    <section className="py-20 container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {images.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onNavigate(item.id)}
            className="group relative overflow-hidden rounded-xl h-64 md:h-96 cursor-pointer shadow-2xl"
          >
            <img
              src={item.src}
              alt={item.text}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-secondary/40 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary/40">
              <h3 className="text-2xl font-extrabold text-white uppercase tracking-widest text-center px-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg">
                {item.text}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;