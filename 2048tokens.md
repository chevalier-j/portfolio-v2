### Chatgpt. Message 1: Project description.

Portfolio v2: my software developer portfolio website. This message defines our structure. In the following messages you will get more information about what has been built so far, and from that we will continue building.

## Contents of package.json so you know what we are using:

"dependencies": {
"@emailjs/browser": "^3.11.0",
"@react-three/drei": "^9.79.3",
"@react-three/fiber": "^8.13.5",
"@react-three/postprocessing": "^2.15.0",
"framer-motion": "^10.13.0",
"maath": "^0.7.0",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-parallax-tilt": "^1.7.154",
"react-router-dom": "^6.14.2",
"react-vertical-timeline-component": "^3.6.0",
"three": "^0.154.0"
},
"devDependencies": {
"@types/react": "^18.2.14",
"@types/react-dom": "^18.2.6",
"@vitejs/plugin-react": "^4.0.1",
"autoprefixer": "^10.4.14",
"eslint": "^8.44.0",
"eslint-config-prettier": "^8.8.0",
"eslint-import-resolver-alias": "^1.1.2",
"eslint-plugin-import": "^2.27.5",
"eslint-plugin-jsx-a11y": "^6.7.1",
"eslint-plugin-prettier": "^5.0.0",
"eslint-plugin-react": "^7.32.2",
"eslint-plugin-react-hooks": "^4.6.0",
"eslint-plugin-react-refresh": "^0.4.3",
"postcss": "^8.4.27",
"prettier": "^3.0.0",
"prettier-plugin-tailwindcss": "^0.4.1",
"tailwindcss": "^3.3.3",
"vite": "^4.4.0"
}

## Important file locations:

tailwind.config.js
vite.config.js
index.html
src/styles.js
src/main.jsx
src/main.css
src/app.jsx
src/styles.js
src/constants/index.js
src/utils/section.jsx
src/utils/motion.js
src/utils/index.js
src/components/common/navbar.jsx
src/components/common/loader.jsx
src/components/canvas/stars.jsx
src/components/canvas/planet.jsx
src/components/canvas/computer.jsx
src/components/home/projects.jsx
src/components/home/hero.jsx
src/components/home/experience.jsx
src/components/home/contact.jsx
src/components/home/about.jsx

# vite.config.js

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

# /tailwind.config.js

/** @type {import('tailwindcss').Config} _/
/_ eslint-disable import/no-default-export \*/
// module.exports = {
export default {
content: ['./src/**/_.{js,jsx}'],
mode: 'jit',
theme: {
extend: {
colors: {
// Idea: Apply the 60/30/10 rule from interior design
brand: '#ed1703',
// Monochromatic colors
'mono-0': '#F8F9FA',
'mono-1': '#E9ECEF',
'mono-2': '#DEE2E6',
'mono-3': '#CED4DA',
'mono-4': '#ADB5BD',
'mono-5': '#6C757D',
'mono-6': '#495057',
'mono-7': '#343A40',
'mono-8': '#212529',
'mono-9': '#0B0B0B',
// Sunset colors:
myblue: '#2B3E67',
mypink: '#AD5262',
mywine: '#67383D',
mypurple: '#100C23',
myorange: '#F98637',
myred: '#CF411A',
// Previous Tailwind colors
/_ Primary color: This is where the user’s attention goes. Calls-to-action, buttons, and any other important information should utilize the primary color. Red: #ed1703
Default Tailwind primary: '#050816' _/
primary: '#050816',
/_ Secondary color: The secondary colors are used to highlight less important elements. Secondary action buttons, less important text, and anything else that doesn’t need immediate attention should be presented in a secondary color.
Default Tailwind secondary: '#aaa6c3' _/
secondary: '#aaa6c3',
/_ Tertiary/Neutral color: The tertiary colors are used for backgrounds and borders. Tertiary action buttons, less important text, and anything else that doesn’t need immediate attention should be presented in a tertiary color.
Default Tailwind tertiary: '#151030' \*/
tertiary: '#151030',
'black-100': '#100d25',
'black-200': '#090325',
'white-100': '#f3f3f3',
},
boxShadow: {
card: '0px 35px 120px -15px #211e35',
},
screens: {
xs: '450px',
},
backgroundImage: {
// 'hero-pattern': "url('/src/assets/herobg.png')",
// 'hero-pattern': "url('/src/assets/nasa.jpg')",
},
},
},
plugins: [],
}

# /index.html

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./src/assets/fav_red.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chevalier | Software Engineer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

# /main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<App />
</React.StrictMode>
)

# Chatgpt: Message 2. More important files.

// path: src/utils/index.js
import { SectionWrapper } from './section'

export { SectionWrapper }
