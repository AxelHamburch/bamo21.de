import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const links = [
	{ href: '/#facts', label: 'Auf einen Blick' },
	{ href: '/#event', label: 'Das Event' },
	{ href: '/#schedule', label: 'Programm' },
	{ href: '/#location', label: 'Ort & Anreise' },
	{ href: '/#community', label: 'Telegram-Gruppe' },
];

const otherLinks = [
	{ href: 'https://bamo21.de/verlosung', label: '₿AMO Verlosung' },
	{ href: 'https://bamo21.de/wos-tutorial', label: 'Wallet-of-Satoshi Tutorial' },
	{ href: 'https://bamo21.de/buhogo-tutorial', label: 'BuhoGO Tutorial' },
	{ href: '/event-badges', label: '₿AMO Event-Badges' },
];

export default function Navigation() {
	const [open, setOpen] = useState(false);
	const [otherOpen, setOtherOpen] = useState(false);
	const [mobileOtherOpen, setMobileOtherOpen] = useState(false);
	const otherRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (otherRef.current && !otherRef.current.contains(event.target)) {
				setOtherOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<header className="sticky top-0 z-50 border-b border-earth-200 bg-earth-50/90 backdrop-blur">
			<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
				<Link to="/" className="text-xl font-bold tracking-tight text-forest-800">
					₿AMO<span className="text-brand-500">21</span>
				</Link>

				<div className="hidden items-center gap-8 md:flex">
					{links.map((link) =>
						link.href.startsWith('/#') ? (
							<a
								key={link.href}
								href={link.href}
								className="text-sm text-earth-700 transition hover:text-forest-700"
							>
								{link.label}
							</a>
						) : (
							<Link
								key={link.href}
								to={link.href}
								className="text-sm text-earth-700 transition hover:text-forest-700"
							>
								{link.label}
							</Link>
						)
					)}

					<div className="relative" ref={otherRef}>
						<button
							type="button"
							onClick={() => setOtherOpen((v) => !v)}
							className="flex items-center gap-1 text-sm text-earth-700 transition hover:text-forest-700"
							aria-expanded={otherOpen}
						>
							Sonstiges
							<ChevronDown
								size={16}
								className={`transition-transform ${otherOpen ? 'rotate-180' : ''}`}
							/>
						</button>

						{otherOpen && (
							<div className="absolute right-0 top-full mt-2 w-56 rounded-lg border border-earth-200 bg-earth-50 py-2 shadow-lg">
								{otherLinks.map((link) =>
									link.href.startsWith('http') ? (
										<a
											key={link.href}
											href={link.href}
											target="_blank"
											rel="noopener noreferrer"
											className="block px-4 py-2 text-sm text-earth-700 transition hover:bg-earth-100 hover:text-forest-700"
											onClick={() => setOtherOpen(false)}
										>
											{link.label}
										</a>
									) : (
										<Link
											key={link.href}
											to={link.href}
											className="block px-4 py-2 text-sm text-earth-700 transition hover:bg-earth-100 hover:text-forest-700"
											onClick={() => setOtherOpen(false)}
										>
											{link.label}
										</Link>
									)
								)}
							</div>
						)}
					</div>
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
						{links.map((link) =>
							link.href.startsWith('/#') ? (
								<a
									key={link.href}
									href={link.href}
									className="text-sm text-earth-700 hover:text-forest-700"
									onClick={() => setOpen(false)}
								>
									{link.label}
								</a>
							) : (
								<Link
									key={link.href}
									to={link.href}
									className="text-sm text-earth-700 hover:text-forest-700"
									onClick={() => setOpen(false)}
								>
									{link.label}
								</Link>
							)
						)}

						<div>
							<button
								type="button"
								onClick={() => setMobileOtherOpen((v) => !v)}
								className="flex w-full items-center justify-between text-sm text-earth-700 hover:text-forest-700"
								aria-expanded={mobileOtherOpen}
							>
								Sonstiges
								<ChevronDown
									size={16}
									className={`transition-transform ${mobileOtherOpen ? 'rotate-180' : ''}`}
								/>
							</button>

							{mobileOtherOpen && (
								<div className="mt-3 flex flex-col gap-3 pl-4">
									{otherLinks.map((link) =>
										link.href.startsWith('http') ? (
											<a
												key={link.href}
												href={link.href}
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm text-earth-600 hover:text-forest-700"
												onClick={() => setOpen(false)}
											>
												{link.label}
											</a>
										) : (
											<Link
												key={link.href}
												to={link.href}
												className="text-sm text-earth-600 hover:text-forest-700"
												onClick={() => setOpen(false)}
											>
												{link.label}
											</Link>
										)
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</header>
	);
}
