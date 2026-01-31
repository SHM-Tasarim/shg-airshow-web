import React, { useState, useEffect } from "react";
import { Language } from "../App";

interface SponsorProps {
  lang: Language;
  onNavigate: (view: any) => void;
}

const Sponsor: React.FC<SponsorProps> = ({ lang, onNavigate }) => {
  const isTR = lang === "TR";
  const [scrollY, setScrollY] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openMilestone, setOpenMilestone] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    company: "",
    fullName: "",
    phone: "",
    email: "",
    interest: isTR ? "Sponsorluk" : "Sponsorship",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = {
    title: isTR ? "Sponsorluk" : "Sponsorship",
    introTitle: isTR ? "Markanızı Milyonlarla" : "Elevate Your Brand to",
    introTitleRed: isTR ? "Buluşturun" : "Connect",
    introDesc: isTR
      ? "Sivrihisar Hava Gösterileri, markanızı gökyüzünden milyonlara ulaştıran benzersiz bir platform sunuyor."
      : "SHG Airshow offer a unique platform to elevate your brand to millions from the sky.",
    stats: [
      { val: isTR ? "8 Milyon" : "8 Million", lab: isTR ? "CANLI YAYIN ERİŞİMİ" : "LIVE STREAM REACH", icon: "live_tv" },
      { val: "5 Milyon +", lab: isTR ? "DİJİTAL ERİŞİM" : "DIGITAL REACH", icon: "sensors" },
      //{ val: "50.000+", lab: isTR ? "ZİYARETÇİ" : "VISITORS", icon: "groups" },
      //{ val: isTR ? "100.000+" : "100,000+", lab: isTR ? "TOPLAM ZİYARETÇİ" : "TOTAL VISITORS", icon: "people" },

    ],
    statsTitle: isTR ? "SHG AIRSHOW REKLAM EŞDEĞERİ" : "SHG AIRSHOW AD. VALUE",
    // heritageTitleRed: isTR ? "2015" : "2015",
    // heritageTitle: isTR ? "'TEN BUGÜNE" : "SINCE",
    // galleryTitle: isTR ? "GÖSTERİDEN" : "SCENES FROM",
    // galleryTitleRed: isTR ? "KARELER" : "THE SHOW",
    milestones: [
      { year: "VECİHİ 14 REPLİKASI", desc: isTR ? "Tam 90 yıl sonra Türk Havacılık tarihine yeniden kazandırılan Vecihi 14 replikası, İLK gösteri uçuşunu SHG'de gerçekleştirdi." : "45,000+ physical visitors.", image: "/images/vecihi-14.jpg" },
      { year: "RAF EUROFIGHTER", desc: isTR ? "RAF EUROFIGHTER Türkiye'deki İLK gösteri uçuşunu SHG AIRSHOW'da gerçekleştirdi! " : "First civil airshow.", image: "/images/eurofighter-1.jpg" },
      { year: "SPITFIRE Mk.9", desc: isTR ? "Spitfire, 70 yıl sonra Türkiye semalarına geri dönerek gökyüzünde adeta tarihi bir gösteri sundu." : "Global aviation brand.", image: "/images/spitfire-mk-9.jpg" },
      { year: "WING WALKING", desc: isTR ? "Wing Walking \"KANAT YÜRÜYÜŞÜ\" Gösterisi Türkiye'de İLK defa izleyiciyle buluştu!" : "45,000+ physical visitors.", image: "/images/wing-walking-1.jpg" },
      { year: "MiG-15", desc: isTR ? "Avrupa'nın uçabilir durumdaki tek MiG-15bis'i İLK kez Türkiye semalarında gösteri uçuşu icra etti." : "", image: "/images/mig-1.jpg" },
      { year: "KOL UÇUŞU", desc: isTR ? "Spitfire, Mustang, Trojan ve Texan, SHG'de gerçekleştirdikleri dörtlü kol uçuşuyla gökyüzünde tarihe dokundu." : "Global aviation brand.", image: "/images/kol.jpg" },
    ],
    moreAchievements: isTR ? "VE ÇOK DAHA FAZLASI..." : "AND MUCH MORE...",
    deadline: isTR ? "15 Ağustos 2026" : "August 15, 2026",
    deadlineDesc: isTR ? "Yoğunluk sebebiyle katılım durumunuzu bu tarihe kadar bildirmenizi rica ederiz." : "Please notify your participation status by this date due to high demand.",
    deadlineTitle: isTR ? "SON BAŞVURU TARİHİ" : "APPLICATION DEADLINE",
    formHeader: isTR ? "SPONSOR BAŞVURU FORMU" : "SPONSOR APPLICATION FORM",
    formSuccess: isTR ? "BAŞVURU ALINDI" : "APPLICATION RECEIVED",
    formSuccessSub: isTR ? "Ekibimiz en kısa sürede sizinle iletişime geçecektir." : "Our team will contact you as soon as possible.",
    newForm: isTR ? "YENİ BAŞVURU" : "NEW APPLICATION",
    labelCompany: isTR ? "ŞİRKET ADI" : "COMPANY NAME",
    labelFullName: isTR ? "AD SOYAD" : "FULL NAME",
    labelContact: isTR ? "TELEFON NUMARASI" : "PHONE NUMBER",
    labelEmail: isTR ? "E-POSTA" : "E-MAIL",
    labelInterest: isTR ? "İLGİ ALANI" : "INTEREST TYPE",
    labelMessage: isTR ? "MESAJ" : "MESSAGE",
    btnSubmit: isTR ? "GÖNDER" : "SEND",
    btnSending: isTR ? "GÖNDERİLİYOR..." : "SENDING...",
    interests: isTR ? ["Sponsorluk"] : ["Sponsorship"]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "df1a22f9-ef96-462a-ae35-2131be9e366a",
          subject: `New Sponsorship Application: ${formData.company}`,
          from_name: formData.name,
          ...formData
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ company: "", fullName: "", phone: "", email: "", interest: t.interests[0], message: "" });
      } else {
        setError(isTR ? "Bir hata oluştu." : "An error occurred.");
      }
    } catch (err) {
      setError(isTR ? "Sunucuya bağlanılamadı." : "Connection failed.");
    } finally {
      setIsSending(false);
    }
  };

  // const galleryImages = [
  //   "/images/sponsor-1.jpg",
  //   "/images/sponsor-2.jpg",
  //   "/images/sponsor-3.jpg",
  //   "/images/sponsor-4.jpg",
  //   "/images/hero-1.jpg",
  //   "/images/hero-2.jpg",
  // ];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32">

      {/* --- Hero Section --- */}
      <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden relative">
        <img
          src="/images/sponsor-2.jpg"
          className="w-full h-full object-cover"
          style={{ transform: `scale(1.1) translateY(${scrollY * 0.1}px)` }}
          alt="SHG Airshow Sponsor"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-black/40"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
        <header className="mb-20">
          <h1 className="text-2xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8">
            {t.title}<span className="text-primary">.</span>
          </h1>
          <div className="w-24 h-2 bg-primary"></div>
        </header>

        {/* --- Intro & Stats --- */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-secondary dark:text-white uppercase tracking-tight">
                {t.introTitle} <span className="text-primary">{t.introTitleRed}</span>
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-200 font-bold italic border-l-8 border-primary pl-8">
                {t.introDesc}
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/5 space-y-8 shadow-xl">
              <div className="text-center mb-4">
                <p className="text-lg md:text-xl font-black text-secondary dark:text-white uppercase tracking-tight">
                  SHG AIRSHOW
                </p>
                <p className="text-sm md:text-base font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {isTR ? "REKLAM EŞDEĞERİ" : "AD. VALUE"}
                </p>
              </div>
              {t.stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <span className="material-icons text-primary text-4xl">{stat.icon}</span>
                  <div>
                    <div className="text-2xl md:text-3xl font-black text-secondary dark:text-white leading-none uppercase">{stat.val}</div>
                    <div className="text-[10px] md:text-sm font-bold text-gray-500 tracking-widest uppercase mt-1">{stat.lab}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Visitor Growth Chart --- */}
        <section className="mb-40">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                  <span className="text-primary">{isTR ? "ZİYARETÇİ" : "VISITOR"}</span> {isTR ? "GRAFİĞİ" : "GROWTH"}
                </h2>
                <p className="text-gray-400 font-bold text-sm">
                  {isTR ? "2015'ten bugüne Sivrihisar Hava Gösterileri ziyaretçi sayısının doğrusal artış trendini gösteren grafik" : "Visitor growth trend from 2015 to present"}
                </p>
              </div>

              {/* Desktop View (Original Bar Chart) */}
              <div className="hidden md:block max-w-4xl mx-auto">
                <div className="relative h-[350px] flex flex-col justify-end">
                  {/* Trend Line - Golden/Red gradient */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                    <defs>
                      <linearGradient id="trendGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#9CA3AF" />
                        <stop offset="100%" stopColor="#EF4444" />
                      </linearGradient>
                    </defs>
                    <polyline
                      points="5%,88% 14%,86% 23%,84% 32%,80% 41%,76% 50%,72% 59%,65% 68%,50% 77%,40% 86%,10% 95%,5%"
                      fill="none"
                      stroke="url(#trendGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      style={{ filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.5))' }}
                    />
                    {/* Arrow */}
                    <path
                      d="M 95%,5% L 92%,8% M 95%,5% L 94%,9%"
                      stroke="url(#trendGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>

                  {/* Bars */}
                  <div className="flex items-end justify-between gap-2 px-2 h-full">
                    {[
                      { year: "2015", value: 9000, height: 18 },
                      { year: "2017", value: 6000, height: 36 },
                      { year: "2018", value: 9000, height: 47 },
                      { year: "2019", value: 11000, height: 72 },
                      { year: "2020", value: 13000, height: 190 },
                      { year: "2021", value: 13000, height: 100 },
                      { year: "2022", value: 13000, height: 79 },
                      { year: "2023", value: 20000, height: 82 },
                      { year: "2024", value: 20000, height: 82 },
                      { year: "2025", value: 30000, height: 85, isProjected: true }
                    ].map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center justify-end group" style={{ height: '100%' }}>
                        {/* Bar */}
                        <div
                          className={`w-full ${item.isProjected ? 'bg-primary' : item.year === '2020' || item.year === '2021' ? '' : 'bg-blue-900'} rounded-t-lg transition-all duration-700 ease-out hover:brightness-110 relative overflow-hidden`}
                          style={{
                            height: `${item.height}%`,
                            ...(item.year === '2020' || item.year === '2021' ? { backgroundColor: '#9DA3AF' } : {})
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          {item.isProjected && (
                            <div className="absolute inset-0 bg-gradient-to-t from-red-700 to-primary animate-pulse"></div>
                          )}
                        </div>

                        {/* Tooltip for 2020 & 2021 */}
                        {(item.year === "2020" || item.year === "2021") && (
                          <div className="absolute bottom-full mb-4 w-64 bg-black/90 text-white text-sm p-4 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 text-center shadow-2xl border border-white/10 translate-y-2 group-hover:translate-y-0">
                            {isTR
                              ? "SHG Airshow pandemi sebebiyle 2020 ve 2021 senelerinde canlı yayınlanarak büyük kitlelere ulaştı."
                              : "SHG Airshow reached large audiences through live broadcasts in 2020 and 2021 due to the pandemic."}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black/90"></div>
                          </div>
                        )}

                        {/* Year label */}
                        <div className="mt-2 text-white font-black text-[10px] tracking-wider">
                          {item.year}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile View (Horizontal Bar Chart) */}
              <div className="md:hidden space-y-3 px-2">
                {[
                  { year: "2015", value: 9000, height: 18 },
                  { year: "2017", value: 6000, height: 36 },
                  { year: "2018", value: 9000, height: 47 },
                  { year: "2019", value: 11000, height: 72 },
                  { year: "2020", value: 13000, height: 190 },
                  { year: "2021", value: 13000, height: 100 },
                  { year: "2022", value: 13000, height: 79 },
                  { year: "2023", value: 20000, height: 82 },
                  { year: "2024", value: 20000, height: 82 },
                  { year: "2025", value: 30000, height: 85, isProjected: true }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-white font-bold text-xs w-8">{item.year}</span>
                    <div className="flex-1 h-6 bg-white/5 rounded-full overflow-hidden relative">
                      <div
                        className={`h-full ${item.isProjected ? 'bg-primary' : item.year === '2020' || item.year === '2021' ? '' : 'bg-blue-900'} rounded-full relative`}
                        style={{
                          width: `${item.height}%`,
                          ...(item.year === '2020' || item.year === '2021' ? { backgroundColor: '#9DA3AF' } : {})
                        }}
                      >
                        {item.isProjected && (
                          <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-primary animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pandemic Note */}
              <div className="mt-8 text-center">
                <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-bold italic">
                  {isTR
                    ? "SHG Airshow pandemi sebebiyle 2021 ve 2022 senelerinde canlı yayınlanarak büyük kitlelere ulaştı."
                    : "SHG Airshow reached large audiences through live broadcasts in 2021 and 2022 due to the pandemic."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Heritage (Zigzag Timeline) */}
        <section className="mb-40">
          <div className="text-center mb-20">
            {/* <h2 className="text-4xl md:text-6xl font-black text-secondary dark:text-white uppercase tracking-tighter">
              <span className="text-primary">{t.heritageTitleRed}</span> {t.heritageTitle}
            </h2> */}
          </div>

          {/* <div className="max-w-5xl mx-auto relative">
            {/* Vertical Center Line */}
          {/* <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 hidden md:block"></div>

            <div className="space-y-16 md:space-y-24">
              {t.milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={i} className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content Card */}
          {/* <div className={`w-full md:w-[calc(50%-3rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="border-2 rounded-2xl overflow-hidden transition-all duration-500 shadow-lg border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
                        <div className="px-6 py-5">
                          <div className="flex items-center justify-between w-full mb-3">
                            <span className="text-primary font-black text-lg">{m.year}</span>
                          </div>
                          <p className="text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-4">
                            {m.desc}
                          </p>

                          <button
                            onClick={() => setOpenMilestone(openMilestone === i ? null : i)}
                            className="flex items-center gap-2 text-sm font-bold text-primary hover:text-red-700 transition-colors"
                          >
                            <span className="material-icons text-xl">
                              {openMilestone === i ? 'close' : 'image'}
                            </span>
                            <span>{openMilestone === i ? (isTR ? 'Kapat' : 'Close') : (isTR ? 'Fotoğraf Göster' : 'Show Photo')}</span>
                          </button>
                        </div>

                        <div
                          className={`overflow-hidden transition-all duration-500 ${
                            openMilestone === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-6 pb-6">
                            <img
                              src={m.image}
                              className="w-full h-48 object-cover rounded-xl shadow-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center Dot */}
          {/* <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 transition-all duration-500 z-10 bg-secondary dark:bg-white border-gray-200 dark:border-gray-800"></div>
                  </div>
                );
              })}
            </div>

            {/* More Achievements Text */}
          {/* <div className="text-center mt-20">
              <h3 className="text-3xl md:text-5xl font-black text-secondary dark:text-white uppercase tracking-tight">
                {t.moreAchievements}
              </h3>
            </div>
          </div> */}
        </section>

        {/* --- MINIMALIST STAGGERED HORIZONTAL GALLERY --- */}
        {/* <section className="mb-40 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <h2 className="text-3xl md:text-5xl font-black text-secondary dark:text-white uppercase tracking-tighter">
              {t.galleryTitle} <span className="text-primary">{t.galleryTitleRed}</span>
            </h2>
            <div className="h-px flex-1 bg-gray-200 dark:bg-white/10 mx-8 hidden md:block mb-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-white/5 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    index % 2 !== 0 ? 'md:mt-12' : '' // Tek sayıdaki kartları aşağı kaydırarak asimetri yaratır
                }`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={src}
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                    alt={`Gallery ${index}`}
                  />
                </div>
                {/* İnce Alt Çizgi Efekti */}
        {/* <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </section> */}

        {/* --- Form Section --- */}
        <section className="max-w-5xl mx-auto">
          {/* ... Form içeriği aynı kalacak şekilde devam ediyor ... */}
          <div className="bg-secondary dark:bg-black/40 rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/5 relative overflow-hidden">
            {isSubmitted ? (
              <div className="text-center py-20 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                  <span className="material-icons text-white text-5xl">check</span>
                </div>
                <h2 className="text-4xl font-black text-white mb-4 uppercase">{t.formSuccess}</h2>
                <p className="text-gray-400 font-bold">{t.formSuccessSub}</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-8 text-primary font-black uppercase tracking-widest text-xs hover:underline transition-all">
                  {t.newForm}
                </button>
              </div>
            ) : (
              <div className="relative z-10">
                <header className="mb-12">
                  <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
                    {t.formHeader}
                  </h2>
                  <div className="w-16 h-1 bg-primary"></div>
                </header>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {error && <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-6 py-4 rounded-xl text-sm font-bold">{error}</div>}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase ml-2">{t.labelCompany}</label>
                      <input
                        type="text" required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase ml-2">{t.labelFullName}</label>
                      <input
                        type="text" required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase ml-2">{t.labelContact}</label>
                      <input
                        type="tel" required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase ml-2">{t.labelEmail}</label>
                      <input
                        type="email" required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase ml-2">{t.labelInterest}</label>
                    <select
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    >
                      {t.interests.map((opt, i) => (
                        <option key={i} value={opt} className="bg-secondary text-white">{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase ml-2">{t.labelMessage}</label>
                    <textarea
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit" disabled={isSending}
                    className="w-full bg-primary text-white font-black py-6 rounded-2xl hover:bg-red-700 transition-all shadow-xl shadow-primary/20 active:scale-95 uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {isSending && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>}
                    {isSending ? t.btnSending : t.btnSubmit}
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>
      </div >
    </div >
  );
};

export default Sponsor;