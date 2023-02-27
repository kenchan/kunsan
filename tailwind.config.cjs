/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'-apple-system',
					"BlinkMacSystemFont",
					"Hiragino Kaku Gothic ProN",
					"Hiragino Sans",
					"Meiryo",
					"sans-serif",
					"Segoe UI Emoji"
				],
				serif: [
					'-apple-system',
					"BlinkMacSystemFont",
					"Hiragino Kaku Gothic ProN",
					"Hiragino Sans",
					"Meiryo",
					"sans-serif",
					"Segoe UI Emoji"
				]
			}
		},
	},
	plugins: [],
}
