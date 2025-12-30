import React from 'react';
import { Language } from '../App';

interface StandProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const Stand: React.FC<StandProps> = ({ lang, onNavigate }) => {
  const content = {
    TR: {
      tagline: "10. YIL: GÖKYÜZÜNDE DEV BULUŞMA",
      title: "Stand & Katılım",
      introTitle: "SHG AIRSHOW 2026",
      introText: "SHG Airshow / Sivrihisar Hava Gösterileri, her sene S.H.M. / Sivrihisar Havacılık Merkezi'nde organize edilmekte ve birbirinden değerli katılımcıları ile uluslararası boyutta sesini duyurmaktadır. Avrupa Hava Gösterileri Konseyi listesinde yer alan organizasyonumuz, Türkiye adına bir gurur kaynağıdır.",
      stats: [
        { label: "TOPLAM ZİYARETÇİ", value: "100.000+", icon: "groups" },
        { label: "CANLI YAYIN ERİŞİMİ", value: "8 Milyon", icon: "sensors" },
        { label: "GÜNCEL SEYİRCİ", value: "68.000", icon: "trending_up" }
      ],
      standTitle: "STAND KATILIM ŞARTLARI",
      standDesc: "Bugüne kadar 100'ü aşkın kurum ve şirket, SHG Airshow organizasyonlarında stant alanlarında yer alarak markalarını tanıtmış ve ticari fırsatlar elde etmiştir.",
      pricing: [
        {
          type: "Tanıtım Standı",
          desc: "Apronda tahsis edilecek 9 m² çadır stant.",
          features: ["Marka Tanıtımı", "Network", "Nitelikli Ziyaretçi"]
        },
        {
          type: "Ticari Satış Standı",
          desc: "Apronda tahsis edilecek 9 m² çadır stant.",
          features: ["Doğrudan Satış Yetkisi", "Ürün Sergileme", "Yüksek Trafik"]
        }
      ],
      additions: {
        title: "İLAVE SEÇENEKLER",
        items: [
          { name: "İlave Alan" },
          { name: "Ek Çadır" },
          { name: "Elektrik Bağlantısı" }
        ]
      },
      perks: "Her stant katılımcısına 19-20 Eylül tarihlerinde geçerli 3 adet ücretsiz bilet sağlanacaktır.",
      deadlineTitle: "ÖNEMLİ TARİHLER",
      deadline: "15 Ağustos 2026",
      deadlineDesc: "Yoğunluk sebebiyle katılım durumunuzu bu tarihe kadar bildirmenizi rica ederiz.",
      contractNote: "Stant tahsisi talebinize istinaden, firmalara resmi bir teklif gönderilecektir.",
      back: "ANA SAYFAYA DÖN",
      applyBtn: "BAŞVURU İÇİN E-POSTA GÖNDER"
    },
    EN: {
      tagline: "10TH YEAR: GIANT MEETING IN THE SKY",
      title: "Stand & Exhibition",
      introTitle: "SHG AIRSHOW 2026",
      introText: "SHG Airshow / Sivrihisar Airshows is organized annually at S.H.M. and makes its voice heard internationally. Being listed by the European Airshow Council, it is a source of pride for Turkey.",
      stats: [
        { label: "TOTAL VISITORS", value: "100,000+", icon: "groups" },
        { label: "LIVE STREAM REACH", value: "8 Million", icon: "sensors" },
        { label: "CURRENT SPECTATORS", value: "68,000", icon: "trending_up" }
      ],
      standTitle: "STAND PARTICIPATION TERMS",
      standDesc: "To date, more than 100 institutions and companies have promoted their brands and gained commercial opportunities in SHG Airshow stand areas.",
      pricing: [
        {
          type: "Promotional Stand",
          desc: "9 m² tent stand to be allocated on the apron.",
          features: ["Brand Promotion", "Network", "Qualified Visitors"]
        },
        {
          type: "Commercial Sales Stand",
          desc: "9 m² tent stand to be allocated on the apron.",
          features: ["Direct Sales Authorization", "Product Display", "High Traffic"]
        }
      ],
      additions: {
        title: "ADDITIONAL OPTIONS",
        items: [
          { name: "Additional Space (m²)" },
          { name: "Extra Tent (9 m²)" },
          { name: "Electricity Connection" }
        ]
      },
      perks: "Each stand participant will be provided with 3 free tickets valid for September 19-20.",
      deadlineTitle: "IMPORTANT DATES",
      deadline: "August 15, 2026",
      deadlineDesc: "Please notify your participation status by this date due to high demand.",
      contractNote: "Following your stand allocation request, a formal contract will be sent to companies.",
      back: "BACK TO HOME",
      applyBtn: "SEND E-MAIL FOR APPLICATION"
    }
  }[lang];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32">
      {/* Hero Section */}
      <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden relative">
        <img 
          src="/images/stand.jpg" 
          className="w-full h-full object-cover grayscale opacity-80"
          alt="SHG Airshow Crowd"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-black/40"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
        <header className="mb-20">
          <p className="text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4">
            {content.tagline}
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8">
            {content.title}<span className="text-primary">.</span>
          </h1>
          <div className="w-24 h-2 bg-primary"></div>
        </header>

