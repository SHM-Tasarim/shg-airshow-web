import React from 'react';
import { Language } from '../App';

interface PartnersProps {
  lang: Language;
  onNavigate: (view: any) => void;
}

const Partners: React.FC<PartnersProps> = ({ lang, onNavigate }) => {
  const translations = {
    title: lang === 'TR' ? "ÇÖZÜM ORTAKLARI" : "PARTNERS",
    institutionalSubtitle: lang === 'TR' ? "DEĞERLİ DESTEKLERİYLE" : "INSTITUTIONAL PARTNERS",
    companiesSubtitle: lang === 'TR' ? "ÇÖZÜM ORTAKLARIMIZ" : "SUPPORTERS",
    alphabeticalHint: lang === 'TR' ? "(ALFABETİK SIRAYLA)" : "(IN ALPHABETICAL ORDER)",
    fuelSponsorsTitle: lang === 'TR' ? "BİREYSEL YAKIT SPONSORLARI" : "INDIVIDUAL FUEL SPONSORS",
    fuelSponsorsDonationInfo: lang === 'TR' 
      ? 'SHG Airshow 2025 için "BİREYSEL YAKIT SPONSORU" olmak isterseniz, dilediğiniz miktarı Sivrihisar Havacılık Kulübü\'ne bağışta bulunabilirsiniz ve sizin de adınız aşağıda yayınlanabilir.'
      : 'If you would like to become an "INDIVIDUAL FUEL SPONSOR" for SHG Airshow 2025, you can donate any amount to Sivrihisar Aviation Club and your name can also be published below.',
    fuelSponsorsDonationContact: "info@shm.aero",
    fuelSponsorsDonationContactLabel: lang === 'TR'
      ? "Detaylı bilgi için:"
      : "For more information:",
    fuelSponsorsDonationThanks: lang === 'TR'
      ? "Teşekkürlerimizle, Sivrihisar Havacılık Kulübü Yönetim Kurulu"
      : "With our gratitude, Sivrihisar Aviation Club Board of Directors",
    fuelSponsorsHeading: lang === 'TR' 
      ? "SHG Airshow 2026 \"Bireysel Yakıt Sponsorlarını\" şükranla sunar:" 
      : "SHG Airshow 2026 gratefully presents 'Individual Fuel Sponsors':",
    fuelSponsorsSort: lang === 'TR' ? "(Soyadına göre alfabetik sırayla)" : "(In alphabetical order by surname)",
    back: lang === 'TR' ? "ANA SAYFAYA DÖN" : "BACK TO HOME"
  };

  const institutionalLogos = [
    { name: "Ulaştırma Bakanlığı", logo: "/images/ulastirma-bakanligi.avif" },
    { name: "MSB", logo: "/images/msb.png" },
    { name: "TSK", logo: "/images/tsk.png" },
    { name: "THK", logo: "/images/thk.png" },
    { name: "SHGM", logo: "/images/shgm.png" },
    { name: "Eskişehir Valiliği", logo: "/images/esk-valiligi.png" },
    { name: "Sivrihisar Kaymakamlığı", logo: "/images/siv-kay.png" },
    { name: "Eskişehir BB", logo: "/images/es-bel.png" },
    { name: "Sivrihisar Bel.", logo: "/images/siv-bel.png" },
    { name: "Odunpazarı Bel.", logo: "/images/odun-paz-bel.svg" },
    { name: "Tepebaşı Bel.", logo: "/images/esk-tep-bel.png" },
    { name: "Et Bel.", logo: "/images/et-bel.png" },
  ];

  const companyLogos = [
    { name: "Acromach", logo: "/images/acromach.png" },
    { name: "AirFlow Performance", logo: "/images/airflow.png" },
    { name: "Barry Controls", logo: "/images/barry-controls.png" },
    { name: "Cinema Pink", logo: "/images/cinemapink.png" },
    { name: "Dükkan", logo: "/images/dukkan.png" },
    { name: "Good Year", logo: "/images/goodyear.png" },
    { name: "Google", logo: "/images/google.png" },
    { name: "Keskinler", logo: "/images/keskinler.png" },
    { name: "Ly-Con", logo: "/images/ly-con.png" },
    { name: "Mach Aviation", logo: "/images/mach.png" },
    { name: "M.S.Ö. Havacılık ve Uzay Müzesi", logo: "/images/mso-2.png" },
    { name: "Ofis Tekin", logo: "/images/ofis-tekin.png" },
  ];

  const fuelSponsors = [
    "Hanife AZGUN", "Ali AYDIN", "Hayrunnisa BOSTAN", "Fatma COŞKUN", "Kibar COŞKUN",
    "Özlem DİKMEN", "Ahmet Can DURUOĞLU", "Mustafa Naim DURUOĞLU", "Selma DÜZGÜN", "Atiye Nilgün GÖKÇEK",
    "Masal KOZAK", "Güler OSMANOĞLU", "Mustafa Ali OSMANOĞLU", "Hacer ÖZDEMİR", "İsmet ÖZİPEK",
    "Sevgi ÖZSOY", "Belkıs ÖZTÜRK", "Ali Haydar SUYABAKAN", "Hayrunnisa ŞEN", "Sibel ŞEN",
    "Ahmet TAYGUN", "Candan Esra TAYGUN", "Ali İsmet TEKİN", "Ceyda TEKİN", "Süheyla TEKİN",
    "Şermin TEKİN", "Nimet ULUSOY", "Ali Sadi ÜNSAL", "Elçin VERİM", "Sertan YILMAZ"
  ].sort((a, b) => {
    const lastNameA = a.split(' ').pop() || '';
    const lastNameB = b.split(' ').pop() || '';
    return lastNameA.localeCompare(lastNameB);
  });

  const columns: string[][] = [
    fuelSponsors.slice(0, 8),
    fuelSponsors.slice(8, 16),
    fuelSponsors.slice(16, 24),
    fuelSponsors.slice(24, 30)
  ];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32">
      <div className="w-full h-[45vh] md:h-[65vh] overflow-hidden relative">
        <img 
          src="/images/seyirci.jpg" 
          className="w-full h-full object-cover"
          alt="Partnership Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-black/30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
        <header className="mb-20">
          <h1 className="text-2xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8 uppercase">
            {translations.title}<span className="text-primary">.</span>
          </h1>
          <div className="w-16 h-1 bg-primary"></div>
        </header>

        {/* KISIM 1: Resmi Kurumlar */}
        <section className="mb-24">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xl md:text-2xl font-black text-secondary dark:text-white uppercase tracking-widest">
              {translations.institutionalSubtitle}
            </h2>
            <div className="flex-grow h-px bg-gray-100 dark:bg-white/5"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {institutionalLogos.map((partner, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 dark:bg-gray-900/40 p-8 rounded-2xl flex items-center justify-center border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all group"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-14 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* KISIM 2: Sponsor Şirketler */}
        <section className="mb-32">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-12">
            <h2 className="text-xl md:text-2xl font-black text-secondary dark:text-white uppercase tracking-widest leading-none">
              {translations.companiesSubtitle}
            </h2>
            <span className="text-primary font-black text-[10px] md:text-xs tracking-widest uppercase">
              {translations.alphabeticalHint}
            </span>
            <div className="flex-grow h-px bg-gray-100 dark:bg-white/5 min-w-[50px]"></div>
          </div>

          {/* Company Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {companyLogos.map((company, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 dark:bg-gray-900/40 p-6 rounded-2xl flex items-center justify-center border border-gray-100 dark:border-gray-800 hover:border-primary shadow-sm hover:shadow-xl transition-all group min-h-[160px]"
              >
                {company.logo.includes('company') ? (
                    <span className="text-gray-400 font-bold text-sm uppercase tracking-widest opacity-40 group-hover:opacity-100">{company.name}</span>
                ) : (
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="max-h-20 md:max-h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* KISIM 3: Bireysel Yakıt Sponsorları */}
        <section className="mb-32">
          <div className="bg-secondary dark:bg-black/40 rounded-[3rem] p-10 md:p-20 shadow-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none texture-bg"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">
                  {translations.fuelSponsorsTitle}
                </h2>
                
                {/* Bağış Bilgi Kutusu */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-10 border border-white/10 max-w-3xl mx-auto">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                    {translations.fuelSponsorsDonationInfo}
                  </p>
                  <p className="text-gray-400 text-sm md:text-base mb-2">
                    {translations.fuelSponsorsDonationContactLabel}{' '}
                    <a 
                      href="mailto:info@shm.aero" 
                      className="text-primary hover:text-primary/80 font-bold transition-colors"
                    >
                      {translations.fuelSponsorsDonationContact}
                    </a>
                  </p>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
                    {translations.fuelSponsorsDonationThanks}
                  </p>
                </div>

                <p className="text-xl text-gray-400 font-bold max-w-2xl mx-auto leading-relaxed">
                  {translations.fuelSponsorsHeading}
                </p>
                <p className="text-primary font-black tracking-widest text-[10px] uppercase mt-4">
                  {translations.fuelSponsorsSort}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8">
                {columns.map((column, colIdx) => (
                  <div key={colIdx} className="flex flex-col">
                    {column.map((name, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-3 border-b border-white/5 py-3 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors flex-shrink-0"></span>
                        <span className="text-white/80 group-hover:text-white transition-colors font-bold text-sm tracking-wide whitespace-nowrap">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Partners;