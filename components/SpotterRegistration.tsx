import React from 'react';
import { Language } from '../App';

interface SpotterRegistrationProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const SpotterRegistration: React.FC<SpotterRegistrationProps> = ({ lang, onNavigate }) => {
  const content = {
    TR: {
      tagline: "HAVA FOTOĞRAFÇILIĞI",
      title: "Spotter Kaydı",
      greeting: `Sevgili "Spotter" arkadaşlarımız,`,
      body1: `19–20 Eylül 2026 tarihlerinde onbirincisi düzenlenecek olan "SHG Airshow 2026 / Sivrihisar Hava Gösterileri" organizasyonuna "SPOTTER" olarak katılmak isteyen arkadaşlarımızın, info@shm.aero adresine e-posta göndermeleri rica olunur.`,
      body2: "E-posta içeriğinde aşağıdaki bilgilerin yer alması gerekmektedir:",
      requirements: [
        "Ad Soyad",
        "T.C. Kimlik Numarası",
        "Doğum Tarihi",
        "İrtibat Bilgileri (telefon ve e-posta)"
      ],
      note: `"SPOTTER" arkadaşlarımız organizasyona biletli giriş yapabileceklerdir.`,
      signature: "SHG Airshows Organizasyon Komitesi",
      back: "ANA SAYFAYA DÖN",
      emailBtn: "E-POSTA GÖNDER",
      emailSubject: "SHG Airshow 2026 Spotter Kayıt Başvurusu"
    },
    EN: {
      tagline: "AVIATION PHOTOGRAPHY",
      title: "SPOTTER REGISTRATION",
      greeting: `Dear "Spotter" friends,`,
      body1: `For those who wish to participate as a "SPOTTER" in the 11th "SHG Airshow 2026 / Sivrihisar Airshow" to be held on September 19–20, 2026, please send an e-mail to info@shm.aero.`,
      body2: "The following information must be included in the e-mail content:",
      requirements: [
        "Full Name",
        "Turkish Republic ID Number",
        "Date of Birth",
        "Contact Information (phone and e-mail)"
      ],
      note: `Our "SPOTTER" friends will be able to enter the organization with a ticket.`,
      signature: "SHG Airshows Organizing Committee",
      back: "BACK TO HOME",
      emailBtn: "SEND E-MAIL",
      emailSubject: "SHG Airshow 2026 Spotter Registration Application"
    }
  }[lang];

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32">
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[60vh] overflow-hidden relative">
        <img 
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1600" 
          className="w-full h-full object-cover grayscale opacity-80"
          alt="Spotter Lens View"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark to-transparent"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 -mt-32 relative z-10">
        <header className="mb-16">
          <p className="text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4">
            {content.tagline}
          </p>
          <h1 className="text-6xl md:text-8xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8">
            {content.title}<span className="text-primary">.</span>
          </h1>
          <div className="w-16 h-1 bg-primary"></div>
        </header>

        {/* Narrative Text */}
        <div className="space-y-8 mb-20">
          <p className="text-2xl font-black text-gray-900 dark:text-white italic">
            {content.greeting}
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-medium">
            {content.body1}
          </p>

          <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-inner">
            <p className="text-sm font-black tracking-widest text-primary mb-6 uppercase">
              {content.body2}
            </p>
            <ul className="space-y-4">
              {content.requirements.map((req, idx) => (
                <li key={idx} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                  <span className="text-lg font-bold text-gray-800 dark:text-gray-200">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-bold border-l-4 border-primary pl-6">
            {content.note}
          </p>

          <p className="text-sm font-black tracking-widest text-gray-400 uppercase pt-8">
            {content.signature}
          </p>
        </div>

        {/* Action Button */}
        <div className="mb-32 flex justify-center">
          <a 
            href={`mailto:info@shm.aero?subject=${content.emailSubject}`} 
            className="inline-flex items-center gap-4 bg-primary text-white font-black py-5 px-12 rounded-xl hover:bg-red-700 transition-all shadow-xl shadow-primary/20 active:scale-95 uppercase tracking-widest text-sm hover:scale-105"
          >
            <span className="material-icons text-xl">alternate_email</span>
            {content.emailBtn}
          </a>
        </div>

        {/* Footer Navigation */}
        <div className="pt-16 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        </div>
      </div>
    </div>
  );
};

export default SpotterRegistration;