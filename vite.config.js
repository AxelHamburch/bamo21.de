import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

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

export default defineConfig(async () => ({
	plugins: [react()],
	define: {
		__BLOCK_HEIGHT__: JSON.stringify(await fetchBlockHeight()),
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	server: {
		port: 3000,
	},
}));
