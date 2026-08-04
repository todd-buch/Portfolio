# Personal Portfolio

## Purpose

Showcase photography, software projects, and professional experience in one place — a digital hub that balances creative work with technical clarity. Live at [toddbuch.com](https://toddbuch.com).

## Stack & hosting

- **Frontend:** React, TypeScript, Vite
- **Routing:** React Router (client-side SPA)
- **Motion:** Framer Motion
- **Icons:** Lucide, react-icons, Simple Icons
- **Hosting:** GitHub Pages + custom domain `toddbuch.com`
- **Deploy:** GitHub Actions on push to `main` (see `.github/workflows/deploy.yml`)
- **Socials:** GitHub, LinkedIn, Instagram; contact `hello@toddbuch.com`

## Branch structure

```
main:     live production site
develop:  integration branch; ready to ship when merged to main
feature/: one branch per feature/page/change → PR into develop
```

## Site map

| Route | What it is |
|-------|------------|
| `/` | Home — full-bleed hero, bio, about, current role, project cards, contact |
| `/resume` | Expanded resume (education, work, skills, awards) |
| `/photography` | Featured photography (full-viewport scroller) |
| `/photography/:gallerySlug` | Full gallery for a series |

**Nav:** Fixed top bar (logo, Home / Resume / Photography, socials, theme toggle). Hamburger menu under ~1225px width.

**Not built (intentionally deferred):** separate videography page, dedicated standalone “About” or “Projects” routes — those live on Home instead.

## Design system

Matches tokens in `src/index.css` (source of truth).

### Themes

Light and dark via `data-theme` on `<html>`, toggle + `localStorage`, with system preference fallback. Blocking script in `index.html` avoids a flash of the wrong theme.

### Color

| Token | Light | Dark |
|-------|--------|------|
| `--bg-primary` | `#f0f0ee` | `#18181B` |
| `--bg-secondary` | `#ffffff` | `#1E1E21` |
| `--text-primary` | `#3f3f46` | `#f0f0ee` |
| `--text-secondary` | `#4b5563` | `#9ca3af` |
| `--accent` | `#9B491A` | `#FA9C30` |
| `--border-color` | `#cbcdd1` | `#334155` |

Accent is warm copper / amber (not indigo).

### Typography

| Role | Family |
|------|--------|
| Display / large headings (`h1`) | **Bebas Neue** |
| Section headings (`h2`) | **Space Grotesk** |
| Body | **Inter** |

Loaded from Google Fonts in `src/index.css`.

## Performance & images

- Hero assets live as WebP under `src/assets/`.
- Photography: drop originals into `src/pages/Photography/galleries/<slug>/`.
- Optimize (and re-run anytime) with:

  ```bash
  ./scripts/optimize_images.sh
  ```

  Converts JPG/PNG → WebP, skips files that already have an up-to-date `.webp`, and caps long edge for web delivery. See script `--help` for flags.

- Gallery loader imports **WebP/AVIF only**. Convert with the script, then drop the source JPG/PNG (or use `--remove-sources`).

## SEO & accessibility

- Meta description + Open Graph / Twitter cards in `index.html`
- Social preview: `/socialcard.png`
- Custom favicon (`Logo Icon.svg` / `.png`)
- Image `alt` text required; gallery defaults derive from filenames when not overridden
- Theme toggle and main nav use accessible labels; photography scroller respects `prefers-reduced-motion`
