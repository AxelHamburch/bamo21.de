import React from 'react';
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
			</div>
		</section>
	);
}
