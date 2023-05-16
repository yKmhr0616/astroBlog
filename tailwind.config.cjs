const b = {
	bg: {
		DEFAULT: "#f8fafc",
	}
}

const t = {
	DEFAULT: "#333",
}

const textSize = {
	"c-lg": 'clamp(1.25rem, 1.083rem + 0.83vw, 1.75rem)',
	"c-md": 'clamp(1rem, 0.833rem + 0.83vw, 1.5rem)',
	"c-sm": 'clamp(0.875rem, 0.75rem + 0.63vw, 1.25rem)',
	"c-xs": 'clamp(0.75rem, 0.625rem + 0.63vw, 1.125rem)',
	'c-2xs': 'clamp(0.625rem, 0.5rem + 0.63vw, 1rem)',
}

const headLines = {
	h1: 'clamp(4.5rem, 4.333rem + 0.83vw, 5rem)',
	h2: 'clamp(1.5rem, 1.333rem + 0.83vw, 2rem)',
	h3: 'clamp(1.375rem, 1.167rem + 1.04vw, 2rem)',
	h4: 'clamp(1.25rem, 1.083rem + 0.83vw, 1.75rem)',
	h5: 'clamp(1.125rem, 0.958rem + 0.83vw, 1.625rem)',
	h6: 'clamp(1rem, 0.833rem + 0.83vw, 1.5rem)',
}

const screens = {
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
				t
			},
			fontSize: Object.assign(textSize, headLines),
			fontFamily: {
				'noto-sans': 'Noto Sans JP',
				'poppins': 'Poppins',
				'roboto': 'Roboto'
			},
		},
	},
	plugins: [],
}
