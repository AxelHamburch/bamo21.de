import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = import.meta.glob('../../assets/WoS/*.webp', {
	eager: true,
	import: 'default',
});

const imageList = Object.keys(images)
	.sort()
	.map((path) => images[path]);

const externalLinkClass = 'text-brand-600 underline hover:text-brand-500';

const stepTexts = [
	<>
		Ruft die Startseite{' '}
		<a
			href="https://www.walletofsatoshi.com/"
			target="_blank"
			rel="noopener noreferrer"
			className={externalLinkClass}
		>
			walletofsatoshi.com
		</a>{' '}
		und ladet euch die App für euer Betriebssystem.
	</>,
	'Nach der Installation wählt ihr "Create a New Wallet"',
	'Gebt Wallet of Satoshi die Erlaubnis euch Benachrichtigungen zu schicken',
	'Auf dem Start Bildschirm findet ihr oben ein Schlüsselbund mit dem Hinweis "Backup Wallet", das einmal anwählen.',
	'Es wird euch ein Hinweis gezeigt, dass ihr euch die nachfolgenden 12 Wörter gut sichern sollt.',
	'Schreibt sie auch auf.',
	'Zu eurer Sicherheit werden die Wörter noch einmal der Reihe nach abgefragt.',
	'Jetzt seid ihr fertig mit der Einrichtung und könnt ihr das Wallet mit Satoshis füllen.',
	'Geht unten auf den Button "Empfangen".',
	'Falls ihr noch keine Wallet mit Lightning Satoshis habt, wählt unten einfach On-Chain. Ihr bekommt eine ganz normale Bitcoin-Adresse angezeigt. An der könnt ihr jetzt von eurem Hardware Wallet oder direkt von eurem Exchange z. B. mal 50 Euro in Satoshis schicken.',
	'Sobald die Transaktion im Mempool aufgenommen wurde und die erste Bestätigung erfolgt ist, seht ihr, dass die Bitcoin unterwegs sind.',
	'Ihr müsst jetzt nur noch ein paar Bestätigungen abwarten, bis sie eurem Konto vollständig gutgeschrieben werden.',
	'Nach einiger Zeit sollte euch der Betrag dann auch angezeigt werden. Die On-Chain gesendeten Bitcoin wurden euch automatisch als Lightning⚡Satoshis gutgeschrieben. Wallet of Satoshi hat wie angekündigt eine Gebühr von 1,95 % + Netzwerkgebühren zurückgehalten. Das macht bei 50 Euro ungefähr 1 Euro.',
	'Noch ein Tipp: Oben rechts findet ihr drei Balken um zu der Übersicht mit den Einstellungen zu kommen. Dort könnt ihr die Sprache auf Deutsch und die Währung Euro umstellen.',
	<>
		Jetzt besucht mal die Webseite{' '}
		<a
			href="https://bamo21.de/"
			target="_blank"
			rel="noopener noreferrer"
			className={externalLinkClass}
		>
			bamo21.de
		</a>
		. Dort findet ihr oben wieder drei Balken.
	</>,
	'Wählt aus der Auswahl den Link "Telegram-Gruppe", dann kommt ihr ganz nach unten auf der Seite zu dem Bereich "Auf dem Laufenden bleiben?". Wählt dort den Button "Zur Telegram Gruppe"',
	'Der Link zur Telegram Gruppe ist hinter einer Paywall von 10 Satoshis versteckt, also nicht einmal 1 Cent. Wählt dazu entweder den kleinen "Ticket 🎟️" Button.',
	'Dann sollte eine Auswahl aller Lightning Wallets auf eurem Handy erscheinen, falls ihr mehrere habt und keine Voreinstellung festgelegt habt.',
	'Alternativ könnt ihr auch den QR-Code scannen oder anklicken, dann wird er euch in die Zwischenablage kopiert.',
	'Wechselt ihr dann zu Wallet of Satoshi, könnt ihr, wenn ihr schnell seid, gleich den Button "Verwenden" nehmen. Ansonsten einfach unten auf "[ ]" (für Scannen) bzw. "Senden" gehen.',
	'Jetzt einmal Bilder und Videos aufnehmen "Bei Nutzung der App" freigeben.',
	'Dann könnt ihr den QR-Code entweder scannen, oder unten auf das Clipboard-Symbol gehen, um die Daten aus der Zwischenablage in Wallet of Satoshi einzufügen.',
	'Jetzt seht ihr den Betrag und den Hinweis zur BAMO21 Gruppe und müsst nur noch auf "Senden" gehen.',
	'Als nächstes wird auch angezeigt, dass die Zahlung erfolgreich war, und der Link zur Gruppe angezeigt. Wenn ihr jetzt auf das graue "ÖFFNE URL" geht, kommt ihr direkt zur Gruppe. 🎉',
	'Willkommen 🤝 in der BAMO21 Gruppe, wo ihr aktuelle Informationen zum Event findet und euch austauschen könnt.',
	<>
		Wir haben auch eine Verlosung, bei der ihr etwas gewinnen könnt. Und weil
		wir jetzt ein vollwertiges Lightning Wallet haben, wollen wir auch die
		Funktionen nutzen, die es bietet. Geht dazu wieder auf die BAMO21.de
		Seite und wählt wieder die drei Balken und diesmal "Sonstiges &gt; Verlosung".
		Ihr
		könnt per E-Mail teilnehmen, aber auch mit einer kleinen Lightning
		Zahlung. Ihr müsst nur einen Kommentar mit Kontaktdaten hinterlassen.
		Dazu einfach auf die Lightning-Adresse{' '}
		<a href="lightning:verlosung@bamo21.de" className={externalLinkClass}>
			verlosung@bamo21.de
		</a>{' '}
		klicken oder den QR-Code scannen.
	</>,
	'Jetzt könnt ihr einen Betrag eurer Wahl angeben und darunter eine Nachricht hinterlassen. Tragt mindestens einen Namen oder Kontaktdaten ein, damit wir den Gewinner oder die Gewinnerin auch ausfindig machen können.',
	<>
		Als Bestätigung erhaltet ihr den Hinweis über die erfolgreiche Zahlung und
		damit auch Teilnahme. ✅
		<hr className="my-4 border-forest-200" />
		Hinweis: Der Einsendeschluss für Teilnahme an der Verlosung ist Samstag der
		26.09.2026 um 15:00 Uhr. Darüber hinaus könnt ihr uns natürlich weiterhin
		gerne eine Spende mit Nachricht zukommen lassen. Karmapunkte sind euch
		gewiss. ♥️
	</>,
];

