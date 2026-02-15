"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const contactItems = [
  { id: "email", value: "ransfordfrimpong55@gmail.com", href: "mailto:ransfordfrimpong55@gmail.com" },
  { id: "phone1", value: "+233 55 904 3307", href: "tel:+233559043307" },
  { id: "phone2", value: "+233 25 706 9605", href: "tel:+233257069605" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/ransfordd" },
  { label: "GitHub", href: "https://github.com/ransfordd" },
  { label: "Instagram", href: "https://www.instagram.com/_.ransford" },
  { label: "X", href: "https://x.com/__ransford" },
];

export function Contact() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = useCallback((value: string, id: string) => {
    const fallbackCopy = () => {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      } catch {
        setCopiedId(null);
      }
      document.body.removeChild(textarea);
    };

    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(value).then(
        () => {
          setCopiedId(id);
          setTimeout(() => setCopiedId(null), 2000);
        },
        () => fallbackCopy()
      );
    } else {
      fallbackCopy();
    }
  }, []);

  return (
    <section id="contact" className="border-t border-white/5 py-24 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 font-mono text-sm text-accent"
        >
          Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Say hello
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10 text-slate-400"
        >
          Have a project in mind or want to chat? Drop a line—I usually reply
          within a day or two.
        </motion.p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="inline-flex items-center gap-2 rounded-full bg-surface-light/80 py-2 pl-4 pr-2 text-sm text-slate-300 ring-1 ring-white/10 transition hover:ring-accent/50"
            >
              <a href={item.href} className="hover:text-accent">
                {item.value}
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(item.value, item.id)}
                aria-label={`Copy ${item.value}`}
                className="rounded-full p-1.5 text-slate-500 transition hover:bg-white/10 hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {copiedId === item.id ? (
                  <span className="text-accent" aria-hidden>✓</span>
                ) : (
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="text-slate-500 transition hover:text-accent"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
