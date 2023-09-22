/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#033EA6",
			},
			backgroundColor: {
				primary: "#FFFFFF",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				sans: ["Work Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
