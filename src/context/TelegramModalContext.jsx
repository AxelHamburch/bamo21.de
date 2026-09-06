import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const TelegramModalContext = createContext(null);

// Wird als teilbarer Direktlink genutzt: https://bamo21.de/#telegram-gruppe
const MODAL_HASH = '#telegram-gruppe';

export function TelegramModalProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = useCallback(() => {
		setIsOpen(true);
		if (window.location.hash !== MODAL_HASH) {
			window.history.pushState(null, '', MODAL_HASH);
		}
	}, []);

	const closeModal = useCallback(() => {
		setIsOpen(false);
		if (window.location.hash === MODAL_HASH) {
			window.history.replaceState(
				null,
				'',
				window.location.pathname + window.location.search,
			);
		}
	}, []);

	useEffect(() => {
		const syncFromHash = () => setIsOpen(window.location.hash === MODAL_HASH);
		syncFromHash();
		window.addEventListener('hashchange', syncFromHash);
		window.addEventListener('popstate', syncFromHash);
		return () => {
			window.removeEventListener('hashchange', syncFromHash);
			window.removeEventListener('popstate', syncFromHash);
		};
	}, []);

	return (
		<TelegramModalContext.Provider value={{ isOpen, openModal, closeModal }}>
			{children}
		</TelegramModalContext.Provider>
	);
}

export function useTelegramModal() {
	const context = useContext(TelegramModalContext);
	if (!context) {
		throw new Error('useTelegramModal must be used within a TelegramModalProvider');
	}
	return context;
}