const steps = imageList.map((src, i) => ({ src, text: stepTexts[i] }));

const INTRO = -1;
const OUTRO = steps.length;

export default function WoS() {
	const [step, setStep] = useState(INTRO);

	return (
		<section className="mx-auto max-w-[900px] px-6 py-20 text-earth-800">
			{step === INTRO && (
				<div>
					<h1 className="text-3xl font-bold text-forest-800">
						Wallet of Satoshi einrichten und verwenden
					</h1>
					<p className="mt-6 leading-relaxed">
						Ein gutes Lightning Wallet einzurichten und zu verwenden ist nicht
						schwer. Hier mal als Beispiel, anhand des Wallet of Satoshi. Es ist
						minimalistisch einfach und ihr bekommt eure eigenen Seed Wörter.
					</p>
					<p className="mt-4 leading-relaxed">
						<strong>Wichtig:</strong> Ganz reine Self Custody ist das trotzdem
						nicht. Im Hintergrund läuft Spark – dabei teilt ihr euch die
						Kontrolle über eure Sats mit den Spark-Betreibern. Falls die aber mal
						nicht mitspielen, könnt ihr eure Coins nach einer kurzen Wartezeit
						trotzdem selbst zurückholen.
					</p>
					<p className="mt-4 leading-relaxed">
						Als Sparkonto würden wir es deshalb nicht nutzen. Für den täglichen
						Gebrauch mit überschaubaren Beträgen können wir es aber ohne weiteres
						empfehlen.
					</p>
					<p className="mt-4 leading-relaxed">
						Im Folgenden zeigen wir euch Schritt für Schritt, wie ihr das Wallet
						of Satoshi einrichtet und im Anschluss auch, wie ihr es für den
						Zugang zur Telegram-Gruppe nutzen oder wie ihr damit bei der
						Verlosung teilnehmen könnt.
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-4">
						<button
							type="button"
							onClick={() => setStep(0)}
							className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
						>
							Start
						</button>
						<button
							type="button"
							onClick={() => setStep(14)}
							className="inline-flex items-center gap-2 rounded-full border border-forest-300 px-6 py-3 text-sm font-semibold text-forest-700 transition hover:border-forest-500 hover:text-forest-800"
						>
							Einrichtung überspringen
						</button>
					</div>
				</div>
			)}

			{step >= 0 && step < steps.length && (
				<div className="grid gap-8 md:grid-cols-2 md:items-center">
					<div>
						<p className="leading-relaxed">{steps[step].text}</p>

						<div className="mt-8 flex items-center gap-4">
							{step > 0 && (
								<button
									type="button"
									onClick={() => setStep((s) => s - 1)}
									className="inline-flex items-center gap-2 rounded-full border border-forest-300 px-5 py-2.5 text-sm font-semibold text-forest-700 transition hover:border-forest-500 hover:text-forest-800"
								>
									<ArrowLeft size={16} />
									Zurück
								</button>
							)}

							{step > 0 && (
								<span className="text-sm font-medium text-earth-500">
									{step + 1}/{steps.length}
								</span>
							)}

							<button
								type="button"
								onClick={() => setStep((s) => s + 1)}
								className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
							>
								{step === steps.length - 1 ? 'Fertig' : 'Nächste'}
								<ArrowRight size={16} />
							</button>
						</div>
					</div>

					<img
						src={steps[step].src}
						alt={`Wallet of Satoshi Einrichtung Schritt ${step + 1}`}
						className="mx-auto max-h-[600px] w-auto rounded-2xl border border-earth-200 shadow-sm"
					/>
				</div>
			)}

			{step === OUTRO && (
				<div>
					<h1 className="text-3xl font-bold text-forest-800">Geschafft!</h1>
					<p className="mt-6 leading-relaxed">Viel Glück 🐷☘️ bei der Verlosung!</p>

					<button
						type="button"
						onClick={() => setStep(INTRO)}
						className="mt-8 inline-flex items-center gap-2 rounded-full border border-forest-300 px-6 py-3 text-sm font-semibold text-forest-700 transition hover:border-forest-500 hover:text-forest-800"
					>
						Von vorn beginnen
					</button>
				</div>
			)}
		</section>
	);
}
