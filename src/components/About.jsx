import React from 'react';

export default function About() {
	return (
		<section id="about" className="scroll-mt-24 px-6 py-20">
			<div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
				<div>
					<h2 className="text-3xl font-bold text-white sm:text-4xl">Was ist BAMO21?</h2>
					<p className="mt-6 text-slate-400">
						{/* TODO: Details zum Treffpunkt/Community ergänzen (Ort, Häufigkeit, Ansprechpartner) */}
						BAMO21 steht für „Bitcoin am Ottisee" – ein Treffpunkt für alle, die sich für
						Bitcoin interessieren: vom Einsteiger bis zum erfahrenen Nutzer. Bei uns geht
						es um Wissen, Austausch und die Idee einer Währung mit fester Obergrenze von
						21 Millionen Bitcoin.
					</p>
				</div>
				<div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-brand-900/40 to-slate-900" />
			</div>
		</section>
	);
}
