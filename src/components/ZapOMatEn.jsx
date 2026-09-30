import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

import zapomat01 from '../../assets/ZapOMat/ZapOMat-01.webp';
import zapomat02 from '../../assets/ZapOMat/ZapOMat-02.webp';
import zapomat03 from '../../assets/ZapOMat/ZapOMat-03.webp';
import zapomat04 from '../../assets/ZapOMat/ZapOMat-04.webp';
import zapomat05 from '../../assets/ZapOMat/ZapOMat-05.webp';
import zapomat06 from '../../assets/ZapOMat/ZapOMat-06.webp';
import zapomat07 from '../../assets/ZapOMat/ZapOMat-07.webp';

const externalLinkClass = 'text-brand-600 underline hover:text-brand-500';

// Clickable preview image that opens enlarged on click.
function Shot({ src, alt, onExpand }) {
	return (
		<button
			type="button"
			onClick={() => onExpand(src, alt)}
			aria-label={`Enlarge ${alt}`}
			className="block w-full"
		>
			<img
				src={src}
				alt={alt}
				className="mx-auto max-h-[600px] w-auto rounded-2xl border border-earth-200 shadow-sm transition hover:border-brand-300"
			/>
		</button>
	);
}

export default function ZapOMatEn() {
	const [expanded, setExpanded] = useState(null); // { src, alt } | null

	const expand = (src, alt) => setExpanded({ src, alt });

	return (
		<section className="mx-auto max-w-3xl px-6 py-20 text-earth-800">
			<div className="flex items-center justify-between gap-4">
				<h1 className="text-3xl font-bold text-forest-800">The ZapOMat⚡️⚙️</h1>
				<Link
					to="/zapomat"
					aria-label="Deutsche Version"
					title="Deutsche Version"
					className="text-xl font-bold text-forest-800 transition hover:opacity-75"
				>
					DE
				</Link>
			</div>

			<p className="mt-4 leading-relaxed">
				The ZapOMat⚡️⚙️ is a 12-slot flap vending machine with a{' '}
				<a
					href="https://zapbox.space/"
					target="_blank"
					rel="noopener noreferrer"
					className={externalLinkClass}
				>
					ZapBox
				</a>
				.
			</p>

			<div className="mt-6">
				<Shot src={zapomat01} alt="The ZapOMat" onExpand={expand} />
			</div>

			<p className="mt-6 leading-relaxed">
				Just select the product number and pay with Bitcoin⚡Lightning. You
				can either scan the QR code, use your smartphone's NFC module, or tap
				a Bolt Card, a Bolt Ring, or any other NTAG 424. ✅
			</p>

			<div className="mt-6">
				<Shot src={zapomat02} alt="Payment process at the ZapOMat" onExpand={expand} />
			</div>

			<h2 className="mt-12 text-xl font-bold text-forest-800">
				A few example products from the ZapOMat⚡️⚙️
			</h2>

			<div className="mt-6 inline-block -rotate-2 rounded-2xl border-[3px] border-dashed border-brand-500 bg-brand-50 px-6 py-4 text-center">
				<p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
					Today for bitcoin++
				</p>
				<p className="text-3xl font-bold text-brand-600">21% off everything</p>
				<p className="text-sm text-brand-700">except gin</p>
			</div>

			<div className="mt-10 space-y-10">
				<div>
					<h3 className="text-lg font-semibold text-forest-800">
						ZapBox Simple
					</h3>
					<p className="mt-2 leading-relaxed">
						The simple ZapBox with a comfortable display for feedback and
						showing the QR code. Dual USB-A and USB-C for input and output.
					</p>
					<div className="mt-4">
						<Shot src={zapomat03} alt="ZapBox Simple" onExpand={expand} />
					</div>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-forest-800">
						ZapBox Headless Simple
					</h3>
					<p className="mt-2 leading-relaxed">
						The minimalist and low-cost ZapBox for simple switching
						applications. Status feedback via two LEDs that show the state
						of the ZapBox. The ZapBox needs a separate QR code, which you can
						print yourself.
					</p>
					<div className="mt-4">
						<Shot
							src={zapomat04}
							alt="ZapBox Headless Simple"
							onExpand={expand}
						/>
					</div>
				</div>

				<div className="leading-relaxed">
					<p>
						The ZapBox Simple and ZapBox Headless Simple are each available in
						two versions – "Ready to use" and "Bulk".
					</p>
					<p className="mt-3">
						The <strong>"Ready to use"</strong> version is fully tested and
						configured. A user manual, a documentation sheet listing the
						configured parameters, and a USB cable are included.
					</p>
					<p className="mt-3">
						The <strong>"Bulk"</strong> version is also fully tested and comes
						pre-installed with the current firmware, but it is not
						configured. A user manual is included. To set it up, please use
						the web installer{' '}
						<a
							href="https://installer.zapbox.space"
							target="_blank"
							rel="noopener noreferrer"
							className={externalLinkClass}
						>
							installer.zapbox.space
						</a>{' '}
						or{' '}
						<a
							href="https://installer.zapbox.space/headless"
							target="_blank"
							rel="noopener noreferrer"
							className={externalLinkClass}
						>
							installer.zapbox.space/headless
						</a>
						.
					</p>
					<p className="mt-3">
						A note on the ZapBoxes: all ZapBoxes are German engineering,
						hand-assembled with a lot of care. Feel free to build your own,
						everything is free and open source, not just the software. You'll
						find all information, instructions, datasheets, 3D print files,
						and the electrical schematics on the{' '}
						<a
							href="https://github.com/AxelHamburch/ZapBox"
							target="_blank"
							rel="noopener noreferrer"
							className={externalLinkClass}
						>
							GitHub repository
						</a>
						. An overview of all ZapBoxes with links to the setup guides can
						be found at{' '}
						<a
							href="https://zapbox.space"
							target="_blank"
							rel="noopener noreferrer"
							className={externalLinkClass}
						>
							zapbox.space
						</a>
						.
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-forest-800">
						The Candy Machine 🍬⚙️
					</h3>
					<p className="mt-2 leading-relaxed">
						The Candy Machine is a candy dispenser that originally had a touch
						sensor on the bottom. This was replaced with a relay that is now
						controlled by the ZapBox. Batteries are no longer needed, and the
						switch on the back no longer has any function. The touch feature
						is disabled. The USB cable is connected to the ZapBox's output.
						The ZapBox's switching time determines the duration of the screw
						feed and thus the amount of candy dispensed.
					</p>
					<div className="mt-4 grid gap-4 sm:grid-cols-2">
						<Shot src={zapomat05} alt="The Candy Machine" onExpand={expand} />
						<Shot
							src={zapomat06}
							alt="The Candy Machine in action"
							onExpand={expand}
						/>
					</div>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-forest-800">
						The Candy Grabber 🫳🍬
					</h3>
					<p className="mt-2 leading-relaxed">
						The Candy Grabber is a machine with several axes, operated with
						different joysticks. Originally the machine was started with
						game tokens dropped through a slot. It has been converted and now
						has a relay controlled by an external ZapBox. The ZapBox triggers
						the start of the game. The game lasts about 60 seconds, during
						which all axes can be moved. If a product falls into the chute,
						the game is won and ends immediately.
					</p>
					<div className="mt-4">
						<Shot src={zapomat07} alt="The Candy Grabber" onExpand={expand} />
					</div>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-forest-800">
						Skittles 38 g and 136 g 🍬
					</h3>
					<p className="mt-2 leading-relaxed">
						Small colorful chewy candies for the Candy Machine, or just for
						snacking. 😋
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold text-forest-800">
						Bolt Card – Black &amp; Naked
					</h3>
					<p className="mt-2 leading-relaxed">
						Blank or bulk Bolt Cards of type NTAG 424 DNA. You can use them
						for the workshop or set them up yourself. See{' '}
						<a
							href="https://ereignishorizont.xyz/boltcard/"
							target="_blank"
							rel="noopener noreferrer"
							className={externalLinkClass}
						>
							ereignishorizont.xyz/boltcard
						</a>
						.
					</p>
				</div>
			</div>

			{expanded && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
					onClick={() => setExpanded(null)}
				>
					<div
						className="relative"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							onClick={() => setExpanded(null)}
							aria-label="Close image"
							className="absolute -right-3 -top-3 rounded-full bg-white p-1 text-earth-800 shadow-md transition hover:text-brand-600"
						>
							<X size={20} />
						</button>
						<img
							src={expanded.src}
							alt={expanded.alt}
							className="max-h-[85vh] max-w-[90vw] rounded-2xl"
						/>
					</div>
				</div>
			)}
		</section>
	);
}
