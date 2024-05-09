import { default as firefoxicEslintConfig, globals } from "./lib/index.js"

export default [
	{
		languageOptions: {
			globals: {
				...globals.nodeBuiltin,
			},
		},
	},
	...firefoxicEslintConfig,
]
