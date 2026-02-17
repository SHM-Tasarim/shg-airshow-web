import React, { useState } from "react";
import Logo from "./Logo";
import { Language } from "../App";

interface NavbarProps {
  onNavigate: (view: any) => void;
  currentView: string;
  lang: Language;
  onToggleLang: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  currentView,
  lang,
  onToggleLang,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const translations = {
    participants: lang === "TR" ? "KATILIMCILAR" : "PARTICIPANTS",
    partners: lang === "TR" ? "ÇÖZÜM ORTAKLARI" : "PARTNERS",
    tickets: lang === "TR" ? "BİLETLER" : "TICKETS",
    contact: lang === "TR" ? "İLETİŞİM & ULAŞIM" : "CONTACT & DIRECTIONS",
    buyTicket: lang === "TR" ? "BİLET AL" : "BUY TICKET",
    gallery: lang === "TR" ? "GALERİ" : "GALLERY",
    mediaArchive: lang === "TR" ? "MEDYA" : "MEDIA",
    faq: lang === "TR" ? "SIKÇA SORULAN SORULAR" : "FAQ",
    spotter: lang === "TR" ? "SPOTTER KAYDI" : "SPOTTER REGISTRATION",
    volunteers: lang === "TR" ? "GÖNÜLLÜ BAŞVURUSU" : "VOLUNTEER APPLICATION",
  };

  const utilityLinks = [
    { name: translations.faq, id: "faq", icon: "help_outline", action: () => onNavigate("faq") },
    { name: translations.spotter, id: "spotter", icon: "camera_alt", action: () => onNavigate("spotter") },
    { name: translations.volunteers, id: "volunteer", icon: "groups", action: () => onNavigate("volunteer") },
  ];

  const mainLinks = [
    { name: translations.participants, id: "participants", action: () => onNavigate("participants") },
    { name: translations.partners, id: "partners", action: () => onNavigate("partners") },
    { name: translations.tickets, id: "tickets", action: () => onNavigate("tickets") },
    { name: translations.gallery, id: "gallery-page", action: () => onNavigate("gallery-page") },
    { name: translations.mediaArchive, id: "media-archive", action: () => onNavigate("media-archive") },
    { name: translations.contact, id: "contact", action: () => onNavigate("contact") },
  ];

  return (
    <header className="relative z-[1000] w-full bg-[#101727] overflow-visible">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-0">

          {/* SOL: LOGO + MARKA */}
          <div
            className="flex items-center group cursor-pointer flex-shrink-0"
            onClick={() => onNavigate("home")}
          >
            {/* Logo + arkasındaki daire — masaüstünde navbar'dan taşar */}
            <div className="relative z-10 flex items-center justify-center lg:-mb-6 lg:-ml-8">
              {/* Arka plan dairesi */}
              <div className="hidden lg:block absolute w-32 h-32 xl:w-36 xl:h-36 rounded-full bg-[#101727]" />
              <Logo className="relative z-10 h-16 md:h-20 lg:h-28 xl:h-32 w-auto transition-transform group-hover:scale-105 duration-300" />
            </div>

            <div className="ml-5 lg:ml-8 flex flex-col justify-center relative z-20">
              <span className="font-extrabold text-base md:text-xl lg:text-[22px] tracking-tight text-white uppercase leading-none whitespace-nowrap">
                SHG AIRSHOW{" "}
                <span className="text-primary">2026</span>
              </span>
              <span className="hidden sm:block text-[8px] lg:text-[9px] tracking-[0.3em] text-gray-400 font-bold uppercase mt-1.5">
                Sivrihisar Hava Gösterileri
              </span>
            </div>
          </div>

          {/* SAĞ: DESKTOP MENÜ (sadece lg ve üzeri) */}
          <div className="hidden lg:flex flex-col items-end flex-grow pt-5 pb-4">

            {/* ÜST SATIR — Ana navigasyon + dil + bilet */}
            <div className="flex items-center justify-end w-full gap-7 xl:gap-8 pb-4">
              {mainLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={link.action}
                  className={`relative transition-colors font-black uppercase text-[13px] xl:text-[14px] tracking-tight whitespace-nowrap pb-1 ${
                    currentView === link.id
                      ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary"
                      : "text-gray-300 hover:text-primary"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              {/* Dikey ayırıcı */}
              <div className="h-3 w-px bg-white/20" />

              {/* Dil butonu */}
              <button
                onClick={onToggleLang}
                className="text-white hover:text-primary text-[11px] font-bold uppercase tracking-widest transition-colors"
              >
                {lang === "TR" ? "EN" : "TR"}
              </button>

              {/* Bilet butonu */}
              <button
                onClick={() => onNavigate("tickets")}
                className="bg-primary hover:bg-primary/90 text-white font-black text-[12px] px-7 py-2 rounded-xl uppercase tracking-tight shadow-lg active:scale-95 transition-all h-9 flex items-center justify-center whitespace-nowrap"
              >
                {translations.buyTicket}
              </button>
            </div>

            {/* İnce ayırıcı çizgi */}
            <div className="w-[75%] h-px bg-white/5 mb-3 ml-auto" />

            {/* ALT SATIR — Utility linkler (sağa yaslanmış) */}
            <div className="flex items-center gap-7">
              {utilityLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={link.action}
                  className={`flex items-center gap-1.5 transition-colors font-bold uppercase text-[11px] tracking-widest ${
                    currentView === link.id
                      ? "text-primary"
                      : "text-white hover:text-primary"
                  }`}
                >
                  <span className="material-icons text-[14px]">{link.icon}</span>
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* MOBİL BUTONLAR (sadece lg altında) */}
          <div className="lg:hidden flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => onNavigate("tickets")}
              className="bg-primary text-white font-black text-[11px] px-4 py-2.5 rounded-2xl uppercase tracking-tight whitespace-nowrap active:scale-95 transition-all"
            >
              {translations.buyTicket}
            </button>
            <button
              className="text-white w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="material-icons text-3xl">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* MOBİL PANEL */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 w-full bg-[#101727] z-[9999] border-t border-white/10 shadow-2xl">
          <div className="flex flex-col py-2">
            {[...mainLinks, ...utilityLinks].map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  link.action();
                  setIsMenuOpen(false);
                }}
                className={`text-left px-8 py-4 font-bold uppercase text-[12px] border-b border-white/5 last:border-0 transition-colors ${
                  currentView === link.id
                    ? "text-primary"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
            {/* Mobilde dil değiştirme */}
            <button
              onClick={() => {
                onToggleLang();
                setIsMenuOpen(false);
              }}
              className="text-left px-8 py-4 font-bold uppercase text-[11px] text-gray-400 tracking-widest"
            >
              {lang === "TR" ? "🌐 ENGLISH" : "🌐 TÜRKÇE"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;