import React from 'react';
import { Lock, Users, TrendingDown } from 'lucide-react';

const facts = [
	{
		icon: Lock,
		title: 'Feste Obergrenze',
		description:
			'Das Bitcoin-Protokoll erlaubt maximal 21 Millionen Bitcoin. Diese Grenze ist im Code fest verankert und kann nicht erhöht werden.',
	},
	{
		icon: TrendingDown,
		title: 'Halving',
		description:
			'Etwa alle vier Jahre halbiert sich die Belohnung für neu erzeugte Blöcke – bis um das Jahr 2140 die letzten Satoshis geschürft sind.',
	},
	{
		icon: Users,
		title: 'Dezentral',
		description:
			'Kein Unternehmen und keine Zentralbank kontrolliert Bitcoin. Ein weltweites Netzwerk aus Teilnehmern sichert das System ab.',
	},
];

export default function Facts() {
	return (
		<section id="facts" className="scroll-mt-24 px-6 py-20">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold text-white sm:text-4xl">Warum 21 Millionen?</h2>
					<p className="mt-4 text-slate-400">
						Die feste Obergrenze ist eines der zentralen Merkmale von Bitcoin – anders als bei
						klassischen Währungen kann niemand einfach neue Bitcoin drucken.
					</p>
				</div>

				<div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{facts.map(({ icon: Icon, title, description }) => (
						<div
							key={title}
							className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-brand-400/40 hover:bg-white/[0.07]"
						>
							<Icon className="text-brand-400" size={28} />
							<h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
							<p className="mt-2 text-sm text-slate-400">{description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
