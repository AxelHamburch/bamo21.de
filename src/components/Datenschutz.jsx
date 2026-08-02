import React from 'react';
import { Link } from 'react-router-dom';

export default function Datenschutz() {
	return (
		<section className="mx-auto max-w-3xl px-6 py-20 text-slate-300">
			<h1 className="text-3xl font-bold text-white">Datenschutzerklärung</h1>

			<div className="mt-8 space-y-6 text-sm leading-relaxed">
				<div>
					<h2 className="font-semibold text-white">Verantwortlicher</h2>
					<p>
						Die Angaben zum Verantwortlichen im Sinne der DSGVO finden Sie im{' '}
						<Link to="/de/impressum" className="underline hover:text-white">
							Impressum
						</Link>{' '}
						dieser Website.
					</p>
				</div>

				<div>
					<h2 className="font-semibold text-white">Datenverarbeitung</h2>
					<p>
						Diese Website erhebt keine personenbezogenen Daten, setzt keine Cookies und
						verwendet kein Tracking. Der Webhoster speichert beim Aufruf technisch bedingt
						automatisch Server-Logfiles (z. B. IP-Adresse, Datum, Uhrzeit, aufgerufene URL,
						Browser), ausschließlich für den sicheren Betrieb des Servers, auf Grundlage von
						Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
					</p>
				</div>

				<div>
					<h2 className="font-semibold text-white">Ihre Rechte</h2>
					<p>
						Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
						Verarbeitung Ihrer Daten sowie das Recht auf Datenübertragbarkeit und das Recht,
						sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Bei Fragen wenden Sie
						sich an die im Impressum angegebene Kontaktadresse.
					</p>
				</div>
			</div>
		</section>
	);
}
