import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin } from 'lucide-react';

export default function Hero() {
	return (
		<section className="relative overflow-hidden px-6 pb-24 pt-20 md:pt-28">
			<div
				className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-forest-100 via-earth-50 to-earth-50"
				aria-hidden="true"
			/>

			<div className="mx-auto max-w-4xl text-center">
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-600"
				>
					₿ BAMO21
				</motion.p>

				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mt-4 text-4xl font-bold tracking-tight text-forest-800 sm:text-5xl md:text-6xl"
				>
					Bitcoin am <span className="text-lake-500">Ottisee</span>
				</motion.h1>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-earth-700"
				>
					<span className="inline-flex items-center gap-2 font-semibold">
						<CalendarDays className="text-brand-500" size={18} />
						Samstag, 26. September 2026
					</span>
					<span className="inline-flex items-center gap-2 font-semibold">
						<MapPin className="text-forest-500" size={18} />
						Gemüsehof in Hamburg-Ochsenwerder
					</span>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mx-auto mt-6 max-w-2xl text-lg text-earth-800"
				>
					Ein Tag von Plebs für Plebs: Austausch, Vorträge und Workshops rund um
					Bitcoin – zwischen Gemüsebeeten, Wiese und See. Offen für alle, vom
					Einsteiger bis zum alten Hasen.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-10 flex flex-wrap items-center justify-center gap-4"
				>
					<a
						href="/#event"
						className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
					>
						Was dich erwartet
					</a>
					<a
						href="/#location"
						className="inline-flex items-center gap-2 rounded-full border border-forest-300 px-6 py-3 text-sm font-semibold text-forest-700 transition hover:border-forest-500 hover:text-forest-800"
					>
						Ort &amp; Anreise
					</a>
				</motion.div>
			</div>
		</section>
	);
}
