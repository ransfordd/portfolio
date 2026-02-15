# Portfolio Website

A modern portfolio built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and **Framer Motion**, runnable locally with Docker.

## Stack

- **Next.js 14** (App Router) with React 18
- **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Docker** for local and production runs

## Run locally with Docker

From the project root:

```bash
docker compose up --build
```

Then open [http://localhost:2580](http://localhost:2580). Code changes are reflected via the mounted volume (hot reload).

To run in the background:

```bash
docker compose up -d --build
```

To stop:

```bash
docker compose down
```

## Run without Docker

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). (With Docker, use port 2580—see above.)

## Production build (Docker)

```bash
docker build -f Dockerfile.prod -t portfolio:prod .
docker run -p 3000:3000 portfolio:prod
```

## Static assets

For the site to serve your CV, journal PDF, and profile photo, place them in `public/`:

- `public/Ransford_Frimpong_Resume.pdf` — Download CV link
- `public/Incident-handler-s-journal-Portfolio.pdf` — Incident handler's journal download
- `public/images/me.jpg` — Hero profile image

Copy from project root: `Ransford_Frimpong_Resume.pdf`, `Incident-handler-s-journal-Portfolio.pdf`, and `images/me.jpg` into the paths above if they are not already there.

## Customize

- **Hero**: Edit `components/Hero.tsx` to change name and tagline.
- **About**: Update bio and skills in `components/About.tsx`.
- **Projects**: Edit the `projects` array in `components/Projects.tsx`.
- **Contact**: Update links in `components/Contact.tsx`.
