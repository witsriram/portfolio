import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ParticleField from "./components/ParticleField";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Timeline from "./components/Timeline";
import BentoGrid from "./components/BentoGrid";
import TechRadar from "./components/TechRadar";
import StatsCounter from "./components/StatsCounter";
import NowPlaying from "./components/NowPlaying";
import SlideOut from "./components/SlideOut";
import Passions from "./components/Passions";
import Footer from "./components/Footer";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Running from "./pages/Running";
import Photography from "./pages/Photography";
import { careerPhases, techMatrix } from "./data/career";
import type { CareerPhase } from "./data/career";

function Home() {
  const [selectedPhase, setSelectedPhase] = useState<CareerPhase | null>(null);

  return (
    <div
      className="noise-overlay relative min-h-screen font-sans transition-colors duration-500 bg-void text-text-primary"
    >
      <ParticleField />
      <Header />
      <Hero />
      <StatsCounter />
      <Clients />
      <Timeline phases={careerPhases} onSelectPhase={setSelectedPhase} />
      <BentoGrid techMatrix={techMatrix} />
      <TechRadar />
      <Passions />
      <NowPlaying />
      <Footer />
      <SlideOut phase={selectedPhase} onClose={() => setSelectedPhase(null)} />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/hobbies/running" element={<Running />} />
      <Route path="/hobbies/photography" element={<Photography />} />
    </Routes>
  );
}
