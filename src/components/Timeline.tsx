import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import type { CareerPhase } from "../data/career";
import { useTheme } from "./ThemeContext";

/* ── Company‑join milestone dot  ── */
interface Milestone {
  label: string;
  date: string;
  afterPhaseIndex: number;         // render after this phase card (0-based)
  type?: "job" | "education";
}

const milestones: Milestone[] = [
  { label: "Joined LTM (then Mindtree)", date: "Feb 2013", afterPhaseIndex: 3, type: "job" },
  { label: "Joined Wipro",              date: "Oct 2010", afterPhaseIndex: 4, type: "job" },
  { label: "Master's in Computer Science — with Distinction", date: "May 2010", afterPhaseIndex: 4, type: "education" },
  { label: "Bachelors in Computer Science — with Distinction", date: "May 2008", afterPhaseIndex: 5, type: "education" },
];

function MilestoneDot({ milestone }: { milestone: Milestone }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isEducation = milestone.type === "education";
  const color = isEducation ? "#8B5CF6" : "#0EA5E9";
  const Icon = isEducation ? GraduationCap : Briefcase;

  return (
    <div ref={ref} className="relative flex w-full items-center justify-center py-1">
      {/* Center dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute left-1/2 z-20 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border-2"
        style={{
          borderColor: color,
          backgroundColor: isInView ? color : isDark ? "#020202" : "#f5f5f7",
          boxShadow: isInView
            ? `0 0 14px ${color}80, 0 0 40px ${color}33`
            : "none",
        }}
      >
        <Icon size={12} className="text-white" />
      </motion.div>

      {/* Label pill — always on the right for consistency */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className={`absolute left-[calc(50%+22px)] z-20 flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium backdrop-blur-sm ${
          isDark
            ? "bg-[#0a0a0a]/90"
            : "bg-white/90 shadow-sm"
        }`}
        style={{ borderColor: color + "33", color }}
      >
        <span className="font-semibold">{milestone.label}</span>
        <span className={`font-mono text-[10px] ${isDark ? "text-[#555]" : "text-[#999]"}`}>
          {milestone.date}
        </span>
      </motion.div>
    </div>
  );
}

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
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
          backgroundColor: isInView ? phase.color : isDark ? "#020202" : "#f5f5f7",
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
        className={`group relative z-10 w-[42%] cursor-pointer rounded-lg border px-3 py-2.5 text-left backdrop-blur-sm transition-colors duration-300 ${
          isDark
            ? "border-[#1a1a1a] bg-[#0a0a0a]/90"
            : "border-[#e0e0e0] bg-white/90 shadow-sm"
        }`}
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
            <p className={`font-mono text-[11px] ${isDark ? "text-[#555]" : "text-[#999]"}`}>{phase.years}</p>
          </div>
        </div>

        {/* Title */}
        <h3 className={`mb-0.5 text-xs font-bold ${isDark ? "text-white/90" : "text-[#1a1a1a]"}`}>
          {phase.title}
        </h3>

        {/* Project count + Client names */}
        <div className="mb-1 flex flex-wrap items-center gap-1.5">
          <span
            className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 font-mono text-[10px] font-semibold"
            style={{ backgroundColor: phase.color + '15', color: phase.color }}
          >
            {phase.subProjects.length} {phase.subProjects.length === 1 ? 'Project' : 'Projects'}
          </span>
          {phase.clients.map((client) => (
            <span
              key={client}
              className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium ${isDark ? 'bg-[#111] text-[#888]' : 'bg-[#f0f0f0] text-[#666]'}`}
            >
              {client}
            </span>
          ))}
        </div>

        {/* Impact */}
        <p className={`text-[11px] leading-snug ${isDark ? "text-[#666]" : "text-[#888]"}`}>{phase.impact}</p>

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
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 40%"],
  });

  /* The central line grows as user scrolls */
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  /* Gradient color shift: sky → royal → deep → cyan → purple */
  const lineColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#0EA5E9", "#2563EB", "#1E40AF", "#06B6D4", "#8B5CF6"]
  );

  const lineGlow = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      "0 0 20px #0EA5E940, 0 0 60px #0EA5E915",
      "0 0 20px #2563EB40, 0 0 60px #2563EB15",
      "0 0 20px #1E40AF40, 0 0 60px #1E40AF15",
      "0 0 20px #06B6D440, 0 0 60px #06B6D415",
      "0 0 20px #8B5CF640, 0 0 60px #8B5CF615",
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
          className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#0EA5E9]"
        >
          Career Evolution
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
        >
          2026 → 2008
        </motion.h2>
      </div>

      <div ref={containerRef} className="relative mx-auto max-w-6xl px-6">
        {/* Static background line */}
        <div className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 ${isDark ? "bg-[#111]" : "bg-[#ddd]"}`} />

        {/* Animated glowing overlay line */}
        <motion.div
          className="absolute left-1/2 top-0 w-px -translate-x-1/2"
          style={{
            height: lineHeight,
            backgroundColor: lineColor,
            boxShadow: lineGlow,
          }}
        />

        {/* Cards + milestone markers */}
        <div className="flex flex-col gap-3">
          {phases.map((phase, i) => (
            <div key={phase.id}>
              <TimelineCard
                phase={phase}
                index={i}
                onSelect={onSelectPhase}
              />
              {/* Insert milestone dot after matching phase index */}
              {milestones
                .filter((m) => m.afterPhaseIndex === i)
                .map((m, mi) => (
                  <div key={m.label} className={mi > 0 ? "mt-6" : "mt-3"}>
                    <MilestoneDot milestone={m} />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
