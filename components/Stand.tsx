import React, { useState } from 'react';
import { Language } from '../App';

interface StandProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const Stand: React.FC<StandProps> = ({ lang, onNavigate }) => {
  const [activeAccordion, setActiveAccordion] = useState<'sponsor' | 'types' | null>(null);

  const content = {
    TR: {
      title: "Tanıtım ve Satış Standları",

      standIntroTitle: "SHG AIRSHOW 2026",
      standIntroText: " \"Seyircilerimizle\" doğrudan etikileşim kurarak firma ve kuruluşlara, marka bilinirliğini arttırtmak ve yeni işbirlikleri için önemli fırsatlar sunuyor.",

      // sponsorTitle: "SPONSORLUK",
      // sponsorDesc: "Markanızı gökyüzüne taşıyın ve havacılığın prestijini paylaşın.",
      // sponsorFeatures: [
      //   "Global Marka Görünürlüğü",
      //   "Özel VIP Protokol Alanı",
      //   "Medya ve Canlı Yayın Hakları",
      //   "Kurumsal Prestij Ortaklığı"
      // ],

      standTypesTitle: "STAND TÜRLERİ",
      standTypesDesc: "SHG Airshow, her sene birbirinden değerli katılımcıları ile uluslararası boyutta sesini duyurmaktadır.",
      standCommonFeatures: [
      ],

      promotionalTitle: "TANITIM STANDI",
      promotionalInfo: "Marka bilinirliği ve doğrudan iletişim odaklı.",
      commercialTitle: "SATIŞ STANDI",
      commercialInfo: "Ürün satışı ve ticari hacim genişletme odaklı.",

      // stats: [
      //   { label: "TOPLAM ZİYARETÇİ", value: "100.000+", icon: "groups" },
      //   { label: "CANLI YAYIN ERİŞİMİ", value: "8 Milyon", icon: "sensors" },
      //   { label: "GÜNCEL SEYİRCİ", value: "68.000", icon: "trending_up" }
      // ],
      stats: [],
      deadline: "15 Ağustos 2026",
      deadlineDesc: "Yoğunluk sebebiyle katılım durumunuzu bu tarihe kadar bildirmenizi rica ederiz.",
      back: "ANA SAYFAYA DÖN",
      applyBtn: "E-POSTA GÖNDER",
      clickToOpen: "DETAYLARI GÖRMEK İÇİN TIKLAYIN"
    },
    EN: {
      title: "Commercial Opportunities",

      standIntroTitle: "SHG AIRSHOW 2026",
      standIntroText: "Recognized as a global brand by being listed among airshows in Europe by the European Airshow Council (EAC), SHG Airshow opens its doors to visitors with a unique visual feast ranging from legendary aircraft of World War II to the most modern air vehicles, breathtaking aerobatic displays to formation flights!",

      hierarchyTitle: "COMMERCIAL OPPORTUNITIES",

      // sponsorTitle: "SPONSORSHIP",
      // sponsorDesc: "Take your brand to the skies and share the prestige of aviation.",
      // sponsorFeatures: [
      //   "Global Brand Visibility",
      //   "Exclusive VIP Protocol Area",
      //   "Media & Live Stream Rights",
      //   "Corporate Prestige Partnership"
      // ],

      standTypesTitle: "STAND TYPES",
      standTypesDesc: "Each year, SHG Airshow makes its voice heard internationally with its valuable participants. To date, over 100 institutions and companies have promoted their brands and gained commercial opportunities by taking place in stand areas.",
      standCommonFeatures: [

      ],

      promotionalTitle: "PROMOTIONAL STAND",
      promotionalInfo: "Focus on brand awareness and direct engagement.",
      commercialTitle: "COMMERCIAL STAND",
      commercialInfo: "Focus on product sales and commercial volume.",

      // stats: [
      //   { label: "TOTAL VISITORS", value: "100,000+", icon: "groups" },
      //   { label: "LIVE STREAM REACH", value: "8 Million", icon: "sensors" },
      //   { label: "CURRENT SPECTATORS", value: "68,000", icon: "trending_up" }
      // ],
      stats: [],
      deadline: "August 15, 2026",
      deadlineDesc: "Please notify your participation status by this date due to high demand.",
      back: "BACK TO HOME",
      applyBtn: "SEND E-MAIL",
      clickToOpen: "CLICK TO VIEW DETAILS"
    }
  }[lang];

  const toggleAccordion = (id: 'sponsor' | 'types') => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500">
      {/* Hero Section */}
      <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden relative">
        <img
          src="/images/stand.jpg"
          className="w-full h-full object-cover"
          alt="SHG Airshow Crowd"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-black/40"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
        <header className="mb-20">
          <h1 className="text-2xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8">
            {content.title}<span className="text-primary">.</span>
          </h1>
          <div className="w-24 h-2 bg-primary"></div>
        </header>

