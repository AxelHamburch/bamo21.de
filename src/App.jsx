import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Facts from '@/components/Facts';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Contact from '@/components/Contact';
import Community from '@/components/Community';
import Support from '@/components/Support';
import Footer from '@/components/Footer';
import Impressum from '@/components/Impressum';
import Antrag from '@/components/Antrag';
import Datenschutz from '@/components/Datenschutz';
import TelegramModal from '@/components/TelegramModal';
import { TelegramModalProvider } from '@/context/TelegramModalContext';
import { useStaleBuildReload } from '@/hooks/useStaleBuildReload';

// Beim Seitenwechsel nach oben scrollen – außer bei Anker-Links (#...)
function ScrollToTop() {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (!hash) window.scrollTo(0, 0);
	}, [pathname, hash]);

	return null;
}

function HomePage() {
	return (
		<>
			<Hero />
			<Facts />
			<About />
			<Schedule />
			<Contact />
			<Support />
			<Community />
		</>
	);
}

function App() {
	useStaleBuildReload();

	return (
		<TelegramModalProvider>
			<BrowserRouter>
				<ScrollToTop />
				<Helmet>
					<title>BAMO21 – Bitcoin am Ottisee</title>
				</Helmet>
				<Navigation />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/de/antrag" element={<Antrag />} />
						<Route path="/de/impressum" element={<Impressum />} />
						<Route path="/de/datenschutz" element={<Datenschutz />} />
					</Routes>
				</main>
				<Footer />
				<TelegramModal />
			</BrowserRouter>
		</TelegramModalProvider>
	);
}

export default App;
