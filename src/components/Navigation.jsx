import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
	{ href: '/#facts', label: 'Auf einen Blick' },
	{ href: '/#event', label: 'Das Event' },
	{ href: '/#schedule', label: 'Programm' },
	{ href: '/#location', label: 'Ort & Anreise' },
	{ href: '/#community', label: 'Info-Gruppe' },
];

export default function Navigation() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-earth-200 bg-earth-50/90 backdrop-blur">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<Link to="/" className="text-xl font-bold tracking-tight text-forest-800">
					BAMO<span className="text-brand-500">21</span>
				</Link>

				<div className="hidden items-center gap-8 md:flex">
					{links.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm text-earth-700 transition hover:text-forest-700"
						>
							{link.label}
						</a>
					))}
				</div>

				<button
					className="text-earth-800 md:hidden"
					aria-label="Menü öffnen"
					onClick={() => setOpen((v) => !v)}
				>
					{open ? <X size={24} /> : <Menu size={24} />}
				</button>
			</nav>

			{open && (
				<div className="border-t border-earth-200 bg-earth-50 px-6 py-4 md:hidden">
					<div className="flex flex-col gap-4">
						{links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-sm text-earth-700 hover:text-forest-700"
								onClick={() => setOpen(false)}
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			)}
		</header>
	);
}
