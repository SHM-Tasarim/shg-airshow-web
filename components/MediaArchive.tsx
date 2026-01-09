import React, { useState, useEffect } from 'react';
import { Language } from '../App';

interface MediaArchiveProps {
  lang: Language;
  onNavigate: (view: any) => void;
}

type MediaCategory = 'ALL' | 'TV' | 'PRESS';

interface MediaItem {
  type: 'PRESS' | 'TV';
  title: string;
  src: string;
}

const MediaArchive: React.FC<MediaArchiveProps> = ({ lang, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<MediaCategory>('ALL');
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const mediaItems: MediaItem[] = [
    { type: 'TV', title: 'NOW TV 2025', src: '/images/now-tv-2025.mp4' },
    { type: 'TV', title: 'NTV 2025', src: '/images/ntv-2025.mp4' },
    { type: 'PRESS', title: 'HABER 1', src: '/images/SHG2025Haber1.jpg' },
    { type: 'PRESS', title: 'HABER 2', src: '/images/SHG2025Haber2.jpg' },
    { type: 'PRESS', title: 'HABER 3', src: '/images/SHG2025Haber3.jpg' },
    { type: 'PRESS', title: 'HABER 4', src: '/images/SHG2025Haber4.jpg' },
    { type: 'PRESS', title: 'HABER 5', src: '/images/SHG2025Haber5.jpg' },
    { type: 'PRESS', title: 'HABER 6', src: '/images/SHG2025Haber6.jpg' },
    { type: 'PRESS', title: 'HABER 7', src: '/images/SHG2025Haber7.jpg' },
    { type: 'PRESS', title: 'HABER 8', src: '/images/SHG2025Haber8.jpg' },
    { type: 'PRESS', title: 'HABER 9', src: '/images/SHG2025Haber9.jpg' },
    { type: 'TV', title: 'NTV 2024', src: '/images/ntv-2024.mp4' },
    { type: 'PRESS', title: 'HABER 10', src: '/images/SHG2024Haber10.jpg' },
    { type: 'PRESS', title: 'HABER 11', src: '/images/SHG2024Haber11.jpg' },
    { type: 'PRESS', title: 'HABER 12', src: '/images/SHG2024Haber12.jpg' },
    { type: 'PRESS', title: 'HABER 13', src: '/images/SHG2024Haber13.jpg' },
    { type: 'PRESS', title: 'HABER 14', src: '/images/SHG2024Haber14.jpg' },
    { type: 'PRESS', title: 'HABER 15', src: '/images/SHG2024Haber15.jpg' },
    { type: 'TV', title: 'CNN TURK 2023', src: '/images/cnn-turk-2023.mp4' },
    { type: 'PRESS', title: 'HABER 16', src: '/images/SHG2023Haber16.jpg' },
    { type: 'PRESS', title: 'HABER 17', src: '/images/SHG2023Haber17.jpg' },
    { type: 'PRESS', title: 'HABER 18', src: '/images/SHG2023Haber18.jpg' },
    { type: 'PRESS', title: 'HABER 19', src: '/images/SHG2023Haber19.jpg' },
    { type: 'PRESS', title: 'HABER 20', src: '/images/SHG2023Haber20.jpg' },
    { type: 'PRESS', title: 'HABER 21', src: '/images/SHG2023Haber21.jpg' },
    { type: 'TV', title: 'NTV 2022', src: '/images/ntv-2022.mp4' },
    { type: 'TV', title: 'TGRT HABER 2022', src: '/images/tgrt-haber-2022.mp4' },
    { type: 'TV', title: 'A HABER 2022', src: '/images/a-haber-2022.mp4' },
    { type: 'PRESS', title: 'HABER 22', src: '/images/SHG2022Haber22.jpg' },
    { type: 'PRESS', title: 'HABER 23', src: '/images/SHG2022Haber23.jpg' },
    { type: 'PRESS', title: 'HABER 24', src: '/images/SHG2022Haber24.jpg' },
    { type: 'PRESS', title: 'HABER 25', src: '/images/SHG2022Haber25.jpg' },
    { type: 'PRESS', title: 'HABER 26', src: '/images/SHG2022Haber26.jpg' },
    { type: 'PRESS', title: 'HABER 27', src: '/images/SHG2022Haber27.jpg' },
    { type: 'PRESS', title: 'HABER 28', src: '/images/SHG2022Haber28.jpg' },
    { type: 'PRESS', title: 'HABER 29', src: '/images/SHG2022Haber29.jpg' },
    { type: 'PRESS', title: 'HABER 30', src: '/images/SHG2022Haber30.jpg' },
    { type: 'PRESS', title: 'HABER 31', src: '/images/SHG2022Haber31.jpg' },
    { type: 'TV', title: 'NTV 2020', src: '/images/ntv-2020.mp4' },
    { type: 'TV', title: 'HABER TÜRK 2020', src: '/images/haber-turk-2020.mp4' },
    { type: 'TV', title: 'A HABER 2020', src: '/images/a-haber-2020.mp4' },
    { type: 'TV', title: 'HABER GLOBAL 2020', src: '/images/haber-global-2020.mp4' },
    { type: 'TV', title: 'S SPORTS 2020', src: '/images/s-sports-2020.mp4' },
    { type: 'TV', title: 'TGRT HABER 2020', src: '/images/tgrt-haber-2020.mp4' },
    { type: 'TV', title: 'TV100 2020', src: '/images/tv100-2020.mp4' },
    { type: 'TV', title: 'KANAL 26 2020', src: '/images/kanal26-2020.mp4' },
    { type: 'TV', title: 'TRT WORLD 2020', src: '/images/trt-world-2020.mp4' },
    { type: 'PRESS', title: 'HABER 33', src: '/images/SHG2020Haber33.jpg' },
    { type: 'PRESS', title: 'HABER 34', src: '/images/SHG2020Haber34.jpg' },
    { type: 'PRESS', title: 'HABER 35', src: '/images/SHG2020Haber35.jpg' },
    { type: 'PRESS', title: 'HABER 36', src: '/images/SHG2020Haber36.jpg' },
    { type: 'PRESS', title: 'HABER 37', src: '/images/SHG2020Haber37.jpg' },
    { type: 'PRESS', title: 'HABER 38', src: '/images/SHG2020Haber38.jpg' },
    { type: 'PRESS', title: 'HABER 39', src: '/images/SHG2020Haber39.jpg' },
    { type: 'PRESS', title: 'HABER 40', src: '/images/SHG2020Haber40.jpg' },
    { type: 'PRESS', title: 'HABER 41', src: '/images/SHG2020Haber41.jpg' },
    { type: 'PRESS', title: 'HABER 42', src: '/images/SHG2020Haber42.jpg' },
    { type: 'PRESS', title: 'HABER 43', src: '/images/SHG2019Haber43.jpg' },
    { type: 'PRESS', title: 'HABER 44', src: '/images/SHG2019Haber44.jpg' },
    { type: 'PRESS', title: 'HABER 45', src: '/images/SHG2019Haber45.jpg' },
    { type: 'PRESS', title: 'HABER 46', src: '/images/SHG2019Haber46.jpg' },    
    { type: 'PRESS', title: 'HABER 47', src: '/images/SHG2019Haber47.jpg' },
    { type: 'PRESS', title: 'HABER 48', src: '/images/SHG2019Haber48.jpg' },
    { type: 'PRESS', title: 'HABER 49', src: '/images/SHG2019Haber49.jpg' },
    { type: 'PRESS', title: 'HABER 50', src: '/images/SHG2019Haber50.jpg' },
    { type: 'PRESS', title: 'HABER 51', src: '/images/SHG2019Haber51.jpg' },
    { type: 'PRESS', title: 'HABER 52', src: '/images/SHG2019Haber52.jpg' },
    { type: 'PRESS', title: 'HABER 53', src: '/images/SHG2019Haber53.jpg' },
    { type: 'PRESS', title: 'HABER 54', src: '/images/SHG2019Haber54.jpg' },
    { type: 'PRESS', title: 'HABER 55', src: '/images/SHG2019Haber55.jpg' },
    { type: 'PRESS', title: 'HABER 55', src: '/images/SHG2018Haber55.jpg' },
    { type: 'PRESS', title: 'HABER 56', src: '/images/SHG2018Haber56.jpg' },
    { type: 'PRESS', title: 'HABER 57', src: '/images/SHG2018Haber57.jpg' },
    { type: 'PRESS', title: 'HABER 58', src: '/images/SHG2018Haber58.jpg' },
    { type: 'PRESS', title: 'HABER 59', src: '/images/SHG2018Haber59.jpg' },
    { type: 'PRESS', title: 'HABER 60', src: '/images/SHG2018Haber60.jpg' },
    { type: 'PRESS', title: 'HABER 61', src: '/images/SHG2018Haber61.jpg' },
    { type: 'PRESS', title: 'HABER 62', src: '/images/SHG2018Haber62.jpg' },
    { type: 'PRESS', title: 'HABER 63', src: '/images/SHG2018Haber63.jpg' },
    { type: 'PRESS', title: 'HABER 64', src: '/images/SHG2018Haber64.jpg' },
    { type: 'PRESS', title: 'HABER 65', src: '/images/SHG2018Haber65.jpg' },
    { type: 'PRESS', title: 'HABER 66', src: '/images/SHG2018Haber66.jpg' },
    { type: 'PRESS', title: 'HABER 67', src: '/images/SHG2018Haber67.jpg' },
    { type: 'PRESS', title: 'HABER 68', src: '/images/SHG2018Haber68.jpg' },
    { type: 'PRESS', title: 'HABER 69', src: '/images/SHG2018Haber69.jpg' },
    { type: 'PRESS', title: 'HABER 70', src: '/images/SHG2018Haber70.jpg' },
    { type: 'PRESS', title: 'HABER 71', src: '/images/SHG2018Haber71.jpg' },
    { type: 'PRESS', title: 'HABER 72', src: '/images/SHG2018Haber72.jpg' },
    { type: 'PRESS', title: 'HABER 73', src: '/images/SHG2018Haber73.jpg' },
    { type: 'PRESS', title: 'HABER 74', src: '/images/SHG2018Haber74.jpg' },
    { type: 'PRESS', title: 'HABER 75', src: '/images/SHG2018Haber75.jpg' },
    { type: 'PRESS', title: 'HABER 76', src: '/images/SHG2018Haber76.jpg' },
    { type: 'PRESS', title: 'HABER 77', src: '/images/SHG2018Haber77.jpg' },
    { type: 'PRESS', title: 'HABER 78', src: '/images/SHG2018Haber78.jpg' },
    { type: 'PRESS', title: 'HABER 79', src: '/images/SHG2017Haber79.jpg' },
  { type: 'PRESS', title: 'HABER 80', src: '/images/SHG2017Haber80.jpg' },
  { type: 'PRESS', title: 'HABER 81', src: '/images/SHG2017Haber81.jpg' },
  { type: 'PRESS', title: 'HABER 82', src: '/images/SHG2017Haber82.jpg' },
  { type: 'PRESS', title: 'HABER 83', src: '/images/SHG2017Haber83.jpg' },
  { type: 'PRESS', title: 'HABER 84', src: '/images/SHG2017Haber84.jpg' },
  { type: 'PRESS', title: 'HABER 85', src: '/images/SHG2017Haber85.jpg' },
  { type: 'PRESS', title: 'HABER 86', src: '/images/SHG2017Haber86.jpg' },
  { type: 'PRESS', title: 'HABER 87', src: '/images/SHG2017Haber87.jpg' },
  { type: 'PRESS', title: 'HABER 88', src: '/images/SHG2017Haber88.jpg' },
  { type: 'PRESS', title: 'HABER 89', src: '/images/SHG2017Haber89.jpg' },
  { type: 'PRESS', title: 'HABER 90', src: '/images/SHG2017Haber90.jpg' },
  { type: 'PRESS', title: 'HABER 91', src: '/images/SHG2017Haber91.jpg' },
  { type: 'PRESS', title: 'HABER 92', src: '/images/SHG2017Haber92.jpg' },
  { type: 'PRESS', title: 'HABER 93', src: '/images/SHG2017Haber93.jpg' },
  { type: 'PRESS', title: 'HABER 94', src: '/images/SHG2017Haber94.jpg' },
  { type: 'PRESS', title: 'HABER 95', src: '/images/SHG2017Haber95.jpg' },
  { type: 'PRESS', title: 'HABER 96', src: '/images/SHG2017Haber96.jpg' },
  { type: 'PRESS', title: 'HABER 97', src: '/images/SHG2017Haber97.jpg' },
  { type: 'PRESS', title: 'HABER 98', src: '/images/SHG2017Haber98.jpg' },
  { type: 'PRESS', title: 'HABER 99', src: '/images/SHG2017Haber99.jpg' },
  { type: 'PRESS', title: 'HABER 100', src: '/images/SHG2017Haber100.jpg' },
  { type: 'PRESS', title: 'HABER 101', src: '/images/SHG2017Haber101.jpg' },
  { type: 'PRESS', title: 'HABER 102', src: '/images/SHG2015Haber102.jpg' },
  { type: 'PRESS', title: 'HABER 103', src: '/images/SHG2015Haber103.jpg' },
  { type: 'PRESS', title: 'HABER 104', src: '/images/SHG2015Haber104.jpg' },
  { type: 'PRESS', title: 'HABER 105', src: '/images/SHG2015Haber105.jpg' },
  { type: 'PRESS', title: 'HABER 106', src: '/images/SHG2015Haber106.jpg' },
  { type: 'PRESS', title: 'HABER 107', src: '/images/SHG2015Haber107.jpg' },
  { type: 'PRESS', title: 'HABER 108', src: '/images/SHG2015Haber108.jpg' },
  { type: 'PRESS', title: 'HABER 109', src: '/images/SHG2015Haber109.jpg' },
  { type: 'PRESS', title: 'HABER 110', src: '/images/SHG2015Haber110.jpg' },
  { type: 'PRESS', title: 'HABER 111', src: '/images/SHG2015Haber111.jpg' },
  { type: 'PRESS', title: 'HABER 112', src: '/images/SHG2015Haber112.jpg' },
  { type: 'PRESS', title: 'HABER 113', src: '/images/SHG2015Haber113.jpg' },
  { type: 'PRESS', title: 'HABER 114', src: '/images/SHG2015Haber114.jpg' },
  { type: 'PRESS', title: 'HABER 115', src: '/images/SHG2015Haber115.jpg' }
  ];

  const filteredItems = activeCategory === 'ALL'
    ? mediaItems
    : mediaItems.filter(item => item.type === activeCategory);

  const content = {
    TR: {
      title: "MEDYA",
      categories: { ALL: "TÜMÜ", TV: "TV", PRESS: "BASIN" },
      back: "ANA SAYFAYA DÖN",
      close: "KAPAT"
    },
    EN: {
      title: "MEDIA",
      categories: { ALL: "ALL", TV: "TV", PRESS: "PRESS" },
      back: "BACK TO HOME",
      close: "CLOSE"
    }
  }[lang];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedItem]);

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32 overflow-hidden relative">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-0">
        <div className="absolute inset-0 texture-bg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-16">
        
        {/* HEADER: Başlık Ortada, Butonlar Sağda ve Biraz Aşağıda */}
        <header className="mb-32 relative">
          <div className="text-center">
            <h1 className="text-2xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none uppercase">
              {content.title}
            </h1>
          </div>

          {/* Filtre Sistemi: Masaüstünde sağda ve top-full ile başlığın altına itildi */}
          <div className="md:absolute md:right-0 md:top-full md:mt-4 mt-8 flex justify-center">
            <div className="flex bg-gray-100 dark:bg-white/5 p-1 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm">
              {(['ALL', 'TV', 'PRESS'] as MediaCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-lg text-[10px] font-black tracking-widest transition-all uppercase ${
                    activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'text-gray-400 hover:text-primary'
                  }`}
                >
                  {content.categories[cat]}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Galeri - Masonry Grid */}
        <section className="mb-40">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredItems.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedItem(item)}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-100 dark:bg-gray-900 transition-all duration-700 hover:shadow-[0_0_40px_rgba(220,38,38,0.15)] hover:border-primary/40 shadow-xl cursor-pointer"
              >
                {item.type === 'TV' ? (
                  <video 
                    src={item.src} 
                    className="w-full h-auto block transition-all duration-1000 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-auto block transition-all duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                )}

                <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-primary"></div>
                  <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-primary"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-primary"></div>
                  <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-primary"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-primary/90 rounded-full flex items-center justify-center text-white shadow-lg">
                      <span className="material-icons">
                        {item.type === 'TV' ? 'play_arrow' : 'zoom_in'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity">
                  <span className="text-[10px] font-mono font-black text-white/80 tracking-widest uppercase">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* MODAL */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedItem(null)}
        >
          <button className="absolute top-8 right-8 text-white flex items-center gap-2 group z-[110]" onClick={() => setSelectedItem(null)}>
            <span className="text-[10px] font-black tracking-widest group-hover:text-primary transition-colors uppercase">{content.close}</span>
            <span className="material-icons bg-white/10 p-2 rounded-full group-hover:bg-primary transition-colors">close</span>
          </button>

          <div className="relative max-w-full max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'TV' ? (
              <video src={selectedItem.src} controls autoPlay className="max-w-[90vw] max-h-[85vh] rounded-lg shadow-2xl" />
            ) : (
              <img src={selectedItem.src} alt={selectedItem.title} className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl" />
            )}
            <div className="absolute -bottom-12 left-0 right-0 text-center">
                <p className="text-white font-mono text-xs tracking-[0.3em] uppercase opacity-60">{selectedItem.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaArchive;