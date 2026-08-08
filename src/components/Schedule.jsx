import React from 'react';
import { Clock } from 'lucide-react';

// Platzhalter-Programm – wird nach und nach mit Leben gefüllt.
const slots = [
	{
		time: 'Vormittag',
		title: 'Ankommen & Einlass',
		description: 'Details folgen in Kürze.',
	},
	{
		time: 'Mittag',
		title: 'Vorträge & Workshops',
		description: 'Details folgen in Kürze.',
	},
	{
		time: 'Nachmittag',
		title: 'Austausch, Hof & See',
		description: 'Details folgen in Kürze.',
	},
	{
		time: 'Abend',
		title: 'Gemeinsamer Ausklang',
		description: 'Details folgen in Kürze.',
	},
];

export default function Schedule() {
	return (
		<section id="schedule" className="scroll-mt-24 px-6 py-20">
			<div className="mx-auto max-w-3xl">
				<div className="text-center">
					<h2 className="text-3xl font-bold text-forest-800 sm:text-4xl">Programm</h2>
					<p className="mt-4 text-earth-700">
						Das Programm für den 26. September 2026 wird gerade zusammengestellt.
						Hier entsteht die Timeline mit allen Vorträgen, Workshops und Aktionen –
						schau einfach wieder vorbei.
					</p>
				</div>

				<ol className="mt-12 space-y-0">
					{slots.map(({ time, title, description }, index) => (
						<li key={title} className="relative flex gap-6 pb-10 last:pb-0">
							{index < slots.length - 1 && (
								<span
									className="absolute left-[15px] top-8 h-full w-px bg-earth-200"
									aria-hidden="true"
								/>
							)}
							<span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest-300 bg-forest-50">
								<Clock className="text-forest-500" size={16} />
							</span>
							<div>
								<p className="text-xs font-semibold uppercase tracking-wider text-lake-600">
									{time}
								</p>
								<h3 className="mt-1 font-semibold text-earth-900">{title}</h3>
								<p className="mt-1 text-sm text-earth-600">{description}</p>
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
