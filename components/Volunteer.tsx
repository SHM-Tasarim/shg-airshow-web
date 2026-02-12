import React from 'react';
import { Language } from '../App';

interface VolunteeringProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const Volunteering: React.FC<VolunteeringProps> = ({ lang, onNavigate }) => {
  const translations = {
    title: lang === 'TR' ? "Gönüllü Başvurusu" : "Volunteer Application",
    intro: lang === 'TR'
      ? "19-20 Eylül 2026 tarihlerinde 11'incisi düzenlenecek olan SHG Airshow 2026 / Sivrihisar Hava Gösterileri Organizasyonunda gönüllü olarak görev almak isteyen arkadaşlarımızın; isim, soy isim, yaş ve iletişim bilgilerini içeren başvuru e-postasını 15 Temmuz 2026 tarihine kadar info@shm.aero adresine göndermeleri rica olunur."
      : "For those who wish to participate as a volunteer in the 11th SHG Airshow 2026 / Sivrihisar Airshow to be held on September 19–20, 2026, please send a business e-mail containing your name, surname, age and contact information to info@shm.aero by July 15, 2026.",
    principlesTitle: lang === 'TR' ? "Gönüllü Tasviri" : "Volunteering Description",
    principles: lang === 'TR'
      ? `"Gönüllü" sıfatıyla, SHG Airshow organizasyonlarında görev almak isteyen kişilerin, tecrübelerini, maddi ve manevi imkanlarını hiçbir karşılık beklemeden paylaşmaya niyetli ve istekli oldukları kabul edilir.

"Gönüllü" sıfatıyla görev alan kişilerden, SHG Airshow tarafından düzenlenen her türlü etkinlik ve organizasyona katkı sağlamak amacıyla, verilen görevleri ayrım yapmaksızın kendi istek ve iradeleriyle yerine getirmeleri beklenir.

"Gönüllü" sıfatıyla görev alan kişiler, SHG Airshow tarafından verilen görevlerin icrası sebebiyle oluşan her türlü masrafları kendileri karşılarlar… Organizasyona ilave maddi yükler getirmezler.

"Gönüllü" sıfatıyla görev almak isteyen kişilerden, SHG Airshow'un profesyonel bir çalışanı olmamakla birlikte, üstlendikleri görev ne kadar basit olursa olsun bunu "Profesyonelce" yerine getirmeleri beklenir.`
      : `Under the title of "Volunteer", it is accepted that persons wishing to take part in SHG Airshow organizations are willing to share their experiences and resources without expecting any compensation.

Volunteers are expected to fulfill the tasks given without any discrimination, with their own will and desire, in order to contribute to all kinds of events and organizations organized by SHG Airshow.

Volunteers cover all kinds of expenses arising from the performance of the duties given by SHG Airshow... They do not bring additional financial burdens to the organization.

Even though they are not professional employees of SHG Airshow, volunteers are expected to fulfill their tasks "Professionally", no matter how simple the task is.`,
    applyTitle: lang === 'TR' ? "Gönüllü Olmak İçin" : "To Apply as a Volunteer",
    commitmentBtn: lang === 'TR' ? "GÖNÜLLÜ TAAHHÜTNAMESİ" : "VOLUNTEER COMMITMENT FORM",
    commitmentPdf: lang === 'TR' ? "/SHG 2026-Gonullu Taahhutnamesi.pdf" : "/Voluntary Commitment Form.pdf",
    applyBtn: lang === 'TR' ? "E-POSTA GÖNDER" : "SEND E-MAIL",
    emailSubject: lang === 'TR' ? "SHG Airshow 2026 Gönüllü Başvurusu" : "SHG Airshow 2026 Volunteer Application",
    back: lang === 'TR' ? "ANA SAYFAYA DÖN" : "BACK TO HOME"
  };

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32">
      {/* Hero Section */}
      <div className="w-full h-[45vh] md:h-[65vh] overflow-hidden relative">
        <img
          src="/images/crew.jpg"
          className="w-full h-full object-cover"
          alt="Volunteer Team Spirit"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-black/30"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-24 relative z-10">
        {/* Header */}
        <header className="mb-20">
          <h1 className="text-2xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8 text-center md:text-left">
            {translations.title}<span className="text-primary">.</span>
          </h1>

          <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-3xl mb-12">
            <p className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 leading-relaxed italic">
              {translations.intro}
            </p>
          </div>

          <div className="w-20 h-1.5 bg-primary mt-8 mx-auto md:mx-0"></div>
        </header>

        {/* Principles Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-secondary dark:text-white mb-8 text-center uppercase tracking-tight">
            {translations.principlesTitle}
          </h2>

          <div className="bg-gray-50 dark:bg-gray-900/40 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl">
            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium whitespace-pre-line text-left">
              {translations.principles}
            </p>
          </div>
        </div>

        {/* Application CTA */}
        <section className="mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-secondary dark:text-white uppercase tracking-tight mb-8">
            {translations.applyTitle}
          </h3>

          <a
            href={translations.commitmentPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-secondary text-white font-black py-6 px-14 rounded-2xl hover:bg-gray-800 transition-all shadow-2xl shadow-secondary/30 active:scale-95 uppercase tracking-widest text-sm mb-6"
          >
            <span className="material-icons text-2xl">description</span>
            {translations.commitmentBtn}
          </a>

          <br />

          <a
            href={`mailto:info@shm.aero?subject=${encodeURIComponent(translations.emailSubject)}`}
            className="inline-flex items-center gap-4 bg-primary text-white font-black py-6 px-14 rounded-2xl hover:bg-red-700 transition-all shadow-2xl shadow-primary/30 active:scale-95 uppercase tracking-widest text-sm"
          >
            <span className="material-icons text-2xl">send</span>
            {translations.applyBtn}
          </a>
        </section>
      </div>

      {/* CTA Section - Container dışında, tam genişlik */}
      <section className="mt-32 px-4 md:px-6 max-w-5xl mx-auto pb-24">
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

      {/* Footer Navigation - Container dışında */}
      <div className="pt-16 pb-8 border-t border-gray-100 dark:border-white/5 flex items-center justify-center mt-16 max-w-6xl mx-auto">
        <button
          onClick={() => onNavigate("home")}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold uppercase text-xs tracking-[0.2em] transition-colors"
        >
          <span className="material-icons text-lg">arrow_back</span>
          {translations.back}
        </button>
      </div>
    </div>
  );
};

export default Volunteering;