import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Masonry from "react-masonry-css";
import { Language } from "../App";

interface MediaArchiveProps {
  lang: Language;
  onNavigate: (view: any) => void;
}

interface MediaItem {
  src: string;
}

const MediaArchive: React.FC<MediaArchiveProps> = ({ lang, onNavigate }) => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  // TÃžm gÃ¶rseller (Tek liste, sÄ±ralÄ±)
  const mediaItems: MediaItem[] = [
    // 2025 Items
    { src: "/images/SHG2025Haber9.jpg" },
    { src: "/images/SHG2025Haber8.jpg" },
    { src: "/images/SHG2025Haber7.jpg" },
    { src: "/images/SHG2025Haber6.jpg" },
    { src: "/images/SHG2025Haber5.jpg" },
    { src: "/images/SHG2025Haber4.jpg" },
    { src: "/images/SHG2025Haber3.jpg" },
    { src: "/images/SHG2025Haber2.jpg" },
    { src: "/images/SHG2025Haber1.jpg" },

    // 2024 Items
    { src: "/images/SHG2024Haber15.jpg" },
    { src: "/images/SHG2024Haber14.jpg" },
    { src: "/images/SHG2024Haber13.jpg" },
    { src: "/images/SHG2024Haber12.jpg" },
    { src: "/images/SHG2024Haber11.jpg" },
    //{ src: "/images/SHG2024Haber10.jpg" },

    // 2023 Items
    { src: "/images/SHG2023Haber21.jpg" },
    { src: "/images/SHG2023Haber20.jpg" },
    { src: "/images/SHG2023Haber19.jpg" },
    { src: "/images/SHG2023Haber18.jpg" },
    { src: "/images/SHG2023Haber17.jpg" },
    { src: "/images/SHG2023Haber16.jpg" },

    // 2022 Items
    { src: "/images/SHG2022Haber31.jpg" },
    { src: "/images/SHG2022Haber30.jpg" },
    { src: "/images/SHG2022Haber29.jpg" },
    { src: "/images/SHG2022Haber28.jpg" },
    { src: "/images/SHG2022Haber27.jpg" },
    { src: "/images/SHG2022Haber26.jpg" },
    { src: "/images/SHG2022Haber25.jpg" },
    { src: "/images/SHG2022Haber24.jpg" },
    { src: "/images/SHG2022Haber23.jpg" },
    { src: "/images/SHG2022Haber22.jpg" },

    // 2020 Items
    { src: "/images/SHG2020Haber42.jpg" },
    { src: "/images/SHG2020Haber41.jpg" },
    { src: "/images/SHG2020Haber40.jpg" },
    // { src: "/images/SHG2020Haber39.jpg" },
    { src: "/images/SHG2020Haber38.jpg" },
    //{ src: "/images/SHG2020Haber37.jpg" },
    //{ src: "/images/SHG2020Haber36.jpg" },
    //{ src: "/images/SHG2020Haber35.jpg" },
    { src: "/images/SHG2020Haber34.jpg" },
    { src: "/images/SHG2020Haber33.jpg" },

    // 2019 Items
    { src: "/images/SHG2019Haber55.jpg" },
    { src: "/images/SHG2019Haber54.jpg" },
    { src: "/images/SHG2019Haber53.jpg" },
    { src: "/images/SHG2019Haber52.jpg" },
    { src: "/images/SHG2019Haber51.jpg" },
    { src: "/images/SHG2019Haber50.jpg" },
    { src: "/images/SHG2019Haber49.jpg" },
    { src: "/images/SHG2019Haber48.jpg" },
    { src: "/images/SHG2019Haber47.jpg" },
    { src: "/images/SHG2019Haber46.jpg" },
    { src: "/images/SHG2019Haber45.jpg" },
    { src: "/images/SHG2019Haber44.jpg" },
    { src: "/images/SHG2019Haber43.jpg" },

    // 2018 Items
    { src: "/images/SHG2018Haber78.jpg" },
    { src: "/images/SHG2018Haber77.jpg" },
    //{ src: "/images/SHG2018Haber76.jpg" },
    //{ src: "/images/SHG2018Haber75.jpg" },
    // { src: "/images/SHG2018Haber74.jpg" },
    { src: "/images/SHG2018Haber73.jpg" },
    { src: "/images/SHG2018Haber72.jpg" },
    { src: "/images/SHG2018Haber71.jpg" },
    { src: "/images/SHG2018Haber70.jpg" },
    { src: "/images/SHG2018Haber69.jpg" },
    //{ src: "/images/SHG2018Haber68.jpg" },
    //{ src: "/images/SHG2018Haber67.jpg" },
    //{ src: "/images/SHG2018Haber66.jpg" },
    { src: "/images/SHG2018Haber65.jpg" },
    //{ src: "/images/SHG2018Haber64.jpg" },
    //{ src: "/images/SHG2018Haber63.jpg" },
    //{ src: "/images/SHG2018Haber62.jpg" },
    { src: "/images/SHG2018Haber61.jpg" },
    //{ src: "/images/SHG2018Haber60.jpg" },
    //{ src: "/images/SHG2018Haber59.jpg" },
    //{ src: "/images/SHG2018Haber58.jpg" },
    //{ src: "/images/SHG2018Haber57.jpg" },
    //{ src: "/images/SHG2018Haber56.jpg" },

    // 2017 Items
    //{ src: "/images/SHG2017Haber101.jpg" },
    { src: "/images/SHG2017Haber100.jpg" },
    { src: "/images/SHG2017Haber99.jpg" },
    { src: "/images/SHG2017Haber98.jpg" },
    //{ src: "/images/SHG2017Haber97.jpg" },
    { src: "/images/SHG2017Haber96.jpg" },
    { src: "/images/SHG2017Haber95.jpg" },
    //{ src: "/images/SHG2017Haber94.jpg" },
    // { src: "/images/SHG2017Haber93.jpg" },
    //{ src: "/images/SHG2017Haber92.jpg" },
    { src: "/images/SHG2017Haber91.jpg" },
    { src: "/images/SHG2017Haber90.jpg" },
    { src: "/images/SHG2017Haber89.jpg" },
    { src: "/images/SHG2017Haber88.jpg" },
    { src: "/images/SHG2017Haber87.jpg" },
    { src: "/images/SHG2017Haber86.jpg" },
    { src: "/images/SHG2017Haber85.jpg" },
    //{ src: "/images/SHG2017Haber84.jpg" },
    { src: "/images/SHG2017Haber83.jpg" },
    { src: "/images/SHG2017Haber82.jpg" },
    { src: "/images/SHG2017Haber81.jpg" },
    { src: "/images/SHG2017Haber80.jpg" },
    // { src: "/images/SHG2017Haber79.jpg" },

    // 2015 Items
    { src: "/images/SHG2015Haber115.jpg" },
    { src: "/images/SHG2015Haber114.jpg" },
    { src: "/images/SHG2015Haber113.jpg" },
    //{ src: "/images/SHG2015Haber112.jpg" },
    { src: "/images/SHG2015Haber111.jpg" },
    //{ src: "/images/SHG2015Haber110.jpg" },
    //{ src: "/images/SHG2015Haber109.jpg" },
    //{ src: "/images/SHG2015Haber108.jpg" },
    //{ src: "/images/SHG2015Haber107.jpg" },
    //{ src: "/images/SHG2015Haber106.jpg" },
    //{ src: "/images/SHG2015Haber105.jpg" },
    //{ src: "/images/SHG2015Haber104.jpg" },
    // { src: "/images/SHG2015Haber103.jpg" },
    //{ src: "/images/SHG2015Haber102.jpg" },
  ];

  const content = {
    TR: { title: "MEDYA", close: "KAPAT" },
    EN: { title: "MEDIA", close: "CLOSE" },
  }[lang];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (selectedItem) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
  }, [selectedItem]);

  const ImageCard: React.FC<{ item: MediaItem }> = ({ item }) => {
    return (
      <div
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          setSelectedItem(item);
        }}
        className='break-inside-avoid mb-6 group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-100 dark:bg-gray-900 transition-all duration-700 hover:shadow-[0_0_40px_rgba(220,38,38,0.15)] hover:border-primary/40 shadow-xl cursor-pointer'
      >
        <img
          src={item.src}
          alt="Media Item"
          loading="lazy"
          className='w-full h-auto block transition-all duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100'
        />

        {/* Hover Overlay - Sadece Büyüteç */}
        <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none'>
          <div className='w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl'>
            <span className='material-icons text-3xl'>zoom_in</span>
          </div>
        </div>
      </div >
    );
  };

  return (
    <div className='bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32 relative'>
      <div className='max-w-7xl mx-auto px-6 pt-16'>
        <header className='mb-24 text-center'>
          <h1 className='text-4xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter uppercase'>
            {content.title}
          </h1>
          <div className='w-20 h-1 bg-primary mx-auto mt-6'></div>
        </header>

        {/* Tüm görseller */}
        <Masonry
          breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
          className='flex -ml-6 w-auto'
          columnClassName='pl-6 bg-clip-padding'
        >
          {mediaItems.map((item, idx) => (
            <ImageCard key={idx} item={item} />
          ))}
        </Masonry>
      </div>

      {/* SAF GÖRSEL LIGHTBOX - Portal ile render ediliyor */}
      {selectedItem && createPortal(
        <div
          className='fixed inset-0 bg-black/95 backdrop-blur-md transition-all duration-300'
          onClick={() => setSelectedItem(null)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            zIndex: 99999
          }}
        >
          {/* Kapat Butonu */}
          <button
            className='absolute top-6 right-6 text-white/50 hover:text-white flex items-center gap-2 group p-4 transition-colors'
            style={{ zIndex: 100000 }}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              setSelectedItem(null);
            }}
          >
            <span className='text-[10px] font-black tracking-widest uppercase'>{content.close}</span>
            <span className='material-icons text-2xl'>close</span>
          </button>

          <img
            src={selectedItem.src}
            alt="Expanded view"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '4px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              console.error('Image failed to load:', selectedItem.src);
              (e.target as HTMLImageElement).style.border = '2px solid red';
            }}
            onLoad={() => console.log('Image loaded:', selectedItem.src)}
          />
        </div>,
        document.body
      )}
    </div>
  );
};

export default MediaArchive;