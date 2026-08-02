import React from 'react';
import { MapPin, Car, Bus } from 'lucide-react';

export default function Contact() {
	return (
		<section id="location" className="scroll-mt-24 px-6 py-20">
			<div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10">
				<h2 className="text-center text-3xl font-bold text-white sm:text-4xl">Location</h2>
				<p className="mt-4 text-center text-slate-400">
					Die Veranstaltung findet auf dem Hof von{' '}
					<a
						href="https://www.axelsgaerten.de/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-brand-400 underline hover:text-brand-300"
					>
						Axels Gemüsegärten
					</a>{' '}
					statt.
				</p>

				<div className="mt-8 flex items-start gap-3">
					<MapPin className="mt-1 shrink-0 text-brand-400" size={20} />
					<p className="text-slate-300">
						Axels Gemüsegärten
						<br />
						Ochsenwerder Elbdeich 195
						<br />
						21037 Hamburg
					</p>
				</div>

				<div className="mt-6 flex items-start gap-3">
					<Car className="mt-1 shrink-0 text-brand-400" size={20} />
					<p className="text-slate-300">
						In unmittelbarer Nähe gibt es leider nicht ausreichend Parkmöglichkeiten für
						PKWs. Entlang des Ochsenwerder Hauptdeichs und des Oortkatener Ufers gibt es
						aber ausreichend Parkmöglichkeiten am Straßenrand. Von dort aus sind es dann
						ungefähr 500 m Fußweg.
					</p>
				</div>

				<div className="mt-6 flex items-start gap-3">
					<Bus className="mt-1 shrink-0 text-brand-400" size={20} />
					<p className="text-slate-300">
						<span className="font-semibold text-white">Öffentliche Verkehrsmittel:</span>
						<br />
						Am besten mit dem Bus 120. Ab der Haltestelle „Oortkaten“ sind es noch ca. 11
						Minuten Fußweg bis zu den Gemüsegärten. Ansonsten steigst du aus den Bussen
						122, 124, 222, 224 an der Haltestelle Oortkatenweg aus. Von hier aus benötigst
						du zu Fuß ca. 25 Minuten.
					</p>
				</div>
			</div>
		</section>
	);
}
