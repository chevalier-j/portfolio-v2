# ToDo:

-  Migrate to gatsby/ts:

# Initial Setup:

-  install:
   create directory portfolio-v2
   cd portfolio-v2
   npm create vite@latest ./ -- --template react

   npm install @react-three/fiber @react-three/drei maath
   @react-three/postprocessing
   react-parallax-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-router-dom
   npm install three

git init
create github repo and link it with local

-  Development dependencies
   <!-- postcss and autoprefixer are needed when using tailwind in a react env -->
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm install -D prettier
   npm install -D eslint-plugin-prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-import-resolver-alias eslint-plugin-jsx-a11y prettier-plugin-tailwindcss

delete current public directory AND the assets directory, then:
add the files to the public folder (careful if using gastby, as its best not to use the public folder to allow for gatsby's image optimisation)
Paste the assets

delete app.css

### Test

Remove all unnecessary content from app.js and just add an h1 with "hi" to test

delete and paste css from index.css from tutorial

paste styles.css in src/ from tutorial

paste motion.js

paste constant file index.js

-  Change colors to new theme
-  Customise text for experience, skills etc on constant file
-  Replace 3D model

# research these things:

React Refresh with Vite
(since eslint-plugin-react-refresh is installed....)

refactor navbar, applying DRY (in links for example)

# things to look into:

## src/index.css

#### @tailwind base;

#### @tailwind components;

#### @tailwind utilities;

### warning:

Unknown at rule @tailwindcss(unknownAtRules)

#### -webkit-background-clip

### warning:

Also define the standard property 'background-clip' for compatibilitycss(vendorPrefix)
