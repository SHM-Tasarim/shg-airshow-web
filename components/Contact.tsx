import React from "react";
import { Language } from "../App";

interface ContactProps {
  lang: Language;
  onNavigate: (view: "home") => void;
}

const Contact: React.FC<ContactProps> = ({ lang, onNavigate }) => {
  const content = {
    TR: {
      tagline: "BİZE ULAŞIN",
      title: "İLETİŞİM & ULAŞIM",
      addressLabel: "ADRES",
      address:
        "Sivrihisar Havacılık Merkezi, Necati Artan Tesisleri, Sivrihisar / Eskişehir",
      phoneLabel: "TELEFON",
      emailLabel: "E-POSTA",
      mapTitle: "KONUM",
      back: "ANA SAYFAYA DÖN",
      landTitle: "Karadan Ulaşım",
      shmArrival: "S.H.M. Varış",
      shmArrivalImage: "/images/ulasim-2.jpeg",
      shgArrival: "SHG AIRSHOW Alanına Varış",
      shgArrivalImage: "/images/ulasim-3.jpeg",
      shgArrivalNote: "Gösteri emniyeti sebebiyle, yol üzerinde araç parkına izin verilmeyecektir.",
      airTitle: "Havadan Ulaşım",
      technical: {
        coords: "S.H.M. Koordinatları",
        tower: "Artan Kule",
        elev: "Rakım",
        runwayDir: "Pist Yönleri",
        runwayLen: "Pist Uzunluğu",
        asphalt: "Asfalt"
      },
      airWarning: "Havadan gelen trafiklerin, S.H.M. web sitesinde yer alan yaklaşma prosedürlerini incelemeleri ve Display Director Aysan Keskin ile temas kurularak SLOT alınması gerekmektedir.",
      directorMailLabel: "SHG Display Director mail adresi: ",
      visitWeb: "S.H.M. WEB SİTESİ",
    },
    EN: {
      tagline: "GET IN TOUCH",
      title: "CONTACT & TRANSPORTATION",
      addressLabel: "ADDRESS",
      address:
        "Sivrihisar Aviation Center, Necati Artan Facilities, Sivrihisar / Eskisehir",
      phoneLabel: "PHONE",
      emailLabel: "EMAIL",
      mapTitle: "LOCATION",
      back: "BACK TO HOME",
      landTitle: "Land Transportation",
      shmArrival: "S.H.M. Arrival",
      shmArrivalImage: "/images/ulasim-2-en.png",
      shgArrival: "Arrival to SHG Airshow Area",
      shgArrivalImage: "/images/ulasim-3.jpeg",
      shgArrivalNote: "For show safety reasons, roadside parking will not be permitted.",
      airTitle: "Air Transportation",
      technical: {
        coords: "S.H.M. Coordinates",
        tower: "Artan Tower",
        elev: "Elevation",
        runwayDir: "Runway Directions",
        runwayLen: "Runway Length",
        asphalt: "Asphalt"
      },
      airWarning: "Arriving air traffic must review the arrival procedures on the S.H.M. website and contact the Display Director.",
      directorMailLabel: "SHG Display Director email: ",
      visitWeb: "S.H.M. OFFICIAL WEBSITE",
    },
  }[lang];

  return (
    <div className='bg-white dark:bg-background-dark transition-colors duration-500'>
      {/* Hero Image Section */}
      <div className='w-full h-[35vh] md:h-[50vh] overflow-hidden relative'>
        <img
          src='/images/contact.jpg'
          className='w-full h-full object-cover'
          alt='Aviation Control Tower'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-black/20'></div>
      </div>

      <div className='max-w-6xl mx-auto px-6 -mt-32 relative z-10'>
        {/* Header Section */}
        <header className='mb-16'>
          <p className='text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4'>
            {content.tagline}
          </p>
          <h1 className='text-4xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8'>
            {content.title}
            <span className='text-primary'>.</span>
          </h1>
          <div className='w-16 h-1 bg-primary'></div>
        </header>

        {/* 1. İletişim Bilgi Kartları */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-24'>
          <div className='bg-white dark:bg-gray-900/40 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl transition-all hover:border-primary group'>
            <span className='material-icons text-primary text-3xl mb-4 group-hover:scale-110 transition-transform'>
              location_on
            </span>
            <h4 className='text-[10px] font-black text-gray-500 tracking-widest uppercase mb-2'>
              {content.addressLabel}
            </h4>
            <p className='text-gray-900 dark:text-white font-bold leading-relaxed'>
              {content.address}
            </p>
          </div>

          <div className='bg-white dark:bg-gray-900/40 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl transition-all hover:border-primary group'>
            <span className='material-icons text-primary text-3xl mb-4 group-hover:scale-110 transition-transform'>
              call
            </span>
            <h4 className='text-[10px] font-black text-gray-500 tracking-widest uppercase mb-2'>
              {content.phoneLabel}
            </h4>
            <a
              href='tel:+902227113132'
              className='text-gray-900 dark:text-white font-black text-xl hover:text-primary transition-colors'
            >
              +90 222 711 31 32
            </a>
          </div>

          <div className='bg-white dark:bg-gray-900/40 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl transition-all hover:border-primary group'>
            <span className='material-icons text-primary text-3xl mb-4 group-hover:scale-110 transition-transform'>
              mail
            </span>
            <h4 className='text-[10px] font-black text-gray-500 tracking-widest uppercase mb-2'>
              {content.emailLabel}
            </h4>
            <a
              href='mailto:info@shm.aero'
              className='text-gray-900 dark:text-white font-black text-lg hover:text-primary transition-colors'
            >
              info@shm.aero
            </a>
          </div>
        </div>

        {/* 2. Karadan Ulaşım Bölümü */}
        <section className="mb-24">
          <h2 className="text-3xl font-black text-secondary dark:text-white mb-8 flex items-center gap-4">
            <span className="w-1.5 h-8 bg-primary"></span>
            {content.landTitle}
          </h2>

          {/* S.H.M. Varış */}
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-3xl p-6 md:p-10 border border-gray-100 dark:border-gray-800 shadow-inner mb-8">
            <h3 className="text-xl font-black text-secondary dark:text-white mb-6 uppercase text-center tracking-widest">
              {content.shmArrival}
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={content.shmArrivalImage}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                alt="Karadan Ulaşım Haritası"
              />
            </div>
          </div>

          {/* SHG Airshow Alanına Varış */}
          <div className="bg-gray-50 dark:bg-gray-900/20 rounded-3xl p-6 md:p-10 border border-gray-100 dark:border-gray-800 shadow-inner">
            <h3 className="text-xl font-black text-secondary dark:text-white mb-6 uppercase text-center tracking-widest">
              {content.shgArrival}
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={content.shgArrivalImage}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                alt="SHG Airshow Alanına Varış Haritası"
              />
            </div>

            {/* Kırmızı Uyarı Notu */}
            <div className="mt-6 flex items-start gap-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/40 rounded-xl p-4 md:p-5">
              <span className="material-icons text-red-600 text-xl flex-shrink-0 mt-0.5">warning</span>
              <p className="text-red-600 dark:text-red-400 font-bold text-sm md:text-base leading-relaxed">
                {content.shgArrivalNote}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Havadan Ulaşım Bölümü */}
        <section className="mb-24">
          <h2 className="text-3xl font-black text-secondary dark:text-white mb-8 flex items-center gap-4">
            <span className="w-1.5 h-8 bg-primary"></span>
            {content.airTitle}
          </h2>

          <div className="bg-secondary dark:bg-black/40 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <span className="material-icons text-[160px]">flight</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase mb-2">{content.technical.coords}</h4>
                  <p className="text-2xl font-black text-white font-mono">N 39°17'59.29''</p>
                  <p className="text-2xl font-black text-white font-mono">E 31°29'38.50''</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase mb-2">{content.technical.tower}</h4>
                  <p className="text-3xl font-black text-primary">131,625 MHz</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase mb-2">{content.technical.elev}</h4>
                  <p className="text-2xl font-black text-white">2.790 Feet</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase mb-2">{content.technical.runwayDir}</h4>
                    <p className="text-2xl font-black text-white">05 - 23</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-gray-400 tracking-[0.3em] uppercase mb-2">{content.technical.runwayLen}</h4>
                    <p className="text-xl font-black text-white leading-tight">1810 m x 32 m <span className="text-xs text-primary block uppercase">({content.technical.asphalt})</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center border-t border-white/10 pt-10 relative z-10">
              <p className="text-white text-center text-sm md:text-base font-medium leading-relaxed max-w-2xl mb-4">
                {content.airWarning}
              </p>
              <p className="text-gray-400 text-center text-sm md:text-base font-medium mb-8">
                {content.directorMailLabel}
                <a href="mailto:aysan@mach.aero" className="text-primary font-bold hover:underline ml-1">
                  aysan@mach.aero
                </a>
              </p>
              
              <a
                href="https://shm.aero/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white font-black py-4 px-10 rounded-xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 text-center uppercase tracking-widest text-sm"
              >
                {content.visitWeb}
              </a>
            </div>
          </div>
        </section>

        {/* 4. Konum/Harita Bölümü */}
        <section className='mb-24'>
          <h2 className='text-3xl font-black text-secondary dark:text-white mb-8 flex items-center gap-4'>
            <span className='w-1.5 h-8 bg-primary'></span>
            {content.mapTitle}
          </h2>
          <a
            href='https://www.google.com/maps/place/Sivrihisar+Havac%C4%B1l%C4%B1k+Merkezi/@39.297028,31.4842314,17z/data=!3m1!4b1!4m6!3m5!1s0x14cdfd073d852337:0xd2f34784f222f435!8m2!3d39.297027976231945!4d31.486420103337173!16s%2Fg%2F11gjx9l5cx'
            target='_blank'
            rel='noopener noreferrer'
            className='block w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-gray-700 transition-transform hover:scale-[1.01]'
          >
            <img
              src='/images/map.png'
              alt='Sivrihisar Havacılık Merkezi Haritası'
              className='w-full h-auto'
            />
          </a>
        </section>

        {/* CTA Section */}
        <section className="mt-32 mb-16 px-4 md:px-6 max-w-5xl mx-auto">
          <div className="relative py-8 md:py-12 px-4 md:px-8 bg-primary text-white text-center overflow-hidden rounded-xl md:rounded-2xl shadow-2xl">
            <div className="relative z-10">
              <button
                onClick={() => onNavigate?.("tickets" as any)}
                className="bg-white text-primary font-black py-4 md:py-6 px-8 md:px-20 rounded-lg md:rounded-xl hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl uppercase tracking-[0.1em] md:tracking-[0.2em] text-base md:text-lg cursor-pointer w-full md:w-auto"
              >
                {lang === "TR" ? "BİLET AL" : "BUY TICKET"}
              </button>
            </div>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className='mt-24 pt-16 pb-32 border-t border-gray-100 dark:border-white/5 text-center'>
          <button
            onClick={() => onNavigate("home")}
            className='inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold uppercase text-xs tracking-[0.2em] transition-colors'
          >
            <span className='material-icons text-lg'>arrow_back</span>
            {content.back}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;