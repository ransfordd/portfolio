"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ransfordd", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ransfordd", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { label: "Instagram", href: "https://www.instagram.com/_.ransford", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { label: "X (Twitter)", href: "https://x.com/__ransford", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

export function Hero() {
  const reduced = useReducedMotion();
  const d = (dur: number, delay = 0) => ({ duration: reduced ? 0 : dur, delay });

  return (
    <section
      id="hero"
      className="gradient-mesh relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 md:flex-row md:gap-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={d(0.6)}
        className="max-w-3xl text-center md:text-left"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={d(0.3, 0.2)}
          className="mb-2 font-mono text-sm text-accent"
        >
          Hello it&apos;s Me
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={d(0.5, 0.3)}
          className="font-display mb-3 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Ransford Frimpong
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={d(0.5, 0.4)}
          className="font-display mb-6 text-lg font-medium tracking-tight text-accent sm:text-xl"
        >
          Web Development, Python & Cybersecurity
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={d(0.5, 0.45)}
          className="mb-8 text-slate-400 leading-relaxed text-base"
        >
          I&apos;m a web developer with a knack for crafting dynamic, responsive
          websites. Alongside my programming skills, I&apos;m certified in
          cybersecurity (ISC2 CC) with expertise in security principles, access
          controls, network security, security operations, and business
          continuity. I apply security best practices to ensure safer digital
          experiences and thrive at the intersection of creative design,
          responsible coding, and robust security.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={d(0.3, 0.55)}
          className="mb-8 flex justify-center gap-4 md:justify-start"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={d(0.2, 0.6 + i * 0.05)}
              className="rounded-full border border-slate-600 p-2.5 text-slate-400 transition hover:border-accent hover:text-accent"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d={link.icon} />
              </svg>
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={d(0.3, 0.6)}
          className="flex flex-wrap items-center justify-center gap-4 md:justify-start"
        >
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition hover:bg-accent-dark"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-600 px-6 py-3 font-medium text-slate-300 transition hover:border-accent hover:text-accent"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={d(0.5, 0.4)}
        className="relative mt-10 h-56 w-56 shrink-0 md:mt-0 md:h-72 md:w-72"
      >
        <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-accent/30 ring-4 ring-white/5">
          <Image
            src="/images/me.jpg"
            alt="Ransford Frimpong"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 224px, 288px"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={d(0.3, 1)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          aria-label="Scroll to about"
          animate={{ y: reduced ? 0 : [0, 8, 0] }}
          transition={{ repeat: reduced ? 0 : Infinity, duration: reduced ? 0 : 2 }}
          className="block rounded-full border border-slate-600 p-2 text-slate-500 hover:text-accent"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
