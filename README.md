# bamo21.de

Website for **BAMO21 – Bitcoin am Ottisee**, a Bitcoin meetup. Built as a static single-page
application with [React](https://react.dev/) 19, [Vite](https://vitejs.dev/) and
[Tailwind CSS](https://tailwindcss.com/), using [react-router-dom](https://reactrouter.com/) for
client-side routing, [framer-motion](https://www.framer.com/motion/) for animations and
[lucide-react](https://lucide.dev/) for icons.

## Tech stack

- **React 19** – UI components (function components + hooks)
- **Vite 7** – dev server and production bundler
- **Tailwind CSS 3** – utility-first styling, custom brand colors in `tailwind.config.js`
- **react-router-dom 7** – routes for the home page and legal pages (`/de/impressum`, `/de/datenschutz`)
- Path alias `@/` maps to `src/` (see `jsconfig.json`)

## Project structure

- `src/App.jsx` – app root, routing setup
- `src/components/` – page sections (Hero, Facts, About, Contact/Location, Footer, Navigation, Impressum, Datenschutz) and the `TelegramModal` component
- `src/context/TelegramModalContext.jsx` – shared open/close state for the Telegram join modal
- `public/` – static assets (favicon, QR code image, `.htaccess`)

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Produces a static `dist/` folder (HTML/CSS/JS). **No Node.js server** is required in production.

## Deployment on CyberPanel

1. **Create website:** CyberPanel → *Websites → Create Website* → enter domain `bamo21.de`, enable SSL (Let's Encrypt).
2. **Build:** `npm install && npm run build` (locally or in CI).
3. **Upload:** copy the contents of `dist/` (not the folder itself) to `/home/bamo21.de/public_html/` via CyberPanel File Manager or SFTP.
4. **Rewrite rules:** keep CyberPanel → Websites → *Manage* → *Rewrite Rules* enabled so `.htaccess` (SPA fallback to `index.html`, HTTPS redirect) is honored by OpenLiteSpeed. Without it, direct requests to sub-pages (e.g. `/de/impressum`) return a 404.
5. **Force HTTPS:** SSL → *Manage SSL* → issue/verify the certificate.
6. Test the domain in a browser, including direct navigation to sub-pages, to verify the rewrite rules.
