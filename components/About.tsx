"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    name: "Google Cybersecurity Professional Certificate V2",
    org: "Google, Coursera",
    date: "20th July 2025",
    viewUrl: "https://www.credly.com/badges/83f35155-9e0f-4b62-aded-9a97f3a02568/public_url",
  },
  {
    name: "Microsoft Azure AI Essentials Professional",
    org: "Microsoft, LinkedIn",
    date: "2nd July 2025",
    viewUrl: "https://lnkd.in/dFhVCZ4Q",
  },
  {
    name: "ISC2 Certified in Cybersecurity (CC)",
    org: "ISC2",
    date: "9th January 2026",
    viewUrl: "https://ransfordd.github.io/portfolio-page/#https://www.credly.com/badges/758ed41c-1702-43a0-9c3b-d365506e2d51/linked_in_profile",
  },
  {
    name: "PLP Web Development Program",
    org: "PLP",
    date: "20th July 2025",
    viewUrl: "https://academy.powerlearnprojectafrica.org/verify-cert/e04dd156-26a1-4eaa-9699-7e036437a407",
  },
];

const expertiseTags = [
  "SIEM concepts",
  "Digital Forensics",
  "Security Frameworks",
  "Access Controls",
  "Network Security",
  "Security Operations",
  "Business Continuity",
  "Incident Response",
];

export function About() {
  return (
    <section id="about" className="border-t border-white/5 py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm text-accent"
        >
          About
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          About Me
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-slate-400 leading-relaxed"
        >
          Crafting stunning, responsive and high-performance websites that blend
          design and functionality. I build faster, user-friendly and
          self-optimized web experiences to help businesses grow. As an ISC2
          Certified in Cybersecurity (CC) professional, I bring a unique
          combination of web development expertise and security best practices
          to every project. I ensure your digital presence is not only beautiful
          and interactive but also secure, protecting against modern cyber
          threats. Let&apos;s turn your vision into a powerful, secure website
          that stands out online!
        </motion.p>
        <motion.a
          href="/Ransford_Frimpong_Resume.pdf"
          download
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white transition hover:bg-accent-dark"
        >
          Download CV
        </motion.a>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h4 className="font-display mb-4 text-xl font-semibold tracking-tight text-white">My Certifications</h4>
          <ul className="space-y-4">
            {certifications.map((cert, i) => (
              <motion.li
                key={cert.name}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="rounded-xl border border-slate-600/80 bg-surface-light/30 p-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <p className="font-medium text-white">{cert.name}</p>
                    <p className="text-sm text-slate-500">
                      Issued by {cert.org} · Completed: {cert.date}
                    </p>
                  </div>
                  <a
                    href={cert.viewUrl}
                    target={cert.viewUrl.startsWith("http") ? "_blank" : undefined}
                    rel={cert.viewUrl.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="shrink-0 rounded-lg bg-accent/20 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/30"
                  >
                    View Certificate
                  </a>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Expertise tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-10"
        >
          <p className="mb-4 text-sm font-medium text-slate-500">Expertise areas</p>
          <ul className="flex flex-wrap gap-3">
            {expertiseTags.map((tag, i) => (
              <motion.li
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 * i }}
                className="rounded-full border border-slate-600 bg-surface-light/50 px-4 py-2 text-sm text-slate-300"
              >
                {tag}
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
