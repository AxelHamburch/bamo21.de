import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const buhoGoImages = import.meta.glob('../../assets/Muenzer/Muenzer-BuhoGo-*.webp', {
	eager: true,
	import: 'default',
});
const wosImages = import.meta.glob('../../assets/Muenzer/Muenzer-WoS-*.webp', {
	eager: true,
	import: 'default',
});

const buhoGoImageList = Object.keys(buhoGoImages)
	.sort()
	.map((path) => buhoGoImages[path]);
const wosImageList = Object.keys(wosImages)
	.sort()
	.map((path) => wosImages[path]);

const externalLinkClass = 'text-brand-600 underline hover:text-brand-500';

const buhoGoStepTexts = [
	<>
		Öffnet die Seite von{' '}
		<a
			href="https://home.mybuho.de/de/buhogo"
			target="_blank"
			rel="noopener noreferrer"
			className={externalLinkClass}
		>
			BuhoGO
		</a>{' '}
		und installiert darüber das BuhoGO-Wallet.
	</>,
	'Wenn ihr BuhoGO startet, seht ihr rechts unten "English". Dort könnt ihr, wenn ihr wollt, die Sprache umstellen. Ansonsten geht hier auf "Create Wallet", um ein Standard-Wallet zu installieren.',
	'Rechts unten findet ihr den "[SCAN] Send" Button, wählt diesen bitte an.',
	'Da es mehrere Wege gibt, um Satoshis zu senden oder zu empfangen, seht ihr hier mehrere Optionen. Klickt hier auf "[-] Scan", um die Kamera zu aktivieren.',
	'Bestätigt "Bei Nutzung der App" für die Kamerafreigabe.',
	'Jetzt könnt ihr am Münzer den QR-Code scannen.',
	'Jetzt müsst ihr nur noch bestätigen, dass ihr die Satoshis empfangen möchtet.',
	<>
		Der Empfang wird euch bestätigt und anschließend seht ihr Satoshis bei
		euch im Wallet. 🎉
		<br />
		<br />
		Ganz fertig seid ihr aber noch nicht. ☝️ Da ihr jetzt echten Wert im
		Wallet gespeichert habt, müsst ihr für eine Sicherung sorgen, falls ihr
		das Handy mal verliert oder es kaputtgeht. Das muss nicht sofort
		passieren, aber solltet ihr später nicht vergessen.
		<br />
		<br />
		Hier der Hinweis, wie ihr das macht: Wählt dazu oben links das
		Schlüsselbund-Symbol. 🔑
	</>,
	'Wählt jetzt "Bitcoin Backup". 🔐',
	'Bestätigt, dass ihr die Sicherheitshinweise verstanden habt.',
	'Jetzt werden euch die 12 Wörter angezeigt. Schreibt sie bitte sorgfältig auf und bewahrt sie gut auf, das ist eure Versicherung.',
	<>
		Anschließend werden sie noch einmal abgefragt, nur zu eurer Sicherheit.
		<br />
		<br />
		Viel Freude mit BuhoGO! 🚀
	</>,
];

const wosStepTexts = [
	<>
		Öffnet die Seite von{' '}
		<a
			href="https://www.walletofsatoshi.com/"
			target="_blank"
			rel="noopener noreferrer"
			className={externalLinkClass}
		>
			Wallet of Satoshi
		</a>{' '}
		und installiert darüber das WoS-Wallet.
	</>,
	'Wählt "Create a New Wallet".',
	'Erlaubt der App, dass sie euch benachrichtigen kann, damit ihr Zahlungseingänge auch mitbekommt.',
	'Wählt jetzt rechts unten den "[SCAN] Send" Button.',
	'Bestätigt "Bei Nutzung der App" für die Kamerafreigabe.',
	'Jetzt könnt ihr am Münzer den QR-Code scannen.',
	'Bestätigt den Empfang.',
	<>
		Der Empfang wird euch bestätigt und anschließend seht ihr Satoshis bei
		euch im Wallet. 🎉
		<br />
		<br />
		Ganz fertig seid ihr aber noch nicht. ☝️ Da ihr jetzt echten Wert im
		Wallet gespeichert habt, müsst ihr für eine Sicherung sorgen, falls ihr
		das Handy mal verliert oder es kaputtgeht. Das muss nicht sofort
		passieren, aber solltet ihr später nicht vergessen.
		<br />
		<br />
		Hier der Hinweis, wie ihr das macht: Wählt dazu oben links das
		Schlüsselbund-Symbol. 🔑
	</>,
	'Bestätigt, dass ihr die Sicherheitshinweise verstanden habt.',
	'Jetzt werden euch die 12 Wörter angezeigt. Schreibt sie bitte sorgfältig auf und bewahrt sie gut auf, das ist eure Versicherung. 🧷',
	<>
		Anschließend werden sie noch einmal abgefragt, nur zu eurer Sicherheit.
		<br />
		<br />
		Viel Freude mit Wallet of Satoshi! 🚀
	</>,
];

