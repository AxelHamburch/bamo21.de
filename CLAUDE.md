# CLAUDE.md

## Was "fertig" in diesem Repo heißt

Das ist eine statische Website (React + Vite). Das Deliverable ist **nicht** die
geänderte Datei in `src/`, sondern der gebaute Ordner `dist/`, der aufs Webhosting
hochgeladen wird.

**Nach jeder inhaltlichen Änderung (Text, Bilder, Komponenten, Styles) immer:**

```bash
npm run build
```

Erst danach ist die Aufgabe erledigt. Kurz melden, dass der Build durch ist und
`dist/` hochladebereit ist — sonst lädt der Nutzer eine veraltete Seite hoch.

Kein Build nötig bei reinen Meta-Änderungen ohne Auswirkung auf die Seite
(README, Kommentare, Tooling-Config ohne Build-Effekt).

## Hinweise zum Build

- `vite.config.js` holt beim Build die aktuelle Bitcoin-Blockhöhe von mempool.space
  und stempelt sie in den Footer — die Blockhöhe ist die "Versionsnummer" der Seite.
  Ohne neuen Build bleibt der alte Stempel stehen. Schlägt der Abruf fehl, steht
  `xxxxxx` im Footer.
- `package.json` `version` wird **nicht** gepflegt/hochgezählt (steht dauerhaft auf
  `0.1.0`) — nicht ungefragt bumpen.
- Deployment: den **Inhalt** von `dist/` (nicht den Ordner) ins Web-Root kopieren.
  `.htaccess` ist eine versteckte Datei in `dist/` und muss mit hoch (HTTPS-Redirect
  und SPA-Fallback, sonst 404 auf Unterseiten wie `/de/impressum`).

## Sprache

Website-Inhalte sind Deutsch, Code/Kommentare/README sind Englisch.
