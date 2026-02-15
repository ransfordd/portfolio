# Portfolio Website — Project Documentation

> **Maintenance:** This document must be updated whenever a feature is added, removed, or edited. Keep it in sync with the codebase so it remains the single source of truth for the project.

---

## 1. Project Overview

| Item | Detail |
|------|--------|
| **Name** | Portfolio |
| **Version** | 0.1.0 |
| **Owner** | Ransford Frimpong |
| **Purpose** | Personal portfolio showcasing web development, cybersecurity, certifications, projects, and contact information. |
| **Tech stack** | Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion |
| **Run locally** | `docker compose up --build` → site at **http://localhost:2580** |

---

## 2. Technology Stack

### 2.1 Core

- **Next.js 14** — App Router for routing, server components, and static generation.
- **React 18** — UI components and client interactivity.
- **TypeScript** — Typing across the project.

### 2.2 Styling & motion

- **Tailwind CSS** — Utility-first styling; custom theme in `tailwind.config.ts`.
- **Framer Motion** — Scroll and hover animations, modal transitions, mobile menu.

### 2.3 Development & deployment

- **Docker** — Dev and prod via `Dockerfile` and `docker-compose.yml`.
- **Node 20 (Alpine)** — Base image for the app container.

---

## 3. Repository Structure

```
├── app/
│   ├── globals.css          # Global styles, CSS variables, gradient mesh
│   ├── layout.tsx           # Root layout, fonts, metadata, Navbar/Footer
│   └── page.tsx             # Home page: Hero → About → Projects → Contact
├── components/
│   ├── Navbar.tsx           # Fixed header, desktop/mobile nav, menu toggle
│   ├── Hero.tsx             # Hero section, intro, profile image, CTAs
│   ├── About.tsx            # Bio, Download CV, certifications, expertise tags
│   ├── Projects.tsx        # Project grid, cards, thumbnails, modal trigger
│   ├── ProjectMediaModal.tsx # Pop-up for project image/video
│   ├── Contact.tsx          # Contact section, email/phone, copy buttons, social links
│   ├── BackToTop.tsx        # Floating Back to top button (visible after scroll)
│   └── Footer.tsx           # Copyright, “Back to top” link
├── public/
│   ├── robots.txt           # Allow all, sitemap URL (update domain when deployed)
│   ├── sitemap.xml          # Single URL sitemap (update domain when deployed)
│   ├── images/
│   │   └── me.jpg           # Profile photo (Hero)
│   ├── projects/            # Project media (see Section 7)
│   ├── Ransford_Frimpong_Resume.pdf
│   └── Incident-handler-s-journal-Portfolio.pdf
├── Dockerfile               # Dev image: install deps, run next dev
├── docker-compose.yml       # Port 2580 → 3000, volume mount, polling
├── next.config.js           # Optional standalone output for Docker prod
├── package.json
├── tailwind.config.ts       # Fonts, accent/surface colors
├── tsconfig.json
└── PROJECT_DOCUMENTATION.md # This file
```

---

## 4. Application Structure & Data Flow

- **Single-page layout:** One scrollable page with sections `#hero`, `#about`, `#projects`, `#contact`.
- **Layout** (`app/layout.tsx`): Skip link (focus-only), `<Navbar />`, `<main id="main-content">{children}</main>`, `<Footer />`, `<BackToTop />`. SEO: Open Graph and Twitter Card metadata; `metadataBase` and optional `NEXT_PUBLIC_SITE_URL`.
- **Home** (`app/page.tsx`): Renders `<Hero />`, `<About />`, `<Projects />`, `<Contact />` in order.
- **Smooth scroll:** `html { scroll-behavior: smooth }` in `globals.css`; `prefers-reduced-motion: reduce` sets `scroll-behavior: auto`. Nav links use `#section-id` anchors.

---

## 5. Component Reference

### 5.1 `Navbar` (`components/Navbar.tsx`)

