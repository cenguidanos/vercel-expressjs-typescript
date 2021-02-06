module.exports = {
	// Specifies the ESLint parser
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended'
	],
	env: {
		node: true,
		es6: true
	},
	plugins: ['@typescript-eslint', 'prettier'],
	parserOptions: {
		// Allows for the parsing of modern ECMAScript features
		ecmaVersion: 2020,
		// Allows for the use of imports
		sourceType: 'module'
	},
	rules: {
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'prettier/prettier': 'error',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off'
	},
	globals: { React: 'writable' }
}
