/* eslint-env node */

module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:import/errors',
		'plugin:import/warnings',
		'eslint:recommended',
		'prettier',
		'plugin:prettier/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/jsx-runtime',
		'plugin:import/recommended',
		'plugin:jsx-a11y/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		react: { version: 'detect' },
		'import/extensions': ['.js', '.jsx'],
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.json'],
				paths: ['src'],
			},
			alias: {
				extensions: ['.js', '.jsx', '.json'],
				map: [['@react-three/fiber', './packages/fiber/src/web']],
			},
		},
		'import/ignore': ['\\.coffee$', '\\.(scss|less|css)$'],
		'import/core-modules': ['electron'],
	},
	plugins: ['react', 'react-hooks', 'prettier', 'import', 'react-refresh'],
	rules: {
		quotes: [
			'error',
			'single',
			{ allowTemplateLiterals: true, avoidEscape: true },
		],
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		semi: ['error', 'never'],
		curly: ['warn', 'multi-line', 'consistent'],
		'no-duplicate-imports': 'error',
		'no-empty-pattern': 'warn',
		'import/no-unresolved': 'off',
		'import/export': 'error',
		'import/named': 'off',
		'import/namespace': 'off',
		'no-eval': 'error',
		'no-unsafe-negation': 'error',
		'default-case': 'warn',
		'no-unused-vars': [
			'warn',
			{ vars: 'all', args: 'after-used', ignoreRestSiblings: false },
		],

		eqeqeq: ['error', 'always'],
		'import/order': [
			'error',
			{
				'newlines-between': 'never',
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
			},
		],
		'import/no-default-export': 'error',
		'import/no-self-import': 'error',
		'import/no-cycle': 'error',
		'import/no-useless-path-segments': 'error',
		'import/no-relative-parent-imports': 'error',
		'import/no-duplicates': 'error',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
}

// {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin:react/recommended"
//     ],
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react"
//     ],
//     "rules": {
//         "indent": [
//             "error",
//             "tab"
//         ],
//         "linebreak-style": [
//             "error",
//             "unix"
//         ],
//         "quotes": [
//             "error",
//             "single"
//         ],
//         "semi": [
//             "error",
//             "never"
//         ]
//     }
// }

// Default config:
// /* eslint-env node */

// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:react-hooks/recommended',
//   ],
//   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//   settings: { react: { version: '18.2' } },
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }
