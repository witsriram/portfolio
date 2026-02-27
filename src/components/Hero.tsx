import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Terminal } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16 pb-10 sm:min-h-[70vh]"
    >
      {/* Full-bleed background photo */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/photos/northenlights-AI-1.JPEG"
          alt=""
          className="h-full w-full object-cover"
          style={{ opacity: 0.25 }}
        />
        {/* Radial vignette so text area stays readable */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(13,12,10,0.6)_0%,transparent_70%)]"
        />
        {/* Bottom gradient fade to page bg */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0D0C0A] to-transparent"
        />
      </div>

      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-[radial-gradient(circle,rgba(20,184,166,0.07)_0%,transparent_70%)]"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -25, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full blur-3xl bg-[radial-gradient(circle,rgba(217,119,6,0.04)_0%,transparent_70%)]"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 h-[300px] w-[300px] rounded-full blur-3xl bg-[radial-gradient(circle,rgba(13,148,136,0.04)_0%,transparent_70%)]"
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
          className="flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur-sm border-[#262420] bg-[#12110F]/80 text-[#9a9488]"
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
          className="text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl text-gradient-hero-dark"
        >
          Sriram Rajendran
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-2xl text-sm font-light leading-relaxed sm:text-base text-[#c4bfb6]"
        >
          I turn infrastructure into code and complexity into platforms.{" "}
          Over <span className="font-medium text-white">16 years</span>, I&apos;ve{" "}
          built <span className="font-medium text-[#5EEAD4]">D-Engine</span> — an internal IP that abstracts multi-cloud provisioning — and{" "}
          shipped <span className="font-medium text-white">Undercloud at scale</span>: 250+ sites,{" "}
          <span className="font-medium text-[#5EEAD4]">Kubernetes &amp; Airship</span>, powering North America&apos;s largest telecom network.{" "}
          Product-builder by instinct, platform engineer by trade.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="max-w-2xl text-sm font-light leading-relaxed sm:text-base text-[#c4bfb6]"
        >
          After hours, I run a home lab —{" "}
          <span className="font-medium text-[#5EEAD4]">Azure Arc</span>,{" "}
          <span className="font-medium text-[#5EEAD4]">KAITO</span>,{" "}
          <span className="font-medium text-white">quantized models</span>, and a self-hosted GPT at{" "}
          <a href="https://gpt.witsriram.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[#5EEAD4] underline underline-offset-4 decoration-[#5EEAD4]/50 hover:decoration-[#5EEAD4]">gpt.witsriram.com</a>.
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
            className="rounded-full border px-6 py-2.5 text-sm font-medium transition-all duration-300 border-[#262420] bg-[#12110F] text-[#c4bfb6] hover:border-[#332F2A] hover:text-[#e8e4de]"
          >
            Tech Stack
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
