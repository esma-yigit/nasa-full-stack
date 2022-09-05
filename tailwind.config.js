/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				space: "url('/src/assets/background-large.jpg')",
			},
		},
	},
	plugins: [],
};
