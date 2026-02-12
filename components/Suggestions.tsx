import React from 'react';
import { Language } from '../App';
import { 
  Armchair, 
  Umbrella, 
  BaseballCap, 
  Sunglasses, 
  Drop,
  EarSlash
} from '@phosphor-icons/react';

interface SuggestionsProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({ lang, onNavigate }) => {
  const translations = {
    title: lang === 'TR' ? "Öneriler" : "Suggestions",
    intro: lang === 'TR' 
      ? "Değerli SHG Airshow izleyicileri, SHG Airshow'u en rahat ve en keyifli şekilde izlemeniz için aşağıdakileri yanınızda getirmenizi öneririz."
      : "Dear SHG Airshow spectators, we recommend bringing the following with you to watch the SHG Airshow in the most comfortable and enjoyable way.",
    items: lang === 'TR' ? [
      { name: "Katlanabilir Sandalye", icon: Armchair },
      { name: "Şemsiye", icon: Umbrella },
      { name: "Şapka", icon: BaseballCap },
      { name: "Güneş Gözlüğü", icon: Sunglasses },
      { name: "Güneş Kremi", icon: Drop, desc: "Güneşten korunmak için." },
      { name: "Kulak Tıkacı", icon: EarSlash, desc: "Jet gösterileri sırasında önerilir." }
    ] : [
      { name: "Folding Chair", icon: Armchair },
      { name: "Umbrella", icon: Umbrella },
      { name: "Hat", icon: BaseballCap },
      { name: "Sunglasses", icon: Sunglasses },
      { name: "Sunscreen", icon: Drop, desc: "To protect from the sun." },
      { name: "Earplugs", icon: EarSlash, desc: "Recommended to protect against jet displays." }
    ],
    closing: lang === 'TR' ? "Keyifli seyirler dileriz." : "We wish you an enjoyable time.",
    back: lang === 'TR' ? "ANA SAYFAYA DÖN" : "BACK TO HOME"
  };

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32">
      {/* Hero Header */}
      <div className="w-full h-[45vh] md:h-[65vh] overflow-hidden relative">
        <img 
          src="/images/seyirci-2.jpg" 
          className="w-full h-full object-cover grayscale opacity-80"
          alt="Outdoor Events"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-black/30"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-32 relative z-10">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8">
            {translations.title}<span className="text-primary">.</span>
          </h1>
          <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-8 rounded-r-3xl mb-12">
            <p className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 leading-relaxed italic">
              {translations.intro}
            </p>
          </div>
          <div className="w-16 h-1.5 bg-primary"></div>
        </header>

        {/* Suggestion Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {translations.items.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="group bg-gray-50 dark:bg-gray-900/40 p-10 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-xl hover:border-primary/50 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500">
                  <IconComponent 
                    size={32} 
                    weight="duotone"
                    className="text-primary group-hover:text-white transition-colors duration-500"
                  />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">
                  {item.name}
                </h3>
                {item.desc && (
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing Message */}
        <div className="text-center mb-32">
          <p className="text-3xl md:text-5xl font-black text-secondary dark:text-white uppercase tracking-tighter">
            {translations.closing}
          </p>
        </div>

        {/* Footer Navigation */}
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

export default Suggestions;