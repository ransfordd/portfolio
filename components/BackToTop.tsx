"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const SCROLL_THRESHOLD = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#hero"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: reduced ? 0 : 0.2 }}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-white shadow-lg transition hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          aria-label="Back to top"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
