import React from 'react';
import { ArrowDown, PartyPopper, Sparkles } from 'lucide-react';

const photos = import.meta.glob('../../assets/Recap/*.webp', {
	eager: true,
	import: 'default',
});

const photo = (name) => photos[`../../assets/Recap/${name}.webp`];

const sparkles = [
	{ left: '4%', top: '8%', size: 22, delay: '0s', color: 'text-brand-400' },
	{ left: '16%', top: '70%', size: 14, delay: '0.8s', color: 'text-lake-400' },
	{ left: '30%', top: '15%', size: 16, delay: '1.4s', color: 'text-forest-400' },
	{ left: '52%', top: '85%', size: 18, delay: '0.4s', color: 'text-brand-300' },
	{ left: '68%', top: '10%', size: 14, delay: '1.9s', color: 'text-lake-300' },
	{ left: '82%', top: '65%', size: 22, delay: '1.1s', color: 'text-brand-500' },
	{ left: '93%', top: '18%', size: 16, delay: '0.2s', color: 'text-forest-300' },
];

const link = 'text-brand-600 underline hover:text-brand-500';

const expenses = [
	['A2-Plakate (25 Stück)', '26,- €'],
	['2x Shoutout (je 10k Sats)', '15,- €'],
	['Papierrolle/Deko', '22,- €'],
	['Miettoilette', '173,- €'],
	['Helfer-Getränke', '80,- €'],
	['Helfer-Verpflegung', '100,- €'],
	['Versand der Gewinne', '12,- €'],
	['86" Display mit Traverse', '540,- €'],
	['8 Stehtische, 8 Klappstühle, 5 Festzeltgarnituren', '250,- €'],
	[
		'Dankeschön an die Feuerwehr Hohendeich für 8 Festzeltgarnituren und 2 Faltpavillons',
		'150,- €',
	],
];

const income = [
	['Spende in Bar', '20,- €'],
	['Spenden an Silent-Payment-Adresse (45k sats)', '33,- €'],
	['Spenden an bamo-support@21mio.space (216k sats)', '159,- €'],
	['Spenden an verlosung@bamo21.de (735k sats)', '540,- €'],
	['BAMO-Telegram-Ticketverkauf (700 sats)', '0,50 €'],
	['BAMO-Nostr-Zaps und Lightning Piggy (6.250 sats)', '4,50 €'],
];

const talks = [
	{
		who: 'willitowner',
		title: 'Bitcoin: Vortrag für Einsteiger',
		links: [
			[
				'BAMO21 – Bitcoin – Vortrag für Einsteiger (PDF)',
				'/Material/BAMO21_-_Bitcoin_-_Vortrag_für_Einsteiger.pdf',
			],
		],
	},
	{
		who: 'Timo',
		title: 'Bitcoin für Bauern – HODL DEIN HOF',
		links: [
			[
				'hochkultur.org/was-mit-dem-hof-stirbt',
				'https://hochkultur.org/was-mit-dem-hof-stirbt/',
			],
		],
	},
	{
		who: 'FinanzBewusst',
		title: 'Bewusst leben. Bewusst mit Geld umgehen. Wie Bitcoin hier hilft.',
		links: [
			['finanzbewusst.com', 'https://finanzbewusst.com/'],
			['youtube.com/@deinwegzubitcoin', 'https://youtube.com/@deinwegzubitcoin'],
			[
				'fountain.fm/show/WdHajypwLY2JOQN2zH1S',
				'https://fountain.fm/show/WdHajypwLY2JOQN2zH1S',
			],
		],
	},
	{
		who: 'Ralph21',
		title: 'Nostr, der kleine Bruder von Bitcoin – eine andere Sicht auf Nostr',
		links: [['Was ist Nostr? (Bild)', '/Material/was-ist-nostr.jpg']],
	},
	{
		who: 'Juniormind',
		title: 'Banken als Offramps, KYC, Coin Control',
		links: [
			['Banken als Offramps (PDF)', '/Material/Banken-als-Offramps.pdf'],
			['SatSage – know your sats (GitHub)', 'https://github.com/Juniormind1/SatSage'],
		],
	},
	{
		who: 'Christin & Réno',
		title: 'SeedSigner: Bitcoin-Sicherheit zum Selberbauen',
		links: [
			[
				'Präsentation SeedSigner (PDF)',
				'/Material/260930_BAMO21_Präsentation_SeedSigner.pdf',
			],
		],
	},
	{
		who: 'axelhamburch',
		title: 'ZapBox, Lightning-Wallet für Einsteiger, Bolt Card & Bolt Ring',
		links: [
			['zapbox.space', 'https://zapbox.space/'],
			['BuhoGo-Tutorial', '/BuhoGo-Tutorial'],
			['ereignishorizont.xyz/boltcard', 'https://ereignishorizont.xyz/boltcard/'],
			[
				'NFC Ring NTAG 424 DNA',
				'https://rfidsolution.com/product/nfc-ring-nxp-ntag-424-dna/',
			],
		],
	},
	{
		who: 'Noerdlicht',
		title: 'Nostr: keine Plattform, sondern ein Protokoll mit Bitcoin⚡Lightning',
		links: [['bitcoinlighthouse.de/blog/nostr', 'https://bitcoinlighthouse.de/blog/nostr']],
	},
];

