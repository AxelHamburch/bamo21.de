import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Copy, HandHeart } from 'lucide-react';

const SILENT_PAYMENT_ADDRESS =
	'sp1qqgf49ckkg60unm3zzzz8zdza696xtp3aj5ylg8q0lv2yku6t67xlsqhmr246e2v72gaz3cvzfnydckq6ca2w8wsvaj60mrqu07a6h5y9xcxygql9';

const SILENT_PAYMENT_SHORT = `${SILENT_PAYMENT_ADDRESS.slice(0, 9)}....${SILENT_PAYMENT_ADDRESS.slice(-9)}`;

const LIGHTNING_ADDRESS = 'bamo-support@21mio.space';

export default function Support() {
	// null | 'lightning' | 'silent-payment' – welche Adresse zuletzt kopiert wurde
	const [copied, setCopied] = useState(null);

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
			<div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
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
				</div>
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
		</section>
	);
}
