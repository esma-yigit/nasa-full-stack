/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				space: "url('/src/assets/img/background-large.jpg')",
			},
			borderColor: {
				card: "#029DBB",
				buttonEdge: "#00FF00",
				button: "#009900",
			},
			colors: {
				primary: "#029DBB",
				secondary: "#26DAFD",
				light: "#A1ECFB",
				buttonText: "#00FE00",
				buttonBg: "#091B08",
			},
		},
	},
	plugins: [],
};
