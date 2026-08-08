import React from 'react';
import { CalendarDays, Sprout, Waves } from 'lucide-react';

const facts = [
	{
		icon: CalendarDays,
		iconClass: 'text-brand-500',
		title: 'Samstag, 26.09.2026',
		description:
			'Ein Tag voller Austausch, Vorträge und Workshops rund um Bitcoin – locker, offen und zum Mitmachen.',
	},
	{
		icon: Sprout,
		iconClass: 'text-forest-500',
		title: 'Auf einem Gemüsehof',
		description:
			'Säen, pflegen, ernten – Nachhaltigkeit trifft Satoshis. Der Hof bietet Getränke, Kuchen und regionale Produkte. Bitcoin wird natürlich akzeptiert.',
	},
	{
		icon: Waves,
		iconClass: 'text-lake-500',
		title: 'Direkt am Ottisee',
		description:
			'Scheune, Gewächshaus, viel Fläche und eine Wiese mit Zugang zum See – mitten in den Vier- und Marschlanden bei Hamburg.',
	},
];

export default function Facts() {
	return (
		<section id="facts" className="scroll-mt-24 px-6 py-20">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold text-forest-800 sm:text-4xl">Auf einen Blick</h2>
					<p className="mt-4 text-earth-700">
						Hamburg hat viel – aber noch keine gelebte Bitcoin-Kultur. Das wollen wir für
						einen Tag ändern und ein kleines Leuchtfeuer für Bitcoin setzen.
					</p>
				</div>

				<div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{facts.map(({ icon: Icon, iconClass, title, description }) => (
						<div
							key={title}
							className="rounded-2xl border border-earth-200 bg-white/70 p-8 transition hover:border-brand-300 hover:shadow-md"
						>
							<Icon className={iconClass} size={28} />
							<h3 className="mt-4 text-lg font-semibold text-earth-900">{title}</h3>
							<p className="mt-2 text-sm text-earth-700">{description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
