import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Radial gradient backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(189,0,255,0.08)_0%,transparent_70%)]" />
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(255,92,0,0.05)_0%,transparent_70%)]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex flex-col items-center gap-6 text-center"
      >
        {/* Chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 rounded-full border border-[#1a1a1a] bg-[#0a0a0a]/80 px-4 py-1.5 text-xs font-medium text-[#888] backdrop-blur-sm"
        >
          <Sparkles size={12} className="text-[#BD00FF]" />
          Principal Platform Engineer · 16+ Years
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-gradient-hero text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl"
        >
          Sriram Rajendran
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-2xl text-base font-light leading-relaxed text-[#888] sm:text-lg"
        >
          A developer who fell in love with infrastructure. From{" "}
          <span className="font-medium text-white">Application Support</span> to{" "}
          <span className="font-medium text-white">DevOps</span>, then{" "}
          <span className="font-medium text-white">Infrastructure as Code</span>, and now{" "}
          <span className="font-medium text-white">Platform Engineering</span> —
          spanning both undercloud for{" "}
          <span className="font-medium text-[#BD00FF]">AT&amp;T</span> &amp;{" "}
          <span className="font-medium text-[#BD00FF]">Microsoft</span>, and
          cloud-native delivery for enterprise projects at{" "}
          <span className="font-medium text-white">LTM</span>.
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
            className="group flex items-center gap-2 rounded-full border border-[#BD00FF]/30 bg-[#BD00FF]/10 px-6 py-2.5 text-sm font-medium text-[#BD00FF] transition-all duration-300 hover:border-[#BD00FF]/60 hover:bg-[#BD00FF]/20 hover:shadow-[0_0_30px_rgba(189,0,255,0.15)]"
          >
            Explore Timeline
            <ChevronDown size={14} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#skills"
            className="rounded-full border border-[#1a1a1a] bg-[#0a0a0a] px-6 py-2.5 text-sm font-medium text-[#ccc] transition-all duration-300 hover:border-[#333] hover:text-white"
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
        <span className="text-[10px] font-medium uppercase tracking-[3px] text-[#555]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[#555]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
