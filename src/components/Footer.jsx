import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="border-t border-white/10 px-6 py-10">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
				<p>&copy; {new Date().getFullYear()} BAMO21. Alle Rechte vorbehalten.</p>
				<div className="flex gap-6">
					<Link to="/de/impressum" className="hover:text-white">
						Impressum
					</Link>
					<Link to="/de/datenschutz" className="hover:text-white">
						Datenschutz
					</Link>
				</div>
			</div>
		</footer>
	);
}
