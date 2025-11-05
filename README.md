# Tim Schmidt - Personal Website

Personal website built with React, TypeScript, and Vite.

Visit: [timschmidt.dev](https://timschmidt.dev)

## Features

- Clean, minimalist design
- Light/Dark mode with system preference detection
- Fully responsive (mobile & desktop)
- Contact form integration
- Fast and lightweight

## Development

```bash
npm install
npm run dev
```

## Deployment

The site automatically deploys to GitHub Pages via GitHub Actions when you push to the `master` branch.

### Setup (one-time)

1. Go to your repository settings on GitHub
2. Navigate to **Pages** (under "Code and automation")
3. Under **Source**, select "GitHub Actions"
4. Push to `main` branch to trigger deployment

### Manual deployment

If you need to deploy manually, you can also use the legacy script:

```bash
./deploy-to-root.sh
```
