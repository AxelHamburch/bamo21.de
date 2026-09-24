import React, { useState } from 'react';
import { X } from 'lucide-react';

import zapomat01 from '../../assets/ZapOMat/ZapOMat-01.webp';
import zapomat02 from '../../assets/ZapOMat/ZapOMat-02.webp';
import zapomat03 from '../../assets/ZapOMat/ZapOMat-03.webp';
import zapomat04 from '../../assets/ZapOMat/ZapOMat-04.webp';
import zapomat05 from '../../assets/ZapOMat/ZapOMat-05.webp';
import zapomat06 from '../../assets/ZapOMat/ZapOMat-06.webp';
import zapomat07 from '../../assets/ZapOMat/ZapOMat-07.webp';

const externalLinkClass = 'text-brand-600 underline hover:text-brand-500';

// Klickbares Vorschaubild, das sich beim Anklicken vergrößert öffnet.
function Shot({ src, alt, onExpand }) {
	return (
		<button
			type="button"
			onClick={() => onExpand(src, alt)}
			aria-label={`${alt} vergrößern`}
			className="block w-full"
		>
			<img
				src={src}
				alt={alt}
				className="mx-auto max-h-[600px] w-auto rounded-2xl border border-earth-200 shadow-sm transition hover:border-brand-300"
			/>
		</button>
	);
}

