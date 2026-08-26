# Quotes

A simple, elegant quotes app featuring handpicked and curated quotes.

## Tech Stack

- **Framework**: Astro
- **Styling**: Vanilla CSS
- **Data**: Static JSON

## Development

Requires **Node.js 22**.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

This project uses GitHub Actions to deploy to GitHub Pages automatically on push to the `main` branch. 
See `.github/workflows/deploy.yml`. It uses the `peaceiris/actions-gh-pages` action which will build the project and push the output to the `gh-pages` branch. Make sure your GitHub Pages settings are configured to deploy from the `gh-pages` branch.
