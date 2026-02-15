"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduced = useReducedMotion();
  const duration = reduced ? 0 : 0.5;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[var(--background)]/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-display text-xl font-semibold tracking-tight text-white transition hover:text-accent"
        >
          Portfolio
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration, delay: reduced ? 0 : 0.1 * i }}
            >
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-accent"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 rounded-full bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 rounded-full bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration }}
            className="overflow-hidden border-t border-white/5 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
