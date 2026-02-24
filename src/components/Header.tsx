import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const links = [
  { icon: Mail, href: "mailto:sri@witsriram.com", label: "sri@witsriram.com" },
  { icon: Phone, href: "tel:+16239995550", label: "(623) 999-5550" },
  { icon: Github, href: "https://github.com/witsriram", label: "GitHub", external: true },
  { icon: Linkedin, href: "https://linkedin.com/in/witsriram", label: "LinkedIn", external: true },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.04] bg-[#020202]/70 backdrop-blur-lg"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5">
        {/* Logo / Name */}
        <a href="#" className="font-mono text-xs font-semibold tracking-wider text-[#888] transition-colors hover:text-white">
          SR<span className="text-[#BD00FF]">.</span>
        </a>

        {/* Contact links */}
        <nav className="flex items-center gap-1">
          {links.map(({ icon: Icon, href, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[#555] transition-all duration-200 hover:bg-white/[0.04] hover:text-white"
              aria-label={label}
            >
              <Icon size={13} className="shrink-0" />
              <span className="hidden text-[11px] font-medium sm:inline">{label}</span>
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
