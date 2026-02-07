import noMultilineNamedImports from "./no-multiline-named-imports/index.js"
import noSingleQuotesInImportsAndObjectKeys from "./no-single-quotes-in-imports-and-object-keys/index.js"
import preferLet from "./prefer-let/index.js"

const plugin = {
	// preferred location of name and version
	meta: {
		name: `eslint-plugin-enough-is-enough`,
		namespace: `enough-is-enough`,
	},
	rules: {
		"no-multiline-named-imports": noMultilineNamedImports,
		"no-single-quotes-in-imports-and-object-keys": noSingleQuotesInImportsAndObjectKeys,
		"prefer-let": preferLet,
	},
}

export default plugin
