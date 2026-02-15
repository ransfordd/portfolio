"use client";

import { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ProjectMediaModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image?: string;
  video?: string;
};

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function ProjectMediaModal({
  isOpen,
  onClose,
  title,
  image,
  video,
}: ProjectMediaModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveRef = useRef<HTMLElement | null>(null);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  const trapFocus = useCallback(
    (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    },
    []
  );

  useEffect(() => {
    if (isOpen) {
      previousActiveRef.current = document.activeElement as HTMLElement | null;
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", trapFocus);
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => closeButtonRef.current?.focus());
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", trapFocus);
      document.body.style.overflow = "";
      previousActiveRef.current?.focus();
    };
  }, [isOpen, handleEscape, trapFocus]);

  const isYouTube = video?.includes("youtube.com") || video?.includes("youtu.be");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-white/10 bg-surface-light shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <h3 id="modal-title" className="text-lg font-semibold text-white">{title}</h3>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex max-h-[calc(90vh-56px)] items-center justify-center bg-black/30 p-4">
              {video && !isYouTube && (
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="max-h-[calc(90vh-8rem)] w-full rounded-lg object-contain"
                />
              )}
              {video && isYouTube && (
                <div className="aspect-video w-full max-w-4xl">
                  <iframe
                    title={title}
                    src={
                      video.includes("embed/")
                        ? video
                        : video.includes("youtu.be/")
                          ? `https://www.youtube.com/embed/${video.split("youtu.be/")[1]?.split("?")[0] ?? ""}`
                          : (() => {
                              try {
                                return `https://www.youtube.com/embed/${new URL(video).searchParams.get("v") ?? ""}`;
                              } catch {
                                return video;
                              }
                            })()
                    }
                    className="h-full w-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              {!video && image && (
                <img
                  src={image}
                  alt={title}
                  className="max-h-[calc(90vh-8rem)] w-full rounded-lg object-contain"
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
