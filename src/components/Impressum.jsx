import React from 'react';

export default function Impressum() {
	return (
		<section className="mx-auto max-w-3xl px-6 py-20 text-earth-800">
			<h1 className="text-3xl font-bold text-forest-800">Impressum</h1>

			<div className="mt-8 space-y-6 text-sm leading-relaxed">
				<div>
					<h2 className="font-semibold text-earth-900">Angaben gemäß § 5 DDG</h2>
					<p>
						Axel Schlautmann
						<br />
						c/o IP-Management #8947
						<br />
						Ludwig-Erhard-Straße 18
						<br />
						20459 Hamburg
					</p>
					<p className="mt-4">E-Mail: info [at] bamo21 [dot] de</p>
				</div>
			</div>
		</section>
	);
}
