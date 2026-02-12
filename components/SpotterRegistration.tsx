import React from 'react';
import { Language } from '../App';

interface SpotterRegistrationProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const SpotterRegistration: React.FC<SpotterRegistrationProps> = ({ lang, onNavigate }) => {
  const renderNoteWithRedWords = (note: string) => {
    if (lang === 'TR') {
      let result = note;
      result = result.replace(
        /profesyonel fotoğraf makineleri/g,
        '<span class="text-red-600">profesyonel fotoğraf makineleri</span>'
      );
      result = result.replace(
        /danışmadan/g,
        '<span class="text-red-600">danışmadan</span>'
      );
      return <span dangerouslySetInnerHTML={{ __html: result }} />;
    }
    return note;
  };

  const content = {
    TR: {
      tagline: "HAVA FOTOĞRAFÇILIĞI",
      title: "Spotter Kaydı",
      greeting: `Sevgili "Spotter" arkadaşlarımız,`,
      body1: `19–20 Eylül 2026 tarihlerinde 11'incisi düzenlenecek olan "SHG Airshow 2026 / Sivrihisar Hava Gösterileri" organizasyonuna "SPOTTER" olarak katılmak isteyen arkadaşlarımızın, `,
      body1Email: "spotter@shm.aero",
      body1After: ` adresine başvurularını göndermelerini rica ederiz.`,
      body2: "Başvuru içeriğinde aşağıdaki bilgilerin yer alması gerekmektedir:",
      requirements: [
        "Ad Soyad",
        "T.C. Kimlik Numarası",
        "Doğum Tarihi",
        "İrtibat Bilgileri (telefon ve e\u2011posta)"
      ],
      note: `"SPOTTER" arkadaşlarımız organizasyona biletli giriş yapabileceklerdir. Spotterların profesyonel fotoğraf makineleri kullanmaları, organizasyon günü spotter yelekleri ve yaka kartlarını danışmadan temin etmeleri gerekmektedir.`,
      applyTitle: "Spotter Başvurusu İçin",
      commitmentBtn: "SPOTTER TAAHHÜTNAMESİ",
      commitmentPdf: "/SHG 2026-Spotter Taahhutnamesi.pdf",
      emailBtn: "E-POSTA GÖNDER",
      emailSubject: "SHG Airshow 2026 Spotter Kayıt Başvurusu",
      back: "ANA SAYFAYA DÖN"
    },
    EN: {
      tagline: "AVIATION PHOTOGRAPHY",
      title: "Spotter Registration",
      greeting: `Dear "Spotter" friends,`,
      body1: `For those who wish to participate as a "SPOTTER" in the 11th "SHG Airshow 2026 / Sivrihisar Airshow" to be held on September 19–20, 2026, please send your application to `,
      body1Email: "spotter@shm.aero",
      body1After: `.`,
      body2: "THE FOLLOWING INFORMATION MUST BE INCLUDED IN THE APPLICATION:",
      requirements: [
        "Full Name",
        "Turkish Republic ID Number",
        "Date of Birth",
        "Contact Information (phone and e-mail)"
      ],
      note: `Our "SPOTTER" friends will be able to enter the organization with a ticket.`,
      applyTitle: "To Apply as a Spotter",
      commitmentBtn: "SPOTTER COMMITMENT FORM",
      commitmentPdf: "/Spotter Commitment Form.pdf",
      emailBtn: "SEND E-MAIL",
      emailSubject: "SHG Airshow 2026 Spotter Registration Application",
      back: "BACK TO HOME"
    }
  }[lang];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32">
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden relative">
        <img
          src="/images/spotter-2.jpg"
          className="w-full h-full object-cover"
          alt="Spotter Lens View"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark to-transparent"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-32 relative z-10">
        <header className="mb-16">
          <p className="text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4">
            {content.tagline}
          </p>
          <h1 className="text-2xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8">
            {content.title}<span className="text-primary">.</span>
          </h1>
        </header>

        {/* Narrative Text */}
        <div className="space-y-8 mb-20">
          {/* Intro Box */}
          <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-6 rounded-r-3xl">
            <p className="text-2xl font-black text-gray-900 dark:text-white italic mb-4">
              {content.greeting}
            </p>
            <p className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 leading-relaxed italic">
              {content.body1}
              <span className="text-red-600">{content.body1Email}</span>
              {content.body1After}
            </p>
          </div>

          <div className="w-20 h-1.5 bg-primary mt-8 mx-auto md:mx-0"></div>

          <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-inner">
            <p className="text-sm font-black tracking-widest text-primary mb-6 uppercase">
              {content.body2}
            </p>
            <ul className="space-y-4">
              {content.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform flex-shrink-0 mt-2"></div>
                  <span className="text-lg font-bold text-gray-800 dark:text-gray-200 break-words">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-bold border-l-4 border-primary pl-6">
            {renderNoteWithRedWords(content.note)}
          </p>
        </div>

        {/* Application CTA */}
        <section className="mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-secondary dark:text-white uppercase tracking-tight mb-8">
            {content.applyTitle}
          </h3>

          <a
            href={content.commitmentPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-secondary text-white font-black py-6 px-14 rounded-2xl hover:bg-gray-800 transition-all shadow-2xl shadow-secondary/30 active:scale-95 uppercase tracking-widest text-sm mb-6"
          >
            <span className="material-icons text-2xl">description</span>
            {content.commitmentBtn}
          </a>

          <br />

          <a
            href={`mailto:spotter@shm.aero?subject=${encodeURIComponent(content.emailSubject)}`}
            className="inline-flex items-center gap-4 bg-primary text-white font-black py-6 px-14 rounded-2xl hover:bg-red-700 transition-all shadow-2xl shadow-primary/30 active:scale-95 uppercase tracking-widest text-sm"
          >
            <span className="material-icons text-2xl">send</span>
            {content.emailBtn}
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
          {content.back}
        </button>
      </div>
    </div>
  );
};

export default SpotterRegistration;