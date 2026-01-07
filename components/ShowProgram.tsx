import React, { useState, useRef } from 'react';
import { Language } from '../App';
import * as htmlToImage from 'html-to-image';

interface ProgramItem {
  time: string;
  aircraft: string;
  duration: string;
  participantId?: string;
}

interface ShowProgramProps {
  lang: Language;
  onNavigate?: (view: any, targetId?: string) => void;
}

const participantQuickInfo: Record<string, { image: string, desc: string }> = {
  'p51-mustang': {
    image: '/images/mustang-p51d.jpg',
    desc: 'Türkiye’deki ilk ve tek North American P-51 Mustang. "Ferocious Frankie".'
  },
  'Pars & Dede Airshows': {
    image: '/images/aviat-husky.jpg',
    desc: 'Pars & Dede Airshows gösteri ekibi.'
  },
  'Yeni Menekşe': {
    image: '/images/yeni-menekse.jpg',
    desc: 'Türkiye’nin ilk profesyonel kadın akrobasi pilotu.'
  },
  't6-texan': {
    image: '/images/t6-texan.jpg',
    desc: 'İkinci Dünya Savaşı’nın efsanevi eğitim uçağı "Happy Hour".'
  },
  'pitts-s2b': {
    image: '/images/yeni-menekse.jpg',
    desc: 'Ali İsmet Öztürk ve efsanevi akrobasi uçağı Pitts S-2B.'
  }
};

