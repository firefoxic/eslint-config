declare module "@firefoxic/eslint-config" {
	import { Linter } from "eslint"
	import globals from "globals"

	export type GlobalsType = typeof globals
	let firefoxicEslintConfig: Linter.Config
	export default firefoxicEslintConfig
}
