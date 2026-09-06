import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { useTelegramModal } from '@/context/TelegramModalContext';

const TICKET_LNURL =
	'LNURL1DP68GURN8GHJ7V33D45K7TNNWPSKXEF0D3H82UNVWQH45WRXW3TRSEJGTNC';

export default function TelegramModal() {
	const { isOpen, closeModal } = useTelegramModal();
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (!isOpen) return;
		const onKeyDown = (event) => {
			if (event.key === 'Escape') closeModal();
		};
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [isOpen, closeModal]);

	useEffect(() => {
		if (!copied) return;
		const timer = setTimeout(() => setCopied(false), 2000);
		return () => clearTimeout(timer);
	}, [copied]);

	const handleCopyLnurl = async () => {
		try {
			await navigator.clipboard.writeText(TICKET_LNURL);
			setCopied(true);
		} catch {
			// Zwischenablage nicht verfügbar (z. B. fehlende Berechtigung) – kein Feedback nötig
		}
	};

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-[100] overflow-y-auto bg-earth-900/60 px-4 py-8"
			onClick={closeModal}
		>
			<div
				className="relative mx-auto w-full max-w-2xl rounded-3xl border border-earth-200 bg-earth-50 p-8 shadow-2xl"
				onClick={(event) => event.stopPropagation()}
			>
				<button
					type="button"
					onClick={closeModal}
					aria-label="Schließen"
					className="absolute right-4 top-4 text-earth-500 transition hover:text-earth-800"
				>
					<X size={22} />
				</button>

				<div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
					<div className="flex-1 text-earth-800">
						<h2 className="text-lg font-bold text-forest-800 sm:text-xl">
							Komm in unsere BAMO-Gruppe
						</h2>
						<p className="mt-1 text-sm text-earth-600">
							Fragen, Infos und Austausch rund um BAMO21
						</p>

						<p className="mt-6 leading-relaxed">
							Als Spamschutz läuft der Beitritt über ein Lightning-Ticket: Mit einer
							Lightning-Wallet bezahlst du einmalig 10 Satoshi und bist sofort in der
							Gruppe.
						</p>

						<p className="mt-4 leading-relaxed">
							Scanne dazu den QR-Code oder klicke direkt hier für dein{' '}
							<a
								href={`lightning:${TICKET_LNURL}`}
								target="_blank"
								rel="noopener noreferrer"
								className="font-semibold text-brand-600 hover:underline"
							>
								Ticket 🎟️
							</a>
							.
						</p>
					</div>

					<div className="shrink-0 pb-4 text-center md:mt-10 md:pb-0">
						<button
							type="button"
							onClick={handleCopyLnurl}
							className="relative block h-48 w-48 rounded-xl border border-earth-200 bg-white p-3 shadow-lg transition hover:border-brand-300"
							aria-label="LNURL des Tickets in die Zwischenablage kopieren"
						>
							<img
								src="/telegram-qr.jpg"
								alt="QR-Code für den Zugang zur Telegram-Gruppe"
								className="h-full w-full object-contain"
							/>
							{copied && (
								<span className="absolute inset-0 flex items-center justify-center rounded-xl bg-earth-900/80 text-sm font-semibold text-white">
									In die Zwischenablage kopiert
								</span>
							)}
						</button>
						<p className="mt-2 text-xs text-earth-600">Zum Kopieren antippen</p>
					</div>
				</div>

				<div className="text-earth-800">
					<p className="mt-6 border-t border-earth-200 pt-4 font-semibold text-earth-900">
						Hilfe und Infos:
					</p>
					<ul className="mt-3 list-inside list-disc space-y-2">
						<li>
							Diese Mobil-Wallets können die Ticket-Zahlung: AlbyGo,{' '}
							<a
								href="https://home.mybuho.de/de/buhogo"
								target="_blank"
								rel="noopener noreferrer"
								className="text-brand-600 hover:underline"
							>
								BuhoGO
							</a>
							, LNbits, Phoenix, Wallet of Satoshi, Zeus. 👍
						</li>
						<li>
							Aktuell <strong>nicht</strong>: Blink, Blitz Wallet (kommt aber), Electrum
							(kommt irgendwann), Fedi, Misty Breez, Muun, Strike, ecash- bzw.
							Cashu-Wallets. 👎
						</li>
						<li>
							Noch keine Sats? Zieh dir 21 Satoshis am{' '}
							<a
								href="https://ereignishorizont.xyz/boltfaucet/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-brand-600 hover:underline"
							>
								BoltFaucet
							</a>
							:{' '}
							<a
								href="https://t.me/BoltFaucet_bot?start=claim"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="BoltFaucet öffnen – 21 Satoshis ziehen"
								className="ml-1 inline-flex items-center gap-1 whitespace-nowrap rounded-full border border-brand-300 px-3 py-1 align-middle text-brand-600 transition hover:border-brand-500 hover:text-brand-700"
							>
								⚡ 🚰
							</a>
						</li>
						<li>
							Alby Extension unterstützt die Funktion leider nicht. Siehe Issue{' '}
							<a
								href="https://github.com/getAlby/lightning-browser-extension/issues/3348"
								target="_blank"
								rel="noopener noreferrer"
								className="text-brand-600 hover:underline"
							>
								#3348
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
