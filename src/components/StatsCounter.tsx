import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Container,
  Rocket,
  Clock,
  Cloud,
  Server,
} from "lucide-react";

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: typeof Globe;
  description: string;
}

const stats: Stat[] = [
  {
    label: "Years of Experience",
    value: 16,
    suffix: "+",
    icon: Clock,
    description: "Infrastructure, DevOps & AI",
  },
  {
    label: "Cloud Regions",
    value: 60,
    suffix: "+",
    icon: Globe,
    description: "Azure & AWS globally",
  },
  {
    label: "Bare-Metal Sites",
    value: 250,
    suffix: "+",
    icon: Server,
    description: "Deployed via Airship",
  },
  {
    label: "K8s Clusters",
    value: 500,
    suffix: "+",
    icon: Container,
    description: "Managed & orchestrated",
  },
  {
    label: "CI/CD Pipelines",
    value: 200,
    suffix: "+",
    icon: Rocket,
    description: "Automated deployments",
  },
  {
    label: "Cloud Services",
    value: 30,
    suffix: "+",
    icon: Cloud,
    description: "Azure PaaS & IaaS",
  },
];

/* ── Animated number that counts up ── */
function AnimatedNumber({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 2000; // ms
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <span>
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
          By the Numbers
        </p>
        <h2
          className="text-3xl font-bold sm:text-4xl text-white"
        >
          Impact at Scale
        </h2>
      </motion.div>

      {/* Stats grid */}
      <div
        ref={ref}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
      >
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border p-5 text-center transition-all duration-300 border-[#262420] bg-[#12110F]/80 hover:border-[#332F2A] hover:shadow-[0_0_30px_rgba(20,184,166,0.06)]"
            >
              {/* Subtle glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.06)_0%,transparent_70%)]" />
              </div>

              <Icon
                size={20}
                className="relative mx-auto mb-3 text-[#14B8A6]"
              />
              <p
                className="relative text-2xl font-bold tabular-nums sm:text-3xl text-white"
              >
                <AnimatedNumber
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </p>
              <p
                className="relative mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#9a9488]"
              >
                {stat.label}
              </p>
              <p
                className="relative mt-0.5 text-[10px] text-[#5c574e]"
              >
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
