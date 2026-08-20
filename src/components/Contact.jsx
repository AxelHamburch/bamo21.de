import React from 'react';
import { MapPin, Car, Bus } from 'lucide-react';

import parkingMap from '../../assets/BAMO-Parken.webp';

export default function Contact() {
	return (
		<section id="location" className="scroll-mt-24 bg-lake-50 px-6 py-20">
			<div className="mx-auto max-w-3xl rounded-3xl border border-lake-200 bg-white/80 p-10">
				<h2 className="text-center text-3xl font-bold text-lake-700 sm:text-4xl">
					Ort &amp; Anreise
				</h2>
				<p className="mt-4 text-center text-earth-700">
					Die Veranstaltung findet auf dem Hof von{' '}
					<a
						href="https://www.axelsgaerten.de/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-brand-600 underline hover:text-brand-500"
					>
						Axels Gemüsegärten
					</a>{' '}
					statt.
				</p>

				<div className="mt-8 flex items-start gap-3">
					<MapPin className="mt-1 shrink-0 text-forest-500" size={20} />
					<p className="text-earth-800">
						<a
							href="https://maps.app.goo.gl/85WSP7aaTJG4RrRZA"
							target="_blank"
							rel="noopener noreferrer"
							className="transition hover:text-forest-700 hover:underline"
						>
							Axels Gemüsegärten
							<br />
							Ochsenwerder Elbdeich 195
							<br />
							21037 Hamburg
						</a>
						<br />
						<span className="text-xs text-earth-600">(öffnet Google Maps)</span>
					</p>
				</div>

				<div className="mt-6 flex items-start gap-3">
					<Car className="mt-1 shrink-0 text-forest-500" size={20} />
					<p className="text-earth-800">
						In unmittelbarer Nähe gibt es leider nicht ausreichend Parkmöglichkeiten für
						PKWs. Entlang des Ochsenwerder Hauptdeichs und des Oortkatener Ufers gibt es
						aber ausreichend Parkmöglichkeiten am Straßenrand. Von dort aus sind es dann
						ungefähr 500 m Fußweg.
					</p>
				</div>

				<div className="mt-6 flex items-start gap-3">
					<Bus className="mt-1 shrink-0 text-forest-500" size={20} />
					<p className="text-earth-800">
						<span className="font-semibold text-earth-900">Öffentliche Verkehrsmittel:</span>
						<br />
						Am besten mit dem Bus 120. Ab der Haltestelle „Oortkaten“ sind es noch ca. 11
						Minuten Fußweg bis zu den Gemüsegärten. Ansonsten steigst du aus den Bussen
						122, 124, 222, 224 an der Haltestelle Oortkatenweg aus. Von hier aus benötigst
						du zu Fuß ca. 25 Minuten.
					</p>
				</div>

				<figure className="mt-8 border-t border-lake-100 pt-8">
					<a href={parkingMap} target="_blank" rel="noopener noreferrer">
						<img
							src={parkingMap}
							alt="Karte der Anfahrt mit Parkmöglichkeiten am Overwerder Hauptdeich und Oortkatenufer, Bushaltestellen und dem ca. 600 m langen Fußweg zum Hof"
							className="w-full rounded-2xl border border-lake-200 bg-white"
						/>
					</a>
					<figcaption className="mt-3 text-center text-sm text-earth-600">
						Anfahrt und Parkmöglichkeiten – zum Vergrößern anklicken.
					</figcaption>
				</figure>
			</div>
		</section>
	);
}
