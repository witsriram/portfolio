import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className={`relative border-t pt-4 pb-12 ${isDark ? "border-[#111]" : "border-[#e0e0e0]"}`}>
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`font-mono text-xs uppercase tracking-[4px] ${isDark ? "text-[#444]" : "text-[#aaa]"}`}
        >
          Let&apos;s Build the Future
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-2xl font-bold sm:text-3xl ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
        >
          Sriram Rajendran
        </motion.h3>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6"
        >
          <a
            href="mailto:sri@witsriram.com"
            className={`flex items-center gap-2 text-sm transition-colors ${
              isDark ? "text-[#888] hover:text-white" : "text-[#666] hover:text-black"
            }`}
          >
            <Mail size={14} className="text-[#0EA5E9]" />
            sri@witsriram.com
          </a>
          <a
            href="tel:+16239995550"
            className={`flex items-center gap-2 text-sm transition-colors ${
              isDark ? "text-[#888] hover:text-white" : "text-[#666] hover:text-black"
            }`}
          >
            <Phone size={14} className="text-[#0EA5E9]" />
            (623) 999-5550
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-center gap-4"
        >
          {[
            { icon: Github, href: "https://github.com/witsriram", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/witsriram", label: "LinkedIn" },
            { icon: Mail, href: "mailto:sri@witsriram.com", label: "Email" },
            { icon: Phone, href: "tel:+16239995550", label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label === "Phone" || label === "Email" ? undefined : "_blank"}
              rel={label === "Phone" || label === "Email" ? undefined : "noopener noreferrer"}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
                isDark
                  ? "border-[#1a1a1a] bg-[#0a0a0a] text-[#666] hover:border-[#333] hover:text-white"
                  : "border-[#e0e0e0] bg-white text-[#999] shadow-sm hover:border-[#bbb] hover:text-black"
              }`}
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>

        <p className={`mt-4 font-mono text-[11px] ${isDark ? "text-[#333]" : "text-[#ccc]"}`}>
          © 2026 Sriram Rajendran
        </p>
      </div>
    </footer>
  );
}
