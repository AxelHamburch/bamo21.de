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
						<h2 className="text-2xl font-bold text-forest-800 sm:text-3xl">
							Komm in unsere Telegram-Gruppe
						</h2>
						<p className="mt-1 text-sm text-earth-600">Wir freuen uns auf den Austausch</p>

						<p className="mt-6 leading-relaxed">
							Als Spamschutz nutzen wir ein Lightning-basiertes Ticket-System. Du benötigst
							eine Lightning-Wallet, um das Ticket mit 10 Satoshi zu bezahlen und Zugang zu
							erhalten.
						</p>

						<p className="mt-4 leading-relaxed">
							Scanne den QR-Code auf der rechten Seite oder klicke direkt hier für ein{' '}
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

						<p className="mt-6 border-t border-earth-200 pt-4 font-semibold text-earth-900">
							Hilfe und Infos:
						</p>
						<ul className="mt-3 list-inside list-disc space-y-2">
							<li>
								Folgende Mobil-Wallets unterstützen die Funktion: Wallet of Satoshi,
								Phoenix, Zeus, LNbits
								<br />
								Aktuell nicht unterstützt wird es von: Blink, Electrum, Misty Breez,
								Blitz Wallet, ecash bzw. cashu Wallets, BuhoGo (kommt aber mit nächster
								Version)
							</li>
							<li>
								<a
									href="https://ereignishorizont.xyz/onboarding/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-brand-600 hover:underline"
								>
									Onboarding (21 Sats erhalten)
								</a>
							</li>
							<li>
								<a
									href="https://ereignishorizont.xyz/boltfaucet/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-brand-600 hover:underline"
								>
									BoltFaucet (21 Sats erhalten)
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

					<div className="shrink-0 pb-4 text-center md:mt-20 md:pb-0">
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
			</div>
		</div>
	);
}
