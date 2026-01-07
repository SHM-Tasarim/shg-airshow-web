import React from 'react';
import { Language } from '../App';

interface AboutSHMProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const AboutSHM: React.FC<AboutSHMProps> = ({ lang, onNavigate }) => {
  const content = {
    TR: {
      tagline: "NECATİ ARTAN TESİSLERİ",
      title: "Sivrihisar Havacılık Merkezi (S.H.M)",
      history: "Sivrihisar Havacılık Merkezi S.H.M., Necati Artan Tesisleri, 2014 yılının Mart ayında Hava Parkı olarak faaliyetlerine başladı. Tesis, yaklaşık 1000 dönüm arazi üzerine kuruludur. Arazinin deniz seviyesinden yüksekliği 2790 feet’tir.",
      runway: "Tesislerde 1810 m. uzunluğunda, 32 m. genişliğinde ana asfalt pist bulunmakta olup pist yönü 05’e 23’tür. Ana pistin yanında planör ve diğer hafif hava araçları için çim pist bulunuyor.",
      activity: "''Batı Apronu” ve “Doğu Apronu” olmak üzere iki apron alanında yıl boyunca çeşitli havacılık faaliyetleri gerçekleşmektedir. S.H.M.'de uçuşların yanı sıra paraşüt atlayışları, uçuş eğitim okulları ve akademik birimlerin düzenlediği eğitimler ve kamplar ile model uçak eğitimleri, model uçak gösterileri, airshow ve akrobasi gösterileri de yapılmaktadır.",
      suitability: "Sportif havacılığın rahat yapıldığı bir yer olduğu gibi, paraşütçüler ve planörcüler için de çok uygundur.",
      technical: "TEKNİK BİLGİLER",
      frequency: "Frekans",
      coords: "Koordinatlar",
      elev: "Rakım",
      downloadPdf: "AIP dosyasını indirmek için tıklayın",
      visitWeb: "Shm.aero",
      back: "ANA SAYFAYA DÖN"
    },
    EN: {
      tagline: "NECATI ARTAN FACILITIES",
      title: "S.H.M",
      history: "Sivrihisar Aviation Center (S.H.M.), Necati Artan Facilities, began operations as an Air Park in March 2014. The facility is built on approximately 1000 decares of land. The elevation of the terrain from sea level is 2790 feet.",
      runway: "The facilities feature a main asphalt runway 1810 m long and 32 m wide, with a runway heading of 05 to 23. Next to the main runway, there is a grass runway for gliders and other light aircraft.",
      activity: "Various aviation activities take place throughout the year in two apron areas: the \"West Apron\" and \"East Apron.\" In addition to flights, S.H.M. hosts parachute jumps, training and camps organized by flight training schools and academic units, as well as model aircraft training, model aircraft shows, and aerobatic displays.",
      suitability: "It is a location where sporting aviation can be practiced comfortably and is very suitable for parachutists and gliders.",
      technical: "TECHNICAL SPECIFICATIONS",
      frequency: "Frequency",
      coords: "Coordinates",
      elev: "Elevation",
      downloadPdf: "Click to download the AIP file",
      visitWeb: "OFFICIAL WEBSITE",
      back: "BACK TO HOME"
    }
  }[lang];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32">
      {/* Hero Image */}
      <div className="w-full h-[45vh] md:h-[65vh] overflow-hidden relative">
        <img 
          src="/images/shm-apron.jpg" 
          className="w-full h-full object-cover"
          alt="SHM Aerial View"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark to-transparent"></div>
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

        {/* Narrative Text */}
        <div className="space-y-10 mb-20">
          {/* 1. YAZI: HISTORY */}
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-200 font-bold italic border-l-4 border-primary pl-8">
            {content.history}
          </p>

          {/* 2. YAZI: RUNWAY */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
            {content.runway}
          </p>

          {/* 3. YAZI: ACTIVITY */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
            {content.activity}
          </p>

          {/* 2. RESİM ALANI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-xl group">
              <img 
                src="/images/shm-photo-2.jpg" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Apron Activity" 
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-xl group">
              <img 
                src="/images/shm-photo-3.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Training" 
              />
            </div>
          </div>

          {/* 4. YAZI: SUITABILITY */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
            {content.suitability}
          </p>
        </div>

        {/* Technical Specification Box */}
        <div className="bg-secondary dark:bg-black/60 text-white p-10 rounded-3xl mb-20 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <span className="material-icons text-9xl">radar</span>
          </div>
          
          <h2 className="text-xs font-black tracking-[0.4em] text-primary mb-10 uppercase border-b border-white/10 pb-4">
            {content.technical}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-black tracking-widest uppercase mb-1">{content.coords}</span>
                <span className="text-lg font-bold font-mono tracking-tight">N 39°17'59.29'' | E 31°29'38.50''</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-black tracking-widest uppercase mb-1">{content.frequency}</span>
                <span className="text-2xl font-black text-primary">131,625 MHz <span className="text-xs text-white/40 ml-2 font-bold uppercase">(Artan Kule)</span></span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-black tracking-widest uppercase mb-1">{content.elev}</span>
                <span className="text-2xl font-black italic">2790 FEET</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-black tracking-widest uppercase mb-1">İLETİŞİM</span>
                <a href="tel:+902227243040" className="text-sm font-bold hover:text-primary transition-colors">+90 (222) 724 30 40 - 41</a>
                <span className="text-sm font-medium text-gray-400">Fax: +90 (222) 724 30 11</span>
              </div>
            </div>
          </div>

          {/* <div className="mt-12 pt-8 border-t border-white/10">
            <a 
              href="/SHM_AIP.pdf" 
              download="SHM_AIP.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors">
                <span className="material-icons text-primary group-hover:text-white transition-colors">picture_as_pdf</span>
              </div>
              <span className="text-sm font-black tracking-widest uppercase group-hover:text-primary transition-colors">
                {content.downloadPdf}
              </span>
            </a>
          </div> */}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
          <a 
            href="https://shm.aero/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary text-white font-black py-5 px-12 rounded-xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 text-center uppercase tracking-widest text-sm"
          >
            {content.visitWeb}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSHM;