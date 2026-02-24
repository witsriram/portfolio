import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* Fortune 500 client data — styled as typographic logos */
const clients = [
  { name: "Microsoft", accent: "#00A4EF" },
  { name: "Intel", accent: "#0071C5" },
  { name: "Capital One", accent: "#D03027" },
  { name: "AkzoNobel", accent: "#FF6200" },
  { name: "Amex GBT", accent: "#006FCF" },
  { name: "KPN", accent: "#00A540", suffix: "Netherlands" },
];

export default function Clients() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-[#111] pt-6 pb-2">
      {/* Subtle radial backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(189,0,255,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[4px] text-[#444]">
            Fortune 500 Projects
          </p>
          <h2 className="text-xl font-semibold text-[#888] sm:text-2xl">
            Enterprise Projects I&apos;ve Delivered
          </h2>
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: i * 0.08,
              }}
              className="group flex flex-col items-center justify-center rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/60 px-4 py-8 transition-all duration-300 hover:border-[#2a2a2a]"
              whileHover={{
                boxShadow: `0 0 30px ${client.accent}12, inset 0 1px 0 ${client.accent}10`,
              }}
            >
              {/* Typographic logo */}
              <span
                className="text-lg font-bold tracking-tight text-[#555] transition-colors duration-300 group-hover:text-white sm:text-xl"
                style={{
                  /* subtle color tint on hover via CSS variable */
                }}
              >
                <span className="transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ "--accent": client.accent } as React.CSSProperties}>
                  {client.name.charAt(0)}
                </span>
                {client.name.slice(1)}
              </span>

              {client.suffix && (
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-[#333] transition-colors duration-300 group-hover:text-[#555]">
                  {client.suffix}
                </span>
              )}

              {/* Underline accent */}
              <div
                className="mt-3 h-px w-6 rounded-full opacity-0 transition-all duration-300 group-hover:w-10 group-hover:opacity-100"
                style={{ backgroundColor: client.accent }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
