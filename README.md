# Corey Foo Quan Rui Portfolio

A clean, minimal single-page portfolio built with Next.js, TypeScript, and Tailwind CSS.

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

Most content lives in [`lib/portfolio-data.ts`](./lib/portfolio-data.ts).

- Hero name, slogan, email, photo path, and photo alt text: edit the `profile` object.
- Top navigation: edit `navLinks`.
- About section: edit `about`.
- Project Experience section: edit the `experiences` array.
- Education Background section: edit the `education` array.
- Contact links: edit the `contactLinks` array.

The hero image is served from [`public/profile_photo.jpg`](./public/profile_photo.jpg). Replace that file if you want to change the photo.

## Page sections

```text
Home / Hero
About
Project Experience
Education Background
Contact
```

## Useful scripts

```bash
npm run dev        # Start local development
npm run build      # Create a production build
npm run start      # Serve the production build
npm run typecheck  # Check TypeScript types
```

## Deploy to GitHub Pages

The desired public URL is:

```text
https://coreyfqr.github.io/
```

For that root GitHub Pages URL, the repository must be named:

```text
CoreyFQR.github.io
```

Recommended setup:

1. Rename the current repository from `coreyfoo.github.io` to `CoreyFQR.github.io`, or create a new repository named `CoreyFQR.github.io`.
2. Push this project to the `main` branch.
3. On GitHub, open repository **Settings**.
4. Go to **Pages**.
5. Under **Build and deployment**, set **Source** to **GitHub Actions**.
6. Push to `main` or run the workflow manually from the **Actions** tab.

This project uses Next.js static export, so `npm run build` creates an `out` folder that GitHub Pages can host as static HTML, CSS, and JavaScript.
