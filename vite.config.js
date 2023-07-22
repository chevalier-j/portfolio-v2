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
			'@common': '/src/components/common',
		},
	},
})
