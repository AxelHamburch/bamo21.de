import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useTelegramModal } from '@/context/TelegramModalContext';

export default function TelegramModal() {
	const { isOpen, closeModal } = useTelegramModal();

	useEffect(() => {
		if (!isOpen) return;
		const onKeyDown = (event) => {
			if (event.key === 'Escape') closeModal();
		};
		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [isOpen, closeModal]);

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4"
			onClick={closeModal}
		>
			<div
				className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl"
				onClick={(event) => event.stopPropagation()}
			>
				<button
					type="button"
					onClick={closeModal}
					aria-label="Schließen"
					className="absolute right-4 top-4 text-slate-400 transition hover:text-white"
				>
					<X size={22} />
				</button>

				<div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
					<div className="flex-1 text-slate-300">
						<h2 className="text-2xl font-bold text-white sm:text-3xl">
							Komm in unserer Telegram-Gruppe
						</h2>
						<p className="mt-1 text-sm text-slate-400">Wir freuen uns auf den Austausch</p>

						<p className="mt-6 leading-relaxed">
							Als Spamschutz nutzen wir ein Lightning-basiertes Ticket-System. Du benötigst
							eine Lightning-Wallet, um das Ticket mit 10 Satoshi zu bezahlen und Zugang zu
							erhalten.
						</p>

						<p className="mt-4 leading-relaxed">
							Scanne den QR-Code auf der rechten Seite oder klicke direkt hier für ein{' '}
							<a
								href="lightning:LNURL1DP68GURN8GHJ7V33D45K7TNNWPSKXEF0D3H82UNVWQH45WRXW3TRSEJGTNC"
								target="_blank"
								rel="noopener noreferrer"
								className="font-semibold text-brand-400 hover:underline"
							>
								Ticket 🎟️
							</a>
							.
						</p>

						<p className="mt-6 border-t border-white/10 pt-4 font-semibold text-white">
							Hilfe und Infos:
						</p>
						<ul className="mt-3 list-inside list-disc space-y-2">
							<li>
								<a
									href="https://ereignishorizont.xyz/onboarding/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-brand-400 hover:underline"
								>
									Onboarding (21 Sats erhalten)
								</a>
							</li>
							<li>
								<a
									href="https://ereignishorizont.xyz/boltfaucet/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-brand-400 hover:underline"
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
									className="text-brand-400 hover:underline"
								>
									#3348
								</a>
							</li>
						</ul>
					</div>

					<div className="h-48 w-48 shrink-0 rounded-xl bg-white p-3 shadow-lg md:mt-20">
						<img
							src="/telegram-qr.jpg"
							alt="QR-Code für den Zugang zur Telegram-Gruppe"
							className="h-full w-full object-contain"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
