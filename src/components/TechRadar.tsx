import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Radar ring definitions ── */
type Ring = "adopt" | "trial" | "assess";

interface RadarBlip {
  label: string;
  ring: Ring;
  quadrant: number; // 0-3
  description: string;
}

const ringMeta: Record<Ring, { label: string; color: string; radius: number }> = {
  adopt:  { label: "Adopt",  color: "#14B8A6", radius: 0.33 },
  trial:  { label: "Trial",  color: "#D97706", radius: 0.63 },
  assess: { label: "Assess", color: "#9a9488", radius: 0.90 },
};

const quadrants = [
  "Languages & Frameworks",
  "Infrastructure & Cloud",
  "AI / ML",
  "DevOps & Tooling",
];

const blips: RadarBlip[] = [
  // Q0 — Languages & Frameworks
  { label: "GoLang",      ring: "adopt",  quadrant: 0, description: "Primary language for platform tooling & Terraform providers" },
  { label: "Python",      ring: "adopt",  quadrant: 0, description: "LLM orchestration, scripting, automation" },
  { label: "Bash",        ring: "adopt",  quadrant: 0, description: "Shell scripting for CI/CD & infra automation" },
  { label: "C#",          ring: "trial",  quadrant: 0, description: "Synthetic monitoring runners & .NET services" },
  { label: "Ruby",        ring: "assess", quadrant: 0, description: "Legacy Chef cookbook development" },
  { label: "PHP",         ring: "assess", quadrant: 0, description: "WordPress migration workloads" },

  // Q1 — Infrastructure & Cloud
  { label: "Kubernetes",  ring: "adopt",  quadrant: 1, description: "Core orchestration — 500+ clusters managed" },
  { label: "Terraform",   ring: "adopt",  quadrant: 1, description: "IaC for all Azure resource provisioning" },
  { label: "Azure",       ring: "adopt",  quadrant: 1, description: "Primary cloud — 60+ regions" },
  { label: "Docker",      ring: "adopt",  quadrant: 1, description: "Container runtime for all workloads" },
  { label: "Airship",     ring: "trial",  quadrant: 1, description: "Bare-metal K8s lifecycle — 250+ sites" },
  { label: "OpenStack",   ring: "trial",  quadrant: 1, description: "Private cloud orchestration via Airship" },
  { label: "Ceph",        ring: "trial",  quadrant: 1, description: "Distributed storage for bare-metal clusters" },
  { label: "AWS",         ring: "assess", quadrant: 1, description: "Secondary cloud for select workloads" },

  // Q2 — AI / ML
  { label: "GPT-4",       ring: "adopt",  quadrant: 2, description: "Core LLM for chatbot & self-healing infra" },
  { label: "RAG",         ring: "adopt",  quadrant: 2, description: "Retrieval-augmented generation for wiki search" },
  { label: "LangChain",   ring: "adopt",  quadrant: 2, description: "LLM orchestration framework" },
  { label: "AutoGen",     ring: "trial",  quadrant: 2, description: "Multi-agent orchestration for infra tasks" },
  { label: "Llama 3.X",   ring: "trial",  quadrant: 2, description: "Open-source LLM evaluation" },
  { label: "Phi 3.5",     ring: "assess", quadrant: 2, description: "Small language model experimentation" },

  // Q3 — DevOps & Tooling
  { label: "Azure DevOps", ring: "adopt", quadrant: 3, description: "Primary CI/CD — pipelines, repos, artifacts" },
  { label: "Jenkins",     ring: "adopt",  quadrant: 3, description: "Legacy CI for Airship deployments" },
  { label: "Helm",        ring: "adopt",  quadrant: 3, description: "Kubernetes package manager" },
  { label: "ArgoCD",      ring: "trial",  quadrant: 3, description: "GitOps continuous delivery" },
  { label: "GitHub Actions", ring: "trial", quadrant: 3, description: "CI/CD for open-source projects" },
  { label: "Chef",        ring: "trial",  quadrant: 3, description: "Configuration management for MFA SRE" },
  { label: "Ansible",     ring: "trial",  quadrant: 3, description: "Playbook-based automation" },
  { label: "DataDog",     ring: "adopt",  quadrant: 3, description: "Observability & monitoring" },
];

/* ── Deterministic placement within a ring/quadrant ── */
function getBlipPosition(
  blip: RadarBlip,
  index: number,
  total: number,
  size: number
) {
  const center = size / 2;
  const ring = ringMeta[blip.ring];
  const prevRadius = blip.ring === "adopt" ? 0 : blip.ring === "trial" ? ringMeta.adopt.radius : ringMeta.trial.radius;
  const midRadius = ((prevRadius + ring.radius) / 2) * center * 0.92;

  // Spread blips within the quadrant arc (90° each)
  const quadStart = blip.quadrant * 90;
  const padding = 12;
  const arcRange = 90 - padding * 2;
  const step = total > 1 ? arcRange / (total - 1) : 0;
  const angle = ((quadStart + padding + step * index) * Math.PI) / 180;

  // Add slight radial jitter for visual spread
  const jitter = (index % 3 - 1) * center * 0.06;

  return {
    x: center + (midRadius + jitter) * Math.cos(angle),
    y: center + (midRadius + jitter) * Math.sin(angle),
  };
}

