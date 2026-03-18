<!-- markdownlint-disable MD024 -->
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com), and this project adheres to [Semantic Versioning](https://semver.org).

## [Unreleased]

## [8.0.1] — 2026–03–18

### Fixed

- The dependencies have now been updated to versions that include security fixes.

## [8.0.0] — 2026–02–25

### Changed

- Imports are now grouped in the following order:
	1. Node.js modules,
	2. Foreign modules,
	3. Styles,
	4. Absolute imports (@/...),
	5. Relative imports (up),
	6. Relative imports (down).

## [7.0.0] — 2026–02–07

### Changed

- The config is now required `eslint` version `10.0.0` or higher.

## [6.0.1] — 2026–01–21

### Fixed

- All necessary files are now included in the npm package.

## [6.0.0] — 2026–01–21

### Changed

- The config is now required:
	- `eslint` version `9.39.2` or higher.
	- `node.js` version `20.19.0` or higher.
- Imports and re-exports are now grouped and sorted (with autofix).
- Settings changed for the following rules:
	- `@stylistic/brace-style`
	- `@stylistic/no-multiple-empty-lines`
	- `@stylistic/operator-linebreak`
	- `@stylistic/padding-line-between-statements`
- Settings added for the following rules:
	- `@stylistic/curly-newline`
	- `@stylistic/indent-binary-ops`
	- `@stylistic/member-delimiter-style`
	- `@stylistic/no-confusing-arrow`
	- `@stylistic/one-var-declaration-per-line`
	- `@stylistic/type-annotation-spacing`
	- `@stylistic/type-generic-spacing`
	- `@stylistic/type-named-tuple-spacing`
	- `enough-is-enough/no-multiline-named-imports`
	- `enough-is-enough/no-single-quotes-in-imports-and-object-keys`

## [5.0.0] — 2024–11–16

### Changed

- The config is now required `eslint` version `9.15` or higher and `node.js` version `20.13` or higher except version `21`.
- Import sorting has been removed. Use editor customization instead (available in vscode and zed).

## [4.0.0] — 2024–10–30

### Changed

- The config is now required `eslint` version `9.13` or higher and `node.js` version `20.12` or higher except version `21`.

## [3.0.1] — 2024–08–19

### Fixed

- Type definitions have now been added to the package.

## [3.0.0] — 2024–08–18

### Changed

- `const` bindings are now only allowed at the top level of the module’s scope, so that it can represent a value that is a true, dependency-free constant such as `π`, `ℯ`, etc…

## [2.2.0] — 2024–08–14

### Added

- Irregular whitespaces are no longer prohibited. That's for sure now 🤭

## [2.1.0] — 2024–08–14

### Added

- Irregular whitespaces are no longer prohibited.

## [2.0.0] — 2024–05–26

### Changed

- Multiline comments (except jsDoc) should now be sequences of single-line comments.

### Fixed

- Irregular whitespaces are now allowed in comments, regular expressions, strings, template literals, and JSX-like text.

## [1.0.0] — 2024–05–06

### Added

- Base config for `eslint` without using `globals`, but with its re-export.

[Unreleased]: https://github.com/firefoxic/eslint-config/compare/v8.0.1...HEAD
[8.0.1]: https://github.com/firefoxic/eslint-config/compare/v8.0.0...v8.0.1
[8.0.0]: https://github.com/firefoxic/eslint-config/compare/v7.0.0...v8.0.0
[7.0.0]: https://github.com/firefoxic/eslint-config/compare/v6.0.1...v7.0.0
[6.0.1]: https://github.com/firefoxic/eslint-config/compare/v6.0.0...v6.0.1
[6.0.0]: https://github.com/firefoxic/eslint-config/compare/v5.0.0...v6.0.0
[5.0.0]: https://github.com/firefoxic/eslint-config/compare/v4.0.0...v5.0.0
[4.0.0]: https://github.com/firefoxic/eslint-config/compare/v3.0.1...v4.0.0
[3.0.1]: https://github.com/firefoxic/eslint-config/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/firefoxic/eslint-config/compare/v2.2.0...v3.0.0
[2.2.0]: https://github.com/firefoxic/eslint-config/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/firefoxic/eslint-config/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/firefoxic/eslint-config/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/firefoxic/eslint-config/releases/tag/v1.0.0
