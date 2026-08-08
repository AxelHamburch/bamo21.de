# bamo21.de

Website for **BAMO21 – Bitcoin am Ottisee**, a non-commercial one-day Bitcoin event
organized by plebs for plebs, taking place on **Saturday, September 26, 2026** on a
small vegetable farm at the Ottisee in Hamburg-Ochsenwerder.

Built as a static single-page application with [React](https://react.dev/) 19,
[Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/), using
[react-router-dom](https://reactrouter.com/) for client-side routing,
[framer-motion](https://www.framer.com/motion/) for animations and
[lucide-react](https://lucide.dev/) for icons.

## Tech stack

- **React 19** – UI components (function components + hooks)
- **Vite 7** – dev server and production bundler
- **Tailwind CSS 3** – utility-first styling with a nature-inspired palette in
  `tailwind.config.js`: `brand` (Bitcoin orange), `forest` (green), `earth` (brown/cream)
  and `lake` (blue)
- **react-router-dom 7** – routes for the home page and legal pages (`/de/impressum`, `/de/datenschutz`)
- Path alias `@/` maps to `src/` (see `jsconfig.json`)

## Project structure

- `src/App.jsx` – app root, routing setup
- `src/components/` – page sections (Hero, Facts, About, Contact/Location, Support,
  Community, Footer, Navigation, Impressum, Datenschutz) and the `TelegramModal` component
- `src/context/TelegramModalContext.jsx` – shared open/close state for the Telegram join modal
- `public/` – static assets (favicon, images, QR code, `.htaccess`)

## Notable details

- **Block height as version stamp:** at build time, `vite.config.js` fetches the current
  Bitcoin block height from mempool.space and injects it into the footer. If the request
  fails, a `xxxxxx` placeholder is shown instead.
- **Telegram group behind a Lightning paywall:** the public info group link is protected
  by a small 10-satoshi Lightning "ticket" to keep bots out.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Produces a static `dist/` folder (HTML/CSS/JS). **No Node.js server** is required in
production.

## Deployment

Upload the contents of `dist/` (not the folder itself) to the web root of any static
web host. Make sure the server honors the included `.htaccess` (or equivalent rewrite
rules): it provides the HTTPS redirect and the SPA fallback to `index.html`, without
which direct requests to sub-pages (e.g. `/de/impressum`) return a 404.
