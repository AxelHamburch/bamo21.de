import React, { createContext, useContext, useState } from 'react';

const TelegramModalContext = createContext(null);

export function TelegramModalProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

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
