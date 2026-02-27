import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Container, Rocket, Clock, Cloud, Server } from "lucide-react";

/* ── Data ── */
const stats = [
  { label: "Years",       value: 16,  suffix: "+", icon: Clock },
  { label: "Cloud Regions",value: 60, suffix: "+", icon: Globe },
  { label: "Bare-Metal",  value: 250, suffix: "+", icon: Server },
  { label: "K8s Clusters", value: 500, suffix: "+", icon: Container },
  { label: "CI/CD Pipes", value: 200, suffix: "+", icon: Rocket },
  { label: "Cloud Svcs",  value: 30,  suffix: "+", icon: Cloud },
];

const clients = [
  { name: "Microsoft",  logo: "/logos/microsoft.svg",       accent: "#00A4EF" },
  { name: "Intel",      logo: "/logos/intel.svg",           accent: "#0071C5" },
  { name: "KPN",        logo: "/logos/kpn-logo.svg",        accent: "#00A540" },
  { name: "Capital One", logo: "/logos/capital-one-logo.svg",accent: "#D03027" },
  { name: "AkzoNobel",  logo: "/logos/logo-akzonobel.webp", accent: "#FF6200" },
  { name: "Amex GBT",   logo: "/logos/amexgbt.svg",         accent: "#006FCF" },
];

/* ── Animated counter ── */
function Counter({ target, suffix, run }: { target: number; suffix: string; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf: number;
    const dur = 1800, t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target]);
  return <>{n.toLocaleString()}{suffix}</>;
}

/* ── Component ── */
export default function StatsCounter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-6">
      {/* Section heading — matches other sections */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-6 text-center"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#14B8A6]">
          By the Numbers
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl text-white">
          Impact at Scale
        </h2>
        <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-[#9a9488]">
          Delivered for{" "}
          <img src="/logos/LTM-Logo.svg" alt="LTIMindtree" className="inline h-4 sm:h-5" />
          &nbsp;&amp;&nbsp;
          <img src="/logos/wipro_new_logo.svg" alt="Wipro" className="inline h-6 sm:h-7" style={{ filter: "brightness(2.5)" }} />
        </p>
      </motion.div>

      {/* 4-col grid: [stat][stat][logo][logo] × 3 rows */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[0, 1, 2].map((row) => {
          const s1 = stats[row * 2];
          const s2 = stats[row * 2 + 1];
          const c1 = clients[row * 2];
          const c2 = clients[row * 2 + 1];
          const Icon1 = s1.icon;
          const Icon2 = s2.icon;
          const delay = row * 0.12;

          return [
            /* Stat 1 */
            <motion.div
              key={s1.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay }}
              className="group flex flex-col items-center rounded-lg border border-[#1e1d1a] bg-[#12110F]/70 py-2.5 px-1 text-center transition-colors hover:border-[#2a2824]"
            >
              <Icon1 size={13} className="mb-1 text-[#14B8A6]" />
              <p className="text-lg font-bold tabular-nums leading-tight text-white">
                <Counter target={s1.value} suffix={s1.suffix} run={inView} />
              </p>
              <p className="mt-0.5 text-[7px] font-semibold uppercase tracking-wider text-[#7a756c]">
                {s1.label}
              </p>
            </motion.div>,

            /* Stat 2 */
            <motion.div
              key={s2.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: delay + 0.03 }}
              className="group flex flex-col items-center rounded-lg border border-[#1e1d1a] bg-[#12110F]/70 py-2.5 px-1 text-center transition-colors hover:border-[#2a2824]"
            >
              <Icon2 size={13} className="mb-1 text-[#14B8A6]" />
              <p className="text-lg font-bold tabular-nums leading-tight text-white">
                <Counter target={s2.value} suffix={s2.suffix} run={inView} />
              </p>
              <p className="mt-0.5 text-[7px] font-semibold uppercase tracking-wider text-[#7a756c]">
                {s2.label}
              </p>
            </motion.div>,

            /* Logo 1 */
            <motion.div
              key={c1.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: delay + 0.06 }}
              className="group flex flex-col items-center justify-center rounded-lg border border-[#1e1d1a] bg-[#12110F]/70 py-2.5 px-1 text-center transition-colors hover:border-[#2a2824]"
              whileHover={{ boxShadow: `0 0 16px ${c1.accent}12` }}
            >
              <img src={c1.logo} alt={c1.name} className="h-9 w-16 object-contain opacity-80 brightness-150 transition-opacity group-hover:opacity-100" />
            </motion.div>,

            /* Logo 2 */
            <motion.div
              key={c2.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: delay + 0.09 }}
              className="group flex flex-col items-center justify-center rounded-lg border border-[#1e1d1a] bg-[#12110F]/70 py-2.5 px-1 text-center transition-colors hover:border-[#2a2824]"
              whileHover={{ boxShadow: `0 0 16px ${c2.accent}12` }}
            >
              <img src={c2.logo} alt={c2.name} className="h-9 w-16 object-contain opacity-80 brightness-150 transition-opacity group-hover:opacity-100" />
            </motion.div>,
          ];
        })}
      </div>
    </section>
  );
}
