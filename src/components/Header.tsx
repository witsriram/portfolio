import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, PenLine, Heart, ChevronDown, Footprints, Camera } from "lucide-react";
import { Link } from "react-router-dom";
const links = [
  { icon: Mail, href: "mailto:sri@witsriram.com", label: "sri@witsriram.com" },
  { icon: Github, href: "https://github.com/witsriram", label: "GitHub", external: true },
  { icon: Linkedin, href: "https://linkedin.com/in/witsriram", label: "LinkedIn", external: true },
];

export default function Header() {

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 border-[#262420]/40 bg-[#0D0C0A]/70"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5">
        {/* Logo */}
        <a
          href="/"
          className="group flex items-center gap-1.5 font-mono text-sm transition-colors"
        >
          <span className="text-[#5c574e] transition-colors group-hover:text-[#14B8A6]/60">~/</span>
          <span className="font-semibold tracking-wide transition-colors text-[#e8e4de] group-hover:text-white">sriram</span>
          <span className="inline-block w-[2px] h-4 bg-[#14B8A6] animate-pulse" />
        </a>

        <div className="flex items-center gap-1">
          {/* Blog link */}
          <Link
            to="/blog"
            className="mr-1 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition-all duration-200 text-[#555] hover:bg-white/[0.04] hover:text-white"
          >
            <PenLine size={13} className="shrink-0" />
            <span className="hidden sm:inline">Blog</span>
          </Link>

          {/* Hobbies dropdown */}
          <HobbiesDropdown />
          {/* Contact links */}
          <nav className="flex items-center gap-0.5">
            {links.map(({ icon: Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-all duration-200 text-[#555] hover:bg-white/[0.04] hover:text-white"
                aria-label={label}
              >
                <Icon size={13} className="shrink-0" />
                <span className="hidden text-[11px] font-medium sm:inline">{label}</span>
              </a>
            ))}
          </nav>

        </div>
      </div>
    </motion.header>
  );
}

/* ── Hobbies dropdown ── */
function HobbiesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const hideDropdown = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const items = [
    { to: "/hobbies/running", icon: Footprints, label: "Running" },
    { to: "/hobbies/photography", icon: Camera, label: "Photography" },
  ];

  return (
    <div
      ref={ref}
      className="relative mr-1"
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
    >
      <button
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition-all duration-200 text-[#555] hover:bg-white/[0.04] hover:text-white"
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
            className="absolute right-0 top-full mt-1.5 w-44 overflow-hidden rounded-xl border shadow-xl backdrop-blur-xl border-[#262420] bg-[#12110F]/95"
          >
            {items.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 px-4 py-2.5 text-[12px] font-medium transition-colors text-[#888] hover:bg-white/[0.04] hover:text-white"
              >
                <Icon size={14} className="text-[#14B8A6]" />
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
