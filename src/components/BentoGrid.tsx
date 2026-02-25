import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { TechCategory } from "../data/career";
import { useTheme } from "./ThemeContext";

/* ── Tech Category Card ── */
function TechCard({
  category,
  index,
}: {
  category: TechCategory;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        delay: index * 0.06,
      }}
      className={`group rounded-2xl border p-5 transition-all duration-300 ${
        isDark
          ? "border-[#1a1a1a] bg-[#0a0a0a]/80 hover:border-[#2a2a2a]"
          : "border-[#e0e0e0] bg-white/80 shadow-sm hover:border-[#ccc]"
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{ backgroundColor: category.color + "12" }}
        >
          <Icon size={16} style={{ color: category.color }} />
        </div>
        <h4 className={`text-sm font-semibold ${isDark ? "text-white" : "text-[#1a1a1a]"}`}>{category.category}</h4>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {category.items.map((item) => (
          <span
            key={item}
            className={`rounded-md border px-2.5 py-1 font-mono text-[11px] transition-colors duration-200 ${
              isDark
                ? "border-[#1a1a1a] bg-[#111] text-[#888] hover:border-[#333] hover:text-white"
                : "border-[#e0e0e0] bg-[#f0f0f0] text-[#666] hover:border-[#bbb] hover:text-black"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Main Bento Grid Section ── */
export default function BentoGrid({
  techMatrix,
}: {
  techMatrix: TechCategory[];
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="skills" className="relative pt-4 pb-8">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#0EA5E9]"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-3xl font-bold sm:text-4xl ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
          >
            The Full Technology Matrix
          </motion.h2>
        </div>

        {/* Tech category cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {techMatrix.map((cat, i) => (
            <TechCard key={cat.category} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
