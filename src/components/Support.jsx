import React from 'react';
import { Link } from 'react-router-dom';
import { HandHeart } from 'lucide-react';

export default function Support() {
	return (
		<section id="support" className="scroll-mt-24 bg-forest-50 px-6 py-16">
			<div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
				<HandHeart className="text-brand-500" size={24} />
				<h2 className="text-xl font-semibold text-earth-900">Ein Event von Plebs für Plebs</h2>
				<p className="max-w-xl text-sm text-earth-700">
					BAMO21 ist ein nicht-kommerzielles Event, organisiert von einfachen Plebs, die
					freiwillig und unentgeltlich ihre Zeit und Ressourcen einbringen. Einige Dinge
					kosten aber doch mehr als Luft und Liebe – deshalb freuen wir uns sehr über
					Unterstützung in Form von Satoshi-Spenden:
				</p>
				<a
					href="lightning:bamo-support@21mio.space"
					className="inline-flex items-center gap-2 rounded-full border border-brand-300 px-5 py-2 text-sm font-medium text-brand-600 transition hover:border-brand-500 hover:text-brand-700"
				>
					⚡ bamo-support@21mio.space
				</a>
				<p className="max-w-xl text-xs text-earth-600">
					Jeder Satoshi zählt und wird sorgsam eingesetzt. Versprochen: Es wird einen
					Transparenzbericht geben, in dem alle Einnahmen und Ausgaben offen aufgelistet
					werden.
				</p>

				<div className="mt-6 max-w-xl border-t border-forest-200 pt-6">
					<h3 className="text-sm font-semibold uppercase tracking-wider text-earth-900">
						EINUNDZWANZIG Antrag zur Projekt-Unterstützung
					</h3>
					<p className="mt-3 text-sm text-earth-700">
						Wir haben auch einen{' '}
						<a
							href="https://verein.einundzwanzig.space/association/project-support/bitcoin-am-ottisee-bamo"
							target="_blank"
							rel="noopener noreferrer"
							className="text-brand-600 underline hover:text-brand-500"
						>
							Antrag bei EINUNDZWANZIG
						</a>{' '}
						eingereicht, um ein paar grundlegende Kosten zu decken.
					</p>
					<p className="mt-2 text-sm text-earth-700">
						<Link to="/de/antrag" className="text-brand-600 underline hover:text-brand-500">
							Hier gibt es den Antrag als Webversion
						</Link>{' '}
						– mit vernünftiger Formatierung.
					</p>
					<p className="mt-2 text-sm text-earth-700">
						Ihr könnt uns auch unterstützen, indem ihr dem Antrag eure Stimme gebt. Dazu
						braucht ihr einen Nostr-Account und die EINUNDZWANZIG-Vereinsmitgliedschaft
						(21.000 Sats pro Jahr). Wenn ihr dabei Unterstützung benötigt, kommt gerne in
						die nachfolgende Telegram-Gruppe.
					</p>
				</div>
			</div>
		</section>
	);
}
