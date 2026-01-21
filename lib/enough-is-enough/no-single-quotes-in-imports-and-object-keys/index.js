export default {
	meta: {
		type: `suggestion`,
		docs: { description: `Disallow single quotes in import/export sources and object keys when quoted` },
		fixable: `code`,
		schema: [],
	},

	create (context) {
		let sourceCode = context.sourceCode

		function isSingleQuoted (node) {
			if (typeof node.value !== `string`) return false

			let text = sourceCode.getText(node)

			return text.startsWith(`'`) && text.endsWith(`'`)
		}

		function checkLiteralInImportOrExport (node) {
			if (!node.source) return

			let literal = node.source

			if (isSingleQuoted(literal)) {
				context.report({
					node: literal,
					message: `Use double quotes for import/export source.`,
					fix (fixer) {
						let newText = `"${literal.value.replace(/"/g, `\\"`)}"`

						return fixer.replaceText(literal, newText)
					},
				})
			}
		}

		function checkObjectExpression (node) {
			let properties = node.properties

			let hasQuotedKey = properties.some(
				(prop) => prop.type === `Property`
					&& prop.key.type === `Literal`
					&& typeof prop.key.value === `string`,
			)

			if (!hasQuotedKey) return

			for (let prop of properties) {
				if (
					prop.type !== `Property`
					|| prop.key.type !== `Literal`
					|| typeof prop.key.value !== `string`
				) continue

				let key = prop.key

				if (isSingleQuoted(key)) {
					context.report({
						node: key,
						message: `Use double quotes for quoted object keys.`,
						fix (fixer) {
							let newText = `"${key.value.replace(/"/g, `\\"`)}"`

							return fixer.replaceText(key, newText)
						},
					})
				}
			}
		}

		return {
			ImportDeclaration: checkLiteralInImportOrExport,
			ExportNamedDeclaration: checkLiteralInImportOrExport,
			ExportAllDeclaration: checkLiteralInImportOrExport,
			ObjectExpression: checkObjectExpression,
		}
	},
}
