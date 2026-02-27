import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Camera,
  ArrowRight,
  Trophy,
  Footprints,
  TrendingUp,
  MapPin,
  Clock,
} from "lucide-react";

/* ── Featured photos (pick your best 6) ── */
const featuredPhotos = [
  { src: "/photos/kerrypark_dec_lights_v-1.JPEG", title: "Kerry Park — December Lights", location: "Seattle, WA" },
  { src: "/photos/rainer_lenticular4_girl3.JPEG", title: "Lenticular Clouds over Rainier", location: "Mt. Rainier, WA" },
  { src: "/photos/northenlights-AI-1.JPEG", title: "Aurora Borealis", location: "Pacific Northwest" },
  { src: "/photos/fall_lake_house-10.JPEG", title: "Autumn Reflections", location: "Lake House, WA" },
  { src: "/photos/pink-moon2-1.JPEG", title: "Pink Moon Rising", location: "Washington" },
  { src: "/photos/moont_11_2023_2-1-3.JPEG", title: "Rainier at Golden Hour", location: "Mt. Rainier, WA" },
];

/* ── Running highlights ── */
const runStats = [
  { label: "Total Distance", value: "2,000 km", icon: Footprints },
  { label: "Personal Best", value: "1:59", icon: TrendingUp },
  { label: "Races", value: "3", icon: Trophy },
];

const featuredRaces = [
  { year: 2019, name: "Scottsdale City Marathon", location: "Scottsdale, AZ", time: "1:59", isPR: true },
  { year: 2020, name: "Sedona Half Marathon", location: "Sedona, AZ", time: "2:07", isPR: false },
  { year: 2025, name: "Kirkland Half Marathon", location: "Kirkland, WA", time: "2:30", isPR: false },
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

      {/* ──────── Photography ──────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-20"
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Camera size={18} className="text-[#14B8A6]" />
            <h3
              className="text-lg font-bold text-white"
            >
              Photography
            </h3>
          </div>
          <Link
            to="/hobbies/photography"
            className="group flex items-center gap-1.5 text-xs font-medium text-[#14B8A6] transition-colors hover:text-[#5EEAD4]"
          >
            View Gallery
            <ArrowRight
              size={12}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Photo grid — 3 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="p-4">
                    <p className="text-sm font-semibold text-white">
                      {photo.title}
                    </p>
                    <p className="text-xs text-white/60">{photo.location}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ──────── Running ──────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Footprints size={18} className="text-[#14B8A6]" />
            <h3
              className="text-lg font-bold text-white"
            >
              Half Marathons
            </h3>
          </div>
          <Link
            to="/hobbies/running"
            className="group flex items-center gap-1.5 text-xs font-medium text-[#14B8A6] transition-colors hover:text-[#5EEAD4]"
          >
            View All Races
            <ArrowRight
              size={12}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Stats strip */}
        <div className="mb-6 grid grid-cols-3 gap-3">
          {runStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-2xl border p-4 text-center transition-colors border-[#262420] bg-[#12110F]/80"
              >
                <Icon size={16} className="mx-auto mb-1.5 text-[#14B8A6]" />
                <p
                  className="text-xl font-bold text-white"
                >
                  {stat.value}
                </p>
                <p
                  className="mt-0.5 text-[10px] uppercase tracking-wider text-[#5c574e]"
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Race cards */}
        <div className="space-y-3">
          {featuredRaces.map((race, i) => (
            <motion.div
              key={race.name}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Link
                to="/hobbies/running"
                className="group flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 border-[#262420] bg-[#12110F]/80 hover:border-[#332F2A]"
              >
                {/* Trophy icon */}
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#1A1816]"
                >
                  <Trophy size={16} className="text-[#14B8A6]" />
                </div>

                {/* Race info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p
                      className="text-sm font-bold truncate text-white"
                    >
                      {race.name}
                    </p>
                    {race.isPR && (
                      <span className="shrink-0 rounded-full bg-[#14B8A6]/10 px-2 py-0.5 text-[9px] font-semibold text-[#14B8A6]">
                        PR
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-3">
                    <span
                      className="flex items-center gap-1 text-[11px] text-[#5c574e]"
                    >
                      <MapPin size={10} />
                      {race.location}
                    </span>
                    <span
                      className="flex items-center gap-1 text-[11px] text-[#5c574e]"
                    >
                      <Clock size={10} />
                      {race.time}
                    </span>
                  </div>
                </div>

                {/* Year */}
                <span
                  className="shrink-0 font-mono text-xs font-bold text-[#3d3a35]"
                >
                  {race.year}
                </span>

                <ArrowRight
                  size={14}
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 text-[#3d3a35]"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
