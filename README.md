> **Hinweis zu rechtlichen Texten:** Impressum ([src/components/Impressum.jsx](src/components/Impressum.jsx)) und Datenschutzerklärung ([src/components/Datenschutz.jsx](src/components/Datenschutz.jsx)) enthalten nur Platzhalter (`TODO`). Bitte vor dem Live-Schalten mit echten, rechtlich geprüften Angaben ausfüllen.

# bamo21.de

Statische React-Website (Vite + React + Tailwind CSS) für **BAMO21 – Bitcoin am Ottisee**,
gehostet als Single-Page-Application.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Produktions-Build

```bash
npm run build
```

Erzeugt einen statischen `dist/`-Ordner (HTML/CSS/JS). Es wird **kein Node.js-Server** im Betrieb benötigt.

## Deployment auf CyberPanel

1. **Website anlegen:** CyberPanel → *Websites → Create Website* → Domain `bamo21.de` eintragen, SSL-Häkchen setzen (Let's Encrypt).
2. **Build erzeugen:** `npm install && npm run build` (lokal oder in CI).
3. **Dateien hochladen:** Inhalt von `dist/` (nicht den Ordner selbst) in `/home/bamo21.de/public_html/` hochladen — per CyberPanel File Manager oder SFTP (CyberPanel → Websites → *Manage* → FTP-Konto anlegen).
4. **Rewrite-Regeln prüfen:** CyberPanel → Websites → *Manage* → *Rewrite Rules* aktiviert lassen, damit `.htaccess` (SPA-Fallback auf `index.html`) von OpenLiteSpeed ausgewertet wird. Ohne das gibt es bei direktem Aufruf von Unterseiten (z. B. `/impressum`) einen 404.
5. **HTTPS erzwingen:** SSL → *Manage SSL* → Zertifikat ausstellen/prüfen.
6. Domain im Browser testen (auch Unterseiten direkt aufrufen, um die Rewrite-Regeln zu verifizieren).

## Struktur

- `src/components/` – Seitenbereiche (Hero, Services, About, Contact, Footer, Impressum, Datenschutz)
- `public/.htaccess` – SPA-Rewrite + Cache-Header für den produktiven Betrieb
