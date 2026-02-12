import React from 'react';
import { Language } from '../App';

interface MuseumProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const Museum: React.FC<MuseumProps> = ({ lang, onNavigate }) => {
  const content = {
    TR: {
      tagline: "Türkiye'nin Uçan Havacılık Müzesi",
      title: (
        <>
          M.S.Ö.<br />Hava ve Uzay Müzesi
        </>
      ),
      history: "T.C. Kültür ve Turizm Bakanlığı Kültür Varlıkları ve Müzeler Genel Müdürlüğü Özel M.S.Ö. Hava ve Uzay Müzesi, Sivrihisar Havacılık Merkezi, Necati Artan Tesisleri'nde 2018 yılında yerini aldı.",
      collection: "Müzede, dünya havacılığında tarihi değerleri bulunan pek çok hava aracı sergilenmektedir.",
      uniqueFeature: "M.S.Ö. Hava ve Uzay Müzesi'ni ülkemizdeki diğer havacılık müzelerinden ayıran en önemli özelliği \"Uçan Müze\" olmasıdır.",
      machAir: "Bu özel niteliğin sürdürülebilirliğini ise Mach Air'in düzenli bakım ve teknik desteği sağlamaktadır.",
      technical: "MÜZE KİMLİĞİ",
      status: "Statü",
      statusDetail: "T.C. Kültür ve Turizm Bakanlığı Özel Müze",
      location: "Konum",
      locationDetail: "Sivrihisar Havacılık Merkezi, Necati Artan Tesisleri",
      concept: "Konsept",
      conceptDetail: "Uçan Müze (Flying Museum)",
      visitWeb: "msomuseum.com",
      back: "ANA SAYFAYA DÖN"
    },
    EN: {
      tagline: "TURKEY'S FLYING AVIATION MUSEUM",
      title: (
        <>
          M.S.Ö.<br />Air and Space Museum
        </>
      ),
      history: "The T.C. Ministry of Culture and Tourism Private M.S.Ö. Air and Space Museum took its place at Sivrihisar Aviation Center, Necati Artan Facilities in 2018.",
      collection: "Many aircraft with historic value in world aviation are exhibited in the museum.",
      uniqueFeature: "The most important feature that distinguishes M.S.Ö. Air and Space Museum from other aviation museums in our country is that it is a 'Flying Museum'.",
      machAir: "The sustainability of this special quality is ensured by the regular maintenance and technical support provided by Mach Air.",
      technical: "MUSEUM IDENTITY",
      status: "Status",
      statusDetail: "T.C. Ministry of Culture and Tourism Private Museum",
      location: "Location",
      locationDetail: "Sivrihisar Aviation Center, Necati Artan Facilities",
      concept: "Concept",
      conceptDetail: "Flying Museum",
      visitWeb: "OFFICIAL WEBSITE",
      back: "BACK TO HOME"
    }
  }[lang];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500">
      {/* Hero Image */}
      <div className="w-full h-[45vh] md:h-[65vh] overflow-hidden relative">
        <img
          src="/images/mso-lobby.jpg"
          className="w-full h-full object-cover"
          alt="M.S.Ö. Museum Aerial View"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        <header className="mb-16">
          <p className="text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4">
            {content.tagline}
          </p>
          <h1 className="text-2xl md:text-7xl lg:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8">
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

          {/* 2. YAZI: COLLECTION */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
            {content.collection}
          </p>

          {/* 3. YAZI: UNIQUE FEATURE */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
            {content.uniqueFeature}
          </p>

          {/* 2. RESİM ALANI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-xl group">
              <img
                src="/images/mso-dc3.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Museum Aircraft 1"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-[300px] shadow-xl group">
              <img
                src="/images/mso-mustang.jpg"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Museum Aircraft 2"
              />
            </div>
          </div>

          {/* 4. YAZI: MACH AIR */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium border-l-4 border-primary/20 pl-8">
            {content.machAir}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
          <a
            href="https://msomuseum.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-primary text-white font-black py-5 px-12 rounded-xl hover:bg-red-700 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 text-center uppercase tracking-widest text-sm"
          >
            {content.visitWeb}
          </a>
        </div>
      </div>

      {/* CTA Section - max-w-5xl, container dışında */}
      <section className="mt-32 px-4 max-w-5xl mx-auto pb-24">
        <div className="relative py-12 px-8 bg-primary text-white text-center overflow-hidden rounded-2xl shadow-2xl">
          <div className="relative z-10">
            <button
              onClick={() => onNavigate?.("tickets")}
              className="bg-white text-primary font-black py-6 px-20 rounded-xl hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl uppercase tracking-[0.2em] text-lg cursor-pointer"
            >
              {lang === "TR" ? "BİLET AL" : "BUY TICKET"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Museum;