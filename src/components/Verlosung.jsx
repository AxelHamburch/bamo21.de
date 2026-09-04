import React, { useEffect, useState } from 'react';
import { Check, Copy, X } from 'lucide-react';
import { SILENT_PAYMENT_ADDRESS, SILENT_PAYMENT_SHORT } from '@/components/Support';

const VERLOSUNG_EMAIL = 'verlosung@bamo21.de';

export default function Verlosung() {
	// null | 'silent-payment' – ob die Silent-Payment-Adresse gerade kopiert wurde
	const [copied, setCopied] = useState(null);
	const [qrExpanded, setQrExpanded] = useState(false);

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
		<section className="mx-auto max-w-3xl px-6 py-20 text-earth-800">
			<h1 className="text-3xl font-bold text-forest-800">BAMO Verlosung</h1>
			<p className="mt-4 leading-relaxed">
				BAMO ist ein Projekt von Plebs für Plebs — der Eintritt ist frei, damit
				möglichst viele Bitcoin-Interessierte kommen können. Und weil freier Eintritt
				gute Preise verdient hat, verlosen wir auf dem Event ein paar schöne Sachen
				unter allen, die mitmachen wollen.
			</p>
			<p className="mt-4 leading-relaxed">
				<strong>Teilnahme ist kostenlos.</strong> Wer mag, kann die Verlosung
				zusätzlich mit einer kleinen Spende verbinden — mehr dazu weiter unten. Beides
				ist völlig unabhängig voneinander möglich.
			</p>

			<div className="mt-10 space-y-10 leading-relaxed">
				<div>
					<h2 className="text-xl font-semibold text-forest-800">So nimmst du teil</h2>
					<div className="mt-3 overflow-x-auto">
						<table className="w-full border-collapse text-sm">
							<thead>
								<tr className="border-b border-earth-300 text-left">
									<th className="py-2 pr-4 font-semibold text-earth-900">Weg</th>
									<th className="py-2 font-semibold text-earth-900">Was du tust</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-earth-200">
									<td className="py-2 pr-4 align-top font-medium text-earth-900">
										✉️ Per E-Mail (kostenlos)
									</td>
									<td className="py-2">
										Mail an{' '}
										<a
											href={`mailto:${VERLOSUNG_EMAIL}`}
											className="text-brand-600 underline hover:text-brand-500"
										>
											{VERLOSUNG_EMAIL}
										</a>{' '}
										— fertig, du bist dabei.
									</td>
								</tr>
								<tr className="border-b border-earth-200">
									<td className="py-2 pr-4 align-top font-medium text-earth-900">
										⚡ Per Lightning-Spende
									</td>
									<td className="py-2">
										<div className="flex items-center gap-3">
											<span>
												Ab 2.100 Sats an{' '}
												<a
													href={`lightning:${VERLOSUNG_EMAIL}`}
													className="text-brand-600 underline hover:text-brand-500"
												>
													{VERLOSUNG_EMAIL}
												</a>{' '}
												(Lightning-Adresse, auch per QR-Code scannbar) mit
												Kontaktdaten im Kommentar / der Notiz.
											</span>
											<button
												type="button"
												onClick={() => setQrExpanded(true)}
												title="QR-Code vergrößern"
												aria-label="QR-Code der Lightning-Adresse vergrößert anzeigen"
												className="ml-auto shrink-0"
											>
												<img
													src="/verlosung-lightning-qr.png"
													alt={`QR-Code der Lightning-Adresse ${VERLOSUNG_EMAIL}`}
													className="h-16 w-16 rounded-lg border border-earth-200"
												/>
											</button>
										</div>
									</td>
								</tr>
								<tr>
									<td className="py-2 pr-4 align-top font-medium text-earth-900">
										⛓️ Per On-Chain-Spende
									</td>
									<td className="py-2">
										<div className="flex flex-col items-start gap-2">
											<span>
												Über die Silent-Payment-Adresse spenden, danach kurz E-Mail
												an uns.
											</span>
											<button
												type="button"
												onClick={() =>
													copyToClipboard(SILENT_PAYMENT_ADDRESS, 'silent-payment')
												}
												title={SILENT_PAYMENT_ADDRESS}
												aria-label="Silent-Payment-Adresse in die Zwischenablage kopieren"
												className="inline-flex items-center gap-2 rounded-full border border-brand-300 px-4 py-1.5 font-mono text-xs font-medium text-brand-600 transition hover:border-brand-500 hover:text-brand-700"
											>
												₿ {SILENT_PAYMENT_SHORT}
												{copied === 'silent-payment' ? (
													<Check size={14} />
												) : (
													<Copy size={14} />
												)}
											</button>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<p className="mt-3 text-sm text-earth-600">
						Details zu den Lightning- und On-Chain-Spenden findest du weiter unten.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-forest-800">Was gibt's zu gewinnen?</h2>
					<p className="mt-3">Aktuell im Verlosungstopf:</p>
					<ul className="mt-3 list-inside list-disc space-y-1">
						<li>
							Eine <strong>ZapBox Simple</strong> im Wert von 100 € —{' '}
							<a
								href="https://zapbox.space"
								target="_blank"
								rel="noopener noreferrer"
								className="text-brand-600 underline hover:text-brand-500"
							>
								zapbox.space
							</a>
						</li>
						<li>
							Drei Gutscheine von{' '}
							<a
								href="https://bitcoin21.shop/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-brand-600 underline hover:text-brand-500"
							>
								bitcoin21.shop
							</a>{' '}
							für schicke Bekleidung, im Wert von 30 €, 50 € und 70 €
						</li>
						<li>
							Eine <strong>BitBox02 Nova Bitcoin-Only</strong> in Orange im Wert von 175 €
							—{' '}
							<a
								href="https://bitbox.swiss"
								target="_blank"
								rel="noopener noreferrer"
								className="text-brand-600 underline hover:text-brand-500"
							>
								bitbox.swiss
							</a>
						</li>
						<li>
							Drei Gutscheine von{' '}
							<a
								href="https://bitucation.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-brand-600 underline hover:text-brand-500"
							>
								bitucation.com
							</a>{' '}
							für Bitcoin-Bildung, im Wert von je 50 €
						</li>
						<li>
							Eine kleine Parzelle (ca. 28 m²) von{' '}
							<a
								href="https://www.axelsgaerten.de/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-brand-600 underline hover:text-brand-500"
							>
								axelsgaerten.de
							</a>{' '}
							für die Saison 2027, im Wert von 149 €
						</li>
					</ul>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-forest-800">
						Teilnahme mit Spende — die Details
					</h2>
					<p className="mt-3">
						Die E-Mail-Adresse verlosung@bamo21.de ist zugleich eine
						Bitcoin-Lightning-Adresse. Mit einem Lightning-Wallet (z. B.{' '}
						<a
							href="https://home.mybuho.de/de/buhogo"
							target="_blank"
							rel="noopener noreferrer"
							className="text-brand-600 underline hover:text-brand-500"
						>
							BuhoGo
						</a>
						) könnt ihr an diese Adresse Satoshis spenden und gleichzeitig etwas Gutes
						für den Bitcoin-Space tun. Bei den meisten Wallets könnt ihr neben dem
						Betrag auch einen Kommentar (max. 500 Zeichen) hinterlassen — jede Spende
						wird gelesen.
					</p>
					<blockquote className="mt-4 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4 text-earth-900">
						<strong>
							Alle Lightning-Spenden ab 2.100 Satoshis mit Kontaktdaten im Kommentar
						</strong>{' '}
						(egal in welcher Form — Telefonnummer, Telegram-Username, E-Mail){' '}
						<strong>nehmen automatisch an der Verlosung teil.</strong>
					</blockquote>
					<p className="mt-4">
						Alternativ könnt ihr auf der Webseite On-Chain über die Silent-Payment-Adresse
						spenden. Für die Teilnahme an der Verlosung schickt uns danach einfach kurz
						eine E-Mail. Fragen oder andere Wege zu spenden? Meldet euch vor Ort bei den
						Organisatoren oder per E-Mail an info@bamo21.de.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-forest-800">
						Wann findet die Verlosung statt?
					</h2>
					<p className="mt-3">
						Im Anschluss an die Vorträge, gegen <strong>16:00 Uhr im Hauptpavillon</strong>.
						Wer vor Ort ist, nimmt seinen Gewinn direkt mit — sonst kontaktieren wir die
						Gewinner im Nachgang.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-forest-800">
						Wie läuft die Auswertung ab?
					</h2>
					<p className="mt-3">
						Jede Teilnahme — per E-Mail oder per Lightning-Spende mit Kommentar (mind.
						2.100 Sats) — bekommt eine fortlaufende Losnummer. Die Gewinne sind ebenfalls
						nummeriert und werden per Zufallsgenerator den Losnummern zugeordnet, live
						vor Ort. Per E-Mail Angemeldete werden direkt benachrichtigt; bei
						Lightning-Spenden brauchen wir dafür einen Kontakt-Hinweis im Kommentar.
						Lässt sich eine Zahlung niemandem zuordnen, wird der Gewinn neu verlost,
						damit am Ende möglichst alle Preise zugeordnet werden können.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-forest-800">
						Was passiert mit den Spenden?
					</h2>
					<p className="mt-3">
						Wir verwenden die Spenden zunächst, um unsere Grundkosten zu decken. Bleibt
						etwas übrig, fließt es in ein mögliches nächstes BAMO — oder, falls es dazu
						nicht kommt, in einen anderen guten Zweck im Bitcoin-Space. Die Abrechnung
						(Einnahmen/Ausgaben) veröffentlichen wir später transparent auf dieser
						Webseite. Reichen die Spenden nicht für die Kosten, trägt der Organisator die
						Differenz selbst — als Lehrgeld fürs erste Mal.
					</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-forest-800">Wer darf teilnehmen?</h2>
					<p className="mt-3">Alle — außer den Organisatoren der Verlosung selbst.</p>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-forest-800">
						Ihr wollt auch einen Gewinn spenden?
					</h2>
					<p className="mt-3">
						Alle Preise wurden von Privatpersonen oder Unternehmen gestiftet. Könnt auch
						ihr etwas beisteuern, um die Verlosung noch attraktiver zu machen? Meldet
						euch gerne über{' '}
						<a
							href="https://t.me/axelhamburch"
							target="_blank"
							rel="noopener noreferrer"
							className="text-brand-600 underline hover:text-brand-500"
						>
							Telegram
						</a>{' '}
						oder per E-Mail an info@bamo21.de.
					</p>
				</div>
			</div>

			{qrExpanded && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
					onClick={() => setQrExpanded(false)}
				>
					<div
						className="relative rounded-2xl bg-white p-4"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							onClick={() => setQrExpanded(false)}
							aria-label="QR-Code schließen"
							className="absolute -right-3 -top-3 rounded-full bg-white p-1 text-earth-800 shadow-md transition hover:text-brand-600"
						>
							<X size={20} />
						</button>
						<img
							src="/verlosung-lightning-qr.png"
							alt={`QR-Code der Lightning-Adresse ${VERLOSUNG_EMAIL}`}
							className="h-72 w-72 max-w-[80vw] rounded-lg"
						/>
						<p className="mt-3 text-center font-mono text-sm text-earth-800">
							{VERLOSUNG_EMAIL}
						</p>
					</div>
				</div>
			)}
		</section>
	);
}
