declare module '@firefoxic/eslint-config' {
	import { Linter } from 'eslint';

	export let globals: any;
	let firefoxicEslintConfig: Linter.Config;
	export default firefoxicEslintConfig;
}
