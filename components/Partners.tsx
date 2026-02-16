import React from 'react';
import { Language } from '../App';
import { link } from 'fs';

interface PartnersProps {
  lang: Language;
  onNavigate: (view: any) => void;
}

const Partners: React.FC<PartnersProps> = ({ lang, onNavigate }) => {
  const translations = {
    title: lang === 'TR' ? "ÇÖZÜM ORTAKLARI" : "PARTNERS",
    institutionalSubtitle: lang === 'TR' ? "DEĞERLİ DESTEKLERİYLE" : "INSTITUTIONAL PARTNERS",
    companiesSubtitle: lang === 'TR' ? "ÇÖZÜM ORTAKLARIMIZ" : "SUPPORTERS",
    alphabeticalHint: lang === 'TR' ? "(Alfabetik Sırayla)" : "(In Alphabetical Order)",
    fuelSponsorsTitle: lang === 'TR' ? "BİREYSEL YAKIT SPONSORLUĞU" : "INDIVIDUAL FUEL SPONSORSHIP",
    fuelSponsorsDonationInfo: lang === 'TR' 
      ? 'SHG Airshow 2026 için "BİREYSEL YAKIT SPONSORU" olmak isterseniz, dilediğiniz miktarı Sivrihisar Havacılık Kulübü\'ne bağışta bulunabilirsiniz ve sizin de adınız aşağıda yayınlanabilir.'
      : 'If you would like to become an "INDIVIDUAL FUEL SPONSOR" for SHG Airshow 2026, you can donate any amount to Sivrihisar Aviation Club and your name can also be published below.',
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
  };

  const institutionalLogos = [
    { nameTR: "T.C. ULAŞTIRMA VE ALTYAPI BAKANLIĞI", nameEN: "REPUBLIC OF TÜRKİYE MINISTRY OF TRANSPORT AND INFRASTRUCTURE", logo: "/images/ulastirma-bakanligi.avif" },
    { nameTR: "T.C. MİLLÎ SAVUNMA BAKANLIĞI", nameEN: "REPUBLIC OF TÜRKİYE MINISTRY OF NATIONAL DEFENCE", logo: "/images/msb.png" },
    { nameTR: "TÜRK SİLAHLI KUVVETLERİ", nameEN: "TURKISH ARMED FORCES", logo: "/images/tsk.png" },
    { nameTR: "TÜRK HAVA KUVVETLERİ", nameEN: "TURKISH AIR FORCE", logo: "/images/thk.png" },
    { nameTR: "SİVİL HAVACILIK GENEL MÜDÜRLÜĞÜ", nameEN: "DIRECTORATE GENERAL OF CIVIL AVIATION", logo: "/images/shgm.png" },
    { nameTR: "T.C. ESKİŞEHİR VALİLİĞİ", nameEN: "GOVERNORSHIP OF ESKİŞEHİR", logo: "/images/esk-valiligi.png" },
    { nameTR: "T.C. SİVRİHİSAR KAYMAKAMLIĞI", nameEN: "DISTRICT GOVERNORSHIP OF SİVRİHİSAR", logo: "/images/siv-kay.png" },
    { nameTR: "ESKİŞEHİR BÜYÜKŞEHİR BELEDİYESİ", nameEN: "ESKİŞEHİR METROPOLITAN MUNICIPALITY", logo: "/images/es-bel.png" },
    { nameTR: "SİVRİHİSAR BELEDİYESİ", nameEN: "SİVRİHİSAR MUNICIPALITY", logo: "/images/siv-bel.png" },
    { nameTR: "TEPEBAŞI BELEDİYESİ", nameEN: "TEPEBAŞI MUNICIPALITY", logo: "/images/esk-tep-bel.png" },
  ];

  const companyLogos = [
    { name: "Acromach", logo: "/images/acromach.png", link: "https://www.seminozturk.com/" },
    { name: "Agense 190", logo: "/images/agense190-2.png", link: "https://www.agense190.com/" },
    { name: "AirFlow Performance", logo: "/images/airflow.png", link: "https://airflowperformance.com/" },
    { name: "Barry Controls", logo: "/images/barry-controls.png", link: "https://hutchinsonai.com/" },
    { name: "Cinema Pink", logo: "/images/cinemapink.png", link: "https://cinemapink.com.tr/" },
    { name: "Dükkan", logo: "/images/dukkan.png", link: "http://shop.msomuseum.com/" },
    { name: "Dynon", logo: "/images/dynon.png", link: "https://dynonavionics.com/home.php" },
    { name: "Good Year", logo: "/images/goodyear.png", link: "https://www.goodyear.eu/tr_tr/consumer.html#/" },
    { name: "Google", logo: "/images/google.png", link: "https://www.google.com/" },
    { name: "Keskinler", logo: "/images/keskinler.png", link: "https://www.keskinlerinsaat.com.tr/" },
    { name: "Ly-Con", logo: "/images/ly-con.png", link: "https://www.lycon.com/" },
    { name: "Mach Aviation", logo: "/images/mach.png", link: "http://www.mach.aero/" },
    { name: "M.S.Ö. Havacılık ve Uzay Müzesi", logo: "/images/mso-2.png", link: "https://msomuseum.com/" },
    //{ name: "Ofis Tekin", logo: "/images/ofis-tekin.png", link: "https://ofistekin.com/" },
    { name: "Trig", logo: "/images/trig-logo.png", link: "https://trig-avionics.com/" },
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

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 font-display">
      <div className="w-full h-[45vh] md:h-[65vh] overflow-hidden relative">
        <img 
          src="/images/focke-spitfire.jpg" 
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

        {/* KISIM 1: RESMİ KURUMLAR */}
        <section className="mb-24">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-xl md:text-2xl font-black text-secondary dark:text-white uppercase tracking-widest">
              {translations.institutionalSubtitle}
            </h2>
            <div className="flex-grow h-px bg-gray-100 dark:bg-white/5"></div>
          </div>

          {/* Flexbox ile ortaya hizalı grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {institutionalLogos.map((partner, idx) => (
              <div
                key={idx}
                className="bg-[#0b1120] dark:bg-[#0b1120] rounded-2xl flex flex-col items-center border border-white/5 hover:border-primary/50 transition-all group overflow-hidden w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
              >
                {/* Logo Alanı — sabit yükseklik ile çizgiler hizalı */}
                <div className="h-44 flex items-center justify-center w-full p-8">
                  <img
                    src={partner.logo}
                    alt={lang === 'TR' ? partner.nameTR : partner.nameEN}
                    className="max-h-24 w-auto object-contain transition-transform group-hover:scale-110 duration-500"
                  />
                </div>

                {/* Sabit Alt Bölüm */}
                <div className="w-full pb-8">
                  <div className="w-4/5 h-px bg-white/10 mx-auto mb-6"></div>
                  <p className="text-center text-[10px] md:text-[11px] font-bold text-gray-300 uppercase tracking-[0.15em] leading-relaxed px-6">
                    {lang === 'TR' ? partner.nameTR : partner.nameEN}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KISIM 2: SPONSOR ŞİRKETLER */}
        <section className="mb-32">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-12">
            <h2 className="text-xl md:text-2xl font-black text-secondary dark:text-white uppercase tracking-widest leading-none">
              {translations.companiesSubtitle}
            </h2>
            <span className="text-primary font-black text-[10px] md:text-xs tracking-widest">
              {translations.alphabeticalHint}
            </span>
            <div className="flex-grow h-px bg-gray-100 dark:bg-white/5 min-w-[50px]"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {companyLogos.map((company, idx) => {
              const cardContent = (
                <div
                  className="bg-gray-50 dark:bg-gray-900/40 p-6 rounded-2xl flex items-center justify-center border border-gray-100 dark:border-gray-800 hover:border-primary shadow-sm hover:shadow-xl transition-all group h-[160px]"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              );

              return company.link ? (
                <a key={idx} href={company.link} target="_blank" rel="noopener noreferrer">
                  {cardContent}
                </a>
              ) : (
                <div key={idx}>{cardContent}</div>
              );
            })}
          </div>
        </section>

        {/* KISIM 3: BİREYSEL YAKIT SPONSORLARI */}
        <section className="mb-32">
          <div className="bg-secondary dark:bg-black/40 rounded-[3rem] p-8 md:p-20 shadow-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none texture-bg"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">
                  {translations.fuelSponsorsTitle}
                </h2>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-10 border border-white/10 max-w-3xl mx-auto">
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-4">
                    {translations.fuelSponsorsDonationInfo}
                  </p>
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-4">
                    {translations.fuelSponsorsDonationContactLabel}{' '}
                    <a href="mailto:info@shm.aero" className="text-primary underline font-bold tracking-widest hover:text-white transition-colors">info@shm.aero</a>
                  </p>
                  <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12">
                {(() => {
                  const colCount = 4;
                  const perCol = Math.ceil(fuelSponsors.length / colCount);
                  const columns = Array.from({ length: colCount }, (_, i) =>
                    fuelSponsors.slice(i * perCol, (i + 1) * perCol)
                  );
                  return columns.map((col, colIdx) => (
                    <div key={colIdx}>
                      {col.map((name, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-3 border-b border-white/10 py-4 group"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform flex-shrink-0"></span>
                          <span className="text-white/80 group-hover:text-white transition-colors font-bold text-sm tracking-wide">
                            {name}
                          </span>
                        </div>
                      ))}
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        </section>

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

export default Partners;