import React from 'react';
import { Mic, Wrench, HelpCircle } from 'lucide-react';

// Programm vom 26. September 2026. Slots ohne festen Inhalt bleiben als
// "Frei" stehen – sie werden noch gefüllt.
const tracks = [
	{
		name: 'Großer Pavillon',
		subtitle: 'Vorträge & Diskussionen',
		icon: Mic,
		headerClass: 'border-forest-200 bg-forest-50',
		iconClass: 'text-forest-600',
		titleClass: 'text-forest-800',
		timeClass: 'text-forest-600',
		slots: [
			{ time: '09:00–09:45', title: 'Aufbau & Vorbereitungen' },
			{ time: '09:45–10:00', title: 'Begrüßung & kurze Vorstellung der Veranstalter' },
			{
				time: '10:00–10:30',
				title: 'Bitcoin for Beginners – Vortrag für Einsteiger',
				speaker: 'willitowner',
			},
			{ time: '11:00–12:00', title: 'Was ist das Problem?', speaker: 'Rune' },
			{ time: '12:00–12:15', title: 'Diskussionen und Pause' },
			{
				time: '12:15–13:00',
				title: 'Die Entwicklung der Gesellschaft nach der Entkopplung des Dollars vom Gold',
				speaker: 'Robert',
			},
			{ time: '13:00–13:30', title: 'Große Pause' },
			{ time: '13:30–14:00', title: 'Bitcoin für Bauern – HODL DEIN HOF', speaker: 'Timo' },
			{
				time: '14:00–14:45',
				title: 'Bewusstsein für Finanzen – ein Startpunkt, um Bitcoin zu verstehen',
				speaker: 'FinanzBewusst',
			},
			{ time: '14:45–15:00', title: 'Pause und Diskussion' },
			{
				time: '15:00–15:45',
				title: 'Banken als Offramps, KYC, Coin Control',
				speaker: 'Juniormind',
			},
			{ time: '15:45–16:00', title: 'Abschlussversammlung & freie Diskussionen' },
			{ time: '16:00–18:00', title: 'Ausklang – Ende der Veranstaltung' },
		],
	},
	{
		name: 'Scheune',
		subtitle: 'Workshops & Ausstellungen zum Anfassen',
		icon: Wrench,
		headerClass: 'border-lake-200 bg-lake-50',
		iconClass: 'text-lake-600',
		titleClass: 'text-lake-700',
		timeClass: 'text-lake-600',
		slots: [
			{ time: '09:00–11:00', title: 'Frei', free: true },
			{
				time: '11:00–11:30',
				title: 'Lightning Wallet für Einsteiger – erklärt und gezeigt',
				speaker: 'noch offen',
			},
			{
				time: '11:30–12:00',
				title: 'ZapBox – Schalten mit Bitcoin-Zahlungen (Vorstellung & Grundlagen)',
				speaker: 'axelhamburch',
			},
			{ time: '12:00–12:30', title: 'Pause' },
			{
				time: '12:30–13:00',
				title: 'ZapBox Workshop – Einrichten und Parametrieren',
				speaker: 'axelhamburch',
			},
			{
				time: '13:00–14:00',
				title: 'Nostr – keine Plattform, sondern ein Protokoll',
				speaker: 'Noerdlicht',
				description:
					'Einfach und verständlich für Noobs, anschließend legen wir gemeinsam einen Nostr-Account an. Es gibt ein Handout mit den nötigen Apps und Schritten.',
			},
			{
				time: '14:00–14:30',
				title: 'Netzstabilität durch Bitcoin-Mining – Vortrag mit anschließender Diskussion',
				speaker: 'willitowner',
			},
			{
				time: '14:30–15:00',
				title: 'Bolt Card & Bolt Ring – Einführung und kleiner Workshop',
				speaker: 'axelhamburch',
			},
			{ time: '15:00–15:30', title: 'Frei', free: true },
			{ time: '15:30–16:00', title: 'Frei', free: true },
		],
	},
];

