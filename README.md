# Jackson Rader — Portfolio

Vite + React + Tailwind CSS v4 + lucide-react.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # serve the build locally
```

## Editing content
All copy (projects, experience, skills, links) lives in `src/data/content.js`.
The resume served by the download buttons is `public/Jackson_Rader_Resume.pdf`; replace that file to update it.

## Deploying
`vite.config.js` uses `base: './'`, so the built `dist/` folder works from any host or sub-path.

- **Netlify Drop (fastest):** run `npm run build`, then drag the `dist/` folder onto https://app.netlify.com/drop.
- **GitHub Pages:** push this folder to a GitHub repo, then set Settings → Pages → Source to "GitHub Actions".
  `.github/workflows/deploy.yml` builds and deploys on every push to `main`.