- **Role:** Fixed top bar; navigation and mobile menu.
- **State:** `mobileOpen` — toggles mobile menu visibility.
- **Elements and behavior:**

| Element | Type | Function |
|--------|------|----------|
| “Portfolio” (top-left) | Link | Scrolls to `#hero`. Hover: text turns accent. |
| Desktop nav items | Links | Home → `#hero`, About → `#about`, Projects → `#projects`, Contact → `#contact`. Hover: text turns accent. |
| Hamburger (mobile) | Button | `aria-label="Toggle menu"`. Toggles `mobileOpen`; animates to X when open. |
| Mobile menu panel | Animated div | When `mobileOpen`: shows same nav links; clicking a link closes menu (`setMobileOpen(false)`). |

- **Animations:** Header slides in from top; desktop items stagger in; mobile menu height animate open/close. Respects `prefers-reduced-motion` (Framer Motion `useReducedMotion`).

---

### 5.2 Skip link (in layout)

- **Role:** Accessibility: first focusable element for keyboard users.
- **Element:** A link “Skip to main content” with `href="#main-content"`. Positioned off-screen (`-translate-y-full`); on focus it moves into view (`focus:translate-y-0`) and is styled (accent background, ring). Main content has `id="main-content"`.

---

### 5.3 `Hero` (`components/Hero.tsx`)

- **Role:** First screen: name, title, short bio, profile image, social links, primary actions.
- **Content (hardcoded):** “Hello it's Me”, “Ransford Frimpong”, “Web Development, Python & Cybersecurity”, bio paragraph.
- **Elements and behavior:**

| Element | Type | Function |
|--------|------|----------|
| Social icons (GitHub, LinkedIn, Instagram, X) | Links | Open in new tab (`target="_blank"`, `rel="noopener noreferrer"`). `aria-label` per platform. |
| “View Projects” | Link | Scrolls to `#projects`. Primary CTA style. |
| “Get in Touch” | Link | Scrolls to `#contact`. Outline style. |
| Profile image | Next/Image | `src="/images/me.jpg"`, alt “Ransford Frimpong”, priority load. |
| Bottom chevron | Link | `aria-label="Scroll to about"`. Scrolls to `#about`. Subtle bounce animation. |

- **Social URLs:** GitHub, LinkedIn, Instagram, X (Twitter) — defined in `socialLinks` array. Respects `prefers-reduced-motion` for all motion.

---

### 5.4 `About` (`components/About.tsx`)

- **Role:** Bio, Download CV, certifications list, and expertise tags.
- **Sections:** About Me text → Download CV → My Certifications → Expertise areas (tags).
- **Elements and behavior:**

| Element | Type | Function |
|--------|------|----------|
| “Download CV” | Link | `href="/Ransford_Frimpong_Resume.pdf"`, `download`. Triggers PDF download. |
| Certification “View Certificate” | Links | Open external verification URLs in new tab. |
| Expertise tags | Static list | SIEM, Digital Forensics, Security Frameworks, etc. Display only. |

- **Certifications data:** Name, org, date, `viewUrl` (Google Cybersecurity, Microsoft Azure AI, ISC2 CC, PLP Web Development). See component for exact URLs.

---

### 5.5 `Projects` (`components/Projects.tsx`)

- **Role:** “Portfolio Showcase” section: compact grid of project cards; each card has thumbnail, title, description (line-clamped), tags, and action link. Clicking thumbnail opens media modal. Cards use reduced padding and typography for a smaller footprint; grid is 4 columns on xl, 3 on lg, 2 on sm.
- **State:** `selectedProject` — which project (if any) is shown in the modal.
- **Sub-components:**
  - **ProjectCardThumbnail:** Button showing project image (or placeholder on error). Click → `onPreview()` → sets `selectedProject` and opens modal.
- **Per-project data:** `title`, `description`, `tags`, `href`, `image`, optional `video`, optional `download`, optional `label`.
- **Media rule:** All cards use `image` for thumbnail. In modal: if project has `video`, show video (3D projects); otherwise show `image`.