        {/* 1. TOP: Stand Participation Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-secondary dark:text-white uppercase tracking-tight">
                {content.standIntroTitle}
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-200 font-bold italic border-l-8 border-primary pl-8">
                {content.standIntroText}
              </p>
            </div>
            {/* Stats Sidebar */}
            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/10 space-y-4 self-start shadow-xl">
              <h3 className="text-lg font-black text-secondary dark:text-white uppercase tracking-widest mb-2 text-center">
                SHG AIRSHOW<br />
                {lang === 'TR' ? 'REKLAM EŞDEĞERİ' : 'AD EQUIVALENT'}
              </h3>
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                <span className="material-icons text-primary text-3xl">sensors</span>
                <div>
                  <div className="text-2xl font-black text-secondary dark:text-white leading-none">8 M+</div>
                  <div className="text-xs font-bold text-white tracking-widest uppercase mt-1">{lang === 'TR' ? 'CANLI YAYIN ERİŞİMİ' : 'LIVE STREAM REACH'}</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm">
                <span className="material-icons text-primary text-3xl">trending_up</span>
                <div>
                  <div className="text-2xl font-black text-secondary dark:text-white leading-none">5 M+</div>
                  <div className="text-xs font-bold text-white tracking-widest uppercase mt-1">{lang === 'TR' ? 'DİJİTAL ERİŞİM' : 'DIGITAL REACH'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. HIERARCHY: TİCARİ FIRSATLAR */}
        <div className="text-center mb-8 relative">
          <h2 className="text-4xl md:text-6xl font-black text-secondary dark:text-white mb-6 uppercase tracking-tighter">
            {content.hierarchyTitle}
          </h2>
        </div>

        {/* Accordion Sections */}
        <div className="max-w-5xl mx-auto space-y-6 mb-32">

          {/* ACCORDION 1: SPONSOR */}
          {/* <div className={`overflow-hidden rounded-[2.5rem] border transition-all duration-500 ${activeAccordion === 'sponsor' ? 'border-primary bg-secondary shadow-2xl scale-[1.02]' : 'border-white/5 bg-secondary/60 hover:border-primary/30'}`}>
            <button
              onClick={() => toggleAccordion('sponsor')}
              className="w-full flex items-center justify-between p-8 md:p-12 text-left outline-none"
            >
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${activeAccordion === 'sponsor' ? 'bg-primary' : 'bg-primary/20'}`}>
                  <span className={`material-icons text-3xl transition-colors ${activeAccordion === 'sponsor' ? 'text-white' : 'text-primary'}`}>verified</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">{content.sponsorTitle}</h3>
                  {activeAccordion !== 'sponsor' && (
                    <p className="text-[10px] font-bold text-primary tracking-widest uppercase mt-2">{content.clickToOpen}</p>
                  )}
                </div>
              </div>
              <span className={`material-icons text-4xl text-primary transition-transform duration-500 ${activeAccordion === 'sponsor' ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            <div className={`transition-all duration-500 overflow-hidden ${activeAccordion === 'sponsor' ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-8 md:p-12 pt-0 border-t border-white/5">
                <p className="text-lg text-gray-400 font-bold italic mb-10 border-l-4 border-primary pl-6">
                  {content.sponsorDesc}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {content.sponsorFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 group">
                      <span className="material-icons text-primary group-hover:scale-125 transition-transform">check_circle</span>
                      <span className="text-white font-bold text-sm tracking-wide">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}

          {/* ACCORDION 2: STANT TÜRLERİ */}
          <div className={`overflow-hidden rounded-[2.5rem] border transition-all duration-500 ${activeAccordion === 'types' ? 'border-primary bg-secondary shadow-2xl scale-[1.02]' : 'border-white/5 bg-secondary/60 hover:border-primary/30'}`}>
            <button
              onClick={() => toggleAccordion('types')}
              className="w-full flex items-center justify-between p-8 md:p-12 text-left outline-none"
            >
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors ${activeAccordion === 'types' ? 'bg-primary' : 'bg-primary/20'}`}>
                  <span className={`material-icons text-3xl transition-colors ${activeAccordion === 'types' ? 'text-white' : 'text-primary'}`}>grid_view</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-none">{content.standTypesTitle}</h3>
                  {activeAccordion !== 'types' && (
                    <p className="text-[10px] font-bold text-primary tracking-widest uppercase mt-2">{content.clickToOpen}</p>
                  )}
                </div>
              </div>
              <span className={`material-icons text-4xl text-primary transition-transform duration-500 ${activeAccordion === 'types' ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            <div className={`transition-all duration-500 overflow-hidden ${activeAccordion === 'types' ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-8 md:px-12 pb-8 md:pb-12 pt-2">

                {/* Sub-Branches Card Style (Promotional vs Commercial) - NOW FIRST */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                    <h4 className="text-sm font-black text-white uppercase">{content.promotionalTitle}</h4>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                    <h4 className="text-sm font-black text-white uppercase">{content.commercialTitle}</h4>
                  </div>
                </div>

                {/* Description Text - NOW AFTER CARDS */}
                <p className="text-lg text-gray-400 font-bold italic mb-10 pl-6">
                  {content.standTypesDesc}
                </p>

                {/* Common Features for Stand Types */}
                {content.standCommonFeatures.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {content.standCommonFeatures.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-white font-black text-[10px] tracking-widest uppercase">{f}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 text-center lg:grid-cols-1 gap-8 mb-16 mt-16">
          <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-4xl font-black text-secondary dark:text-white mb-4">
                <a href="mailto:info@shm.aero" className="hover:text-primary transition-colors">info@shm.aero</a>
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-bold">
                {lang === "TR" ? "Lütfen her türlü sorularınız için mail atabilirsiniz." : "Please feel free to email us for any questions."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stand;