function Photos({ items }) {
	return (
		<div className="my-8 flex flex-wrap items-center justify-center gap-3">
			{items.map(([name, alt], i) => (
				<img
					key={name}
					src={photo(name)}
					alt={alt}
					loading="lazy"
					className={`h-28 w-auto rounded-xl border-4 border-white object-cover shadow-md transition hover:scale-105 sm:h-36 ${
						i % 2 === 0 ? '-rotate-2' : 'rotate-2'
					}`}
				/>
			))}
		</div>
	);
}

function MoneyList({ title, rows, tone }) {
	return (
		<div className={`rounded-2xl border p-5 ${tone}`}>
			<h4 className="text-lg font-bold text-forest-800">{title}</h4>
			<ul className="mt-3 divide-y divide-earth-200/70 text-sm">
				{rows.map(([label, amount], i) => (
					<li key={i} className="flex justify-between gap-4 py-1.5">
						<span>{label}</span>
						<span className="shrink-0 font-semibold tabular-nums">{amount}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default function Recap() {
	return (
		<section className="mt-14 text-left" aria-labelledby="recap-title">
			{/* Banner */}
			<div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-100 via-white to-lake-100 px-6 py-12 text-center shadow-lg">
				{sparkles.map((s) => (
					<Sparkles
						key={s.left}
						aria-hidden="true"
						size={s.size}
						className={`recap-sparkle pointer-events-none absolute ${s.color}`}
						style={{ left: s.left, top: s.top, animationDelay: s.delay }}
					/>
				))}
				<p className="inline-flex items-center gap-2 rounded-full bg-forest-600 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
					<PartyPopper size={14} /> Das Event ist vorbei
				</p>
				<h2
					id="recap-title"
					className="recap-shimmer mt-5 bg-gradient-to-r from-brand-500 via-lake-500 to-brand-500 bg-clip-text pb-1 text-4xl font-extrabold text-transparent sm:text-6xl"
				>
					Schön war's..
				</h2>
				<p className="mt-3 text-sm font-semibold text-earth-700">
					₿AMO21 · 26. September 2026 · Danke an alle! 🧡
				</p>
			</div>

			{/* Rückblick */}
			<div className="mx-auto mt-10 max-w-3xl space-y-4 text-earth-800">
				<p className="text-lg font-semibold text-forest-800">
					BAMO, eine Idee, die einfach mal umgesetzt wurde.
				</p>
				<p>
					Viel Arbeit und Zeit steckte in der Planung und Organisation von "Bitcoin am
					Ottisee", aber wir sind der Meinung, es hat sich wirklich gelohnt. ♥️🎉🤩
				</p>
				<p>
					Wer hätte gedacht, dass wir so ein vollumfängliches Programm auf einem Naturhof am
					See, mit Vorträgen, Workshops, Ausstellungen, Bitcoin-Shops und Lightning⚡Automaten,
					direkt bei Hamburg auf die Beine stellen und dass dann auch noch so viele Menschen
					kommen würden – Danke an alle! 🫶😍
				</p>
			</div>

			<Photos
				items={[
					['09-30_20-13-08', 'Der Naturhof'],
					['10-04_15-23-34', 'Hüpfburg'],
					['09-30_20-13-04', 'Abendsonne am Ottisee'],
				]}
			/>

			<div className="mx-auto max-w-3xl space-y-4 text-earth-800">
				<p>
					Wir haben viel positives Feedback bekommen, und ich glaube, jeder konnte selbst die
					Vibes einer echten Bitcoin-Veranstaltung spüren. Wer so etwas schon mal besuchen
					durfte, weiß: Bitcoin ist etwas Besonderes. Bitcoiner sind offen und voller
					Zuversicht – genau die richtige Mischung an Menschen, mit denen man sich gerne
					umgibt. 🤗🥰
				</p>
			</div>

			<Photos
				items={[
					['10-04_15-25-03', 'Bitcoin-Shop'],
					['10-04_15-23-45', 'Sammelkarten'],
					['10-04_15-23-44', 'Kunst-Ausstellung'],
					['10-04_15-23-39', 'Festzelt mit Solarpanelen'],
					['10-04_15-24-27', 'Vortrag zu Nostr'],
					['10-04_15-24-14', 'Mining-Ausstellung'],
					['10-04_15-24-03', 'Der Ottisee'],
				]}
			/>

			{/* Kassensturz */}
			<div className="mx-auto max-w-3xl text-earth-800">
				<h3 className="text-3xl font-bold text-forest-800">Kassensturz</h3>
				<p className="mt-3">
					Wir haben es versprochen, also liefern wir, volle Transparenz! Wir listen sämtliche
					Einnahmen und Ausgaben auf und machen einen Kassensturz.
				</p>

				<div className="mt-6 grid gap-5 md:grid-cols-2">
					<MoneyList title="Die Ausgaben" rows={expenses} tone="border-earth-200 bg-white" />
					<MoneyList
						title="Einnahmen (Stichtag 29.09.2026)"
						rows={income}
						tone="border-forest-200 bg-forest-50"
					/>
				</div>

				<h4 className="mt-10 text-xl font-bold text-forest-800">Bilanz</h4>
				<div className="mt-3 grid gap-3 sm:grid-cols-3">
					{[
						['Ausgaben gesamt', '1.368,- €'],
						['Einnahmen gesamt', '757,- €'],
						['Differenz', '611,- €'],
					].map(([label, value]) => (
						<div
							key={label}
							className="rounded-2xl border border-brand-200 bg-brand-50 p-4 text-center"
						>
							<p className="text-xs font-semibold uppercase tracking-wider text-earth-600">
								{label}
							</p>
							<p className="mt-1 text-2xl font-extrabold text-brand-600">{value}</p>
						</div>
					))}
				</div>

				<div className="mt-6 space-y-4">
					<p>
						Wie man sieht, konnten die Einnahmen (757,- €) die Ausgaben (1.368,- €) nicht
						vollständig decken – es fehlten 611,- €. Aber das muss es zum Glück auch nicht,
						denn mit EINUNDZWANZIG hatten wir einen Verein im Rücken, der uns das finanzielle
						Fundament gegeben und das Event mit 2,1 Mio. Satoshis (1.538,- €) vorfinanziert
						hat. Danke für das Vertrauen!
					</p>
					<p>
						Durch die EINUNDZWANZIG-Förderung sind wir mit 927,- € (1,27 Mio. Satoshis,
						Stichtag 29.09.2026) im Plus. Diesen Betrag möchten wir nicht behalten, sondern
						sinnvoll weiterverwenden. Wir haben uns daher entschlossen, 270k Sats als{' '}
						<a href="https://shoutout.einundzwanzig.space/" target="_blank" rel="noopener noreferrer" className={link}>Shoutout</a> an den EINUNDZWANZIG-Verein zurückzugeben, und stellen die verbleibenden
						1 Mio. Satoshis für ein weiteres Bitcoin-Event in Aussicht.
					</p>
				</div>
			</div>

			{/* Fazit */}
			<div className="mx-auto mt-12 max-w-3xl space-y-4 text-earth-800">
				<h3 className="text-3xl font-bold text-forest-800">Fazit &amp; Aussicht</h3>
				<p>
					Wir hoffen, wir konnten in euch etwas bewegen und vielleicht sogar einen kleinen
					Samen setzen, aus dem eine kleine Pflanze für Bitcoin wächst. Wir brauchen mehr
					solcher Events, um zu zeigen, dass Bitcoin etwas Gutes ist und den Menschen ihre
					Souveränität und Freiheit zurückgeben kann. Wenn auch ihr das Gefühl hattet, mal
					etwas Wichtiges für Bitcoin tun zu wollen – warum dann nicht ein ähnliches Event
					wie BAMO planen?
				</p>

				<Photos
					items={[
						['10-04_15-26-02', 'ZapBox-Automat'],
						['10-04_15-26-06', 'Münzer 63'],
						['10-04_15-24-09', 'Gemüse gegen Sats'],
						['10-04_15-24-56', 'Kohlrabi'],
						['10-04_15-24-53', 'Chili-Pflanze'],
						['10-04_15-24-37', 'Tomaten im Gewächshaus'],
						['10-04_15-23-29', 'Kürbisse'],
					]}
				/>

				<p>
					Was ihr braucht, ist eine Location, ein Ort, an dem das Ganze stattfindet. Und dann
					braucht ihr eine oder zwei Personen, die das wirklich wollen und einfach mal machen.
					Das Team findet sich, die Menschen haben Lust, einmal bei etwas wirklich
					Großartigem dabei zu sein.
				</p>
				<p>
					Wenn ihr einen Ort kennt und wirklich bereit seid, die Verantwortung auf euch zu
					nehmen, dann meldet euch gerne bei uns:{' '}
					<a href="mailto:next@bamo21.de" className={link}>
						next@bamo21.de
					</a>
					. Wir können euch auch beim Aufbau einer Webseite und bei der Bereitstellung einer
					Kommunikations- oder Finanzinfrastruktur helfen. Vorträge und Workshops werden sich
					finden – die Menschen haben Lust, ihr Wissen zu teilen und anderen damit zu helfen,
					ihr müsst es nur bereitstellen.
				</p>
				<p>
					Um euch den Start zu erleichtern und eine gewisse finanzielle Basis zu geben,
					würden wir das Projekt mit 1 Mio. Satoshis fördern. Voraussetzung ist ein Projekt,
					das ordentlich begründet ist und auch eine realistische Chance hat, umgesetzt zu
					werden. Wenn das Projekt geeignet ist, werden wir es hier bekannt machen und
					unterstützen. Die finanzielle Unterstützung erfolgt dann ab dem Moment, an dem das
					Projekt wirklich konkret wird.
				</p>
				<p>
					Sollte sich bis 31.12.2026 kein Projekt finden, gehen die 1 Mio. Satoshis zurück an
					den EINUNDZWANZIG-Verein, um weiterhin wichtige Projekte wie BAMO zu unterstützen.
				</p>
			</div>

			{/* Dank */}
			<div className="mx-auto mt-12 max-w-3xl space-y-4 text-earth-800">
				<h3 className="text-3xl font-bold text-forest-800">Noch ein letzter Dank</h3>
				<p>
					Danke auch an alle, die auf die eine oder andere Weise beigetragen haben, auch wenn
					sie hier nicht explizit genannt sind. Die Familie Sannmann, die den Hof zur
					Verfügung gestellt und uns bewirtet hat, Axel, der die Webseite gehostet, die
					finanzielle Infrastruktur bereitgestellt und einen Großteil der Organisation
					getragen hat, Lars, der die Ausstellung, die Event-Badges, das Geocaching und die
					Nostr-Seite organisiert hat und auch sonst immer proaktiv mitgewirkt hat, um BAMO
					voranzubringen, an die Vortragenden und Workshop-Organisatoren, die das Event erst
					richtig mit Leben gefüllt haben, an die Helfer, die aktiv mitgeholfen haben, das
					Event auf die Beine zu stellen, und dafür Zeit, Kraft und Material investiert
					haben, an die Freiwillige Feuerwehr, die uns Material zur Verfügung gestellt und es
					dadurch finanzierbar gemacht hat, an die Shops, die vor Ort waren und das Event
					bereichert haben, an die Spender der Verlosungsartikel, die geholfen haben, eine
					Spende erst richtig attraktiv zu machen, und natürlich an alle Spender selbst, die
					– mehr oder weniger – dazu beigetragen haben, ein solches Event größtenteils zu
					finanzieren, damit es auch wieder stattfinden kann.
				</p>

				<Photos
					items={[
						['10-04_15-26-32', 'Bitcoin-Pflänzchen'],
						['10-04_15-26-31', 'Grillen am Abend'],
						['10-04_15-26-33', 'Sonnenaufgang am See'],
					]}
				/>
			</div>

			{/* Anhang */}
			<div className="mx-auto mt-12 max-w-3xl text-earth-800">
				<h3 className="text-2xl font-bold text-forest-800">
					Anhang: Infos und Material zu den Vorträgen &amp; Workshops
				</h3>
				<ul className="mt-4 space-y-4">
					{talks.map((t) => (
						<li key={t.who} className="rounded-xl border border-earth-200 bg-white p-4">
							<p className="font-semibold text-forest-800">
								{t.who} <span className="font-normal text-earth-700">– {t.title}</span>
							</p>
							<ul className="mt-2 space-y-1 text-sm">
								{t.links.map(([label, href]) => (
									<li key={href}>
										<a
											href={href}
											className={link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{label}
										</a>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>

			{/* Ende des Rückblicks */}
			<div className="mt-16 text-center" role="separator">
				<div className="flex items-center gap-4">
					<span className="h-px flex-1 bg-gradient-to-r from-transparent to-brand-300" />
					<Sparkles className="recap-sparkle text-brand-500" size={22} aria-hidden="true" />
					<span className="h-px flex-1 bg-gradient-to-l from-transparent to-brand-300" />
				</div>
				<p className="mt-4 text-sm font-bold uppercase tracking-[0.3em] text-brand-600">
					Ende des Rückblicks
				</p>
				<p className="mt-2 text-earth-700">Hier geht's weiter mit der Webseite</p>
				<ArrowDown className="mx-auto mt-2 text-brand-500" size={24} aria-hidden="true" />
			</div>
		</section>
	);
}
