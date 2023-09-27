/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
		  {
			mytheme: {
			
   "primary": "#5eead4",
			
   "secondary": "#93c5fd",
			
   "accent": "#c084fc",
			
   "neutral": "#2a323c",
			
   "base-100": "#1d232a",
			
   "info": "#3abff8",
			
   "success": "#36d399",
			
   "warning": "#fbbd23",
			
   "error": "#f87272",
			},
		  },
		],
	  },
	plugins: [
		require("daisyui"),
		require('@tailwindcss/typography')
	],
}
