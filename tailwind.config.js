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
				emmerald: "hsl(174, 81%, 32%)",
				sapphire: "hsl(230, 68%, 40%)",
				deepOak: "hsl(32, 100%, 10%)",
				sepia: "hsl(32, 100%, 15%)",
				gold: "hsl(57, 100%, 56%)",
			},
			backgroundColor: {
				ceramic: "hsl(32, 100%, 97%)",
				deepOak: "hsl(32, 100%, 10%)",
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
