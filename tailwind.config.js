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
				gray: "hsl(0, 0%, 96%)",
				mediumGray: "hsl(0, 0%, 87%)",
				// darkGray: "hsl(0, 0%, 33%)",
				dark: "hsl(0, 0%, 30%)",
				red: "hsl(7, 100%, 81%)",
			},
			backgroundColor: {
				primary: "#FFFFFF",
				secondary: "#033EA6",
				secondaryLight: "#0451d8",
			},
			fontFamily: {
				body: "var(--body-font)",
				display: "var(--display-font)",
				script: "var(--script-font)",
			},
		},
	},
	plugins: [],
};