const ShowProgram: React.FC<ShowProgramProps> = ({ lang, onNavigate }) => {
  const [activeDay, setActiveDay] = useState(0);
  const [hoveredAircraft, setHoveredAircraft] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const tableRef = useRef<HTMLDivElement>(null);

  const programs: Record<number, ProgramItem[]> = {
    0: [
      { time: '10:00 - 10:30', aircraft: 'F-16 "Solo Türk"', duration: '30 dk', participantId: 'solo-turk' },
      { time: '11:00 - 11:45', aircraft: lang === 'TR' ? '"Türk Yıldızları"' : '"Turkish Stars"', duration: '45 dk', participantId: 'turkish-stars' },
      { time: '12:00 - 12:20', aircraft: 'P-51 Mustang', duration: '20 dk', participantId: 'p51-mustang' },
      { time: '13:00 - 13:30', aircraft: 'HÜRKUŞ', duration: '30 dk' },
      { time: '14:00 - 14:20', aircraft: 'ATAK Helikopteri', duration: '20 dk' },
      { time: '15:00 - 15:30', aircraft: 'Jandarma Çelik Kanatlar', duration: '30 dk' },
    ],
    1: [
      { time: '10:00 - 10:20', aircraft: 'T-6 Texan', duration: '20 dk', participantId: 't6-texan' },
      { time: '11:00 - 11:30', aircraft: 'HÜRJET', duration: '30 dk' },
      { time: '12:00 - 12:45', aircraft: lang === 'TR' ? '"Türk Yıldızları"' : '"Turkish Stars"', duration: '45 dk', participantId: 'turkish-stars' },
      { time: '13:30 - 14:00', aircraft: 'F-16 "Solo Türk"', duration: '30 dk', participantId: 'solo-turk' },
      { time: '14:30 - 14:50', aircraft: 'Pitts S-2B', duration: '20 dk', participantId: 'pitts-s2b' },
      { time: '15:30 - 16:00', aircraft: lang === 'TR' ? 'Final Geçişi' : 'Final Fly-by', duration: '30 dk' },
    ]
  };

  const days = [
    lang === 'TR' ? '19 Eylül Cumartesi' : '19 September Saturday',
    lang === 'TR' ? '20 Eylül Pazar' : '20 September Sunday'
  ];

  const translations = {
    title: lang === 'TR' ? 'GÖSTERİ PROGRAMI' : 'SHOW PROGRAM',
    tableHeader: {
      time: lang === 'TR' ? 'Saat' : 'Time',
      aircraft: lang === 'TR' ? 'Hava Aracı' : 'Aircraft',
      duration: lang === 'TR' ? 'Süre' : 'Duration',
    },
    actions: {
      download: lang === 'TR' ? 'PROGRAMI İNDİR' : 'DOWNLOAD PROGRAM',
    },
    clickHint: lang === 'TR' ? 'Detay için tıklayın' : 'Click for details'
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleDownloadImage = async () => {
    if (tableRef.current === null) return;
    try {
      const dataUrl = await htmlToImage.toJpeg(tableRef.current, { 
        quality: 0.95, 
        backgroundColor: '#0A1427' 
      });
      const link = document.createElement('a');
      link.download = `shg-airshow-2026-program-${activeDay + 1}.jpeg`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('İndirme hatası:', err);
    }
  };

  return (
    <section id="program" className="py-12 md:py-20 font-display min-h-[60vh] relative">
      
      {/* HUD Style Tooltip - Mouse Takip Eden Bölüm */}
      {hoveredAircraft && participantQuickInfo[hoveredAircraft] && (
        <div 
          className="fixed z-[100] pointer-events-none w-64 bg-secondary/95 backdrop-blur-md border-2 border-primary/50 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200"
          style={{ 
            left: `${mousePos.x + 20}px`, 
            top: `${mousePos.y + 20}px` 
          }}
        >
          <div className="h-32 overflow-hidden relative">
            <img 
              src={participantQuickInfo[hoveredAircraft].image} 
              alt="Aircraft" 
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=400" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-primary"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-primary"></div>
          </div>
          <div className="p-4">
            <p className="text-white text-xs font-bold leading-relaxed mb-3">
              {participantQuickInfo[hoveredAircraft].desc}
            </p>
            
            {/* TIKLAYIN YAZISI BURAYA EKLENDİ */}
            <div className="flex items-center gap-2 text-[9px] font-black text-gray-500 tracking-widest uppercase border-t border-white/10 pt-3">
              <span className="material-icons text-xs">touch_app</span>
              {translations.clickHint}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-16 animate-in fade-in slide-in-from-top-4 duration-700 uppercase">
          {translations.title}
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Sekme Butonları */}
        <div className="flex justify-center border-b border-gray-300 dark:border-gray-700 mb-12 overflow-x-auto no-scrollbar whitespace-nowrap">
          {days.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setActiveDay(idx)}
              className={`px-6 sm:px-12 py-4 text-sm sm:text-base font-bold border-b-4 transition-all duration-300 uppercase tracking-widest ${
                activeDay === idx
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-400 dark:text-gray-500 hover:text-primary/70'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Program Tablosu */}
        <div ref={tableRef} className="bg-white dark:bg-gray-900/40 rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-800 backdrop-blur-xl mb-12 p-2 sm:p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse table-fixed min-w-[600px]">
              <thead className="bg-gray-50 dark:bg-black/40">
                <tr>
                  <th className="p-5 md:p-8 font-extrabold text-[10px] text-gray-500 uppercase tracking-[0.2em] w-[30%]">{translations.tableHeader.time}</th>
                  <th className="p-5 md:p-8 font-extrabold text-[10px] text-gray-500 uppercase tracking-[0.2em] w-[50%]">{translations.tableHeader.aircraft}</th>
                  <th className="p-5 md:p-8 font-extrabold text-[10px] text-gray-500 uppercase tracking-[0.2em] w-[20%]">{translations.tableHeader.duration}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {programs[activeDay].map((item, idx) => (
                  <tr key={idx} className="hover:bg-primary/[0.02] dark:hover:bg-primary/[0.05] transition-colors group">
                    <td className="p-5 md:p-8 whitespace-nowrap text-gray-900 dark:text-gray-100 font-bold tabular-nums text-sm md:text-base">
                      {item.time}
                    </td>
                    <td className="p-5 md:p-8 whitespace-nowrap align-middle">
                      {item.participantId ? (
                        <span 
                          onMouseEnter={() => setHoveredAircraft(item.participantId!)}
                          onMouseLeave={() => setHoveredAircraft(null)}
                          onMouseMove={handleMouseMove}
                          onClick={() => onNavigate && onNavigate('participants', item.participantId)}
                          className="text-gray-900 dark:text-gray-100 font-extrabold group-hover:text-primary transition-colors text-sm md:text-base border-b border-dashed border-gray-300 dark:border-gray-700 cursor-help"
                        >
                          {item.aircraft}
                        </span>
                      ) : (
                        <span className="text-gray-900 dark:text-gray-100 font-extrabold text-sm md:text-base">{item.aircraft}</span>
                      )}
                    </td>
                    <td className="p-5 md:p-8 whitespace-nowrap text-gray-600 dark:text-gray-400 font-bold text-sm">
                      {item.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Programı İndir Butonu */}
        <div className="flex items-center justify-center mb-12">
          <button 
            onClick={handleDownloadImage}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white font-extrabold py-4 px-12 rounded-xl hover:bg-red-700 transition-all shadow-xl shadow-primary/20 active:scale-95 uppercase text-[11px] tracking-[0.2em]"
          >
            <span className="material-icons text-xl">file_download</span>
            {translations.actions.download}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShowProgram;