"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectMediaModal } from "./ProjectMediaModal";

function ProjectCardThumbnail({
  project,
  onPreview,
}: {
  project: Project;
  onPreview: () => void;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImg = project.image && !imgFailed;

  return (
    <button
      type="button"
      onClick={onPreview}
      className="relative block w-full aspect-video overflow-hidden rounded-t-xl border-b border-white/5 bg-surface-lighter/50 transition focus:outline-none focus:ring-2 focus:ring-accent/50"
    >
      {showImg ? (
        <Image
          src={project.image!}
          alt={project.title}
          fill
          className="object-cover transition group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-surface-lighter/80">
          <span className="rounded-full bg-accent/20 p-4 text-accent">
            <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      )}
      <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
    </button>
  );
}

type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image?: string;
  video?: string;
  download?: boolean;
  label?: string;
};

// Image/video paths match public/projects/ filenames. 3D projects use video in pop-up; rest use image.
const projects: Project[] = [
  {
    title: "House",
    description: "A visual representation of a full house with car.",
    tags: ["3D", "Visual"],
    href: "https://ransfordd.github.io/House/",
    image: "/projects/house.png",
    video: "/projects/house.mp4",
  },
  {
    title: "Summer-Hut",
    description:
      "A representation of a summer hut, table, chairs, cups, plates, a tin of Milo, and a tin of Milk.",
    tags: ["3D", "Visual"],
    href: "https://ransfordd.github.io/SummerHut/",
    image: "/projects/hut.png",
    video: "/projects/hut.mp4",
  },
  {
    title: "Solar System",
    description:
      "A representation of the solar system. It includes the sun, the planets and their orbits and the earth's moon.",
    tags: ["3D", "Visual"],
    href: "https://ransfordd.github.io/Solar-sytem/",
    image: "/projects/solar-system.png",
    video: "/projects/solar-system.mp4",
  },
  {
    title: "Shopping Cart",
    description: "A minor app that let's you add, store and delete items.",
    tags: ["Web", "JavaScript"],
    href: "https://add-to-cart-ransfordd.netlify.app/",
    image: "/projects/shopping%20Cart.jpg",
  },
  {
    title: "QR-Code Generator",
    description:
      "This program let's you input a link then it creates a QR code image.",
    tags: ["Web", "JavaScript"],
    href: "https://github.com/ransfordd/Qr-Code-Generater",
    image: "/projects/Qr-code.png",
  },
  {
    title: "Digital Clock",
    description: "It displays a colourful digital running clock.",
    tags: ["Web", "JavaScript"],
    href: "https://github.com/ransfordd/Digital-clock",
    image: "/projects/Digital-Clock.png",
  },
  {
    title: "Calculator",
    description: "A calculator that helps users solve some simple calculations.",
    tags: ["Web", "JavaScript"],
    href: "https://github.com/ransfordd/caculator-2",
    image: "/projects/calculator.png",
  },
  {
    title: "Password-protected door system",
    description:
      "This project simulates a security system where a user must enter a predefined password using a keypad. The entered input is shown on an LCD display, and the system reacts accordingly.",
    tags: ["Hardware", "Arduino", "Security"],
    href: "https://www.tinkercad.com/things/eitdGT4vDcI-password-protected-door-system",
    image: "/projects/password-protected%20door%20system.png",
  },
  {
    title: "Pedestrian Traffic Light System",
    description:
      "A system that operates in a repeating loop that mimics the functioning of real-world traffic lights for pedestrian safety.",
    tags: ["Hardware", "Arduino"],
    href: "https://www.tinkercad.com/things/fEfC5dbP11Q-led-and-lcd-display",
    image: "/projects/Pedestrian%20Traffic%20Light%20System.png",
  },
  {
    title: "Incident handler's journal",
    description:
      "A structured journal for documenting and tracking security incidents and response actions.",
    tags: ["Security", "Documentation"],
    href: "/Incident-handler-s-journal-Portfolio.pdf",
    download: true,
    label: "Download Journal",
    image: "/projects/Incident%20Journal.png",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="border-t border-white/5 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm text-accent"
        >
          Portfolio Showcase
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          Portfolio <span className="text-accent">Showcase</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12 text-slate-400 leading-relaxed"
        >
          Explore my journey through projects and technical expertise. Each
          section represents a milestone in my continuous learning path.
        </motion.p>
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display mb-8 text-xl font-semibold tracking-tight text-white"
        >
          Projects
        </motion.h4>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-surface-light/50 to-surface-light/20 shadow-md shadow-black/20 transition-shadow hover:border-accent/40 hover:shadow-lg hover:shadow-slate-900/50"
            >
              {/* Accent bar */}
              <span className="absolute left-0 top-0 z-10 h-full w-1 bg-gradient-to-b from-accent to-accent-dark opacity-0 transition-opacity group-hover:opacity-100" />
              {/* Subtle corner glow */}
              <span className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-accent/10 blur-xl transition-opacity group-hover:opacity-80" />

              {(project.image || project.video) && (
                <ProjectCardThumbnail
                  project={project}
                  onPreview={() => setSelectedProject(project)}
                />
              )}

              <div className="relative p-4">
                <h4 className="font-display mb-2 text-base font-bold tracking-tight text-white transition group-hover:text-accent">
                  {project.title}
                </h4>
                <p className="mb-3 text-xs leading-relaxed text-slate-400 line-clamp-2">
                  {project.description}
                </p>
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-accent/30 bg-accent/5 px-2 py-0.5 font-mono text-[10px] text-slate-300 transition group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:text-accent-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.href}
                  {...(project.download ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                  className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-medium text-accent ring-1 ring-accent/30 transition group-hover:bg-accent group-hover:text-white group-hover:ring-accent"
                >
                  {project.label ?? "View"}
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProjectMediaModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title ?? ""}
        image={selectedProject?.image}
        video={selectedProject?.video}
      />
    </section>
  );
}
