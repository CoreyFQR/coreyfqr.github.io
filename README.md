# Quanrui Fu / Corey Fu Portfolio

A clean, minimal bilingual personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Chinese is the default interface, and English can be switched on from the header.

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in your terminal, usually `http://localhost:3000`.

## Edit content

Most placeholder content lives in [`lib/portfolio-data.ts`](./lib/portfolio-data.ts).

- Name, hero photo path, and photo alt text: edit the `profile` object.
- Chinese content: edit `portfolioContent.zh`.
- English content: edit `portfolioContent.en`.
- Slogan and intro: edit `slogan` and `intro` in each language.
- About section: edit the `about` object in each language.
- Project cards: edit the `projects` arrays. Each card has a `title`, `description`, and `tags`.
- Skills: edit the `skills` arrays.
- Contact links: edit the `contactLinks` arrays and replace the placeholder URLs.
- Navigation links: edit `navLinks` if you add or remove sections.

The hero image is served from [`public/profile_photo.jpg`](./public/profile_photo.jpg). Replace that file with another image if you want to change the photo.

## Project structure

```text
app/
  layout.tsx       Page metadata and root layout
  page.tsx         Main portfolio page
  globals.css      Tailwind and global styles
components/
  portfolio-page.tsx Bilingual page UI and language switcher
  project-card.tsx Reusable project card
  section.tsx      Reusable section wrapper
  tag.tsx          Reusable tag pill
lib/
  portfolio-data.ts Editable site content
public/
  profile_photo.jpg Hero photo
.github/
  workflows/deploy.yml GitHub Pages deployment workflow
```

## Useful scripts

```bash
npm run dev        # Start local development
npm run build      # Create a production build
npm run start      # Serve the production build
npm run typecheck  # Check TypeScript types
```

## Deploy to GitHub Pages

This project is configured for static export with GitHub Pages. Running `npm run build` creates an `out` folder that can be hosted as static HTML/CSS/JS.

Current target repository:

- GitHub account: `CoreyFQR`
- Repository: `CoreyFQR/coreyfoo.github.io`
- Public URL after Pages deploy: `https://coreyfqr.github.io/coreyfoo.github.io/`

Recommended setup:

1. Push this project to `https://github.com/CoreyFQR/coreyfoo.github.io`.
2. On GitHub, open the repository settings.
3. Go to **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main` or run the workflow manually from the **Actions** tab.

If the repository is named `CoreyFQR.github.io`, the site will publish at `https://coreyfqr.github.io/`.

Because the current repository is named `coreyfoo.github.io`, it behaves like a project site and publishes at `https://coreyfqr.github.io/coreyfoo.github.io/`. The Next.js config automatically applies this repository name as the GitHub Pages base path during GitHub Actions builds.

## Information to prepare

- GitHub username: `CoreyFQR`.
- Repository name: `coreyfoo.github.io`.
- Repository visibility: public.
- Email: `quanrui.fu@foxmail.com`.
- GitHub: `https://github.com/CoreyFQR`.
- LinkedIn: `https://www.linkedin.com/in/quanrui-fu-b2b694324/`.
- Optional custom domain, if you want one later.
