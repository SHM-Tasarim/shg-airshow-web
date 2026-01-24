import React from 'react';
import { Language } from '../App';

interface SchoolsProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const Schools: React.FC<SchoolsProps> = ({ lang, onNavigate }) => {
  const content = {
    TR: {
      title: "Okullara Özel",
      intro: "12 yaş altı öğrenci grupları ve öğretmenlere sunulan toplu bilet avantajları için info@shm.aero adresi üzerinden müracaat edebilirsiniz.",
      mainText: "Bu imkan yalnızca okul organizasyonları kapsamındaki toplu alımlarda geçerlidir.",
      contactBtn: "E-POSTA GÖNDER",
      emailSubject: "Okul Grupları Bilet Talebi"
    },
    EN: {
      title: "School Special",
      intro: "For group ticket advantages offered to student groups under 12 years old and teachers, you can apply via info@shm.aero.",
      mainText: "This opportunity is valid only for bulk purchases within school organizations. SHG Airshow is always there for our students to experience the passion of aviation on-site.",
      contactBtn: "SEND E-MAIL",
      emailSubject: "School Group Ticket Request"
    }
  }[lang];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32">
      {/* Hero Section */}
      <div className="w-full h-[45vh] md:h-[65vh] overflow-hidden relative">
        <img 
          src="/images/school-1.jpg" 
          className="w-full h-full object-cover opacity-90 saturate-[0.8]"
          alt="School Aviation Trip"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-black/30"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-24 relative z-10">
        <header className="mb-20">
          {/* Tagline */}
          <p className="text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4 text-center md:text-left">
            {content.tagline}
          </p>
          
          {/* Title */}
          <h1 className="text-4xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8 text-center md:text-left">
            {content.title}<span className="text-primary">.</span>
          </h1>
          
          {/* Intro Box*/}
          <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-3xl mb-12">
            <p className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 leading-relaxed italic">
              {content.intro}
            </p>
          </div>
          
          <div className="w-20 h-1.5 bg-primary mt-8 mx-auto md:mx-0"></div>
        </header>

        {/* Main Content Box */}
        <div className="mb-16">
          <div className="bg-gray-50 dark:bg-gray-900/40 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl relative overflow-hidden">
            {/* Arka plan icon */}
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <span className="material-icons text-[120px] text-primary">school</span>
            </div>
            
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium relative z-10">
              {content.mainText}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <section className="mb-32 text-center">
          <a 
            href={`mailto:info@shm.aero?subject=${encodeURIComponent(content.emailSubject)}`}
            className="inline-flex items-center gap-4 bg-primary text-white font-black py-6 px-14 rounded-2xl hover:bg-red-700 transition-all shadow-2xl shadow-primary/30 active:scale-95 uppercase tracking-widest text-sm"
          >
            <span className="material-icons text-2xl">send</span>
            {content.contactBtn}
          </a>
        </section>

      </div>
    </div>
  );
};

export default Schools;