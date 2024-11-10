import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import PluginImport from 'eslint-plugin-import';

export default [
	{
		ignores: ['coverage/', 'dist/', 'assets/', '.github/', 'node_modules/'],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier,
	{
		plugins: { import: PluginImport },
		rules: {
			'import/no-unresolved': 'off',
			'@typescript-eslint/ban-types': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
];
