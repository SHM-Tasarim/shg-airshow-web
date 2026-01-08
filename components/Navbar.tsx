import React, { useState } from "react";
import Logo from "./Logo";
import { Language } from "../App";

interface NavbarProps {
  onNavigate: (
    view:
      | "home"
      | "program"
      | "participants"
      | "tickets"
      | "partners"
      | "about"
      | "shm"
      | "spotter"
      | "transport"
      | "contact"
      | "gallery"
      
  ) => void;
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
    contact: lang === "TR" ? "İLETİŞİM" : "CONTACT",
    buyTicket: lang === "TR" ? "BİLET AL" : "BUY TICKETS",
    gallery: lang === "TR" ? "GALERİ" : "GALLERY",
    
  };

  const navLinks = [
    {
      name: translations.participants,
      action: () => onNavigate("participants"),
      id: "participants",
    },
    {
      name: translations.partners,
      action: () => onNavigate("partners"),
      id: "partners",
    },
    {
      name: translations.tickets,
      action: () => onNavigate("tickets"),
      id: "tickets",
    },
    {
      name: translations.gallery,
      action: () => onNavigate("gallery"),
      id: "gallery",
    },
    {
      name: translations.contact,
      action: () => onNavigate("contact"),
      id: "contact",
    },
  ];

  return (
    <header className="relative z-50 container mx-auto px-4 md:px-6 lg:px-8">
      <nav className="flex justify-between items-center h-20 md:h-24">
        <div
          className="flex items-center group cursor-pointer h-full py-1"
          onClick={() => onNavigate("home")}
        >
          <Logo className="h-12 md:h-16 lg:h-20 w-auto transition-transform group-hover:scale-105 duration-300" />
          <span className="ml-3 font-extrabold text-lg md:text-xl lg:text-2xl tracking-tighter text-secondary dark:text-white uppercase hidden sm:inline-block leading-none">
            SHG AIRSHOW <span className="text-primary">2026</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                link.action();
                setIsMenuOpen(false);
              }}
              className={`transition-all font-bold uppercase text-[10px] xl:text-[11px] tracking-[0.2em] whitespace-nowrap ${
                currentView === link.id
                  ? "text-primary"
                  : "text-gray-700 dark:text-gray-300 hover:text-primary"
              }`}
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 font-bold text-[10px] xl:text-[11px] tracking-widest text-gray-500 hover:text-primary transition-colors border-l border-gray-200 dark:border-gray-800 pl-6 h-6"
          >
            <span className="material-icons text-sm">language</span>
            {lang === "TR" ? "EN" : "TR"}
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => onNavigate("tickets")}
            className="bg-primary text-white font-extrabold py-2.5 px-6 xl:px-8 rounded-md hover:bg-red-700 transition-all uppercase text-[10px] tracking-widest hidden md:block"
          >
            {translations.buyTicket}
          </button>
          <button
            className="lg:hidden text-gray-700 dark:text-gray-300 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-icons text-3xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 py-6 bg-white dark:bg-gray-900 rounded-b-xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 z-50 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col space-y-5 px-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  link.action();
                  setIsMenuOpen(false);
                }}
                className={`text-left py-2 font-bold uppercase text-sm tracking-widest border-b border-gray-50 dark:border-gray-800 last:border-0 ${
                  currentView === link.id
                    ? "text-primary"
                    : "text-gray-700 dark:text-gray-200 hover:text-primary"
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                onToggleLang();
                setIsMenuOpen(false);
              }}
              className="text-left font-extrabold text-primary uppercase text-sm tracking-widest"
            >
              {lang === "TR" ? "ENGLISH (EN)" : "TÜRKÇE (TR)"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
