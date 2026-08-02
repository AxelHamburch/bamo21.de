import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Facts from '@/components/Facts';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Impressum from '@/components/Impressum';
import Datenschutz from '@/components/Datenschutz';
import TelegramModal from '@/components/TelegramModal';
import { TelegramModalProvider } from '@/context/TelegramModalContext';

function HomePage() {
	return (
		<>
			<Hero />
			<Facts />
			<About />
			<Contact />
		</>
	);
}

function App() {
	return (
		<TelegramModalProvider>
			<BrowserRouter>
				<Helmet>
					<title>BAMO21 – Bitcoin am Ottisee</title>
				</Helmet>
				<Navigation />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
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
