import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useTheme } from "./components/ThemeContext";
import ParticleField from "./components/ParticleField";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Timeline from "./components/Timeline";
import BentoGrid from "./components/BentoGrid";
import SlideOut from "./components/SlideOut";
import Footer from "./components/Footer";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Running from "./pages/Running";
import Photography from "./pages/Photography";
import { careerPhases, techMatrix } from "./data/career";
import type { CareerPhase } from "./data/career";

function Home() {
  const [selectedPhase, setSelectedPhase] = useState<CareerPhase | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`noise-overlay relative min-h-screen font-sans transition-colors duration-500 ${
        isDark
          ? "bg-void text-text-primary"
          : "bg-[#f5f5f7] text-[#1a1a1a]"
      }`}
    >
      <ParticleField />
      <Header />
      <Hero />
      <Clients />
      <Timeline phases={careerPhases} onSelectPhase={setSelectedPhase} />
      <BentoGrid techMatrix={techMatrix} />
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
