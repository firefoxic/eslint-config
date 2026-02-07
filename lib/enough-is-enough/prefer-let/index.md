# prefer-let

An eslint plugin to encourage semantic of usage of `let` and `const`.

Things being basically equal, code should speak to humans first, and computers second. As such, JavaScript codebases should follow the long-standing conventions set forth by both formal symbolic logic and the practice of functional programming.

Usage of the `const` keyword to bind an _intermediate_ value of a computation places emphasis on the compiler and its role in ensuring that a _reference_ never changes. By contrast using `let` in the same situation reads, in plain English, the programmer's intent to declare a name value binding.

It is this plugin's opinion that preventing reassignment of `let` bindings is better accomplished as a linting rule.

`const` bindings _are_ allowed at the top-level of a module's scope so that it can represent a value that is a true, dependency-free constant such as `π`, `ℯ`, etc...

Good:

``` js
const PI = 3.14

function area(radius) {
	let r2 = radius * radius

	return PI * r2
}

```

Bad:

``` js
function volume(radius) {
	const a = area(radius)

	return a * radius / 2
}

```

## Possible Conflicts

This plugin may conflict with other plugins or configs that set `eslint prefer-const`. You can configure the rules to avoid this:

```json
{
	"rules": {
		"enough-is-enough/prefer-let": "error",
		"prefer-const": "off"
	}
}
```
