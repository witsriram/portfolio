import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#111] pt-4 pb-12">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(189,0,255,0.04)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[4px] text-[#444]"
        >
          Let&apos;s Build the Future
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-bold text-white sm:text-3xl"
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
            className="flex items-center gap-2 text-sm text-[#888] transition-colors hover:text-white"
          >
            <Mail size={14} className="text-[#BD00FF]" />
            sri@witsriram.com
          </a>
          <a
            href="tel:+16239995550"
            className="flex items-center gap-2 text-sm text-[#888] transition-colors hover:text-white"
          >
            <Phone size={14} className="text-[#BD00FF]" />
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
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#1a1a1a] bg-[#0a0a0a] text-[#666] transition-all duration-300 hover:border-[#333] hover:text-white"
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>

        <p className="mt-4 font-mono text-[11px] text-[#333]">
          © 2026 Sriram Rajendran
        </p>
      </div>
    </footer>
  );
}
