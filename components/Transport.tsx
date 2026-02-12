import React from 'react';
import { Language } from '../App';

interface TransportProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const Transport: React.FC<TransportProps> = ({ lang, onNavigate }) => {
  const content = {
    TR: {
      tagline: "SİVRİHİSAR HAVA GÖSTERİLERİ'NE",
      title: "Ulaşım",
      landTitle: "Karadan Ulaşım",
      //shmArrival: "S.H.M. Varış",
      shmArrivalImage: "/images/ulasim-2.jpeg",
      //airshowArrival: "SHG AIRSHOW ALANINA ULAŞIM",
      //airshowArrivalImage: "/images/Yeni Yol - TR.jpeg",
      //landWarning: "SHG Airshow alanına ulaşım, yukarıda gösterilen yol üzerinden çift yönlü giriş ve çıkışlar şeklinde sağlanacaktır.\n Gösteri emniyeti sebebiyle, yol üzerinde araç parkına artık izin verilmeyecektir.",
      airTitle: "Havadan Ulaşım",
      technical: {
        coords: "S.H.M. Koordinatları",
        tower: "Artan Kule",
        elev: "Rakım",
        runwayDir: "Pist Yönleri",
        runwayLen: "Pist Uzunluğu",
        asphalt: "Asfalt"
      },
      //downloadAip: "AIP dökümanını indir",
      visitWeb: "S.H.M. WEB SİTESİ",
      back: "ANA SAYFAYA DÖN"
    },
    EN: {
      tagline: "JOURNEY TO SHG AIRSHOW",
      title: "TRANSPORTATION",
      landTitle: "Land Transportation",
      shmArrival: "S.H.M. Arrival",
      shmArrivalImage: "/images/ulasim_en.jpeg",
      //airshowArrival: "SHG AIRSHOW ARRIVAL",
      //airshowArrivalImage: "/images/Yeni Yol - EN.jpeg",
      //landWarning: "Access to the SHG Airshow area will be provided via the new road shown above, in one direction only. Vehicles will proceed from the right side of the West Apron.\n\nExits from the SHG Airshow area will also be made via the old road indicated above, in one direction only.\n\nDue to show safety, vehicle parking on the old road is no longer permitted.",
      airTitle: "Air Transportation",
      technical: {
        coords: "S.H.M. Coordinates",
        tower: "Artan Tower",
        elev: "Elevation",
        runwayDir: "Runway Directions",
        runwayLen: "Runway Length",
        asphalt: "Asphalt"
      },
      //downloadAip: "Download AIP Document",
      visitWeb: "OFFICIAL WEBSITE",
      back: "BACK TO HOME"
    }
  }[lang];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500">
      {/* Hero Header */}
      <div className="w-full h-[35vh] md:h-[50vh] overflow-hidden relative">
        <img
          src="/images/05-pist-shm.jpg"
          className="w-full h-full object-cover"
          alt="Aerial Transportation"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-black/20"></div>
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

        {/* 1- Land Transportation */}
        <section className="mb-24">
          <h2 className="text-3xl font-black text-secondary dark:text-white mb-8 flex items-center gap-4">
            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">1</span>
            {content.landTitle}
          </h2>

          <h3 className="text-2xl font-black text-secondary dark:text-white mb-4 text-center uppercase">
            {content.shmArrival}
          </h3>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5 mb-12 group">
            <img
              src={content.shmArrivalImage}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              alt="Transportation Map"
            />
          </div>

          {/* <h3 className="text-2xl font-black text-secondary dark:text-white mb-4 text-center uppercase">
            {content.airshowArrival}
          </h3>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/5 mb-8 group">
            <img
              src={content.airshowArrivalImage}
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              alt="New Road"
            />
          </div>

          <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-primary p-6 rounded-r-xl">
            <div className="flex items-start gap-2">
              <span className="material-icons text-red-700 dark:text-red-400 mt-0.5">error_outline</span>
              <p className="text-base font-medium text-red-700 dark:text-red-400 whitespace-pre-line">
                {content.landWarning}
              </p>
            </div>
          </div> */}
        </section>

        {/* 2- Air Transportation */}
        <section className="mb-24">
          <h2 className="text-3xl font-black text-secondary dark:text-white mb-8 flex items-center gap-4">
            <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm">2</span>
            {content.airTitle}
          </h2>

          <div className="bg-secondary dark:bg-black/40 rounded-3xl p-10 shadow-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <span className="material-icons text-[160px]">flight</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase mb-2">{content.technical.coords}</h4>
                  <p className="text-2xl font-black text-white font-mono">N 39°17'59.29''</p>
                  <p className="text-2xl font-black text-white font-mono">E 31°29'38.50''</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase mb-2">{content.technical.tower}</h4>
                  <p className="text-3xl font-black text-primary">131,625 MHz</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase mb-2">{content.technical.elev}</h4>
                  <p className="text-2xl font-black text-white">2.790 Feet</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase mb-2">{content.technical.runwayDir}</h4>
                    <p className="text-2xl font-black text-white">05 - 23</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-500 tracking-[0.3em] uppercase mb-2">{content.technical.runwayLen}</h4>
                    <p className="text-xl font-black text-white leading-tight">1810 m x 32 m <span className="text-xs text-primary block uppercase">({content.technical.asphalt})</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-12 pt-8 border-t border-white/10">
              <a 
                href="/SHM_AIP.pdf" 
                download="SHM_AIP.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer inline-flex"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary transition-all">
                  <span className="material-icons text-primary group-hover:text-white transition-colors">description</span>
                </div>
                <span className="text-sm font-black text-white tracking-widest uppercase group-hover:text-primary transition-colors">
                  {content.downloadAip}
                </span>
              </a>
            </div> */}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <a
              href="https://shm.aero/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary text-white font-black py-5 px-12 rounded-xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 text-center uppercase tracking-widest text-sm"
            >
              {content.visitWeb}
            </a>
          </div>
        </section>


        {/* Static Map Image */}
        <section className="mb-24">
          <img
            src="/images/map.png"
            alt="Sivrihisar Havacılık Merkezi Haritası"
            className="w-full h-auto"
          />
        </section>

        <div className="pt-16 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        </div>

        {/* CTA Section */}
        <section className="mt-32 px-4 md:px-6 max-w-5xl mx-auto pb-24">
          <div className="relative py-8 md:py-12 px-4 md:px-8 bg-primary text-white text-center overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
            <div className="relative z-10">
              <button
                onClick={() => onNavigate?.("tickets")}
                className="bg-white text-primary font-black py-4 md:py-6 px-8 md:px-20 rounded-lg md:rounded-xl hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl uppercase tracking-[0.1em] md:tracking-[0.2em] text-base md:text-lg cursor-pointer w-full md:w-auto"
              >
                {lang === "TR" ? "BİLET AL" : "BUY TICKET"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Transport;