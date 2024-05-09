# @firefoxic/eslint-config

[![License: MIT][license-image]][license-url]
[![Changelog][changelog-image]][changelog-url]
[![NPM version][npm-image]][npm-url]
[![Test Status][test-image]][test-url]

Shared config for eslint by [firefoxic](https://firefoxic.dev).

To see the rules that this config uses, please read the [config itself](./lib/index.js).

## Installation

```shell
pnpm add -D eslint @firefoxic/eslint-config
```

## Usage

Set your `eslint.config.js` to:

```js
import { default as firefoxicEslintConfig, globals } from "@firefoxic/eslint-config"

export default [
	{
		languageOptions: {
			globals: {
				...globals.browser, // If you're working on a frontend project
				...globals.nodeBuiltin, // If you're working on a Node.js project
			},
		},
	},
	...firefoxicEslintConfig,
	{
		rules: {
			// Your overrides or additions to rules
		}
	}
]
```

[license-url]: https://github.com/firefoxic/eslint-config/blob/main/LICENSE.md
[license-image]: https://img.shields.io/badge/License-MIT-limegreen.svg

[changelog-url]: https://github.com/firefoxic/eslint-config/blob/main/CHANGELOG.md
[changelog-image]: https://img.shields.io/badge/CHANGELOG-md-limegreen

[npm-url]: https://npmjs.org/package/@firefoxic/eslint-config
[npm-image]: https://badge.fury.io/js/@firefoxic%2Feslint-config.svg

[test-url]: https://github.com/firefoxic/eslint-config/actions
[test-image]: https://github.com/firefoxic/eslint-config/actions/workflows/test.yml/badge.svg?branch=main
