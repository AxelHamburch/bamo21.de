import React from 'react';

export default function About() {
	return (
		<section id="event" className="scroll-mt-24 bg-forest-50 px-6 py-20">
			<div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
				<div>
					<h2 className="text-3xl font-bold text-forest-800 sm:text-4xl">Was ist BAMO21?</h2>
					<p className="mt-6 text-earth-800">
						BAMO steht für „Bitcoin am Ottisee&quot; – ein offenes Event von Plebs für
						Plebs auf einem kleinen Gemüsehof bei Hamburg. Ein Ort für Austausch,
						Vorträge, Workshops und das Gefühl, dass Bitcoin lebt und gelebt wird.
					</p>
					<p className="mt-4 text-earth-800">
						Das Programm gestalten wir bewusst offen, sodass es auch (noch)
						Nicht-Bitcoiner anspricht – vom ersten Kontakt mit Bitcoin bis zum
						Fachgespräch unter Nodenbetreibern ist alles dabei.
					</p>
					<p className="mt-4 text-earth-800">
						Der Hof sorgt für Getränke, Kuchen und saisonale Produkte aus der Region –
						Honig, Schokolade, Gin und mehr. Bezahlt werden kann selbstverständlich auch
						mit Bitcoin.
					</p>
				</div>
				<div className="relative aspect-video overflow-hidden rounded-2xl border border-forest-200">
					<img
						src="/bamo-pic.jpg"
						alt="Der Gemüsehof am Ottisee"
						className="h-full w-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
