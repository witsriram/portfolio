import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { BentoItem, TechCategory } from "../data/career";

/* ── Single Bento Tile ── */
function BentoTile({ item, index }: { item: BentoItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const Icon = item.icon;

  const spanClass =
    item.span === "wide"
      ? "sm:col-span-2"
      : item.span === "tall"
        ? "row-span-2"
        : "";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        delay: index * 0.05,
      }}
      className={`group relative overflow-hidden rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/80 p-5 transition-all duration-300 hover:border-[#2a2a2a] ${spanClass}`}
      whileHover={{
        boxShadow: `0 0 30px ${item.color}15, inset 0 1px 0 ${item.color}15`,
      }}
    >
      {/* Subtle gradient background on hover */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${item.color}06 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div className="mb-3 flex items-center justify-between">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ backgroundColor: item.color + "12" }}
          >
            <Icon size={16} style={{ color: item.color }} />
          </div>
          <span className="text-[10px] font-medium uppercase tracking-wider text-[#444]">
            {item.title}
          </span>
        </div>

        <p className="text-2xl font-bold text-white">{item.value}</p>
        <p className="mt-1 text-[13px] text-[#666]">{item.subtitle}</p>
      </div>
    </motion.div>
  );
}

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
      className="group rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/80 p-5 transition-all duration-300 hover:border-[#2a2a2a]"
    >
      <div className="mb-4 flex items-center gap-3">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{ backgroundColor: category.color + "12" }}
        >
          <Icon size={16} style={{ color: category.color }} />
        </div>
        <h4 className="text-sm font-semibold text-white">{category.category}</h4>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {category.items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-[#1a1a1a] bg-[#111] px-2.5 py-1 font-mono text-[11px] text-[#888] transition-colors duration-200 hover:border-[#333] hover:text-white"
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
  highlights,
  techMatrix,
}: {
  highlights: BentoItem[];
  techMatrix: TechCategory[];
}) {
  return (
    <section id="skills" className="relative pt-4 pb-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#2E86C1]"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            The Full Technology Matrix
          </motion.h2>
        </div>

        {/* Bento highlight tiles */}
        <div className="mb-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <BentoTile key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Tech category cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {techMatrix.map((cat, i) => (
            <TechCard key={cat.category} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