        {/* Intro & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-secondary dark:text-white uppercase tracking-tight">
              {content.introTitle}
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-200 font-bold border-l-8 border-primary pl-8 italic">
              {content.introText}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5 flex items-center gap-6">
                <span className="material-icons text-primary text-3xl">{stat.icon}</span>
                <div>
                  <div className="text-2xl font-black text-secondary dark:text-white leading-none">{stat.value}</div>
                  <div className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-secondary dark:text-white mb-4 uppercase tracking-tight">
              {content.standTitle}
            </h2>
            <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
              {content.standDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {content.pricing.map((p, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900/60 p-12 rounded-[3rem] border-2 border-gray-100 dark:border-white/5 shadow-2xl relative overflow-hidden group hover:border-primary transition-all duration-500">
                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                  <span className="material-icons text-[150px]">storefront</span>
                </div>
                <h3 className="text-2xl font-black text-primary mb-2 uppercase">{p.type}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-bold mb-8 italic">{p.desc}</p>
                <ul className="space-y-4">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="material-icons text-primary text-sm">verified</span>
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Options Table */}
          <div className="bg-secondary dark:bg-black/40 rounded-3xl p-10 md:p-16 border border-white/5 shadow-3xl">
            <h3 className="text-xl font-black text-white mb-10 uppercase tracking-widest flex items-center gap-4">
              <span className="w-8 h-px bg-primary"></span>
              {content.additions.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {content.additions.items.map((item, idx) => (
                <div key={idx} className="border-l-2 border-white/10 pl-6 group">
                  <div className="text-sm font-black text-white uppercase tracking-widest mb-1">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perk & Deadline Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <div className="bg-primary/5 dark:bg-primary/10 p-10 rounded-[2.5rem] border border-primary/20">
             <span className="material-icons text-primary text-4xl mb-6">local_activity</span>
             <p className="text-xl font-black text-secondary dark:text-white leading-tight">
               {content.perks}
             </p>
          </div>
          <div className="bg-primary/5 dark:bg-primary/10 p-10 rounded-[2.5rem] border border-primary/20 relative overflow-hidden">             
            <div className="relative z-10">
              <h4 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4">{content.deadlineTitle}</h4>
              <div className="text-4xl font-black text-secondary dark:text-white mb-4">{content.deadline}</div>
              <p className="text-gray-500 dark:text-gray-400 font-bold">{content.deadlineDesc}</p>
            </div>
            <span className="absolute -bottom-10 -right-10 material-icons text-[150px] opacity-5 text-gray-400">event_available</span>
          </div>
        </div>

        {/* Application CTA */}
        <section className="mb-32 text-center">
          <p className="text-lg font-bold text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto italic">
            "{content.contractNote}"
          </p>
          <a 
            href="mailto:info@shm.aero" 
            className="inline-flex items-center gap-4 bg-primary text-white font-black py-6 px-14 rounded-2xl hover:bg-red-700 transition-all shadow-2xl shadow-primary/30 active:scale-95 uppercase tracking-widest text-sm"
          >
            <span className="material-icons text-2xl">alternate_email</span>
            {content.applyBtn}
          </a>
        </section>

        {/* Footer Navigation */}
        <div className="pt-16 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">          
        </div>
      </div>
    </div>
  );
};

export default Stand;