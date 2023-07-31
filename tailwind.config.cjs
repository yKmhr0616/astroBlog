const b = {
	bg: {
		DEFAULT: "#f8fafc",
	},
}

const c = {
	twitter: "#00acee",
	link: "#06b6d4"
}

const text = {
	DEFAULT: "#333",
}

const textSize = {
	"c-lg": 'clamp(1.25rem, 0.25rem + 1.25vw, 1.75rem)',
	"c-md": 'clamp(1rem, 1.25vw, 1.5rem)',
	"c-sm": 'clamp(0.875rem, 0.125rem + 0.94vw, 1.25rem)',
	"c-xs": 'clamp(0.75rem, 0.94vw, 1.125rem)',
	'c-2xs': 'clamp(0.625rem, -0.125rem + 0.94vw, 1rem)',
}

const headLines = {
	h1: 'clamp(3rem, 1rem + 2.5vw, 4rem)',
	h2: 'clamp(1.5rem, -0.5rem + 2.5vw, 2.5rem)',
	h3: 'clamp(1.375rem, 0.125rem + 1.56vw, 2rem)',
	h4: 'clamp(1.25rem, 0.25rem + 1.25vw, 1.75rem)',
	h5: 'clamp(1.125rem, 0.125rem + 1.25vw, 1.625rem)',
	h6: 'clamp(1rem, 1.25vw, 1.5rem)',
}

const defaultTextSpacing = {
	"cl-sm": `calc(${textSize["c-sm"]} * 1.5)`
}

const inlineTextRatio = {
	"em-xl": "1.5em",
	"em-lg": "1.2em",
	"em-sm": "0.8em",
	"em-xs": "0.65em",
};

const spacing = {
	168: "42rem",
	"w-screen-md": "24.375rem"
}

const customSpacing = {
	"screen-2/5": '40vw'
};

const Root = {
	'320': '41.667%',
	'375': '48.882%',
	'390': '50.78125%',
	'412': '53.6458%',
	'640': '83.334%',
	'768': '100%',
}

const screens = {
	xs: '375px',
}

const gridTemplateColumns = {
	"auto-2": "auto 1fr",
}

const plugin = require("tailwindcss/plugin");

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
				c,
				text
			},
			fontSize: Object.assign(textSize, headLines, Root, inlineTextRatio),
			fontFamily: {
				'noto-sans': "'Noto Sans JP', sans-serif",
				'poppins': "'Poppins', sans-serif",
				'roboto': "'Roboto', sans-serif",
				'noto-serif': "'Noto Serif JP', serif"
			},
			screens,
			spacing: Object.assign(spacing, defaultTextSpacing, customSpacing, textSize),
			maxWidth: Object.assign({}, spacing),
			minHeight: Object.assign({}, spacing),
			gridTemplateColumns
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				'h1': { fontSize: theme('fontSize.h1') },
				'h2': { fontSize: theme('fontSize.h2') },
				'h3': { fontSize: theme('fontSize.h3') },
				'h4': { fontSize: theme('fontSize.h4') },
				'h5': { fontSize: theme('fontSize.h5') },
				'h6': { fontSize: theme('fontSize.h6') },
			})
		}),
		require('@tailwindcss/container-queries'),
	],
}
