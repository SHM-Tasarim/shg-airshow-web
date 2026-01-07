import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
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

export type Language = "TR" | "EN";
type View = "home" | "program" | "participants" | "tickets" | "partners" | "about" | "shm" | "spotter" | "transport" | "contact" | "volunteer" | "suggestions" | "stand" | "museum" | "acromach"; 

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>("home");
  const [lang, setLang] = useState<Language>("TR");
  const [targetParticipantId, setTargetParticipantId] = useState<string | null>(null);

  useEffect(() => {
    if (!targetParticipantId) {
      window.scrollTo(0, 0);
    }
  }, [currentView, targetParticipantId]);

  const navigateTo = (view: View, targetId?: string) => {
    if (currentView === view && !targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    setCurrentView(view);
    if (targetId) {
      setTargetParticipantId(targetId);
    } else {
      setTargetParticipantId(null);
    }
  };

  const toggleLanguage = () => {
    setLang((prev) => (prev === "TR" ? "EN" : "TR"));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark font-sans transition-colors duration-300">
      <div className="flex-grow">
        <div className="fixed w-full bg-white dark:bg-gray-900 top-0 left-0 right-0 z-50 shadow-sm">
          <Navbar 
            onNavigate={navigateTo} 
            currentView={currentView} 
            lang={lang} 
            onToggleLang={toggleLanguage} 
          />
        </div>

        <main className="flex-grow pt-20">
          {currentView === "home" ? (
            <>
              <Hero onNavigate={navigateTo} lang={lang} />
              <Countdown targetDate="2026-09-19T09:00:00" lang={lang} />
              <Highlights lang={lang} onNavigate={navigateTo} />
              <Gallery lang={lang} onNavigate={navigateTo} />
            </>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {currentView === "contact" && <Contact lang={lang} onNavigate={navigateTo} />}
              {currentView === "volunteer" && <Volunteer lang={lang} />}
              {currentView === "suggestions" && <Suggestions lang={lang} />}
              {currentView === "spotter" && <SpotterRegistration lang={lang} onNavigate={navigateTo} />}
              {currentView === "transport" && <Transport lang={lang} onNavigate={navigateTo} />}
              {currentView === "about" && <AboutShow lang={lang} />}
              {currentView === "shm" && <AboutSHM lang={lang} onNavigate={navigateTo} />}
              {currentView === "stand" && <Stand lang={lang} onNavigate={navigateTo} />}
              {currentView === "museum" && <AboutMSO lang={lang} onNavigate={navigateTo} />}
              {currentView === "acromach" && <Acromach lang={lang} onNavigate={navigateTo} />}
              {currentView === "program" && <ShowProgram lang={lang} onNavigate={navigateTo} />}
              {currentView === "participants" && <Participants lang={lang} targetId={targetParticipantId} />}
              {currentView === "partners" && <Partners lang={lang} onNavigate={navigateTo} />}
              {currentView === "tickets" && <Tickets lang={lang} />}
            </div>
          )}

          {currentView !== "home" && currentView !== "contact" && (
            <div className="pb-16 text-center">
              <button 
                onClick={() => navigateTo("home")} 
                className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-bold uppercase text-xs tracking-[0.2em] transition-colors"
              >
                <span className="material-icons text-lg">arrow_back</span>
                {lang === "TR" ? "ANA SAYFAYA DÖN" : "BACK TO HOME"}
              </button>
            </div>
          )}
        </main>
      </div>
      <Footer lang={lang} onNavigate={navigateTo} />
    </div>
  );
};

export default App;