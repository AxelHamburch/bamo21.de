import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const images = import.meta.glob('../../assets/BuhoGO/*.webp', {
	eager: true,
	import: 'default',
});

const imageList = Object.keys(images)
	.sort()
	.map((path) => images[path]);

const externalLinkClass = 'text-brand-600 underline hover:text-brand-500';

const stepTexts = [
	<>
		Geht auf die{' '}
		<a
			href="https://home.mybuho.de/de/buhogo"
			target="_blank"
			rel="noopener noreferrer"
			className={externalLinkClass}
		>
			BuhoGO-Seite
		</a>{' '}
		und wählt den Download-Typ, den ihr verwenden wollt. Installiert sie und
		öffnet anschließend BuhoGO.
	</>,
	<>
		Auf dem Startbildschirm könnt ihr, wenn ihr möchtet, rechts unten die
		Sprache einstellen. Klickt danach auf "Create Wallet", um die
		Standardeinrichtung zu starten.
		<br />
		<br />
		Hinweis: Fortgeschrittene können "More ways to start" wählen, um ein
		Wallet wiederherzustellen oder andere Finanzierungsquellen wie LNbits,
		NWC oder Arkade festzulegen.
	</>,
	'Nach kurzer Einrichtung seht ihr auch schon den Wallet-Screen mit zwei Wallet-Typen "Business" und "Personal". Das sind einfach zwei Wallets unter einem Account, zwischen denen ihr wechseln könnt. Nutzt für den Anfang einfach nur "Personal". Das Erste, was ihr jetzt machen solltet: Geht oben links auf den Schlüssel mit dem Hinweis "Backup Bitcoin".',
	'Wählt dann "Bitcoin backup", um euch den 12-Wörter-Seed für euer Wallet anzeigen zu lassen.',
	'Lest die Hinweise sorgfältig durch und bestätigt sie.',
	'Jetzt werden euch die 12 Wörter angezeigt, schreibt sie gut auf, das ist eure Versicherung, wenn ihr das Wallet mal auf einem anderen Smartphone wiederherstellen müsst.',
	'Als nächstes wird überprüft, ob ihr auch alle Wörter korrekt gesichert habt.',
	'Damit seid ihr fertig mit der Sicherung und könnt das Wallet mit echtem Lebensarbeitszeitspeicher (sprich: Bitcoin ;) füllen.',
	'Als nächstes geht unten auf "Receive", da ihr Guthaben empfangen wollt.',
	'Jetzt habt ihr mehrere Optionen. Am besten klickt ihr unten auf den "Copy" Button, dann werden euch alle Optionen aufgelistet.',
	'Falls ihr schon ein Lightning Wallet habt, könnt ihr die Lightning-Adresse verwenden. Die Adresse gehört jetzt euch und ist statisch, ihr könnt sie also immer wieder teilen, um Satoshis zu empfangen. Ihr könnt auch eine etwas schönere meinname@btc.mybuho.de bekommen, aber dazu später. Etwas speziell ist die Spark-Adresse, die lassen wir für dieses Tutorial erstmal außen vor. Und dann gibt’s da noch die klassische Bitcoin-Adresse. Wenn ihr schon Bitcoin auf eurer Hardware Wallet oder auf einem Exchange habt, dann kopiert euch die Adresse und sendet an die Adresse einfach mal z.B. 50 Euro in Bitcoin, und ihr hebt 50 Euro auf die zweite Ebene, da wo Bitcoin skaliert.',
	'Es dauert nicht lange, dann wird euch auf der Seite unten auch gleich angezeigt, dass die Transaktion im Mempool aufgenommen ist. Je nachdem, ob es schon eine Bestätigung gibt, wird auch x/3 angezeigt. Auf dem Screenshot anbei steht noch 0 von 3 Bestätigungen, da noch keine On-Chain-Bestätigung erfolgt ist.',
	'Wenn ihr das Fenster schließt, seht ihr auf dem Hauptscreen oben links "Incoming Bitcoin" angezeigt. Jetzt müsst ihr nur warten. Um den Status zu prüfen, könnt ihr mit einer Berührung auf das "Incoming Bitcoin" zum Status-Fenster zurückkommen.',
	'Wenn euch das alles zu lange dauert, könnt ihr die Satoshis auch direkt beanspruchen. Das kostet allerdings eine kleine Gebühr. Ihr seht sie hier als "Instant fee" mit 446 Sats. Wenn ihr es eilig habt, drückt "Add instantly". Falls ihr etwas Zeit habt, wartet einfach.',
	'Nach einiger Zeit seht ihr "Ready to claim" und kurz darauf "Bitcoin received". Dann werden euch die Bitcoin gutgeschrieben.',
	'Es kann einen Augenblick dauern, aber dann sollte euch der Betrag auch angezeigt werden. Klickt jetzt einmal rechts oben auf die drei Balken.',
	'Dann erhaltet ihr eine Auswahlübersicht. Klickt auf "Settings", um in die Einstellungen zu gelangen.',
	'Unter Einstellungen sind vor allem drei Punkte interessant. Links oben das THEME, hier könnt ihr es auf DARK stellen, wenn euch das mehr zusagt. Und unten rechts findet ihr Currency für Währung und Language für Sprache.',
	'Jetzt habt ihr BuhoGO eingerichtet und seid vorbereitet, um es auch zu nutzen. 🎉',
	<>
		Geht auf die Webseite{' '}
		<a
			href="https://bamo21.de/"
			target="_blank"
			rel="noopener noreferrer"
			className={externalLinkClass}
		>
			bamo21.de
		</a>
		. Rechts oben seht ihr drei Balken für die Menüauswahl.
	</>,
	'Dort bekommt ihr jetzt das Menü angezeigt. Wählt hier als Erstes "Telegram Gruppe".',
	'Ihr seht jetzt am Ende der Hauptseite den Hinweis "Auf dem Laufenden bleiben". Dort seht ihr den Hinweis zu unserem Nostr-Account und den Button "Zur Telegram Gruppe ⚡".',
	'Jetzt seht ihr drei Optionen, wie ihr ein Ticket für die Telegram Gruppe kaufen könnt. Den Direktlink hinter "Ticket 🎟️" kann man nicht sehen, aber er ist da. Sobald ihr ihn anklickt, sollte euch euer Handy abfragen, womit der Link geöffnet wird. Den QR-Code könnt ihr direkt sehen, den könnt ihr z.B. von einem PC-Monitor abscannen. Und als drittes den wieder versteckten Link, der sich hinter dem QR-Code verbirgt. Der Hinweis steht als Text drunter: Zum Kopieren antippen. Wir zeigen euch als Nächstes die Varianten "Ticket 🎟️" und Kopieren in die Zwischenablage.',
	'Wenn ihr bereits mehrere Lightning Wallets installiert habt, solltet ihr wie in diesem Beispiel die volle Auswahl erhalten, sofern ihr immer "Nur dieses Mal" gewählt habt. Ansonsten springt das Handy direkt zu BuhoGO.',
	'BuhoGO öffnet automatisch die "Senden an"-Funktion. Ihr müsst nur noch bestätigen.',
	'Nachdem die Zahlung bestätigt wurde, bekommt ihr vom Empfänger der Zahlung eine Nachricht angezeigt, inklusive eines Links, der hier mit t.me/ beginnt. Das ist der Link, den ihr nur anklicken müsst, um zur Telegram-Gruppe zu gelangen.',
	'Die Anzeige verschwindet nach ein paar Sekunden, aber ihr könnt den Link ohne Weiteres wieder aufrufen. Klickt hier auf die letzte Bitcoin-Zahlung.',
	'Hier in der Übersicht der Transaktionen noch einmal "Bitcoin-Zahlung" anwählen.',
	'Jetzt wird euch unten bei den Daten zur Transaktion auch die Nachricht vom Empfänger angezeigt.',
	'Die dritte Variante zum Kauf des Tickets war das Anklicken des QR-Codes. Damit kopiert ihr den Link zur Zahlung in die Zwischenablage.',
	'Jetzt müsst ihr nur noch zum BuhoGO Wallet wechseln. BuhoGO zeigt euch auch gleich an, dass ihr etwas in der Zwischenablage habt, das ihr verwenden könnt.',
	'Seid ihr nicht schnell genug, verschwindet die Option. Aber das ist kein Problem, ihr könnt den Inhalt aus der Zwischenablage auch manuell einfügen. Wählt dazu einfach unten rechts das "Scannen/Senden".',
	'In dem folgenden Fenster bekommt ihr verschiedene Optionen angezeigt. Hier das Clipboard-Symbol mit Einfügen wählen.',
	'Und schon seid ihr wieder beim Senden und bekommt danach die Nachricht mit Link zur Gruppe angezeigt. 🎉',
	<>
		Als Nächstes geht ihr wieder auf die Seite{' '}
		<a
			href="https://bamo21.de/"
			target="_blank"
			rel="noopener noreferrer"
			className={externalLinkClass}
		>
			bamo21.de
		</a>{' '}
		und wählt über das Menü unter Sonstiges den Punkt "Verlosung".
	</>,
	<>
		Auf der Seite findet ihr den Hinweis, wie ihr teilnehmen könnt.{' '}
		<strong>
			Achtung: Einsendeschluss ist der 26.09.2026, 15 Uhr, um an der
			Verlosung teilzunehmen. Zahlungen als Spenden nehmen wir aber auch
			länger an. 🙏😀
		</strong>{' '}
		Um teilzunehmen, habt ihr unter anderem die Wahl, mit einer Zahlung eine
		Nachricht zu übermitteln. Klickt dazu einfach auf den Link{' '}
		<a
			href="lightning:verlosung@bamo21.de"
			className={externalLinkClass}
		>
			verlosung@bamo21.de
		</a>{' '}
		in der Zeile "⚡Per Lightning Spende". Auch hier ist wieder ein
		verstecktes Lightning-Präfix hinterlegt, sodass euer Smartphone
		vorschlägt, welche App ihr öffnen könnt. Alternativ könnt ihr allerdings
		auch den QR-Code von einem anderen Gerät scannen.
	</>,
	'Ihr seht jetzt ein Fenster, wo ihr festlegen könnt, wie viel ihr senden möchtet, und über dem Senden-Button findet ihr ein Kommentarfeld, wo ihr eine Notiz bzw. Nachricht hinterlassen könnt. Für die Teilnahme an der Verlosung hinterlasst ihr einfach Kontaktdaten wie Telegram-Handle, Telefonnummer, E-Mail, etc.',
	'Als Bestätigung erhaltet ihr die Information, dass eure Zahlung eingegangen ist und dass wir uns für eure Unterstützung bedanken. Plebs, together strong! 🤜🤛',
	'Für Fortgeschrittene: Über die Profil-Funktion erhaltet ihr eine Nostr-Identität. Öffnet auf dem Hauptscreen oben rechts das Seitenmenü.',
	'Wählt in diesem Menü den Punkt "Profil" aus.',
	<>
		Im oberen dunklen Kasten seht ihr bereits den öffentlichen Schlüssel,
		beginnend mit "npub…", der bei der Einrichtung automatisch erstellt wurde.
		Über das kleine Symbol rechts neben dem npub kopiert ihr den gesamten
		öffentlichen Schlüssel in die Zwischenablage. Speichert ihn an einem
		sicheren Ort, am besten in einem Passwortmanager. Dieser npub ist der Teil
		eurer digitalen Identität, den ihr später an andere weitergeben könnt.
		<br />
		<br />
		Wählt anschließend im unteren Teil "Identitäten" aus.
	</>,
	'Hier brauchen wir erst einmal nur den mittleren Teil. Wählt bitte "Privater Schlüssel" aus.',
	<>
		Über den dunklen Button "Privaten Schlüssel kopieren" kopiert ihr nun den
		privaten Schlüssel. Dieser beginnt bei Nostr mit "nsec…". Speichert ihn
		ebenfalls an einem sicheren Ort, am besten in einem Passwortmanager. Dieser
		nsec ist der Teil eurer digitalen Identität, auf den ihr selbst
		verantwortungsvoll aufpassen müsst.{' '}
		<strong>Gebt diesen nsec niemals an andere weiter!</strong>
	</>,
];

