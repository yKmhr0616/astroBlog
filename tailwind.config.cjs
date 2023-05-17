const b = {
	bg: {
		DEFAULT: "#f8fafc",
	}
}

const text = {
	DEFAULT: "#333",
}

const textSize = {
	"c-lg": 'clamp(1.25rem, 0.917rem + 0.69vw, 1.75rem)',
	"c-md": 'clamp(1rem, 0.667rem + 0.69vw, 1.5rem)',
	"c-sm": 'clamp(0.875rem, 0.625rem + 0.52vw, 1.25rem)',
	"c-xs": 'clamp(0.75rem, 0.5rem + 0.52vw, 1.125rem)',
	'c-2xs': 'clamp(0.625rem, 0.375rem + 0.52vw, 1rem)',
}

const headLines = {
	h1: 'clamp(3rem, 1.667rem + 2.78vw, 5rem)',
	h2: 'clamp(1.5rem, 0.833rem + 1.39vw, 2.5rem)',
	h3: 'clamp(1.375rem, 0.958rem + 0.87vw, 2rem)',
	h4: 'clamp(1.25rem, 0.917rem + 0.69vw, 1.75rem)',
	h5: 'clamp(1.125rem, 0.792rem + 0.69vw, 1.625rem)',
	h6: 'clamp(1rem, 0.667rem + 0.69vw, 1.5rem)',
}

const Root = {
	'320': '41.667%',
	'375': '48.882%',
	'390': '50.78125%',
	'412': '53.6458%',
	'640': '83.334%',
	'768': '100%',
}

const screens = {
	xs: '375px'
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['"Roboto"', '"Noto Sans JP"', '"Poppins"'],
		},
		extend: {
			colors: {
				b,
				text
			},
			fontSize: Object.assign(textSize, headLines, Root),
			fontFamily: {
				'noto-sans': "'Noto Sans JP', sans-serif",
				'poppins': "'Poppins', sans-serif",
				'roboto': "'Roboto', sans-serif"
			},
			screens,
		},
	},
	plugins: [],
}
