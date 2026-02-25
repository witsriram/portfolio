import { useEffect, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronDown, Server as ServerIcon, Briefcase, Globe } from "lucide-react";
import type { CareerPhase, SubProject } from "../data/career";
import { useTheme } from "./ThemeContext";

/* ── Backdrop ── */
function Backdrop({ onClick }: { onClick: () => void }) {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className={`fixed inset-0 z-40 backdrop-blur-sm ${
        theme === "dark" ? "bg-black/60" : "bg-black/30"
      }`}
    />
  );
}

/* ── Sub-Project Card ── */
function SubProjectCard({
  sp,
  color,
  isDark,
  index,
}: {
  sp: SubProject;
  color: string;
  isDark: boolean;
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.08, duration: 0.35 }}
      className={`rounded-xl border overflow-hidden ${
        isDark ? "border-[#1a1a1a] bg-[#080808]" : "border-[#e8e8e8] bg-white"
      }`}
    >
      {/* Collapsible header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
          isDark ? "hover:bg-[#0e0e0e]" : "hover:bg-[#f5f5f5]"
        }`}
      >
        <Briefcase size={14} style={{ color, flexShrink: 0 }} />
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-semibold truncate ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
            {sp.name}
          </p>
          <div className="flex items-center gap-2">
            <p className={`font-mono text-[10px] ${isDark ? "text-[#555]" : "text-[#999]"}`}>
              {sp.period} · {sp.infrastructure}
            </p>
            {sp.url && (
              <a
                href={sp.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-0.5 text-[10px] font-medium hover:underline"
                style={{ color }}
              >
                <Globe size={10} /> Live
              </a>
            )}
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} className={isDark ? "text-[#555]" : "text-[#999]"} />
        </motion.div>
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`border-t px-4 py-3 ${isDark ? "border-[#1a1a1a]" : "border-[#eee]"}`}>
              {/* Highlights */}
              <ul className="mb-3 space-y-1.5">
                {sp.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-[12px] leading-[1.5]">
                    <span style={{ color }} className="mt-0.5 shrink-0">▸</span>
                    <span className={isDark ? "text-[#aaa]" : "text-[#555]"}>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5">
                {sp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`rounded-md border px-2 py-0.5 font-mono text-[10px] ${
                      isDark
                        ? "border-[#1a1a1a] bg-[#0a0a0a] text-[#888]"
                        : "border-[#e0e0e0] bg-[#f5f5f5] text-[#666]"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── SlideOut Panel ── */
export default function SlideOut({
  phase,
  onClose,
}: {
  phase: CareerPhase | null;
  onClose: () => void;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (phase) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [phase, handleEscape]);

  const Icon = phase?.icon ?? X;

  return (
    <AnimatePresence mode="wait">
      {phase && (
        <>
          <Backdrop onClick={onClose} />

          <motion.div
            layoutId={`card-${phase.id}`}
            className={`slide-out-scroll fixed right-0 top-0 z-50 flex h-full w-full flex-col overflow-y-auto border-l backdrop-blur-xl sm:w-[520px] lg:w-[600px] ${
              isDark
                ? "border-[#1a1a1a] bg-[#050505]/95"
                : "border-[#e0e0e0] bg-[#fafafa]/95"
            }`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {/* ── Header bar ── */}
            <div className={`sticky top-0 z-10 flex items-center justify-between border-b px-6 py-4 backdrop-blur-md ${
              isDark
                ? "border-[#1a1a1a] bg-[#050505]/90"
                : "border-[#e0e0e0] bg-[#fafafa]/90"
            }`}>
              <div className="flex items-center gap-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{ backgroundColor: phase.color + "15" }}
                >
                  <Icon size={16} style={{ color: phase.color }} />
                </div>
                <div>
                  <p
                    className="text-[11px] font-semibold uppercase tracking-wider"
                    style={{ color: phase.color }}
                  >
                    {phase.label}
                  </p>
                  <p className={`font-mono text-[10px] ${isDark ? "text-[#555]" : "text-[#999]"}`}>
                    {phase.years} · {phase.company}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                  isDark
                    ? "border-[#1a1a1a] bg-[#0a0a0a] text-[#666] hover:border-[#333] hover:text-white"
                    : "border-[#ddd] bg-white text-[#999] hover:border-[#bbb] hover:text-black"
                }`}
                aria-label="Close panel"
              >
                <X size={14} />
              </button>
            </div>

            {/* ── Content ── */}
            <div className="flex-1 px-6 py-6">
              {/* Title block */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <h2 className={`mb-1 text-xl font-bold ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>
                  {phase.title}
                </h2>
                <p className={`mb-1 text-sm ${isDark ? "text-[#ccc]" : "text-[#444]"}`}>{phase.project}</p>
                <p className={`mb-5 text-xs leading-relaxed ${isDark ? "text-[#777]" : "text-[#888]"}`}>
                  {phase.impact}
                </p>
              </motion.div>

              {/* Divider */}
              <div
                className="mb-5 h-px w-full"
                style={{
                  background: `linear-gradient(90deg, ${phase.color}30, transparent)`,
                }}
              />

              {/* Sub-projects heading */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="mb-4"
              >
                <div className="flex items-center gap-2">
                  <ServerIcon size={13} style={{ color: phase.color }} />
                  <h3
                    className="text-xs font-semibold uppercase tracking-[3px]"
                    style={{ color: phase.color }}
                  >
                    Projects
                  </h3>
                  <span className={`ml-1 rounded-full px-2 py-0.5 font-mono text-[10px] ${
                    isDark ? "bg-[#111] text-[#666]" : "bg-[#eee] text-[#999]"
                  }`}>
                    {phase.subProjects.length}
                  </span>
                </div>
              </motion.div>

              {/* Sub-project cards */}
              <div className="space-y-2.5 mb-6">
                {phase.subProjects.map((sp, i) => (
                  <SubProjectCard
                    key={sp.name}
                    sp={sp}
                    color={phase.color}
                    isDark={isDark}
                    index={i}
                  />
                ))}
              </div>

              {/* Overall tech heading */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mb-4"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink size={13} style={{ color: phase.color }} />
                  <h3
                    className="text-xs font-semibold uppercase tracking-[3px]"
                    style={{ color: phase.color }}
                  >
                    Core Stack
                  </h3>
                </div>
              </motion.div>

              {/* Overall tech spec chips */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="flex flex-wrap gap-2"
              >
                {phase.techSpecs.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.35 + i * 0.03,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
                      isDark
                        ? "border-[#1a1a1a] bg-[#0a0a0a] text-[#aaa] hover:border-[#333] hover:text-white"
                        : "border-[#e0e0e0] bg-white text-[#666] hover:border-[#bbb] hover:text-black"
                    }`}
                    style={{
                      boxShadow: `inset 0 1px 0 ${phase.color}08`,
                    }}
                    whileHover={{
                      borderColor: phase.color + "40",
                      boxShadow: `0 0 15px ${phase.color}15, inset 0 1px 0 ${phase.color}15`,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Decorative bottom gradient */}
              <div className="mt-10 flex items-center gap-3">
                <div
                  className="h-px flex-1"
                  style={{
                    background: `linear-gradient(90deg, ${phase.color}20, transparent)`,
                  }}
                />
                <span className={`font-mono text-[10px] ${isDark ? "text-[#333]" : "text-[#ccc]"}`}>
                  {phase.id.toUpperCase().replace("-", ".")}
                </span>
                <div
                  className="h-px flex-1"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${phase.color}20)`,
                  }}
                />
              </div>
            </div>

            {/* ── Footer ── */}
            <div className={`border-t px-6 py-4 ${isDark ? "border-[#1a1a1a]" : "border-[#e0e0e0]"}`}>
              <button
                onClick={onClose}
                className={`w-full rounded-xl border py-2.5 text-sm font-medium transition-all duration-300 ${
                  isDark
                    ? "border-[#1a1a1a] bg-[#0a0a0a] text-[#888] hover:border-[#333] hover:text-white"
                    : "border-[#ddd] bg-white text-[#888] hover:border-[#bbb] hover:text-black"
                }`}
              >
                Close Deep Dive
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
