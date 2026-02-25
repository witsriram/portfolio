import { motion } from "framer-motion";
import { Trophy, MapPin, Clock, Footprints, Calendar, TrendingUp } from "lucide-react";
import { useTheme } from "../components/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface Race {
  year: number;
  name: string;
  location: string;
  time: string;
  type: string;
}

const races: Race[] = [
  { year: 2019, name: "Scottsdale City Marathon", location: "Scottsdale, AZ", time: "1:59", type: "Half Marathon" },
  { year: 2020, name: "Sedona Half Marathon", location: "Sedona, AZ", time: "2:07", type: "Half Marathon" },
  { year: 2025, name: "Kirkland Half Marathon", location: "Kirkland, WA", time: "2:30", type: "Half Marathon" },
];

const stats = [
  { label: "Total Distance", value: "2,000 km", icon: Footprints },
  { label: "Races Completed", value: "3", icon: Trophy },
  { label: "Personal Best", value: "1:59", icon: TrendingUp },
  { label: "Years Running", value: "6+", icon: Calendar },
];

export default function Running() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 ${
        isDark ? "bg-void text-text-primary" : "bg-[#f5f5f7] text-[#1a1a1a]"
      }`}
    >
      <Header />

      <main className="mx-auto max-w-4xl px-6 pt-24 pb-20">
        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#0EA5E9]">
            Half Marathons
          </p>
          <h1
            className={`text-4xl font-bold sm:text-5xl ${
              isDark ? "text-white" : "text-[#1a1a1a]"
            }`}
          >
            Running
          </h1>
          <p
            className={`mt-3 text-base leading-relaxed ${
              isDark ? "text-[#888]" : "text-[#666]"
            }`}
          >
            From the red rocks of Sedona to the Pacific Northwest —
            chasing finish lines and personal bests.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`rounded-2xl border p-5 text-center transition-colors ${
                  isDark
                    ? "border-[#1a1a1a] bg-[#0a0a0a]/80"
                    : "border-[#e0e0e0] bg-white/80 shadow-sm"
                }`}
              >
                <Icon
                  size={20}
                  className="mx-auto mb-2 text-[#0EA5E9]"
                />
                <p
                  className={`text-2xl font-bold ${
                    isDark ? "text-white" : "text-[#1a1a1a]"
                  }`}
                >
                  {stat.value}
                </p>
                <p
                  className={`mt-1 text-xs ${
                    isDark ? "text-[#555]" : "text-[#aaa]"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Race results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2
            className={`mb-6 text-lg font-bold ${
              isDark ? "text-white" : "text-[#1a1a1a]"
            }`}
          >
            Race Results
          </h2>

          <div className="space-y-4">
            {races.map((race, i) => (
              <motion.div
                key={race.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                  isDark
                    ? "border-[#1a1a1a] bg-[#0a0a0a]/80 hover:border-[#2a2a2a] hover:shadow-[0_0_30px_rgba(14,165,233,0.06)]"
                    : "border-[#e0e0e0] bg-white/80 shadow-sm hover:border-[#ccc] hover:shadow-md"
                }`}
              >
                {/* Year badge */}
                <div className="absolute right-6 top-6">
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-mono font-bold ${
                      isDark
                        ? "border-[#1a1a1a] bg-[#111] text-[#0EA5E9]"
                        : "border-[#e0e0e0] bg-[#f0f0f0] text-[#0EA5E9]"
                    }`}
                  >
                    {race.year}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  {/* Trophy icon */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                      isDark ? "bg-[#111]" : "bg-[#f0f0f0]"
                    }`}
                  >
                    <Trophy size={18} className="text-[#0EA5E9]" />
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`text-base font-bold ${
                        isDark ? "text-white" : "text-[#1a1a1a]"
                      }`}
                    >
                      {race.name}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-4">
                      <span
                        className={`flex items-center gap-1.5 text-xs ${
                          isDark ? "text-[#555]" : "text-[#aaa]"
                        }`}
                      >
                        <MapPin size={12} />
                        {race.location}
                      </span>
                      <span
                        className={`flex items-center gap-1.5 text-xs ${
                          isDark ? "text-[#555]" : "text-[#aaa]"
                        }`}
                      >
                        <Clock size={12} />
                        {race.time}
                      </span>
                      <span
                        className={`rounded-md border px-2 py-0.5 text-[10px] font-medium ${
                          isDark
                            ? "border-[#1a1a1a] bg-[#111] text-[#666]"
                            : "border-[#e0e0e0] bg-[#f0f0f0] text-[#888]"
                        }`}
                      >
                        {race.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub-2 hour badge for PR */}
                {race.time === "1:59" && (
                  <div className="mt-3 ml-14">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#0EA5E9]/10 px-3 py-1 text-[10px] font-semibold text-[#0EA5E9]">
                      <TrendingUp size={10} />
                      Sub-2 Hour Finish
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`mt-14 rounded-2xl border p-6 text-center ${
            isDark
              ? "border-[#1a1a1a] bg-[#0a0a0a]/60"
              : "border-[#e0e0e0] bg-white/60 shadow-sm"
          }`}
        >
          <Footprints size={24} className="mx-auto mb-3 text-[#0EA5E9]" />
          <p
            className={`text-sm leading-relaxed ${
              isDark ? "text-[#888]" : "text-[#666]"
            }`}
          >
            2,000 km and counting. Every mile is a reminder that consistency beats intensity —
            in running and in engineering.
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
