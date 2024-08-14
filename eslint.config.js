import { default as firefoxicEslintConfig, globals } from "./lib/index.js"

/** @type {import('eslint').Linter.Config[]} */
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
