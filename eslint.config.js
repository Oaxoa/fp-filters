import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import PluginImport from 'eslint-plugin-import';
import treeShaking from 'eslint-plugin-tree-shaking';
import tseslint from 'typescript-eslint';

export default [
	{
		ignores: ['coverage/', 'dist/', 'assets/', '.github/', 'node_modules/', 'docs/'],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier,
	{
		plugins: {
			import: PluginImport, // map the name "import" to the imported module
			'tree-shaking': treeShaking,
		},
		rules: {
			'import/no-unresolved': 'off',
			'@typescript-eslint/ban-types': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
];
