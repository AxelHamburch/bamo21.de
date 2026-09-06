import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTelegramModal } from '@/context/TelegramModalContext';

export default function Community() {
	const { openModal } = useTelegramModal();

	return (
		<section id="community" className="scroll-mt-24 px-6 py-16">
			<div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
				<MessageCircle className="text-lake-500" size={24} />
				<h2 className="text-xl font-semibold text-earth-900">Auf dem Laufenden bleiben?</h2>
				<p className="max-w-xl text-sm text-earth-700">
					Seid ihr schon bei Nostr? Ihr findet uns dort als{' '}
					<a
						href="https://njump.me/npub1d4lcs9yzdekau08cx3smku4mrxslt8rrtrm24qhfunwd3tuh2lvqvvgqyx"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium text-lake-700 underline hover:text-lake-800"
					>
						BAMO21
					</a>
					, schaut gern mal vorbei. Wir freuen uns über ein 👍 und jedes "Follow". Für Infos rund um BAMO21 gibt es auch eine öffentliche Telegram-Gruppe. Als
					kleiner Spamschutz kostet das „Ticket&quot; 10 Satoshi – bezahlbar per
					Lightning.
				</p>
				<button
					type="button"
					onClick={openModal}
					className="mt-2 inline-flex items-center gap-2 rounded-full border border-lake-300 px-5 py-2 text-sm font-medium text-lake-700 transition hover:border-lake-500 hover:text-lake-800"
				>
					Zur Telegram Gruppe ⚡
				</button>
			</div>
		</section>
	);
}
