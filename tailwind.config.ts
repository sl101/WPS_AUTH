import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	content: [],
	theme: {
		extend: {
			colors: {
				cyan: {
					"071": "#071a3b",
					"730": "#7286a8",
				},
				red:{
					"620":"#d22630"
				},
			},
			fontFamily: {
				Roboto: ['"Roboto"', 'sans-serif'],
			},
		},
	},
	plugins: [],
};