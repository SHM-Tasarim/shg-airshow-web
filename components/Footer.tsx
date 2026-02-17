import React from 'react';
import Logo from './Logo';
import { Language } from '../App';

interface FooterProps {
  lang: Language;
  onNavigate: (view: "home" | "program" | "participants" | "tickets" | "partners" | "transport", targetId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const mapUrl = "https://maps.app.goo.gl/AxeMqRWd4PWS4iFS8";
  const currentYear = new Date().getFullYear();

  const content = {
    TR: {
      mission: "Dünya Havacılığının Buluşma Noktası!",
      contact: "İLETİŞİM",
      explore: "KEŞFET",
      addressLabel: "ADRES",
      address: "Sivrihisar Havacılık Merkezi Yeşilköy Mah. 26600 Sivrihisar / Eskişehir",
      rights: "TÜM HAKLARI SAKLIDIR.",
      social: "SOSYAL MEDYA",
      mapBtn: "İLETİŞİM & ULAŞIM"
    },
    EN: {
      mission: "The Meeting Point of World Aviation!",
      contact: "CONTACT",
      explore: "EXPLORE",
      addressLabel: "ADDRESS",
      address: "Sivrihisar Aviation Center, Necati Artan Facilities, Sivrihisar / Eskisehir",
      rights: "ALL RIGHTS RESERVED.",
      social: "SOCIAL MEDIA",
      mapBtn: "CONTACT & DIRECTIONS"
    }
  }[lang];

  const navLinks = [
    { name: lang === 'TR' ? 'BİLETLER' : 'TICKETS', id: 'tickets' as const, targetId: undefined },
    { name: lang === 'TR' ? 'KATILIMCILAR' : 'PARTICIPANTS', id: 'participants' as const, targetId: undefined },
    { name: lang === 'TR' ? 'ÇÖZÜM ORTAKLARI' : 'PARTNERS', id: 'partners' as const, targetId: undefined },
    // { name: lang === 'TR' ? 'GÖSTERİ PROGRAMI' : 'SHOW PROGRAM', id: 'program' as const, targetId: undefined },
    { name: lang === 'TR' ? 'SIKÇA SORULAN SORULAR' : 'FAQ', id: 'faq' as const, targetId: undefined },
    { name: lang === 'TR' ? 'SPOTTER KAYDI' : 'SPOTTER REGISTRATION', id: 'spotter' as const, targetId: undefined },
    { name: lang === 'TR' ? 'GÖNÜLLÜ BAŞVURUSU' : 'VOLUNTEER APPLICATION', id: 'volunteer' as const, targetId: undefined },

  ];

  const socialIconClass = "w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-secondary text-white";

  return (
    <footer className="bg-secondary text-white overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand Profile */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('home')}>
              <Logo className="h-14 w-auto" />
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tighter leading-none uppercase">SHG AIRSHOW</span>
                <span className="text-primary font-black text-2xl tracking-tighter leading-none">2026</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium pr-4">
              {content.mission}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:pl-10">
            <h4 className="text-xs font-black tracking-[0.3em] text-white mb-8 uppercase flex items-center gap-3">
              <span className="w-4 h-px bg-primary"></span>
              {content.explore}
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={`${link.id}-${index}`}>
                  <button
                    onClick={() => onNavigate(link.id, link.targetId)}
                    className="text-sm font-bold text-gray-400 hover:text-primary transition-all flex items-center group text-left"
                  >
                    <span className="material-icons text-[10px] mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all">chevron_right</span>
                    {link.name.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-8">
            <h4 className="text-xs font-black tracking-[0.3em] text-white mb-8 uppercase flex items-center gap-3">
              <span className="w-4 h-px bg-primary"></span>
              {content.contact}
            </h4>
            <div className="space-y-5">
              <a href="tel:+902227243040-41" className="flex items-center gap-4 group">
                <span className="material-icons text-primary group-hover:scale-110 transition-transform">phone_iphone</span>
                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">+90 222 724 30 40-41</span>
              </a>
              <a href="mailto:shg.airshows@acromach.com" className="flex items-center gap-4 group">
                <span className="material-icons text-primary group-hover:scale-110 transition-transform">alternate_email</span>
                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">shg.airshows@acromach.com</span>
              </a>
              <div className="flex items-start gap-4">
                <span className="material-icons text-primary mt-1">location_searching</span>
                <div>
                  <p className="text-[10px] font-black text-gray-500 tracking-widest mb-1 uppercase">{content.addressLabel}</p>
                  <p className="text-sm font-bold text-gray-400 leading-snug">{content.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Social & Maps */}
          <div className="space-y-8">
            <h4 className="text-xs font-black tracking-[0.3em] text-white mb-8 uppercase flex items-center gap-3">
              <span className="w-4 h-px bg-primary"></span>
              {content.social}
            </h4>
            <div className="flex gap-3 mb-8">
              {/* Instagram */}
              <a href="https://www.instagram.com/sivrihisarhavagosterileri/" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"></path>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/sivrihisarhavagosterileri/" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="https://x.com/SHG_Airshow?lang=tr" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@SHGAIRSHOWS" target="_blank" rel="noopener noreferrer" className={socialIconClass}>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="group flex items-center justify-between bg-white/5 border border-white/10 p-4 rounded-lg hover:bg-white hover:text-secondary transition-all w-full"
            >
              <span className="text-[11px] font-black tracking-widest uppercase">{content.mapBtn}</span>
              <span className="material-icons text-primary group-hover:text-secondary transition-colors">near_me</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright Area */}
        <div className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-black tracking-[0.3em] text-gray-500 uppercase text-center md:text-left">
            © {currentYear} SHG AIRSHOW • {content.rights}
          </div>
          <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase hidden sm:block">SİVRİHİSAR HAVACILIK MERKEZİ</span>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <img src="/images/shm.png" className="h-6 w-auto" alt="SHM Logo" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;