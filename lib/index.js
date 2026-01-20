import js from "@eslint/js"
import stylistic from "@stylistic/eslint-plugin"
import eslintPluginPreferLet from "eslint-plugin-prefer-let"
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort"

export { default as globals } from "globals"

/** @type {import('eslint').Linter.Config[]} */
export default [
	js.configs.recommended,
	{
		rules: {
			"accessor-pairs": `error`,
			"arrow-body-style": [
				`error`,
				`as-needed`,
			],
			"camelcase": `error`,
			"curly": [
				`error`,
				`multi-line`,
			],
			"eqeqeq": [
				`error`,
				`always`,
			],
			"func-style": [
				`error`,
				`declaration`,
			],
			"guard-for-in": `error`,
			"no-alert": `error`,
			"no-irregular-whitespace": `off`,
			"no-lonely-if": `error`,
			"no-multi-assign": `error`,
			"no-proto": `error`,
			"no-nested-ternary": `error`,
			"no-octal-escape": `error`,
			"no-prototype-builtins": `error`,
			"no-return-assign": `error`,
			"no-self-compare": `error`,
			"no-shadow": [
				`error`,
				{
					hoist: `all`,
				},
			],
			"no-template-curly-in-string": `error`,
			"no-unneeded-ternary": `error`,
			"no-unused-expressions": `error`,
			"no-use-before-define": [
				`error`,
				{
					functions: false,
				},
			],
			"no-useless-concat": `error`,
			"no-useless-return": `error`,
			"no-var": `error`,
			"object-shorthand": `error`,
			"one-var": [
				`error`,
				`never`,
			],
			"prefer-arrow-callback": `error`,
			"prefer-object-has-own": `error`,
			"prefer-template": `error`,
			"radix": `error`,
			"strict": [
				`error`,
				`global`,
			],
		},
	},
	{
		plugins: {
			"prefer-let": eslintPluginPreferLet,
		},
		rules: {
			"prefer-let/prefer-let": `error`,
		},
	},
	{
		plugins: {
			"simple-import-sort": eslintPluginSimpleImportSort,
		},
		rules: {
			"simple-import-sort/exports": `error`,
			"simple-import-sort/imports": [
				`error`,
				{
					groups: [
						// 1.Node.js modules
						[`^node:`],
						// 2. Foreign modules
						[`^@?\\w`],
						// 3. Absolute imports (@/...)
						[`^@/`],
						// 4. Relative imports (up)
						[
							`^\\.\\.(?!/?$)`,
							`^\\.\\./?$`,
						],
						// 5. Relative imports (down)
						[
							`^\\./(?=.*/)(?!/?$)`,
							`^\\.(?!/?$)`,
							`^\\./?$`,
						],
						// 6. Styles
						[`^.+\\.s?css$`],
					],
				},
			],
		},
	},
	{
		plugins: {
			"@stylistic": stylistic,
		},
		rules: {
			"@stylistic/array-bracket-newline": [
				`error`,
				// `consistent`,
				{ multiline: true },
			],
			"@stylistic/array-bracket-spacing": [
				`error`,
				`never`,
			],
			"@stylistic/array-element-newline": [
				`error`,
				`consistent`,
			],
			"@stylistic/arrow-parens": [
				`error`,
				`always`,
			],
			"@stylistic/arrow-spacing": [
				`error`,
				{
					before: true,
					after: true,
				},
			],
			"@stylistic/block-spacing": [
				`error`,
				`always`,
			],
			"@stylistic/brace-style": [
				`error`,
				`1tbs`,
				{
					allowSingleLine: true,
				},
			],
			"@stylistic/comma-dangle": [
				`error`,
				`always-multiline`,
			],
			"@stylistic/comma-spacing": [
				`error`,
				{
					before: false,
					after: true,
				},
			],
			"@stylistic/comma-style": [
				`error`,
				`last`,
			],
			"@stylistic/computed-property-spacing": [
				`error`,
				`never`,
			],
			"@stylistic/dot-location": [
				`error`,
				`property`,
			],
			"@stylistic/eol-last": [
				`error`,
				`always`,
			],
			"@stylistic/function-call-argument-newline": [
				`error`,
				`consistent`,
			],
			"@stylistic/function-call-spacing": [
				`error`,
				`never`,
			],
			"@stylistic/function-paren-newline": [
				`error`,
				`multiline-arguments`,
			],
			"@stylistic/generator-star-spacing": [
				`error`,
				{
					before: true,
					after: false,
				},
			],
			"@stylistic/implicit-arrow-linebreak": [
				`error`,
				`beside`,
			],
			"@stylistic/indent": [
				`error`,
				`tab`,
				{
					SwitchCase: 1,
				},
			],
			"@stylistic/key-spacing": [
				`error`,
				{
					beforeColon: false,
					afterColon: true,
				},
			],
			"@stylistic/keyword-spacing": [
				`error`,
				{
					before: true,
					after: true,
				},
			],
			"@stylistic/linebreak-style": [
				`error`,
				`unix`,
			],
			"@stylistic/lines-around-comment": [
				`error`,
				{
					beforeBlockComment: true,
					allowBlockStart: true,
				},
			],
			"@stylistic/lines-between-class-members": [
				`error`,
				`always`,
			],
			"@stylistic/max-len": [
				`error`,
				{ code: Infinity },
			],
			"@stylistic/multiline-comment-style": [
				`error`,
				`separate-lines`,
			],
			"@stylistic/multiline-ternary": [
				`error`,
				`always-multiline`,
			],
			"@stylistic/new-parens": [
				`error`,
				`never`,
			],
			"@stylistic/no-extra-semi": [`error`],
			"@stylistic/no-floating-decimal": [`error`],
			"@stylistic/no-mixed-operators": [
				`error`,
				{ allowSamePrecedence: true },
			],
			"@stylistic/no-mixed-spaces-and-tabs": [
				`error`,
				// `smart-tabs`,
			],
			"@stylistic/no-multi-spaces": [
				`error`,
				{
					ignoreEOLComments: true,
				},
			],
			"@stylistic/no-multiple-empty-lines": [
				`error`,
				{
					max: 1,
				},
			],
			'@stylistic/no-trailing-spaces': [`error`],
			"@stylistic/no-whitespace-before-property": [`error`],
			"@stylistic/nonblock-statement-body-position": [
				`error`,
				`beside`,
			],
			"@stylistic/object-curly-newline": [
				`error`,
				{
					consistent: true,
					multiline: true,
				},
			],
			"@stylistic/object-curly-spacing": [
				`error`,
				`always`,
			],
			"@stylistic/object-property-newline": [
				`error`,
				{
					allowAllPropertiesOnSameLine: true,
				},
			],
			"@stylistic/operator-linebreak": [
				`error`,
				`before`,
			],
			"@stylistic/padded-blocks": [
				`error`,
				`never`,
			],
			"@stylistic/padding-line-between-statements": [
				`error`,
				{
					blankLine: `always`,
					prev: `*`,
					next: [`function`, `const`, `let`, `var`, `export`, `return`],
				},
				{
					blankLine: `always`,
					prev: [`import`, `const`, `let`, `var`, `export`, `function`],
					next: `*`,
				},
				{
					blankLine: `any`,
					prev: [`const`, `let`, `var`],
					next: [`const`, `let`, `var`],
				},
				{
					blankLine: `any`,
					prev: `import`,
					next: `import`,
				},
			],
			"@stylistic/quote-props": [
				`error`,
				`consistent-as-needed`,
				{
					keywords: true,
				},
			],
			"@stylistic/quotes": [
				`error`,
				`backtick`,
			],
			"@stylistic/rest-spread-spacing": [
				`error`,
				`never`,
			],
			"@stylistic/semi": [
				`error`,
				`never`,
				{
					beforeStatementContinuationChars: `always`,
				},
			],
			"@stylistic/semi-spacing": [
				`error`,
				{
					before: false,
					after: true,
				},
			],
			"@stylistic/semi-style": [
				`error`,
				`first`,
			],
			"@stylistic/space-before-blocks": [
				`error`,
				`always`,
			],
			"@stylistic/space-before-function-paren": [
				`error`,
				`always`,
			],
			"@stylistic/space-in-parens": [
				`error`,
				`never`,
			],
			"@stylistic/space-infix-ops": [
				`error`,
				{ int32Hint: false },
			],
			"@stylistic/space-unary-ops": [`error`],
			"@stylistic/spaced-comment": [
				`error`,
				`always`,
			],
			"@stylistic/switch-colon-spacing": [
				`error`,
				{
					before: false,
					after: true,
				},
			],
			"@stylistic/template-curly-spacing": [
				`error`,
				`never`,
			],
			"@stylistic/template-tag-spacing": [
				`error`,
				`never`,
			],
			"@stylistic/wrap-iife": [
				`error`,
				`outside`,
			],
			"@stylistic/wrap-regex": [`error`],
			"@stylistic/yield-star-spacing": [
				`error`,
				`before`,
			],
		},
	},
]