export default function ZapOMat() {
	const [expanded, setExpanded] = useState(null); // { src, alt } | null

	const expand = (src, alt) => setExpanded({ src, alt });

	return (
		<section className="mx-auto max-w-3xl px-6 py-20 text-earth-800">
			<h1 className="text-3xl font-bold text-forest-800">Der ZapOMat⚡️⚙️</h1>

			<p className="mt-4 leading-relaxed">
				Der ZapOMat⚡️⚙️ ist ein 12-Fächer-Klappenautomat mit einer ZapBox.
			</p>

			<div className="mt-6">
				<Shot src={zapomat01} alt="Der ZapOMat" onExpand={expand} />
			</div>

			<p className="mt-6 leading-relaxed">
				Man muss nur die Produktnummer wählen und mit Bitcoin⚡Lightning
				bezahlen. Dazu kann man entweder den QR-Code scannen, das NFC-Modul
				des Smartphones verwenden oder eine Bolt Card, einen Bolt Ring oder
				einen sonstigen NTAG 424 nutzen. ✅
			</p>

			<div className="mt-6">
				<Shot src={zapomat02} alt="Bezahlvorgang am ZapOMat" onExpand={expand} />
			</div>

			<h2 className="mt-12 text-xl font-bold text-forest-800">
				Hier ein paar Beispielprodukte des ZapOMat⚡️⚙️
			</h2>

			<div className="mt-6 inline-block -rotate-2 rounded-2xl border-[3px] border-dashed border-brand-500 bg-brand-50 px-6 py-4 text-center">
				<p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
					Heute für BAMO
				</p>
				<p className="text-3xl font-bold text-brand-600">21 % auf alles</p>
				<p className="text-sm text-brand-700">außer Gin</p>
			</div>

			<div className="mt-10 space-y-10">
				<div>
					<h3 className="text-lg font-semibold text-forest-800">
						ZapBox Simple
					</h3>
					<p className="mt-2 leading-relaxed">
						Die einfache ZapBox mit komfortablem Display für Rückmeldung und
						Anzeige des QR-Codes. Dual USB-A und USB-C für Input und Output.
					</p>
					<div className="mt-4">
						<Shot src={zapomat03} alt="ZapBox Simple" onExpand={expand} />
					</div>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-forest-800">
						ZapBox Headless Simple
					</h3>
					<p className="mt-2 leading-relaxed">
						Die minimalistische und kostengünstige ZapBox für einfache
						Schaltanwendungen. Statusrückmeldung über zwei LEDs, die den
						Zustand der ZapBox anzeigen. Die ZapBox benötigt einen separaten
						QR-Code, den man selbst ausdrucken kann.
					</p>
					<div className="mt-4">
						<Shot
							src={zapomat04}
							alt="ZapBox Headless Simple"
							onExpand={expand}
						/>
					</div>
				</div>

				<div className="leading-relaxed">
					<p>
						Die ZapBox Simple und ZapBox Headless Simple gibt es jeweils in
						zwei Versionen – „Ready to use" und „Bulk".
					</p>
					<p className="mt-3">
						Die <strong>„Ready to use"</strong>-Version ist vollständig
						getestet und eingerichtet. Bedienungsanleitung,
						Dokumentationsblatt zu den eingestellten Parametern und ein
						USB-Kabel liegen bei.
					</p>
					<p className="mt-3">
						Die <strong>„Bulk"</strong>-Version ist ebenfalls vollständig
						getestet und mit der aktuellen Firmware vorinstalliert, sie ist
						aber nicht parametriert. Eine Bedienungsanleitung liegt bei. Zur
						Einrichtung bitte den Webinstaller{' '}
						<a
							href="https://installer.zapbox.space"
							target="_blank"
							rel="noopener noreferrer"
							className={externalLinkClass}
						>
							installer.zapbox.space
						</a>{' '}
						bzw.{' '}
						<a
							href="https://installer.zapbox.space/headless"
							target="_blank"
							rel="noopener noreferrer"
							className={externalLinkClass}
						>
							installer.zapbox.space/headless
						</a>{' '}
						verwenden.
					</p>
					<p className="mt-3">
						Ein Hinweis zu den ZapBoxen: Alle ZapBoxen sind deutsche
						Ingenieurskunst und mit viel Liebe in Handarbeit zusammengebaut.
						Ihr könnt sie gerne nachbauen, alles ist Free and Open Source und
						nicht nur die Software. Ihr findet alle Informationen,
						Anleitungen, Datenblätter, 3D-Druckfiles und die elektrischen
						Schaltpläne auf dem{' '}
						<a
							href="https://github.com/AxelHamburch/ZapBox"
							target="_blank"
							rel="noopener noreferrer"
							className={externalLinkClass}
						>
							GitHub-Repository
						</a>
						. Eine Übersicht zu allen ZapBoxen mit Links zu den
						Einrichtungsanleitungen findet ihr unter{' '}
						<a
							href="https://zapbox.space"
							target="_blank"
							rel="noopener noreferrer"
							className={externalLinkClass}
						>
							zapbox.space
						</a>
						.
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-forest-800">
						Die Candy Machine 🍬⚙️
					</h3>
					<p className="mt-2 leading-relaxed">
						Die Candy Machine ist ein Süßigkeitenspender, der ursprünglich
						einen Touch-Sensor an der Unterseite hatte. Dieser wurde durch ein
						Relais ersetzt, das jetzt von der ZapBox angesteuert wird.
						Batterien sind nicht mehr nötig, und der Schalter auf der
						Rückseite hat keine Funktion mehr. Die Touch-Funktion ist
						deaktiviert. Das USB-Kabel wird an den Ausgang der ZapBox
						angeschlossen. Die Schaltzeit der ZapBox bestimmt die Dauer des
						Spindelvorschubs und damit die ausgegebene Bonbonmenge.
					</p>
					<div className="mt-4 grid gap-4 sm:grid-cols-2">
						<Shot src={zapomat05} alt="Die Candy Machine" onExpand={expand} />
						<Shot
							src={zapomat06}
							alt="Die Candy Machine im Einsatz"
							onExpand={expand}
						/>
					</div>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-forest-800">
						Der Candy Grabber 🫳🍬
					</h3>
					<p className="mt-2 leading-relaxed">
						Der Candy Grabber ist ein Automat mit mehreren Achsen, die mit
						verschiedenen Joysticks bedient werden. Ursprünglich wurde der
						Automat durch Spielmünzen gestartet, die man durch einen Schlitz
						einwerfen konnte. Er wurde umgebaut und ist jetzt mit einem
						Relais versehen, das über eine externe ZapBox angesteuert wird.
						Die ZapBox löst also den Start des Spiels aus. Das Spiel dauert
						ungefähr 60 Sekunden, in denen alle Achsen bewegt werden können.
						Fällt ein Produkt in den Auswurf, ist das Spiel gewonnen und
						sofort zu Ende.
					</p>
					<div className="mt-4">
						<Shot src={zapomat07} alt="Der Candy Grabber" onExpand={expand} />
					</div>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-forest-800">
						Skittles 38 g und 136 g 🍬
					</h3>
					<p className="mt-2 leading-relaxed">
						Kleine bunte Kaudragees für die Candy Machine oder nur zum
						Naschen. 😋
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-forest-800">
						Bolt Card – Black &amp; Naked
					</h3>
					<p className="mt-2 leading-relaxed">
						Blanko oder Bulk Bolt Cards vom Typ NTAG 424 DNA. Ihr könnt sie
						für den Workshop nutzen oder selbst einrichten. Siehe{' '}
						<a
							href="https://ereignishorizont.xyz/boltcard/"
							target="_blank"
							rel="noopener noreferrer"
							className={externalLinkClass}
						>
							ereignishorizont.xyz/boltcard
						</a>
						.
					</p>
				</div>
			</div>

			{expanded && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
					onClick={() => setExpanded(null)}
				>
					<div
						className="relative"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							onClick={() => setExpanded(null)}
							aria-label="Bild schließen"
							className="absolute -right-3 -top-3 rounded-full bg-white p-1 text-earth-800 shadow-md transition hover:text-brand-600"
						>
							<X size={20} />
						</button>
						<img
							src={expanded.src}
							alt={expanded.alt}
							className="max-h-[85vh] max-w-[90vw] rounded-2xl"
						/>
					</div>
				</div>
			)}
		</section>
	);
}
