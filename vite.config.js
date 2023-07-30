/*
 * path: /vite.config.js
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@test': '/src/components/common/test',
			'@assets': '/src/assets',
			'@styles': '/src/styles.js',
			'@constants': '/src/constants',
			'@utils': '/src/utils',
			'@common': '/src/components/common',
			'@canvas': '/src/components/canvas',
			'@home': '/src/components/home',
			'@public:': '/public',
		},
	},
})