const buhoGoSteps = buhoGoImageList.map((src, i) => ({
	src,
	text: buhoGoStepTexts[i],
}));
const wosSteps = wosImageList.map((src, i) => ({ src, text: wosStepTexts[i] }));

// Combined step list: BuhoGO branch first, then the Wallet-of-Satoshi branch.
const steps = [...buhoGoSteps, ...wosSteps];

const INTRO = -1;
const OUTRO = -2;
const WOS_START = buhoGoSteps.length;
const BUHOGO_LAST = WOS_START - 1;

const outlineButtonClass =
	'inline-flex items-center gap-2 rounded-full border border-forest-300 px-6 py-3 text-sm font-semibold text-forest-700 transition hover:border-forest-500 hover:text-forest-800';

export default function Muenzer63() {
	const [step, setStep] = useState(INTRO);

	return (
		<section className="mx-auto max-w-[900px] px-6 py-20 text-earth-800">
			{step === INTRO && (
				<div>
					<h1 className="text-3xl font-bold text-forest-800">
						Der Münzer 63 ☎️🏧
					</h1>
					<p className="mt-6 leading-relaxed">
						Vor Ort werdet ihr auch die Gelegenheit bekommen, euch gegen ein
						paar Münzen eure ersten Satoshis zu ziehen. Es erwartet euch der{' '}
						<a
							href="https://github.com/AxelHamburch/Muenzer63"
							target="_blank"
							rel="noopener noreferrer"
							className={externalLinkClass}
						>
							Münzer 63
						</a>
						. Das ist ein alter Münzfernsprecher ☎️, der ein neues Leben
						eingehaucht bekommen hat. Er zeigt kleinen, aber manchmal auch
						großen Kindern ;), wie man damals mit der Wählscheibe telefoniert
						hat. Aber er hat auch einen kleinen, etwas versteckten ATM 🏧 drin.
						Hebt den Hörer ab und wählt die Nummer 9. Der Münzer wird euch
						sagen, wo ihr den ATM findet.
					</p>
					<p className="mt-4 leading-relaxed">
						Habt ihr den ATM aktiviert, könnt ihr mal 5 Cent einwerfen. Der
						Münzer zeigt euch dann, was ihr machen müsst. Es erscheint ein
						QR-Code, den ihr mit eurem Lightning⚡Wallet scannen könnt.
					</p>
					<p className="mt-4 leading-relaxed">
						Hier zeigen wir euch, wie ihr in zwei Minuten ein Lightning-Wallet
						installiert und eure vielleicht ersten Lightning⚡Satoshis
						erhaltet.
					</p>

					<div className="mt-8 flex flex-wrap items-start gap-6">
						<div className="flex flex-col items-center gap-1">
							<button
								type="button"
								onClick={() => setStep(0)}
								className="inline-flex items-center gap-2 rounded-full bg-forest-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-700"
							>
								Start BuhoGO
							</button>
							<span className="text-xs text-earth-500">
								Empfohlen für Android
							</span>
						</div>

						<div className="flex flex-col items-center gap-1">
							<button
								type="button"
								onClick={() => setStep(WOS_START)}
								className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
							>
								Start Wallet-of-Satoshi
							</button>
							<span className="text-xs text-earth-500">
								Empfohlen für Android & iOS
							</span>
						</div>
					</div>
				</div>
			)}

			{step >= 0 && step < steps.length && (
				<div className="grid gap-8 md:grid-cols-2 md:items-center">
					<div>
						<p className="leading-relaxed">{steps[step].text}</p>

						<div className="mt-8 flex items-center gap-4">
							{step > 0 && step !== WOS_START && (
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
									{step >= WOS_START
										? `${step - WOS_START + 1}/${steps.length - WOS_START}`
										: `${step + 1}/${WOS_START}`}
								</span>
							)}

							<button
								type="button"
								onClick={() =>
									setStep((s) =>
										s === BUHOGO_LAST || s === steps.length - 1 ? OUTRO : s + 1,
									)
								}
								className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
							>
								{step === BUHOGO_LAST || step === steps.length - 1
									? 'Fertig'
									: 'Nächste'}
								<ArrowRight size={16} />
							</button>
						</div>
					</div>

					<img
						src={steps[step].src}
						alt={`Münzer 63 Einrichtung Schritt ${
							step >= WOS_START ? step - WOS_START + 1 : step + 1
						}`}
						className="mx-auto max-h-[600px] w-auto rounded-2xl border border-earth-200 shadow-sm"
					/>
				</div>
			)}

			{step === OUTRO && (
				<div>
					<h1 className="text-3xl font-bold text-forest-800">Geschafft!</h1>
					<p className="mt-6 leading-relaxed">
						Ihr seid jetzt startklar für den Münzer 63. 🎉
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-4">
						<button
							type="button"
							onClick={() => setStep(INTRO)}
							className={outlineButtonClass}
						>
							Von vorn beginnen
						</button>
						<Link
							to="/"
							className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
						>
							Zur Startseite
						</Link>
					</div>
				</div>
			)}
		</section>
	);
}
