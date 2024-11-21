import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-default": "linear-gradient(90deg, #FF0F00 0%, #FFA400 100%)",
			},
		},
		colors: {
			orange: "#FF4C00",
			gray: "#4C575B",
			lightDark: "#454545",
			dark: "#1E2028",
			black: "#000000",
			white: "#FFFFFF",
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
