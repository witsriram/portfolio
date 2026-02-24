import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { CareerPhase } from "../data/career";

/* ── Backdrop ── */
function Backdrop({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
    />
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
            className="slide-out-scroll fixed right-0 top-0 z-50 flex h-full w-full flex-col overflow-y-auto border-l border-[#1a1a1a] bg-[#050505]/95 backdrop-blur-xl sm:w-[520px] lg:w-[600px]"
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
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#1a1a1a] bg-[#050505]/90 px-6 py-4 backdrop-blur-md">
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
                  <p className="font-mono text-[10px] text-[#555]">
                    {phase.years}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] text-[#666] transition-colors hover:border-[#333] hover:text-white"
                aria-label="Close panel"
              >
                <X size={14} />
              </button>
            </div>

            {/* ── Content ── */}
            <div className="flex-1 px-6 py-8">
              {/* Title block */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                <h2 className="mb-2 text-2xl font-bold text-white">
                  {phase.title}
                </h2>
                <p className="mb-1 text-base text-[#ccc]">{phase.project}</p>
                <p className="mb-8 text-sm leading-relaxed text-[#777]">
                  {phase.impact}
                </p>
              </motion.div>

              {/* Divider */}
              <div
                className="mb-8 h-px w-full"
                style={{
                  background: `linear-gradient(90deg, ${phase.color}30, transparent)`,
                }}
              />

              {/* Tech Specs heading */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="mb-5"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink size={13} style={{ color: phase.color }} />
                  <h3
                    className="text-xs font-semibold uppercase tracking-[3px]"
                    style={{ color: phase.color }}
                  >
                    Technical Deep Dive
                  </h3>
                </div>
                <p className="mt-1 text-[12px] text-[#555]">
                  Core technologies and tools powering this era
                </p>
              </motion.div>

              {/* Tech spec chips */}
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
                      delay: 0.35 + i * 0.04,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="rounded-lg border border-[#1a1a1a] bg-[#0a0a0a] px-3 py-1.5 font-mono text-xs text-[#aaa] transition-all duration-200 hover:border-[#333] hover:text-white"
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
              <div className="mt-12 flex items-center gap-3">
                <div
                  className="h-px flex-1"
                  style={{
                    background: `linear-gradient(90deg, ${phase.color}20, transparent)`,
                  }}
                />
                <span className="font-mono text-[10px] text-[#333]">
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
            <div className="border-t border-[#1a1a1a] px-6 py-4">
              <button
                onClick={onClose}
                className="w-full rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] py-2.5 text-sm font-medium text-[#888] transition-all duration-300 hover:border-[#333] hover:text-white"
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
