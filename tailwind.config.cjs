const b = {
	bg: {
		DEFAULT: "#f8fafc",
	}
}

const t = {
	DEFAULT:"#333",
}

const textSize = {
	lg:'clamp(1.25rem, calc(1.25rem + ((1vw - 0.48rem) * 0.6944)), 1.75rem)',
	md:'clamp(1rem, calc(1rem + ((1vw - 0.48rem) * 0.6944)), 1.5rem)',
	sm:'clamp(0.875rem, calc(0.875rem + ((1vw - 0.48rem) * 0.5208)), 1.25rem)',
	xs:'clamp(0.75rem, calc(0.75rem + ((1vw - 0.48rem) * 0.5208)), 1.125rem)',
	'2xs':'clamp(0.625rem, calc(0.625rem + ((1vw - 0.48rem) * 0.5208)), 1rem)',
}

const headLines = {
	h1:'clamp(4.5rem, calc(4.5rem + ((1vw - 0.48rem) * 0.6944)), 5rem)',
	h2:'clamp(1.5rem, calc(1.5rem + ((1vw - 0.48rem) * 0.6944)), 2rem)',
	h3:'clamp(1.375rem, calc(1.375rem + ((1vw - 0.48rem) * 0.6944)), 1.875rem)',
	h4:'clamp(1.25rem, calc(1.25rem + ((1vw - 0.48rem) * 0.6944)), 1.75rem)',
	h5:'clamp(1.125rem, calc(1.125rem + ((1vw - 0.48rem) * 0.6944)), 1.625rem)',
	h6:'clamp(1rem, calc(1rem + ((1vw - 0.48rem) * 0.6944)), 1.5rem)',
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
			fontSize:Object.assign(textSize, headLines),
			fontFamily: {
				'noto-sans':'Noto Sans JP',
				'poppins': 'Poppins',
				'roboto': 'Roboto'
			},
		},
	},
	plugins: [],
}
