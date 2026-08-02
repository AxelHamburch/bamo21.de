/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
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
			},
		},
	},
	plugins: [],
};
