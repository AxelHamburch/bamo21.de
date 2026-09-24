import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Copy, HandHeart, X } from 'lucide-react';

export const SILENT_PAYMENT_ADDRESS =
	'sp1qqgf49ckkg60unm3zzzz8zdza696xtp3aj5ylg8q0lv2yku6t67xlsqhmr246e2v72gaz3cvzfnydckq6ca2w8wsvaj60mrqu07a6h5y9xcxygql9';

export const SILENT_PAYMENT_SHORT = `${SILENT_PAYMENT_ADDRESS.slice(0, 9)}....${SILENT_PAYMENT_ADDRESS.slice(-9)}`;

const LIGHTNING_ADDRESS = 'bamo-support@21mio.space';

export default function Support() {
	// null | 'lightning' | 'silent-payment' – welche Adresse zuletzt kopiert wurde
	const [copied, setCopied] = useState(null);
	// null | 'lightning' | 'silent-payment' – welcher QR-Code vergrößert angezeigt wird
	const [qrExpanded, setQrExpanded] = useState(null);

	useEffect(() => {
		if (!copied) return;
		const timer = setTimeout(() => setCopied(null), 2000);
		return () => clearTimeout(timer);
	}, [copied]);

	const copyToClipboard = async (value, key) => {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(key);
		} catch {
			// Zwischenablage nicht verfügbar (z. B. fehlende Berechtigung) – kein Feedback nötig
		}
	};

	return (
		<section id="support" className="scroll-mt-24 bg-forest-50 px-6 py-16">
			<div className="mx-auto mb-8 max-w-3xl rounded-3xl border border-forest-200 bg-white/80 p-10 text-center">
				<h2 className="text-xl font-semibold text-earth-900">₿AMO21 Verlosung</h2>
				<p className="mt-4 text-sm text-earth-700">
					₿AMO21 macht eine Verlosung, an der ihr teilnehmen könnt – und wenn ihr wollt,
					dabei auch die Bitcoin-Lightning-Technologie nutzen könnt.
				</p>
				<Link
					to="/verlosung"
					className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
				>
					Hier gehts zur Verlosung
				</Link>
			</div>

			<div className="mx-auto mb-8 max-w-3xl rounded-3xl border border-forest-200 bg-white/80 p-10 text-center">
				<h2 className="text-xl font-semibold text-earth-900">
					Tutorial für Lightning⚡Wallets
				</h2>
				<p className="mt-4 text-sm text-earth-700">Wir möchten euch Brücken bauen.</p>
				<div className="mt-6 flex flex-wrap items-start justify-center gap-6">
					<div className="flex flex-col items-center gap-1">
						<Link
							to="/buhogo-tutorial"
							className="inline-flex items-center gap-2 rounded-full bg-forest-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-700"
						>
							BuhoGO
						</Link>
						<span className="text-xs text-earth-600">Empfohlen für Android</span>
					</div>
					<div className="flex flex-col items-center gap-1">
						<Link
							to="/wos-tutorial"
							className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
						>
							Wallet-of-Satoshi
						</Link>
						<span className="text-xs text-earth-600">
							Empfohlen für Android & iOS
						</span>
					</div>
				</div>
			</div>

			<div className="mx-auto mb-8 max-w-3xl rounded-3xl border border-forest-200 bg-white/80 p-10 text-center">
				<h2 className="text-xl font-semibold text-earth-900">Der Münzer 63 ☎️🏧</h2>
				<p className="mt-4 text-sm text-earth-700">Eine ganz spezielle Besonderheit.</p>
				<Link
					to="/muenzer63-tutorial"
					className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
				>
					Anrufen …
				</Link>
			</div>

			<div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-forest-200 bg-white/80 p-10 text-center">
				<HandHeart className="text-brand-500" size={24} />
				<h2 className="text-xl font-semibold text-earth-900">Ein Event von Plebs für Plebs</h2>
				<p className="max-w-xl text-sm text-earth-700">
					BAMO21 ist ein nicht-kommerzielles Event, organisiert von einfachen Plebs, die
					freiwillig und unentgeltlich ihre Zeit und Ressourcen einbringen. Einige Dinge
					kosten aber doch mehr als Luft und Liebe – deshalb freuen wir uns sehr über
					Unterstützung in Form von Satoshi-Spenden:
				</p>
				<div className="flex items-center gap-2">
					<a
						href={`lightning:${LIGHTNING_ADDRESS}`}
						className="inline-flex items-center gap-2 rounded-full border border-brand-300 px-5 py-2 text-sm font-medium text-brand-600 transition hover:border-brand-500 hover:text-brand-700"
					>
						⚡ {LIGHTNING_ADDRESS}
					</a>
					<button
						type="button"
						onClick={() => copyToClipboard(LIGHTNING_ADDRESS, 'lightning')}
						title={LIGHTNING_ADDRESS}
						aria-label="Lightning-Adresse in die Zwischenablage kopieren"
						className="inline-flex items-center rounded-full border border-brand-300 p-2 text-brand-600 transition hover:border-brand-500 hover:text-brand-700"
					>
						{copied === 'lightning' ? <Check size={16} /> : <Copy size={16} />}
					</button>
					<button
						type="button"
						onClick={() => setQrExpanded('lightning')}
						title="QR-Code vergrößern"
						aria-label="QR-Code der Lightning-Adresse vergrößert anzeigen"
					>
						<img
							src="/bamo-support-lightning-adresse-qr.png"
							alt={`QR-Code für ${LIGHTNING_ADDRESS}`}
							className="h-12 w-12 rounded-lg border border-forest-200"
						/>
					</button>
				</div>
				<div className="flex items-center gap-2">
					<button
						type="button"
						onClick={() => copyToClipboard(SILENT_PAYMENT_ADDRESS, 'silent-payment')}
						title={SILENT_PAYMENT_ADDRESS}
						aria-label="Silent-Payment-Adresse in die Zwischenablage kopieren"
						className="inline-flex items-center gap-2 rounded-full border border-brand-300 px-5 py-2 font-mono text-sm font-medium text-brand-600 transition hover:border-brand-500 hover:text-brand-700"
					>
						₿ {SILENT_PAYMENT_SHORT}
						{copied === 'silent-payment' ? <Check size={16} /> : <Copy size={16} />}
					</button>
					<button
						type="button"
						onClick={() => setQrExpanded('silent-payment')}
						title="QR-Code vergrößern"
						aria-label="QR-Code der Silent-Payment-Adresse vergrößert anzeigen"
					>
						<img
							src="/Silent-Payment-Adresse.png"
							alt="QR-Code der BAMO-Silent-Payment-Adresse"
							className="h-12 w-12 rounded-lg border border-forest-200"
						/>
					</button>
				</div>
				<p className="text-xs text-earth-600">
					{copied === 'lightning' && 'Lightning-Adresse in die Zwischenablage kopiert'}
					{copied === 'silent-payment' &&
						'Silent-Payment-Adresse in die Zwischenablage kopiert'}
					{!copied && 'On-Chain spenden: Silent-Payment-Adresse zum Kopieren antippen'}
				</p>
				<p className="max-w-xl text-xs text-earth-600">
					Jeder Satoshi zählt und wird sorgsam eingesetzt. Versprochen: Es wird einen
					Transparenzbericht geben, in dem alle Einnahmen und Ausgaben offen aufgelistet
					werden.
				</p>

				<div className="mt-6 max-w-xl border-t border-forest-200 pt-6">
					<h3 className="text-sm font-semibold uppercase tracking-wider text-earth-900">
						EINUNDZWANZIG Antrag zur Projekt-Unterstützung
					</h3>
					<p className="mt-3 text-sm text-earth-700">
						Wir haben auch einen{' '}
						<a
							href="https://verein.einundzwanzig.space/association/project-support/bitcoin-am-ottisee-bamo"
							target="_blank"
							rel="noopener noreferrer"
							className="text-brand-600 underline hover:text-brand-500"
						>
							Antrag bei EINUNDZWANZIG
						</a>{' '}
						eingereicht, um ein paar grundlegende Kosten zu decken.
					</p>
					<p className="mt-2 text-sm text-earth-700">
						<Link to="/de/antrag" className="text-brand-600 underline hover:text-brand-500">
							Hier gibt es den Antrag als Webversion
						</Link>{' '}
						– mit vernünftiger Formatierung.
					</p>
					<p className="mt-2 text-sm text-earth-700">
						Ihr könnt uns auch unterstützen, indem ihr dem Antrag eure Stimme gebt. Dazu
						braucht ihr einen Nostr-Account und die EINUNDZWANZIG-Vereinsmitgliedschaft
						(21.000 Sats pro Jahr). Wenn ihr dabei Unterstützung benötigt, kommt gerne in
						die nachfolgende Telegram-Gruppe.
					</p>
				</div>
			</div>

			{qrExpanded && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
					onClick={() => setQrExpanded(null)}
				>
					<div
						className="relative rounded-2xl bg-white p-4"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							onClick={() => setQrExpanded(null)}
							aria-label="QR-Code schließen"
							className="absolute -right-3 -top-3 rounded-full bg-white p-1 text-earth-800 shadow-md transition hover:text-brand-600"
						>
							<X size={20} />
						</button>
						{qrExpanded === 'lightning' ? (
							<>
								<img
									src="/bamo-support-lightning-adresse-qr.png"
									alt={`QR-Code für ${LIGHTNING_ADDRESS}`}
									className="h-72 w-72 max-w-[80vw] rounded-lg"
								/>
								<p className="mt-3 text-center font-mono text-sm text-earth-800">
									{LIGHTNING_ADDRESS}
								</p>
							</>
						) : (
							<>
								<img
									src="/Silent-Payment-Adresse.png"
									alt="QR-Code der BAMO-Silent-Payment-Adresse"
									className="h-72 w-72 max-w-[80vw] rounded-lg"
								/>
								<p className="mt-3 text-center font-mono text-sm text-earth-800">
									BAMO-Silent-Payment-Adresse
								</p>
							</>
						)}
					</div>
				</div>
			)}
		</section>
	);
}
