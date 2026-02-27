import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* All clients with sector tags and local logos */
const clients = [
  { name: "Microsoft", accent: "#00A4EF", sector: "Technology", logo: "/logos/microsoft.svg" },
  { name: "Intel", accent: "#0071C5", sector: "Technology", logo: "/logos/intel.svg" },
  { name: "KPN", accent: "#00A540", sector: "Technology", logo: "/logos/kpn-logo.svg" },
  { name: "Capital One", accent: "#D03027", sector: "Banking", logo: "/logos/capital-one-logo.svg" },
  { name: "AkzoNobel", accent: "#FF6200", sector: "Retail", logo: "/logos/logo-akzonobel.webp" },
  { name: "Amex GBT", accent: "#006FCF", sector: "Travel", logo: "/logos/amexgbt.svg" },
];

export default function Clients() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <div ref={ref}>
      <div>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-5 flex flex-wrap items-center justify-center gap-2 text-center text-lg font-semibold sm:text-xl text-[#9a9488]"
        >
          Enterprise Projects I&apos;ve Worked under{" "}
          <img src="/logos/LTM-Logo.svg" alt="LTIMindtree" className="inline-block h-4 sm:h-5" />
          {" "}&amp;{" "}
          <img src="/logos/wipro_new_logo.svg" alt="Wipro" className="inline-block h-7 sm:h-8" style={{ filter: "brightness(2.5)" }} />
        </motion.h2>

        {/* Single horizontal row */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 25, delay: i * 0.06 }}
              className="group flex flex-col items-center gap-1.5 rounded-xl border px-3 py-3 transition-all duration-300 border-[#262420] bg-[#12110F]/60 hover:border-[#332F2A]"
              whileHover={{
                boxShadow: `0 0 20px ${client.accent}15`,
              }}
            >
              {/* Logo */}
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-10 w-14 shrink-0 object-contain transition-all duration-300 opacity-80 group-hover:opacity-100"
              />

              {/* Name */}
              <span className="text-sm font-semibold tracking-tight transition-colors duration-300 text-[#6b665c] group-hover:text-[#e8e4de]">
                {client.name}
              </span>

              {/* Sector tag */}
              <span className="rounded-md px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider bg-[#1A1816] text-[#3d3a35]">
                {client.sector}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