| Element | Type | Function |
|--------|------|----------|
| Project card thumbnail | Button | Opens modal with that project’s image/video (`setSelectedProject(project)`). Focus ring on keyboard focus. |
| “View” / “Download Journal” | Link | `href` = project URL or PDF. If `download` true: same tab, download PDF; else new tab. Label is “View” or custom `label`. |

- **Projects list:** House, Summer-Hut, Solar System (3D, with video); Shopping Cart, QR-Code Generator, Digital Clock, Calculator, Password-protected door system, Pedestrian Traffic Light System, Incident handler's journal (with Download Journal). Exact titles, descriptions, tags, and links are in the `projects` array.

---

### 5.6 `ProjectMediaModal` (`components/ProjectMediaModal.tsx`)

- **Role:** Full-screen overlay to show project image or video when a project card thumbnail is clicked.
- **Props:** `isOpen`, `onClose`, `title`, `image?`, `video?`.
- **Behavior:**
  - If `video` and not YouTube: `<video>` with `autoPlay`, `loop`, `muted`, `playsInline` (no controls).
  - If `video` and YouTube: embedded iframe (embed URL derived from `video`).
  - If no `video` and `image`: show `<img>`.
- **Accessibility:** Dialog has `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-title"`. On open: focus moves to Close button; focus is trapped (Tab / Shift+Tab cycle within dialog). On close: focus returns to the element that had focus before open. Escape key closes modal.
- **Elements and behavior:**

| Element | Type | Function |
|--------|------|----------|
| Backdrop (dark area) | div | Click → `onClose()` (closes modal). |
| Modal content box | div | Click → `e.stopPropagation()` so clicking inside does not close. Ref used for focus trap. |
| Title | Text | Project title (`id="modal-title"`). |
| Close (X) | Button | `aria-label="Close"`. Ref for initial focus. Calls `onClose()`. |
| Escape key | — | Listener calls `onClose()` when `E.key === "Escape"`. |
| Tab key | — | Focus trap: Tab on last focusable → first; Shift+Tab on first → last. |
| Body scroll | — | When open: `document.body.style.overflow = "hidden"`; on close restored. |

- **Animations:** Backdrop and panel fade/scale in and out (Framer Motion `AnimatePresence`).

---

### 5.7 `Contact` (`components/Contact.tsx`)

- **Role:** “Say hello” section: short text, contact chips (email/phone with copy), and social links. No form.
- **State:** `copiedId` — which contact item (if any) recently had its value copied; resets after 2 seconds.
- **Elements and behavior:**

| Element | Type | Function |
|--------|------|----------|
| Email chip | Link | `mailto:ransfordfrimpong55@gmail.com`. Opens default mail client. |
| Phone chips | Links | `tel:+233559043307`, `tel:+233257069605`. Open dialer on mobile or tel handler. |
| Copy button (per contact item) | Button | `aria-label="Copy {value}"`. Copies that item’s value to clipboard; shows checkmark for 2s. |
| Social links (LinkedIn, GitHub, Instagram, X) | Links | Same URLs as Hero; open in new tab. |

---

### 5.8 `BackToTop` (`components/BackToTop.tsx`)

- **Role:** Floating button to scroll back to the top of the page. Shown only after the user has scrolled down.
- **Behavior:** Visible when `window.scrollY > 400`. Links to `#hero` (smooth scroll). Fades in/out with Framer Motion. Respects `prefers-reduced-motion` (no animation when reduced).
- **Elements and behavior:**

| Element | Type | Function |
|--------|------|----------|
| Button | Link | `href="#hero"`, `aria-label="Back to top"`. Fixed bottom-right (z-40). Focus ring for keyboard. |

---

### 5.9 `Footer` (`components/Footer.tsx`)

- **Role:** Copyright and back-to-top.
- **Elements and behavior:**

