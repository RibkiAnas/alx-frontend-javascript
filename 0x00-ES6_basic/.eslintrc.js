module.exports = {
	env: {
		es6: true,
		jest: true,
		browser: true,
	},
	extends: 'airbnb-base',
	overrides: [
		{
			files: ['*.js'],
			excludedFiles: 'babel.config.js',
		},
	],
	parserOptions: {
		ecmaVersion: '2018',
		sourceType: 'module',
	},
	rules: {},
};
