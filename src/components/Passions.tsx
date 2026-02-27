import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Footprints,
  Trophy,
  TrendingUp,
} from "lucide-react";

/* ── Featured photos (best 3) ── */
const featuredPhotos = [
  { src: "/photos/kerrypark_dec_lights_v-1.JPEG", title: "Kerry Park — December Lights", location: "Seattle, WA" },
  { src: "/photos/rainer_lenticular4_girl3.JPEG", title: "Lenticular Clouds over Rainier", location: "Mt. Rainier, WA" },
  { src: "/photos/northenlights-AI-1.JPEG", title: "Aurora Borealis", location: "Pacific Northwest" },
];



export default function Passions() {
  return (
    <section id="passions" className="relative mx-auto max-w-6xl px-6 py-10">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#14B8A6]">
          Beyond the Code
        </p>
        <h2
          className="text-3xl font-bold sm:text-4xl text-white"
        >
          Personal Passions
        </h2>
        <p
          className="mt-3 text-base text-[#9a9488]"
        >
          What fuels me outside of engineering — lenses and finish lines.
        </p>
      </motion.div>

      {/* ──────── Photos ──────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 flex items-center justify-end">
          <Link
            to="/hobbies/photography"
            className="group flex items-center gap-1.5 text-xs font-medium text-[#14B8A6] transition-colors hover:text-[#5EEAD4]"
          >
            View Gallery
            <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {featuredPhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to="/hobbies/photography"
                className="group relative block overflow-hidden rounded-2xl border transition-all duration-300 border-[#262420] hover:border-[#332F2A] hover:shadow-[0_0_30px_rgba(20,184,166,0.06)]"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-4">
                    <p className="text-sm font-semibold text-white">{photo.title}</p>
                    <p className="text-xs text-white/60">{photo.location}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Running stat boxes */}
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { icon: Footprints, value: "2,000 km", label: "Total Distance" },
            { icon: Trophy, value: "4", label: "Half Marathons" },
            { icon: TrendingUp, value: "1:59:00", label: "Personal Best" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-[#262420] bg-[#12110F]/80 p-5 text-center"
              >
                <Icon size={18} className="mx-auto mb-2 text-[#14B8A6]" />
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-[#5c574e]">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
