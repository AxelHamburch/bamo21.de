import { useEffect } from 'react';

// Manche Apps (z. B. Telegram) laden Links im Hintergrund vor (Custom-Tabs-
// Prewarming), bevor der Nutzer tatsächlich tippt. Dabei kann eine bereits
// veraltete, aber schon fertig geladene Seite angezeigt werden – kein
// HTTP-Cache-Header kann das verhindern, da es sich nicht um eine erneute
// Netzwerkanfrage handelt. Stattdessen prüft die App selbst, sobald sie
// sichtbar wird, ob eine neuere Version existiert, und lädt sich bei Bedarf
// automatisch neu.
export function useStaleBuildReload() {
	useEffect(() => {
		let cancelled = false;

		async function checkForNewBuild() {
			try {
				const response = await fetch(`/version.json?_=${Date.now()}`, {
					cache: 'no-store',
				});
				if (!response.ok) return;
				const { buildId } = await response.json();
				if (!cancelled && buildId && buildId !== __BUILD_ID__) {
					window.location.reload();
				}
			} catch {
				// Netzwerkfehler ignorieren – beim nächsten Sichtbarkeitswechsel erneut versuchen.
			}
		}

		function handleVisibilityChange() {
			if (document.visibilityState === 'visible') checkForNewBuild();
		}

		checkForNewBuild();
		document.addEventListener('visibilitychange', handleVisibilityChange);
		window.addEventListener('pageshow', checkForNewBuild);

		return () => {
			cancelled = true;
			document.removeEventListener('visibilitychange', handleVisibilityChange);
			window.removeEventListener('pageshow', checkForNewBuild);
		};
	}, []);
}
