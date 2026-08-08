import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="border-t border-earth-200 px-6 py-10">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-earth-700 sm:flex-row">
				<p>&copy; {new Date().getFullYear()} BAMO21 · Free and Open Source</p>
				<p className="text-xs text-earth-600">Erstellt mit 🎈 und ❤️ – Block {__BLOCK_HEIGHT__}</p>
				<div className="flex items-center gap-6">
					<Link to="/de/impressum" className="hover:text-forest-700">
						Impressum
					</Link>
					<Link to="/de/datenschutz" className="hover:text-forest-700">
						Datenschutz
					</Link>
					<a
						href="https://github.com/AxelHamburch/bamo21.de"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Quellcode auf GitHub"
						className="transition hover:text-forest-700"
					>
						<Github size={20} />
					</a>
				</div>
			</div>
		</footer>
	);
}
