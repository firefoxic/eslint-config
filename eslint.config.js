import { default as firefoxicEslintConfigJs, globals } from "./lib/index.js"

export default [
	{
		languageOptions: {
			globals: {
				...globals.nodeBuiltin,
			},
		},
	},
	...firefoxicEslintConfigJs,
]
