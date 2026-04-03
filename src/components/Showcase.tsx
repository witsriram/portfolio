import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Container,
  Rocket,
  Clock,
  Cloud,
  Server,
  Wrench,
  Brain,
  Terminal,
  Zap,
} from "lucide-react";

/* ═══════════ DATA ═══════════ */

const stats = [
  { label: "Years", value: 16, suffix: "+", icon: Clock },
  { label: "Cloud Regions", value: 60, suffix: "+", icon: Globe },
  { label: "Bare-Metal", value: 250, suffix: "+", icon: Server },
  { label: "K8s Clusters", value: 500, suffix: "+", icon: Container },
  { label: "CI/CD Pipes", value: 200, suffix: "+", icon: Rocket },
  { label: "Cloud Svcs", value: 30, suffix: "+", icon: Cloud },
];

const clients = [
  { name: "Microsoft", logo: "/logos/microsoft.svg", accent: "#00A4EF" },
  { name: "Intel", logo: "/logos/intel.svg", accent: "#0071C5" },
  { name: "KPN", logo: "/logos/kpn-logo.svg", accent: "#00A540" },
  { name: "Capital One", logo: "/logos/capital-one-logo.svg", accent: "#D03027" },
  { name: "AkzoNobel", logo: "/logos/logo-akzonobel.webp", accent: "#FF6200" },
  { name: "Amex GBT", logo: "/logos/amexgbt.svg", accent: "#006FCF" },
];

const builderCards = [
  {
    icon: Zap,
    title: "ezrecharge.in",
    desc: "Co-founded a startup at 20 — payment gateway, product launch, still live after 17 years.",
    tag: "2008",
    color: "#F59E0B",
    url: "https://ezrecharge.in",
  },
  {
    icon: Wrench,
    title: "D-Engine",
    desc: "LTIMindtree's internal IP — multi-cloud IaC abstraction across Intel, AkzoNobel, Capital One.",
    tag: "2016",
    color: "#14B8A6",
  },
  {
    icon: Server,
    title: "Undercloud at Scale",
    desc: "250+ bare-metal sites with Airship & K8s for North America's largest telecom.",
    tag: "2021",
    color: "#0EA5E9",
  },
  {
    icon: Brain,
    title: "Self-Hosted GPT",
    desc: "Home lab — Azure Arc, KAITO, quantized models at gpt.witsriram.com.",
    tag: "2025",
    color: "#A855F7",
    url: "https://gpt.witsriram.com",
  },
  {
    icon: Rocket,
    title: "LLM Chatbot",
    desc: "RAG chatbot on Azure AI Foundry — GPT-4, ChromaDB, LangChain.",
    tag: "2024",
    color: "#EF4444",
  },
  {
    icon: Terminal,
    title: "This Portfolio",
    desc: "React 19, Tailwind v4, Framer Motion, multi-arch Docker.",
    tag: "2026",
    color: "#14B8A6",
    url: "https://github.com/witsriram/portfolio",
  },
];

/* ═══════════ Counter ═══════════ */

function Counter({ target, suffix, run }: { target: number; suffix: string; run: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf: number;
    const dur = 1800,
      t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target]);
  return (
    <>
      {n.toLocaleString()}
      {suffix}
    </>
  );
}

/* ═══════════ Component ═══════════ */

export default function Showcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-10">
      {/* ── Shared heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mb-8 text-center"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#14B8A6]">
          16 Years of Building
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl text-white">
          Scale &amp; Craft
        </h2>
        <p className="mt-2 flex items-center justify-center gap-1.5 text-sm text-[#9a9488]">
          Delivered for{" "}
          <img src="/logos/LTM-Logo.svg" alt="LTIMindtree" className="inline h-4 sm:h-5" />
          &nbsp;&amp;&nbsp;
          <img
            src="/logos/wipro_new_logo.svg"
            alt="Wipro"
            className="inline h-6 sm:h-7"
            style={{ filter: "brightness(2.5)" }}
          />
        </p>
      </motion.div>

      {/* ── Three pillars ── */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        {/* ════ PILLAR 1: Numbers ════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-[#1e1d1a] bg-[#12110F]/70 p-5"
        >
          <h3 className="mb-4 text-center text-[10px] font-bold uppercase tracking-[3px] text-[#14B8A6]">
            By the Numbers
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="group flex flex-col items-center justify-center rounded-lg border border-[#1a1917] bg-[#0D0C0A]/60 py-4 px-2 text-center transition-colors hover:border-[#2a2824]"
                >
                  <Icon size={16} className="mb-2 text-[#14B8A6]" />
                  <p className="text-lg font-bold tabular-nums leading-tight text-white">
                    <Counter target={s.value} suffix={s.suffix} run={inView} />
                  </p>
                  <p className="mt-1 text-[8px] font-semibold uppercase tracking-wider text-[#7a756c]">
                    {s.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ════ PILLAR 2: Enterprise Clients ════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-2xl border border-[#1e1d1a] bg-[#12110F]/70 p-5"
        >
          <h3 className="mb-4 text-center text-[10px] font-bold uppercase tracking-[3px] text-[#14B8A6]">
            Enterprise Clients
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {clients.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="group flex flex-col items-center justify-center rounded-lg border border-[#1a1917] bg-[#0D0C0A]/60 py-4 px-2 text-center transition-colors hover:border-[#2a2824]"
                whileHover={{ boxShadow: `0 0 16px ${c.accent}12` }}
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="mb-2 h-6 w-14 object-contain opacity-70 brightness-150 transition-opacity group-hover:opacity-100"
                />
                <p className="text-xs font-bold text-white">{c.name}</p>
                <p className="mt-1 text-[8px] font-semibold uppercase tracking-wider text-[#7a756c]">Client</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ════ PILLAR 3: Products I've Built ════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-2xl border border-[#1e1d1a] bg-[#12110F]/70 p-5"
        >
          <h3 className="mb-4 text-center text-[10px] font-bold uppercase tracking-[3px] text-[#14B8A6]">
            Products I&apos;ve Built
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {builderCards.map((card, i) => {
              const Icon = card.icon;
              const Wrapper = card.url ? "a" : "div";
              const linkProps = card.url ? { href: card.url, target: "_blank" as const, rel: "noopener noreferrer" } : {};
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className="group flex flex-col items-center justify-center rounded-lg border border-[#1a1917] bg-[#0D0C0A]/60 py-4 px-2 text-center transition-colors hover:border-[#2a2824]"
                >
                  <div className="mb-2 flex h-6 w-6 items-center justify-center">
                    <Icon size={16} style={{ color: card.color }} />
                  </div>
                  <Wrapper {...linkProps} className="text-xs font-bold text-white hover:underline">{card.title}</Wrapper>
                  <p className="mt-1 text-[8px] font-semibold uppercase tracking-wider text-[#7a756c]">
                    {card.tag}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
