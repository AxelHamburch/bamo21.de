import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTelegramModal } from '@/context/TelegramModalContext';

const links = [
	{ href: '/#facts', label: '21 Millionen' },
	{ href: '/#about', label: 'Über BAMO21' },
	{ href: '/#location', label: 'Location' },
];

export default function Navigation() {
	const [open, setOpen] = useState(false);
	const { openModal } = useTelegramModal();

	return (
		<header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<Link to="/" className="text-xl font-bold tracking-tight text-white">
					BAMO<span className="text-brand-400">21</span>
				</Link>

				<div className="hidden items-center gap-8 md:flex">
					{links.map((link) => (
						<a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
							{link.label}
						</a>
					))}
					<button
						type="button"
						onClick={openModal}
						className="rounded-full bg-brand-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-600"
					>
						Telegram
					</button>
				</div>

				<button
					className="text-slate-200 md:hidden"
					aria-label="Menü öffnen"
					onClick={() => setOpen((v) => !v)}
				>
					{open ? <X size={24} /> : <Menu size={24} />}
				</button>
			</nav>

			{open && (
				<div className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden">
					<div className="flex flex-col gap-4">
						{links.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-sm text-slate-300 hover:text-white"
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
