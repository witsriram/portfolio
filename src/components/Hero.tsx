import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Terminal } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 pb-24 sm:min-h-[70vh]"
    >
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
            isDark
              ? "bg-[radial-gradient(circle,rgba(20,184,166,0.07)_0%,transparent_70%)]"
              : "bg-[radial-gradient(circle,rgba(20,184,166,0.08)_0%,transparent_70%)]"
          }`}
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full blur-3xl ${
            isDark
              ? "bg-[radial-gradient(circle,rgba(217,119,6,0.04)_0%,transparent_70%)]"
              : "bg-[radial-gradient(circle,rgba(217,119,6,0.05)_0%,transparent_70%)]"
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full blur-3xl ${
            isDark
              ? "bg-[radial-gradient(circle,rgba(13,148,136,0.04)_0%,transparent_70%)]"
              : "bg-[radial-gradient(circle,rgba(13,148,136,0.05)_0%,transparent_70%)]"
          }`}
        />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center gap-6 text-center"
      >
        {/* Terminal-style chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur-sm ${
            isDark
              ? "border-[#262420] bg-[#12110F]/80 text-[#9a9488]"
              : "border-[#ddd] bg-white/80 text-[#666] shadow-sm"
          }`}
        >
          <Terminal size={12} className="text-[#14B8A6]" />
          <span className="font-mono">
            <span className="text-[#14B8A6]">$</span> platform-engineer --exp 16y
          </span>
          <span className="animate-pulse-glow text-[#14B8A6]">▋</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className={`text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl ${
            isDark ? "text-gradient-hero-dark" : "text-gradient-hero-light"
          }`}
        >
          Sriram Rajendran
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className={`max-w-2xl text-sm font-light leading-relaxed sm:text-base ${
            isDark ? "text-[#9a9488]" : "text-[#666]"
          }`}
        >
          16 years across{" "}
          <span className={`font-medium ${isDark ? "text-[#e8e4de]" : "text-black"}`}>IaC, Config Management, CI/CD, and Platform Engineering</span> — built a product{" "}
          (<span className="font-medium text-[#14B8A6]">D-Engine</span>), then scaled{" "}
          <span className={`font-medium ${isDark ? "text-[#e8e4de]" : "text-black"}`}>Undercloud deployments</span> across 250+ sites via{" "}
          <span className="font-medium text-[#14B8A6]">K8s &amp; Airship</span> for the largest telecom provider in North America.{" "}
          Enterprise delivery at scale, product-builder at heart.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className={`max-w-2xl text-sm font-light leading-relaxed sm:text-base ${
            isDark ? "text-[#9a9488]" : "text-[#666]"
          }`}
        >
          Personal lab:{" "}
          <span className="font-medium text-[#14B8A6]">Azure Arc</span>,{" "}
          <span className="font-medium text-[#14B8A6]">KAITO</span>,{" "}
          <span className={`font-medium ${isDark ? "text-[#e8e4de]" : "text-black"}`}>model quantization</span>, and a{" "}
private GPT via Ollama (linked to{" "}
          <a href="https://gpt.witsriram.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[#14B8A6] underline underline-offset-4 decoration-[#14B8A6]/50 hover:decoration-[#14B8A6]">gpt.witsriram.com</a>).
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-4 flex items-center gap-4"
        >
          <a
            href="#timeline"
            className="group flex items-center gap-2 rounded-full border border-[#14B8A6]/30 bg-[#14B8A6]/10 px-6 py-2.5 text-sm font-medium text-[#14B8A6] transition-all duration-300 hover:border-[#14B8A6]/60 hover:bg-[#14B8A6]/20 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]"
          >
            Explore Timeline
            <ChevronDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#skills"
            className={`rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
              isDark
                ? "border-[#262420] bg-[#12110F] text-[#c4bfb6] hover:border-[#332F2A] hover:text-[#e8e4de]"
                : "border-[#ddd] bg-white text-[#666] shadow-sm hover:border-[#bbb] hover:text-black"
            }`}
          >
            Tech Stack
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className={`text-[10px] font-medium uppercase tracking-[3px] ${isDark ? "text-[#5c574e]" : "text-[#aaa]"}`}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className={isDark ? "text-[#5c574e]" : "text-[#aaa]"} />
        </motion.div>
      </motion.div>
    </section>
  );
}