const steps = imageList.map((src, i) => ({ src, text: stepTexts[i] }));

const INTRO = -1;
const OUTRO = -2;
const OUTRO_ADVANCED = -3;
const EXAMPLES_START = 19;
// Images 39-43 (indices 38-42) form the separate "Nostr Identität" flow.
const ADVANCED_START = 38;
const MAIN_LAST = ADVANCED_START - 1;

const outlineButtonClass =
	'inline-flex items-center gap-2 rounded-full border border-forest-300 px-6 py-3 text-sm font-semibold text-forest-700 transition hover:border-forest-500 hover:text-forest-800';

export default function BuhoGo() {
	const [step, setStep] = useState(INTRO);

	return (
		<section className="mx-auto max-w-[900px] px-6 py-20 text-earth-800">
			{step === INTRO && (
				<div>
					<h1 className="text-3xl font-bold text-forest-800">
						BuhoGO einrichten und verwenden
					</h1>
					<p className="mt-6 leading-relaxed">
						BuhoGO ist ein wirklich mächtiges Wallet mit vielen Optionen und
						Funktionen. Es bietet einen einfachen Modus, bei dem die
						Standardinstallation auf Basis des Spark-Protokolls läuft.
					</p>
					<p className="mt-4 leading-relaxed">
						<strong>Wichtig:</strong> Spark ist eine
						Bitcoin-Layer-2-Lösung, mit der Zahlungen schnell und günstig
						ablaufen. Im Alltag verlasst ihr euch dabei auf die
						Spark-Betreiber – falls die aber mal nicht mitspielen, könnt ihr
						eure Coins trotzdem jederzeit selbst zurückholen.
					</p>
					<p className="mt-4 leading-relaxed">
						Wir können BuhoGO empfehlen und zeigen euch daher, wie ihr BuhoGO
						einrichtet und anhand von zwei Beispielen, wie ihr es verwendet.
						Selbstverständlich werdet ihr es auch auf dem BAMO Event verwenden
						können. Der Hofladen und ein paar aufgestellte Automaten nehmen
						Bitcoin⚡Lightning an.
					</p>

					<div className="mt-8 flex flex-wrap items-center gap-4">
						<button
							type="button"
							onClick={() => setStep(0)}
							className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
						>
							Start Einrichtung
						</button>
						<button
							type="button"
							onClick={() => setStep(EXAMPLES_START)}
							className="inline-flex items-center gap-2 rounded-full border border-forest-300 px-6 py-3 text-sm font-semibold text-forest-700 transition hover:border-forest-500 hover:text-forest-800"
						>
							Spring zu Beispiele
						</button>
					</div>

					<h2 className="mt-12 text-xl font-bold text-forest-800">
						Sonstiges für Fortgeschrittene
					</h2>
					<p className="mt-4 leading-relaxed">
						Das Wallet bietet noch einiges mehr. Ihr könnt in dem Wallet
						weitere Wallets anlegen, und zwar mit unterschiedlichen
						Finanzierungsquellen. Verfügbar sind LNbits, Nostr Wallet Connect
						(NWC) oder Arkade (Ark Protokoll).
					</p>
					<p className="mt-4 leading-relaxed">
						Des Weiteren gibt es in BuhoGO die Profil-Funktion. Damit könnt
						ihr ein Profil anlegen und bekommt gleich einen 12-Wörter-Seed,
						den ihr auch für Nostr verwenden könnt. Dann könnt ihr auch eure
						Nostr-Identität in Stahl stanzen.
					</p>
					<button
						type="button"
						onClick={() => setStep(ADVANCED_START)}
						className={`mt-6 ${outlineButtonClass}`}
					>
						Nostr Identität
					</button>
				</div>
			)}

			{step >= 0 && step < steps.length && (
				<div className="grid gap-8 md:grid-cols-2 md:items-center">
					<div>
						<p className="leading-relaxed">{steps[step].text}</p>

						<div className="mt-8 flex items-center gap-4">
							{step > 0 && step !== ADVANCED_START && (
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
									{step >= ADVANCED_START
										? `${step - ADVANCED_START + 1}/${steps.length - ADVANCED_START}`
										: `${step + 1}/${ADVANCED_START}`}
								</span>
							)}

							<button
								type="button"
								onClick={() =>
									setStep((s) =>
										s === MAIN_LAST
											? OUTRO
											: s === steps.length - 1
												? OUTRO_ADVANCED
												: s + 1,
									)
								}
								className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
							>
								{step === MAIN_LAST || step === steps.length - 1
										? 'Fertig'
										: 'Nächste'}
								<ArrowRight size={16} />
							</button>
						</div>
					</div>

					<img
						src={steps[step].src}
						alt={`BuhoGO Einrichtung Schritt ${step + 1}`}
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
			{step === OUTRO_ADVANCED && (
				<div>
					<h1 className="text-3xl font-bold text-forest-800">Geschafft!</h1>
					<p className="mt-6 leading-relaxed">
						Eure Nostr-Identität ist eingerichtet und gesichert. 🔑
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
