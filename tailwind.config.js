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
				yellow: "hsl(60, 100%, 90%)",
				lightYellow: "hsl(60, 50%, 90%)",
				sapphire: "#2138AB",
				eagle: "#B6BAA4",
			},
			backgroundColor: {
				primary: "#FFFFFF",
				secondary: "#033EA6",
				secondaryLight: "#0451d8",
				greenishYellow: "#DAE0CB",
				// greenishYellow: "#6068AF",
				eagle: "#B6BAA4",
				// eagle: "#54DAD9",
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
