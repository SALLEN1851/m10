// src/theme/tailwind.config.js
import { fileURLToPath } from 'url';

const componentsDir = fileURLToPath(new URL('./components', import.meta.url));
const templatesDir = fileURLToPath(new URL('./templates', import.meta.url));

export default {
  content: [
    `${componentsDir}/**/*.{js,ts,jsx,tsx}`,
    `${templatesDir}/**/*.{html,hubl}`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};