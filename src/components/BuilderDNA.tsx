import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Wrench,
  Server,
  Brain,
  Terminal,
  Zap,
} from "lucide-react";

const builderCards = [
  {
    icon: Zap,
    title: "ezrecharge.in",
    desc: "Co-founded a startup at 20. Built the payment gateway, launched the product — still live after 17 years.",
    tag: "Startup · 2008",
    color: "#F59E0B",
    url: "https://ezrecharge.in",
  },
  {
    icon: Wrench,
    title: "D-Engine",
    desc: "Created LTIMindtree's internal IP — a multi-cloud IaC abstraction deployed across Intel, AkzoNobel, Capital One.",
    tag: "Proprietary IP · 2016",
    color: "#14B8A6",
  },
  {
    icon: Server,
    title: "Undercloud at Scale",
    desc: "Deployed 250+ bare-metal sites with Airship & Kubernetes for North America's largest telecom undercloud.",
    tag: "AT&T · 2021",
    color: "#0EA5E9",
  },
  {
    icon: Brain,
    title: "Self-Hosted GPT",
    desc: "Home lab running Azure Arc, KAITO, and quantized models — a personal AI playground at gpt.witsriram.com.",
    tag: "Home Lab · 2025",
    color: "#A855F7",
    url: "https://gpt.witsriram.com",
  },
  {
    icon: Rocket,
    title: "LLM-Powered Chatbot",
    desc: "Built a RAG chatbot on Azure AI Foundry with GPT-4, ChromaDB, and LangChain for operational engineers.",
    tag: "Microsoft · 2024",
    color: "#EF4444",
  },
  {
    icon: Terminal,
    title: "This Portfolio",
    desc: "React 19, Tailwind v4, Framer Motion, multi-arch Docker — built by AI-assisted engineering in one session.",
    tag: "Side Project · 2026",
    color: "#14B8A6",
    url: "https://github.com/witsriram/portfolio",
  },
];

export default function BuilderDNA() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#14B8A6]">
            Builder DNA
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            Things I&apos;ve Built
          </h2>
          <p className="mt-3 text-sm text-[#5c574e]">
            From launching a startup at 20 to self-hosting GPT — I build things that last.
          </p>
        </div>

        {/* Featured card — ezrecharge (wide) */}
        <motion.a
          href={builderCards[0].url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="group relative mb-3 block overflow-hidden rounded-2xl border border-[#262420] bg-[#12110F]/80 p-8 transition-all duration-300 hover:border-[#332F2A] hover:shadow-[0_0_40px_rgba(245,158,11,0.08)]"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40" style={{ backgroundColor: builderCards[0].color }} />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ backgroundColor: builderCards[0].color + "15" }}>
                <Zap size={24} style={{ color: builderCards[0].color }} />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-white">{builderCards[0].title}</h3>
                  <span className="rounded-full px-2.5 py-0.5 font-mono text-[10px]" style={{ backgroundColor: builderCards[0].color + "10", color: builderCards[0].color }}>
                    {builderCards[0].tag}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[#9a9488]">{builderCards[0].desc}</p>
              </div>
            </div>
            <span className="flex items-center gap-1 text-xs font-medium shrink-0" style={{ color: builderCards[0].color }}>
              Visit <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </motion.a>

        {/* Remaining cards — 5-col asymmetric grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {builderCards.slice(1).map((card, i) => {
            const Icon = card.icon;
            const isWide = i === 0 || i === 3;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`group relative overflow-hidden rounded-2xl border border-[#262420] bg-[#12110F]/80 p-5 transition-all duration-300 hover:border-[#332F2A] hover:shadow-[0_0_30px_rgba(20,184,166,0.06)] ${isWide ? "lg:col-span-3" : "lg:col-span-2"}`}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: card.color + "15" }}
                />
                <div className="relative">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: card.color + "15" }}>
                      <Icon size={18} style={{ color: card.color }} />
                    </div>
                    <span className="rounded-full px-2.5 py-0.5 font-mono text-[10px]" style={{ backgroundColor: card.color + "10", color: card.color }}>
                      {card.tag}
                    </span>
                  </div>
                  <h4 className="mb-1.5 text-sm font-bold text-white">{card.title}</h4>
                  <p className="text-xs leading-relaxed text-[#9a9488]">{card.desc}</p>
                  {card.url && (
                    <a href={card.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium transition-colors hover:underline" style={{ color: card.color }}>
                      Visit <ArrowRight size={10} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
