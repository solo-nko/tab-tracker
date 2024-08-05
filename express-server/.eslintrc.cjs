/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	'extends': [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
		'@vue/eslint-config-prettier/skip-formatting'
	],
	parserOptions: {
		ecmaVersion: 'latest'
	},
	'rules': {
		'indent': ['warn', 'tab'],
		'semi': ['warn', 'always'],
		'no-unused-vars': 'warn',
		'@typescript-eslint/no-unused-vars': 'off',
		'vue/no-unused-components': 'warn',
		'vue/html-indent': ['warn', 'tab'],
		'vue/v-on-style': ['warn', 'longform'],
		'vue/v-bind-style': ['warn', 'longform']
	}
};
