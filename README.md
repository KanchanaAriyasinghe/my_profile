# Personal Portfolio — Kanchana Ariyasinghe

A modern, responsive portfolio showcasing my skills, experience, projects and research.
Built with **React + TypeScript + Vite**. Live at https://kanchanaariyasinghe.github.io/my_profile/

## Features

- Light / dark theme (follows the system setting, remembers your choice)
- Project filtering by category
- Animated stats and scroll-reveal (respects “reduce motion”); experience months are calculated from role dates
- Accessible navigation: skip link, keyboard-friendly menu (Esc to close), focus rings, screen-reader labels
- Custom video player with keyboard seeking
- Contact form with inline validation, sent via EmailJS (falls back to a `mailto:` link)
- SEO / Open Graph meta tags

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173/my_profile/
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
npm run lint
```

Requires Node 20+.

## Editing content

All text lives in **`src/data/`**. You don't need to touch any components:

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, bio, photo, nav, social links, stats, resume-button toggle |
| `services.ts` | “My Services” cards (`hidden: true` hides one) |
| `skills.ts` | Skill groups (mirrors the CV “Technical Skills” section) |
| `resume.ts` | Experience, education, certifications, memberships (dates are `YYYY-MM`; omit `end` for a current role) |
| `projects.ts` | Projects (`category` drives the filters, `hidden: true` hides one) |
| `research.ts` | Research card and demo video |
| `contact.ts` | References and contact methods |

Images, the CV and the video are in `public/assets/`.

## Project structure

```
src/
  components/
    layout/     Header, Footer, ScrollToTop
    sections/   Hero, Stats, Services, Skills, Resume, Projects, Research, References, Contact
    ui/         Icon, SectionHeading, TagList, ExternalLink, SocialLinks
  data/         All site content (typed)
  hooks/        useInView, useCountUp, useScrollSpy, useTheme, …
  lib/          asset path helper, EmailJS client
  styles/       tokens.css (colours, type, spacing) · base.css · components.css · sections.css
```

## Configuration

EmailJS keys live in `.env` (they are public browser keys). Override them locally in `.env.local`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which lints, builds and publishes `dist/` to GitHub Pages.
In the repo settings, **Settings → Pages → Build and deployment → Source** must be set to **GitHub Actions**.