| Element | Type | Function |
|--------|------|----------|
| “© {year} Portfolio. Built with Next.js & Tailwind.” | Text | Dynamic year. |
| “Back to top” | Link | `href="#hero"`. Smooth scroll to top. |

---

## 6. Styling & Theming

### 6.1 CSS variables (`app/globals.css`)

- `--foreground`: `#f8fafc`
- `--background`: `#020617`
- `--accent`: `#0ea5e9`
- `.gradient-mesh`: radial gradients with accent tint (used on Hero).

### 6.2 Tailwind theme (`tailwind.config.ts`)

- **Fonts:** Loaded in `app/layout.tsx` via `next/font/google`; CSS variables are applied to `<html>` and referenced in Tailwind `fontFamily`:
  - `sans` → Outfit (`--font-outfit`) — body copy, UI, buttons, nav links.
  - `mono` → JetBrains Mono (`--font-jetbrains-mono`) — section labels (e.g. "About", "Portfolio Showcase"), tags.
  - `display` → Syne (`--font-display`) — hero name, section titles (About Me, My Certifications, Say hello, Portfolio Showcase, Projects), card titles, navbar "Portfolio" logo.
- **Colors:** `accent` (DEFAULT, light, dark), `surface` (DEFAULT, light, lighter). Used for buttons, borders, progress, cards.

### 6.3 Typography hierarchy

| Role | Font | Size | Weight | Letter-spacing |
|------|------|------|--------|----------------|
| Hero name | display | text-4xl–6xl | bold | tracking-tight |
| Section title (e.g. About Me, Say hello) | display | text-3xl–4xl | bold | tracking-tight |
| Section label (e.g. About, Portfolio Showcase) | mono | text-sm | normal | default |
| Card title | display | text-base | bold | tracking-tight |
| Body | sans | text-base / text-sm | normal | leading-relaxed |
| Small / tags | mono | text-xs / text-[10px] | medium | default |

### 6.4 Layout

- **Root:** `min-h-screen`, `bg-[var(--background)]`, `font-sans`, `antialiased`.
- **Sections:** `border-t border-white/5`, `py-24 px-6`, max-width containers where applicable.

---

## 7. Project Media (public/projects/)

Assets used by project cards and modal. Paths in code use URL-encoded spaces where needed (e.g. `%20`).

| File | Used by project | Card | Modal |
|------|------------------|------|--------|
| house.png, house.mp4 | House | image | video |
| hut.png, hut.mp4 | Summer-Hut | image | video |
| solar-system.png, solar-system.mp4 | Solar System | image | video |
| shopping Cart.jpg | Shopping Cart | image | image |
| Qr-code.png | QR-Code Generator | image | image |
| Digital-Clock.png | Digital Clock | image | image |
| calculator.png (calculator-1.png optional) | Calculator | image | image |
| password-protected door system.png | Password-protected door system | image | image |
| Pedestrian Traffic Light System.png | Pedestrian Traffic Light System | image | image |
| Incident Journal.png | Incident handler's journal | image | image |

---

## 8. Projects Data Summary (for reference)

- **House** — 3D, image + video, link to GitHub Pages.
- **Summer-Hut** — 3D, image + video, link to GitHub Pages.
- **Solar System** — 3D, image + video, link to GitHub Pages.
- **Shopping Cart** — Web, image only, link to Netlify.
- **QR-Code Generator** — Web, image only, link to GitHub repo.
- **Digital Clock** — Web, image only, link to GitHub repo.
- **Calculator** — Web, image only, link to GitHub repo.
- **Password-protected door system** — Hardware/Tinkercad, image only.
- **Pedestrian Traffic Light System** — Hardware/Tinkercad, image only.
- **Incident handler's journal** — PDF download, custom label “Download Journal”, image only.

---

## 9. Docker

### 9.1 Development

