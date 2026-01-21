export default {
	meta: {
		type: `layout`,
		fixable: `code`,
		messages: {
			multiline: `Multi-line named imports are disallowed.`,
		},
	},
	create (context) {
		let sourceCode = context.sourceCode

		return {
			ImportDeclaration (node) {
				let namedSpecifiers = node.specifiers.filter((s) => s.type === `ImportSpecifier`)

				if (namedSpecifiers.length === 0) return

				let tokens = sourceCode.getTokens(node)
				let openBrace = tokens.find((t) => t.value === `{`)
				let closeBrace = tokens.reverse().find((t) => t.value === `}`)

				if (!openBrace || !closeBrace) return

				if (openBrace.loc.start.line !== closeBrace.loc.end.line) {
					context.report({
						node,
						messageId: `multiline`,
						fix (fixer) {
							let imports = namedSpecifiers.map((s) => sourceCode.getText(s)).join(`, `)
							let defaultImport = node.specifiers.find((s) => s.type === `ImportDefaultSpecifier`)
							let namespaceImport = node.specifiers.find((s) => s.type === `ImportNamespaceSpecifier`)
							let source = sourceCode.getText(node.source)

							let newImport = `import `

							if (defaultImport) newImport += `${sourceCode.getText(defaultImport)}, `
							if (namespaceImport) newImport += `${sourceCode.getText(namespaceImport)}, `
							newImport += `{ ${imports} } from ${source}`

							let lastToken = sourceCode.getLastToken(node)
							let hasSemicolon = lastToken && lastToken.value === `;`

							if (hasSemicolon) newImport += `;`

							return fixer.replaceText(node, newImport)
						},
					})
				}
			},

		}
	},
}
