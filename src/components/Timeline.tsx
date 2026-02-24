import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import type { CareerPhase } from "../data/career";

/* ── Individual Timeline Card ── */
function TimelineCard({
  phase,
  index,
  onSelect,
}: {
  phase: CareerPhase;
  index: number;
  onSelect: (phase: CareerPhase) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-15% 0px -15% 0px" });
  const isLeft = index % 2 === 0;

  const Icon = phase.icon;

  return (
    <div
      ref={ref}
      className={`relative flex w-full items-center ${
        isLeft ? "justify-start" : "justify-end"
      }`}
    >
      {/* Connector dot on the center line */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute left-1/2 z-20 h-4 w-4 -translate-x-1/2 rounded-full border-2"
        style={{
          borderColor: phase.color,
          backgroundColor: isInView ? phase.color : "#020202",
          boxShadow: isInView
            ? `0 0 12px ${phase.color}60, 0 0 30px ${phase.color}25`
            : "none",
        }}
      />

      {/* Horizontal connector */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={`absolute top-1/2 z-10 h-px -translate-y-1/2 ${
          isLeft
            ? "left-[calc(50%+8px)] w-[calc(8%-8px)] origin-left"
            : "right-[calc(50%+8px)] w-[calc(8%-8px)] origin-right"
        }`}
        style={{ backgroundColor: phase.color + "40" }}
      />

      {/* Card */}
      <motion.button
        layoutId={`card-${phase.id}`}
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={
          isInView
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: isLeft ? -60 : 60 }
        }
        transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.15 }}
        onClick={() => onSelect(phase)}
        className={`group relative z-10 w-[42%] cursor-pointer rounded-lg border border-[#1a1a1a] bg-[#0a0a0a]/90 px-3 py-2.5 text-left backdrop-blur-sm transition-colors duration-300 hover:border-[${phase.color}]/30`}
        style={{
          boxShadow: isInView
            ? `0 0 40px ${phase.color}08, inset 0 1px 0 ${phase.color}10`
            : "none",
        }}
        whileHover={{
          boxShadow: `0 0 40px ${phase.color}20, inset 0 1px 0 ${phase.color}20`,
        }}
      >
        {/* Phase label + year */}
        <div className="mb-1.5 flex items-center gap-2">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg"
            style={{ backgroundColor: phase.color + "15" }}
          >
            <Icon size={18} style={{ color: phase.color }} />
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: phase.color }}
            >
              {phase.label}
            </p>
            <p className="font-mono text-[11px] text-[#555]">{phase.years}</p>
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-0.5 text-xs font-bold text-white/90">
          {phase.title}
        </h3>

        {/* Project name */}
        <p className="mb-0.5 text-[11px] text-[#888]">{phase.project}</p>

        {/* Impact */}
        <p className="text-[11px] leading-snug text-[#666]">{phase.impact}</p>

        {/* Expand hint */}
        <div
          className="mt-1.5 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider opacity-70 transition-opacity duration-300 group-hover:opacity-100"
          style={{ color: phase.color }}
        >
          <span>Deep Dive</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M4.5 2.5L8 6L4.5 9.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.button>
    </div>
  );
}

/* ── Main Timeline ── */
export default function Timeline({
  phases,
  onSelectPhase,
}: {
  phases: CareerPhase[];
  onSelectPhase: (phase: CareerPhase) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 40%"],
  });

  /* The central line grows as user scrolls */
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  /* Gradient color shift: purple → deep purple → blue → orange */
  const lineColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["#BD00FF", "#8E44AD", "#2E86C1", "#FF5C00"]
  );

  const lineGlow = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [
      "0 0 20px #BD00FF40, 0 0 60px #BD00FF15",
      "0 0 20px #8E44AD40, 0 0 60px #8E44AD15",
      "0 0 20px #2E86C140, 0 0 60px #2E86C115",
      "0 0 20px #FF5C0040, 0 0 60px #FF5C0015",
    ]
  );

  return (
    <section id="timeline" className="relative pt-4 pb-12">
      {/* Section heading */}
      <div className="mb-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#BD00FF]"
        >
          Career Evolution
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          2026 → 2008
        </motion.h2>
      </div>

      <div ref={containerRef} className="relative mx-auto max-w-6xl px-6">
        {/* Static background line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#111]" />

        {/* Animated glowing overlay line */}
        <motion.div
          className="absolute left-1/2 top-0 w-px -translate-x-1/2"
          style={{
            height: lineHeight,
            backgroundColor: lineColor,
            boxShadow: lineGlow,
          }}
        />

        {/* Cards */}
        <div className="flex flex-col gap-3">
          {phases.map((phase, i) => (
            <TimelineCard
              key={phase.id}
              phase={phase}
              index={i}
              onSelect={onSelectPhase}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
