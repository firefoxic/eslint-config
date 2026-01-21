import stylistic from "@stylistic/eslint-plugin"
import eslintPluginPreferLet from "eslint-plugin-prefer-let"
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort"

import enoughIsEnough from "./enough-is-enough/index.js"

export { default as globals } from "globals"

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		rules: {
			"accessor-pairs": `error`,
			"arrow-body-style": [
				`error`,
				`as-needed`,
			],
			"camelcase": `error`,
			"constructor-super": `error`,
			"curly": [
				`error`,
				`multi-or-nest`,
			],
			"eqeqeq": [
				`error`,
				`always`,
			],
			"for-direction": `error`,
			"func-style": [
				`error`,
				`declaration`,
			],
			"getter-return": `error`,
			"guard-for-in": `error`,
			"no-alert": `error`,
			"no-async-promise-executor": `error`,
			"no-case-declarations": `error`,
			"no-class-assign": `error`,
			"no-compare-neg-zero": `error`,
			"no-cond-assign": `error`,
			"no-const-assign": `error`,
			"no-constant-binary-expression": `error`,
			"no-constant-condition": `error`,
			"no-control-regex": `error`,
			"no-debugger": `error`,
			"no-delete-var": `error`,
			"no-dupe-args": `error`,
			"no-dupe-class-members": `error`,
			"no-dupe-else-if": `error`,
			"no-dupe-keys": `error`,
			"no-duplicate-case": `error`,
			"no-empty": `error`,
			"no-empty-character-class": `error`,
			"no-empty-pattern": `error`,
			"no-empty-static-block": `error`,
			"no-ex-assign": `error`,
			"no-extra-boolean-cast": `error`,
			"no-fallthrough": `error`,
			"no-func-assign": `error`,
			"no-global-assign": `error`,
			"no-import-assign": `error`,
			"no-invalid-regexp": `error`,
			"no-lonely-if": `error`,
			"no-loss-of-precision": `error`,
			"no-misleading-character-class": `error`,
			"no-multi-assign": `error`,
			"no-nested-ternary": `error`,
			"no-new-native-nonconstructor": `error`,
			"no-nonoctal-decimal-escape": `error`,
			"no-obj-calls": `error`,
			"no-octal": `error`,
			"no-octal-escape": `error`,
			"no-proto": `error`,
			"no-prototype-builtins": `error`,
			"no-redeclare": `error`,
			"no-regex-spaces": `error`,
			"no-return-assign": `error`,
			"no-self-assign": `error`,
			"no-self-compare": `error`,
			"no-setter-return": `error`,
			"no-shadow": [
				`error`,
				{
					hoist: `all`,
				},
			],
			"no-shadow-restricted-names": `error`,
			"no-sparse-arrays": `error`,
			"no-template-curly-in-string": `error`,
			"no-this-before-super": `error`,
			"no-undef": `error`,
			"no-unexpected-multiline": `error`,
			"no-unneeded-ternary": `error`,
			"no-unreachable": `error`,
			"no-unsafe-finally": `error`,
			"no-unsafe-negation": `error`,
			"no-unsafe-optional-chaining": `error`,
			"no-unused-expressions": `error`,
			"no-unused-labels": `error`,
			"no-unused-private-class-members": `error`,
			"no-unused-vars": `error`,
			"no-use-before-define": [
				`error`,
				{
					functions: false,
				},
			],
			"no-useless-backreference": `error`,
			"no-useless-catch": `error`,
			"no-useless-concat": `error`,
			"no-useless-escape": `error`,
			"no-useless-return": `error`,
			"no-var": `error`,
			"no-with": `error`,
			"object-shorthand": `error`,
			"one-var": [
				`error`,
				`never`,
			],
			"prefer-arrow-callback": `error`,
			"prefer-object-has-own": `error`,
			"prefer-template": `error`,
			"radix": `error`,
			"require-yield": `error`,
			"strict": [
				`error`,
				`global`,
			],
			"use-isnan": `error`,
			"valid-typeof": `error`,
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
			"@stylistic/array-bracket-newline": `error`,
			"@stylistic/array-bracket-spacing": `error`,
			"@stylistic/array-element-newline": [
				`error`,
				{
					consistent: true,
					multiline: true,
				},
			],
			"@stylistic/arrow-parens": `error`,
			"@stylistic/arrow-spacing": `error`,
			"@stylistic/block-spacing": `error`,
			"@stylistic/brace-style": [
				`error`,
				`stroustrup`,
				{
					allowSingleLine: true,
				},
			],
			"@stylistic/comma-dangle": [
				`error`,
				`always-multiline`,
			],
			"@stylistic/comma-spacing": `error`,
			"@stylistic/comma-style": `error`,
			"@stylistic/computed-property-spacing": `error`,
			"@stylistic/curly-newline": [
				`error`,
				{
					consistent: true,
					multiline: true,
				},
			],
			"@stylistic/dot-location": [
				`error`,
				`property`,
			],
			"@stylistic/eol-last": `error`,
			"@stylistic/function-call-argument-newline": [
				`error`,
				`consistent`,
			],
			"@stylistic/function-call-spacing": `error`,
			"@stylistic/function-paren-newline": [
				`error`,
				`multiline-arguments`,
			],
			"@stylistic/generator-star-spacing": [
				`error`,
				`after`,
			],
			"@stylistic/implicit-arrow-linebreak": `error`,
			"@stylistic/indent": [
				`error`,
				`tab`,
				{
					SwitchCase: 1,
				},
			],
			"@stylistic/indent-binary-ops": [
				`error`,
				`tab`,
			],
			"@stylistic/key-spacing": `error`,
			"@stylistic/keyword-spacing": `error`,
			"@stylistic/linebreak-style": `error`,
			"@stylistic/lines-around-comment": [
				`error`,
				{
					beforeBlockComment: true,
					allowBlockStart: true,
				},
			],
			"@stylistic/lines-between-class-members": `error`,
			"@stylistic/member-delimiter-style": [
				`error`,
				{
					multiline: {
						delimiter: `comma`,
						requireLast: true,
					},
					singleline: {
						delimiter: `comma`,
						requireLast: false,
					},
				},
			],
			"@stylistic/multiline-comment-style": [
				`error`,
				`separate-lines`,
			],
			"@stylistic/multiline-ternary": [
				`error`,
				`always-multiline`,
			],
			"@stylistic/new-parens": `error`,
			"@stylistic/no-confusing-arrow": `off`,
			"@stylistic/no-extra-semi": `error`,
			"@stylistic/no-floating-decimal": `error`,
			"@stylistic/no-mixed-operators": `error`,
			"@stylistic/no-mixed-spaces-and-tabs": `error`,
			"@stylistic/no-multi-spaces": `error`,
			"@stylistic/no-multiple-empty-lines": [
				`error`,
				{
					max: 1,
					maxBOF: 0,
					maxEOF: 0,
				},
			],
			"@stylistic/no-trailing-spaces": `error`,
			"@stylistic/no-whitespace-before-property": `error`,
			"@stylistic/nonblock-statement-body-position": `error`,
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
			"@stylistic/one-var-declaration-per-line": `error`,
			"@stylistic/operator-linebreak": [
				`error`,
				`before`,
				{
					overrides: {
						"=": `none`,
					},
				},
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
					next: [
						`class`,
						`export`,
						`function`,
						`import`,
					],
				},
				{
					blankLine: `always`,
					prev: [
						`class`,
						`export`,
						`function`,
						`import`,
					],
					next: `*`,
				},
				{
					blankLine: `any`,
					prev: [
						`const`,
						`let`,
						`var`,
					],
					next: [
						`const`,
						`let`,
						`var`,
					],
				},
				{
					blankLine: `any`,
					prev: `export`,
					next: `export`,
				},
				{
					blankLine: `any`,
					prev: `import`,
					next: `import`,
				},
				{
					blankLine: `any`,
					prev: `*`,
					next: `return`,
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
			"@stylistic/rest-spread-spacing": `error`,
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
			"@stylistic/space-before-blocks": `error`,
			"@stylistic/space-before-function-paren": `error`,
			"@stylistic/space-in-parens": `error`,
			"@stylistic/space-infix-ops": `error`,
			"@stylistic/space-unary-ops": `error`,
			"@stylistic/spaced-comment": `error`,
			"@stylistic/switch-colon-spacing": `error`,
			"@stylistic/template-curly-spacing": `error`,
			"@stylistic/template-tag-spacing": `error`,
			"@stylistic/type-annotation-spacing": `error`,
			"@stylistic/type-generic-spacing": `error`,
			"@stylistic/type-named-tuple-spacing": `error`,
			"@stylistic/wrap-iife": `error`,
			"@stylistic/wrap-regex": `error`,
			"@stylistic/yield-star-spacing": `error`,
		},
	},
	{
		plugins: {
			"enough-is-enough": enoughIsEnough,
		},
		rules: {
			"enough-is-enough/no-multiline-named-imports": `error`,
			"enough-is-enough/no-single-quotes-in-imports-and-object-keys": `error`,
		},
	},
]