// Programmpunkte ohne festen Zeitpunkt – werden vor Ort per Aushang bekannt gegeben.
const openSlots = ['Hofführung durch den Eigner (ca. 20 Minuten)', 'Naturerlebnis für Kinder – Aukse'];

const exhibitors = [
	{ name: 'ZapBox', url: 'https://zapbox.space/' },
	{ name: 'bitcoin21.shop', url: 'https://bitcoin21.shop/' },
	{ name: 'bitcointaps.com', url: 'https://bitcointaps.com' },
	{ name: 'bitcoinerleben.space', url: 'https://bitcoinerleben.space/' },
	{ name: 'bitucation.com', url: 'https://bitucation.com/' },
];

export default function Schedule() {
	return (
		<section id="schedule" className="scroll-mt-24 px-6 py-20">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto max-w-3xl text-center">
					<h2 className="text-3xl font-bold text-forest-800 sm:text-4xl">Programm</h2>
					<p className="mt-4 text-earth-700">
						An zwei Orten läuft parallel das Programm für den 26. September 2026: Vorträge
						und Diskussionen im Großen Pavillon, Workshops und Ausstellungen zum Anfassen
						in der Scheune. Es wird noch ergänzt – Änderungen sind also möglich.
					</p>
				</div>

				<div className="mt-12 grid gap-8 lg:grid-cols-2">
					{tracks.map(
						({
							name,
							subtitle,
							icon: Icon,
							headerClass,
							iconClass,
							titleClass,
							timeClass,
							slots,
						}) => (
							<div
								key={name}
								className="overflow-hidden rounded-2xl border border-earth-200 bg-white/60"
							>
								<div className={`flex items-center gap-3 border-b px-6 py-4 ${headerClass}`}>
									<Icon className={`shrink-0 ${iconClass}`} size={20} />
									<div>
										<h3 className={`font-bold ${titleClass}`}>{name}</h3>
										<p className="text-sm text-earth-600">{subtitle}</p>
									</div>
								</div>

								<ol className="divide-y divide-earth-100">
									{slots.map(({ time, title, speaker, description, free }) => (
										<li
											key={time}
											className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:gap-5 ${
												free ? 'opacity-60' : ''
											}`}
										>
											<span
												className={`shrink-0 text-sm font-semibold tabular-nums sm:w-28 ${timeClass}`}
											>
												{time}
											</span>
											<div>
												<p className="text-earth-900">{title}</p>
												{speaker && <p className="mt-0.5 text-sm text-earth-600">{speaker}</p>}
												{description && (
													<p className="mt-1 text-sm text-earth-600">{description}</p>
												)}
											</div>
										</li>
									))}
								</ol>
							</div>
						)
					)}
				</div>

				<div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-earth-200 bg-earth-50/60 p-6">
					<div className="flex items-center gap-3">
						<HelpCircle className="shrink-0 text-earth-500" size={20} />
						<div>
							<h3 className="font-bold text-earth-900">Allerlei Sonstiges</h3>
							<p className="text-sm text-earth-600">
								Zeit &amp; Ort werden vor Ort per Aushang bekannt gegeben.
							</p>
						</div>
					</div>
					<ul className="mt-4 list-disc space-y-2 pl-12 text-earth-800">
						{openSlots.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>

				<div className="mx-auto mt-8 max-w-3xl text-center text-earth-800">
					<p>
						Im <span className="font-semibold">Kleinen Pavillon</span> und im{' '}
						<span className="font-semibold">Gewächshaus</span> beim Hofladen finden diverse
						kleine Ausstellungen und Präsentationen statt. Mit dabei sind unter anderem:
					</p>
					<p className="mt-3">
						{exhibitors.map(({ name, url }, index) => (
							<React.Fragment key={url}>
								{index > 0 && <span className="text-earth-400"> · </span>}
								<a
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-brand-600 underline hover:text-brand-500"
								>
									{name}
								</a>
							</React.Fragment>
						))}
					</p>
				</div>
			</div>
		</section>
	);
}
