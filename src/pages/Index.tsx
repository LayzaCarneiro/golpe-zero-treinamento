import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EducationalSection from "@/components/EducationalSection";
import WhatsAppSimulation, { AnswerRecord } from "@/components/WhatsAppSimulation";
import ResultsSection from "@/components/ResultsSection";
import Footer from "@/components/Footer";

type View = "home" | "education" | "simulation" | "results";

const Index = () => {
  const [currentView, setCurrentView] = useState<View>("home");
  const [results, setResults] = useState<{ score: number; total: number; answers: AnswerRecord[] } | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  const navigate = (view: View) => {
    setCurrentView(view);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuizComplete = (score: number, total: number, answers: AnswerRecord[]) => {
    setResults({ score, total, answers });
    setCurrentView("results");
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col" ref={topRef}>
      <Navbar
        onNavigate={(section) => navigate(section as View)}
        currentView={currentView}
      />

      <main className="flex-1">
        {currentView === "home" && (
          <>
            <HeroSection
              onStartSimulation={() => navigate("simulation")}
              onLearnMore={() => navigate("education")}
            />
            <EducationalSection />
          </>
        )}

        {currentView === "education" && <EducationalSection />}

        {currentView === "simulation" && (
          <WhatsAppSimulation onComplete={handleQuizComplete} />
        )}

        {currentView === "results" && results && (
          <ResultsSection
            score={results.score}
            total={results.total}
            answers={results.answers}
            onRestart={() => navigate("simulation")}
            onGoToEducation={() => navigate("education")}
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