- **Compose:** `docker-compose.yml` defines service `web`: build from `.`, map **2580:3000**, mount current dir to `/app`, anonymous volume for `node_modules`, `WATCHPACK_POLLING=true`, `stdin_open`/`tty`.
- **Dockerfile:** Node 20 Alpine, `WORKDIR /app`, `npm install`, copy source, `EXPOSE 3000`, `CMD npm install && npm run dev`.
- **Usage:** `docker compose up --build`. App at **http://localhost:2580**. Code changes apply via volume; rebuild only when `package.json` or Dockerfile changes.

### 9.2 Production (optional)

- `next.config.js`: `output: "standalone"` when `DOCKER_BUILD=1` for smaller production image. A separate `Dockerfile.prod` (if present) would use that for production builds.

### 9.3 Coolify / Nixpacks

- Coolify uses Nixpacks to build and expects static output in `/app/dist`. The repo is set up for this:
  - When `COOLIFY_FQDN` is set at build time, `next.config.js` uses `output: "export"` so `next build` produces the `out/` directory.
  - `nixpacks.toml` runs `npm run build` then `cp -r out dist`, so the final image has static files in `/app/dist` for Coolify’s nginx stage.
- No extra env vars are required in Coolify; push to your branch and deploy.

---

## 10. NPM Scripts

| Script | Command | Purpose |
|--------|---------|--------|
| dev | `next dev` | Start Next dev server (port 3000 inside container). |
| build | `next build` | Production build. |
| start | `next start` | Run production server. |
| lint | `next lint` | Run ESLint. |

---

## 11. Metadata & SEO

- **Title:** “Ransford Frimpong | Portfolio”
- **Description:** “Portfolio of Ransford Frimpong—Full-stack developer & cybersecurity enthusiast. ISC2 CC, Google Cybersecurity, PLP Web Development.”
- Set in `app/layout.tsx` via `export const metadata`.
- **Open Graph:** `openGraph.title`, `description`, `url` (from `NEXT_PUBLIC_SITE_URL` or fallback), `siteName`, `type: "website"`, `images` (profile image).
- **Twitter:** `twitter.card: "summary"`, `title`, `description`.
- **metadataBase:** Set from `NEXT_PUBLIC_SITE_URL` (default fallback used for local dev; set to your production URL when deploying).
- **robots.txt:** `public/robots.txt` — allows all user agents, points to sitemap. Update the Sitemap URL to your production domain.
- **sitemap.xml:** `public/sitemap.xml` — single entry for homepage. Update `loc` to your production URL when deploying.

---

## 12. Accessibility & behaviour

- **Skip link:** First focusable element; “Skip to main content” appears on focus and targets `#main-content`.
- **Modal:** Focus trap (Tab/Shift+Tab), return focus on close, Escape to close, `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.
- **Reduced motion:** `prefers-reduced-motion: reduce` in CSS (scroll-behavior: auto). Framer Motion `useReducedMotion()` used in Navbar, Hero, BackToTop to set duration to 0 or disable repeated animations.

---

## 13. File Checklist for New/Updated Features

When you add or change a feature, update this doc as needed:

1. **New section or page** — Add to Section 3 (structure) and Section 4 (data flow). Document in Section 5 (component reference) with all buttons and links and their behavior.
2. **New button or link** — Add a row in the component’s “Elements and behavior” table (Section 5) with type and function.
3. **New project** — Add to `projects` in `Projects.tsx`, then update Section 7 (media) and Section 8 (projects summary). Add any new files under `public/projects/` to the media table.
4. **New certification** — Update the certifications array in `About.tsx` and the certifications part of Section 5.3.
5. **Styling/theme change** — Update Section 6 (variables, Tailwind theme, or layout).
6. **Docker/scripts change** — Update Section 9 and Section 10.
7. **New dependency** — Note in Section 2 and in `package.json` description if relevant.
8. **New interactive element (button/link)** — Add to the component’s table in Section 5 and to Section 12 (accessibility) if it affects focus or keyboard.

---

*Last structural review: all components and buttons documented as of current codebase. Update this document on each feature add or edit.*
