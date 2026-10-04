# Anam Shaikh — Portfolio

Personal portfolio built with Angular (standalone components, signals) and SCSS.
All content comes from `Resume.docx` and lives in one file: `src/app/data/portfolio.data.ts`.

## Run locally

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build -> dist/anam-portfolio/browser
```

## Updating content

| What | Where |
|---|---|
| Text, skills, experience, projects, links | `src/app/data/portfolio.data.ts` |
| Downloadable CV | add `public/cv/Anam-Shaikh-CV.pdf` (path set in `PROFILE.cv`) |
| Profile photo | replace `public/images/profile.png` (any size; portrait 4:5 looks best) |
| Project repo link | add `{ label: 'View Code', url: '...', icon: 'github' }` to that project's `links` |
| Live-site screenshot | add the image under `public/images/projects/` and set `image` on the project |

## Structure

```
src/app/
  data/portfolio.data.ts      all content
  shared/                     icon, theme service, reveal-on-scroll, section heading
  components/
    navbar  hero  about  skills  experience
    projects (+ diagram: e-commerce architecture & RAG pipeline)
    education  contact  footer
```

## Deploying

The production build is a static site (`dist/anam-portfolio/browser`), so it can be hosted on
Azure Static Web Apps, GitHub Pages, Netlify, or any static host.
