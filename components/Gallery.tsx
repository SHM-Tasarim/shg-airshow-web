import React from "react";
import { Language } from "../App";

interface GalleryProps {
  lang: Language;
  onNavigate: (view: any) => void;
}

const Gallery: React.FC<GalleryProps> = ({ lang, onNavigate }) => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&q=80&w=1000",
      text: lang === "TR" ? "ÖNERİLER" : "SUGGESTIONS",
      id: "suggestions", 
    },
    {
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000",
      text: lang === "TR" ? "GÖNÜLLÜ" : "VOLUNTEER",
      id: "volunteer", 
    },
    {
      src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1000",
      text: lang === "TR" ? "STANT" : "STAND",
      id: "stand", 
    },
  ];

  return (
    <section className="py-20 container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <div className="absolute inset-0 bg-secondary/60 flex items-center justify-center transition-opacity duration-300 group-hover:bg-primary/40">
              <h3 className="text-3xl font-extrabold text-white uppercase tracking-widest text-center px-4 transition-transform duration-300 group-hover:scale-110">
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