export default function TechRadar() {
  const [hovered, setHovered] = useState<RadarBlip | null>(null);
  const [activeQuadrant, setActiveQuadrant] = useState<number | null>(null);
  const size = 520;
  const center = size / 2;

  // Group blips by quadrant+ring for deterministic indexing
  const positioned = useMemo(() => {
    const groups: Record<string, RadarBlip[]> = {};
    blips.forEach((b) => {
      const key = `${b.quadrant}-${b.ring}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(b);
    });

    return blips.map((b) => {
      const key = `${b.quadrant}-${b.ring}`;
      const group = groups[key];
      const idx = group.indexOf(b);
      return {
        blip: b,
        pos: getBlipPosition(b, idx, group.length, size),
      };
    });
  }, [size]);

  const filteredBlips =
    activeQuadrant !== null
      ? positioned.filter((p) => p.blip.quadrant === activeQuadrant)
      : positioned;

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-10">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#14B8A6]">
          Technology Choices
        </p>
        <h2
          className="text-3xl font-bold sm:text-4xl text-white"
        >
          Tech Radar
        </h2>
        <p
          className="mt-3 text-sm text-[#9a9488]"
        >
          Hover to explore — technologies I actively use, trial, and assess.
        </p>
      </motion.div>

      {/* Quadrant filter pills */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveQuadrant(null)}
          className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-all duration-200 ${
            activeQuadrant === null
              ? "border-[#14B8A6]/40 bg-[#14B8A6]/10 text-[#14B8A6]"
              : "border-[#262420] text-[#5c574e] hover:text-[#9a9488]"
          }`}
        >
          All
        </button>
        {quadrants.map((q, i) => (
          <button
            key={q}
            onClick={() => setActiveQuadrant(activeQuadrant === i ? null : i)}
            className={`rounded-full border px-3 py-1 text-[11px] font-medium transition-all duration-200 ${
              activeQuadrant === i
                ? "border-[#14B8A6]/40 bg-[#14B8A6]/10 text-[#14B8A6]"
                : "border-[#262420] text-[#5c574e] hover:text-[#9a9488]"
            }`}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Radar SVG + tooltip */}
      <div className="relative mx-auto" style={{ maxWidth: size }}>
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full"
          aria-label="Tech Radar"
        >
          {/* Rings */}
          {(["assess", "trial", "adopt"] as Ring[]).map((ring) => (
            <circle
              key={ring}
              cx={center}
              cy={center}
              r={ringMeta[ring].radius * center * 0.92}
              fill="none"
              stroke="#262420"
              strokeWidth={1}
              strokeDasharray="4 4"
            />
          ))}

          {/* Quadrant lines */}
          {[0, 90, 180, 270].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const r = ringMeta.assess.radius * center * 0.92;
            return (
              <line
                key={angle}
                x1={center}
                y1={center}
                x2={center + r * Math.cos(rad)}
                y2={center + r * Math.sin(rad)}
                stroke="#1A1816"
                strokeWidth={1}
              />
            );
          })}

          {/* Ring labels */}
          {(["adopt", "trial", "assess"] as Ring[]).map((ring) => (
            <text
              key={ring}
              x={center + 8}
              y={center - ringMeta[ring].radius * center * 0.92 + 14}
              fill={ringMeta[ring].color}
              fontSize={10}
              fontWeight={600}
              opacity={0.7}
            >
              {ringMeta[ring].label}
            </text>
          ))}

          {/* Blips */}
          {filteredBlips.map(({ blip, pos }) => {
            const isHovered = hovered?.label === blip.label;
            const dimmed =
              activeQuadrant !== null && blip.quadrant !== activeQuadrant;
            return (
              <g
                key={blip.label}
                onMouseEnter={() => setHovered(blip)}
                onMouseLeave={() => setHovered(null)}
                className="cursor-pointer"
                opacity={dimmed ? 0.15 : 1}
              >
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={isHovered ? 8 : 5}
                  fill={ringMeta[blip.ring].color}
                  opacity={isHovered ? 1 : 0.85}
                  className="transition-all duration-200"
                />
                {isHovered && (
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={14}
                    fill="none"
                    stroke={ringMeta[blip.ring].color}
                    strokeWidth={1.5}
                    opacity={0.4}
                  />
                )}
                <text
                  x={pos.x}
                  y={pos.y - 10}
                  textAnchor="middle"
                  fontSize={9}
                  fontWeight={600}
                  fill={
                    isHovered
                      ? ringMeta[blip.ring].color
                      : "#9a9488"
                  }
                  className="pointer-events-none transition-all duration-200"
                >
                  {blip.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-full z-10 mt-2 w-72 rounded-xl border p-4 shadow-xl backdrop-blur-xl border-[#262420] bg-[#12110F]/95"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: ringMeta[hovered.ring].color }}
                />
                <p
                  className="text-sm font-bold text-white"
                >
                  {hovered.label}
                </p>
                <span
                  className="ml-auto rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase"
                  style={{
                    color: ringMeta[hovered.ring].color,
                    background: `${ringMeta[hovered.ring].color}15`,
                  }}
                >
                  {ringMeta[hovered.ring].label}
                </span>
              </div>
              <p
                className="mt-2 text-xs leading-relaxed text-[#9a9488]"
              >
                {hovered.description}
              </p>
              <p
                className="mt-1.5 text-[10px] text-[#5c574e]"
              >
                {quadrants[hovered.quadrant]}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {(["adopt", "trial", "assess"] as Ring[]).map((ring) => (
          <div key={ring} className="flex items-center gap-2">
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: ringMeta[ring].color }}
            />
            <span
              className="text-[11px] font-medium text-[#9a9488]"
            >
              {ringMeta[ring].label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
