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
      className: "md:col-span-1", 
    },
    {
      src: "/images/sponsor-3.jpg",
      text: lang === "TR" ? "SPONSORLUK FIRSATLARI\nVE\nTANITIM & SATIŞ STANDLARI" : "SPONSORSHIP\nAND\nPROMOTION & SALES STAND OPPORTUNITIES",
      id: "sponsor",
      className: "md:col-span-2",
    },
    {
      src: "/images/otopark-deneme.jpg",
      text: lang === "TR" ? "İLETİŞİM\n&\nULAŞIM" : "TRANSPORTATION\n&\nCONTACT",
      id: "transport",
      className: "md:col-span-1",
    },
  ];
  return (
    <section className="py-12 md:py-16 container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
        {images.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onNavigate(item.id)}
            className={`group relative overflow-hidden rounded-2xl h-56 md:h-[380px] cursor-pointer shadow-xl transition-all duration-500 ${item.className}`}
          >
            <img
              src={item.src}
              alt={item.text}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-secondary/30 flex items-center justify-center transition-all duration-300 group-hover:bg-secondary/40">
              <h3 className="text-lg md:text-xl lg:text-2xl font-black text-white uppercase tracking-widest text-center px-6 transition-transform duration-300 group-hover:scale-105 drop-shadow-xl leading-tight whitespace-pre-line">
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