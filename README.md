# IESST Lab Website

Static website for the Intelligent Energy Systems & Sustainable Technologies (IESST) Lab, ICRI-STE.

## Run
Open `index.html` in a browser. No build step or server needed.

## Structure
- `*.html` – seven pages (home, about, research, architecture, flagship project, roadmap, collaboration)
- `css/styles.css`, `js/main.js` – styling, menu, tabs, contact form
- `assets/` – `diagram_1.webp` / `diagram_1.svg`, five architecture figures (SVG), lab logo
- `data/iesst-research-data.json` – lab content (layers, objectives, work packages, KPIs, roadmap) used to generate the pages

## Before publishing
1. In `js/main.js`, replace `CONTACT_EMAIL` (`info@example.org` is a placeholder).
2. Fonts load from Google Fonts when online; system fonts are the fallback.
3. KPI targets are intentionally unset, as in the proposal.
