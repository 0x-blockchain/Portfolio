/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
				mono: ['Overpass Mono', 'ui-sans-serif', 'system-ui'],
			},
			listStyleType: {
				square: 'square'
			}	
		},
	},
	plugins: [],
}
