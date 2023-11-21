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
				emmerald: "hsl(174, 81%, 32%)",
				sapphire: "#2138AB",
				eagle: "#B6BAA4",
				deepOak: "#3d260e",
				sepia: "#704214",
			},
			backgroundColor: {
				primary: "#FFFFFF",
				secondary: "#033EA6",
				secondaryLight: "#0451d8",
				greenishYellow: "#FFF9F2",
				deepOak: "#3d260e",
				// greenishYellow: "#6068AF",
				eagle: "#B6BAA4",
				// eagle: "#54DAD9",
			},
			fontFamily: {
				body: "var(--body-font)",
				headings: "var(--headings-font)",
			},
			animation: {
				enter: "enter 200ms ease-out",
				"fade-out-in": "fade-out-in 300ms linear",
				"fade-in": "fade-in 200ms linear",
				"slide-in": "slide-in 0.3s cubic-bezier(.41,.73,.51,1.02)",
				"slide-in-from-top":
					"slide-in-from-top 0.3s cubic-bezier(.41,.73,.51,1.02)",
				leave: "leave 150ms ease-in forwards",
				"progress-line": "progress-line 450ms ease-in forwards",
			},
			keyframes: {
				enter: {
					"0%": { transform: "scale(0.9)", opacity: 0 },
					"100%": { transform: "scale(1)", opacity: 1 },
				},
				"fade-out-in": {
					"0%": { opacity: 1 },
					"20%": { opacity: 0 },
					"80%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				"fade-in": {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				leave: {
					"0%": { transform: "scale(1)", opacity: 1 },
					"100%": { transform: "scale(0.9)", opacity: 0 },
				},
				"slide-in": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateY(0)" },
				},
				"slide-in-from-top": {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(0)" },
				},
				"progress-line": {
					"0%": {
						right: "100%",
					},
					"50%": {
						right: "70%",
						left: "0",
					},
					"99%": {
						right: "0",
						left: "0",
						opacity: 1,
					},
					"100%": {
						right: "0",
						left: "0",
						opacity: 0,
					},
				},
			},
		},
	},
	plugins: [],
};
