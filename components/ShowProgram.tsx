import React from 'react';
import { Language } from '../App';

interface ShowProgramProps {
  lang: Language;
  onNavigate?: (view: any, targetId?: string) => void;
}

const ShowProgram: React.FC<ShowProgramProps> = ({ lang, onNavigate }) => {

  const translations = {
    title: lang === 'TR' ? 'GÖSTERİ PROGRAMI' : 'SHOW PROGRAM',
    sep19: lang === 'TR' ? '19 EYLÜL 2026' : '19 SEPTEMBER 2026',
    sep20: lang === 'TR' ? '20 EYLÜL 2026' : '20 SEPTEMBER 2026',
    download: lang === 'TR' ? 'PROGRAMI İNDİR' : 'DOWNLOAD PROGRAM',
  };

  const programs = [
    { label: translations.sep19, pdf: '/19.09.2026 PROGRAM.pdf' },
    { label: translations.sep20, pdf: '/20.09.2026 PROGRAM.pdf' },
  ];

  return (
    <section id="program" className="py-12 md:py-20 font-display min-h-[60vh] relative">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight mb-16 animate-in fade-in slide-in-from-top-4 duration-700 uppercase">
          {translations.title}
        </h1>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          {programs.map((program, idx) => (
            <a
              key={idx}
              href={program.pdf}
              download
              className="group flex flex-col items-center gap-2 sm:gap-4 bg-white dark:bg-gray-900/40 border-2 border-gray-200 dark:border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-8 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 w-full sm:w-auto"
            >
              <span className="material-icons text-4xl sm:text-6xl text-gray-400 group-hover:text-primary transition-colors">
                picture_as_pdf
              </span>
              <span className="text-lg sm:text-2xl font-extrabold text-gray-900 dark:text-white uppercase tracking-wider">
                {program.label}
              </span>
              <span className="flex items-center gap-1 sm:gap-2 text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
                <span className="material-icons text-base sm:text-lg">file_download</span>
                {translations.download}
              </span>
            </a>
          ))}
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
    </section>
  );
};

export default ShowProgram;