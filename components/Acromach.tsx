
import React from 'react';
import { Language } from '../App';

interface AcromachProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const Acromach: React.FC<AcromachProps> = ({ lang, onNavigate }) => {
  const content = {
    TR: {
      tagline: "GÖKYÜZÜ DANSÇILARI - HAVA AKROBASİ GRUBU",
      title: "Acromach",
      history: "Acromach, Türkiye’nin İlk Profesyonel Milli Akrobasi Pilotu Ali İsmet Öztürk tarafından kurulmuştur.",
      legacy: "Ali İsmet Öztürk önderliğindeki Acromach Ekibi, Efsanevi Uçak “Mor Menekşe” ile 22 farklı ülkede 500’den fazla hava gösterisine katılmış, 859 gösteri uçuşunu hatasız ve arızasız olarak tamamlayarak 25 milyondan fazla seyirciye ulaşmıştır.",
      transition: "13 Eylül 2021 tarihinde SHG Airshow’da Profesyonel Akrobasi’den jübilesini yapan Ali İsmet Öztürk’ten sonra “Efsanevi Mor Menekşe” Mak Teknik’in özverili çalışmaları ile kapsamlı bir bakımdan geçti ve dış görünüşü değişti.",
      modernEra: "Mor Menekşe artık “Yeni Menekşe” olarak Türkiye’nin İlk Profesyonel Kadın Akrobasi Pilotu Semin Öztürk Şener ile göklerde yeni serüvenlerine devam ediyor.",
      participation: "Uluslararası hava gösterileri takvimlerinde ‘SHG Airshows’ adıyla yer alan ve Türkiye’nin gelenekselleşmiş tek hava gösterisi olma özelliğini taşıyan Sivrihisar Hava Gösterileri’nde Acromach, 2015 yılından bu yana profesyonel olarak görev almaktadır.",
      stats: [
        { label: "SEYİRCİ", value: "25M+", icon: "groups" },
        { label: "GÖSTERİ", value: "859", icon: "airplanemode_active" },
        { label: "ÜLKE", value: "22", icon: "public" }
      ],
      back: "ANA SAYFAYA DÖN"
    },
    EN: {
      tagline: "SKY DANCERS - AEROBATIC TEAM",
      title: "Acromach",
      history: "Acromach was founded by Ali İsmet Öztürk, Turkey's First Professional National Aerobatic Pilot.",
      legacy: "Under the leadership of Ali İsmet Öztürk, the Acromach Team participated in more than 500 air shows in 22 different countries with the Legendary Aircraft 'Purple Violet', reaching more than 25 million spectators by completing 859 display flights flawlessly.",
      transition: "Following Ali İsmet Öztürk's jubilee on September 13, 2021, at SHG Airshow, 'Legendary Purple Violet' underwent extensive maintenance and its appearance changed with the dedicated work of Mak Teknik.",
      modernEra: "'Purple Violet' now continues its new adventures in the skies as 'New Violet' with Turkey's First Professional Female Aerobatic Pilot Semin Öztürk Şener.",
      participation: "Acromach has been performing professionally since 2015 at Sivrihisar Airshows, which is listed as 'SHG Airshows' in international calendars and is Turkey's only traditional airshow.",
      stats: [
        { label: "SPECTATORS", value: "25M+", icon: "groups" },
        { label: "DISPLAYS", value: "859", icon: "airplanemode_active" },
        { label: "COUNTRIES", value: "22", icon: "public" }
      ],
      back: "BACK TO HOME"
    }
  }[lang];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32">
      {/* Hero Header */}
      <div className="w-full h-[45vh] md:h-[65vh] overflow-hidden relative">
        <img 
          src="/images/ali-ismet-ozturk-semin-ozturk-sener.jpg" 
          className="w-full h-full object-cover"
          alt="Acromach "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-black/30"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        <header className="mb-16">
          <p className="text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4">
            {content.tagline}
          </p>
          <h1 className="text-2xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8">
            {content.title}<span className="text-primary">.</span>
          </h1>
          <div className="w-16 h-1 bg-primary"></div>
        </header>

        {/* Narrative Section */}
        <div className="space-y-10 mb-20">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-200 font-bold italic border-l-4 border-primary pl-8">
            {content.history}
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
            {content.legacy}
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium border-l-4 border-primary/20 pl-8">
            {content.transition}
          </p>

          {/* Visual Divider / Image Pair */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-xl group relative">
              <img 
                src="/images/mor-menekse.jpg" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Ali Ismet Ozturk" 
              />
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-md text-[10px] font-bold">ALİ İSMET ÖZTÜRK</div>
            </div>
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-xl group relative">
              <img 
                src="/images/yeni-menekse-2.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Semin Ozturk Sener" 
              />
              <div className="absolute bottom-4 left-4 bg-primary/80 text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">Semin Öztürk Şener</div>
            </div>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed text-primary font-black tracking-tight italic">
            {content.modernEra}
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
            {content.participation}
          </p>
        </div>

        {/* Stats Box */}
        <div className="bg-secondary dark:bg-black/60 text-white p-10 rounded-3xl mb-20 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <span className="material-icons text-9xl">auto_awesome</span>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
             {content.stats.map((stat, idx) => (
               <div key={idx} className="text-center group">
                 <span className="material-icons text-primary/40 group-hover:text-primary transition-colors text-3xl mb-2">{stat.icon}</span>
                 <div className="text-2xl font-black">{stat.value}</div>
                 <div className="text-[9px] font-black text-gray-500 tracking-widest uppercase">{stat.label}</div>
               </div>
             ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
          <a 
            href="https://www.seminozturk.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary text-white font-black py-5 px-12 rounded-xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 text-center uppercase tracking-widest text-sm"
          >
            {lang === 'TR' ? 'seminozturk.com' : 'SEMINOZTURK.com'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Acromach;
