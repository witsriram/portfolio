import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Timeline from "./components/Timeline";
import BentoGrid from "./components/BentoGrid";
import SlideOut from "./components/SlideOut";
import Footer from "./components/Footer";
import { careerPhases, bentoHighlights, techMatrix } from "./data/career";
import type { CareerPhase } from "./data/career";

export default function App() {
  const [selectedPhase, setSelectedPhase] = useState<CareerPhase | null>(null);

  return (
    <div className="noise-overlay relative min-h-screen bg-void font-sans text-text-primary">
      <Header />
      <Hero />
      <Clients />
      <Timeline phases={careerPhases} onSelectPhase={setSelectedPhase} />
      <BentoGrid highlights={bentoHighlights} techMatrix={techMatrix} />
      <Footer />
      <SlideOut phase={selectedPhase} onClose={() => setSelectedPhase(null)} />
    </div>
  );
}
