<!-- markdownlint-disable MD024 -->
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com), and this project adheres to [Semantic Versioning](https://semver.org).

## [Unreleased]

### Changed

- Multiline comments (except jsDoc) should now be sequences of single-line comments.

### Fixed

- Irregular whitespaces are now allowed in comments, regular expressions, strings, template literals, and JSX-like text.

## [1.0.0] — 2024–05–06

### Added

- Base config for `eslint` without using `globals`, but with its re-export.

[Unreleased]: https://github.com/firefoxic/codeguide/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/firefoxic/codeguide/releases/tag/v1.0.0
