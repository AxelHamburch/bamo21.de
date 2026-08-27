/**
 * Renders the print PDFs of the event poster and the web version served at
 * https://bamo21.de/poster/.
 *
 * Source of truth is poster/BAMO21-Plakat.html – edit that file, then run
 * `npm run poster`. Rendering uses headless Chrome (or Edge); set CHROME to
 * override the browser binary.
 *
 * Outputs:
 *   poster/BAMO21-Plakat-A4.pdf   210 x 297 mm, illustration at ~495 dpi
 *   poster/BAMO21-Plakat-A2.pdf   420 x 594 mm, illustration at ~248 dpi
 *   public/poster/index.html      web version (small webp instead of the 3 MB jpg)
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const posterDir = path.join(root, 'poster');
const sourceFile = path.join(posterDir, 'BAMO21-Plakat.html');
const webDir = path.join(root, 'public', 'poster');

const BROWSERS = [
	process.env.CHROME,
	'C:/Program Files/Google/Chrome/Application/chrome.exe',
	'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
	'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
	'/usr/bin/google-chrome',
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

// A2 is not a valid CSS page-size keyword, so the size is spelled out. The zoom
// factor is the linear ratio between A4 and A2 (sqrt(2)^2).
const FORMATS = [
	{ name: 'A4', pageSize: 'A4 portrait', zoom: 1 },
	{ name: 'A2', pageSize: '420mm 594mm', zoom: 2 },
];

function findBrowser() {
	const found = BROWSERS.find((candidate) => fs.existsSync(candidate));
	if (!found) {
		throw new Error(
			`Kein Chrome/Edge gefunden. Gesucht in:\n  ${BROWSERS.join('\n  ')}\n` +
				'Pfad per Umgebungsvariable CHROME setzen.',
		);
	}
	return found;
}

function variant(html, { pageSize, zoom }) {
	const withSize = html.replace('size: A4 portrait;', `size: ${pageSize};`);
	return zoom === 1
		? withSize
		: withSize.replace('margin: 0 auto;', `margin: 0 auto;\n\t\t\t\tzoom: ${zoom};`);
}

function renderPdf(browser, htmlFile, pdfFile) {
	execFileSync(browser, [
		'--headless',
		'--disable-gpu',
		'--no-sandbox',
		'--no-pdf-header-footer',
		'--virtual-time-budget=30000',
		`--print-to-pdf=${pdfFile}`,
		`file:///${htmlFile.split(path.sep).join('/')}`,
	]);
}

/** Web version: small illustration, poster scaled down to fit the viewport. */
function writeWebVersion(html) {
	fs.mkdirSync(webDir, { recursive: true });
	fs.copyFileSync(
		path.join(root, 'assets', 'BAMO-Illustration.webp'),
		path.join(webDir, 'illustration.webp'),
	);
	fs.copyFileSync(path.join(posterDir, 'qr-bamo21.svg'), path.join(webDir, 'qr-bamo21.svg'));

	const screenExtras = `
		<style>
			@media screen {
				body {
					display: flex;
					justify-content: center;
					padding: 4mm 0;
					background: #e7e2d8;
				}

				.poster {
					box-shadow: 0 2mm 8mm rgba(0, 0, 0, 0.25);
				}

				.qr b a {
					color: inherit;
					text-decoration: none;
				}

				.qr b a:hover {
					color: var(--brand-600);
					text-decoration: underline;
				}
			}
		</style>
		<script>
			// Plakat auf die Fensterbreite herunterskalieren – es ist fix 210 mm breit.
			const fit = () => {
				const poster = document.querySelector('.poster');
				if (poster) poster.style.zoom = Math.min(1, (window.innerWidth - 16) / 794);
			};
			addEventListener('resize', fit);
			addEventListener('DOMContentLoaded', fit);
		</script>
	</head>`;

	const web = html
		.replace('src="BAMO-Illustration-4096.jpg"', 'src="illustration.webp"')
		.replace('<title>BAMO21 – Plakat A4</title>', '<title>BAMO21 – Werbeposter</title>')
		.replace(
			'<b>bamo21.de</b>',
			'<b><a href="https://bamo21.de">bamo21.de</a></b>',
		)
		.replace('\t</head>', screenExtras);

	fs.writeFileSync(path.join(webDir, 'index.html'), web);
	return path.join(webDir, 'index.html');
}

const browser = findBrowser();
const html = fs.readFileSync(sourceFile, 'utf8');
console.log(`Browser: ${browser}`);

for (const format of FORMATS) {
	const tempFile = path.join(posterDir, `_render-${format.name}.html`);
	const pdfFile = path.join(posterDir, `BAMO21-Plakat-${format.name}.pdf`);
	fs.writeFileSync(tempFile, variant(html, format));
	try {
		renderPdf(browser, tempFile, pdfFile);
	} finally {
		fs.rmSync(tempFile, { force: true });
	}
	const mb = (fs.statSync(pdfFile).size / 1048576).toFixed(1);
	console.log(`${format.name}: ${path.relative(root, pdfFile)} (${mb} MB)`);
}

console.log(`Web: ${path.relative(root, writeWebVersion(html))}`);
