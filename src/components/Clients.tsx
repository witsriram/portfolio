import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "./ThemeContext";

/* All clients with sector tags and local logos */
const clients = [
  { name: "Microsoft", accent: "#00A4EF", sector: "Technology", logo: "/logos/microsoft.svg" },
  { name: "Intel", accent: "#0071C5", sector: "Technology", logo: "/logos/intel.svg" },
  { name: "KPN", accent: "#00A540", sector: "Technology", logo: "/logos/kpn.svg" },
  { name: "Capital One", accent: "#D03027", sector: "Banking", logo: "/logos/capitalone.svg" },
  { name: "AkzoNobel", accent: "#FF6200", sector: "Retail", logo: "/logos/akzonobel.svg" },
  { name: "Amex GBT", accent: "#006FCF", sector: "Travel", logo: "/logos/amexgbt.svg" },
];

export default function Clients() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section ref={ref} className={`relative overflow-hidden border-y py-6 ${
      isDark ? "border-[#1A1816]" : "border-[#e0e0e0]"
    }`}>
      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={`mb-5 text-center text-xl font-semibold sm:text-2xl ${isDark ? "text-[#9a9488]" : "text-[#666]"}`}
        >
          Enterprise Projects I&apos;ve Worked under LTM
        </motion.h2>

        {/* Single horizontal row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 25, delay: i * 0.06 }}
              className={`group flex items-center gap-2.5 rounded-xl border px-4 py-3 transition-all duration-300 ${
                isDark
                  ? "border-[#262420] bg-[#12110F]/60 hover:border-[#332F2A]"
                  : "border-[#e0e0e0] bg-white/60 shadow-sm hover:border-[#ccc]"
              }`}
              whileHover={{
                boxShadow: `0 0 20px ${client.accent}15`,
              }}
            >
              {/* Logo */}
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className={`h-10 w-10 shrink-0 object-contain transition-all duration-300 ${
                  isDark ? "opacity-80 group-hover:opacity-100" : "opacity-70 group-hover:opacity-100"
                }`}
              />

              {/* Name */}
              <span className={`text-sm font-semibold tracking-tight transition-colors duration-300 ${
                isDark ? "text-[#6b665c] group-hover:text-[#e8e4de]" : "text-[#999] group-hover:text-black"
              }`}>
                {client.name}
              </span>

              {/* Sector tag */}
              <span className={`rounded-md px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider ${
                isDark ? "bg-[#1A1816] text-[#3d3a35]" : "bg-[#f0f0f0] text-[#bbb]"
              }`}>
                {client.sector}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
