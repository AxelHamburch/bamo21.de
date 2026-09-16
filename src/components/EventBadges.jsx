import React from 'react';

export default function EventBadges() {
	return (
		<section className="mx-auto max-w-3xl px-6 py-20 text-earth-800">
			<h1 className="text-3xl font-bold text-forest-800">
				Digitale Event-Badges mit Nostr
			</h1>

			<p className="mt-4 leading-relaxed">
				Für BAMO21 – Bitcoin am Ottisee sind digitale Event-Badges vorbereitet!
				Ihr könnt sie euch ganz einfach vor Ort bei Helfern abholen. Alles, was
				ihr dafür tun müsst: Scannt am Tag des Events mit der{' '}
				<strong>„21Meetup“-App</strong> den QR-Code bei den entsprechenden
				Personen.
			</p>

			<div className="mt-10 space-y-6 leading-relaxed">
				<div>
					<h2 className="text-xl font-semibold text-forest-800">
						So kommt ihr an die App
					</h2>
					<p className="mt-3">
						Die „21Meetup“-App findet ihr direkt im{' '}
						<a
							href="https://zapstore.dev/apps/space.einundzwanzig.meetup"
							target="_blank"
							rel="noopener noreferrer"
							className="text-brand-600 underline hover:text-brand-500"
						>
							Zap-Store
						</a>{' '}
						oder bei Google Play.
					</p>
					<p className="mt-3">
						Da Apple leider eine vollständige Identifizierung (KYC) verlangt,
						ist die App aktuell noch nicht im offiziellen App Store verfügbar –
						wir arbeiten aber bereits an einer Lösung!
					</p>
					<blockquote className="mt-4 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4 text-earth-900">
						Für alle iPhone-Nutzer: Keine Sorge, ihr müsst nicht draußen
						bleiben! Nutzt einfach die praktische Web-App, die auch auf dem
						„Apfel“ hervorragend funktioniert:{' '}
						<a
							href="https://razue.github.io/Einundzwanzig-Meetup-App/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-brand-600 underline hover:text-brand-500"
						>
							razue.github.io/Einundzwanzig-Meetup-App
						</a>
					</blockquote>
				</div>

				<div>
					<h2 className="text-xl font-semibold text-forest-800">
						Mehr zum Projekt
					</h2>
					<p className="mt-3">
						Und für alle Neugierigen, hier findet ihr eine Beschreibung zum
						Projekt:{' '}
						<a
							href="https://21koblenz.github.io/einundzwanzig-meetup-website/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-brand-600 underline hover:text-brand-500"
						>
							21koblenz.github.io/einundzwanzig-meetup-website
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
