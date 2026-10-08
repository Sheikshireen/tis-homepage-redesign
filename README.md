# Tulas International School — Homepage Redesign

## Overview

This project is a modern, animated homepage redesign for **Tulas International School (TIS)**, built as a Frontend Developer assessment.

The redesign focuses on:

- Preserving the Tulas brand identity and core messaging
- Improving visual hierarchy across the homepage
- Creating a premium, contemporary browsing experience
- Delivering smooth interactions and responsive behavior on desktop and mobile

Content and claims used on the page are drawn from the project’s content data and public school materials referenced in the redesign — no invented school statistics or features are added beyond what the implementation presents.

## Live Demo

**Production:** [https://tis-homepage-redesign-coral.vercel.app](https://tis-homepage-redesign-coral.vercel.app)

**Repository:** [https://github.com/Sheikshireen/tis-homepage-redesign](https://github.com/Sheikshireen/tis-homepage-redesign)

## Features

Implemented in the current codebase:

- **Section-based homepage** — Hero, About, Why Tulas, Campus Stats, Sports, Life at Tulas, Recognition, Voices, Experience, and Enquire
- **Responsive layout** — Desktop and mobile layouts, including a mobile bottom action bar for Apply / Enquire / WhatsApp / Call
- **Responsive header navigation** — Desktop nav links with active-section highlighting; mobile full-screen menu
- **Chapter / section rail** — Desktop chapter navigation that scrolls to sections and reflects the active section
- **Scroll progress indicator** — Top-of-page progress bar tied to page scroll
- **Scroll-triggered reveals** — Entrance animations for sections and staggered card lists (with reduced-motion support)
- **Light / dark theme switcher** — Animated theme toggle with persisted preference and semantic color tokens
- **Custom cursor** — Desktop fine-pointer cursor that reacts to interactive elements (disabled for touch / reduced motion)
- **Interactive CTAs** — Apply, Enquire, call, WhatsApp, virtual tour, and brochure actions
- **Enquire flow** — Modal entry point plus on-page enquiry form (demo form; no server submission)
- **Hash deep links** — Opening a section hash on load scrolls to that section once

## Design & UX

- Tulas-inspired palette: crimson, teal, and warm cream, with a coordinated dark theme
- Editorial / modern school aesthetic using display, body, and accent typefaces
- Clear section hierarchy with one primary idea per block
- Motion (Framer Motion) used for reveals, transitions, and light parallax — not scroll hijacking
- Respect for `prefers-reduced-motion` where animations are implemented

## Tech Stack

From `package.json` and source:

| Layer | Technology |
| --- | --- |
| UI | React 19 |
| Build | Vite 8 |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Motion | Framer Motion |
| Icons | Lucide React |
| Lint | ESLint (+ React Hooks / React Refresh plugins) |

## Project Structure

```text
tis-homepage-redesign/
├── public/
├── src/
│   ├── assets/                 # Local images (webp)
│   ├── components/
│   │   ├── layout/             # Header, Footer, ChapterNav, Cursor, ScrollProgress
│   │   ├── sections/           # Homepage sections
│   │   └── ui/                 # Button, Modal, Reveal, ThemeToggle, SectionHeading
│   ├── context/                # Theme + active section providers
│   ├── data/                   # Page content and CTAs
│   ├── hooks/                  # Media query, reduced motion, scroll helpers
│   ├── utils/                  # scrollToSection helper
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Theme tokens + global styles
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Getting Started

### Prerequisites

- Node.js and npm (compatible with Vite 8 / React 19)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Notes

- Theme preference is stored in `localStorage` (`tis-theme`).
- The enquiry form is a front-end demo for assessment purposes and does not post data to a backend.
- Custom cursor and some motion effects are skipped when the device is coarse-pointer or the user prefers reduced motion.
