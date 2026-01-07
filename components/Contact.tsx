import React, { useState } from 'react';
import { Language } from '../App';

interface ContactProps {
  lang: Language;
  onNavigate: (view: 'home') => void;
}

const Contact: React.FC<ContactProps> = ({ lang, onNavigate }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const content = {
    TR: {
      tagline: "BİZE ULAŞIN",
      title: "İLETİŞİM",
      addressLabel: "MERKEZ ADRES",
      address: "Sivrihisar Havacılık Merkezi, Necati Artan Tesisleri, Sivrihisar / Eskişehir",
      phoneLabel: "TELEFON",
      emailLabel: "E-POSTA",
      formTitle: "Mesaj Gönderin",
      formName: "Adınız Soyadınız",
      formEmail: "E-posta Adresiniz",
      formMessage: "Mesajınız",
      formSubmit: "MESAJI GÖNDER",
      formSending: "GÖNDERİLİYOR...",
      formSuccess: "Mesajınız Bize Ulaştı!",
      formSuccessSub: "Ekibimiz en kısa sürede size geri dönüş yapacaktır.",
      mapTitle: "KONUM",
      back: "ANA SAYFAYA DÖN"
    },
    EN: {
      tagline: "GET IN TOUCH",
      title: "CONTACT",
      addressLabel: "HEADQUARTERS",
      address: "Sivrihisar Aviation Center, Necati Artan Facilities, Sivrihisar / Eskisehir",
      phoneLabel: "PHONE",
      emailLabel: "EMAIL",
      formTitle: "Send a Message",
      formName: "Full Name",
      formEmail: "Email Address",
      formMessage: "Your Message",
      formSubmit: "SEND MESSAGE",
      formSending: "SENDING...",
      formSuccess: "Message Sent Successfully!",
      formSuccessSub: "Our team will get back to you as soon as possible.",
      mapTitle: "LOCATION",
      back: "BACK TO HOME"
    }
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-background-dark min-h-screen transition-colors duration-500 pb-32">
      <div className="w-full h-[35vh] md:h-[50vh] overflow-hidden relative">
        <img 
          src="/images/contact.jpg" 
          className="w-full h-full object-cover"
          alt="Aviation Control Tower"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-background-dark via-transparent to-black/20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 -mt-32 relative z-10">
        <header className="mb-16">
          <p className="text-primary font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase mb-4">
            {content.tagline}
          </p>
          <h1 className="text-2xl md:text-7xl font-black text-secondary dark:text-white tracking-tighter leading-none mb-8">
            {content.title}<span className="text-primary">.</span>
          </h1>
          <div className="w-16 h-1 bg-primary"></div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-gray-900/40 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl transition-all hover:border-primary group">
              <span className="material-icons text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">location_on</span>
              <h4 className="text-[10px] font-black text-gray-500 tracking-widest uppercase mb-2">{content.addressLabel}</h4>
              <p className="text-gray-900 dark:text-white font-bold leading-relaxed">{content.address}</p>
            </div>
            <div className="bg-white dark:bg-gray-900/40 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl transition-all hover:border-primary group">
              <span className="material-icons text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">call</span>
              <h4 className="text-[10px] font-black text-gray-500 tracking-widest uppercase mb-2">{content.phoneLabel}</h4>
              <a href="tel:+902227113132" className="text-gray-900 dark:text-white font-black text-xl hover:text-primary transition-colors">+90 222 711 31 32</a>
            </div>
            <div className="bg-white dark:bg-gray-900/40 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl transition-all hover:border-primary group">
              <span className="material-icons text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">mail</span>
              <h4 className="text-[10px] font-black text-gray-500 tracking-widest uppercase mb-2">{content.emailLabel}</h4>
              <a href="mailto:info@shm.aero" className="text-gray-900 dark:text-white font-black text-lg hover:text-primary transition-colors">info@shm.aero</a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-secondary dark:bg-black/40 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/5 relative overflow-hidden min-h-[500px] flex flex-col justify-center">
               {isSubmitted ? (
                 <div className="text-center animate-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/20">
                      <span className="material-icons text-white text-4xl">check</span>
                    </div>
                    <h2 className="text-4xl font-black text-white mb-4 uppercase">{content.formSuccess}</h2>
                    <p className="text-gray-400 font-bold">{content.formSuccessSub}</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-10 text-primary font-black uppercase tracking-widest text-xs hover:underline"
                    >
                      {lang === 'TR' ? 'YENİ MESAJ GÖNDER' : 'SEND ANOTHER MESSAGE'}
                    </button>
                 </div>
               ) : (
                 <div className="relative z-10 animate-in fade-in slide-in-from-right-4 duration-500">
                   <h2 className="text-3xl font-black text-white mb-10 uppercase tracking-tight">{content.formTitle}</h2>
                   <form className="space-y-6" onSubmit={handleSubmit}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                         <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase">{content.formName}</label>
                         <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors" />
                       </div>
                       <div className="space-y-2">
                         <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase">{content.formEmail}</label>
                         <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors" />
                       </div>
                     </div>
                     <div className="space-y-2">
                       <label className="text-[10px] font-black text-gray-500 tracking-widest uppercase">{content.formMessage}</label>
                       <textarea rows={4} required className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                     </div>
                     <button type="submit" disabled={isSending} className="w-full bg-primary text-white font-black py-5 rounded-xl hover:bg-red-700 transition-all shadow-xl shadow-primary/20 active:scale-95 uppercase tracking-[0.2em] text-sm disabled:opacity-50 flex items-center justify-center gap-3">
                       {isSending && <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>}
                       {isSending ? content.formSending : content.formSubmit}
                     </button>
                   </form>
                 </div>
               )}
            </div>
          </div>
        </div>

        <section className="mb-24">
          <h2 className="text-3xl font-black text-secondary dark:text-white mb-8 flex items-center gap-4">
            <span className="w-1.5 h-8 bg-primary"></span>
            {content.mapTitle}
          </h2>
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 h-[450px]">
            <iframe 
              title="Sivrihisar Havacılık Merkezi Konum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1543.8064625175332!2d31.484231403337173!3d39.297027976231945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cdfd073d852337%3A0xd2f34784f222f435!2sSivrihisar%20Havac%C4%B1l%C4%B1k%20Merkezi!5e0!3m2!1str!2str!4v1766698409372!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        {/* Footer Navigation - ORTALANDI */}
        <div className="pt-16 border-t border-gray-100 dark:border-white/5 text-center">
          <button 
            onClick={() => onNavigate("home")} 
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold uppercase text-xs tracking-[0.2em] transition-colors"
          >
            <span className="material-icons text-lg">arrow_back</span>
            {content.back}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;