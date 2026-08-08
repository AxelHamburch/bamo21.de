/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				// Bitcoin-Orange
				brand: {
					50: '#fff7ed',
					100: '#ffedd3',
					200: '#ffd9a6',
					300: '#ffbd6e',
					400: '#ff9d33',
					500: '#f7931a',
					600: '#dd7908',
					700: '#b75d09',
					800: '#93490f',
					900: '#783d10',
				},
				// Grün – Wiese, Gemüsegärten
				forest: {
					50: '#f2f7ee',
					100: '#e2eeda',
					200: '#c6ddb6',
					300: '#a3c78d',
					400: '#7ead63',
					500: '#5c9243',
					600: '#467433',
					700: '#385c2b',
					800: '#2f4a26',
					900: '#283e22',
				},
				// Braun – Erde, Hof
				earth: {
					50: '#faf6ee',
					100: '#f3ebdb',
					200: '#e5d5b8',
					300: '#d3b98d',
					400: '#c09b66',
					500: '#a97f4c',
					600: '#8f6640',
					700: '#745137',
					800: '#5c4130',
					900: '#3d2f24',
				},
				// Blau – der Ottisee
				lake: {
					50: '#eff8fb',
					100: '#d8edf4',
					200: '#b5dde9',
					300: '#83c5d9',
					400: '#4aa5c2',
					500: '#2e89a8',
					600: '#296f8d',
					700: '#285b74',
					800: '#294c60',
					900: '#264052',
				},
			},
		},
	},
	plugins: [],
};
