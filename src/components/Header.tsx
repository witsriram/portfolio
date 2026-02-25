import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Sun, Moon, PenLine, Heart, ChevronDown, Footprints, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const links = [
  { icon: Mail, href: "mailto:sri@witsriram.com", label: "sri@witsriram.com" },
  { icon: Github, href: "https://github.com/witsriram", label: "GitHub", external: true },
  { icon: Linkedin, href: "https://linkedin.com/in/witsriram", label: "LinkedIn", external: true },
];

export default function Header() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        isDark
          ? "border-white/[0.04] bg-[#020202]/70"
          : "border-black/[0.06] bg-white/70"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5">
        {/* Logo */}
        <a
          href="/"
          className={`font-mono text-sm font-bold tracking-wider transition-colors ${
            isDark ? "text-[#ccc] hover:text-white" : "text-[#333] hover:text-black"
          }`}
        >
          {"<"}
          <span className="text-[#0EA5E9]">SR</span>
          {" />"}
        </a>

        <div className="flex items-center gap-1">
          {/* Blog link */}
          <Link
            to="/blog"
            className={`mr-1 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition-all duration-200 ${
              isDark
                ? "text-[#555] hover:bg-white/[0.04] hover:text-white"
                : "text-[#888] hover:bg-black/[0.04] hover:text-black"
            }`}
          >
            <PenLine size={13} className="shrink-0" />
            <span className="hidden sm:inline">Blog</span>
          </Link>

          {/* Hobbies dropdown */}
          <HobbiesDropdown isDark={isDark} />
          {/* Contact links */}
          <nav className="flex items-center gap-0.5">
            {links.map(({ icon: Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-all duration-200 ${
                  isDark
                    ? "text-[#555] hover:bg-white/[0.04] hover:text-white"
                    : "text-[#888] hover:bg-black/[0.04] hover:text-black"
                }`}
                aria-label={label}
              >
                <Icon size={13} className="shrink-0" />
                <span className="hidden text-[11px] font-medium sm:inline">{label}</span>
              </a>
            ))}
          </nav>

          {/* Theme toggle */}
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.9, rotate: 180 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`ml-2 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
              isDark
                ? "border-[#1a1a1a] bg-[#0a0a0a] text-yellow-400 hover:border-yellow-400/30 hover:shadow-[0_0_15px_rgba(250,204,21,0.1)]"
                : "border-[#ddd] bg-white text-indigo-600 hover:border-indigo-400/30 hover:shadow-[0_0_15px_rgba(99,102,241,0.1)]"
            }`}
            aria-label="Toggle theme"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}

/* ── Hobbies dropdown ── */
function HobbiesDropdown({ isDark }: { isDark: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const items = [
    { to: "/hobbies/running", icon: Footprints, label: "Running" },
    { to: "/hobbies/photography", icon: Camera, label: "Photography" },
  ];

  return (
    <div ref={ref} className="relative mr-1">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition-all duration-200 ${
          isDark
            ? "text-[#555] hover:bg-white/[0.04] hover:text-white"
            : "text-[#888] hover:bg-black/[0.04] hover:text-black"
        }`}
      >
        <Heart size={13} className="shrink-0" />
        <span className="hidden sm:inline">Hobbies</span>
        <ChevronDown
          size={10}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className={`absolute right-0 top-full mt-1.5 w-44 overflow-hidden rounded-xl border shadow-xl backdrop-blur-xl ${
              isDark
                ? "border-[#1a1a1a] bg-[#0a0a0a]/95"
                : "border-[#e0e0e0] bg-white/95"
            }`}
          >
            {items.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-2.5 px-4 py-2.5 text-[12px] font-medium transition-colors ${
                  isDark
                    ? "text-[#888] hover:bg-white/[0.04] hover:text-white"
                    : "text-[#666] hover:bg-black/[0.03] hover:text-black"
                }`}
              >
                <Icon size={14} className="text-[#0EA5E9]" />
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
