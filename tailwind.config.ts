import type { Config } from "tailwindcss"

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./shared/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"telegram-white": "var(--telegram-bg-color)",
				"telegram-black": "var(--telegram-text-color)",
				"telegram-hint": "var(--telegram-hint-color)",
				"telegram-link": "var(--telegram-link-color)",
				"telegram-primary": "var(--telegram-button-color)",
				"telegram-primary-text": "var(--telegram-button-text-color)",
				"telegram-secondary-white": "var(--telegram-secondary-bg-color)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
}
export default config
