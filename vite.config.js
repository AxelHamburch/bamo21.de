import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Eindeutige Build-ID, damit die App (siehe useStaleBuildReload) erkennen kann,
// ob ein bereits vorgeladener/gecachter Tab (z. B. Telegrams Custom-Tabs-Vorlade-
// mechanismus) eine veraltete Version zeigt, und sich selbst neu lädt.
function writeVersionFilePlugin(buildId) {
	return {
		name: 'write-version-file',
		async closeBundle() {
			const fs = await import('node:fs/promises');
			await fs.writeFile(
				path.resolve(__dirname, 'dist/version.json'),
				JSON.stringify({ buildId }),
			);
		},
	};
}

// Aktuelle Blockhöhe wird beim Build von mempool.space geholt und im
// Footer als "Versionsstand" der Seite angezeigt. Schlägt die Abfrage
// fehl (z. B. offline), bleibt der Fallback-Wert stehen.
const FALLBACK_BLOCK_HEIGHT = 'xxxxxx';

async function fetchBlockHeight() {
	try {
		const response = await fetch('https://mempool.space/api/blocks/tip/height', {
			signal: AbortSignal.timeout(10000),
		});
		if (!response.ok) throw new Error(`HTTP ${response.status}`);
		const height = (await response.text()).trim();
		if (!/^\d+$/.test(height)) throw new Error(`Unerwartete Antwort: ${height}`);
		console.log(`Blockhöhe von mempool.space: ${height}`);
		return height;
	} catch (error) {
		console.warn(`Blockhöhe konnte nicht geholt werden (${error.message}), nutze Fallback ${FALLBACK_BLOCK_HEIGHT}`);
		return FALLBACK_BLOCK_HEIGHT;
	}
}

export default defineConfig(async () => {
	const buildId = new Date().toISOString();

	return {
		plugins: [react(), writeVersionFilePlugin(buildId)],
		define: {
			__BLOCK_HEIGHT__: JSON.stringify(await fetchBlockHeight()),
			__BUILD_ID__: JSON.stringify(buildId),
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
			},
		},
		server: {
			port: 3000,
		},
	};
});
