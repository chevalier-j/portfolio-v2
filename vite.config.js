import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// eslint-disable-next-line import/no-default-export
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@assets': '/src/assets',
			'@styles': '/src/styles',
			'@constants': '/src/constants',
			'@common': '/src/components/common',
		},
	},
})
