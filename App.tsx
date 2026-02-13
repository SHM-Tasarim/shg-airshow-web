import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShowProgram from "./components/ShowProgram";
import Highlights from "./components/Highlights";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Participants from "./components/Participants";
import Tickets from "./components/Tickets";
import Partners from "./components/Partners";
import AboutShow from "./components/AboutShow";
import AboutSHM from "./components/AboutSHM";
import SpotterRegistration from "./components/SpotterRegistration";
import Transport from "./components/Transport";
import Contact from "./components/Contact";
import Volunteer from "./components/Volunteer";
import Suggestions from "./components/Suggestions";
import Stand from "./components/Stand";
import AboutMSO from "./components/AboutMSO";
import Acromach from "./components/Acromach";
import AboutMachAir from "./components/AboutMachAir";
import GalleryPage from "./components/GalleryPage";
import MediaArchive from "./components/MediaArchive";
import Schools from "./components/Schools";
import ActionBridge from "./components/ActionBridge";
import Sponsor from "./components/Sponsor";
import FAQ from "./components/FAQ";

export type Language = "TR" | "EN";
export type Theme = "light" | "dark";
type View = "home" | "program" | "participants" | "tickets" | "partners" | "about" | "shm" | "spotter" | "transport" | "contact" | "volunteer" | "suggestions" | "stand" | "museum" | "acromach" | "mach" | "gallery-page" | "media-archive" | "schools" | "sponsor" | "faq";

const VALID_VIEWS: View[] = ["home", "program", "participants", "tickets", "partners", "about", "shm", "spotter", "transport", "contact", "volunteer", "suggestions", "stand", "museum", "acromach", "mach", "gallery-page", "media-archive", "schools", "sponsor", "faq"];

function getViewFromHash(): View {
  const hash = window.location.hash.replace("#", "");
  return VALID_VIEWS.includes(hash as View) ? (hash as View) : "home";
}

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(getViewFromHash);
  const [lang, setLang] = useState<Language>("TR");
  const [theme, setTheme] = useState<Theme>("dark");
  const [targetParticipantId, setTargetParticipantId] = useState<string | null>(null);
  const [targetSectionId, setTargetSectionId] = useState<string | null>(null);

  const TARGET_DATE = "2026-09-19T10:00:00";

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const view = getViewFromHash();
      setCurrentView(view);
      setTargetParticipantId(null);
      setTargetSectionId(null);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (!targetParticipantId) {
      window.scrollTo(0, 0);
    }
  }, [currentView, targetParticipantId]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const navigateTo = (view: View, targetId?: string) => {
    if (currentView === view && !targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setCurrentView(view);
    // Update browser history so back button and refresh work
    const newHash = view === "home" ? "" : `#${view}`;
    if (window.location.hash !== (newHash || "#")) {
      window.history.pushState(null, "", newHash || window.location.pathname);
    }
    if (targetId) {
      if (view === "participants") {
        setTargetParticipantId(targetId);
        setTargetSectionId(null);
      } else {
        setTargetSectionId(targetId);
        setTargetParticipantId(null);
      }
    } else {
      setTargetParticipantId(null);
      setTargetSectionId(null);
    }
  };

  const toggleLanguage = () => setLang((prev) => (prev === "TR" ? "EN" : "TR"));
  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const renderContent = () => {
    if (currentView === "home") {
      return (
        <>
          <Hero onNavigate={navigateTo} lang={lang} />
          <Gallery lang={lang} onNavigate={navigateTo} />
          <ActionBridge lang={lang} />
          <Highlights lang={lang} onNavigate={navigateTo} />
        </>
      );
    }

    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        {currentView === "contact" && <Contact lang={lang} onNavigate={navigateTo} />}
        {currentView === "volunteer" && <Volunteer lang={lang} onNavigate={navigateTo} />}
        {currentView === "suggestions" && <Suggestions lang={lang} onNavigate={navigateTo} />}
        {currentView === "spotter" && <SpotterRegistration lang={lang} onNavigate={navigateTo} />}
        {currentView === "transport" && <Transport lang={lang} onNavigate={navigateTo} />}
        {currentView === "about" && <AboutShow lang={lang} onNavigate={navigateTo} />}
        {currentView === "shm" && <AboutSHM lang={lang} onNavigate={navigateTo} />}
        {currentView === "stand" && <Stand lang={lang} onNavigate={navigateTo} />}
        {currentView === "museum" && <AboutMSO lang={lang} onNavigate={navigateTo} />}
        {currentView === "acromach" && <Acromach lang={lang} onNavigate={navigateTo} />}
        {currentView === "mach" && <AboutMachAir lang={lang} onNavigate={navigateTo} />}
        {currentView === "program" && <ShowProgram lang={lang} onNavigate={navigateTo} />}
        {currentView === "participants" && <Participants lang={lang} targetId={targetParticipantId} onNavigate={(view) => navigateTo(view as View)} />}
        {currentView === "partners" && <Partners lang={lang} onNavigate={navigateTo} />}
        {currentView === "tickets" && <Tickets lang={lang} targetId={targetSectionId} />}
        {currentView === "gallery-page" && <GalleryPage lang={lang} onNavigate={navigateTo} />}
        {currentView === "media-archive" && <MediaArchive lang={lang} onNavigate={navigateTo} />}
        {currentView === "schools" && <Schools lang={lang} onNavigate={navigateTo} />}
        {currentView === "sponsor" && <Sponsor lang={lang} onNavigate={navigateTo} />}
        {currentView === "faq" && <FAQ lang={lang} targetId={targetSectionId} onNavigate={(view) => navigateTo(view as View)} />}
        
        {/* Alt Geri Dön Butonu (Sadece alt sayfalarda görünür) */}
        {currentView !== "contact" && (
          <div className="max-w-6xl mx-auto px-6 pb-24">
            <div className="pt-16 border-t border-gray-100 dark:border-white/5 text-center">
              <button
                onClick={() => navigateTo("home")}
                className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold uppercase text-xs tracking-[0.2em] transition-colors"
              >
                <span className="material-icons text-lg">arrow_back</span>
                {lang === "TR" ? "ANA SAYFAYA DÖN" : "BACK TO HOME"}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-sans transition-colors duration-500">
      {/* SABİT NAVİGASYON BAR (Header) */}
      <header className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md top-0 left-0 right-0 z-[60] shadow-sm">
        <Navbar
          onNavigate={navigateTo}
          currentView={currentView}
          lang={lang}
          onToggleLang={toggleLanguage}
          theme={theme}
          onToggleTheme={toggleTheme}
        />
      </header>

      {/* ANA İÇERİK ALANI */}
      <div className="flex flex-col flex-1">
        <main className="flex-grow pt-16 md:pt-24">
          {renderContent()}
        </main>

        {/* Footer */}
        <Footer lang={lang} onNavigate={navigateTo} />
      </div>
    </div>
  );
};

export default App;