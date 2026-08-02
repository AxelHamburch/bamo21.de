import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTelegramModal } from '@/context/TelegramModalContext';

export default function Hero() {
	const { openModal } = useTelegramModal();

	return (
		<section className="relative overflow-hidden px-6 pb-20 pt-24 md:pt-32">
			<div
				className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-900/40 via-slate-950 to-slate-950"
				aria-hidden="true"
			/>

			<div className="mx-auto max-w-4xl text-center">
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-400"
				>
					₿ BAMO21
				</motion.p>

				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
				>
					Bitcoin am <span className="text-brand-400">Ottisee</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.15 }}
					className="mx-auto mt-6 max-w-2xl text-lg text-slate-300"
				>
					21 Millionen Bitcoin – mehr wird es nie geben. BAMO21 ist der Treffpunkt für
					alle, die sich am Ottisee für Bitcoin interessieren.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-10 flex items-center justify-center gap-4"
				>
					<button
						type="button"
						onClick={openModal}
						className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
					>
						Join Telegram Group
						<ArrowRight size={16} />
					</button>
					<a
						href="/#facts"
						className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:text-white"
					>
						Warum 21 Millionen?
					</a>
				</motion.div>
			</div>
		</section>
	);
}
