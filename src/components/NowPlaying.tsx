import { motion } from "framer-motion";
import {
  BookOpen,
  Headphones,
  FlaskConical,
  ExternalLink,
} from "lucide-react";

interface NowItem {
  category: "reading" | "listening" | "exploring";
  title: string;
  subtitle: string;
  url?: string;
  emoji: string;
}

const nowItems: NowItem[] = [
  {
    category: "reading",
    title: "Designing Data-Intensive Applications",
    subtitle: "Martin Kleppmann",
    emoji: "📖",
    url: "https://dataintensive.net/",
  },
  {
    category: "listening",
    title: "The Pragmatic Engineer Podcast",
    subtitle: "Gergely Orosz",
    emoji: "🎧",
    url: "https://www.pragmaticengineer.com/podcast",
  },
  {
    category: "exploring",
    title: "Multi-Agent Systems with AutoGen",
    subtitle: "Agentic AI for infrastructure self-healing",
    emoji: "🧪",
  },
];

const categoryMeta = {
  reading: {
    icon: BookOpen,
    label: "Currently Reading",
    color: "#14B8A6",
  },
  listening: {
    icon: Headphones,
    label: "Currently Listening",
    color: "#D97706",
  },
  exploring: {
    icon: FlaskConical,
    label: "Currently Exploring",
    color: "#0D9488",
  },
};

export default function NowPlaying() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#14B8A6]">
          What I&apos;m Into
        </p>
        <h2
          className="text-3xl font-bold sm:text-4xl text-white"
        >
          Now Playing
        </h2>
        <p
          className="mt-3 text-sm text-[#9a9488]"
        >
          Books, podcasts, and tech I&apos;m currently deep-diving into.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {nowItems.map((item, i) => {
          const meta = categoryMeta[item.category];
          const Icon = meta.icon;
          const Wrapper = item.url ? "a" : "div";
          const wrapperProps = item.url
            ? {
                href: item.url,
                target: "_blank" as const,
                rel: "noopener noreferrer",
              }
            : {};

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Wrapper
                {...wrapperProps}
                className="group relative block overflow-hidden rounded-2xl border p-6 transition-all duration-300 border-[#262420] bg-[#12110F]/80 hover:border-[#332F2A] hover:shadow-[0_0_30px_rgba(20,184,166,0.06)]"
              >
                {/* Ambient glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${meta.color}08, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Category pill */}
                <div className="mb-4 flex items-center gap-2">
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-lg"
                    style={{ background: `${meta.color}15` }}
                  >
                    <Icon size={14} style={{ color: meta.color }} />
                  </div>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: meta.color }}
                  >
                    {meta.label}
                  </span>
                </div>

                {/* Emoji */}
                <p className="mb-3 text-3xl">{item.emoji}</p>

                {/* Title */}
                <h3
                  className="text-sm font-bold leading-snug text-white"
                >
                  {item.title}
                  {item.url && (
                    <ExternalLink
                      size={10}
                      className="ml-1.5 inline opacity-0 transition-opacity duration-200 group-hover:opacity-60"
                    />
                  )}
                </h3>

                {/* Subtitle */}
                <p
                  className="mt-1.5 text-xs text-[#9a9488]"
                >
                  {item.subtitle}
                </p>

                {/* Animated bar at bottom */}
                <div className="mt-4 h-0.5 w-full overflow-hidden rounded-full">
                  <div
                    className="h-full rounded-full bg-[#262420]"
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: meta.color }}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "65%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        delay: 0.3 + i * 0.15,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </div>
              </Wrapper>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
