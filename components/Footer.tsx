"use client";

import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-white/5 py-8 px-6"
    >
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {year} Portfolio. Built with Next.js & Tailwind.
        </p>
        <a
          href="#hero"
          className="text-sm text-slate-500 transition hover:text-accent"
        >
          Back to top
        </a>
      </div>
    </motion.footer>
  );
}
