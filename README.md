# Business Websites — Portfolio of Grzegorz Aleksander Klementowski

![Build Status](https://img.shields.io/badge/ci-pending-lightgrey?label=CI)

A modern, static portfolio for a web developer from Lower Silesia, designed to show strategy, design, and code in one cohesive experience. The landing section demonstrates a plan → code → launch sequence, followed by clear service sections and a portfolio grid prepared for real screenshots.

**Live Preview Style**
- Animated hero illustrates the full website-building process.
- “What you get” section tailored for local businesses across Poland.
- Portfolio of 8 projects — each tile opens details in a new tab.
- Subtle microinteractions and smooth scroll, honoring reduced‑motion preferences.

## Features
- Clean, semantic HTML with responsive layout.
- Progressive enhancements with `IntersectionObserver` and CSS animations.
- Reduced motion support via `prefers-reduced-motion`.
- Ready-to-replace portfolio thumbnails and copy.
- SEO‑friendly structure and metadata hooks.

## Tech Stack
- HTML5, CSS3, vanilla JavaScript
- Google Fonts: Poppins, Playfair Display, Manrope, Lato
- No build step; deploy as static files

## Project Structure
```
.
├── index.html      # Page structure and sections
├── styles.css      # Theme, animations, responsiveness (fonts + variables)
├── script.js       # Hero sequence + Intersection Observer
└── assets/         # Image placeholders and media
```

## Quick Start (Local)
You can open `index.html` directly in your browser, or serve the folder with a lightweight static server to match production behavior (MIME types, caching).

```bash
npx serve .
```

Then open the printed URL (e.g., http://localhost:3000).

## Development Notes
- Animations: Elements opt into on‑scroll animation via the `data-animate` attribute. With reduced motion enabled, content renders fully visible.
- Hero sequence: The `.hero-landing` section transitions from `prepare` to `play` after page load to ensure a smooth first paint.
- Accessibility: Meaningful headings, alt text for images, and motion preferences respected. Further ARIA tuning can be added as content becomes final.

## Quality Checks (Optional)
Recommended tools for CI or local checks:

```bash
npx htmlhint "**/*.html"
npx stylelint "**/*.css"
npx prettier --check "**/*.{html,css,js,json}"
```

Notes:
- Use Node.js 20+ for consistent CLI behavior.
- Add corresponding config files (`.htmlhintrc`, `.stylelintrc`, `.prettierrc`) if you want to enforce rules in CI.

## Deployment
This is a static site. You can deploy to any static host (Netlify, GitHub Pages, Cloudflare Pages, your own Nginx/Apache):
- Upload `index.html`, `styles.css`, `script.js`, and the `assets/` directory.
- Ensure correct `Content-Type` headers for `.css` and `.js`.
- Optionally set cache headers for assets; keep HTML with short TTL for content updates.

## Browser Support
- Modern evergreen browsers (Chromium, Firefox, Safari, Edge).
- Graceful degradation: if `IntersectionObserver` is unavailable or motion is reduced, content shows without animations.

## Contact
Author: Grzegorz Aleksander Klementowski

Email: [storny@klementowski.pl](mailto:storny@klementowski.pl)

Serving Lower Silesia locally and the whole of Poland remotely.
